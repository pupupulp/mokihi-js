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

const MokihiSetup = {
    extjs: {
        loadCss: function(theme = 'triton') {
            const themePath = `./lib/ext-6.2.0/build/classic/theme-${theme}/resources/theme-${theme}-all.css`;
            const chartsPath = `./lib/ext-6.2.0/build/packages/charts/classic/${theme}/resources/charts-all.css`;
            const uxPath = `./lib/ext-6.2.0/build/packages/ux/classic/${theme}/resources/ux-all.css`;
            const fontawesomePath = `./lib/ext-6.2.0/build/packages/font-awesome/resources/font-awesome-all.css`;
            
            const themeCss = fs.readFileSync(themePath, 'utf8');
            const chartsCss = fs.readFileSync(chartsPath, 'utf8');
            const uxCss = fs.readFileSync(uxPath, 'utf8');
            const fontawesomeCss = fs.readFileSync(fontawesomePath, 'utf8');

            const css = `
                <style>
                    ${themeCss}
                    ${chartsCss}
                    ${uxCss}
                    ${fontawesomeCss}
                </style>
            `;

            return css;
        },
        loadScript: function(theme = 'triton') {
            const extjsPath = `./lib/ext-6.2.0/build/ext-all.js`;
            const themePath = `./lib/ext-6.2.0/build/classic/theme-${theme}/theme-${theme}.js`;
            const chartsPath = `./lib/ext-6.2.0/build/packages/charts/classic/charts.js`;
            const uxPath = `./lib/ext-6.2.0/build/packages/ux/classic/ux.js`;
            
            const extjsScript = fs.readFileSync(extjsPath, 'utf8');
            const themeScript = fs.readFileSync(themePath, 'utf8');
            const chartsScript = fs.readFileSync(chartsPath, 'utf8');
            const uxScript = fs.readFileSync(uxPath, 'utf8');

            const script = `
                <script type="text/javascript">
                    ${extjsScript}
                    ${themeScript}
                    ${chartsScript}
                    ${uxScript}
                </script>
            `;

            return script;
        }
    }
}

module.exports.MokihiSetupTest = MokihiSetup;
module.exports.MokihiSetup = stringifyObject(MokihiSetup);

