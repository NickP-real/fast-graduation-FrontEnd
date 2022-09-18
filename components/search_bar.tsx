import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const SearchBar: React.FC = () => {
  return (
    <section className="flex h-12 w-full items-center justify-center space-x-2 rounded-xl border border-black">
      <MagnifyingGlassIcon className="h-5 stroke-fred stroke-[2.5px]" />
      <h1 className="text-lg font-extrabold tracking-wide">
        ค้นหา ชื่อ/รหัสวิชา
      </h1>
    </section>
  );
};

export default SearchBar;