import { StyleSheet } from 'react-native';

export const fonts = (color?:string) => {
  const textColor = color ? color : '#000000cc';

  return StyleSheet.create({
    extra20: {
      fontFamily: 'Pretendard-ExtraBold',
      fontSize: 20,
      fontStyle: 'normal',
      lineHeight: 20,
      color: textColor,
      letterSpacing: -0.6
    },
    extra8: {
      fontFamily: 'Pretendard-ExtraBold',
      fontSize: 8,
      fontStyle: 'normal',
      lineHeight: 8,
      color: textColor,
      letterSpacing: -0.3
    },
    bold18: {
      fontFamily: 'Pretendard-Bold',
      fontSize: 18,
      fontStyle: 'normal',
      lineHeight: 27,
      color: textColor,
      letterSpacing: -0.54
    },
    bold16: {
      fontFamily: 'Pretendard-Bold',
      fontSize: 16,
      fontStyle: 'normal',
      lineHeight: 24,
      color: textColor,
      letterSpacing: -0.48
    },
    bold14: {
      fontFamily: 'Pretendard-Bold',
      fontSize: 14,
      fontStyle: 'normal',
      lineHeight: 21,
      color: textColor,
      letterSpacing: -0.42
    },
    bold12: {
      fontFamily: 'Pretendard-Bold',
      fontSize: 12,
      fontStyle: 'normal',
      lineHeight: 13.2,
      color: textColor,
      letterSpacing: -0.36
    },
    bold8: {
      fontFamily: 'Pretendard-Bold',
      fontSize: 8,
      fontStyle: 'normal',
      lineHeight: 9.6,
      color: textColor,
      letterSpacing: -0.3
    },
    semi18: {
      fontFamily: 'Pretendard-SemiBold',
      fontSize: 18,
      fontStyle: 'normal',
      lineHeight: 27,
      color: textColor,
      letterSpacing: -0.66
    },
    semi16: {
      fontFamily: 'Pretendard-SemiBold',
      fontSize: 16,
      fontStyle: 'normal',
      lineHeight: 24,
      color: textColor,
      letterSpacing: -0.48
    },
    semi14: {
      fontFamily: 'Pretendard-SemiBold',
      fontSize: 14,
      fontStyle: 'normal',
      lineHeight: 21,
      color: textColor,
      letterSpacing: -0.42
    },
    semi12: {
      fontFamily: 'Pretendard-SemiBold',
      fontSize: 12,
      fontStyle: 'normal',
      lineHeight: 18,
      color: textColor,
      letterSpacing: -0.36
    },
    semi8: {
      fontFamily: 'Pretendard-SemiBold',
      fontSize: 8,
      fontStyle: 'normal',
      lineHeight: 9.6,
      color: textColor,
      letterSpacing: -0.3
    },
    medium16: {
      fontFamily: 'Pretendard-Medium',
      fontSize: 16,
      fontStyle: 'normal',
      lineHeight: 24,
      color: textColor,
      letterSpacing: -0.48
    },
    medium14: {
      fontFamily: 'Pretendard-Medium',
      fontSize: 14,
      fontStyle: 'normal',
      lineHeight: 21,
      color: textColor,
      letterSpacing: -0.42
    },
    medium12: {
      fontFamily: 'Pretendard-Medium',
      fontSize: 12,
      fontStyle: 'normal',
      lineHeight: 18,
      color: textColor,
      letterSpacing: -0.36
    },
    medium11: {
      fontFamily: 'Pretendard-Medium',
      fontSize: 11,
      fontStyle: 'normal',
      lineHeight: 12.1,
      color: textColor,
      letterSpacing: -0.33
    },
    medium10: {
      fontFamily: 'Pretendard-Medium',
      fontSize: 10,
      fontStyle: 'normal',
      lineHeight: 15,
      color: textColor,
      letterSpacing: -0.30
    },
    regular16: {
      fontFamily: 'Pretendard-Regular',
      fontSize: 16,
      fontStyle: 'normal',
      lineHeight: 24,
      color: textColor,
      letterSpacing: -0.48
    },
    regular14: {
      fontFamily: 'Pretendard-Regular',
      fontSize: 14,
      fontStyle: 'normal',
      lineHeight: 21,
      color: textColor,
      letterSpacing: -0.42
    },
    regular12: {
      fontFamily: 'Pretendard-Regular',
      fontSize: 12,
      fontStyle: 'normal',
      lineHeight: 18,
      color: textColor,
      letterSpacing: -0.36
    },
    regular8: {
      fontFamily: 'Pretendard-Regular',
      fontSize: 8,
      fontStyle: 'normal',
      lineHeight: 9,
      color: textColor,
      letterSpacing: -0.30
    }
  });
};
