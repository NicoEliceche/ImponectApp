const createRouteLoader = (importer, exportName) => () => (
  importer().then(module => ({ default: module[exportName] }))
);

const routeLoaders = {
  '/': createRouteLoader(() => import('../../features/dashboard/screens/HomeScreen'), 'HomeScreen'),
  '/ai-hub': createRouteLoader(() => import('../../features/ai-hub/screens/AIHubScreen'), 'AIHubScreen'),
  '/crm': createRouteLoader(() => import('../../features/crm/screens/CRMScreen'), 'CRMScreen'),
  '/quotes': createRouteLoader(() => import('../../features/quotes/screens/QuotesScreen'), 'QuotesScreen'),
  '/cotizador': createRouteLoader(() => import('../../features/cotizador/screens/CotizadorScreen'), 'CotizadorScreen'),
  '/business': createRouteLoader(() => import('../../features/business/screens/BusinessScreen'), 'BusinessScreen'),
  '/catalog': createRouteLoader(() => import('../../features/catalog/screens/CatalogScreen'), 'CatalogScreen'),
  '/documents': createRouteLoader(() => import('../../features/documents/screens/DocumentsScreen'), 'DocumentsScreen'),
  '/email': createRouteLoader(() => import('../../features/email/screens/EmailScreen'), 'EmailScreen'),
  '/logs': createRouteLoader(() => import('../../features/logs/screens/LogsScreen'), 'LogsScreen'),
  '/clickup-portal': createRouteLoader(() => import('../../features/clickup-portal/screens/ClickUpPortalScreen'), 'ClickUpPortalScreen'),
};

const preloadCache = new Map();

export const normalizeRoutePath = (path = '/') => {
  const normalizedPath = path.split('?')[0].replace(/\/$/, '') || '/';

  if (normalizedPath.startsWith('/documents/')) return '/documents';

  return normalizedPath;
};

export const preloadRoute = (path) => {
  const normalizedPath = normalizeRoutePath(path);
  const loader = routeLoaders[normalizedPath];

  if (!loader) return Promise.resolve(null);
  if (!preloadCache.has(normalizedPath)) {
    preloadCache.set(
      normalizedPath,
      loader().catch(error => {
        preloadCache.delete(normalizedPath);
        throw error;
      })
    );
  }

  return preloadCache.get(normalizedPath);
};

export const scheduleRoutePreloads = (paths = [
  '/',
  '/cotizador',
  '/quotes',
  '/crm',
  '/email',
  '/documents',
  '/ai-hub',
  '/business',
  '/catalog',
]) => {
  if (typeof window === 'undefined') return () => {};

  const cleanupTasks = [];

  paths.forEach((path, index) => {
    const timeoutId = window.setTimeout(() => {
      if ('requestIdleCallback' in window) {
        const idleId = window.requestIdleCallback(() => {
          preloadRoute(path).catch(() => undefined);
        }, { timeout: 1800 });
        cleanupTasks.push(() => window.cancelIdleCallback(idleId));
        return;
      }

      preloadRoute(path).catch(() => undefined);
    }, 450 + (index * 180));

    cleanupTasks.push(() => window.clearTimeout(timeoutId));
  });

  return () => {
    cleanupTasks.forEach(cleanup => cleanup());
  };
};
