import React from "react";
import { useSelector } from "react-redux";

import FormAddStudent from "./FormAddStudent";
import FormSearchUsers from "./FormSearchUsers";

import { setSearchUsers } from "../../../redux/actions/users";

import { Form, Input, Button, Collapse } from "antd";

const FormStudenst = ({ setValueInputLastName, dispatch, users, groups }) => {
  const { Panel } = Collapse;

  const disciplines = useSelector(({ disciplines }) => disciplines.items);

  const onFinishSearch = (values) => {
    let newSearchUsers = [];

    users.forEach((i) => {
      if (i.lastName.indexOf(values.UsernameSearch) !== -1)
        newSearchUsers.push(i);
    });

    setValueInputLastName(values.UsernameSearch);
    dispatch(setSearchUsers(newSearchUsers));
  };

  return (
    <Collapse style={{ marginBottom: "24px" }} accordion>
      <Panel header="Добавить" key="1">
        <FormAddStudent disciplines={disciplines} groups={groups} />
      </Panel>
      <Panel header="Найти" key="2">
        <FormSearchUsers
          setValueInputLastName={setValueInputLastName}
          users={users}
        />
      </Panel>
    </Collapse>
  );
};

export default FormStudenst;
