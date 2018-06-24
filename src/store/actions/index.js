import {fetching} from "../../fetching";

export const getInfo = () => (dispatch) =>{
    fetching()
        .then(({avatar_url, name, login, bio, company, location, blog})=>{
        dispatch({
            type: 'GET_USER',
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

