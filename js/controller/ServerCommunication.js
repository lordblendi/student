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

function post(url, data) {
    var xhrConfig = function(xhr) {
        xhr.setRequestHeader("Content-Type", "application/json");
    };
    m.request({
        method: "POST",
        url: url,
        data: data,
        config: xhrConfig,
        serialize: function (data) {
            return serializeJson(data)
        }
    }).then(function (result) {
        console.log(result);
    });
}

