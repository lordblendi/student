'use strict';

var AfterLaboratoryTab = AfterLaboratoryTab || {};


AfterLaboratoryTab.controller = function () {
    this.entrytest = student.getEntryGrade();
    this.laboratoryreview = student.laboratory.laboratory.review;
    this.reportreview = student.laboratory.report.review;
    this.reportgrade = student.getReportGrade();
    this.laboratorygrade = student.getLaboratoryGrade();

};