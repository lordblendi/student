'use strict';

var ResultLaboratory = ResultLaboratory || {};


ResultLaboratory.view = function () {

    //TODO pótlás esetén
    //if(0){
    //    return <tr>
    //        <td class="td-bold">{resources.getResource("results-label-laboratory")}</td>
    //        <td>{resources.getResource("results-label-ordinal1")}</td>
    //        <td>{resources.getResource("results-label-ordinal2")}</td>
    //        <td>{resources.getResource("results-label-ordinal3")}</td>
    //        <td>{resources.getResource("results-label-ordinal4")}</td>
    //        <td>{resources.getResource("results-label-ordinal5")}</td>
    //        <td>{resources.getResource("results-label-ordinalretry")}</td>
    //    </tr>
    //}
    return <tr>
        <td class="td-bold">{resources.getResource("results-label-laboratory")}</td>
        <td>{resources.getResource("results-label-ordinal1")}</td>
        <td>{resources.getResource("results-label-ordinal2")}</td>
        <td>{resources.getResource("results-label-ordinal3")}</td>
        <td>{resources.getResource("results-label-ordinal4")}</td>
        <td>{resources.getResource("results-label-ordinal5")}</td>
    </tr>
};
