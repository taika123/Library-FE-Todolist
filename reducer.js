import storaged from './util/storaged.js'

const init = {
    todos: storaged.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed,
    },
    editIndex: null,
}

const actions = {
    add({todos} , title){
        if(title){
            todos.push({title, complete:false})
            storaged.set(todos)
        }
    },
    toggle({todos}, index){
        const todo = todos[index]
        todo.completed = !todo.completed
        storaged.set(todos)
    },
    toggleAll({todos}, completed){
        todos.forEach(todo => todo.completed = completed)
        storaged.set(todos)
    },
    destroy({todos}, index){
        todos.splice(index, 1)
        storaged.set(todos)
    },
    switchFilter(state, filter){
        state.filter = filter;
    },
    clearCompleted(state){
        state.todos = state.todos.filter(state.filters.active)
        storaged.set(state.todos)
    },
    startEdit(state, index){
        state.editIndex = index
    },
    endEdit(state, title){
        if(state.editIndex !== null){
            if(title){
                state.todos[state.editIndex].title = title 
                storaged.set(state.todos)
            }else{
                this.destroy(state, state.editIndex)
            }
            state.editIndex = null
        }
    },
    cancelEdit(state){
        state.editIndex = null
    }
}

export default function reducer(state = init, action, args) {
    //cách 1
    actions[action] && actions[action](state, ...args)
    
    //cách 2
    // switch(action) {
    //     case 'add':
    //         const [title] = args
    //         return {
    //             ...state,
    //             todos: [...state.todos, {
    //                 title,
    //                 complete: false
    //             }]
    //         }
    //     default:
    
    return state
}