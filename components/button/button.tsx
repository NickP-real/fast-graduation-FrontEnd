import {
  PencilSquareIcon,
  PlusCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { PencilSquareIcon as PencilSquareSolidIcon } from "@heroicons/react/24/solid";
import React, { MouseEvent, ReactNode } from "react";

export type ButtonProps = {
  onClick: () => void;
};

type FuncButtonProps = ButtonProps & {
  icon: ReactNode;
  textIcon: string;
  className: string;
};

type FixButtonProps = ButtonProps & {
  label: string;
  className: string;
};

const FuncButton: React.FC<FuncButtonProps> = ({
  onClick,
  icon,
  textIcon,
  className,
}: FuncButtonProps) => {
  function handleOnClick(e: MouseEvent) {
    e.preventDefault();
    onClick();
  }

  return (
    <button
      className={`rounded-md py-2 px-3 text-center hover:shadow ${className}
`}
      onClick={handleOnClick}
    >
      <div
        className={`flex items-center justify-center ${icon && "space-x-1"}`}
      >
        <div className="h-5">{icon}</div>
        <p className="font-bold">{textIcon}</p>
      </div>
    </button>
  );
};

export const Button: React.FC<FixButtonProps> = ({
  onClick,
  label,
  className,
}: FixButtonProps) => {
  function handleOnClick(e: MouseEvent) {
    e.preventDefault();
    onClick();
  }

  return (
    <button
      className={`${className} rounded-md text-center font-bold shadow-md`}
      onClick={handleOnClick}
    >
      {label}
    </button>
  );
};

export const AddCourseButton: React.FC<ButtonProps> = ({
  onClick,
}: ButtonProps) => (
  <FuncButton
    icon={<PlusCircleIcon className="w-5 stroke-fpurple stroke-2" />}
    textIcon="เพิ่มวิชา"
    onClick={onClick}
    className="bg-fbrgreen/60 text-fpurple hover:bg-fbrgreen/80"
  />
);
export const AddButton: React.FC<ButtonProps> = ({ onClick }: ButtonProps) => (
  <FuncButton
    icon={<PencilSquareSolidIcon className="w-5 stroke-2" />}
    textIcon="เพิ่ม"
    onClick={onClick}
    className="bg-fbrgreen/60 text-fpurple hover:bg-fbrgreen/80"
  />
);
export const DelButton: React.FC<ButtonProps> = ({ onClick }: ButtonProps) => (
  <FuncButton
    icon={<XMarkIcon className="h-5 stroke-2" />}
    textIcon="ลบ"
    onClick={onClick}
    className="bg-fyellow/40 text-fpink hover:bg-fyellow/60"
  />
);
export const EditButton: React.FC<ButtonProps> = ({ onClick }: ButtonProps) => (
  <FuncButton
    icon={<PencilSquareIcon className="h-5" />}
    textIcon="แก้ไข"
    onClick={onClick}
    className="bg-fblue/40 text-[#262829] hover:bg-fblue/60"
  />
);
export const InfoButton: React.FC<ButtonProps> = ({ onClick }: ButtonProps) => (
  <FuncButton
    icon={null}
    textIcon="รายละเอียด"
    onClick={onClick}
    className="bg-green-400/40 text-[#666768] hover:bg-green-400/60"
  />
);
