import { Button } from "components/button/button";
import { Program } from "model/model";
import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { engRegex, thRegex } from "utils/regex";
import Modal, { ModalProps } from "./modal";

type Props = ModalProps & {
  setProgram: Dispatch<SetStateAction<Program[]>>;
};
const AddProgramModal: React.FC<Props> = ({
  open,
  setOpen,
  setProgram,
}: Props) => {
  const [thaiCur, setThaiCur] = useState<string>("");
  const [engCur, setEngCur] = useState<string>("");

  function handleOnCurThaiChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.match(/^[().ก-๏0-9 ]*$/) != null)
      setThaiCur(e.target.value);
  }

  function handleOnCurEngChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.match(/^[().a-zA-Z0-9 ]*$/) != null)
      setEngCur(e.target.value);
  }

  function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("press");
  }

  return (
    <Modal title="เพิ่มหลักสูตรใหม่" open={open} setOpen={setOpen}>
      <form className="space-y-4" onSubmit={handleOnSubmit}>
        <InputForm
          id="cur_thai"
          label="ชื่อหลักสูตร(ภาษาไทย)"
          value={thaiCur}
          onChange={handleOnCurThaiChange}
        />
        <InputForm
          id="cur_eng"
          label="ชื่อหลักสูตร(English)"
          value={engCur}
          onChange={handleOnCurEngChange}
        />
        <SubmitButton />
      </form>
    </Modal>
  );
};

type InputFormProps = {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputForm: React.FC<InputFormProps> = ({
  id,
  label,
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

const SubmitButton: React.FC = () => (
  <button
    type="submit"
    className="mx-auto block rounded-md bg-fbrgreen/70 py-2 px-6 text-center text-xl font-bold text-fpurple
shadow-md hover:bg-fbrgreen"
  >
    เพิ่ม
  </button>
);

export default AddProgramModal;
