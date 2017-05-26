angular
    .module('consider-me')
    .constant('config', {
        DATE_FORMAT: 'MMMM D, YYYY',
        DATE_TIME_FORMAT: 'MMMM D, YYYY hh:mm a',
        LONG_DATE_FORMAT: 'dddd, MMMM D, YYYY',
        LONG_DATE_TIME_FORMAT: 'dddd, MMMM D, YYYY hh:mm a',
        APP_VERSION: '1.0.0',
        ENVIRONMENTS: {
            'dev': { name: 'Development', backendUrl: 'http://www.considr.me/' },
            'testing': { name: 'Staging & QA', backendUrl: '' },
            'live': { name: 'Live', backendUrl: 'http://www.considr.me/' }
        },
        ACTIVE_ENVIRONMENT: 'dev',
        TIMEOUT: 20000,
        GET_BACKEND_URL: function () {
            return this.ENVIRONMENTS[this.ACTIVE_ENVIRONMENT].backendUrl;
        },
        IS_DEV: function(){
            return this.ACTIVE_ENVIRONMENT === 'dev';
        }
    });
