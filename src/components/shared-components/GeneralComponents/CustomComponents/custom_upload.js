import { Upload } from "antd";
import React, { useEffect } from "react";

const CustomUpload = ({
  children,
  fileList,
  setFileList,
  onPreview,
  onChange,
  enableMultipleFiles = false,
  accept = ".*",
}) => {
  const handlePaste = (event) => {
    if (enableMultipleFiles || fileList.length === 0) {
      const clipboardItems = event.clipboardData.items;
      for (let item of clipboardItems) {
        if (item.type.startsWith("image")) {
          const file = item.getAsFile();
          const newFile = {
            uid: Date.now().toString(),
            name: file.name,
            status: "done",
            url: URL.createObjectURL(file),
            originFileObj: file,
            lastModified: file.lastModified,
            lastModifiedDate: file.lastModifiedDate,
          };

          const updatedFileList = [...fileList, newFile];
          setFileList(updatedFileList);

          // Trigger onChange with updated file list
          onChange?.({ file: newFile, fileList: updatedFileList });
          break;
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener("paste", handlePaste);
    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, [fileList, enableMultipleFiles]);

  return (
    <Upload
      accept={accept}
      action={null}
      status="done"
      beforeUpload={(file) => false}
      listType="picture-card"
      fileList={fileList}
      onChange={onChange}
      onPreview={onPreview}
    >
      {children}
    </Upload>
  );
};

export default CustomUpload;
