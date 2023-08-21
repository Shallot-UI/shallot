import * as react_jsx_runtime from 'react/jsx-runtime';
import { ComponentType } from 'react';
import { DefaultTheme } from 'styled-components';
import { AllColorShades, ShallotProp } from '@shallot-ui/theme';

type FormRowStyleProps = {
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
type FormRowShallot = {
    container: ShallotProp;
    details: ShallotProp;
    label: ShallotProp;
    requiredStar: ShallotProp;
    helperText: ShallotProp;
    errorText: ShallotProp;
};
type FormRowProps<T> = T & FormRowStyleProps & {
    shallot?: FormRowShallot;
    variant?: string;
};
declare const withFormRowStyleProps: <T>(FormRowComponent: ComponentType<T>) => (props: FormRowProps<T>) => react_jsx_runtime.JSX.Element;

export { FormRowProps, FormRowShallot, FormRowStyleProps, withFormRowStyleProps };
