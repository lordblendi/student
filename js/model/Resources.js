/*
 class for handling resources.
 urls are saved as an object
 resources saved as an object after loading
 */

function Resources() {
    var self = this;
    this.resource = "";
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

    //returns the first part of the server's url
    this.getServer = function () {
        return this.urls.server + this.urls.serverstudent + "/" + student.id;
    };

    //returns the key's value from the resource object
    this.getResource = function (key) {
        return self.resource[key];
    };

    this.setResources = function (newResources) {
        self.resource = newResources;
    };

    this.getResources = function (routing) {
        //get(this.urls.host + this.urls.resources + this.urls.resourceshu, this.setResources, routing);
        get(this.urls.server + this.urls.resources, this.setResources, routing);
    };

}