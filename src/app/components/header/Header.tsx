import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import HighScorePage from "../../containers/highScorePage/HighScorePage";
import MainPage from "../../containers/mainPage/MainPage";
import { useTheme } from "../../hooks/useTheme";
import "./Header.css";

function Header() {
  const theme = useTheme();

  const AppLink = styled(Link)`
    color: ${theme.colors.link.text};
    font-size: ${theme.fontSize.header};
  `;

  const List = styled.ul`
    display: flex;
    list-style-type: none;
  `;

  const ListItem = styled.li`
    flex-basis: 15%;
  `;

  return (
    <div className="Header">
      <nav>
        <List>
          <ListItem>
            <AppLink to="/">Main Page</AppLink>
          </ListItem>

          <ListItem>
            <AppLink to="high_score">High Score Page</AppLink>
          </ListItem>
        </List>
      </nav>

      <Switch>
        <Route exact path="/">
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
