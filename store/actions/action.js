import {fetching} from "../../fetching";

export const getInfo = () => (dispatch) =>{
    fetching()
        .then((result)=>{
        dispatch({
            type: 'GET_USER',
            data:{
                avatar : result.avatar_url,
                name : result.name,
                login :result.login,
                bio: result.bio,
                company : result.company,
                loc : result.location,
                blog :result.blog,
            }

        })
    })
}

