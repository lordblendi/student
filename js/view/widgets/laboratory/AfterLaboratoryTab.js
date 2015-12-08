'use strict';

var AfterLaboratoryTab = AfterLaboratoryTab || {};

/*
 after laboratory tab view
 */
AfterLaboratoryTab.view = function (ctrl) {
    return <div role="tabpanel" class="tab-pane" id="after">
        <table>
            <tr>
                <td class="td-right td-bold">{resources.getResource("laboratory-label-entrytest")}</td>
                <td class="td-left" id="afterentrytest">{ctrl.entrytest}</td>
            </tr>
            <tr>
                <td class="td-right td-bold">{resources.getResource("laboratory-label-report")}</td>
                <td class="td-left" id="afterreportgrade">{ctrl.reportgrade}</td>
            </tr>
            <tr>
                <td class="td-middle" colspan="2">
                    <a id="afterreportreview" tabindex="0" class="td-review" role="button" data-container="body"
                       data-toggle="popover"
                       data-trigger="click" data-placement="bottom" data-animation="true"
                       data-content={ctrl.reportreview}>
                        {ctrl.reportreview}
                    </a>

                </td>
            </tr>
            <tr>
                <td class="td-right td-bold">{resources.getResource("laboratory-label-laboratory")}</td>
                <td class="td-left" id="afterlaboratorygrade">{ctrl.laboratorygrade}</td>
            </tr>
            <tr>
                <td class="td-middle" colspan="2">
                    <a id="afterlaboratoryreview" tabindex="1" class="td-review" role="button" data-container="body"
                       data-toggle="popover"
                       data-trigger="click" data-placement="bottom" data-animation="true"
                       data-content={ctrl.laboratoryreview}>
                        {ctrl.laboratoryreview}
                    </a>
                </td>
            </tr>
        </table>
    </div>

};