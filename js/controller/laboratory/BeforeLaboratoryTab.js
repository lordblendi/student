'use strict';

var BeforeLaboratoryTab = BeforeLaboratoryTab || {};

/*
 before laboratory controller
 getting the necessary data from the model, so the view can get it via the controller
 */
BeforeLaboratoryTab.controller = function () {
    this.location = student.laboratory.location;
    this.time = student.laboratory.time;
    this.demonstrator = student.laboratory.demonstrator;

};