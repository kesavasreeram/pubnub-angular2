// Karma configuration
// Generated on Tue Mar 24 2015 04:20:15 GMT-0700 (Pacific Daylight Time)
// TODO: copy test file from javascript repo and invoke it in angular environment
module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai', 'sinon-chai'],


        // list of files / patterns to load in the browser
        files: [
            'test/polyfills/bind.js',
            'node_modules/core-js/client/shim.min.js',
            'node_modules/rxjs/bundles/Rx.js',
            'node_modules/@angular/core/bundles/core.umd.js',
            'node_modules/@angular/common/bundles/common.umd.js',
            'node_modules/@angular/compiler/bundles/compiler.umd.js',
            'node_modules/@angular/core/bundles/core.umd.js',
            'node_modules/@angular/forms/bundles/forms.umd.js',
            'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
            'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            'node_modules/@angular/router/bundles/router.umd.js',
            'node_modules/@angular/upgrade/bundles/upgrade.umd.js',
            'bower_components/pubnub/dist/web/pubnub.js'
        ],

        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: { 'dist/*.js': ['coverage'] },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec', 'coverage'],


        // web server port
        port: 9898,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        browserDisconnectTimeout: 20000,
        browserNoActivityTimeout: 20000,

        coverageReporter: {
            // specify a common output directory
            dir: 'coverage',
            reporters: [
                // reporters not supporting the `file` property
                { type: 'html' },
                { type: 'text-summary' },
                { type: 'lcov' }
            ]
        }


    });
};