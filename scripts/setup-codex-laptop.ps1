[CmdletBinding()]
param(
    [string]$WorkspaceRoot = 'C:\Workspaces',
    [string]$BlockchainRepoUrl = 'git@github.com:NicoEliceche/Blockchain-Vulnerabilities-Reports.git',
    [string]$BlockchainRepoName = 'Blockchain-Vulnerabilities-Reports',
    [string]$ProfilePath = $PROFILE.CurrentUserCurrentHost,
    [string]$CodexHome = (Join-Path $HOME '.codex'),
    [switch]$SkipExtensionInstall
)

$ErrorActionPreference = 'Stop'

function Require-Command {
    param([Parameter(Mandatory)][string]$Name)

    if (-not (Get-Command $Name -ErrorAction SilentlyContinue)) {
        throw "Required command '$Name' was not found in PATH."
    }
}

function Escape-SingleQuotedPowerShellString {
    param([Parameter(Mandatory)][string]$Value)

    return $Value.Replace("'", "''")
}

function Set-MarkedProfileBlock {
    param(
        [Parameter(Mandatory)][string]$ProfilePath,
        [Parameter(Mandatory)][string]$Block
    )

    $profileDirectory = Split-Path -Parent $ProfilePath
    New-Item -ItemType Directory -Force -Path $profileDirectory | Out-Null

    $currentContent = if (Test-Path -LiteralPath $ProfilePath) {
        Get-Content -Raw -LiteralPath $ProfilePath
    } else {
        ''
    }

    $startMarker = '# >>> imponect codex commands >>>'
    $endMarker = '# <<< imponect codex commands <<<'
    $pattern = "(?s)$([regex]::Escape($startMarker)).*?$([regex]::Escape($endMarker))"
    $markedBlock = "$startMarker`r`n$Block`r`n$endMarker"

    if ($currentContent -match $pattern) {
        $nextContent = [regex]::Replace($currentContent, $pattern, $markedBlock)
    } else {
        $separator = if ([string]::IsNullOrWhiteSpace($currentContent)) { '' } else { "`r`n`r`n" }
        $nextContent = "$($currentContent.TrimEnd())$separator$markedBlock`r`n"
    }

    $nextContent = "$($nextContent.TrimEnd())`r`n"
    Set-Content -LiteralPath $ProfilePath -Value $nextContent -Encoding utf8 -NoNewline
}

function Add-TrustedCodexProject {
    param(
        [Parameter(Mandatory)][string]$ConfigPath,
        [Parameter(Mandatory)][string]$ProjectPath
    )

    $configDirectory = Split-Path -Parent $ConfigPath
    New-Item -ItemType Directory -Force -Path $configDirectory | Out-Null

    $content = if (Test-Path -LiteralPath $ConfigPath) {
        Get-Content -Raw -LiteralPath $ConfigPath
    } else {
        ''
    }

    $normalizedPath = [System.IO.Path]::GetFullPath($ProjectPath).TrimEnd([char[]]@('\', '/')).ToLowerInvariant()
    $escapedPath = $normalizedPath.Replace("'", "''")
    $header = "[projects.'$escapedPath']"

    if ($content -notmatch [regex]::Escape($header)) {
        $separator = if ([string]::IsNullOrWhiteSpace($content)) { '' } else { "`r`n`r`n" }
        $content = "$($content.TrimEnd())$separator$header`r`ntrust_level = `"trusted`"`r`n"
        Set-Content -LiteralPath $ConfigPath -Value $content -Encoding utf8
    }
}

function Get-GitRepositoryRoots {
    param([Parameter(Mandatory)][string]$RootPath)

    Get-ChildItem -LiteralPath $RootPath -Force -Recurse -Filter '.git' -ErrorAction SilentlyContinue |
        ForEach-Object { $PSItem.Parent.FullName } |
        Sort-Object -Unique
}

function Install-BundledCodexSkills {
    param(
        [Parameter(Mandatory)][string]$RepositoryRoot,
        [Parameter(Mandatory)][string]$TargetCodexHome
    )

    $bundledSkillsPath = Join-Path $RepositoryRoot 'codex\skills'
    if (-not (Test-Path -LiteralPath $bundledSkillsPath)) {
        return
    }

    $targetSkillsPath = Join-Path $TargetCodexHome 'skills'
    New-Item -ItemType Directory -Force -Path $targetSkillsPath | Out-Null

    foreach ($skill in Get-ChildItem -LiteralPath $bundledSkillsPath -Directory) {
        $target = Join-Path $targetSkillsPath $skill.Name
        New-Item -ItemType Directory -Force -Path $target | Out-Null
        Get-ChildItem -LiteralPath $skill.FullName -Force | Copy-Item -Destination $target -Recurse -Force
        Write-Host "Installed Codex skill: $($skill.Name)"
    }
}

Require-Command git
Require-Command code

$repositoryRoot = Split-Path -Parent $PSScriptRoot
$blockchainRepoPath = Join-Path $WorkspaceRoot $BlockchainRepoName
New-Item -ItemType Directory -Force -Path $WorkspaceRoot | Out-Null

if (-not $SkipExtensionInstall) {
    Write-Host 'Installing or updating the OpenAI VS Code extension...'
    & code --install-extension openai.chatgpt --force
    if ($LASTEXITCODE -ne 0) {
        throw 'VS Code could not install the OpenAI extension.'
    }
}

if (-not (Test-Path -LiteralPath (Join-Path $blockchainRepoPath '.git'))) {
    if (Test-Path -LiteralPath $blockchainRepoPath) {
        throw "The target exists but is not a Git repository: $blockchainRepoPath"
    }

    Write-Host "Cloning Blockchain repository into $blockchainRepoPath..."
    & git clone $BlockchainRepoUrl $blockchainRepoPath
    if ($LASTEXITCODE -ne 0) {
        throw 'The Blockchain repository could not be cloned. Verify GitHub SSH access.'
    }
} else {
    Write-Host "Blockchain repository already exists: $blockchainRepoPath"
}

$escapedBlockchainPath = Escape-SingleQuotedPowerShellString $blockchainRepoPath
$escapedWorkspaceRoot = Escape-SingleQuotedPowerShellString $WorkspaceRoot
$profileBlock = @"
`$codexWorkspaceRoot = '$escapedWorkspaceRoot'

function Get-CodexExtensionExe {
    `$extensionRoot = Join-Path `$HOME '.vscode\extensions'
    if (Test-Path -LiteralPath `$extensionRoot) {
        foreach (`$dir in (Get-ChildItem -LiteralPath `$extensionRoot -Directory -ErrorAction SilentlyContinue | Where-Object { `$PSItem.Name -like 'openai.chatgpt-*-win32-x64' } | Sort-Object LastWriteTime -Descending)) {
            `$candidate = Join-Path `$dir.FullName 'bin\windows-x86_64\codex.exe'
            if (Test-Path -LiteralPath `$candidate) {
                return `$candidate
            }
        }
    }

    `$cmd = Get-Command codex.exe -CommandType Application -ErrorAction SilentlyContinue
    if (`$cmd) {
        return `$cmd.Source
    }

    throw 'codex.exe was not found in VS Code extensions or PATH.'
}

function Add-CodexTrustedProject {
    param([Parameter(Mandatory)][string]`$ProjectPath)

    `$normalizedPath = [System.IO.Path]::GetFullPath(`$ProjectPath).TrimEnd([char[]]@('\', '/')).ToLowerInvariant()
    `$configPath = Join-Path `$HOME '.codex\config.toml'
    `$configDirectory = Split-Path -Parent `$configPath
    New-Item -ItemType Directory -Force -Path `$configDirectory | Out-Null

    `$content = if (Test-Path -LiteralPath `$configPath) {
        Get-Content -Raw -LiteralPath `$configPath
    } else {
        ''
    }

    `$escapedPath = `$normalizedPath.Replace("'", "''")
    `$header = "[projects.'`$escapedPath']"
    if (`$content -notmatch [regex]::Escape(`$header)) {
        `$separator = if ([string]::IsNullOrWhiteSpace(`$content)) { '' } else { "``r``n``r``n" }
        `$nextContent = `$content.TrimEnd() + `$separator + `$header + "``r``ntrust_level = ``"trusted``"``r``n"
        Set-Content -LiteralPath `$configPath -Value `$nextContent -Encoding utf8
    }
}

