import axiosClient from "./axiosClient";;

const  todoApi = {
  getTodo: ()=>{
    const url ='/Todo/list';
    return axiosClient.get(url );
  },
  createTodo: (todo)=>{
    const url='/Todo/create';
    return axiosClient.post(url,todo)
  },
  updateTodo: (todo)=>{
    const id = todo.id;
    const url=`/Todo/update/${id}`;
    return axiosClient.put(url,todo)
  },
  removeTodo:(todo)=>{
    const id = todo.id;
    const todoDelete = {};
    todoDelete.userId = todo.userId;
    const url =`Todo/remove/${id}`;
    return axiosClient.post(url,todoDelete)
  }
}

export default todoApi;