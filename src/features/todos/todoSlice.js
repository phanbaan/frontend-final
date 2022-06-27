import  {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import todoApi from "../../api/todoApi";

const todoSlice = createSlice({
  name:"todos",
  initialState: {
    todo:[],
    todoEdit:"",
    searchText:"",
    sortByTime: true,
    sortByPriority: true,
    sortByName: true,
    couter: 0,
    couterPriority:0,
    couterCompleted: 0,
    todoPriority: false,
    todoCompleted:false,
  },
  reducers:{
    todoEdit: (state,action)=>{ 
      state.todoEdit = action.payload
    },
    todoSearch:(state,action)=>{
      state.searchText = action.payload
    },
    todoSortByTime: (state,action)=>{
      state.sortByTime = !state.sortByTime;
      
      state.todo = action.payload;
    },
    todoSortByPriority: (state,action)=>{
      state.sortByPriority = !state.sortByPriority;
      
      state.todo = action.payload;
    },
    todoSortByName: (state,action)=>{
      state.sortByName = !state.sortByName
      state.todo = action.payload;
    },
    todoPriority : (state,action)=>{
      state.todoPriority = action.payload;
    },
    todoCompleted:(state,action)=>{
      state.todoCompleted = action.payload
    }
  },
  extraReducers:(builder)=>{
    builder
    .addCase(todosList.fulfilled,(state,action)=>{      
      state.todo = action.payload;
      state.couter =  action.payload.length;
      state.couterPriority = state.todo.filter(t=>t.priority === true).length;   
      state.couterCompleted = state.todo.filter(t=>t.completed === true).length;
      
    })
    .addCase(createTodo.fulfilled,(state,action)=>{
      state.todo.unshift(action.payload);
    })
    .addCase(updateTodo.fulfilled,(state,action)=>{ 

      let todoUpdate = state.todo.find(t=>t.id === action.payload.id);
      todoUpdate.completed= action.payload.completed;
      todoUpdate.update_at = action.payload.update_at;
      todoUpdate.priority = action.payload.priority;
      todoUpdate.name = action.payload.name;
    }).addCase(updatePriority.fulfilled,(state,action)=>{
      let todoUpdate = state.todo.find(t=>t.id === action.payload.id);
      todoUpdate.completed= action.payload.completed;
      todoUpdate.update_at = action.payload.update_at;
      todoUpdate.priority = action.payload.priority;
      todoUpdate.name = action.payload.name;
      state.todoEdit = todoUpdate;
      state.couterPriority = state.todo.filter(t=>t.priority === true).length;
    }).addCase(updateCompleted.fulfilled,(state,action)=>{
      let todoUpdate = state.todo.find(t=>t.id === action.payload.id);
      todoUpdate.completed= action.payload.completed;
      todoUpdate.update_at = action.payload.update_at;
      todoUpdate.priority = action.payload.priority;
      todoUpdate.name = action.payload.name;
      state.todoEdit = todoUpdate;
      state.couterCompleted = state.todo.filter(t=>t.completed === true).length;
    })
    .addCase(removeTodo.fulfilled,(state,action)=>{
        let todos= state.todo.filter(t=>t.id !== action.payload.id);
        state.todo = todos;
    })
  }
})

export const todosList  = createAsyncThunk("todos/getAll",async ()=>{
    const res = await todoApi.getTodo();
    return res;
})
export const createTodo = createAsyncThunk("todos/create", async(todo)=>{
  return   await todoApi.createTodo(todo);
})

export const updateTodo = createAsyncThunk("todos/update", async(todo)=>{
  console.log('todo',todo);
  
   const res =  await  todoApi.updateTodo(todo);
   return res.todoUpdate;  
})
export const updatePriority = createAsyncThunk("todos/updatePriority", async(todo)=>{  
   const res =  await  todoApi.updateTodo(todo);
   return res.todoUpdate;  
})
export const updateCompleted = createAsyncThunk("todos/updateCompleted", async(todo)=>{  
   const res =  await  todoApi.updateTodo(todo);

   return res.todoUpdate;  
})
export const removeTodo = createAsyncThunk("todo/remove",async (todo)=>{;
  try {
    console.log("log todo",todo);
     const res = await todoApi.removeTodo(todo);
     
  } catch (error) {
    console.log("Lỗi tại remove", error.response);
  }

 
})

const {reducer,actions}= todoSlice;
export const {todoEdit,todoSearch ,todoSortByTime,todoSortByName,todoPriority,todoCompleted,todoSortByPriority} = actions;
export default reducer;