import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'com.caleb.tradingknowledgebase',
  appName: 'Trading KB',
  webDir: 'www',
  backgroundColor: '#f6f7f9',
  android: { backgroundColor: '#f6f7f9' },
  plugins: {
    SplashScreen: { launchShowDuration: 500, backgroundColor: '#f6f7f9', showSpinner: false }
  }
};
export default config;
