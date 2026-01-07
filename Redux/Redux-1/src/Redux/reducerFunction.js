export const reducerFunction = (state,action)=>{
  switch(action.type){
    case 'ADD':
        return {...state,counter:state.counter+action.payload};
    case 'SUB':
        return {...state,counter:state.counter-action.payload};
    case 'REQUEST_ACCESS':
        return {...state,isLoading:true};
    case 'GET_TODO_SUCCESS':
        return {...state,todo:action.payload,isLoading:false,isError:false};
    case 'POST_TODO_SUCCESS':
        return {
            ...state,
            isLoading:false,
            isError:false,
            todo:[...state.todo,action.payload]
        }
    case 'TODO_FAILURE':
        return {...state,isError:true};
    
    default:
        return state;
  }
}