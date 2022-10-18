import { EditButton } from "components/button";
import { Course } from "model/model";
import { useRouter } from "next/router";
import React from "react";
import EditTable from "./edit_table";

type Props = {
  courses: Course[];
};

const CourseTable: React.FC<Props> = ({ courses }: Props) => {
  const router = useRouter();

  function handleOnEditClick(id: number) {
    router.push(`/main/admin/course/edit/${id}`);
  }

  return (
    <EditTable
      contents={courses.map(
        ({ id, name_en, name_th }: Course, index: number) => {
          const courseName = `${name_en}\n${name_th}`;
          const courseId = "0".repeat(6 - id.toString().length) + id.toString();
          return {
            texts: [courseId, courseName],
            components: [
              <EditButton
                key={id + courseName + index}
                onClick={() => handleOnEditClick(id)}
              />,
            ],
          };
        }
      )}
    />
  );
};

export default CourseTable;
