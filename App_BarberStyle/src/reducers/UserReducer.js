export const initialState = {
   avatar: '',
   favoritos: [],
   appointment: []
};

export const UserReducer = (state,action) =>{
    switch(action.type){
        case 'setAvatar':
            return {...state, avatar: action.payload.avatar };
        breack;
        default:
            return state;
    }

}