System.register(['./characters.component', './character.component', './character-list.component', './character.service', './sort-characters.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (characters_component_1_1) {
                exportStar_1(characters_component_1_1);
            },
            function (character_component_1_1) {
                exportStar_1(character_component_1_1);
            },
            function (character_list_component_1_1) {
                exportStar_1(character_list_component_1_1);
            },
            function (character_service_1_1) {
                exportStar_1(character_service_1_1);
            },
            function (sort_characters_pipe_1_1) {
                exportStar_1(sort_characters_pipe_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=characters.js.map