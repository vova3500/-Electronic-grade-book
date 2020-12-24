import React, { memo } from "react";
import { useSelector } from "react-redux";

import FormAddStudent from "./FormAddStudent";
import FormSearchUsers from "./FormSearchUsers";

import { Collapse } from "antd";

const FormStudenst = memo(({ setValueInputLastName, users, groups }) => {
  const { Panel } = Collapse;

  const disciplines = useSelector(({ disciplines }) => disciplines.items);

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
});

export default FormStudenst;
