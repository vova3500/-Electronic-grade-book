import React from "react";
import { useDispatch } from "react-redux";

import { setSearchUsers } from "../../../redux/actions/users";

import { Form, Input, Button } from "antd";

const FormSearchUsers = ({ setValueInputLastName, users }) => {
  const dispatch = useDispatch();

  const onFinishSearch = (values) => {
    let newSearchUsers = [];

    users.forEach((i) => {
      if (i.lastName.indexOf(values.UsernameSearch) !== -1)
        newSearchUsers.push(i);
    });

    setValueInputLastName(values.UsernameSearch);
    dispatch(setSearchUsers(newSearchUsers));
  };

  return (
    <Form
      name="search"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinishSearch}
    >
      <Form.Item label="Фамилия" name="UsernameSearch">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormSearchUsers;
