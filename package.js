Package.describe({
  summary: 'Static Pages for Reaction',
  name: 'getoutfitted:static-pages',
  version: '0.1.0',
  git: 'https://github.com/getoutfitted/static-pages'
});


Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.3.2');
  api.use('meteor-platform');
  api.use('less');
  api.use('http');
  api.use('base64');
  api.use('underscore');
  api.use('standard-minifiers');
  api.use('reactioncommerce:core');
  api.use('reactioncommerce:reaction-router');
  api.use('reactioncommerce:reaction-collections');
  api.use('momentjs:moment@2.10.6');
  api.use('getoutfitted:press-feed');
  api.use('getoutfitted:reaction-klaviyo');

  api.addFiles([
    'server/registry.js'
  ], 'server');
  api.addFiles([
    'client/templates/about/about.html',
    'client/templates/about/about.css',
    'client/templates/privacy/privacy.html',
    'client/templates/privacy/privacy.css',
    'client/templates/press/press.html',
    'client/templates/press/press.js',
    'client/templates/newBelgium/newBelgium.html',
    'client/templates/winter/winter.html',
    'client/templates/winter/winter.js',
    'client/templates/group/group.html'
    ], 'client');

  api.addAssets([
    'public/images/julian.jpg',
    'public/images/mike.jpg',
    'public/images/spencer.jpg',
    'public/images/adam.jpg',
    'public/images/nicole.jpg',
    'public/images/paul.jpg',
    'public/images/logo.jpg',
    'public/images/large-go.jpg',
    'public/images/hero.jpg',
    'public/images/anthony.jpg',
    'public/images/amber.jpg',
    'public/images/press-lead.jpg',
    'public/images/newBelgiumBanner.jpg',
    'public/images/winter.jpg',
    'public/images/group-sales.jpg'
  ], 'client');
});
