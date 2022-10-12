import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import EditTable from "./edit_table";
import { EditButton } from "components/button";
import { PlanContent } from "components/student/table/plan_table";

type Props = {
  plans: PlanContent[];
  setPlans: Dispatch<SetStateAction<PlanContent[]>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const SearchTable: React.FC<Props> = ({
  plans,
  setPlans,
  setIsOpen,
}: Props) => {
  function handleOnAddClick() {
    setIsOpen(true);
  }

  function handleOnEditClick(index: number) {
    console.log(plans[index]);
  }

  return (
    <EditTable
      onClick={handleOnAddClick}
      contents={plans.map(
        ({ courseId, courseName }: PlanContent, index: number) => {
          return {
            texts: [courseId, courseName],
            components: [
              <EditButton
                key={courseId + courseName + index}
                onClick={() => handleOnEditClick(index)}
              />,
            ],
          };
        }
      )}
    />
  );
};

export default SearchTable;
