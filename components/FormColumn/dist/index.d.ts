import * as react_jsx_runtime from 'react/jsx-runtime';
import { ComponentType } from 'react';
import { DefaultTheme } from 'styled-components';
import { AllColorShades, ShallotProp } from '@shallot-ui/theme';

type FormColumnStyleProps = {
    radius?: keyof DefaultTheme['radii'];
    unitsAround?: number;
    unitsAbove?: number;
    unitsBelow?: number;
    unitsLeft?: number;
    unitsRight?: number;
    labelFontSize?: keyof DefaultTheme['fontSizes'];
    labelColor?: AllColorShades;
    fontFamily?: keyof DefaultTheme['fontFamilies'];
};
type FormColumnShallot = {
    container: ShallotProp;
    label: ShallotProp;
    requiredStar: ShallotProp;
    helperText: ShallotProp;
    errorText: ShallotProp;
};
type FormColumnProps<T> = T & FormColumnStyleProps & {
    shallot?: FormColumnShallot;
    variant?: string;
};
declare const withFormColumnStyleProps: <T>(FormColumnComponent: ComponentType<T>) => (props: FormColumnProps<T>) => react_jsx_runtime.JSX.Element;

export { FormColumnProps, FormColumnShallot, FormColumnStyleProps, withFormColumnStyleProps };
