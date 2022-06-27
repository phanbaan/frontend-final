import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./authSlice";
import todoSlice from "../features/todos/todoSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    todos:todoSlice
  }
})