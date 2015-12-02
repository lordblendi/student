function get(url){
    m.request({method: "GET", url: url}).then(function (result) {
        return JSON.parse(JSON.stringify(result));
    });
}