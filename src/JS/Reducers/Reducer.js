const initialState = {
    text: "",
    tasklist: [
        {
            id: 0,
            task: "learn html",
            isDone: true
        },
        {
            id: 1,
            task: "learn es6",
            isDone: true
        },
        {
            id: 2,
            task: "learn back-end",
            isDone: false
        }]
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_TASK":
            console.log("hii there ")
            return {
                ...state,
                tasklist: action.payload ? [...state.tasklist, { id: Math.random(), task: action.payload, isDone: false }] : state.tasklist
            }
        case "REMOVE_TASK":
            return {
                ...state,
                tasklist: state.tasklist.filter((elt) => elt.id !== action.payload)
            }

        case "FINISH_TASK":
            return {
                ...state,
                tasklist: state.tasklist.map((elt) => elt.id === action.payload ? { ...elt, isDone: !elt.isDone } : elt)
            }
        case "UPDATE_TEXT":
            return {
                ...state,
                text: action.payload.target.value

            }
        case "REMOVE_TEXT":
            return {
                ...state,
                text: ""

            }
        default:
            return state;
    }
}
export default Reducer