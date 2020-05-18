function renderObject(page: string, object: any) {
    var template = HtmlService.createTemplateFromFile(page);
    var keys = Object.keys(object)
    for (var i = 0; i < keys.length; i++) {
        template[keys[i]] = object[keys[i]]
    }
    return template.evaluate();
}

/**
 * Helper function for including files (e.g. js)
 * in html documents
 * 
 * @param filename 
 */
function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
}