///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import angular from 'angular';
import _ from 'lodash';

export default class CouchbaseDatasource {
  id: number;
  name: string;

  /** @ngInject */
  constructor(instanceSettings, private backendSrv, private templateSrv, private $q) {
    console.log(JSON.stringify(instanceSettings));
    alert('Instance settings: ' + JSON.stringify(instanceSettings));
    this.name = instanceSettings.name;
    this.id = instanceSettings.id;
  }

  static query(options) {
    console.log(JSON.stringify(options));
    alert('Options: ' + JSON.stringify(options));
    throw new Error("Query Support not implemented yet.");
  }

  static annotationQuery(options) {
      console.log(JSON.stringify(options));
      alert('Options: ' + JSON.stringify(options));
    throw new Error("Annotation Support not implemented yet.");
  }

  static metricFindQuery(query: string) {
      console.log(JSON.stringify(query));
      alert('Query: ' + JSON.stringify(query));
    throw new Error("Template Variable Support not implemented yet.");
  }

  testDatasource() {
    return this.$q.when({
      status: 'error',
      message: 'Data Source is just a template and has not been implemented yet.',
      title: 'Error'
    });
  }
}
