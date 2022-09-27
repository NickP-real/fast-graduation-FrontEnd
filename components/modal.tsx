import { Dialog } from "@headlessui/react";
import React, { ReactNode } from "react";

type Props = {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: ReactNode[];
};

export const Modal: React.FC<Props> = ({
  open,
  onClose,
  title,
  children,
}: Props) => {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-1 mx-auto my-auto flex max-h-max max-w-xl flex-col items-center justify-center rounded-lg bg-gradient-to-b from-fred to-fpurple shadow-md">
        <Dialog.Panel className="m-1 rounded bg-white p-5">
          <Dialog.Title>
            <h2>{title}</h2>
          </Dialog.Title>
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
