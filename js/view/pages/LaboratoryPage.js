'use strict';

var LaboratoryPage = LaboratoryPage || {};

/*
 laboratory page view
 */
LaboratoryPage.view = function () {
    return <div>
        <Menu/>
        <LaboratoryPanel/>
    </div>
};