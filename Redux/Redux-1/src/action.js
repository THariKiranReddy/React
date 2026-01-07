export const addFunc = (payload)=>{
  return {type:"ADD",payload:payload};
}
export const subFunction = (payload)=>{
    return {type:"SUB",payload:payload};
}

//GET 
export const todoRequestAccess = ()=>{
    return {type:"REQUEST_ACCESS"};
}
export const todoSuccessAction = (payload)=>{
    return {type:'GET_TODO_SUCCESS',payload};
}
export const todoError = ()=>{
    return {type:'TODO_FAILURE'};
}

//POST
export const todoPostRequestAccess = ()=>{
    return {type:"REQUEST_ACCESS"};
}
export const todoPostSuccessAction = (payload)=>{
    return {type:'POST_TODO_SUCCESS',payload};
}
export const todoPostError = ()=>{
    return {type:'TODO_FAILURE'};
}