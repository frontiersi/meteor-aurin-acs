Package.describe({
  name: 'urbanetic:aurin-acs',
  summary: 'Adapter for Asset Conversion Service (ACS).',
  git: 'https://github.com/urbanetic/meteor-aurin-acs.git',
  version: '0.1.0'
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use([
    'coffeescript',
    'underscore',
    'aramk:utility@0.6.0',
    'aramk:file-upload@0.2.1'
  ], ['client', 'server']);
  api.use([
    'meteorhacks:npm@1.2.2',
    'cfs:http-methods@0.0.27'
  ], 'server');
  api.addFiles([
    'src/client/Assets.coffee'
  ], 'client');
  api.addFiles([
    'src/server/AssetConversionService.coffee',
    'src/server/Assets.coffee',
    'src/server/Request.coffee'
  ], 'server');
  api.export([
    'Assets'
  ], 'client');
  api.export([
    'AssetConversionService',
    'Assets',
    'Request'
  ], 'server');
});
