const submit = document.querySelector('#submit');
const block = document.querySelector('#block');
const img = document.querySelector('#img');

function func(event) {
    event.preventDefault();
    const newDiv = document.createElement('div');
    img.src = '30.gif';
    const nickname = document.querySelector('#username').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.github.com/users/${nickname}`);
    xhr.onload = function() {
        switch (xhr.status) {
            case 200:
                let newAvatar = JSON.parse(xhr.responseText).avatar_url;
                img.src = newAvatar;
                break;
            case 403:
                img.src = 'error.png';
                newDiv.innerHTML = 'Forbidden error';
                block.appendChild(newDiv);
                break;
            case 404:
                img.src = 'error.png';
                newDiv.innerHTML = 'User not found. Try another username.';
                block.appendChild(newDiv);
            default:
                img.src = 'error.png';
                newDiv.innerHTML = `Error: ${xhr.status}, ${xhr.statusText}`;
                block.appendChild(newDiv);
        }
    };
    xhr.send();
}

submit.addEventListener('click', func);
