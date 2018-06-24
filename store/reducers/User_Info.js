const State = {
        avatar: '',
        name: '',
        login: '',
        bio: '',
        company: '',
        loc: '',
        blog: ''
};

export default function User_Info(state = State,action) {
    if(action.type ==='GET_USER'){
        return Object.assign({},state,action.data);
    }
    else
        return state;
}