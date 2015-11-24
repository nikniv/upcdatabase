(function () {
    "use strict";

    var querystring = require("querystring");
    var http = require("http");
	var agent = require('superagent');

    var HttpResponseProcessor = require("./HttpResponseProcessor.js");
    var validate = require("./validate.js");

    module.exports = function (outputFormat) {
        return function (upc, count, callback) {
            validate.outputFormat(outputFormat);
			var parameters = {};
			parameters.client = "Website";
			parameters.count = count;
			parameters.query = upc;
            	
			agent.get("http://www.smoopa.com" + '/api/v4/search/products.' + outputFormat + '?' + querystring.stringify(parameters),function(error, res){
				if(error){
					return callback(error,null);
				}
				return callback(null, JSON.parse(res.text));
			});
        };
    };

})();
