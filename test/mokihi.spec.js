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

    describe('component', () => {
        describe('query', () => {
            it('should return undefined if query string was empty string', () => {
                const component = Mokihi.component.query('');
                expect(component).to.equal(undefined);
            });

            it('should return undefined if query string was null', () => {
                const component = Mokihi.component.query(null);
                expect(component).to.equal(undefined);
            });
            
            it('should return undefined if query string was undefined', () => {
                const component = Mokihi.component.query(undefined);
                expect(component).to.equal(undefined);
            });
        });

        describe('getByReference', () => {
            it('should return undefined if query string was empty string', () => {
                const component = Mokihi.component.getByReference('', '');
                expect(component).to.equal(undefined);
            });

            it('should return undefined if query string was null', () => {
                const component = Mokihi.component.getByReference(null, null);
                expect(component).to.equal(undefined);
            });
            
            it('should return undefined if query string was undefined', () => {
                const component = Mokihi.component.getByReference(undefined, undefined);
                expect(component).to.equal(undefined);
            });
        });
    });
})