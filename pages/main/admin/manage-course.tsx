import Panel from "components/main/panel";
import { AdminPage } from "components/page";
import React from "react";
import SearchTable from "components/admin/table/search_table";
import SearchBar from "components/search_bar";

const ManageCourse: React.FC = () => {
  return (
    <AdminPage>
      <h2 className="fast-text text-3xl">จัดการข้อมูลรายวิชาที่เปิดสอน</h2>
      <Panel>
        {/* search bar */}
        <SearchBar />
        <div className="my-6">
          <SearchTable />
        </div>
      </Panel>
    </AdminPage>
  );
};

export default ManageCourse;
