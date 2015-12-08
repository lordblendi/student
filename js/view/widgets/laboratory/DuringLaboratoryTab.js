'use strict';

var DuringLaboratoryTab = DuringLaboratoryTab || {};

/*
 during laboratory tab view
 */
DuringLaboratoryTab.view = function (ctrl) {
    var options = [];
    for (var i = 0; i < ctrl.commits.length; i++) {
        options.push(<option value={i}>{ctrl.commits[i]}</option>)
    }

    return <div role="tabpanel" class="tab-pane" id="during">
        <table>
            <tr>
                <td class="td-right td-bold">{resources.getResource("laboratory-label-deadline")}</td>
                <td class="td-left" id="duringdeadline">{ctrl.deadline}</td>
            </tr>
            <tr>
                <td class="td-middle td-bold" colspan="2">{resources.getResource("laboratory-label-repository")}</td>
            </tr>
            <tr>
                <td class="td-middle" id="duringrepository" colspan="2">{ctrl.repository}</td>
            </tr>
            <tr>
                <td class="td-right td-bold">{resources.getResource("laboratory-label-entrytest")}</td>
                <td class="td-left" id="duringentrytest">{ctrl.entrytest}</td>
            </tr>
            <tr>
                <td class="td-right td-bold">{resources.getResource("laboratory-label-finalcommit")}</td>
                <td class="td-left">
                    <div class="dropdown commits">
                        <select class="form-control" aria-labelledby="dropdownMenu1" value={ctrl.finalcommit()}
                                onchange={m.withAttr("value", ctrl.finalcommit)}>
                            {options}
                        </select>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="td-middle" colspan="2">
                    <button name="duringsave" type="button"
                            class="btn btn-default"
                            onclick={ctrl.newFinalCommit}> {resources.getResource("laboratory-label-save")}</button>
                </td>
            </tr>
        </table>
    </div>

};

