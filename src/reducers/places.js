const places = (state = [], action) => {
	switch (action.type) {
    	case 'FETCH_PLACE':
      		return action.data;
    	case 'ADD_PLACE':
      		return [...state, action.place];
    	case 'ADD_COMMENT':
        state.map(p => {
          if(p.id === action.placeId) {
    		 // console.log(action.comment_id);
            const newComment = {
              comment_id: action.comment_id,
              name: action.name,
              comment: action.comment,
              extensive: action.extensive
            }
            p.comments.push(newComment);
          }
          console.log(p)
          return p;
         })
    	case 'DELETE_COMMENT':
    		return [...state, action.updatedComments];
     		// return state.map((p) => {
       //  		if(p.id === action.placeId) {
       //    		return {
       //      		...p,
       //      		comments: p.comments.filter(c => c.comment_id !== action.comId)
       //    		}
       //  	}
      	// })
      case 'ADD_LIKE': 
        return state.map((p) => {
          if(p.id === action.placeId) {
            return {
              ...p,
              likes: p.likes + 1
            }
            // console.log(p.likes + 1)
            // return p.likes + 1
          }
          return [...state, p];
        })
    	default:
      		return state;
  }
}

export default places;
