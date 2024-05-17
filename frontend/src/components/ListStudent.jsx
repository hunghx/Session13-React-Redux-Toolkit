import PropTypes from "prop-types";
import FormSearch from "./FormSearch";
import { useSelector } from "react-redux";

export default function ListStudent() {
  let studentList = useSelector(state=>state.student.data)
  return (
    <>
      <div>
        <FormSearch/>
        <h2>Danh Sách Sinh Viên</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Tuổi</th>
              <th>Giới tính</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {
              studentList.map(stu=><tr key={stu.id}>
                <td>{stu.id}</td>
                <td>{stu.name}</td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button
                    className="list_table--btn--xem"
                  >
                    Xem
                  </button>
                  <button
                    className="list_table--btn--sua"
                  >
                    Sửa
                  </button>
                  <button
                    className="list_table--btn--xoa"
                  >
                    Xóa
                  </button>
                </td>
              </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </>
  );
}
