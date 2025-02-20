import mixpanel from 'mixpanel-browser';

const isProduction = process.env.NODE_ENV === 'production';

const MIXPANEL_TOKEN = isProduction
  ? process.env.NEXT_PUBLIC_MIXPANEL_TOKEN_PRD
  : process.env.NEXT_PUBLIC_MIXPANEL_TOKEN_DEV;

const SEND_LOG_MIXPANEL_TESTBED = false;

export const initMixpanel = () => {
  if (!MIXPANEL_TOKEN) {
    console.error('[Mixpanel :: Failed] Mixpanel token is missing! Check your .env file !!');
    return;
  }

  console.log('[Mixpanel :: Success] Mixpanel initialize !');
  mixpanel.init(MIXPANEL_TOKEN, {
    track_pageview: false,
    persistence: 'localStorage',
    debug: SEND_LOG_MIXPANEL_TESTBED || !isProduction,
  });
};
