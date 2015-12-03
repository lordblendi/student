'use strict';

var ResultReport = ResultReport || {};


ResultReport.view = function () {

    //TODO pótlás esetén
    //if(0){
    //    return <tr>
    //        <td class="td-bold">{resources.getResource("results-label-report")}</td>
    //        <td>{resources.getResource("results-label-ordinal1")}</td>
    //        <td>{resources.getResource("results-label-ordinal2")}</td>
    //        <td>{resources.getResource("results-label-ordinal3")}</td>
    //        <td>{resources.getResource("results-label-ordinal4")}</td>
    //        <td>{resources.getResource("results-label-ordinal5")}</td>
    //        <td>{resources.getResource("results-label-ordinalretry")}</td>d>
    //    </tr>
    //}
    return <tr>
        <td class="td-bold">{resources.getResource("results-label-report")}</td>
        <td>{resources.getResource("results-label-ordinal1")}</td>
        <td>{resources.getResource("results-label-ordinal2")}</td>
        <td>{resources.getResource("results-label-ordinal3")}</td>
        <td>{resources.getResource("results-label-ordinal4")}</td>
        <td>{resources.getResource("results-label-ordinal5")}</td>
    </tr>
};
