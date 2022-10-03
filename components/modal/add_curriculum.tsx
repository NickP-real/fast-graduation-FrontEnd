import React from "react";
import Modal, { ModalProps } from "./modal";

const AddCurriculumModal: React.FC<ModalProps> = ({
  open,
  setOpen,
}: ModalProps) => {
  return (
    <Modal title="เพิ่มหลักสูตรใหม่" open={open} setOpen={setOpen}>
      <section className="my-4 space-y-2">
        <div className="">
          <label htmlFor="cur_thai" className="inline-block w-36">
            ชื่อหลักสูตร(ภาษาไทย)
          </label>
          <input id="cur_thai" className="w-40" />
        </div>
        <div className="">
          <label htmlFor="cur_eng" className="inline-block w-36">
            ชื่อหลักสูตร(English)
          </label>
          <input id="cur_eng" className="w-40" />
        </div>
      </section>
      <button className="mx-auto block rounded-xl bg-fbrgreen py-2 px-6 text-xl font-extrabold text-fpurple shadow-md">
        เพิ่ม
      </button>
    </Modal>
  );
};

export default AddCurriculumModal;
