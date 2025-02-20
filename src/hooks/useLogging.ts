import mixpanel, { Dict } from 'mixpanel-browser';
import { useCallback } from 'react';
import { useUser } from './useUser';

export interface LogAction {
  eventName: string;
  eventProperties?: Dict;
}

const useLogging = () => {
  const { data } = useUser();

  const sendLog = useCallback(
    (logAction: LogAction) => {
      try {
        if (data?.token) {
          // distinct ID 를 고유한 유저 token 으로 등록
          mixpanel.identify(data?.token);
        }

        mixpanel.track(logAction.eventName.replace(/ /gi, '_'), logAction.eventProperties);
      } catch (error) {
        console.error(error);
        console.error(`[Mixpanel :: Failed]`, logAction);
      }
    },
    [data?.token]
  );

  return {
    sendLog,
  };
};

export default useLogging;
