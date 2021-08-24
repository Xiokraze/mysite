import { Switch, Route } from "react-router-dom";
import React, { Suspense, useState } from "react";
import ActivityIndicator from "./Components/ActivityIndicator/ActivityIndicator";
import HeaderNavBar from "./Components/HeaderNavBar/HeaderNavBar";
import HomePage from "./Components/SitePages/HomePage";
import ProfessionalPage from "./Components/SitePages/Professional/ProfessionalPage";
import PersonalPage from "./Components/SitePages/Personal/PersonalPage";
import Footer from "./Components/Footer/Footer";
import LoadingCode from "./Components/UIElements/LoadingCode";

function App() {
  const [animationClass, setAnimationClass] = useState("hide");
  const [loadingAnimationRunning, setLoadingAnimationRunning] = useState(false);

  const loadingSlideLeftAnimation = () => {
    setAnimationClass("loadingDivShow");
    setLoadingAnimationRunning(true);
  };

  const loadingSlideRightAnimation = () => {
    setAnimationClass("loadingDivHide");
  };

  const loadingSlideRightAnimationComplete = () => {
    setLoadingAnimationRunning(false);
  };

  return (
    <React.Fragment>
      <Suspense fallback={<ActivityIndicator />}>
        <LoadingCode
          animationClass={animationClass}
          hideAnimation={loadingSlideRightAnimation}
          loadingSlideRightAnimationComplete={
            loadingSlideRightAnimationComplete
          }
        />
        <HeaderNavBar
          loadingSlideLeftAnimation={loadingSlideLeftAnimation}
          loadingAnimationRunning={loadingAnimationRunning}
        />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/professional" exact>
            <ProfessionalPage />
          </Route>
          <Route path="/personal" exact>
            <PersonalPage />
          </Route>
        </Switch>
        <Footer />
      </Suspense>
    </React.Fragment>
  );
}

export default App;
