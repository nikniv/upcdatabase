(function () {
    "use strict";

    var UPCSearch = require("./lib/UPCSearch.js");
    module.exports = function (apiKey, outputFormat) {
        return {
            upcSearch: new UPCSearch(apiKey, outputFormat)
            };
    };
})();
