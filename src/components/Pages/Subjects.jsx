import React from "react";
import { useSelector } from "react-redux";

import { Table } from "antd";

const Subjects = () => {
  const disciplines = useSelector(({ disciplines }) => disciplines.items);

  const columns = [{ title: "Дисциплина", dataIndex: "name" }];

  return <Table columns={columns} dataSource={disciplines} />;
};

export default Subjects;
