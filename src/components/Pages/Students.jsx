import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadingUsers } from "../../redux/actions/users";

const Students = () => {
  const dispatch = useDispatch();

  const users = useSelector(({ users }) => users.items);

  useEffect(() => {
    dispatch(loadingUsers());
  }, []);

  console.log(users);
  return <div>students</div>;
};

export default Students;
