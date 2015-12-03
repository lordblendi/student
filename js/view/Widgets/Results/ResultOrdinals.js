'use strict';

var ResultOrdinals = ResultOrdinals || {};


ResultOrdinals.view = function () {

    //TODO pótlás esetén
    //if(0){
    //    return <tr>
    //        <td class="td-bold">{resources.getResource("results-label-ordinal")}</td>
    //        <td class="td-bold">{resources.getResource("results-label-ordinal1")}</td>
    //        <td class="td-bold">{resources.getResource("results-label-ordinal2")}</td>
    //        <td class="td-bold">{resources.getResource("results-label-ordinal3")}</td>
    //        <td class="td-bold">{resources.getResource("results-label-ordinal4")}</td>
    //        <td class="td-bold">{resources.getResource("results-label-ordinal5")}</td>
    //        <td class="td-bold">{resources.getResource("results-label-ordinalretry")}</td>
    //    </tr>
    //}
    return <tr>
            <td class="td-bold">{resources.getResource("results-label-ordinal")}</td>
            <td class="td-bold">{resources.getResource("results-label-ordinal1")}</td>
            <td class="td-bold">{resources.getResource("results-label-ordinal2")}</td>
            <td class="td-bold">{resources.getResource("results-label-ordinal3")}</td>
            <td class="td-bold">{resources.getResource("results-label-ordinal4")}</td>
            <td class="td-bold">{resources.getResource("results-label-ordinal5")}</td>
     </tr>
};
