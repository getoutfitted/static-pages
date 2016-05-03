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
  api.use('reactioncommerce:core@0.12.0');
  api.use('reactioncommerce:reaction-router');
  api.use('reactioncommerce:reaction-collections');
  api.use('momentjs:moment@2.10.6');
});
