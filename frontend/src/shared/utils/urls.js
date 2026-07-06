const normalizeBase = (value = '') => value.replace(/\/+$/, '')

export const publicAsset = (path) => {
  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  const normalizedPath = String(path || '').replace(/^\/+/, '')

  return `${normalizedBase}${normalizedPath}`
}

export const getApiBaseUrl = () => normalizeBase(import.meta.env.VITE_API_BASE_URL || '')

export const apiUrl = (path) => {
  const apiBaseUrl = getApiBaseUrl()
  const normalizedPath = String(path || '').startsWith('/') ? path : `/${path}`

  return `${apiBaseUrl}${normalizedPath}`
}

export const getRuntimeDiagnostics = () => {
  const apiBaseUrl = getApiBaseUrl()
  const locationValue = typeof window === 'undefined' ? null : window.location

  return {
    baseUrl: import.meta.env.BASE_URL || '/',
    apiBaseUrl: apiBaseUrl || null,
    usesRelativeApi: !apiBaseUrl,
    href: locationValue?.href || null,
    origin: locationValue?.origin || null,
    hostname: locationValue?.hostname || null,
    isGithubPages: Boolean(locationValue?.hostname?.endsWith('github.io')),
  }
}
