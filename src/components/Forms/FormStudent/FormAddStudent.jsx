import React from "react";
import { useDispatch } from "react-redux";

import { loadingSendUsers } from "../../../redux/actions/users";

import { Form, Input, Button, Select } from "antd";

const FormAddStudent = ({ disciplines, groups }) => {
  const dispatch = useDispatch();

  const [formAddUser] = Form.useForm();

  const { Option } = Select;

  const resetInput = () => {
    formAddUser.resetFields();
  };

  const onFinishAdd = (user) => {
    if (typeof user === "object") {
      let newUser = { ...user };

      let userDisciplines = disciplines.map((item) => ({
        id: item.id,
        name: item.name,
        count: 0,
      }));

      groups.forEach((item) => {
        if (item.name === newUser.groupId) {
          newUser.groupId = item.id;
          newUser.group = item;
          newUser.rating = userDisciplines;
        }
      });

      dispatch(loadingSendUsers(newUser));
      resetInput();
      alert("Новый студент добавлен");
    }
  };

  return (
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
  );
};

export default FormAddStudent;
