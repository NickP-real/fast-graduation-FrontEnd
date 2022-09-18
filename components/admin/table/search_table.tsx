import React, { useState } from "react";
import EditTable from "./edit_table";
import FuncButton from "../func_button";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

const SearchTable: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOnAddClick(e: React.MouseEvent) {
    e.preventDefault();
    setIsOpen(true);
  }

  return (
    <EditTable
      onAddClick={() => handleOnAddClick}
      funcButton={
        <FuncButton
          icon={<PencilSquareIcon className="h-5" />}
          onClick={() => {
            return;
          }}
          textIcon="แก้ไข"
        />
      }
    />
  );
};

export default SearchTable;
