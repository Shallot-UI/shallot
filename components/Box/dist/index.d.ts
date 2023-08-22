import * as react from 'react';
import { ReactNode, ComponentType, FunctionComponent, RefObject } from 'react';
import * as _shallot_ui_core from '@shallot-ui/core';
import { AlignmentProps, BorderProps, BackgroundColorProps, BorderColorProps, TextColorProps, FlexProps, MarginProps, RadiusProps, SizingProps } from '@shallot-ui/core';
import { ShallotProp } from '@shallot-ui/theme';

type BoxShallot = ShallotProp & {
    flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
};
type BoxStyleProps = AlignmentProps & BorderProps & BackgroundColorProps & BorderColorProps & TextColorProps & FlexProps & MarginProps & RadiusProps & SizingProps;
type BoxProps<T = {}> = T & BoxStyleProps & {
    shallot?: BoxShallot;
    children?: ReactNode | ReactNode[];
    variant?: string;
};

declare const withBoxStyleProps: <T>(BoxComponent: ComponentType<T>) => FunctionComponent<T & _shallot_ui_core.AlignmentProps & _shallot_ui_core.BorderProps & _shallot_ui_core.BackgroundColorProps & _shallot_ui_core.BorderColorProps & _shallot_ui_core.TextColorProps & _shallot_ui_core.FlexProps & _shallot_ui_core.MarginProps & _shallot_ui_core.RadiusProps & _shallot_ui_core.SizingProps & {
    shallot?: BoxShallot | undefined;
    children?: react.ReactNode | react.ReactNode[];
    variant?: string | undefined;
} & {
    ref?: RefObject<HTMLDivElement> | undefined;
}>;

export { BoxProps, BoxShallot, BoxStyleProps, withBoxStyleProps };
