import React from "react";
import { useSelector } from "react-redux";

import { Table } from "antd";
const Groups = () => {
  const groups = useSelector(({ groups }) => groups.items);
  const users = useSelector(({ users }) => users.items);

  const expandedRowRender = (data) => {
    let dataUser = users.filter((item) => item.groupId === data.id);

    const columns = [
      {
        title: "№ Зачётки",
        dataIndex: "id",
        key: "id",
      },
      {
        title: `Фамилия`,
        dataIndex: "lastName",
        key: "lastName",
      },
      { title: "Имя", dataIndex: "name", key: "name" },
      { title: "Отчество", dataIndex: "patronymic", key: "patronymic" },
    ];

    return <Table columns={columns} dataSource={dataUser} pagination={false} />;
  };

  let dataGroups = groups.map((item) => ({ ...item, key: item.id }));

  const columns = [{ title: "№ Группы", dataIndex: "name" }];

  return (
    <Table
      columns={columns}
      dataSource={dataGroups}
      expandable={{ expandedRowRender }}
    />
  );
};

export default Groups;
