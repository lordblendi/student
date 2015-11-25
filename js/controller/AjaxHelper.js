function get(url){
    m.request({method: "GET", url: url}).then(function (result) {
        console.log(result);
        return JSON.stringify(result);
    });
}