import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.scss',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: {
        globPatterns: [
          '**/*.{js,css,json,jpeg,jpg,html,ico,png}'
        ]
      },
      // uncomment the following line to disable service workers in production
      // serviceWorker: null
    }
  ],
  plugins: [
    sass()
  ]
};
