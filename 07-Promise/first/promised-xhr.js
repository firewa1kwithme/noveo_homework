class PromisedXHR {
    getData(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);

            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    const error = new Error(xhr.statusText);
                    reject(error);
                }
            };

            xhr.onerror = () => {
                reject(new Error('Some error occured'));
            };

            xhr.send();
        });
    }
}
