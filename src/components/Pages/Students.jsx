import React from "react";
import { useSelector, useDispatch } from "react-redux";

import FormStudenst from "../Forms/FormStudenst";

import { loadingDeleteUser } from "../../redux/actions/users";

import { Table, Popconfirm, Tag } from "antd";

const Students = () => {
  const dispatch = useDispatch();

  const users = useSelector(({ users }) => users.items);
  const seacrhUsers = useSelector(({ users }) => users.seacrhItems);

  const groups = useSelector(({ groups }) => groups.items);

  const [valueInputLastName, setValueInputLastName] = React.useState("");

  const handleDelete = (id) => {
    dispatch(loadingDeleteUser(id));
  };

  const expandedRowRender = (data) => {
    const columns = [
      { title: "Дисциплина", dataIndex: "name" },
      { title: "Оценка", dataIndex: "count" },
    ];

    return (
      <Table columns={columns} dataSource={data.rating} pagination={false} />
    );
  };

  const columns = [
    { title: "№ Зачётки", dataIndex: "id", sorter: (a, b) => a.id - b.id },
    {
      title: `Фамилия`,
      dataIndex: "lastName",
    },
    { title: "Имя", dataIndex: "name" },
    { title: "Отчество", dataIndex: "patronymic" },
    {
      title: "Год поступления",
      dataIndex: "yearOfAdmission",
      sorter: (a, b) => a.yearOfAdmission - b.yearOfAdmission,
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
    },
    {
      title: "№ Курса",
      dataIndex: "numberCourse",
      sorter: (a, b) => a.numberCourse - b.numberCourse,
    },
    {
      title: "Удалить",
      dataIndex: "delete",
      render: (text, record) => (
        <Popconfirm
          title="Вы уверены что хотить удалить?"
          onConfirm={() => handleDelete(record.id)}
        >
          <a>Удальть</a>
        </Popconfirm>
      ),
    },
  ];
  return (
    <div>
      <FormStudenst
        setValueInputLastName={setValueInputLastName}
        dispatch={dispatch}
        users={users}
        groups={groups}
      />
      <Table
        columns={columns}
        dataSource={valueInputLastName ? seacrhUsers : users}
        expandable={{ expandedRowRender }}
      />
    </div>
  );
};

export default Students;
