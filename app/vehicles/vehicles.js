System.register(['./vehicle.component', './vehicle.service', './vehicle-list.component', './vehicles.component'], function(exports_1, context_1) {
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
            function (vehicle_component_1_1) {
                exportStar_1(vehicle_component_1_1);
            },
            function (vehicle_service_1_1) {
                exportStar_1(vehicle_service_1_1);
            },
            function (vehicle_list_component_1_1) {
                exportStar_1(vehicle_list_component_1_1);
            },
            function (vehicles_component_1_1) {
                exportStar_1(vehicles_component_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=vehicles.js.map