import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import HighScorePage from "../../containers/highScorePage/HighScorePage";
import MainPage from "../../containers/mainPage/MainPage";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <nav>
        <ul>
          <li>
            <Link to="/">Main Page</Link>
          </li>

          <li>
            <Link to="high_score">High Score Page</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/">
          <MainPage />
        </Route>

        <Route path="/high_score">
          <HighScorePage />
        </Route>
      </Switch>
    </div>
  );
}

export default Header;
