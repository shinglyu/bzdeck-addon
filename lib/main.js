var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: /https:\/\/bugzilla.mozilla.org\/show_bug.cgi\?id=[0-9]+/,
  contentScriptFile: data.url("redirect.js"),
  contentScriptWhen: "start"
});
