var chai = require('chai');
var should = chai.should();
var assert = chai.assert;
var Sequelize = require("sequelize");

describe("bootstrap", function() {

  it("require", function() {
	  var bootstrap = require('./../../bootstrap.js');
	  assert.isNotNull(bootstrap);
	  assert.isNotNull(bootstrap.config);
	  assert.isNotNull(bootstrap.db);
	  
	  assert.instanceOf(bootstrap.db,Sequelize);
  });
});