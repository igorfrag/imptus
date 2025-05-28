import icons from './icons';

type IconType = keyof typeof icons;

interface FooterIconProps {
  type: IconType;
}

const FooterIcon = ({ type }: FooterIconProps) => {
  return icons[type];
};

export default FooterIcon;
