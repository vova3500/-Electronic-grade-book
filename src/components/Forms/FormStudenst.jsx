import React from "react";

import { setSearchUsers } from "../../redux/actions/users";

import { Form, Input, Button, Checkbox, Collapse } from "antd";

const FormStudenst = ({ setValueInputLastName, dispatch, users }) => {
  const { Panel } = Collapse;

  const onFinishSearch = (values) => {
    let newSearchUsers = [];

    users.forEach((i) => {
      if (i.lastName.indexOf(values.UsernameSearch) !== -1)
        newSearchUsers.push(i);
    });
    setValueInputLastName(values.UsernameSearch);
    dispatch(setSearchUsers(newSearchUsers));
  };

  const onFinishAdd = (errorInfo) => {
    console.log(errorInfo);
  };

  return (
    <Collapse accordion>
      <Panel header="Добавить" key="1">
        <Form
          name="addUsers"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinishAdd}
        >
          <Form.Item
            label="Имя"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Фамилия"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input your lastName!",
              },
            ]}
          ></Form.Item>

          <Form.Item
            label="Отчество"
            name="patronymic"
            rules={[
              {
                required: true,
                message: "Please input your patronymic!",
              },
            ]}
          ></Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Panel>
      <Panel header="Найти" key="2">
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
      </Panel>
    </Collapse>
  );
};

export default FormStudenst;
