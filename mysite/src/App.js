import { Switch, Route } from "react-router-dom";
import React, { Suspense } from "react";
import ActivityIndicator from "./Components/ActivityIndicator/ActivityIndicator";
import HeaderNavBar from "./Components/HeaderNavBar/HeaderNavBar";
import HomePage from "./Components/SitePages/HomePage";
import ProfessionalPage from "./Components/SitePages/ProfessionalPage";
import PersonalPage from "./Components/SitePages/PersonalPage";

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<ActivityIndicator />}>
        <HeaderNavBar />
        <Switch>
          <Route path="/" exact><HomePage/></Route>
          <Route path="/professional" exact><ProfessionalPage/></Route>
          <Route path="/personal" exact><PersonalPage/></Route>
        </Switch>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
