'use strict';

var Settings = Settings || {};


Settings.controller = function () {
    var self = this;
    this.SshPublicKey = m.prop('');
    this.email = m.prop('');
    this.mailingList = m.prop('');
    this.notification = m.prop('');

    this.refreshSettingsData = function () {
        self.SshPublicKey(student.settings.sshPublicKey);
        self.email(student.settings.email);
        self.mailingList(student.settings.mailingList);
        self.notification(student.settings.notification);
    };


    this.refreshSettingsData();

    this.saveSettings = function () {
        var mail = "false";
        if (self.mailingList()) {
            mail = "true";
        }

        var notification = "false";
        if (self.notification()) {
            notification = "true";
        }

        student.setSettings({
            "email": self.email(),
            "mailingList": mail,
            "notification": notification,
            "sshPublicKey": self.SshPublicKey()
        });
        //self.refreshSettingsData();
    };

    this.toogleMailinglist = function () {
        if (self.mailingList()) {
            self.mailingList(false);
        }
        else {
            self.mailingList(true);
        }
    };

    this.toogleNotification = function () {
        if (self.notification()) {
            self.notification(false);
        }
        else {
            self.notification(true);
        }
    };


};

//Settings.saveSettings = function (){
//
//};
