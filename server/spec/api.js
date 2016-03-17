var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');
var app = require('../server.js');

describe("ingiegogo api - Server - REST API Routes", function() {

  describe('/api/indiegogo', function() {

    describe('GET', function() {

      it('responds with a 200 (successfull) and the json array of returned data from the indiegogo api', function(done) {

        request(app)
          .get('/api/indiegogo')
          .expect(function(res) {
            expect(res.body).to.exist;
            var body = JSON.parse(res.body);
            expect(body.response).to.exist;
            expect(body.response).to.be.array;
          })
          .expect(200, done);
      });

    });
  });
});