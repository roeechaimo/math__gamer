import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../../hooks/useTheme";
import routes from "../../routes/routes";
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
        {routes?.map((route, i) => {
          return (
            <Route
              key={i}
              exact={route?.exact}
              path={route.path}
              render={(props) => {
                return <route.component />;
              }}
            />
          );
        })}
      </Switch>
    </div>
  );
}

export default Header;
