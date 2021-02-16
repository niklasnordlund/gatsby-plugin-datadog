exports.onClientEntry = function(_, pluginParams) {
  if (pluginParams.enabled !== false) {
    require.ensure(['@datadog/browser-logs'], function(require) {
      const Datadog = require('@datadog/browser-logs');
      Datadog.datadogLogs.init(pluginParams);
      window.datadogLogs = Datadog.datadogLogs;
    });
  }
};