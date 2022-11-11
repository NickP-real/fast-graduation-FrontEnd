import { SubmitAddButton } from "components/button/submit_add_button";
import { Program } from "model/model";
import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import Modal, { ModalProps } from "./modal";

type Props = ModalProps & {
  setProgram: Dispatch<SetStateAction<Program[]>>;
  currProgramLength: number;
};
const AddProgramModal: React.FC<Props> = ({
  open,
  setOpen,
  setProgram,
  currProgramLength,
}: Props) => {
  const date = new Date();
  const initialNewProgram: Program = {
    program_name_th: "",
    program_name_en: "",
    program_id: currProgramLength + 1,
    start_year: date.getFullYear(),
    end_year: date.getFullYear() + 8,
  };

  const [newProgram, setNewProgram] = useState<Program>(initialNewProgram);

  function handleOnCurThaiChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.match(/^[().ก-๏0-9 ]*$/) != null)
      setNewProgram((curr) => ({ ...curr, program_name_th: e.target.value }));
  }

  function handleOnCurEngChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.match(/^[().a-zA-Z0-9'" ]*$/) != null)
      setNewProgram((curr) => ({ ...curr, program_name_en: e.target.value }));
  }

  function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setProgram((curr) => [...curr, newProgram]);

    // TODO: Api add program
    setOpen(false);
  }

  function handleOnStartYearChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.match(/^[0-9]*$/) != null)
      setNewProgram((curr) => ({ ...curr, start_year: +e.target.value }));
  }

  function handleOnEndYearChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.match(/^[0-9]*$/) != null)
      setNewProgram((curr) => ({ ...curr, end_year: +e.target.value }));
  }

  return (
    <Modal title="เพิ่มหลักสูตรใหม่" open={open} setOpen={setOpen}>
      <form className="space-y-4" onSubmit={handleOnSubmit}>
        <InputForm
          id="cur_thai"
          label="ชื่อหลักสูตร(ภาษาไทย)"
          value={newProgram.program_name_th}
          onChange={handleOnCurThaiChange}
          title="Thai program name"
        />
        <InputForm
          id="cur_eng"
          label="ชื่อหลักสูตร(English)"
          value={newProgram.program_name_en}
          onChange={handleOnCurEngChange}
          title="English program name"
        />
        <InputForm
          id="start_year"
          label="เริ่มต้นปีการศึกษา"
          value={newProgram.start_year.toString()}
          onChange={handleOnStartYearChange}
          title="Start Year"
        />
        <InputForm
          id="end_year"
          label="สิ้นสุดปีการศึกษา"
          value={newProgram.end_year.toString()}
          onChange={handleOnEndYearChange}
          title="End Year"
        />
        <SubmitAddButton />
      </form>
    </Modal>
  );
};

type InputFormProps = {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  title: string;
};

const InputForm: React.FC<InputFormProps> = ({
  id,
  label,
  value,
  onChange,
  title,
}) => (
  <div>
    <label htmlFor={id} className="w-44">
      {label}
    </label>
    <input
      id={id}
      type="text"
      value={value}
      onChange={onChange}
      title={title}
    />
  </div>
);

export default AddProgramModal;
