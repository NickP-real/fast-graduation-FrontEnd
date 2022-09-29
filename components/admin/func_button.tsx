import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { ReactNode } from "react";

type ButtonProps = {
  onClick: () => void;
  color?: string;
};
type Props = ButtonProps & {
  icon: ReactNode;
  textIcon: string;
};

const FuncButton: React.FC<Props> = ({
  onClick,
  icon,
  textIcon,
  color,
}: Props) => {
  return (
    <button
      className={`absolute right-0 top-1/2 mr-2 flex h-5 -translate-y-1/2 items-center justify-center space-x-1 text-center md:mr-4 ${
        color ?? ""
      }`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {icon}
      {textIcon}
    </button>
  );
};

export const DelButton: React.FC<ButtonProps> = ({ onClick }: ButtonProps) => {
  return (
    <FuncButton
      icon={<XMarkIcon className="h-5 stroke-2" />}
      textIcon="ลบ"
      onClick={onClick}
      color="text-fpink"
    />
  );
};

export const EditButton: React.FC<ButtonProps> = ({ onClick }: ButtonProps) => {
  return (
    <FuncButton
      icon={<PencilSquareIcon className="h-5" />}
      textIcon="แก้ไข"
      onClick={onClick}
    />
  );
};

export default FuncButton;
