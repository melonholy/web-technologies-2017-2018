const Info = {
        avatar: '',
        name: '',
        login: '',
        bio: '',
        company: '',
        loc: '',
        blog: ''
};

export default function User_Info(state = Info,action) {
    if(action.type ==='GET_INFO'){
        return Object.assign({}, state, action.data);
    }
    else
        return state;
}