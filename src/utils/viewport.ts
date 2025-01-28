import { INITIAL_VIEWPORT_SIZE } from '@/constants/viewport';
import { headers } from 'next/headers';
import { UAParser } from 'ua-parser-js';

export async function getInitialViewport() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const parser = new UAParser(userAgent);
  const device = parser.getDevice();

  if (device.type === 'mobile') {
    return INITIAL_VIEWPORT_SIZE.MOBILE;
  } else if (device.type === 'tablet') {
    return INITIAL_VIEWPORT_SIZE.TABLET;
  }
  return INITIAL_VIEWPORT_SIZE.DESKTOP;
}
