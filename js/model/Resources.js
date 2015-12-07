function Resources() {
    var self = this;
    this.json = "";
    this.urls = {
        "host": "http://localhost/laboradmin",
        "server": "http://localhost:3000",
        "serverstudent": "/student",
        "serversettings": "/settings",
        "serverlaboratory": "/laboratory",
        "servergeneral": "/general",
        "serverresult": "/results",
        "serversetfinalcommit": "/setfinalcommit",
        "serversetsettings": "/setsettings",
        "serverlaboratory-after": "/lab/after",
        "serverlaboratory-before": "http://localhost:3000/student",
        "serverlaboratory-during": "http://localhost:3000/student",
        "resources": "/resources",
        "settings": "/settings",
        "results": "/results",
        "laboratory": "/",
        "resourceshu": "/resources-hu.json"

    };

    this.getServer = function () {
        return this.urls.server + this.urls.serverstudent + "/" + student.id;
    };

    this.getResource = function (key) {
        return self.json[key];
    };

    this.setResources = function (newResources) {
        self.json = newResources;
    };

    this.getResources = function (routing) {
        //get(this.urls.host + this.urls.resources + this.urls.resourceshu, this.setResources, routing);
        get(this.urls.server + this.urls.resources, this.setResources, routing);
    };

};