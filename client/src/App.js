import React from 'react';
import './index.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import PageWrapper from './components/PageWrapper/PageWrapper';
import Homepage from './pages/Homepage/Homepage';
import ConsolePages from './pages/ConsolePage/ConsolePage';


function App() {
  return (
    <Router>
      <div>
        <PageWrapper>
          <Switch>
            <Route exact path={["/", "/Homepage"]} component={Homepage} />
            <Route exact path={"/ConsolePages"} component={ConsolePages} />
          </Switch>
        </PageWrapper>
        
      </div>
     </Router>
  );
}

export default App;
