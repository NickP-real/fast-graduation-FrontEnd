import {
  PencilSquareIcon,
  PlusCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { PencilSquareIcon as PencilSquareSolidIcon } from "@heroicons/react/24/solid";
import React, { ReactNode } from "react";

export type ButtonProps = {
  onClick: () => void;
};
type Props = ButtonProps & {
  icon: ReactNode;
  textIcon: string;
  color?: string;
  bgColor: string;
  hoverBgColor: string;
};

const FuncButton: React.FC<Props> = ({
  onClick,
  icon,
  textIcon,
  color,
  bgColor,
  hoverBgColor,
}: Props) => {
  return (
    <button
      className={`rounded-md py-2 px-3 text-center ${bgColor} ${hoverBgColor} hover:shadow ${
        color ?? ""
      }`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      <div className="flex items-center justify-center space-x-1">
        {icon}
        <p className="font-bold">{textIcon}</p>
      </div>
    </button>
  );
};

export const AddCourseButton: React.FC<ButtonProps> = ({
  onClick,
}: ButtonProps) => {
  return (
    <FuncButton
      icon={<PlusCircleIcon className="w-5 stroke-fpurple stroke-2" />}
      textIcon="เพิ่มวิชา"
      onClick={onClick}
      color="text-fpurple"
      bgColor="bg-fbrgreen/60"
      hoverBgColor="hover:bg-fbrgreen/80"
    />
  );
};

export const AddButton: React.FC<ButtonProps> = ({ onClick }: ButtonProps) => {
  return (
    <FuncButton
      icon={<PencilSquareSolidIcon className="w-5 stroke-2" />}
      textIcon="เพิ่ม"
      onClick={onClick}
      color="text-fpurple"
      bgColor="bg-fbrgreen/60"
      hoverBgColor="hover:bg-fbrgreen/80"
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
      bgColor="bg-fyellow/40"
      hoverBgColor="hover:bg-fyellow/60"
    />
  );
};

export const EditButton: React.FC<ButtonProps> = ({ onClick }: ButtonProps) => {
  return (
    <FuncButton
      icon={<PencilSquareIcon className="h-5" />}
      textIcon="แก้ไข"
      onClick={onClick}
      color="text-[#262829]"
      bgColor="bg-fblue/40"
      hoverBgColor="hover:bg-fblue/60"
    />
  );
};

export const InfoButton: React.FC<ButtonProps> = ({ onClick }: ButtonProps) => {
  return (
    <FuncButton
      icon={<></>}
      textIcon="รายละเอียด"
      onClick={onClick}
      color="text-[#666768]"
      bgColor="bg-green-400/40"
      hoverBgColor="hover:bg-green-400/60"
    />
  );
};

export default FuncButton;
