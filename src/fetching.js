function fetching(log) {
  return  fetch(`https://api.github.com/users/${log}`)
        .then(results =>{
            return results.json();
        })
    }
function fetchingFollows() {
    const log= document.getElementById('search').value;
    return  fetch(`https://api.github.com/users/${log}/followers`)
        .then(results =>{
            return results.json();
        })

}
function fetchingRepos() {
    const log= document.getElementById('search').value;
    return  fetch(`https://api.github.com/users/${log}/repos`)
        .then(results =>{
            return results.json();
        })
}
   async function getFollowsandRepos() {
            return ({
                    followers: await fetchingFollows(),
                    repositories: await fetchingRepos(),
            })
        }

export { fetching,getFollowsandRepos}
