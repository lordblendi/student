'use strict';

var Results = Results || {};


Results.view = function () {
    return <table class="table-results">
        <ResultOrdinals/>
        <ResultEntry/>
        <ResultReport/>
        <ResultLaboratory/>
    </table>
};
