import { brandBlue, brandPink } from '../../../styles/variables';
import logoBlack from '../../../images/logo-black.svg';
import logoWhite from '../../../images/logo-white.svg';

export const DefaultTheme = Object.freeze({
  bgColor: 'transparent',
  logoIcon: logoBlack,
  medLargeColor: brandBlue,
  medLargeHoverColor: brandPink,
});

export const DarkTheme = Object.freeze({
  bgColor: brandBlue,
  logoIcon: logoWhite,
  medLargeColor: '#fff',
  medLargeHoverColor: '#fff',
});
