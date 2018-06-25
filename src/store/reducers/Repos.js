const Info = {
        followers: [],
        repositories: []
};

export default function Repos(state = Info, action) {
    if (action.type === 'GET_INFO')
        return Object.assign({}, state, action.data);
    else
        return state;
}