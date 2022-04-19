import React from "react";
import Select from "../atoms/Select";

export default function Element({
  name,
  options,
  type,
  item,
  selectedOptions,
  onChangeSelect,
  setUnitAndQ,
}) {
  switch (type) {
    case "Select":
      return (
        <Select
          name={name}
          options={options}
          onChangeSelect={onChangeSelect}
          setUnitAndQ={setUnitAndQ}
          selectedOptions={selectedOptions}
          item={item}
        />
      );
    default:
      return <h1>Invalid Type</h1>;
  }
}
