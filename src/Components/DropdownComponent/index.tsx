import { Select } from "antd";
import { BaseOptionType, DefaultOptionType } from "antd/lib/select";
import { useEffect, useState } from "react";

interface DropDownComponentProps {
  options: (BaseOptionType | DefaultOptionType)[];
  defaultValue: any;
  optionsArray: any[];
  setOptionsArray: React.Dispatch<React.SetStateAction<any>>;
}

function DropDownComponent(props: DropDownComponentProps) {
  const { defaultValue, optionsArray, setOptionsArray } = props;

  const [options, setOptions] = useState<
    (BaseOptionType | DefaultOptionType)[]
  >([]);

  useEffect(() => {
    setOptions(props.options);
  }, [props.options]);

  function handleSelect(selectedValue: any) {
    const handleSelectedIndex = options.find((option) => {
      if (parseInt(selectedValue)) {
        return option.value === parseInt(selectedValue);
      } else {
        return option.value === selectedValue;
      }
    });
    if (handleSelectedIndex) {
      const selectedIndex = options.indexOf(handleSelectedIndex);
      const updateArrays = optionsArray.map((option) => {
        return {
          ...option,
          options: option.options.map((options: any, index: number) => {
            if (index === selectedIndex) {
              return { ...options, disabled: true };
            }
            return { ...options, disabled: false };
          }),
        };
      });
      setOptionsArray(updateArrays);
    }
  }

  return (
    <Select defaultValue={defaultValue} onSelect={handleSelect}>
      {options.map((option) => {
        return (
          <Select.Option key={option.value} disabled={option.disabled}>
            {option.value}
          </Select.Option>
        );
      })}
    </Select>
  );
}

export default DropDownComponent;
