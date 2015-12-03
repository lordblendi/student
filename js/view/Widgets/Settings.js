'use strict';

var Settings = Settings || {};


Settings.view = function (ctrl) {
    return <table>
        <tr>
            <td class="td-right td-bold">e-mail</td>
            <td class="td-left">
                <input id="input_email" type="text" class="form-control basic-input" placeholder="e-mail"
                       value={ctrl.email()} onchange={m.withAttr("value", ctrl.email)}/>
            </td>
        </tr>
        <tr>
            <td class="td-right td-bold">régi jelszó</td>
            <td class="td-left">
                <input type="text" class="form-control basic-input" placeholder="régi jelszó"/>
            </td>
        </tr>
        <tr>
            <td class="td-right td-bold">új jelszó</td>
            <td class="td-left">
                <input type="text" class="form-control basic-input" placeholder="új jelszó"/>
            </td>
        </tr>
        <tr>
            <td class="td-right td-bold">új jelszó újra</td>
            <td class="td-left">
                <input type="text" class="form-control basic-input" placeholder="új jelszó újra"/>
            </td>
        </tr>
        <tr>
            <td class="td-right td-bold">levlista</td>
            <td class="td-left">
                <div class="input-group">
                    <span class="input-group-addon checkbox-border">
                        <input id="checkbox_mail" type="checkbox" checked={ctrl.mailingList()}
                               onclick={ctrl.toogleMailinglist}/>
                    </span>
                    <span
                        class="input-group-addon checkbox-border settings-label-size">Levlistára való feliratkozás</span>
                </div>
            </td>
        </tr>
        <tr>
            <td class="td-right td-bold">értesítések</td>
            <td class="td-left">
                <div class="input-group">
                    <span class="input-group-addon checkbox-border">
                        <input id="checkbox_notification" type="checkbox" checked={ctrl.notification()}
                               onclick={ctrl.toogleNotification}/>
                    </span>
                    <span class="input-group-addon checkbox-border settings-label-size">E-mail értesítéskre való feliratkozás</span>
                </div>
            </td>
        </tr>
        <tr>
            <td class="td-right td-bold">ssh publikus kulcs</td>
            <td class="td-left">
                <textarea class="form-control ssh" rows="6" placeholder="ssh publikus kulcs">
                    {ctrl.SshPublicKey()}
                </textarea>
            </td>
        </tr>
        <tr>
            <td class="td-middle" colspan="2">
                <button type="button" class="btn btn-default" onclick={ctrl.saveSettings}> Mentés</button>
            </td>
        </tr>
    </table>
};
