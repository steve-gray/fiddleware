'use strict';

/* global after, afterEach, before, beforeEach, describe, it */
const connect = require('connect');
const connectRoute = require('connect-route');
// const chai = require('chai');
// const expect = chai.expect;
const lib = require('../');
const request = require('supertest');
require('should');

describe('respondJson Middleware', () => {
  let app = null;
  beforeEach(() => {
    app = connect();
  });
  describe('Operations', () => {
    it('Should create .json and return correct codes', (done) => {
      app.use(lib.respondJson());
      app.use(connectRoute((router) => {
        router.post('/foo', (req, res) => {
          res.json([{ foo: 1234 }], 407);
        });
      }));

      request(app)
        .post('/foo')
        .expect(407)
        .end((err, res) => {
          if (err) {
            done(err);
            return;
          }

          res.body.should.eql([{ foo: 1234 }]);
          done();
        });
    });

    it('Should default to HTTP status 200', (done) => {
      app.use(lib.respondJson());
      app.use(connectRoute((router) => {
        router.post('/foo', (req, res) => {
          res.json([{ foo: 1234 }], null);
        });
      }));

      request(app)
        .post('/foo')
        .expect(200)
        .end((err, res) => {
          if (err) {
            done(err);
            return;
          }

          res.body.should.eql([{ foo: 1234 }]);
          done();
        });
    });

    it('Should not register if .json already exists', (done) => {
      let counter = 0;

      // Set up a dummy handler that should control .json
      app.use((req, res, next) => {
        /* eslint-disable no-param-reassign */
        res.json = () => {
          counter = counter + 1;
          res.end();
        };
        /* eslint-enable no-param-reassign */
        next();
      });
      app.use(lib.respondJson());
      app.use(connectRoute((router) => {
        router.post('/foo', (req, res) => {
          res.end('done');
        });
      }));

      request(app)
        .post('/foo')
        .expect(200)
        .end((err) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });
});
