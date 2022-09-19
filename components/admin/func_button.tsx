import React, { ReactNode } from "react";

interface Props {
  onClick: () => void;
  icon: ReactNode;
  textIcon: string;
}

const FuncButton: React.FC<Props> = ({ onClick, icon, textIcon }: Props) => {
  return (
    <button
      className="absolute right-0 top-1/2 mr-4 flex h-5 -translate-y-1/2 items-center justify-center gap-x-1 text-center"
      onClick={(e) => {
        e.preventDefault();
        onClick;
      }}
    >
      {icon}
      {textIcon}
    </button>
  );
};

export default FuncButton;
