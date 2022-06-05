import { useState } from "react";
import DropDownComponent from "../DropdownComponent";

function MainComponent() {
  const [optionsArray, setOptionsArray] = useState([
    {
      key: "DROP_ONE",
      options: [
        { labeL: "A", value: "A", disabled: true },
        { labeL: "B", value: "B", disabled: false },
        { labeL: "C", value: "C", disabled: false },
        { labeL: "D", value: "D", disabled: false },
      ],
      defaultValue: "A",
    },
    {
      key: "DROP_TWO",
      options: [
        { labeL: 1, value: 1, disabled: true },
        { labeL: 2, value: 2, disabled: false },
        { labeL: 3, value: 3, disabled: false },
        { labeL: 4, value: 4, disabled: false },
      ],
      defaultValue: 1,
    },
    {
      key: "DROP_THREE",
      options: [
        { labeL: "AB", value: "AB", disabled: true },
        { labeL: "BC", value: "BC", disabled: false },
        { labeL: "CD", value: "CD", disabled: false },
        { labeL: "DE", value: "DE", disabled: false },
      ],
      defaultValue: "AB",
    },
  ]);

  return (
    <div>
      {optionsArray.map((option) => {
        return (
          <DropDownComponent
            options={option.options}
            key={option.key}
            defaultValue={option.defaultValue}
            optionsArray={optionsArray}
            setOptionsArray={setOptionsArray}
          />
        );
      })}
    </div>
  );
}

export default MainComponent;
