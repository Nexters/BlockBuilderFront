import { SVGProps } from 'react';
import Chat from './Chat';
import DarkMode from './DarkMode';
import LightMode from './LightMode';
import Menu from './Menu';
import News from './News';
import Poll from './Poll';

export const Icons = {
  Menu,
  Chat,
  Poll,
  News,
  LightMode,
  DarkMode,
} as const;

export type IconType = keyof typeof Icons;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconType;
  size?: number;
}

export function Icon({ name, size = 24, ...props }: IconProps) {
  const IconComponent = Icons[name];
  return <IconComponent width={size} height={size} className={props.className} {...props} />;
}
