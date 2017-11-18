function loadAsScriptTab(){
  var htmlService = HtmlService.createHtmlOutputFromFile("EncodingJs.js");
  var content = htmlService.getContent();
  return content;
}
