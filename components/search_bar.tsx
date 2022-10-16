import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { ChangeEvent } from "react";

type Props = {
  query: string;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnDelClick: () => void;
};

const SearchBar: React.FC<Props> = ({
  query,
  handleOnChange,
  handleOnDelClick,
}: Props) => {
  return (
    <section className="my-4 flex h-12 w-full items-center space-x-2 rounded-xl border px-4 shadow-md">
      <MagnifyingGlassIcon className="h-5 stroke-fred stroke-[2.5px]" />
      <input
        type="text"
        className="h-full w-full border-none text-center font-bold placeholder:text-fred focus:ring-0"
        value={query}
        placeholder={"ค้นหา ชื่อ/รหัสวิชา"}
        onChange={handleOnChange}
      />
      {query && (
        <XMarkIcon
          className="h-5 stroke-fred stroke-[2.5px] hover:cursor-pointer"
          onClick={handleOnDelClick}
        />
      )}
    </section>
  );
};

export default SearchBar;
