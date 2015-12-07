/*
 functions handling the communications between the front end and the back end
 */

//TODO error handling in get requests - popup?

/*
 get request with routing
 after the data arrives, it parses it and gives the data to the next function (provided by caller class)
 when data handling is finished, calls the next function, that should be a routing function
 */
function get(url, nextFunction, routing) {
    m.request({method: "GET", url: url}).then(function (result) {
        nextFunction(parseJson(result));
    }).then(routing);
}

/*
 get request without routing
 after the data arrives, it parses it and gives the data to the next function (provided by caller class)
 */
function getWithoutRouting(url, nextFunction) {
    m.request({method: "GET", url: url}).then(function (result) {
        nextFunction(parseJson(result));
    });
}

/*
 post request
 it gets an id, and that element will be recolord for a few seconds depending on success or error
 */
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
        /*
         success handling function
         if status is ok add green coloring for 5 seconds
         otherwise add red coloring for 10 seconds
         */
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
    }, function () {
        //error handling function
        // upon error add red coloring for 10 seconds
        $(id).addClass('statusNotOk');
        setTimeout(function () {
            $(id).removeClass('statusNotOk');
        }, 10000);
    });
}

