const asset = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const MokihiSetup = require('../index').test.setup;


describe('MokihiSetup', () => {
    describe('extjs.loadCss()', () => {
        it('should return a string of styles from extjs css files', () => {
            const css = MokihiSetup.loadExtJsCss();
            css.should.be.a('string');
        });
    });

    describe('extjs.loadScript()', () => {
        it('should return a string of scripts from extjs js files', () => {
            const script = MokihiSetup.loadExtJsScript();
            script.should.be.a('string');
        });
    });
})