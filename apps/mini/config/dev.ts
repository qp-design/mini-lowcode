import type { UserConfigExport } from "@tarojs/cli"

export default {
   logger: {
    quiet: false,
    stats: true
  },
  env: {
    NODE_PLATFORM: '"MOBILE_TERMINAL"',
    REACT_APP_BASE_URL: '"https://b2bpc86d2786b360643d480659d6abc41931d.saas.qjclouds.com/"',
    REACT_IMG_PATH: '"/paas/shop/"'
  },
  mini: {},
  h5: {}
} satisfies UserConfigExport<'webpack5'>
