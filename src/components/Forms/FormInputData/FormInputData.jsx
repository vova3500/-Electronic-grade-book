import React from "react";

import { Form, Input, Button } from "antd";

const FormInputData = () => {
  const onFinish = (values) => {};
  return (
    <Form
      name="search"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
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

export default FormInputData;
