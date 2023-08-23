import * as react_jsx_runtime from 'react/jsx-runtime';
import { ComponentType } from 'react';
import { DefaultTheme } from 'styled-components';
import { AllColorShades, ShallotProp } from '@shallot-ui/theme';

type TextStyleProps = {
    textColor?: AllColorShades;
    backgroundColor?: AllColorShades;
    fontFamily?: keyof DefaultTheme['fontFamilies'];
    font?: string;
    unitsAround?: number;
    unitsAbove?: number;
    unitsBelow?: number;
    unitsLeft?: number;
    unitsRight?: number;
    unitHeight?: number;
    unitWidth?: number;
    maxUnitHeight?: number;
    maxUnitWidth?: number;
    minUnitHeight?: number;
    minUnitWidth?: number;
    leftText?: boolean;
    centerText?: boolean;
    rightText?: boolean;
    letterSpacing?: keyof DefaultTheme['letterSpacings'];
    lineHeight?: keyof DefaultTheme['lineHeights'];
    fontSize?: keyof DefaultTheme['fontSizes'];
    underline?: 'under' | boolean;
    uppercase?: boolean;
};
type TextProps<T = {}> = T & TextStyleProps & {
    shallot?: ShallotProp;
    variant?: string;
};
declare const withTextStyleProps: <T>(TextComponent: ComponentType<T & {
    shallot?: ShallotProp | undefined;
}>) => (props: TextProps<T>) => react_jsx_runtime.JSX.Element;

export { TextProps, TextStyleProps, withTextStyleProps };
