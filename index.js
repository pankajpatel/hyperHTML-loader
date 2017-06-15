var hyper = require('hyperhtml');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
  this.cacheable && this.cacheable();
  var query = loaderUtils.parseQuery(this.query);
  // TODO: Implement possibilities of loader options
  // var options = this.options.hyperHtmlLoader || {};
  var template = function (scope) {
    var render = hyperHTML.wire();
    return render`
      ${eval("`"+source+"`")}
    `;
  }
  return 'module.exports = ' + template;
};
