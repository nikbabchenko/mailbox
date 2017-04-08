module.exports = function() {
    var dev = 'dev/';
    var dist = 'dist/';
    var temp = dev + '.tmp/';
    var server = '../server/';

    var config = {
        /**
         * File paths
         */

        // all javascript
        alljs: [
            dev + 'services/**/*.js',
            dev + 'common/**/*.js',
            dev + 'components/**/*.js',
            dev + '/pages/**/*.js'
        ],
        js: [
            dev + '**/*.module.js',
            dev + 'common/**/*.js',
            dev + 'components/**/*.js',
            dev + '/pages/**/*.js'
        ],
        css:  [temp + 'app.css'],
        sass: dev + 'app.scss',
        json: dev + '*.json',
        index: dev + 'index.html',
        htmltemplates: [
            dev + '**/*.html',
            '!' + dev + 'index.html',
            '!' + dev + 'bower_components/**/*.html',
        ],
        dist: dist,
        dev: dev,
        server: server,
        temp: temp,



        /**
         *  Bower and NPM Locations
         */

         bower: {
            json: require('./bower.json'),
            directory: dev + 'bower_components',
            ignorePath: '../..'
         },

         /**
          * Node settings
          */

          defaultPort: 3000,
          nodeServer: './server/server.js',

    /**
     *  HTML template cache
     */

    templateCache: {
        file: 'templates.js',
        options: {
            module: 'mailBox',
            standAlone: false,
            root: ''
        }
    }
    };

    config.getWiredepOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };

        return options;
    };

    /**
     * BrowserSync options
     */

    config.browserSyncOptions = function (isDev) {
        var browserSincoptions = {
            server: {
                baseDir: isDev ? config.dev : config.dist,
            },
            files: [(isDev ? config.dev : config.dist) + '**/*.*'],
            ghostMode: {
                click: true,
                location: true,
                forms: true,
                scroll: true
            },
            injectChanges: true,
            logFileChanges: true,
            logLevel: 'debug',
            logPrefix: 'mailbox',
            notify: true,
            reloadDelay: 1000
        };

        return browserSincoptions;
    };


    return config;
};

