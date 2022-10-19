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
      <main className="space-y-2">
        <section className="flex max-w-lg space-x-2">
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
          <textarea
            value={course.description_th}
            className="w-full"
            rows={4}
            contentEditable={false}
          />
        </section>

        <section>
          <p className="mb-1 font-bold">Description</p>
          <textarea
            value={course.description_en}
            className="w-full"
            rows={4}
            contentEditable={false}
          />
        </section>
      </main>
    </Modal>
  );
};

export default DescriptionModal;
