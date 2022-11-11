import React from "react";
import { ButtonProps } from "./button";

type Props = ButtonProps;

const CancelButton: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <button
      className="mx-auto my-5 block rounded-xl bg-fbryellow/70 px-6 py-3 text-2xl font-extrabold text-fred shadow-md hover:bg-fbryellow"
      type="button"
      onClick={onClick}
    >
      ยกเลิก
    </button>
  );
};

export default CancelButton;
