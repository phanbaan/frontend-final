import {createSelector} from "@reduxjs/toolkit"

export const isLogginSelector  = (state) =>state.user.isLoggedIn;
export const statusSelector = (state)=>state.user.status;
export const userSelector = state =>state.user.user;
export const todoSelector = state =>state.todos.todo;
export const todoEditSelector = state=> state.todos.todoEdit;
export const todoSortByTimeSelector = state =>state.todos.sortByTime;
export const todoSortByNameSelector = state =>state.todos.sortByName;
export const todoSortByPrioritySelector = state=> state.todos.sortByPriority;
export const couterSelector = state =>state.todos.couter;
export const couterPrioritySelector = state =>state.todos.couterPriority;
export const couterCompletedSelector = state =>state.todos.couterCompleted;
export const isSidebarSelector = state =>state.todos.isSidebar;
const searchTextSelector = state =>state.todos.searchText;
const todoPrioritySelector = state =>state.todos.todoPriority;
const todoCompletedSelector = state =>state.todos.todoCompleted;

export const todosSelector = createSelector(todoSelector,searchTextSelector,todoCompletedSelector,todoPrioritySelector,(todo,searchText,todoCompleted,todoPriority)=>{
  if(todoPriority){
    return todo.filter(t=>t.name.includes(searchText)&& t.priority === true)
  }
  if(todoCompleted){
      return todo.filter(t=>t.name.includes(searchText)&& t.completed === true)
  }
   return todo.filter(t=>t.name.includes(searchText))
})