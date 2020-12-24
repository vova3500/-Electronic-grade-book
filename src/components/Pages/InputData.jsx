import React from "react";
import { useSelector } from "react-redux";

import FormInputData from "../Forms/FormInputData/FormInputData";

import { Spin } from "antd";

const InputData = () => {
  const loader = useSelector(({ users }) => users.loader);

  const users = useSelector(({ users }) => users.items);

  const groups = useSelector(({ groups }) => groups.items);
  return (
    <Spin size="large" spinning={loader} tip="Loading...">
      <FormInputData users={users} groups={groups} />
    </Spin>
  );
};

export default InputData;
