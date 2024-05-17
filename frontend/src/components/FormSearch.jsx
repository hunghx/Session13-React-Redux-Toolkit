import React from 'react'
import { toggleForm } from '../redux/slice/studentSlice'
import { useDispatch } from 'react-redux'

export default function FormSearch() {
  const dispatch = useDispatch()
  const handleToggleForm=()=>{
      dispatch(toggleForm());
  }
  return (
    <div className="list">
          <button className="list_btn--themmoi" onClick={handleToggleForm} >
            Thêm mới sinh viên
          </button>
          <form >
            <input
              className="list_input--themmoi"
              type="text"
              placeholder="Nhập tên sinh viên"
            />
            <button type="button" className="list_btn--timkiem">
              Tìm kiếm
            </button>
          </form>
          <button className="list_btn--sapxep">
            Sắp xếp
          </button>
        </div>
  )
}
