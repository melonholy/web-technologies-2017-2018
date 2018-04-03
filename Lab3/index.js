function find() {
    fetch(`https://api.github.com/users/${document.getElementById('#log').value}`)
        .then(function (response) {
            if (response.status >= 200 && response.status < 400) {
                return response.json();
            }
        })
        .then(function (data) {
            if (data !== undefined) {
                document.getElementById('image').src = data["avatar_url"];
                document.getElementById('name').textContent = data["name"];
                document.getElementById('login').textContent = data["login"];
                document.getElementById('blog').textContent = data["blog"];
                document.getElementById('bio').textContent = data["bio"];
                document.getElementById('company').textContent = data["company"];
                document.getElementById('location').textContent = data["location"];
            }
            else {
                document.getElementById('image').style.display = "none";
                document.getElementById('name').textContent = "User was not found";
                document.getElementById('login').textContent = null;
                document.getElementById('blog').textContent = null;
                document.getElementById('bio').textContent = null;
                document.getElementById('company').textContent = null;
                document.getElementById('location').textContent = null;
            }
        })
}