import { Combobox, Dialog } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { CategoryAbbr, Course } from "model/model";
import React, { ChangeEvent, Dispatch, useState } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  courses: Course[];
  enrollCourse: Course[];
  setEnrollCourse: Dispatch<React.SetStateAction<Course[]>>;
  catagories: CategoryAbbr[];
};

const CourseSearchModal: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  courses,
  enrollCourse,
  setEnrollCourse,
  catagories,
}: Props) => {
  const [query, setQuery] = useState<string>("");

  const filterdDatas: Course[] = query
    ? courses.filter((data: Course) => {
        const id: string =
          "0".repeat(6 - data.id.toString().length) + data.id.toString();
        const nameTh: string = data.name_th;
        const nameEn: string = data.name_en;
        const category: CategoryAbbr =
          catagories[data.category_id ? data.category_id - 1 : 0];

        const searchStr: string =
          `${id}${nameTh}${nameEn}${category.abbr_en}${category.abbr_th}`.toLowerCase();
        return searchStr.includes(query.toLowerCase().replace(/\s+/g, ""));
      })
    : [];

  function handleOnInputChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function handleOnSelect(selected: Course) {
    const isIncluded: boolean = enrollCourse.some(
      (item) => item.id === selected.id
    );
    if (isIncluded) {
      alert(`${selected.id} ${selected.name_en} was included`);
      return;
    }
    setEnrollCourse((enrolled) => [...enrolled, selected]);
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onClose={setIsOpen} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 mx-auto px-4">
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
                className="ml-2 h-12 w-full border-0 bg-transparent text-lg placeholder-fred focus:outline-none focus:ring-0"
                placeholder="Search Course..."
              />
            </div>
            {filterdDatas.length > 0 && (
              <Combobox.Options className="max-h-96 overflow-y-auto py-4 text-base">
                {/* loop data */}
                {filterdDatas.map((data: Course, index: number) => (
                  <Combobox.Option
                    key={data.id + index.toString()}
                    value={data}
                  >
                    {({ active }) => (
                      <div
                        className={`${
                          active ? "bg-fyellow" : "bg-white"
                        } space-x-1 px-4 py-2`}
                      >
                        <span>
                          {"0".repeat(6 - data.id.toString().length) +
                            data.id.toString()}
                        </span>
                        <span>| {data.name_en} |</span>
                        <span className="capitalize text-gray-400">
                          {
                            catagories[
                              data.category_id ? data.category_id - 1 : 0
                            ].abbr_en
                          }
                        </span>
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
