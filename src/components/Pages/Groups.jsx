import React from "react";
import { useSelector } from "react-redux";

import { Table } from "antd";
const Groups = () => {
  const groups = useSelector(({ groups }) => groups.items);

  const columns = [{ title: "№ Группы", dataIndex: "name" }];

  return <Table columns={columns} dataSource={groups} />;
};

export default Groups;
