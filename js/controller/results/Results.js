'use strict';

var Results = Results || {};

/*
 results controller
 getting the necessary data from the model, so the view can get it via the controller
 */
Results.controller = function () {
    this.results = student.results;

    this.ordinals = [];
    this.entries = [];
    this.reports = [];
    this.laboratories = [];

    this.ordinals.push(<td class="td-bold">{resources.getResource("results-label-ordinal")}</td>);
    this.entries.push(<td class="td-bold">{resources.getResource("results-label-entrytest")}</td>);
    this.reports.push(<td class="td-bold">{resources.getResource("results-label-report")}</td>);
    this.laboratories.push(<td class="td-bold">{resources.getResource("results-label-laboratory")}</td>);

    for (var i = 0; i < this.results.length; i++) {
        this.ordinals.push(<td class="td-bold">{i + 1}</td>);
        this.entries.push(<td>{this.results[i].entry}</td>);
        this.reports.push(<td>{this.results[i].report}</td>);
        this.laboratories.push(<td>{this.results[i].lab}</td>);
    }

};
