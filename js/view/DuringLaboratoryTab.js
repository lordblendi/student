'use strict';

var DuringLaboratoryTab = DuringLaboratoryTab || {};


DuringLaboratoryTab.view = function () {
    return <div role="tabpanel" class="tab-pane" id="during">
        <table>
            <tr>
                <td class="td-right td-bold">hatralevo ido</td>
                <td class="td-left">16 ora (2015.11.21. 16.15)</td>
            </tr>
            <tr>
                <td class="td-middle td-bold" colspan="2">Git URL</td>
            </tr>
            <tr>
                <td class="td-middle" colspan="2">git@gitlab.db.bme.hu:pelda/pelda.git</td>
            </tr>
            <tr>
                <td class="td-right td-bold">beugro</td>
                <td class="td-left">5</td>
            </tr>
            <tr>
                <td class="td-right td-bold">vegleges commit</td>
                <td class="td-left">
                    <CommitDropdown/>
                </td>
            </tr>
            <tr>
                <td class="td-middle" colspan="2">
                    <button type="button" class="btn btn-default"> Mentes button</button>
                </td>
            </tr>
        </table>
    </div>

};