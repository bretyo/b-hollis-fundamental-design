import { Route, Switch } from "react-router-dom";
import Dash from "./Dash";
import Elevator from "./Modules_1_And_2/Elevator";

export default(
    <Switch>
        <Route exact path='/' component={Dash} />
        <Route path='/m1_m2' component={Elevator} />
    </Switch>
)