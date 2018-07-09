const submit = document.querySelector(`#submit`);
const block = document.querySelector(`#block`);

function func(event) {
    event.preventDefault();
    const newDiv = document.createElement(`div`);
    newDiv.innerHTML = `loading...`;
    block.appendChild(newDiv);
    const nickname = document.querySelector(`#username`).value;
    console.log(nickname);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.github.com/users/${nickname}`);
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
            let newAvatar = JSON.parse(xhr.responseText).avatar_url;
            block.removeChild(newDiv);
            img.src = newAvatar;
        } else if (xhr.status === 403) {
            //TODO: переписать лоадин на ошибку
            console.log(`Stop ddocing!!!!!!!`);
        } else if (xhr.status === 404) {
            block.removeChild(newDiv);
            console.log(`Try another username`);
        } else {
            block.removeChild(newDiv);
            console.log(`Error: ${xhr.status}, ${xhr.statusText}`);
        }
    };
    xhr.send();
}

submit.addEventListener('click', func);
