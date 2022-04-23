const tasksInitialState = {
    loading: true,
    data: [], 
    errors: {}
}

const tasksReducer=(state=tasksInitialState,action)=>{
    switch(action.type){
        case 'ADD_TASK':{
            return {...state, data: [...state.data, {...action.payload}]}
        }
        case 'GET_TASKS':{
            return {...state, data: [...action.payload]}
        }
        case 'EDIT_TASK':{
            return {...state, data: state.data.map((ele) => {
                if(ele.id == action.payload.id){
                    return {...action.payload}
                } else {
                    return {...ele}
                }
            }) }
            
        }
        case 'DELETE_TASK':{
            return {...state, data: state.data.filter(ele=>{
                return(ele.id!==action.payload)
            }) }
        }
        case 'TOGGLE_LOADING' : {
            return {...state, loading: !state.loading}
        }
        default:return {...state}
    }
}
export default tasksReducer