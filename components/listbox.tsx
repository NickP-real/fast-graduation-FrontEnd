import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { Dispatch, SetStateAction } from "react";

export type ListboxProps = {
  contents: string[];
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

const ListBox: React.FC<ListboxProps> = ({
  contents,
  value,
  setValue,
}: ListboxProps) => {
  return (
    <Listbox
      value={value}
      onChange={setValue}
      as="div"
      className="relative inline w-32"
    >
      <Listbox.Button className="relative w-full rounded border border-black bg-white px-2 text-left text-base text-fred">
        <span className="block truncate">{value}</span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
          <ChevronDownIcon
            aria-hidden={true}
            className="h-5 w-5 text-fpurple"
          />
        </span>
      </Listbox.Button>
      <Listbox.Options className="absolute z-10 mt-1 w-full rounded-md border border-gray-400 bg-white py-1 text-base font-normal text-fred shadow-md">
        {contents.map((item) => (
          <Listbox.Option key={item} value={item}>
            {({ active }) => (
              <p className={`${active ? "bg-fbryellow" : "bg-white"} p-2`}>
                {item}
              </p>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default ListBox;
