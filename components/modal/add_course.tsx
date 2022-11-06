import { SubmitAddButton } from "components/button/submit_add_button";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { numRegex } from "utils/regex";
import Modal, { ModalProps } from "./modal";

type Props = ModalProps & {
  handleOnAdd: (id: number) => void;
};

const AddCourseModal: React.FC<Props> = ({
  open,
  setOpen,
  handleOnAdd,
}: Props) => {
  const [id, setId] = useState<string>("");

  function handleOnIdChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.match(numRegex) != null) setId(e.target.value);
  }

  function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleOnAdd(+id);
  }

  function onClose() {
    setId("");
    setOpen(false);
  }

  return (
    <Modal title="เพิ่มวิชา" open={open} setOpen={onClose}>
      <form className="space-y-4" onSubmit={handleOnSubmit}>
        <label className="mr-4 font-bold" htmlFor="id">
          รหัสวิชา
        </label>
        <input
          type="text"
          id="id"
          minLength={6}
          maxLength={6}
          title="6 digits of number"
          value={id}
          onChange={handleOnIdChange}
        />
        <SubmitAddButton />
      </form>
    </Modal>
  );
};

export default AddCourseModal;
