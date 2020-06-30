import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

const Drop: React.FC = () => {
  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry" },
  ];

  const [selected, setSelected] = useState([]);

  return (
    <div>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"THEMEMEME"}
        className={"theme multi-select"}
        hasSelectAll={false}
        disableSearch={true}
      />
    </div>
  );
};

export default Drop;
