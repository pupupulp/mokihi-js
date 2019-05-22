/**
 * * This is an opensource project that aims to provide
 * * a distribution of ExtJS 6.2.0 GPL along with a collection
 * * of useful component wrapper functions.
 *
 * * Feel free to contribute to this repo.
 *
 * ! ExtJS 6.2.0 GPL
 *
 * * Sample Usage:
 * * const Mokihi = require('mokihi-js');
 */

const stringifyObject = require('stringify-object');
const fs = require('fs');
const path = require('path');

const MokihiSetup = {
    loadExtJsCss: function(theme = 'triton') {
        const themePart1Path =  path.join(__dirname, `./lib/ext-6.2.0/build/classic/theme-${theme}/resources/theme-${theme}-all_1.css`);
        const themePart2Path =  path.join(__dirname, `./lib/ext-6.2.0/build/classic/theme-${theme}/resources/theme-${theme}-all_2.css`);
        const chartsPath =  path.join(__dirname, `./lib/ext-6.2.0/build/packages/charts/classic/${theme}/resources/charts-all.css`);
        const uxPath = path.join(__dirname, `./lib/ext-6.2.0/build/packages/ux/classic/${theme}/resources/ux-all.css`);
        const fontawesomePath = path.join(__dirname, `./lib/ext-6.2.0/build/packages/font-awesome/resources/font-awesome-all.css`);
        
        const themePart1Css = fs.readFileSync(themePart1Path, 'utf8');
        const themePart2Css = fs.readFileSync(themePart2Path, 'utf8');
        const chartsCss = fs.readFileSync(chartsPath, 'utf8');
        const uxCss = fs.readFileSync(uxPath, 'utf8');
        const fontawesomeCss = fs.readFileSync(fontawesomePath, 'utf8');

        const css = `
            ${themePart1Css}
            ${themePart2Css}
            ${chartsCss}
            ${uxCss}
            ${fontawesomeCss}
        `;

        return css;
    },
    loadExtJsScript: function(theme = 'triton') {
        const extjsPath = `./lib/ext-6.2.0/build/ext-all.js`;
        const themePath = `./lib/ext-6.2.0/build/classic/theme-${theme}/theme-${theme}.js`;
        const chartsPath = `./lib/ext-6.2.0/build/packages/charts/classic/charts.js`;
        const uxPath = `./lib/ext-6.2.0/build/packages/ux/classic/ux.js`;
        
        const extjsScript = fs.readFileSync(extjsPath, 'utf8');
        const themeScript = fs.readFileSync(themePath, 'utf8');
        const chartsScript = fs.readFileSync(chartsPath, 'utf8');
        const uxScript = fs.readFileSync(uxPath, 'utf8');

        const script = `
            ${extjsScript}
            ${themeScript}
            ${chartsScript}
            ${uxScript}
        `;

        return script;
    }
};

const component = require('./class/component');

const Mokihi = {
    supportedExtJs: '6.2.0'
};
Mokihi.component = component;

module.exports.test = {
    setup: MokihiSetup,
    core: Mokihi
}

module.exports.setup = MokihiSetup;
module.exports.core = stringifyObject(Mokihi); 

