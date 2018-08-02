import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

const url = 'https://api.vschool.io.darlene.todo'

// Action Creators
export const getTodos = () => {
    return (dispatch) => {
        axios.get(url)
            .then(response => {
                dispatch({
                    type: "GET_TODOS",
                    todos: response.data
                })        
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export const addTodo = newTodo => {
    return dispatch => {
        axios.post(url, newTodo)
            .then(response => {
                dispatch({
                    type: "ADD_TODO",
                    newTodo: response.data
                })
            })
    }
}

// Edit Todo

// Delete TODO

const initialState = {
    todos: []
}
// Reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_TODOS":
            return {
                todos: action.todos
            }
        case "ADD_TODO":
            return {
                todos: [...state.todos, action.newTodo]
            }
        default: 
            return state
    }
}

export default createStore(reducer, applyMiddleware(thunk))