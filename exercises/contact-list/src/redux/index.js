import { createStore } from 'redux'

const initialState = {
    contacts: [

    ]
}

export const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_CONTACT':
            console.log("Contacts: ", state.contacts)
            return {
                contacts: [...state.contacts, action.contact]
            }
        default:
            return state
    }
}

const store = createStore(contactReducer)
store.describe = store.getState()

//ACTION CREATORS
export const addContact = (contact) => ({
     type: 'ADD_CONTACT',
     contact
})

export default store