'use strict';

var AfterLaboratoryTab = AfterLaboratoryTab || {};

/*
 after laboratory controller
 getting the necessary data from the model, so the view can get it via the controller
 */
AfterLaboratoryTab.controller = function () {
    this.entrytest = student.getEntryGrade();
    this.laboratoryreview = student.laboratory.laboratory.review;
    this.reportreview = student.laboratory.report.review;
    this.reportgrade = student.getReportGrade();
    this.laboratorygrade = student.getLaboratoryGrade();

};