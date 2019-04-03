import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
const MemberList = React.lazy(() => import('./pages/MemberList'));

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Home} />
          <Route path="/memberList" component={MemberList} />
        </React.Suspense>
      </MainLayout>
    </Router>
  );
};

export default App;
