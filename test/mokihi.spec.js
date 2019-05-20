const asset = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const Mokihi = require('../index').test.core;


describe('Mokihi', () => {
    describe('supportedExtJs', () => {
        it('should return a string', () => {
            const supportedExtJs = Mokihi.supportedExtJs;
            supportedExtJs.should.be.a('string');
        });

        it('should return 6.2.0', () => {
            const supportedExtJs = Mokihi.supportedExtJs;
            supportedExtJs.should.equal('6.2.0');
        });
    });
})