import {fetching, getFollowsandRepos} from "../../fetching";

export const getInfo = () => (dispatch) =>{
    const log  = document.getElementById('search').value;
    fetching(log)
        .then(({avatar_url, name, login, bio, company, location, blog})=>{
        dispatch({
            type: 'GET_INFO',
            data:{
                avatar : avatar_url,
                name : name,
                login :login,
                bio: bio,
                company : company,
                loc : location,
                blog :blog,
            }

        })
    })

};
export const sendFollow = (state) => (dispatch) => {
    getFollowsandRepos()
        .then((response) => {
            dispatch({
                type: 'GET_INFO',
                data: response,
            })
        })
};
