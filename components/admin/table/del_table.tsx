import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import FuncButton from "../func_button";
import EditTable from "./edit_table";
import { Props as AddButtonProps } from "components/add_button";

type Props = AddButtonProps;

const DelTable: React.FC<Props> = ({ onAddClick }: Props) => {
  return (
    <EditTable
      onAddClick={onAddClick}
      funcButton={
        <FuncButton
          icon={<XMarkIcon className="h-5 stroke-2" />}
          textIcon="ลบ"
          onClick={() => {
            return;
          }}
        />
      }
    />
  );
};

export default DelTable;
