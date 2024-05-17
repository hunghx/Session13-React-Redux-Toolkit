import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewStudent } from "../redux/slice/studentSlice";
const initState = {
  id: "",
  name: "",
  age: "",
  gender: "",
  birthday: "",
  bornIn: "",
  address: ""
}


export default function StudentInformation() {
  const [student, setStudent] = useState(initState)
  const dispatch = useDispatch();

  const onchangeInput=(e)=>{
      let name = e.target.name;
      let value = e.target.value;
      setStudent({...student, [name] : value})
  }

  const handleAddStudent=()=>{
      dispatch(addNewStudent(student))
  }

  return (
    <div>
      <h2>Thêm mới Sinh Viên</h2>
      <form className="studentinfor_form">
        <div className="studentinfor_form--input">
          <label>Mã sinh viên</label>
          <input type="text" name="id" onChange={e=>onchangeInput(e)}/>
        </div>
        <div className="studentinfor_form--input">
          <label>Tên sinh viên</label>
          <input type="text" name="name" onChange={e=>onchangeInput(e)}/>
        </div>
        <div className="studentinfor_form--input">
          <label>Tuổi</label>
          <input type="text" name="age" onChange={e=>onchangeInput(e)}/>
        </div>
        <div className="studentinfor_form--input">
          <label>Giới Tính</label>
          <input type="text" name="gender" onChange={e=>onchangeInput(e)}/>
        </div>
        <div className="studentinfor_form--input">
          <label>Ngày sinh</label>
          <input type="text" name="birthday" onChange={e=>onchangeInput(e)}/>
        </div>
        <div className="studentinfor_form--input">
          <label>Nơi sinh</label>
          <input type="text" name="bornIn" onChange={e=>onchangeInput(e)}/>
        </div>
        <div className="studentinfor_form--input">
          <label>Địa chỉ</label>
          <input type="text" name="address" onChange={e=>onchangeInput(e)} />
        </div>
        <button type="button" className="studentinfor_form--btn--add" onClick={handleAddStudent}>
          ADD
        </button>
      </form>
    </div>
  );
}
