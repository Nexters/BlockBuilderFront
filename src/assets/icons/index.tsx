import { SVGProps } from 'react';
import ArrowRight from './ArrowRight';
import Bag from './Bag';
import Chat from './Chat';
import DarkMode from './DarkMode';
import Information from './Information';
import LightMode from './LightMode';
import Meetup from './Meetup';
import Menu from './Menu';
import News from './News';
import Poll from './Poll';
import Reaction from './Reaction';
import Copy from './Copy';
import Landing from './Landing';
import CheckCircle from './CheckCircle';
import Tooltip from './Tooltip';

export const Icons = {
  Menu,
  Chat,
  Poll,
  News,
  LightMode,
  DarkMode,
  Information,
  ArrowRight,
  Bag,
  Meetup,
  Reaction,
  Copy,
  Landing,
  CheckCircle,
  Tooltip,
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
