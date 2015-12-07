'use strict';

var Results = Results || {};


Results.view = function (ctrl) {
    var ordinals = [];
    var entries = [];
    var reports = [];
    var laboratories = [];

    ordinals.push(<td class="td-bold">{resources.getResource("results-label-ordinal")}</td>);
    entries.push(<td class="td-bold">{resources.getResource("results-label-entrytest")}</td>);
    reports.push(<td class="td-bold">{resources.getResource("results-label-report")}</td>);
    laboratories.push(<td class="td-bold">{resources.getResource("results-label-laboratory")}</td>);

    for (var i = 0; i < ctrl.results.length; i++) {
        ordinals.push(<td class="td-bold">{i + 1}</td>);
        entries.push(<td>{ctrl.results[i].entry}</td>);
        reports.push(<td>{ctrl.results[i].report}</td>);
        laboratories.push(<td>{ctrl.results[i].lab}</td>);
    }

    return <table class="table-results">
        <tr>
            {ordinals}
        </tr>
        <tr>
            {entries}
        </tr>
        <tr>
            {reports}
        </tr>
        <tr>
            {laboratories}
        </tr>
    </table>
};
