import React from "react";
import { useSelector, useDispatch } from "react-redux";

import FormStudenst from "../Forms/FormStudent/FormStudenst";

import { loadingDeleteUser } from "../../redux/actions/users";

import { Table, Popconfirm, Tag, Spin } from "antd";

const Students = () => {
  const dispatch = useDispatch();

  const loader = useSelector(({ users }) => users.loader);

  const users = useSelector(({ users }) => users.items);
  const seacrhUsers = useSelector(({ users }) => users.seacrhItems);

  const groups = useSelector(({ groups }) => groups.items);

  const [valueInputLastName, setValueInputLastName] = React.useState("");

  const handleDelete = (id) => {
    dispatch(loadingDeleteUser(id));
  };

  const expandedRowRender = (data) => {
    let rating = data.rating.map((item) => ({ ...item, key: item.id }));

    const columns = [
      { title: "Дисциплина", dataIndex: "name", key: "Subjects" },
      { title: "Оценка", dataIndex: "count", key: "count" },
    ];

    return <Table columns={columns} dataSource={rating} pagination={false} />;
  };

  const columns = [
    {
      title: "№ Зачётки",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      key: "id",
    },
    {
      title: `Фамилия`,
      dataIndex: "lastName",
      key: "lastName",
    },
    { title: "Имя", dataIndex: "name", key: "name" },
    { title: "Отчество", dataIndex: "patronymic", key: "patronymic" },
    {
      title: "Год поступления",
      dataIndex: "yearOfAdmission",
      sorter: (a, b) => a.yearOfAdmission - b.yearOfAdmission,
      key: "yearOfAdmission",
    },
    {
      title: "№ Группы",
      dataIndex: "group",
      sorter: (a, b) => a.group.name.length - b.group.name.length,
      sortDirections: ["descend", "ascend"],
      render: (group) => (
        <Tag color="blue" key={group.name}>
          {group.name}
        </Tag>
      ),
      key: "group",
    },
    {
      title: "№ Курса",
      dataIndex: "numberCourse",
      sorter: (a, b) => a.numberCourse - b.numberCourse,
      key: "numberCourse",
    },
    {
      title: "Удалить",
      dataIndex: "delete",
      render: (text, record) => (
        <Popconfirm
          title="Вы уверены что хотить удалить?"
          onConfirm={() => handleDelete(record.id)}
        >
          <b style={{ cursor: "pointer", color: "red" }}>Удальть</b>
        </Popconfirm>
      ),
      key: "delete",
    },
  ];
  return (
    <Spin size="large" spinning={loader} tip="Loading...">
      <FormStudenst
        setValueInputLastName={setValueInputLastName}
        users={users}
        groups={groups}
      />
      <Table
        columns={columns}
        dataSource={valueInputLastName ? seacrhUsers : users}
        expandable={{ expandedRowRender }}
      />
    </Spin>
  );
};

export default Students;
