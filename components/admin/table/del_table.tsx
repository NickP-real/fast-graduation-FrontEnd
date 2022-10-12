import React from "react";
import EditTable from "./edit_table";
import { ButtonProps, DelButton } from "components/button";

type Props = ButtonProps;

const DelTable: React.FC<Props> = ({ onClick }: Props) => {
  const contents = [
    {
      texts: ["206111", "calculus 1"],
      components: [
        <DelButton
          key="test"
          onClick={() => {
            return;
          }}
        />,
      ],
    },
  ];

  return <EditTable onClick={onClick} contents={contents} />;
};

export default DelTable;
