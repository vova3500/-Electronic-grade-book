import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadingUsers } from "../../redux/actions/users";

import { Table } from "antd";

const Students = () => {
  const dispatch = useDispatch();

  const users = useSelector(({ users }) => users.items);

  useEffect(() => {
    dispatch(loadingUsers());
  }, []);

  const columns = [
    { title: "№ Зачётки", dataIndex: "id" },
    { title: "Фамилия", dataIndex: "lastName" },
    { title: "Имя", dataIndex: "name" },
    { title: "Отчество", dataIndex: "patronymic" },
    { title: "Год поступления", dataIndex: "yearOfAdmission" },
    { title: "№ Группы", dataIndex: "groups" },
    { title: "№ Курса", dataIndex: "numberCourse" },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={users} />
    </div>
  );
};

export default Students;
