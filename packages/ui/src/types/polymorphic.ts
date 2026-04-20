import React from "react";

/**
 * Robust Polymorphic Component Types
 */

export type AsProp<T extends React.ElementType> = {
  as?: T;
};

export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>["ref"];

export type PolymorphicComponentProps<
  T extends React.ElementType,
  Props = {}
> = AsProp<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof Props | "as"> &
  Props;

/**
 * Helper type for the exported component with ref support
 */
export type PolymorphicForwardRef<Props, DefaultElement extends React.ElementType> = {
  <T extends React.ElementType = DefaultElement>(
    props: PolymorphicComponentProps<T, Props> & { ref?: PolymorphicRef<T> }
  ): React.ReactElement | null;
  displayName?: string;
};
