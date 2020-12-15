import { combineReducers } from "redux";

import users from "./users";
import groups from "./groups";

const rootReduser = combineReducers({
    users,
    groups
});

export default rootReduser;