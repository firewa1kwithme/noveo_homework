const submit = document.querySelector(`#submit`);
const block = document.querySelector(`#block`);

function func(event) {
    event.preventDefault();
    const newDiv = document.createElement(`div`);
    img.src = `30.gif`;
    const nickname = document.querySelector(`#username`).value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.github.com/users/${nickname}`);
    xhr.onload = function() {
        if (xhr.status === 200) {
            let newAvatar = JSON.parse(xhr.responseText).avatar_url;
            img.src = newAvatar;
        } else if (xhr.status === 403) {
            img.src = null;
            newDiv.innerHTML = `Forbidden error`;
            block.appendChild(newDiv);
        } else if (xhr.status === 404) {
            img.src = null;
            newDiv.innerHTML = `User not found. Try another username.`;
            block.appendChild(newDiv);
        } else {
            console.log(`Error: ${xhr.status}, ${xhr.statusText}`);
        }
    };
    xhr.send();
}

submit.addEventListener('click', func);
