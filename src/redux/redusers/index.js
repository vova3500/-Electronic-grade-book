import { combineReducers } from "redux";

import users from "./users";
import groups from "./groups";
import disciplines from "./disciplines";

const rootReduser = combineReducers({
    users,
    groups,
    disciplines
});

export default rootReduser;