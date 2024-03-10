const initState = {
    loading: false,
    data: [],
    err: false,
    totalPages: 1,
  };
  //don't manipulate the above object data
  
  const wineReducer = (state,action) => {
    switch (action.type){
      case "FETCH_LOADING": {
        return {
          ...state,
          loading: true
        }
      }
    
    case "FETCH_SUCCESS": {
      return {
        ...state,
        loading : false,
        err: false,
        data: action.payload.data,
        totalPages:action.payload.total
      }
    }
    case "FETCH_FAILURE":{
      return {
        ...state,
        loading:false,
        err:true,
        data: [],
        totalPages: 1
      }
    }
    default : {
      throw new Error('invalid action type')
    }
  };
  };
  
  
  
  //don't manipulate the below object data
  export { wineReducer, initState };
  