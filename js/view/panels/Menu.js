'use strict';

var Menu = Menu || {};

/*
 menu navbar view
 */
Menu.view = function (ctrl) {
    return <nav id="menu" class="navbar navbar-default navbar-static-top">
        <div class="navbar-header">
            <div class="navbar-brand logo">laboradmin</div>
        </div>

        <div class="collapse navbar-collapse  navbar-right">
            <p class="navbar-text">{ctrl.displayname}</p>
            <ul class="nav navbar-nav">

                <button type="button" class="btn btn-default navbar-btn"
                        onclick={ctrl.laborOnClick}>{resources.getResource("menu-button-laboratory")}</button>
                <button type="button" class="btn btn-default navbar-btn"
                        onclick={ctrl.resultsOnClick}>{resources.getResource("menu-button-results")}</button>
                <button type="button" class="btn btn-default navbar-btn"
                        onclick={ctrl.settingsOnClick}>{resources.getResource("menu-button-settings")}</button>
            </ul>
        </div>
    </nav>
};
