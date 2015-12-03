function get(url, nextFunction, routing) {
    m.request({method: "GET", url: url}).then(function (result) {
        nextFunction(parseJson(result));
    }).then(routing);
}

function getWithoutRouting(url, nextFunction) {
    m.request({method: "GET", url: url}).then(function (result) {
        nextFunction(parseJson(result));
    });
}

