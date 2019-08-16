const places = (state = [], action) => {
	switch (action.type) {
    	case 'FETCH_PLACE':
      		return action.data;
      case 'DELETE_PLACE':
        return state.filter(p => p.id !== action.placeId)
    	default:
      		return state;
  }
}

export default places;
