import React, { useRef } from "react";
import { DatePicker, Form } from "antd";
import dayjs from "dayjs";
const CustomDatePicker = ({
  id,
  form,
  label,
  fieldName,
  value,
  handleChange,
  style,
  format = "YYYY-MM-DD",
  required = false,
}) => {
  const datePickerRef = useRef(null);
  return (
    <Form.Item
      required={required}
      label={label}
      name={fieldName}
      initialValue={dayjs()}
    >
      {
        <DatePicker
          id={id}
          style={style}
          format={format}
          onChange={handleChange}
          value={value}
          ref={datePickerRef}
        />
      }
    </Form.Item>
  );
};

export default CustomDatePicker;
