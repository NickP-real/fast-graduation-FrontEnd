import { Dialog } from "@headlessui/react";
import React, { ReactNode, useRef } from "react";

export type ModalProps = {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
};

type Props = ModalProps & {
  title: string;
  children: ReactNode;
};

export const Modal: React.FC<Props> = ({
  open,
  onClose,
  title,
  children,
}: Props) => {
  const focusRef = useRef<null>(null);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      initialFocus={focusRef}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-1 mx-auto my-auto flex max-h-max max-w-max flex-col items-center justify-center rounded-lg bg-gradient-to-b from-fred to-fpurple shadow-md">
        <Dialog.Panel className="m-1 rounded bg-white p-5" ref={focusRef}>
          <Dialog.Title className="mb-2">
            <h2 className="font-extrabold">{title}</h2>
          </Dialog.Title>
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
