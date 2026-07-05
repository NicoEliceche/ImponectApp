const normalizeBase = (value = '') => value.replace(/\/+$/, '')

export const publicAsset = (path) => {
  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  const normalizedPath = String(path || '').replace(/^\/+/, '')

  return `${normalizedBase}${normalizedPath}`
}

export const apiUrl = (path) => {
  const apiBaseUrl = normalizeBase(import.meta.env.VITE_API_BASE_URL || '')
  const normalizedPath = String(path || '').startsWith('/') ? path : `/${path}`

  return `${apiBaseUrl}${normalizedPath}`
}
