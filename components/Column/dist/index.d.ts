import * as react from 'react';
import { ReactNode, ComponentType, FunctionComponent, RefObject } from 'react';
import * as _shallot_ui_core from '@shallot-ui/core';
import { AlignmentProps, BorderProps, BackgroundColorProps, BorderColorProps, TextColorProps, FlexProps, MarginProps, RadiusProps, SizingProps } from '@shallot-ui/core';
import { ShallotProp } from '@shallot-ui/theme';

type ColumnStyleProps = AlignmentProps & BorderProps & BackgroundColorProps & BorderColorProps & TextColorProps & FlexProps & MarginProps & RadiusProps & SizingProps;
type ColumnShallot = ShallotProp & {
    flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
};
type ColumnProps<T = {}> = T & ColumnStyleProps & {
    shallot?: ColumnShallot;
    variant?: string;
    children?: ReactNode | ReactNode[];
};

declare const withColumnStyleProps: <T>(ColumnComponent: ComponentType<T>) => FunctionComponent<T & _shallot_ui_core.AlignmentProps & _shallot_ui_core.BorderProps & _shallot_ui_core.BackgroundColorProps & _shallot_ui_core.BorderColorProps & _shallot_ui_core.TextColorProps & _shallot_ui_core.FlexProps & _shallot_ui_core.MarginProps & _shallot_ui_core.RadiusProps & _shallot_ui_core.SizingProps & {
    shallot?: ColumnShallot | undefined;
    variant?: string | undefined;
    children?: react.ReactNode | react.ReactNode[];
} & {
    ref?: RefObject<HTMLDivElement> | undefined;
}>;

export { ColumnProps, ColumnShallot, ColumnStyleProps, withColumnStyleProps };
