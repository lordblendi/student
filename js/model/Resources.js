function Resources() {
    var json = "";

    this.getResource = function (key) {
        return this.json[key];
    };

    this.downloadResources = function () {
        this.json = get("resources-hu.json");
        console.log(this.json);
    };
};
