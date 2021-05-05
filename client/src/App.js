import React from 'react';
import './index.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PageWrapper from './components/PageWrapper/PageWrapper';
import Homepage from './pages/Homepage/Homepage';
import Swipes from './pages/Swipes/Swipes';



function App() {
  return (
    <Router>
      <div>
        <PageWrapper>
          <Switch>
            <Route exact path={["/", "/Homepage"]} component={Homepage} />
            <Route exact path={"/swipes"} component={Swipes}/>
          </Switch>
        </PageWrapper>
        
      </div>
     </Router>
  );
}

export default App;
