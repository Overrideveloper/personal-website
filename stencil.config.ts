import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'bansowebsite',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  bundles: [
    { components: ['title-component']}
  ]
};
