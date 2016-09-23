'use strict';
const x = require('.');
const a = new x();

const application = a.getExportModule();
const f = application.Component('Test')(function() {
  return {
    test: function() {console.log('for');}
  };
});

new f().test();
application.container.reference.Test = function() {
  return {
    test: function() {console.log('bar');}
  };
};
new f().test();