function Student() {
    this.name = "Name";
    this.neptun = "NEPTUN";
    this.settings = {
        email: "teszt@teszt.hu",
        mailingList: true,
        notification: false,
        sshPublicKey: "SSH KULCS"
    };
    this.setSettings = function (newSettings) {
        console.log(newSettings);
        console.log(newSettings.email);
        //this.settings.email = newSettings.email;
        //this.settings.mailingList = newSettings["mailingList"] == "true";
        //this.settings.notification = newSettings["notification"] == "true";
        //this.settings.sshPublicKey = newSettings["sshPublicKey"];
    };
    this.haho = function(){
        console.log(this.settings);
        console.log(this.settings.email);
        console.log(this.settings[email]);
    };
}