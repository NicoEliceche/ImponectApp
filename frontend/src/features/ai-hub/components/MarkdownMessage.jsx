import React, { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import cpp from 'highlight.js/lib/languages/cpp';
import csharp from 'highlight.js/lib/languages/csharp';
import css from 'highlight.js/lib/languages/css';
import dockerfile from 'highlight.js/lib/languages/dockerfile';
import go from 'highlight.js/lib/languages/go';
import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import markdown from 'highlight.js/lib/languages/markdown';
import php from 'highlight.js/lib/languages/php';
import powershell from 'highlight.js/lib/languages/powershell';
import python from 'highlight.js/lib/languages/python';
import ruby from 'highlight.js/lib/languages/ruby';
import sql from 'highlight.js/lib/languages/sql';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { IconBrandCopy, IconCheck } from '../../../shared/components/Icons';
import * as S from '../screens/AIHubScreenStyled';

[
  ['bash', bash],
  ['cpp', cpp],
  ['csharp', csharp],
  ['css', css],
  ['dockerfile', dockerfile],
  ['go', go],
  ['java', java],
  ['javascript', javascript],
  ['json', json],
  ['markdown', markdown],
  ['php', php],
  ['powershell', powershell],
  ['python', python],
  ['ruby', ruby],
  ['sql', sql],
  ['typescript', typescript],
  ['xml', xml],
  ['yaml', yaml],
].forEach(([name, language]) => {
  if (!hljs.getLanguage(name)) hljs.registerLanguage(name, language);
});

const HIGHLIGHT_LANGUAGE_ALIASES = {
  c: 'cpp',
  'c++': 'cpp',
  cs: 'csharp',
  'c#': 'csharp',
  docker: 'dockerfile',
  html: 'xml',
  js: 'javascript',
  jsx: 'javascript',
  md: 'markdown',
  ps1: 'powershell',
  py: 'python',
  sh: 'bash',
  shell: 'bash',
  ts: 'typescript',
  tsx: 'typescript',
  yml: 'yaml',
};

const markdownPlugins = [remarkGfm];

const getCodeLanguage = (className = '') => {
  const match = /language-([\w-]+)/i.exec(className);
  if (!match?.[1]) return 'Codigo';
  return match[1].replace(/-/g, ' ').toUpperCase();
};

const getHighlightLanguage = (className = '') => {
  const match = /language-([\w+#-]+)/i.exec(className);
  const rawLanguage = String(match?.[1] || '').toLowerCase();
  return HIGHLIGHT_LANGUAGE_ALIASES[rawLanguage] || rawLanguage;
};

const highlightCode = (codeValue, className = '') => {
  const language = getHighlightLanguage(className);

  if (language && hljs.getLanguage(language)) {
    return hljs.highlight(codeValue, { language, ignoreIllegals: true }).value;
  }

  return hljs.highlightAuto(codeValue).value;
};

const copyToClipboard = async (value) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textArea = document.createElement('textarea');
  textArea.value = value;
  textArea.setAttribute('readonly', '');
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
};

const stringifyCodeChildren = (value) => {
  if (Array.isArray(value)) return value.join('');
  return String(value || '');
};

const MarkdownInlineCode = ({ className, children, node: _node, ...props }) => (
  <code className={className} {...props}>{children}</code>
);

const MarkdownCodeBlock = ({ children }) => {
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef(null);
  const codeChild = React.Children.toArray(children).find(child => React.isValidElement(child));
  const codeClassName = codeChild?.props?.className || '';
  const codeValue = stringifyCodeChildren(codeChild?.props?.children).replace(/\n$/, '');
  const language = getCodeLanguage(codeClassName);
  const highlightedCode = highlightCode(codeValue, codeClassName);

  useEffect(() => () => {
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
  }, []);

  const handleCopyCode = async () => {
    try {
      await copyToClipboard(codeValue);
      setCopied(true);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(() => setCopied(false), 1400);
    } catch (error) {
      console.error('No se pudo copiar el bloque de codigo', error);
    }
  };

  return (
    <S.MarkdownCodeBlock>
      <S.MarkdownCodeHeader>
        <S.MarkdownCodeLanguage>{language}</S.MarkdownCodeLanguage>
        <S.MarkdownCopyButton type="button" onClick={handleCopyCode} aria-label="Copiar codigo">
          {copied ? <IconCheck /> : <IconBrandCopy />}
          {copied ? 'Copiado' : 'Copiar'}
        </S.MarkdownCopyButton>
      </S.MarkdownCodeHeader>
      <S.MarkdownCodePre>
        <code className={codeClassName} dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </S.MarkdownCodePre>
    </S.MarkdownCodeBlock>
  );
};

const markdownComponents = {
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
  code: MarkdownInlineCode,
  pre: MarkdownCodeBlock,
};

export const MarkdownMessage = ({ content }) => (
  <ReactMarkdown remarkPlugins={markdownPlugins} components={markdownComponents}>
    {content || ''}
  </ReactMarkdown>
);
