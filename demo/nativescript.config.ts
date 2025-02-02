import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'org.nativescript.demo',
  appPath: 'app',
  appResourcesPath: 'app/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
    requireModules: {
      0: 'nativescript-social-share',
    },
  },
} as NativeScriptConfig
