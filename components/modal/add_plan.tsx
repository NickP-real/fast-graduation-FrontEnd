import React, { ChangeEvent, useState } from "react";
import Modal, { ModalProps } from "./modal";

type Props = ModalProps & {
  onClick: (thName: string, enName: string) => void;
};
const AddPlanModal: React.FC<Props> = ({ open, setOpen, onClick }: Props) => {
  const [thName, setThName] = useState<string>("");
  const [enName, setEnName] = useState<string>("");

  function handleOnThNameChange(e: ChangeEvent<HTMLInputElement>) {
    setThName(e.target.value);
  }

  function handleOnEnNameChange(e: ChangeEvent<HTMLInputElement>) {
    setEnName(e.target.value);
  }

  function onClose() {
    setThName("");
    setEnName("");
    setOpen(false);
  }

  return (
    <Modal open={open} setOpen={onClose} title={"เพิ่มแผนใหม่"}>
      <section className="my-4 space-y-2">
        <div>
          <label htmlFor="plan_thai" className="w-44">
            ชื่อแผน(ภาษาไทย)
          </label>
          <input
            id="plan_thai"
            type="text"
            value={thName}
            onChange={handleOnThNameChange}
          />
        </div>
        <div>
          <label htmlFor="plan_eng" className="w-44">
            ชื่อแผน(English)
          </label>
          <input
            id="plan_eng"
            type="text"
            value={enName}
            onChange={handleOnEnNameChange}
          />
        </div>
      </section>
      <button
        className="mx-auto block rounded-xl bg-fbrgreen/70 py-2 px-6 text-xl font-extrabold text-fpurple shadow-md hover:bg-fbrgreen"
        onClick={() => {
          onClick(thName, enName);
        }}
      >
        เพิ่ม
      </button>
    </Modal>
  );
};

export default AddPlanModal;
