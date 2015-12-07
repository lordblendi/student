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

function post(url, data, id) {
    var xhrConfig = function (xhr) {
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
        if (result.status === "ok") {
            $(id).addClass('statusOk');
            setTimeout(function () {
                $(id).removeClass('statusOk');
            }, 5000);
        }
        else {
            $(id).addClass('statusNotOk');
            setTimeout(function () {
                $(id).removeClass('statusNotOk');
            }, 10000);
        }
    }, function (error) {
        $(id).addClass('statusNotOk');
        setTimeout(function () {
            $(id).removeClass('statusNotOk');
        }, 5000);
    });
}

