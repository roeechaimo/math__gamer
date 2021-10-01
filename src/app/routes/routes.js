import HighScorePage from "../containers/highScorePage/HighScorePage";
import MainPage from "../containers/mainPage/MainPage";
import RouteProps from "react-router";

const routes = [
  {
    path: "/",
    component: MainPage,
    exact: true,
  },
  {
    path: "/high_score",
    component: HighScorePage,
  },
];

export default routes;
