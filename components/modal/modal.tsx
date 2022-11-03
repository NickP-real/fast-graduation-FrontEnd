import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { ReactNode, useRef } from "react";

export type ModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type Props = ModalProps & {
  title: string;
  children: ReactNode;
};

export const Modal: React.FC<Props> = ({
  open,
  setOpen,
  title,
  children,
}: Props) => {
  const focusRef = useRef<null>(null);

  function handleOnCloseClick() {
    setOpen(false);
  }

  return (
    <Dialog
      open={open}
      onClose={setOpen}
      initialFocus={focusRef}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-4 mx-auto my-auto flex h-max max-h-screen max-w-max flex-col items-center justify-center rounded-lg bg-gradient-to-b from-fred to-fpurple shadow-md">
        <Dialog.Panel
          className="relative m-1 h-max max-w-max overflow-y-auto rounded bg-white p-5"
          ref={focusRef}
        >
          <CloseButton onClick={handleOnCloseClick} />
          <Dialog.Title className="my-4 font-extrabold">{title}</Dialog.Title>
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

type CloseButtonProps = {
  onClick: () => void;
};

const CloseButton: React.FC<CloseButtonProps> = ({
  onClick,
}: CloseButtonProps) => {
  return (
    <button
      className="absolute right-0 top-0  m-2 rounded-md bg-fpink"
      onClick={onClick}
    >
      <XMarkIcon className="h-5 stroke-2 text-white" />
    </button>
  );
};

export default Modal;
