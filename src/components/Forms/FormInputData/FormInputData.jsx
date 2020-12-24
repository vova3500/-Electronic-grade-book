import React, { useState, memo } from "react";

import { loadingUpdateUser } from "../../../redux/actions/users";

import { Form, Button, InputNumber, Select } from "antd";
import { useDispatch } from "react-redux";

const FormInputData = memo(({ users, groups }) => {
  const dispatch = useDispatch();

  const { Option } = Select;

  const [inputGroup, setInputGroup] = useState("");
  const [inputStudent, setInputStudent] = useState("");

  const [newUsers, setNewUsers] = useState([]);

  const selectGroups = (value) => {
    let newUsers = [...users].filter((user) => user.group.id === value);
    setInputGroup(value);
    setNewUsers(newUsers);
  };

  const selectUser = (value) => {
    setInputStudent(value);
  };

  const onFinish = (values) => {
    [...users].forEach((user) => {
      if (user.id === values.student) {
        let newRating = { ...user }.rating.map((value) => {
          if (value.id === values.discipline) {
            value.count = values.count;
          }
          return value;
        });
        dispatch(loadingUpdateUser(values.student, newRating));
      }
    });
  };

  return (
    <Form
      name="inputData"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Выберите группу"
        name="group"
        rules={[
          {
            required: true,
            message: "Please input your numberCourse!",
          },
        ]}
      >
        <Select
          onChange={selectGroups}
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
              <Option key={group.id} value={group.id}>
                {group.name}
              </Option>
            ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Выберите студента"
        name="student"
        rules={[
          {
            required: true,
            message: "Please input your numberCourse!",
          },
        ]}
      >
        <Select
          onChange={selectUser}
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
          disabled={!newUsers.length}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {newUsers.map((user) => (
            <Option key={user.id} value={user.id}>
              {`${user.lastName} ${user.name} ${user.patronymic}`}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Выберите предмет"
        name="discipline"
        rules={[
          {
            required: true,
            message: "Please input your numberCourse!",
          },
        ]}
      >
        <Select
          disabled={!newUsers.length || !inputGroup || !inputStudent}
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {inputStudent &&
            users[inputStudent - 1].rating.map((value) => (
              <Option key={value.id} value={value.id}>
                {`${value.name} : ${value.count}`}
              </Option>
            ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Введите оценку"
        name="count"
        rules={[
          {
            required: true,
            message: "Введите коректную",
          },
        ]}
      >
        <InputNumber min={0} max={100} defaultValue={0} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
});

export default FormInputData;
