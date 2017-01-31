const reducer = (store, action) => {
  switch(action.type) {
    case 'ADD_ITEM': 
      return {
        ...store,
        items: [...store.items, action.payload]
      }

    case 'DELETE_ITEM':
      return {
        ...store,
        items: store.items.filter(el => el.id != action.payload)
      } 

    case 'CREATE_NEW_SCHEDULE':
      return {
        ...store,
        schedule: action.payload
      }

    default:
      return store;
  }
}

export default reducer;