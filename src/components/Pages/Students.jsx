import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadingUsers } from "../../redux/actions/users";

import FormStudenst from "../Forms/FormStudenst";

import { Table, Popconfirm } from "antd";

import { SearchOutlined } from "@ant-design/icons";

const Students = () => {
  const dispatch = useDispatch();

  const users = useSelector(({ users }) => users.items);
  const seacrhUsers = useSelector(({ users }) => users.seacrhItems);

  const [valueInputLastName, setValueInputLastName] = React.useState("");

  useEffect(() => {
    dispatch(loadingUsers());
  }, []);

  const handleDelete = (id) => {
    alert(id);
  };

  const columns = [
    { title: "№ Зачётки", dataIndex: "id" },
    {
      title: `Фамилия`,
      dataIndex: "lastName",
    },
    { title: "Имя", dataIndex: "name" },
    { title: "Отчество", dataIndex: "patronymic" },
    { title: "Год поступления", dataIndex: "yearOfAdmission" },
    { title: "№ Группы", dataIndex: "groups" },
    { title: "№ Курса", dataIndex: "numberCourse" },
    {
      title: "Удалить",
      dataIndex: "delete",
      render: (text, record) => (
        <Popconfirm
          title="Вы уверены что хотить удалить?"
          onConfirm={() => handleDelete(record.key)}
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
      />
      <Table
        columns={columns}
        dataSource={valueInputLastName ? seacrhUsers : users}
      />
    </div>
  );
};

export default Students;
