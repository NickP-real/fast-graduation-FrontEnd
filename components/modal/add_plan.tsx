import React, { ChangeEvent, FormEvent, useState } from "react";
import { engRegex, thRegex } from "utils/regex";
import Modal, { ModalProps } from "./modal";

type Props = ModalProps & {
  onSubmit: (thName: string, enName: string) => void;
};
const AddPlanModal: React.FC<Props> = ({ open, setOpen, onSubmit }: Props) => {
  const [form, setForm] = useState<{ thName: string; enName: string }>({
    thName: "",
    enName: "",
  });

  function handleOnThNameChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.match(thRegex) != null)
      setForm((curr) => ({ ...curr, thName: e.target.value }));
  }

  function handleOnEnNameChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.match(engRegex) != null)
      setForm((curr) => ({ ...curr, enName: e.target.value }));
  }

  function onClose() {
    setForm(() => ({ thName: "", enName: "" }));
    setOpen(false);
  }

  function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("click");
    onSubmit(form.thName, form.enName);
  }

  return (
    <Modal open={open} setOpen={onClose} title={"เพิ่มแผนใหม่"}>
      <form className="space-y-4" onSubmit={handleOnSubmit}>
        <main className="space-y-2">
          <InputForm
            label="ชื่อแผน(ภาษาไทย)"
            id="plan_thai"
            value={form.thName}
            onChange={handleOnThNameChange}
          />
          <InputForm
            label="ชื่อแผน(English)"
            id="plan_eng"
            value={form.enName}
            onChange={handleOnEnNameChange}
          />
        </main>
        <button
          className="mx-auto block rounded-xl bg-fbrgreen/70 py-2 px-6 text-xl font-extrabold text-fpurple shadow-md hover:bg-fbrgreen"
          type="submit"
        >
          เพิ่ม
        </button>
      </form>
    </Modal>
  );
};

type InputFormProps = {
  label: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputForm: React.FC<InputFormProps> = ({
  label,
  id,
  value,
  onChange,
}) => (
  <div>
    <label htmlFor={id} className="w-44">
      {label}
    </label>
    <input id={id} type="text" value={value} onChange={onChange} />
  </div>
);

export default AddPlanModal;
