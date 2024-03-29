import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'org.nativescript.myapp',
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
  tailwind: {
    autoload: false,
  },
} as NativeScriptConfig
