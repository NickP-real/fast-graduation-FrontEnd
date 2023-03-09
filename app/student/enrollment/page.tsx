import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

export default function Enrollment() {
  return (
    <div className="container mx-auto flex flex-col text-black">
      <h1>จัดการข้อมูลแผนการเรียน</h1>
      <main className="h-20 rounded shadow-md">
        <table className="w-full table-fixed text-center">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>204111</td>
              <td>Programming</td>
              <td>Programming</td>
              <td className="flex justify-center">
                <EllipsisVerticalIcon className="h-5" />
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
