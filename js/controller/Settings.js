'use strict';

var Settings = Settings || {};


Settings.controller = function () {
    var self = this;
    this.sshPublicKey = m.prop('');
    this.email = m.prop('');
    this.mailingList = m.prop('');
    this.notification = m.prop('');

    this.sshPublicKey(student.settings.sshPublicKey);
    this.email(student.settings.email);
    this.mailingList(student.settings.mailingList);
    this.notification(student.settings.notification);

    this.oldpwd = m.prop('');
    this.newpwd = m.prop('');
    this.newpwdagain = m.prop('');


    this.saveSettings = function () {
        $("#inputpwd").removeClass('wronginput');
        $("#inputpwdagain").removeClass('wronginput');
        $("#oldpwd").removeClass('wronginput');

        var data = {
            "mailingList": self.mailingList(),
            "notification": self.notification()
        };

        if (self.email()) {
            data.email = self.email();
        }

        if (self.sshPublicKey()) {
            data.sshPublicKey = self.sshPublicKey();
        }

        student.setSettings(data);

        if (self.oldpwd() && self.newpwd()) {
            if (self.newpwdagain()) {
                if (self.newpwd() === self.newpwdagain()) {
                    student.updateSettings(self.oldpwd(), self.newpwd(), '#settingssave');
                }
                else {
                    $("#inputpwd").addClass('wronginput');
                    $("#inputpwdagain").addClass('wronginput');
                }
            }
            else {
                $("#inputpwdagain").addClass('wronginput');
            }
        }
        else if (self.oldpwd() && !self.newpwd()) {
            $("#inputpwd").addClass('wronginput');
            if (!self.newpwdagain()) {
                $("#inputpwdagain").addClass('wronginput');
            }
        }
        else if (!self.oldpwd() && self.newpwd()) {
            $("#oldpwd").addClass('wronginput');
            if (!self.newpwdagain()) {
                $("#inputpwdagain").addClass('wronginput');
            }
            else if (self.newpwd() != self.newpwdagain()) {
                $("#inputpwd").addClass('wronginput');
                $("#inputpwdagain").addClass('wronginput');
            }
        }
        else if (self.newpwdagain()) {
            $("#inputpwd").addClass('wronginput');
            $("#oldpwd").addClass('wronginput');
        }
        else {
            student.updateSettings('#settingssave');
        }
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
