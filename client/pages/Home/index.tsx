import React from "react";
import Main from "@/components/layouts/Main";
import Sidebar from "@/components/layouts/Sidebar";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div className="flex flex-row">
        {/* sidebar  */}
        <Sidebar />

        <Main />
      </div>
    </>
  );
};

export default Home;
