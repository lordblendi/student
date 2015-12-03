function Student() {
    var self = this;
    this.name = "Name";
    this.neptun = "NEPTUN";
    this.settings = {
        email: "",
        mailingList: false,
        notification: false,
        sshPublicKey: ""
    };

    this.setSettings = function (newSettings) {
        console.log(newSettings);
        self.settings.email = newSettings.email;
        self.settings.mailingList = newSettings.mailingList == "true";
        self.settings.notification = newSettings.notification == "true";
        self.settings.sshPublicKey = newSettings.sshPublicKey;
    };
    this.refreshSettings = function (routing) {
        get("http://localhost:3000/student/1/settings", this.setSettings, routing);
    };
}