// Import AngularJS & 3rd Party Modules
import angular from 'angular';
import 'angular-ui-router';

// Import our Config & Constants
import { config } from './config';
import { ServerConstant } from './server.constant';

// Import Controllers
import { HomeController } from './controllers/home.controller.js';
import { UploadController } from './controllers/upload.controller.js';
import { DetailController } from './controllers/detail.controller.js';


angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('SERVER', ServerConstant)

// ===================================================================
// Dont forget to add controllers to Angular.js after you import them
// ===================================================================

  .controller('HomeController', HomeController)
  .controller('UploadController', UploadController)
  .controller('DetailController', DetailController);
