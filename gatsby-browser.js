exports.onClientEntry = function(_, pluginParams) {
  const { logs, rum, ...shared } = pluginParams;

  const logsParams = { ...shared, ...logs };
  const rumParams = { ...shared, ...rum };

  if (logs && logsParams.enabled !== false) {
    require.ensure(['@datadog/browser-logs'], function(require) {
      const ddBrowserLogs = require('@datadog/browser-logs');
      ddBrowserLogs.datadogLogs.init(logsParams);
      window.datadogLogs = ddBrowserLogs.datadogLogs;
    });
  }
  if (rum && rumParams.enabled !== false) {
    require.ensure(['@datadog/browser-rum'], function(require) {
      const ddBrowserRUM = require('@datadog/browser-rum');
      ddBrowserRUM.datadogRum.init(rumParams);
      window.datadogRum = ddBrowserRUM.datadogRum;
    });
  }
};