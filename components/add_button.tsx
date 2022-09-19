import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

export type Props = {
  onAddClick: (e: React.MouseEvent) => void;
};

const AddButton: React.FC<Props> = ({ onAddClick }: Props) => {
  return (
    <tr className="relative">
      <td>
        <button
          onClick={onAddClick}
          className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-x-1"
        >
          <PlusCircleIcon className="w-7 stroke-fred stroke-2" />
          <a>เพิ่มวิชา</a>
        </button>
      </td>
    </tr>
  );
};

export default AddButton;
