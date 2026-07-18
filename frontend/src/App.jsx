import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import { useAuth } from './app/stores/authStore';
import { RouteSkeleton } from './shared/components/RouteSkeleton';
import { initClientLogging } from './shared/utils/clientLogger';
import { preloadRoute, scheduleRoutePreloads } from './shared/utils/routePreload';

const createLazyRoute = (path) => lazy(() => preloadRoute(path));

const HomeScreen = createLazyRoute('/');
const AIHubScreen = createLazyRoute('/ai-hub');
const CRMScreen = createLazyRoute('/crm');
const QuotesScreen = createLazyRoute('/quotes');
const CotizadorScreen = createLazyRoute('/cotizador');
const BusinessScreen = createLazyRoute('/business');
const CatalogScreen = createLazyRoute('/catalog');
const DocumentsScreen = createLazyRoute('/documents');
const EmailScreen = createLazyRoute('/email');
const ClickUpPortalScreen = createLazyRoute('/clickup-portal');
const LogsScreen = createLazyRoute('/logs');

const lazyRoute = (Component) => (
  <Suspense fallback={<RouteSkeleton />}>
    <Component />
  </Suspense>
);

const routerBasename = import.meta.env.BASE_URL === '/'
  ? undefined
  : import.meta.env.BASE_URL.replace(/\/$/, '');

function App() {
  const checkConnections = useAuth(state => state.checkConnections);

  useEffect(() => {
    initClientLogging();
  }, []);

  useEffect(() => {
    checkConnections();
  }, [checkConnections]);

  useEffect(() => scheduleRoutePreloads(), []);

  return (
    <Router basename={routerBasename}>
      <Routes>
        <Route path="/clickup-portal" element={lazyRoute(ClickUpPortalScreen)} />
        <Route element={<MainLayout />}>
          <Route path="/" element={lazyRoute(HomeScreen)} />
          <Route path="/ai-hub" element={lazyRoute(AIHubScreen)} />
          <Route path="/crm" element={lazyRoute(CRMScreen)} />
          <Route path="/quotes" element={lazyRoute(QuotesScreen)} />
          <Route path="/cotizador" element={lazyRoute(CotizadorScreen)} />
          <Route path="/business" element={lazyRoute(BusinessScreen)} />
          <Route path="/catalog" element={lazyRoute(CatalogScreen)} />
          <Route path="/documents" element={lazyRoute(DocumentsScreen)} />
          <Route path="/documents/:folderId" element={lazyRoute(DocumentsScreen)} />
          <Route path="/email" element={lazyRoute(EmailScreen)} />
          <Route path="/logs" element={lazyRoute(LogsScreen)} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App;
