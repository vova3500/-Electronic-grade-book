import React from "react";
import { useSelector } from "react-redux";

import { Table } from "antd";

const Subjects = () => {
  const disciplines = useSelector(({ disciplines }) => disciplines.items);

  let dataDisciplines = disciplines.map((item) => ({ ...item, key: item.id }));

  const columns = [{ title: "Дисциплина", dataIndex: "name" }];

  return <Table columns={columns} dataSource={dataDisciplines} />;
};

export default Subjects;
