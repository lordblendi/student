'use strict';

var DuringLaboratoryTab = DuringLaboratoryTab || {};


DuringLaboratoryTab.controller = function () {
    this.entrytest = student.getEntryGrade();
    this.repository = student.laboratory.repository;
    this.deadline = student.getRemainingTime();
};