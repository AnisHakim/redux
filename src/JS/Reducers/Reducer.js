const initialState = {
  text: '',
  filter: '',
  filteredList: [
    {
      id: 0,
      task: 'learn html',
      isDone: true,
    },
    {
      id: 1,
      task: 'learn es6',
      isDone: true,
    },
    {
      id: 2,
      task: 'learn back-end',
      isDone: false,
    },
  ],
  tasklist: [
    {
      id: 0,
      task: 'learn html',
      isDone: true,
    },
    {
      id: 1,
      task: 'learn es6',
      isDone: true,
    },
    {
      id: 2,
      task: 'learn back-end',
      isDone: false,
    },
  ],
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      console.log('hii there ');
      return {
        ...state,
        tasklist: action.payload
          ? [
              ...state.tasklist,
              {
                id: state.tasklist.length,
                task: action.payload,
                isDone: false,
              },
            ]
          : state.tasklist,
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        tasklist: state.tasklist.filter((elt) => elt.id !== action.payload),
      };

    case 'FINISH_TASK':
      return {
        ...state,
        tasklist: state.tasklist.map((elt) =>
          elt.id === action.payload ? { ...elt, isDone: !elt.isDone } : elt,
        ),
      };
    case 'UPDATE_TEXT':
      return {
        ...state,
        text: action.payload.target.value,
      };
    case 'REMOVE_TEXT':
      return {
        ...state,
        text: '',
      };
    case 'FILTER_TASK':
      return {
        ...state,
        filteredList:
          action.payload.toUpperCase() === 'ISDONE' ||
          action.payload.toUpperCase().includes('COMPLETE')
            ? state.tasklist.filter((el) => el.isDone)
            : action.payload.toUpperCase() === 'ISNOTDONE'
            ? state.tasklist.filter((el) => !el.isDone)
            : state.tasklist,
      };
    case 'UPDATE_FILTER':
      return {
        ...state,
        filter: action.payload.target.value,
        filteredList:
          action.payload.target.value === ''
            ? state.tasklist
            : state.filteredList,
      };
    case 'UPDATE_TASK':
      return {
        ...state,
        tasklist: state.tasklist.map((item, index) => {
          if (index !== action.payload.id) {
            // This isn't the item we care about - keep it as-is
            return item;
          }

          // Otherwise, this is the one we want - return an updated value
          return {
            ...item,
            task: action.payload.task,
          };
        }),
      };
    default:
      return state;
  }
};
export default Reducer;
