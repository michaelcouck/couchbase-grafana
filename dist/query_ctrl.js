///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var lodash_1 = require('lodash');
var sdk_1 = require('app/plugins/sdk');
require('./css/query_editor.css!');
var ChangeMyNameQueryCtrl = (function (_super) {
    __extends(ChangeMyNameQueryCtrl, _super);
    /** @ngInject **/
    function ChangeMyNameQueryCtrl($scope, $injector, templateSrv) {
        _super.call(this, $scope, $injector);
        this.templateSrv = templateSrv;
        this.defaults = {};
        lodash_1["default"].defaultsDeep(this.target, this.defaults);
        this.target.target = this.target.target || 'select metric';
        this.target.type = this.target.type || 'timeserie';
    }
    ChangeMyNameQueryCtrl.prototype.getOptions = function (query) {
        return CouchbaseDatasource.metricFindQuery(query || '');
    };
    ChangeMyNameQueryCtrl.prototype.onChangeInternal = function () {
        this.panelCtrl.refresh(); // Asks the panel to refresh data.
    };
    ChangeMyNameQueryCtrl.templateUrl = 'partials/query.editor.html';
    return ChangeMyNameQueryCtrl;
}(sdk_1.QueryCtrl));
exports.ChangeMyNameQueryCtrl = ChangeMyNameQueryCtrl;
//# sourceMappingURL=query_ctrl.js.map