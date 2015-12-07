/*
 class for student model for saving data about the student
 */

function Student() {
    var self = this;
    this.name = "";
    this.neptun = "";
    this.id = "1";
    this.settings = {
        email: "",
        mailingList: false,
        notification: false,
        sshPublicKey: ""
    };
    //TODO több labor
    //TODO commits
    this.laboratory = {
        time: "",
        labid: "",
        location: "",
        demonstrator: "",
        description: "",
        statusCode: "",
        deadline: "",
        repository: "",
        entrytest: "",
        finalcommit: "",
        commits: {},
        report: {
            evaluator: "",
            grade: "",
            review: ""
        },
        laboratory: {
            grade: "",
            review: ""
        }
    };
    this.results = {};

    //returns name (NEPTUN)
    this.getDisplayName = function () {
        return self.name + " (" + self.neptun.toUpperCase() + ")";
    };

    //returns time difference between now and the deadline (minimum: 0)
    this.getRemainingTime = function () {
        var diff = moment(self.laboratory.deadline).diff(moment(), 'hours');
        if (diff < 0) {
            diff = 0;
        }
        return diff + " óra (" + self.laboratory.deadline + ")";
    };

    //returns laboratory grade with the name of the demonstrator
    this.getLaboratoryGrade = function () {
        return self.laboratory.laboratory.grade + " (" + self.laboratory.demonstrator + ")";
    };

    //returns report grade with the name of the evaluator
    this.getReportGrade = function () {
        return self.laboratory.report.grade + " (" + self.laboratory.report.evaluator + ")";
    };

    //returns entry test grade with the name of the demonstrator
    this.getEntryGrade = function () {
        return self.laboratory.entrytest + " (" + self.laboratory.demonstrator + ")";
    };

    //saving current laboratory attributes
    this.setLaboratory = function (newLaboratory) {
        self.laboratory.time = newLaboratory.time;
        self.laboratory.labid = newLaboratory.labid;
        self.laboratory.description = newLaboratory.description;
        self.laboratory.location = newLaboratory.location;
        self.laboratory.demonstrator = newLaboratory.demonstrator;
        self.laboratory.statusCode = newLaboratory.statusCode;

        if (self.laboratory.statusCode == "during" || self.laboratory.statusCode == "after") {
            self.laboratory.deadline = newLaboratory.deadline;
            self.laboratory.repository = newLaboratory.repository;
            self.laboratory.entrytest = newLaboratory.entrytest;
            self.laboratory.finalcommit = newLaboratory.finalcommit;
            self.laboratory.commits = newLaboratory.commits;
        }

        if (self.laboratory.statusCode == "after") {
            self.laboratory.report.evaluator = newLaboratory.report.evaluator;
            self.laboratory.report.grade = newLaboratory.report.grade;
            self.laboratory.report.review = newLaboratory.report.review;
            self.laboratory.laboratory.grade = newLaboratory.laboratory.grade;
            self.laboratory.laboratory.review = newLaboratory.laboratory.review;
        }
    };

    //saving setting attributes
    this.setSettings = function (newSettings) {
        self.settings.email = newSettings.email;
        self.settings.mailingList = newSettings.mailingList;
        self.settings.notification = newSettings.notification;
        self.settings.sshPublicKey = newSettings.sshPublicKey;
    };

    //saving general attributes
    this.setGenerals = function (newGenerals) {
        self.name = newGenerals.name;
        self.neptun = newGenerals.neptun;
        self.id = newGenerals.id;
    };

    //changes final commit in the model, and sends a request to change it on the server too
    this.setNewFinalCommit = function (newCommit, id) {
        self.laboratory.finalcommit = newCommit;
        self.updateFinalCommit(id);
    };

    //get settings from server
    this.refreshSettings = function (routing) {
        get(resources.getServer() + resources.urls.serversettings, this.setSettings, routing);
    };

    //get current laboratory from server
    this.refreshLaboratory = function (routing) {
        get(resources.getServer() + resources.urls.serverlaboratory, this.setLaboratory, routing);
    };

    //get general informations from server
    this.refreshGenerals = function () {
        getWithoutRouting(resources.getServer() + resources.urls.servergeneral, this.setGenerals);
    };

    //get results from server
    this.refreshResults = function (routing) {
        get(resources.getServer() + resources.urls.serverresult, function (results) {
            self.results = results.results;
        }, routing);
    };

    //set final commit on the server
    this.updateFinalCommit = function (id) {
        var data = {
            finalcommit: self.laboratory.finalcommit,
            labid: self.laboratory.labid
        };

        post(resources.getServer() + resources.urls.serversetfinalcommit, data, id);
    };

    //set settings on the server
    this.updateSettings = function (oldpwd, newpwd, id) {
        var data = {
            email: self.settings.email,
            notification: self.settings.notification,
            mailingList: self.settings.mailingList,
            sshPublicKey: self.settings.sshPublicKey
        };

        if (oldpwd && newpwd) {
            data.oldpwd = oldpwd;
            data.newpwd = newpwd;
        }

        post(resources.getServer() + resources.urls.serversetsettings, data, id);
    };
}