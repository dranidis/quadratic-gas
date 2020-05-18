function renderObject(page: string, object: any) {
    var template = HtmlService.createTemplateFromFile(page);
    var keys = Object.keys(object)
    for (var i = 0; i < keys.length; i++) {
        template[keys[i]] = object[keys[i]]
    }
    return template.evaluate();
}