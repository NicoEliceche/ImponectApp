import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import { useAuth } from './app/stores/authStore';

const HomeScreen = lazy(() => import('./features/dashboard').then(module => ({ default: module.HomeScreen })));
const AIHubScreen = lazy(() => import('./features/ai-hub').then(module => ({ default: module.AIHubScreen })));
const CRMScreen = lazy(() => import('./features/crm').then(module => ({ default: module.CRMScreen })));
const QuotesScreen = lazy(() => import('./features/quotes').then(module => ({ default: module.QuotesScreen })));
const CotizadorScreen = lazy(() => import('./features/cotizador').then(module => ({ default: module.CotizadorScreen })));
const BusinessScreen = lazy(() => import('./features/business').then(module => ({ default: module.BusinessScreen })));
const CatalogScreen = lazy(() => import('./features/catalog').then(module => ({ default: module.CatalogScreen })));
const DocumentsScreen = lazy(() => import('./features/documents').then(module => ({ default: module.DocumentsScreen })));
const EmailScreen = lazy(() => import('./features/email').then(module => ({ default: module.EmailScreen })));
const ClickUpPortalScreen = lazy(() => import('./features/clickup-portal').then(module => ({ default: module.ClickUpPortalScreen })));

const RouteFallback = () => (
  <div className="flex items-center justify-center min-h-[18rem]">
    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600" />
  </div>
);

const lazyRoute = (Component) => (
  <Suspense fallback={<RouteFallback />}>
    <Component />
  </Suspense>
);

function App() {
  const checkConnections = useAuth(state => state.checkConnections);

  useEffect(() => {
    checkConnections();
  }, [checkConnections]);

  return (
    <Router>
      <Routes>
        <Route path="/clickup-portal" element={lazyRoute(ClickUpPortalScreen)} />
        <Route element={<MainLayout />}>
          <Route path="/" element={lazyRoute(HomeScreen)} />
          <Route path="/ai-hub" element={lazyRoute(AIHubScreen)} />
          <Route path="/crm" element={lazyRoute(CRMScreen)} />
          <Route path="/quotes" element={lazyRoute(QuotesScreen)} />
          <Route path="/cotizador" element={lazyRoute(CotizadorScreen)} />
          <Route path="/business" element={lazyRoute(BusinessScreen)} />
          <Route path="/documents" element={lazyRoute(DocumentsScreen)} />
          <Route path="/documents/:folderId" element={lazyRoute(DocumentsScreen)} />
          <Route path="/email" element={lazyRoute(EmailScreen)} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App;
