


export const request = ({
    url, method, data, token, headers = {},
    callback = () => { },
    failure = () => { }
}) => {
    return new Promise(function (resolve, reject) {
        var _headers, body;
        if (data && data.__proto__.constructor === window.FormData) {
            _headers = { ...headers };
            body = data;
        } else {
            _headers = { ...headers, "Content-Type": 'application/json' };
            body = JSON.stringify(data);
        }

        fetch(url, {
            method: method,
            mode: 'cors',
            withCredentials: false,
            headers: _headers,
            body: body
        })
            .then((request) => {
                let { headers } = request;
                let response_type = headers.get('content-type');
                if (response_type === "application/json") {
                    request.json()
                        .then((data) => {
                            if (request.ok) {
                                callback(data);
                                resolve(data);
                            } else {
                                failure(data);
                                reject(data);
                            }
                        });
                    return;
                }
                if (request.ok) {
                    callback();
                    resolve();
                    return;
                }
                throw new Error("Error desconocido");
            })
            .catch(function (err) {
                console.log(err)
                failure(err);
                reject(err);
            });
    });
};