var assert = require('assert');
var should = require('should');
var Util = require('../test-util')
var professionsController = require('../../controllers/Professions-controller')

//TODO

// describe('System tests for Professions-controller', function () {
//     describe('Testing API /getProfessionsWithoutRepeatations', function () {
//         it('Should return 400 status code if number of professions is less than number of players number of players x 3', (done) => {
//             Util.requestManager('http://localhost:3000/api/getProfessionsWithoutRepetitions?professions=15&players=10', function (res,body) {
//                 res.statusCode.should.be.equal(400);
//                 done();
//             })
//         });
//     });

//     describe('Testing API /getProfessionsWithoutRepeatations', function () {
//         it('Should return a list of professions which are also unique', (done) => {

//             Util.requestManager("http://localhost:3000/api/getProfessionsWithoutRepetitions?professions=30&players=10", function (res,body) {
//                 var count = 0;
//                 var map = {}
//                 res.statusCode.should.be.equal(200);
//                 /* body.forEach(function (playerInfo) {
//                     playerInfo.professions.forEach(function (prof) {
//                         if (prof in map) {
//                             count++;
//                         }
//                         else {
//                             map[prof] = true
//                         }
//                     })
//                 })
//                 count.should.be.equal(0); */
//                 done();
//             })

//         });
//     });

//     describe('Testing API /getProfessionsWithRepeatations', function () {
//         it('Should return a list of professions which are also unique', (done) => {
//             Util.requestManager("http://localhost:3000/api/getProfessionsWithRepetitions?professions=15&players=10", function (res,body) {
//                 res.statusCode.should.be.equal(200);
//                 body.length.should.be.equal(10)
//                 done();
//             })
//         });
//     });

//     describe('Testing API /getProfessionsWithRepeatations', function () {
//         it('Should return a list of professions for every player', (done) => {
//             Util.requestManager("http://localhost:3000/api/getProfessionsWithRepetitions?professions=15&players=10", function (res,body) {
//                 res.statusCode.should.be.equal(200);
//                 body.length.should.be.equal(10)
//                 done();
//             })
//         });
//     });

//     describe('Testing API /getRandomProfessions/:professions', function () {
//         it('Should return a random list of professions', (done) => {
//             Util.requestManager("http://localhost:3000/api/getRandomProfessions/5", function (res,body) {
//                 res.statusCode.should.be.equal(200);
//                 body.length.should.be.equal(5)
//                 done();
//             })
//         });
//     });

//     describe('Testing API /getTotalProfs', function () {
//         it('Should return total number of professions in the professions corpus', (done) => {
//             Util.requestManager("http://localhost:3000/api/getTotalProfs", function (res,body) {
//                 res.statusCode.should.be.equal(200);
//                 body.should.be.equal(961)
//                 done();
//             })
//         });
//     });
//     describe('Testing API /getRandomNumbers/:num', function () {
//         it('Should return a total number of professions', (done) => {
//             Util.requestManager("http://localhost:3000/api/getRandomNumbers/5?min=2&max=10", function (res,body) {
//                 res.statusCode.should.be.equal(200);
//                 body.length.should.be.equal(5);
//                 done();
//             })
//         });
//     });
// });

