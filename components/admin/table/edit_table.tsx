import AddButton, { Props as AddButtonProps } from "components/add_button";
import Table, { TableHeader } from "components/table";
import React, { ReactNode } from "react";

type Props = AddButtonProps & {
  funcButton: ReactNode;
};

const EditTable: React.FC<Props> = ({ onAddClick, funcButton }: Props) => {
  return (
    <Table
      Header={
        <tr className="text-fred">
          <th className="w-[30vw] border border-black">รหัสวิชา</th>
          <TableHeader str="ชื่อวิชา" />
        </tr>
      }
      Content={
        <>
          <tr>
            <td className="border border-black">aa</td>
            <td className="relative border border-black">
              aa
              {funcButton}
            </td>
          </tr>
          <AddButton onAddClick={onAddClick} />
        </>
      }
    />
  );
};

export default EditTable;
