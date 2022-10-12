import {
  PencilSquareIcon,
  PlusCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { ReactNode } from "react";

export type ButtonProps = {
  onClick: () => void;
};
type Props = ButtonProps & {
  icon: ReactNode;
  textIcon: string;
  color?: string;
};

const FuncButton: React.FC<Props> = ({
  onClick,
  icon,
  textIcon,
  color,
}: Props) => {
  return (
    <button
      className={`rounded-md bg-fyellow/40 py-2 px-3 text-center hover:bg-fyellow/60 hover:shadow ${
        color ?? ""
      }`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      <div className="flex items-center space-x-1">
        {icon}
        <p className="font-bold">{textIcon}</p>
      </div>
    </button>
  );
};

export const AddButton: React.FC<ButtonProps> = ({ onClick }: ButtonProps) => {
  return (
    <FuncButton
      icon={<PlusCircleIcon className="w-5 stroke-fred stroke-2" />}
      textIcon="เพิ่มวิชา"
      onClick={onClick}
    />
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
