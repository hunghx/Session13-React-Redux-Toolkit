import "./App.css";
import ListStudent from "./components/ListStudent";
import StudentInformation from "./components/StudentInformation";
import StudentEdit from "./components/StudentEdit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudent } from "./redux/slice/studentSlice";

function App() {
  // trạng thái tắt mở form 
  // trạng thái action 
  // const [isOpen, setIsOpen] = useState(true)
  // const [isAdd, setIsAdd] = useState(false)

  const dispatch = useDispatch();
  // lấy các trạng thái từ store 


  let isOpen = useSelector(state => state.student.isOpen)
  let isAdd = useSelector(state => state.student.isAdd)
  useEffect(()=>{
    dispatch(fetchAllStudent())
  },[]) // chỉ chạy 1 lần
  return (
    <>
      <ListStudent />
      {
        isOpen && (isAdd ?<StudentInformation />:<StudentEdit/>)
      }
    </>
  );
}

export default App;
