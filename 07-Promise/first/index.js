const submit = document.querySelector('#submit');
const block = document.querySelector('#block');
const img = document.querySelector('#img');

function parseJSON(data) {
    return new Promise((resolve, reject) => {
        try {
            resolve(JSON.parse(data));
        } catch (e) {
            reject(e);
        }
    });
}

function func(event) {
    img.src = '30.gif';
    const newDiv = document.createElement('div');
    const nickname = document.querySelector('#username').value;
    const pxhr = new PromisedXHR();
    pxhr.getData(`https://api.github.com/users/${nickname}`)
        .then(parseJSON)
        .then(result => {
            let newAvatar = result.avatar_url;
            img.src = newAvatar;
            console.log(newAvatar);
        })
        .catch(error => {
            img.src = 'error.png';
            newDiv.innerHTML = `Error: ${error.message}`;
            block.appendChild(newDiv);
            // console.log(error.message);
        });
}

submit.addEventListener('click', func);
