document.addEventListener('DOMContentLoaded', function() {
    const avatarElement = document.querySelector('#avatar');
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const repositoryElement = document.querySelector('#repository');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    // console.log(avatarElement);
    // console.log(nameElement);
    // console.log(usernameElement);
    // console.log(repositoryElement);
    // console.log(followersElement);
    // console.log(followingElement);
    // console.log(linkElement);

    fetch('https://api.github.com/users/BiaFRehder')
        .then(function(res) {
            return res.json();
        }) 
        .then(function(json) {
            avatarElement.src = json.avatar_url;
            nameElement.innerHTML = json.name;
            usernameElement.innerHTML = json.login;
            followersElement.innerHTML = json.followers;
            followingElement.innerHTML = json.following;
            repositoryElement.innerHTML = json.public_repos;
            linkElement.href = json.html_url;
        })
})