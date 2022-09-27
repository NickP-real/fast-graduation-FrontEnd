import React, { ReactNode } from "react";

interface Props {
  onClick: () => void;
  icon: ReactNode;
  textIcon: string;
}

const FuncButton: React.FC<Props> = ({ onClick, icon, textIcon }: Props) => {
  return (
    <button
      className="absolute right-0 top-1/2 mr-2 flex h-5 -translate-y-1/2 items-center justify-center gap-x-1 text-center md:mr-4"
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
