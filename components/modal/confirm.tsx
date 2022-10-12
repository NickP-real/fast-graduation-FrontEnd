import React from "react";
import Modal, { ModalProps } from "./modal";

type Props = ModalProps & {
  onConfirm: () => void;
};

const ConfirmModal: React.FC<Props> = ({ open, setOpen, onConfirm }: Props) => {
  return (
    <Modal title="Confirmation" open={open} setOpen={setOpen}>
      <p>Are you sure you want to do this?</p>
      <div>
        <button>Yes</button>
        <button>No</button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
