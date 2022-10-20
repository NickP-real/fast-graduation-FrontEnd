import { Course } from "model/model";
import Modal, { ModalProps } from "./modal";

type Props = ModalProps & {
  course: Course;
};

const DescriptionModal: React.FC<Props> = ({
  open,
  setOpen,
  course,
}: Props) => {
  return (
    <Modal title="รายละเอียดวิชา : Description" open={open} setOpen={setOpen}>
      <main className="space-y-2 max-w-md">
        <section className="flex space-x-2">
          <div className="w-40 font-bold">
            <p>รหัสวิชา</p>
            <p>ชื่อวิชา</p>
            <p>Course name</p>
          </div>
          <div>
            <p>{course.id}</p>
            <p>{course.name_th}</p>
            <p>{course.name_en}</p>
          </div>
        </section>
        <section>
          <p className="mb-1 font-bold">คำอธิบาย</p>
          <p className="">{course.description_th}</p>
        </section>

        <section>
          <p className="mb-1 font-bold">Description</p>
          <p className="">{course.description_en}</p>
        </section>
      </main>
    </Modal>
  );
};

export default DescriptionModal;
