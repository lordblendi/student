function Resources() {
    var self = this;
    this.json = "";


    this.getResource = function (key) {
        return self.json[key];
    };

    this.setResources = function (newResources) {
        self.json = newResources;
    };

    this.getResources = function (routing) {
        get("http://localhost/laboradmin/dist/resources/resources-hu.json", this.setResources, routing);
    };

};
