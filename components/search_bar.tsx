import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

const SearchBar: React.FC<Props> = ({ query, setQuery }: Props) => {
  return (
    <section className="my-4 flex h-12 w-full items-center justify-center space-x-2 rounded-xl border border-black">
      <MagnifyingGlassIcon className="h-5 stroke-fred stroke-[2.5px]" />
      <h1 className="text-lg font-extrabold tracking-wide">
        ค้นหา ชื่อ/รหัสวิชา
      </h1>
    </section>
  );
};

export default SearchBar;
