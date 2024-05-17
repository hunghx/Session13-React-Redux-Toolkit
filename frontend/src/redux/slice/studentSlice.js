import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
// import { instance } from '../../api'
let initState= {
    data : [],
    keyWord: "",
    isOpen : false,
    isAdd : true,
    isLoading : false
}

export const fetchAllStudent = createAsyncThunk("students/getAll",async()=>{
    console.log("gọi api fetch all students");
    const response = await axios.get("http://localhost:8000/studentsss")
    return response.data;
})  // middleware for fetch
export const addNewStudent = createAsyncThunk("students/add",async(data)=>{
    const response = await axios.post("http://localhost:8000/students",data)
    return response.data;
})  // middleware for fetch



export const studentSlice = createSlice({
    name: "student",
    initialState: initState,
    reducers : {
        // crud student 
        // addStudent(state , action){  // action gồm {type , payload}
        //     return {...state,data : [...state.data,action.payload]}
        // },
        // deleteStudent(state,action){
        //     return {...state,data : state.data.filter(item => item.id!== action.payload)}
        // },
        // editStudent(state,action){
        //     return {...state,data : state.data.map(item => item.id === action.payload.id? action.payload : item)}
        // },
        // getAllStudent(state,action){
        //     return {...state,data : action.payload}
        // }
        // crud search
        toggleForm(state,action){
            return {...state,isOpen : !state.isOpen}
        }
    }
,
    extraReducers : (builder)=>{
        builder.addCase(fetchAllStudent.pending, (state,action)=>{ // đang chờ tải data
          console.log("đang chờ");
                state.isLoading = true;
          // cập nhật trạng thái của state 
        })
        builder.addCase(fetchAllStudent.fulfilled, (state,action)=>{ /// tai xong data
           console.log("chạy xong rồi");
           state.isLoading = false;
           state.data = action.payload;  
        })
        builder.addCase(fetchAllStudent.rejected, (state,action)=>{ /// tai thất bại
          console.log("lỗi");
        })

        builder.addCase(addNewStudent.fulfilled,(state,action)=>{
         state.data = [...state.data,action.payload]
        })
    }
})
export const {toggleForm} = studentSlice.actions;
export default studentSlice.reducer;


