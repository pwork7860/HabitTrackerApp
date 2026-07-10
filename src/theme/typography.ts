import { Platform } from 'react-native';

const lexendFamily = Platform.OS === 'ios' ? 'System' : 'normal';
const jakartaFamily = Platform.OS === 'ios' ? 'System' : 'normal';

export const typography = {
  headlineLg: {
    fontFamily: lexendFamily,
    fontSize: 32,
    fontWeight: '600' as const,
    lineHeight: 40,
    letterSpacing: -0.64, // -0.02em of 32px
  },
  headlineLgMobile: {
    fontFamily: lexendFamily,
    fontSize: 24,
    fontWeight: '600' as const,
    lineHeight: 32,
    letterSpacing: -0.24, // -0.01em of 24px
  },
  headlineMd: {
    fontFamily: lexendFamily,
    fontSize: 20,
    fontWeight: '500' as const,
    lineHeight: 28,
  },
  bodyLg: {
    fontFamily: jakartaFamily,
    fontSize: 18,
    fontWeight: '400' as const,
    lineHeight: 28,
  },
  bodyMd: {
    fontFamily: jakartaFamily,
    fontSize: 16,
    fontWeight: '400' as const,
    lineHeight: 24,
  },
  bodySm: {
    fontFamily: jakartaFamily,
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 20,
  },
  labelMd: {
    fontFamily: jakartaFamily,
    fontSize: 12,
    fontWeight: '600' as const,
    lineHeight: 16,
    letterSpacing: 0.6, // 0.05em of 12px
  },
};
