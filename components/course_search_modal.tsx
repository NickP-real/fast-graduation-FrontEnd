import { Combobox, Dialog } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { ChangeEvent, Dispatch, useState } from "react";
import { PlanContent } from "./student/table/plan_table";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  plans: PlanContent[];
  setPlans: Dispatch<React.SetStateAction<PlanContent[]>>;
};

// ISR fetch course data

const CourseSearchModal: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  plans,
  setPlans,
}: Props) => {
  const datas: PlanContent[] = [
    { courseId: "222222", courseName: "idk", courseCategory: "alsoIdk" },
  ];

  const [query, setQuery] = useState<string>("");

  const filterdDatas: PlanContent[] = query
    ? datas.filter((data) => {
      const id: string = data.courseId;
      const name: string = data.courseName;
      const category: string = data.courseCategory;
      const searchStr: string = `${id}${name}${category}`.toLowerCase();
      return searchStr.includes(query.toLowerCase().replace(/\s+/g, ""));
    })
    : [];

  function handleOnInputChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function handleOnSelect(selected: PlanContent) {
    const isIncluded: boolean = plans.some(
      (item) => item.courseId === selected.courseId
    );
    if (isIncluded) {
      alert(`${selected.courseId} ${selected.courseName} was included`);
      return;
    }
    setIsOpen(false);
    setPlans([...plans, selected]);
  }

  return (
    <Dialog open={isOpen} onClose={setIsOpen} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 mx-auto">
        <Dialog.Panel>
          <Combobox
            as="div"
            className="mx-auto mt-[25vh] max-w-xl divide-y overflow-hidden rounded-xl bg-white"
            onChange={handleOnSelect}
          >
            <div className="flex items-center px-4">
              <MagnifyingGlassIcon className="h-6 w-6 stroke-2" />
              <Combobox.Input
                onChange={handleOnInputChange}
                className="ml-2 h-12 w-full border-0 bg-transparent text-lg placeholder-fred focus:outline-none"
                placeholder="Search Course..."
              />
            </div>
            {filterdDatas.length > 0 && (
              <Combobox.Options className="max-h-96 overflow-y-auto py-4 text-base">
                {/* loop data */}
                {filterdDatas.map((data) => (
                  <Combobox.Option key={data.courseId} value={data}>
                    {({ active }) => (
                      <div
                        className={`${active ? "bg-fyellow" : "bg-white"
                          } space-x-1 px-4 py-2`}
                      >
                        <span>{data.courseId}</span>
                        <span>{data.courseName}</span>
                        <span>{data.courseCategory}</span>
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
          </Combobox>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default CourseSearchModal;
