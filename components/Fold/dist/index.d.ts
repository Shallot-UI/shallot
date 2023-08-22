import * as react_jsx_runtime from 'react/jsx-runtime';
import { ComponentType } from 'react';
import { DefaultTheme } from 'styled-components';
import { AllColorShades, ShallotProp } from '@shallot-ui/theme';

type FoldShallot = ShallotProp;
type FoldStyleProps = {
    backgroundColor?: AllColorShades;
    borderColor?: AllColorShades;
    textColor?: AllColorShades;
    radius?: keyof DefaultTheme['radii'];
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
    fullWidth?: boolean;
    fullHeight?: boolean;
    alignTop?: boolean;
    alignMiddle?: boolean;
    alignBottom?: boolean;
    alignLeft?: boolean;
    alignCenter?: boolean;
    alignRight?: boolean;
    grow?: boolean | number;
    shrink?: boolean | number;
    flex?: boolean | number;
};
type FoldProps<T = {}> = T & FoldStyleProps & {
    shallot?: FoldShallot;
};
declare const withFoldStyleProps: <T>(FoldComponent: ComponentType<T & {
    shallot?: FoldShallot | undefined;
}>) => (props: FoldProps<T>) => react_jsx_runtime.JSX.Element;

export { FoldProps, FoldStyleProps, withFoldStyleProps };
