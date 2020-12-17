import React from "react";

import { Form, Input, Button, Collapse, Select } from "antd";

import { setSearchUsers, loadingSendUsers } from "../../redux/actions/users";

const { Option } = Select;

const FormStudenst = ({ setValueInputLastName, dispatch, users, groups }) => {
  const { Panel } = Collapse;

  const [formAddUser] = Form.useForm();

  const resetInput = () => {
    formAddUser.resetFields();
  };

  const onFinishSearch = (values) => {
    let newSearchUsers = [];

    users.forEach((i) => {
      if (i.lastName.indexOf(values.UsernameSearch) !== -1)
        newSearchUsers.push(i);
    });

    setValueInputLastName(values.UsernameSearch);
    dispatch(setSearchUsers(newSearchUsers));
  };

  const onFinishAdd = (user) => {
    if (typeof user === "object") {
      let newUser = { ...user };

      groups.forEach((item) => {
        if (item.name === newUser.groupId) {
          newUser.groupId = item.id;
          newUser.group = item;
        }
      });

      dispatch(loadingSendUsers(newUser));
      resetInput();
      alert("Новый студент добавлен");
    }
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
          form={formAddUser}
        >
          <Form.Item
            label="Имя"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
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
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Отчество"
            name="patronymic"
            rules={[
              {
                required: true,
                message: "Please input your patronymic!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Год поступления"
            name="yearOfAdmission"
            rules={[
              {
                required: true,
                message: "Please input your yearOfAdmission!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="№ Группы"
            name="groupId"
            rules={[
              {
                required: true,
                message: "Please input your groups!",
              },
            ]}
          >
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {groups &&
                groups.map((group) => (
                  <Option value={group.name}>{group.name}</Option>
                ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="№ Курса"
            name="numberCourse"
            rules={[
              {
                required: true,
                message: "Please input your numberCourse!",
              },
            ]}
          >
            <Input />
          </Form.Item>

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
