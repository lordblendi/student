'use strict';

var DuringLaboratoryTab = DuringLaboratoryTab || {};

/*
 during laboratory controller
 getting the necessary data from the model, so the view can get it via the controller
 action listener for the save button. it sends the id of the button, so it can be colored after the post request
 */
DuringLaboratoryTab.controller = function () {
    var self = this;
    this.entrytest = student.getEntryGrade();
    this.repository = student.laboratory.repository;
    this.deadline = student.getRemainingTime();
    this.finalcommit = m.prop('');
    this.finalcommit(student.laboratory.finalcommit);
    this.commits = student.laboratory.commits;


    this.newFinalCommit = function () {
        student.setNewFinalCommit(self.finalcommit(), "#duringsave");
    };
};