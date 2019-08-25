import routesRule from "./routesRule";
import Users from "./Users";
import About from "./About";
import Home from "./Home";
import NotFound from "../../components/NotFound";

const routesData = [
    {
        path: routesRule.home,
        component: Home,
        exact: true
    },
    {
        path: routesRule.about,
        component: About,
        exact: false
    },
    {
        path: routesRule.user,
        component: Users,
        exact: false
    },
    {
        component: NotFound
    }
];

export default routesData;