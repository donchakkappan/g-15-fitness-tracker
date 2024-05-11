/*
 * Fitness Tracker API
 * API documentation for the Fitness Tracker Web Application
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.54
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FitnessTrackerApi);
  }
}(this, function(expect, FitnessTrackerApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('UserProfileUpdate', function() {
      beforeEach(function() {
        instance = new FitnessTrackerApi.UserProfileUpdate();
      });

      it('should create an instance of UserProfileUpdate', function() {
        // TODO: update the code to test UserProfileUpdate
        expect(instance).to.be.a(FitnessTrackerApi.UserProfileUpdate);
      });

      it('should have the property firstName (base name: "firstName")', function() {
        // TODO: update the code to test the property firstName
        expect(instance).to.have.property('firstName');
        // expect(instance.firstName).to.be(expectedValueLiteral);
      });

      it('should have the property lastName (base name: "lastName")', function() {
        // TODO: update the code to test the property lastName
        expect(instance).to.have.property('lastName');
        // expect(instance.lastName).to.be(expectedValueLiteral);
      });

    });
  });

}));