import React from "react";
import Menu from "./menu";

export const MenuPanel: React.FC = () => {
  return (
    <section className="container grid flex-grow grid-cols-3 gap-3 my-5 mx-auto md:gap-x-4 md:gap-y-6">
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
    </section>
  );
};

export default MenuPanel;
