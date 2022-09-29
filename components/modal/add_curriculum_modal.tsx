import React from "react";
import Modal, { ModalProps } from "./modal";

const AddCurriculumModal: React.FC<ModalProps> = ({
  open,
  onClose,
}: ModalProps) => {
  return (
    <Modal title="เพิ่มหลักสูตรใหม่" open={open} onClose={onClose}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="cur_thai">ชื่อหลักสูตร(ภาษาไทย)</label>
            </td>
            <td>
              <input id="cur_thai" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="cur_thai">ชื่อหลักสูตร(English)</label>
            </td>
            <td>
              <input id="cur_thai" />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="mx-auto block rounded-md bg-fbrgreen py-2 px-6 text-xl font-extrabold text-fpurple shadow-sm">
        เพิ่ม
      </button>
    </Modal>
  );
};

export default AddCurriculumModal;
