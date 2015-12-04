'use strict';

var DuringLaboratoryTab = DuringLaboratoryTab || {};


DuringLaboratoryTab.controller = function () {
    var self = this;
    this.entrytest = student.getEntryGrade();
    this.repository = student.laboratory.repository;
    this.deadline = student.getRemainingTime();
    this.finalcommit = m.prop('');
    this.finalcommit(student.laboratory.finalcommit);
    this.commits = student.laboratory.commits;

    this.newFinalCommit = function(){
        student.setNewFinalCommit(self.finalcommit());
    };
};