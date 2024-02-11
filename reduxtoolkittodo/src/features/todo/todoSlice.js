import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
  todos: [{id: 1, text: "Hello world"}]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  // update the state through reducer function
  reducers: { // contains properties or fuctions
    // function definitions
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), 
        text: action.payload // payload is an object
      }
      state.todos.push(todo);
    
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  }
});

// export individual functionality to update the state, helpful in components
export const { addTodo, removeTodo } = todoSlice.actions;

// store only captures the registered reducers
export default todoSlice.reducer;