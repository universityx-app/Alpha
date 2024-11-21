import React, { useState, useEffect, ChangeEvent } from "react";
import List from "./List";
import { Department } from "../../store/departmentsSlice";
import { Faculty } from "../../store/facultiesSlice";

interface EditFieldsProps {
  label: string;
  editData?: (Department | Faculty | string)[];
  placeholder: string;
  height?: string;
  inputedData?: (updatedDeptList: (Department | Faculty | string)[]) => void;
}

const EditFields: React.FC<EditFieldsProps> = ({
  label,
  editData,
  placeholder,
  height = "12rem",
  inputedData,
}) => {
  const [inputedDept, setInputedDept] = useState<string>("");
  const [deptlist, setDeptlist] = useState<(Department | Faculty | string)[]>([]);

  useEffect(() => {
    if (editData && editData.length !== deptlist.length) {
      setDeptlist(editData);
    }
  }, [editData]);

  useEffect(() => {
    if (inputedData) {
      inputedData(deptlist);
    }
  }, [deptlist, inputedData]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.includes(",")) {
      const dataToAdd: any[] = value
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "")
        .map((name) => ({ id: "", name, lecturers: [] }));

      setDeptlist((prevList) => [...prevList, ...dataToAdd]);
      setInputedDept("");
    } else {
      setInputedDept(value);
    }
  };

  const remove_from_list = (delItem: Department | Faculty) => {
    setDeptlist((prevList) =>
      prevList.filter((item) => typeof item !== "string" && item.name !== delItem.name)
    );
  };

  const list = deptlist.map((dept, index) => (
    <List
      key={index}
      title={typeof dept === "string" ? dept : dept.name ?? "Unnamed"}
      onClick={() => {
        if (typeof dept !== "string") {
          remove_from_list(dept);
        }
      }}
    />
  ));

  return (
    <div className="space-y-2">
      <p className="font-inter text-2xl text-[#667085]">{label}</p>
      <div
        className={`w-full rounded-md border border-[#667085] flex flex-wrap items-start gap-x-2 p-2 min-h-[${height}] `}
      >
        {list}
        <input
          type="text"
          placeholder={placeholder}
          value={inputedDept}
          onChange={handleInputChange}
          className="bg-inherit outline-none py-2 text-lg"
        />
      </div>
    </div>
  );
};

export default EditFields;