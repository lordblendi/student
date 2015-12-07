'use strict';

var BeforeLaboratoryTab = BeforeLaboratoryTab || {};


BeforeLaboratoryTab.controller = function () {
    this.location = student.laboratory.location;
    this.time = student.laboratory.time;
    this.demonstrator = student.laboratory.demonstrator;

};