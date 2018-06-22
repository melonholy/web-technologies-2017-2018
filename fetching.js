function fetching() {

  return  fetch(`https://api.github.com/users/gaearon`)
        .then(results =>{
            return results.json();
        })

}
export {fetching}