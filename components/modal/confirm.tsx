import React from "react";
import Modal, { ModalProps } from "./modal";

type Props = ModalProps & {
  onConfirm: () => void;
};

const ConfirmModal: React.FC<Props> = ({ open, setOpen, onConfirm }: Props) => {
  function handleOnConfirm() {
    onConfirm();
    setOpen(false);
  }

  function handleOnCancel() {
    setOpen(false);
  }

  return (
    <Modal
      title="Are you sure you want to do this?"
      open={open}
      setOpen={setOpen}
    >
      <div className="mx-auto flex max-w-xs items-center justify-around font-bold">
        <button
          onClick={handleOnConfirm}
          className="rounded-md bg-fbrgreen/70 py-2 px-4 text-fpurple shadow-md hover:bg-fbrgreen"
        >
          Yes
        </button>
        <button
          onClick={handleOnCancel}
          className="rounded-md bg-fbryellow/70 py-2 px-4 text-fred shadow-md hover:bg-fbryellow"
        >
          No
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
