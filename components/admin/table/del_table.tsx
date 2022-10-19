import React from "react";
import EditTable from "./edit_table";
import { ButtonProps, DelButton } from "components/button/button";

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

  return <EditTable contents={contents} />;
};

export default DelTable;