function Add-CodexCurrentProjectTrust {
    `$currentPath = (Get-Location).ProviderPath
    if (-not `$currentPath) {
        return
    }

    `$workspacePath = [System.IO.Path]::GetFullPath(`$codexWorkspaceRoot).TrimEnd([char[]]@('\', '/'))
    `$candidatePath = [System.IO.Path]::GetFullPath(`$currentPath).TrimEnd([char[]]@('\', '/'))
    `$isWithinWorkspace = `$candidatePath.Equals(`$workspacePath, [System.StringComparison]::OrdinalIgnoreCase) -or
        `$candidatePath.StartsWith("`$workspacePath\", [System.StringComparison]::OrdinalIgnoreCase)
    if (-not `$isWithinWorkspace) {
        return
    }

    `$gitRoot = & git -C `$candidatePath rev-parse --show-toplevel 2>`$null
    `$projectPath = if (`$LASTEXITCODE -eq 0 -and `$gitRoot) {
        `$gitRoot | Select-Object -First 1
    } else {
        `$candidatePath
    }

    Add-CodexTrustedProject -ProjectPath `$projectPath
}

function codex {
    & (Get-CodexExtensionExe) --dangerously-bypass-approvals-and-sandbox -C '$escapedBlockchainPath' @args
}

function codex-here {
    Add-CodexCurrentProjectTrust
    & (Get-CodexExtensionExe) --dangerously-bypass-approvals-and-sandbox @args
}

function codex-raw {
    & (Get-CodexExtensionExe) @args
}
"@

Set-MarkedProfileBlock -ProfilePath $profilePath -Block $profileBlock

$codexConfigPath = Join-Path $CodexHome 'config.toml'
Add-TrustedCodexProject -ConfigPath $codexConfigPath -ProjectPath $WorkspaceRoot
Add-TrustedCodexProject -ConfigPath $codexConfigPath -ProjectPath $blockchainRepoPath
foreach ($repositoryPath in Get-GitRepositoryRoots -RootPath $WorkspaceRoot) {
    Add-TrustedCodexProject -ConfigPath $codexConfigPath -ProjectPath $repositoryPath
}
Install-BundledCodexSkills -RepositoryRoot $repositoryRoot -TargetCodexHome $CodexHome

. $profilePath
$codexVersion = & (Get-CodexExtensionExe) --version

Write-Host ''
Write-Host 'Codex laptop setup completed.'
Write-Host "PowerShell profile: $profilePath"
Write-Host "Blockchain repository: $blockchainRepoPath"
Write-Host "Codex version: $codexVersion"
Write-Host ''
Write-Host 'Open a new PowerShell window, authenticate Codex if requested, and run:'
Write-Host '  codex       # Opens the Blockchain repository'
Write-Host '  codex-here  # Opens the current directory'
Write-Host '  codex-raw   # Runs Codex with normal permission prompts'
