import type { NextPage } from "next";
import Index from ".";
import Home from "./main";

const ProtectedPage: NextPage = () => {
  return <Home />;
};

export default ProtectedPage;
