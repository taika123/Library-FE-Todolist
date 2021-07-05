const TODOS_STOREGE_KEY = 'TODOS'

export default{
    get(){
        return JSON.parse(localStorage.getItem(TODOS_STOREGE_KEY)) || []
    },
    set(todos){
        localStorage.setItem(TODOS_STOREGE_KEY, JSON.stringify(todos));
    }
}