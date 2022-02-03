import { Config } from '@stencil/core';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'core',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'docs-readme',
    },
    angularOutputTarget({
      componentCorePackage: '@agnostic-library/core',
      directivesProxyFile:
        '../../../libs/core-angular/src/generated/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
};
