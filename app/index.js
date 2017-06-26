'use strict';
/********* JS Files ***********/

/* Application Main Files */
require('./app.js');


/* Angular Config */
require('./config.js');


/*----------  Directives  ----------*/
require('./directives/directives.js');

/********* Style Files ***********/

/* Styles */
require('./core/index.scss');

/* Shared files */ //should be moved later using lazyload
require('./shared/services/utils/xhr/xhr.service.js'); 
require('./shared/services/getRegions/getRegions.service.js');
require('./shared/directives/loading-indicator/loading-indicator.directive.js');





