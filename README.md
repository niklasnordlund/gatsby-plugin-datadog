# gatsby-plugin-datadog

## Description

Gatsby plugin to add Datadog logging and real user monitoring (RUM) to your Gatsby site.

Learn more about Datadog [here](https://www.datadoghq.com/).

## How to install

`npm install --save gatsby-plugin-datadog`

## How to setup

### Enable log collection

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: "gatsby-plugin-datadog",
    options: {
      logs: {
        clientToken: '[YOUR_CLIENT_TOKEN]',
        site: 'datadoghq.com',
        sampleRate: 100,
        enabled: !IS_DEV,
      }
    }
  }
];
```

### Enable RUM

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: "gatsby-plugin-datadog",
    options: {
      rum: {
        applicationId: [YOUR_CLIENT_TOKEN],
        clientToken: '[YOUR_CLIENT_TOKEN]',
        site: 'datadoghq.com',
        sampleRate: 100,
        enabled: !IS_DEV,
      }
    }
  }
];
```

### Enable both log collection and RUM

When enabling both logging and RUM shared options can be defined at the top level. For example:

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: "gatsby-plugin-datadog",
    options: {
      site: 'datadoghq.com',
      sampleRate: 100,
      enabled: !IS_DEV,
      rum: {
        applicationId: [YOUR_CLIENT_TOKEN],
        clientToken: '[YOUR_CLIENT_TOKEN]',
      },
      logs: {
        clientToken: '[YOUR_CLIENT_TOKEN]',
      }
    }
  }
];
```

### Options

Options available are the same as the Datadog initialization parameters for [log collection](https://docs.datadoghq.com/logs/log_collection/javascript/#initialization-parameters) and [RUM](https://docs.datadoghq.com/real_user_monitoring/browser/#configuration), respectively. 

Additionally, the parameter `enabled` (boolean) is available to programatically turn the plugin integration on/off.

## How to use

When log collection is enabled `datadogLogs` will be available on the global window object, so you can use it like this:

```javascript
datadogLogs.logger.info("Hello World!");
```

See [Datadog's Browser Log Collection documentation](https://docs.datadoghq.com/logs/log_collection/javascript/#usage) for available methods on the datadogLogs object.

If RUM is enabled, RUM data will automatically be collected. `datadogRum` is also available on the global window object, so you can use it for [manual error collection](https://docs.datadoghq.com/real_user_monitoring/browser/collecting_browser_errors/?tab=npm#collect-errors-manually) and [custom user actions](https://docs.datadoghq.com/real_user_monitoring/browser/tracking_user_actions/?tab=npm#custom-user-actions), etc.

## Alternatives

If you're only going ot use either log collection or RUM you can also use [gatsby-plugin-datadog-logs](https://github.com/niklasnordlund/gatsby-plugin-datadog-logs) or [gatsby-plugin-datadog-rum](https://github.com/niklasnordlund/gatsby-plugin-datadog-rum) directly.


