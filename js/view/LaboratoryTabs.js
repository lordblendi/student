'use strict';

var LaboratoryTabs = LaboratoryTabs || {};

LaboratoryTabs.view = function () {
    return    <ul class="nav nav-tabs lab-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#before" aria-controls="before" role="tab" data-toggle="tab">Labor előtt</a></li>
        <li role="presentation"><a href="#during" aria-controls="during" role="tab" data-toggle="tab">Labor alatt</a></li>
        <li role="presentation"><a href="#after" aria-controls="after" role="tab" data-toggle="tab">Labor után</a></li>
    </ul>
};