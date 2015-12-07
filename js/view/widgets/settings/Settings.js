'use strict';

var Settings = Settings || {};

/*
 settings panel content view
 */
Settings.view = function (ctrl) {
    return <table>
        <tr>
            <td class="td-right td-bold">{resources.getResource("settings-label-email")}</td>
            <td class="td-left">
                <input id="input_email" type="text" class="form-control basic-input"
                       placeholder={resources.getResource("settings-label-email")}
                       value={ctrl.email()} onchange={m.withAttr("value", ctrl.email)}/>
            </td>
        </tr>
        <tr>
            <td class="td-right td-bold">{resources.getResource("settings-label-oldpwd")}</td>
            <td class="td-left">
                <input id="oldpwd" type="password" class="form-control basic-input"
                       placeholder={resources.getResource("settings-label-oldpwd")}
                       onchange={m.withAttr("value", ctrl.oldpwd)}/>
            </td>
        </tr>
        <tr>
            <td class="td-right td-bold">{resources.getResource("settings-label-newpwd")}</td>
            <td class="td-left">
                <input id="inputpwd" type="password" class="form-control basic-input"
                       placeholder={resources.getResource("settings-label-newpwd")}
                       onchange={m.withAttr("value", ctrl.newpwd)}/>
            </td>
        </tr>
        <tr>
            <td class="td-right td-bold">{resources.getResource("settings-label-newpwdagain")} </td>
            <td class="td-left">
                <input id="inputpwdagain" type="password" class="form-control basic-input"
                       placeholder={resources.getResource("settings-label-newpwdagain")}
                       onchange={m.withAttr("value", ctrl.newpwdagain)}/>
            </td>
        </tr>
        <tr>
            <td class="td-right td-bold">{resources.getResource("settings-label-mailinglist")}</td>
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
            <td class="td-right td-bold">{resources.getResource("settings-label-notification")}</td>
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
            <td class="td-right td-bold">{resources.getResource("settings-label-ssh")}</td>
            <td class="td-left">
                <textarea class="form-control ssh" rows="9" placeholder={resources.getResource("settings-label-ssh")}>
                    {ctrl.sshPublicKey()}
                </textarea>
            </td>
        </tr>
        <tr>
            <td class="td-middle" colspan="2">
                <button id="settingssave" type="button" class="btn btn-default"
                        onclick={ctrl.saveSettings}> {resources.getResource("settings-label-save")}</button>
            </td>
        </tr>


    </table>
};
