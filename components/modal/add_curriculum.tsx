import React from "react";
import Modal, { ModalProps } from "./modal";

const AddCurriculumModal: React.FC<ModalProps> = ({
  open,
  setOpen,
}: ModalProps) => {
  return (
    <Modal title="เพิ่มหลักสูตรใหม่" open={open} setOpen={setOpen}>
      <section className="my-4 space-y-2">
        <div>
          <label htmlFor="cur_thai" className="w-44">
            ชื่อหลักสูตร(ภาษาไทย)
          </label>
          <input id="cur_thai" type="text" />
        </div>
        <div>
          <label htmlFor="cur_eng" className="w-44">
            ชื่อหลักสูตร(English)
          </label>
          <input id="cur_eng" type="text" />
        </div>
      </section>
      <button className="mx-auto block rounded-xl bg-fbrgreen/70 py-2 px-6 text-xl font-extrabold text-fpurple shadow-md hover:bg-fbrgreen">
        เพิ่ม
      </button>
    </Modal>
  );
};

export default AddCurriculumModal;
