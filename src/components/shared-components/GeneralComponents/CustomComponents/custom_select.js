import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Select } from "antd";
import ConvertVN from "utils/convert-vi";
import { useTranslation } from "react-i18next";
const DEFAULT_FIELD = "name";
const CustomSelect = ({
  id,
  dataSelect,
  valueKey,
  labelKeyFormat,
  value,
  onChange,
  placeholder,
  autoFocus,
  name,
  styles,
  disabled,
  size,
  handleKeyDown,
  defaultValue,
  allowClear = true,
  onBlur,
  mode,
}) => {
  //const filterOption = (input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  const filterOption = (input, option) =>
    ConvertVN.removeVietnameseTones(
      (option?.label ?? "").toLowerCase()
    ).includes(ConvertVN.removeVietnameseTones(input.toLowerCase()));
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    setApiData(dataSelect);
  }, [dataSelect]);
  const { t } = useTranslation("common");
  const labelFormat = (item, labelKeyFormat = "") => {
    if (labelKeyFormat.length > 0) {
      let pattern = /\{([^\{\}]*)\}/g;
      let strLabel = labelKeyFormat.replace(
        pattern,
        (match, p1, offset, string) => {
          // p1 is non-digits, p2 digits, and p3 non-alphanumerics
          if (item[p1] !== undefined) return item[p1];
          else return "";
        }
      );
      if (!strLabel) return t("common:empty_string");
      return strLabel;
    } else return item[DEFAULT_FIELD];
  };
  const options =
    apiData &&
    apiData.map((item) => {
      if (item["disabled"] !== undefined) {
        return {
          value: item[valueKey],
          label: labelFormat(item, labelKeyFormat),
          disabled: true,
          record: item,
        };
      } else
        return {
          value: item[valueKey],
          label: labelFormat(item, labelKeyFormat),
          record: item,
        };
    });

  return (
    <Select
      id={id}
      onChange={onChange}
      filterOption={filterOption}
      showSearch
      labelInValue
      options={options}
      value={value}
      placeholder={placeholder}
      autoFocus={autoFocus ? true : false}
      name={name}
      style={styles}
      disabled={disabled ? true : false}
      size={size}
      onKeyDown={handleKeyDown}
      defaultValue={defaultValue}
      allowClear={allowClear}
      mode={mode}
      onBlur={onBlur}
    />
  );
};

export default CustomSelect;
