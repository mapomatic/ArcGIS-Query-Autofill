// ==UserScript==
// @name         ArcGIS Query Autofill
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      /https?:\/\/.*\/.*rest\/services\/.*/
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var $where = $('input[name="where"]');
    var $fields = $('input[name="outFields"]');
    var $returnGeom = $('input[name="returnGeometry"]');
    var $resultRecordCount = $('input[name="resultRecordCount"]');

    if ($where.length && $fields.length && $returnGeom.length) {
        $where.val('1=1');
        $fields.val('*');
        //$resultRecordCount.val('100');
        $($returnGeom[1]).click();
    }
})();