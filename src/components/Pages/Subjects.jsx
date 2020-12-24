import React from "react";
import { useSelector } from "react-redux";

import { Table, Spin } from "antd";

const Subjects = () => {
  const disciplines = useSelector(({ disciplines }) => disciplines.items);

  const loader = useSelector(({ disciplines }) => disciplines.loader);

  let dataDisciplines = disciplines.map((item) => ({ ...item, key: item.id }));

  const columns = [{ title: "Дисциплина", dataIndex: "name" }];

  return (
    <Spin size="large" spinning={loader} tip="Loading...">
      <Table columns={columns} dataSource={dataDisciplines} />
    </Spin>
  );
};

export default Subjects;
