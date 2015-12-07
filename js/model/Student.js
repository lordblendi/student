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

    this.getDisplayName = function () {
        return self.name + " (" + self.neptun.toUpperCase() + ")";
    };

    this.getRemainingTime = function () {
        var diff = moment(self.laboratory.deadline).diff(moment(), 'hours');
        if (diff < 0) {
            diff = 0;
        }
        return diff + " óra (" + self.laboratory.deadline + ")";
    };

    this.getLaboratoryGrade = function () {
        return self.laboratory.laboratory.grade + " (" + self.laboratory.demonstrator + ")";
    };

    this.getReportGrade = function () {
        return self.laboratory.report.grade + " (" + self.laboratory.report.evaluator + ")";
    };

    this.getEntryGrade = function () {
        return self.laboratory.entrytest + " (" + self.laboratory.demonstrator + ")";
    };

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

    this.setSettings = function (newSettings, oldpwd, newpwd) {
        self.settings.email = newSettings.email;
        self.settings.mailingList = newSettings.mailingList;
        self.settings.notification = newSettings.notification;
        self.settings.sshPublicKey = newSettings.sshPublicKey;
    };

    this.setGenerals = function (newGenerals) {
        self.name = newGenerals.name;
        self.neptun = newGenerals.neptun;
        self.id = newGenerals.id;
    };

    this.setNewFinalCommit = function (newCommit) {
        self.laboratory.finalcommit = newCommit;
        self.updateFinalCommit();
    };

    this.refreshSettings = function (routing) {
        get(resources.getServer() + resources.urls.serversettings, this.setSettings, routing);
    };

    this.refreshLaboratory = function (routing) {
        get(resources.getServer() + resources.urls.serverlaboratory, this.setLaboratory, routing);
    };

    this.refreshGenerals = function () {
        getWithoutRouting(resources.getServer() + resources.urls.servergeneral, this.setGenerals);
    };

    this.refreshResults = function (routing) {
        get(resources.getServer() + resources.urls.serverresult, function (results) {
            self.results = results.results;
        }, routing);
    };

    this.updateFinalCommit = function () {
        var data = {
            finalcommit: self.laboratory.finalcommit,
            labid: self.laboratory.labid
        };

        post(resources.getServer() + resources.urls.serversetfinalcommit, data);
    };

    this.updateSettings = function (oldpwd, newpwd) {
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

        post(resources.getServer() + resources.urls.serversetsettings, data);
    };
};