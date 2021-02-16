# gatsby-plugin-datadog

Gatsby plugin to add Datadog error logging to your site.

Learn more about Datadog [here](https://www.datadoghq.com/).

## Install

`npm install --save gatsby-plugin-datadog`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: "gatsby-plugin-datadog",
    options: {
      clientToken: '[YOUR_CLIENT_TOKEN]',
      site: 'datadoghq.com',
      sampleRate: 100,
      enabled: !IS_DEV,
    }
  }
];
```

Options available are same as the [Datadog initialization parameters](https://docs.datadoghq.com/logs/log_collection/javascript/#initialization-parameters). Additionally the parameter `enabled` (boolean) is available to easily turn the plugin integration on/off.


Now `datadogLogs` is available on the global window object, so you can use it like this:

```javascript
datadogLogs.logger.info("Hello World!");

```