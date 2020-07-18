import React from 'react';
import NavbarWrapper from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route, Redirect, useHistory} from "react-router-dom";
import HomePage from "./pages/Home";
import PageWrapper from "./components/page/PageWrapper";


function App() {
  return (
      <PageWrapper>
          <NavbarWrapper/>
          <HomePage/>
      </PageWrapper>
  );
}



export default App;
