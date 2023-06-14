import TableSche from "../../pages/table/Table";
import Create from "../../pages/create/create";
import Login from "../../pages/Login/Login";
import Home from "../../pages/home/home";
import config from "../config/config";
const publicRoute = [
    {path: config.routes.home, component: Home},
    {path: config.routes.login, component: Login},
    {path: config.routes.list, component: TableSche},
    {path: config.routes.create, component: Create}
]


export default publicRoute