import Ember from 'ember';
import config from './config/environment';
import Vivus from 'vivus';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
});

export default Router;
