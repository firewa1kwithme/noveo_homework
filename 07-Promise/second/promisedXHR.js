class PromisedXHR {

    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    getData(url) {
        return new Promise((resolve, reject) => {
            this.xhr.open('GET', url, true);

            this.xhr.onload = () => {
                if (this.xhr.status === 200) {
                    resolve(this.xhr.responseText);
                } else {
                    const error = new Error(this.xhr.statusText);
                    reject(error);
                }
            };

            this.xhr.onerror = () => {
                reject(new Error('Some error occured'));
            };

            this.xhr.send();
        });
    }

    cancel() {
        console.log('cancel');
        if (this.xhr.readyState >= this.xhr.OPENED) {
            this.xhr.abort();
        }
        return this;
    }
}
