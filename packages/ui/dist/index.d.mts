import * as React$1 from 'react';
import React__default, { CSSProperties, ReactNode } from 'react';
import { ClassValue } from 'clsx';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
export { TooltipProps } from '@radix-ui/react-tooltip';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { EmblaOptionsType } from 'embla-carousel';
import { HTMLMotionProps } from 'framer-motion';

interface BaseProps {
    className?: string;
    style?: CSSProperties;
}
interface ChildrenProps extends BaseProps {
    children?: ReactNode;
}
type Size = "xs" | "sm" | "md" | "lg" | "xl";

declare function cn(...inputs: ClassValue[]): string;

type Theme = "light" | "dark";
interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}
interface ThemeProviderProps {
    children: ReactNode;
    defaultTheme?: Theme;
}
declare const ThemeProvider: React__default.FC<ThemeProviderProps>;
declare function useTheme(): ThemeContextValue;

type PriceDirection = "up" | "down" | "flat";
declare const priceVariants: (props?: ({
    direction?: "flat" | "up" | "down" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface PriceChangeProps extends VariantProps<typeof priceVariants> {
    value: number;
    percent?: number;
    showIcon?: boolean;
    className?: string;
}
declare function getDirection(value: number): PriceDirection;
declare const PriceChange: React__default.FC<PriceChangeProps>;

declare function usePriceDirection(value: number): PriceDirection;
interface CountUpOptions {
    start?: number;
    end: number;
    duration?: number;
    decimals?: number;
}
declare function useCountUp({ start, end, duration, decimals, }: CountUpOptions): number;
declare function useMediaQuery(query: string): boolean;
/** Convenience: returns true on mobile viewports (< 768px) */
declare function useIsMobile(): boolean;
declare function useDisclosure(initial?: boolean): {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
};
declare function useLocalStorage<T>(key: string, defaultValue: T): readonly [T, (newValue: T | ((prev: T) => T)) => void];

declare const buttonVariants: (props?: ({
    variant?: "dark" | "primary" | "secondary" | "ghost" | "danger" | "outline-brand" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    fullWidth?: boolean | null | undefined;
    loading?: boolean | null | undefined;
    iconOnly?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    loading?: boolean;
    leftIcon?: React__default.ReactNode;
    rightIcon?: React__default.ReactNode;
    iconOnly?: boolean;
}
declare const Button: React__default.ForwardRefExoticComponent<ButtonProps & React__default.RefAttributes<HTMLButtonElement>>;

declare const badgeVariants: (props?: ({
    variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "error" | "mint" | "blue" | "purple" | "neutral" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React__default.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, size, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

interface CardProps {
    variant?: "flat" | "raised" | "glass" | "outlined";
    padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
    hover?: boolean;
    interactive?: boolean;
    onClick?: () => void;
    className?: string;
    style?: React__default.CSSProperties;
    children?: React__default.ReactNode;
}
declare const Card: React__default.FC<CardProps>;

interface InputProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    hint?: string;
    error?: string;
    size?: "sm" | "md" | "lg";
    leftIcon?: React__default.ReactNode;
    rightIcon?: React__default.ReactNode;
    fullWidth?: boolean;
}
declare const Input: React__default.ForwardRefExoticComponent<InputProps & React__default.RefAttributes<HTMLInputElement>>;

interface ToggleProps {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    size?: "sm" | "md";
    label?: string;
    onChange?: (checked: boolean) => void;
    className?: string;
    style?: React__default.CSSProperties;
}
declare const Toggle: React__default.FC<ToggleProps>;

interface AppBarProps extends React__default.HTMLAttributes<HTMLDivElement> {
    title?: string;
    leftAction?: React__default.ReactNode;
    rightActions?: React__default.ReactNode;
    sticky?: boolean;
}
declare const AppBar: React__default.FC<AppBarProps>;

interface BottomNavigationItem {
    id: string;
    label: string;
    icon: React__default.ReactNode;
    activeIcon?: React__default.ReactNode;
}
interface BottomNavigationProps {
    items: BottomNavigationItem[];
    activeId?: string;
    onSelect?: (id: string) => void;
    className?: string;
}
declare const BottomNavigation: React__default.FC<BottomNavigationProps>;

interface BreadcrumbItem {
    label: string;
    href?: string;
    icon?: React__default.ReactNode;
}
interface BreadcrumbsProps extends React__default.HTMLAttributes<HTMLElement> {
    items: BreadcrumbItem[];
    separator?: React__default.ReactNode;
}
declare const Breadcrumbs: React__default.FC<BreadcrumbsProps>;

interface DrawerProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    title?: string;
    description?: string;
    children: React__default.ReactNode;
    side?: "left" | "right" | "top" | "bottom";
    className?: string;
}
declare const Drawer: React__default.FC<DrawerProps>;

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}
declare const Pagination: React__default.FC<PaginationProps>;

declare const Menu: React__default.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const MenuTrigger: React__default.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const MenuGroup: React__default.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React__default.RefAttributes<HTMLDivElement>>;
declare const MenuPortal: React__default.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const MenuSub: React__default.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const MenuContent: React__default.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const MenuItem: React__default.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React__default.RefAttributes<HTMLDivElement>>;
declare const MenuLabel: React__default.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React__default.RefAttributes<HTMLDivElement>>;
declare const MenuSeparator: React__default.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;

declare const Popover: React__default.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React__default.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: React__default.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;

interface IconButtonProps extends Omit<ButtonProps, "iconOnly" | "leftIcon" | "rightIcon"> {
    icon: React__default.ReactNode;
}
declare const IconButton: React__default.ForwardRefExoticComponent<IconButtonProps & React__default.RefAttributes<HTMLButtonElement>>;

interface CheckBoxProps extends React__default.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
    label?: string;
    error?: string;
}
declare const CheckBox: React__default.ForwardRefExoticComponent<CheckBoxProps & React__default.RefAttributes<HTMLButtonElement>>;

declare const RadioGroup: React__default.ForwardRefExoticComponent<RadioGroupPrimitive.RadioGroupProps & React__default.RefAttributes<HTMLDivElement>>;
interface RadioItemProps extends React__default.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
    label?: string;
}
declare const RadioGroupItem: React__default.ForwardRefExoticComponent<RadioItemProps & React__default.RefAttributes<HTMLButtonElement>>;

interface SwitchProps extends React__default.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
    label?: string;
}
declare const Switch: React__default.ForwardRefExoticComponent<SwitchProps & React__default.RefAttributes<HTMLButtonElement>>;

interface SliderProps extends React__default.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
    label?: string;
    error?: string;
}
declare const Slider: React__default.ForwardRefExoticComponent<SliderProps & React__default.RefAttributes<HTMLSpanElement>>;

interface TextFieldProps extends React__default.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    leftIcon?: React__default.ReactNode;
    rightIcon?: React__default.ReactNode;
    containerClassName?: string;
}
declare const TextField: React__default.ForwardRefExoticComponent<TextFieldProps & React__default.RefAttributes<HTMLInputElement>>;

interface TextFieldPasswordProps extends Omit<TextFieldProps, "rightIcon" | "type"> {
}
declare const TextFieldPassword: React__default.ForwardRefExoticComponent<TextFieldPasswordProps & React__default.RefAttributes<HTMLInputElement>>;

interface DigitInputProps {
    length?: number;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    error?: boolean;
    className?: string;
    containerClassName?: string;
}
declare const DigitInput: React__default.FC<DigitInputProps>;

interface TextAreaProps extends React__default.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}
declare const TextArea: React__default.ForwardRefExoticComponent<TextAreaProps & React__default.RefAttributes<HTMLTextAreaElement>>;

declare const Select: React__default.FC<SelectPrimitive.SelectProps>;
declare const SelectValue: React__default.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React__default.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React__default.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React__default.RefAttributes<HTMLButtonElement>, "ref"> & React__default.RefAttributes<HTMLButtonElement>>;
declare const SelectContent: React__default.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React__default.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;

interface FileUploaderProps {
    onFilesSelected?: (files: File[]) => void;
    maxFiles?: number;
    accept?: string;
    className?: string;
    label?: string;
}
declare const FileUploader: React__default.FC<FileUploaderProps>;

interface DatePickerProps {
    value?: Date;
    onChange?: (date: Date) => void;
    label?: string;
    error?: string;
    placeholder?: string;
    className?: string;
}
declare const DatePicker: React__default.FC<DatePickerProps>;

interface AutocompleteOption {
    value: string;
    label: string;
}
interface AutocompleteProps {
    options: AutocompleteOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    label?: string;
    error?: string;
    className?: string;
}
declare const Autocomplete: React__default.FC<AutocompleteProps>;

interface FabProps extends Omit<ButtonProps, "variant"> {
    icon: React__default.ReactNode;
    position?: "bottom-right" | "bottom-left" | "top-right" | "top-left" | "none";
}
declare const Fab: React__default.ForwardRefExoticComponent<FabProps & React__default.RefAttributes<HTMLButtonElement>>;

interface TagProps {
    label: string;
    onRemove?: () => void;
    onClick?: () => void;
    variant?: "default" | "primary" | "secondary" | "outline";
    size?: "sm" | "md";
    className?: string;
}
declare const Tag: React__default.FC<TagProps>;

interface TagGroupProps {
    tags: string[];
    onRemoveTag?: (tag: string) => void;
    variant?: TagProps["variant"];
    size?: TagProps["size"];
    label?: string;
    className?: string;
}
declare const TagGroup: React__default.FC<TagGroupProps>;

interface RatingProps {
    value?: number;
    max?: number;
    onChange?: (value: number) => void;
    readonly?: boolean;
    size?: "sm" | "md" | "lg";
    className?: string;
    label?: string;
}
declare const Rating: React__default.FC<RatingProps>;

declare const Avatar: React__default.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React__default.RefAttributes<HTMLSpanElement>, "ref"> & React__default.RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: React__default.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React__default.RefAttributes<HTMLImageElement>, "ref"> & React__default.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React__default.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React__default.RefAttributes<HTMLSpanElement>, "ref"> & React__default.RefAttributes<HTMLSpanElement>>;
type AvatarProps = React__default.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;

interface ChipProps extends React__default.HTMLAttributes<HTMLDivElement> {
    label: string;
    onDelete?: () => void;
    icon?: React__default.ReactNode;
    variant?: "filled" | "outline" | "ghost";
    color?: "primary" | "secondary" | "success" | "warning" | "error" | "default";
}
declare const Chip: React__default.FC<ChipProps>;

interface ImageProps extends React__default.ImgHTMLAttributes<HTMLImageElement> {
    aspectRatio?: "square" | "video" | "portrait" | "none";
    fallback?: string;
    containerClassName?: string;
}
declare const Image: React__default.FC<ImageProps>;

interface ImageListProps {
    children: React__default.ReactNode;
    cols?: number;
    gap?: number;
    className?: string;
}
declare const ImageList: React__default.FC<ImageListProps>;

interface ColumnDef<TData> {
    id: string;
    header: string;
    accessorKey?: keyof TData;
    cell?: (item: TData) => React$1.ReactNode;
    sortable?: boolean;
}
interface DataTableProps<TData> {
    columns: ColumnDef<TData>[];
    data: TData[];
    searchKey?: keyof TData;
    searchPlaceholder?: string;
    highlightKey?: keyof TData;
    pageSize?: number;
}
declare function DataTable<TData>({ columns, data, searchKey, searchPlaceholder, highlightKey, pageSize, }: DataTableProps<TData>): react_jsx_runtime.JSX.Element;

interface ListProps {
    children: React__default.ReactNode;
    className?: string;
}
declare const List: React__default.FC<ListProps>;
interface ListItemProps {
    children: React__default.ReactNode;
    icon?: React__default.ReactNode;
    secondaryAction?: React__default.ReactNode;
    onClick?: () => void;
    className?: string;
}
declare const ListItem: React__default.FC<ListItemProps>;

declare const Table: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<HTMLTableElement> & React__default.RefAttributes<HTMLTableElement>>;
declare const TableHeader: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<HTMLTableSectionElement> & React__default.RefAttributes<HTMLTableSectionElement>>;
declare const TableBody: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<HTMLTableSectionElement> & React__default.RefAttributes<HTMLTableSectionElement>>;
declare const TableFooter: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<HTMLTableSectionElement> & React__default.RefAttributes<HTMLTableSectionElement>>;
declare const TableRow: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<HTMLTableRowElement> & React__default.RefAttributes<HTMLTableRowElement>>;
declare const TableHead: React__default.ForwardRefExoticComponent<React__default.ThHTMLAttributes<HTMLTableCellElement> & React__default.RefAttributes<HTMLTableCellElement>>;
declare const TableCell: React__default.ForwardRefExoticComponent<React__default.TdHTMLAttributes<HTMLTableCellElement> & React__default.RefAttributes<HTMLTableCellElement>>;
declare const TableCaption: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<HTMLTableCaptionElement> & React__default.RefAttributes<HTMLTableCaptionElement>>;

declare const TooltipProvider: React__default.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: React__default.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React__default.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: React__default.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;

declare const progressVariants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ProgressColor = "brand" | "success" | "danger" | "warning" | "info";
interface ProgressProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, "color">, VariantProps<typeof progressVariants> {
    value: number;
    max?: number;
    label?: string;
    showValue?: boolean;
    color?: ProgressColor;
}
declare const Progress: React__default.ForwardRefExoticComponent<ProgressProps & React__default.RefAttributes<HTMLDivElement>>;

interface TabsProps {
    items: Array<{
        id: string;
        label: string;
        icon?: React__default.ReactNode;
        disabled?: boolean;
        badge?: string | number;
    }>;
    activeId?: string;
    defaultActiveId?: string;
    variant?: "default" | "brand" | "pills" | "underline";
    size?: "sm" | "md";
    onChange?: (id: string) => void;
    className?: string;
    style?: React__default.CSSProperties;
}
declare const Tabs: React__default.FC<TabsProps>;

interface SeparatorProps extends React__default.HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical";
    decorative?: boolean;
}
declare const Separator: React__default.ForwardRefExoticComponent<SeparatorProps & React__default.RefAttributes<HTMLDivElement>>;

interface BoxProps extends React__default.HTMLAttributes<HTMLDivElement> {
    as?: React__default.ElementType;
    className?: string;
    children?: React__default.ReactNode;
}
declare const Box: React__default.FC<BoxProps>;

interface StackProps extends React__default.HTMLAttributes<HTMLDivElement> {
    direction?: "row" | "column" | "row-reverse" | "column-reverse";
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    gap?: number | string;
    wrap?: boolean;
}
declare const Stack: React__default.FC<StackProps>;

interface DividerProps extends React__default.HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical";
    className?: string;
}
declare const Divider: React__default.FC<DividerProps>;

interface LinkProps extends React__default.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: "default" | "muted" | "brand";
    underline?: "none" | "hover" | "always";
}
declare const Link: React__default.FC<LinkProps>;

declare const Accordion: React__default.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React__default.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React__default.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React__default.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React__default.RefAttributes<HTMLButtonElement>, "ref"> & React__default.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React__default.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;

declare const alertVariants: (props?: ({
    variant?: "default" | "destructive" | "success" | "warning" | "brand" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AlertProps extends React__default.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
    title?: string;
    description?: string;
}
declare const Alert: React__default.ForwardRefExoticComponent<AlertProps & React__default.RefAttributes<HTMLDivElement>>;

declare const loaderVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | null | undefined;
    color?: "primary" | "neutral" | "brand" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface LoaderProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, "color">, VariantProps<typeof loaderVariants> {
    label?: string;
    color?: "brand" | "primary" | "neutral";
}
declare const Loader: React__default.ForwardRefExoticComponent<LoaderProps & React__default.RefAttributes<HTMLDivElement>>;

interface ProgressIndicatorProps extends React__default.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
    indicatorClassName?: string;
}
declare const ProgressIndicator: React__default.ForwardRefExoticComponent<ProgressIndicatorProps & React__default.RefAttributes<HTMLDivElement>>;

interface ProgressTrackerStep {
    id: string;
    label: string;
    description?: string;
}
interface ProgressTrackerProps {
    steps: ProgressTrackerStep[];
    currentStepIndex: number;
    className?: string;
}
declare const ProgressTracker: React__default.FC<ProgressTrackerProps>;

declare function Skeleton({ className, ...props }: React__default.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

declare const Dialog: React__default.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React__default.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React__default.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: React__default.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: React__default.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const DialogContent: React__default.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: React__default.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React__default.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogTitle: React__default.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React__default.RefAttributes<HTMLHeadingElement>, "ref"> & React__default.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React__default.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React__default.RefAttributes<HTMLParagraphElement>, "ref"> & React__default.RefAttributes<HTMLParagraphElement>>;

declare const ToastProvider: React__default.FC<ToastPrimitive.ToastProviderProps>;
declare const ToastViewport: React__default.ForwardRefExoticComponent<Omit<ToastPrimitive.ToastViewportProps & React__default.RefAttributes<HTMLOListElement>, "ref"> & React__default.RefAttributes<HTMLOListElement>>;
declare const Toast: React__default.ForwardRefExoticComponent<Omit<ToastPrimitive.ToastProps & React__default.RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "destructive" | "success" | "warning" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React__default.RefAttributes<HTMLLIElement>>;
declare const ToastAction: React__default.ForwardRefExoticComponent<Omit<ToastPrimitive.ToastActionProps & React__default.RefAttributes<HTMLButtonElement>, "ref"> & React__default.RefAttributes<HTMLButtonElement>>;
declare const ToastClose: React__default.ForwardRefExoticComponent<Omit<ToastPrimitive.ToastCloseProps & React__default.RefAttributes<HTMLButtonElement>, "ref"> & React__default.RefAttributes<HTMLButtonElement>>;
declare const ToastTitle: React__default.ForwardRefExoticComponent<Omit<ToastPrimitive.ToastTitleProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const ToastDescription: React__default.ForwardRefExoticComponent<Omit<ToastPrimitive.ToastDescriptionProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
type ToastProps = React__default.ComponentPropsWithoutRef<typeof Toast>;
type ToastActionElement = React__default.ReactElement<typeof ToastAction>;

interface BackdropProps {
    show: boolean;
    onClick?: () => void;
    className?: string;
    blur?: boolean;
}
declare const Backdrop: React__default.FC<BackdropProps>;

type ToastType = "default" | "success" | "warning" | "error" | "info";
interface ToastInstance {
    id: string;
    title?: string;
    description?: string;
    type?: ToastType;
    action?: ToastActionElement;
}
declare const NotiStackProvider: React__default.FC<{
    children: React__default.ReactNode;
}>;
declare const ToastContext: React__default.Context<{
    addToast: (toast: Omit<ToastInstance, "id">) => string;
    removeToast: (id: string) => void;
}>;
declare const useToast: () => {
    addToast: (toast: Omit<ToastInstance, "id">) => string;
    removeToast: (id: string) => void;
};

interface CarouselProps {
    children: React__default.ReactNode;
    options?: EmblaOptionsType;
    className?: string;
    style?: React__default.CSSProperties;
}
declare const Carousel: React__default.FC<CarouselProps>;

declare const FadeIn: ({ children, className, ...props }: HTMLMotionProps<"div">) => react_jsx_runtime.JSX.Element;
declare const SlideIn: ({ children, className, direction, ...props }: HTMLMotionProps<"div"> & {
    direction?: "up" | "down" | "left" | "right";
}) => react_jsx_runtime.JSX.Element;
declare const ScaleIn: ({ children, className, ...props }: HTMLMotionProps<"div">) => react_jsx_runtime.JSX.Element;

interface NudgeProps {
    id: string;
    title: string;
    description: string;
    variant?: "info" | "warning" | "success" | "neutral";
    onClose?: (id: string) => void;
    onAction?: (id: string) => void;
    actionLabel?: string;
    className?: string;
}
declare const Nudge: React__default.FC<NudgeProps>;

interface NudgesPanelProps {
    nudges: NudgeProps[];
    onClose?: (id: string) => void;
    onAction?: (id: string) => void;
    position?: "top-right" | "bottom-right" | "bottom-center";
    className?: string;
}
declare const NudgesPanel: React__default.FC<NudgesPanelProps>;

interface InsightData {
    tag: string;
    title: string;
    body: string;
    badges?: Array<{
        label: string;
        variant: any;
    }>;
}
interface InsightCardProps {
    data: InsightData;
    className?: string;
    onClick?: () => void;
}
declare const InsightCard: React__default.FC<InsightCardProps>;

interface MetricData {
    label: string;
    value: string | number;
    delta?: number;
    deltaLabel?: string;
    direction?: PriceDirection;
    prefix?: string;
    suffix?: string;
}
declare const cardVariants: (props?: ({
    compact?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface MetricCardProps extends VariantProps<typeof cardVariants> {
    data: MetricData;
    className?: string;
}
declare const MetricCard: React__default.FC<MetricCardProps>;

interface SparklineProps {
    data: number[];
    direction?: PriceDirection;
    width?: number;
    height?: number;
    className?: string;
}
declare const Sparkline: React__default.FC<SparklineProps>;

interface StockData {
    ticker: string;
    name: string;
    price: number;
    change: number;
    changePercent: number;
    open?: number;
    high?: number;
    low?: number;
    volume?: string;
    sparkline?: number[];
}
interface StockCardProps {
    data: StockData;
    onClick?: () => void;
    className?: string;
}
declare const StockCard: React__default.FC<StockCardProps>;

interface TradingViewConfig {
    symbol?: string;
    interval?: string;
    timezone?: string;
    theme?: "light" | "dark";
    style?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
    locale?: string;
    toolbar_bg?: string;
    enable_publishing?: boolean;
    allow_symbol_change?: boolean;
    container_id: string;
    width?: string | number;
    height?: string | number;
    autosize?: boolean;
    hide_side_toolbar?: boolean;
    hide_top_toolbar?: boolean;
    details?: boolean;
    hotlist?: boolean;
    calendar?: boolean;
    show_popup_button?: boolean;
    popup_width?: string;
    popup_height?: string;
    withdateranges?: boolean;
    save_image?: boolean;
    backgroundColor?: string;
    gridLineColor?: string;
}
/**
 * Advanced Real-Time Chart Widget
 */
declare const AdvancedRealTimeChart: ({ symbol, interval, theme, autosize, height, ...rest }: Partial<TradingViewConfig>) => react_jsx_runtime.JSX.Element;
/**
 * Technical Analysis Widget
 */
declare const TechnicalAnalysis: ({ symbol, theme, width, height, interval }: {
    symbol?: string;
    theme?: "light" | "dark";
    width?: string | number;
    height?: string | number;
    interval?: string;
}) => react_jsx_runtime.JSX.Element;
/**
 * Market Overview Widget
 */
declare const MarketOverview: ({ theme, width, height, symbols }: {
    theme?: "light" | "dark";
    width?: string | number;
    height?: string | number;
    symbols?: {
        s: string;
        d: string;
    }[];
}) => react_jsx_runtime.JSX.Element;
/**
 * Symbol Overview Mini Widget
 */
declare const SymbolOverviewMini: ({ symbol, theme, width, height }: {
    symbol?: string;
    theme?: "light" | "dark";
    width?: string | number;
    height?: string | number;
}) => react_jsx_runtime.JSX.Element;
/**
 * Ticker Tape Widget
 */
declare const TickerTape: ({ theme, symbols }: {
    theme?: "light" | "dark";
    symbols?: {
        proName: string;
        title: string;
    }[];
}) => react_jsx_runtime.JSX.Element;
declare global {
    interface Window {
        TradingView: any;
    }
}

interface ChartProps {
    data: any[];
    height?: number;
    theme?: "light" | "dark";
    color?: string;
    className?: string;
    title?: string;
}
declare const AreaChart: ({ data, color, ...props }: ChartProps) => react_jsx_runtime.JSX.Element;
declare const CandlestickChart: ({ data, ...props }: ChartProps) => react_jsx_runtime.JSX.Element;
declare const BaselineChart: ({ data, color, ...props }: ChartProps) => react_jsx_runtime.JSX.Element;
declare const VolumeChart: ({ data, color, ...props }: ChartProps) => react_jsx_runtime.JSX.Element;

interface TickerItem {
    symbol: string;
    price: string;
    change: string;
    isPositive: boolean;
}
interface CustomTickerTapeProps {
    items: TickerItem[];
    speed?: number;
    className?: string;
}
declare const CustomTickerTape: React__default.FC<CustomTickerTapeProps>;

interface MarketStatusProps {
    status: "open" | "closed" | "closing-soon";
    market?: string;
    className?: string;
}
declare const MarketStatus: React__default.FC<MarketStatusProps>;

interface AppHeaderNavItem {
    label: string;
    href: string;
    /** Show a badge on this nav item */
    badge?: string;
    /** Icon to render before the label */
    icon?: React.ReactNode;
    /** Sub-items for dropdown */
    children?: Pick<AppHeaderNavItem, 'label' | 'href' | 'icon' | 'badge'>[];
}
interface AppHeaderProps {
    /** User object - null = logged out */
    user?: {
        name: string;
        email: string;
        avatarUrl?: string;
        plan: 'free' | 'pro';
    } | null;
    /** Override navigation items */
    navItems?: AppHeaderNavItem[];
    /** Show market status bar below header */
    showMarketStatus?: boolean;
    /** Callback when user clicks logout */
    onLogout?: () => void;
    /** Optional right-side CTA override */
    cta?: React.ReactNode;
}
declare function AppHeader({ user, navItems, onLogout, cta, }: AppHeaderProps): react_jsx_runtime.JSX.Element;

interface FooterLink {
    label: string;
    href: string;
    external?: boolean;
}
interface FooterColumn {
    title: string;
    links: FooterLink[];
}
interface AppFooterProps {
    /** Override footer columns */
    columns?: FooterColumn[];
    /** Show SEBI disclaimer */
    showDisclaimer?: boolean;
    /** Compact single-line footer mode */
    compact?: boolean;
    /** Additional className */
    className?: string;
}
declare function AppFooter({ columns, showDisclaimer, compact, className, }: AppFooterProps): react_jsx_runtime.JSX.Element;

type LogoVariant = "mark" | "wordmark" | "full";
type LogoTheme = "brand" | "dark" | "light" | "white";
type LogoSize = "xs" | "sm" | "md" | "lg" | "xl";
interface MintxLogoProps {
    variant?: LogoVariant;
    theme?: LogoTheme;
    size?: LogoSize;
    className?: string;
    style?: React__default.CSSProperties;
}
declare const MintxLogo: React__default.FC<MintxLogoProps>;

type GlobalBadgeVariant = "mint" | "green" | "red" | "amber" | "blue" | "purple" | "neutral" | "outline";
interface NavItem {
    id: string;
    label: string;
    icon?: React__default.ReactNode;
    href?: string;
    badge?: string;
    badgeVariant?: GlobalBadgeVariant;
    children?: NavItem[];
}
interface SidebarSection {
    label?: string;
    items: NavItem[];
}
interface SidebarProps {
    sections: SidebarSection[];
    activeId?: string;
    onNavigate?: (item: NavItem) => void;
    collapsed?: boolean;
    onCollapsedChange?: (collapsed: boolean) => void;
    footer?: React__default.ReactNode;
    className?: string;
}
declare const Sidebar: React__default.FC<SidebarProps>;

interface ThemeToggleProps {
    className?: string;
    showLabel?: boolean;
}
declare const ThemeToggle: React__default.FC<ThemeToggleProps>;

interface BottomNavItem {
    id: string;
    label: string;
    icon: React__default.ReactNode;
    activeIcon?: React__default.ReactNode;
    href?: string;
}
interface BottomNavProps {
    items: BottomNavItem[];
    activeId?: string;
    onNavigate?: (item: BottomNavItem) => void;
    className?: string;
}
declare const BottomNav: React__default.FC<BottomNavProps>;

declare function AssetLibrary({ showHeader, mode }: {
    showHeader?: boolean;
    mode?: "icons" | "illustrations";
}): react_jsx_runtime.JSX.Element;

type IconCategory = "navigation" | "market" | "action" | "status" | "social" | "device" | "finance" | "academy";
type IllustrationCategory = "empty-state" | "onboarding" | "pro-upgrade" | "error" | "market-status" | "success" | "academy" | "social";
interface IconDef {
    name: string;
    category: IconCategory;
    musrStories: string[];
}
interface IllustrationDef {
    id: string;
    name: string;
    use: string;
    category: IllustrationCategory;
    musrStories: string[];
    tags: string[];
}
declare const ICONS: IconDef[];
declare const ILLUSTRATIONS: IllustrationDef[];
declare const SVGS: Record<string, string>;

interface HeroProps {
    tag?: string;
    title: React__default.ReactNode;
    description: string;
    features?: string[];
    theme?: 'dark' | 'light';
    className?: string;
    children?: React__default.ReactNode;
    socialProof?: React__default.ReactNode;
    /** Data for floating chips */
    chips?: {
        left?: {
            label: string;
            value: string;
            sub: string;
        };
        right?: {
            label: string;
            value: string;
            sub: string;
        };
    };
}
declare function Hero({ tag, title, description, features, theme, className, children, socialProof, chips, }: HeroProps): react_jsx_runtime.JSX.Element;

interface TickerProps {
    items: string[];
    theme?: 'dark' | 'light';
    className?: string;
}
declare function Ticker({ items, theme, className }: TickerProps): react_jsx_runtime.JSX.Element;

interface HowItWorksStep {
    n: string;
    title: string;
    body: string;
}
interface HowItWorksProps {
    label: string;
    steps: HowItWorksStep[];
    theme?: 'dark' | 'light';
    className?: string;
}
declare function HowItWorks({ label, steps, theme, className, }: HowItWorksProps): react_jsx_runtime.JSX.Element;

interface Differentiator {
    rank: string;
    title: string;
    body: string;
    metric: string;
    metricSub: string;
    tag: string;
    accent: string;
    icon: React__default.ReactNode;
}
interface DiffCardProps {
    item: Differentiator;
    i: number;
    theme?: 'dark' | 'light';
}
declare function DiffCard({ item, i, theme }: DiffCardProps): react_jsx_runtime.JSX.Element;

interface DifferentiatorsProps {
    title: string;
    items: readonly Differentiator[];
    theme?: 'dark' | 'light';
    className?: string;
}
declare function Differentiators({ title, items, theme, className, }: DifferentiatorsProps): react_jsx_runtime.JSX.Element;

type WaitlistStatus = 'idle' | 'loading' | 'success' | 'error';
interface WaitlistFormProps {
    theme?: 'dark' | 'light';
    size?: 'sm' | 'md';
    className?: string;
    /** Optional callback on successful signup */
    onSuccess?: (email: string, position?: number) => void;
}
declare function WaitlistForm({ theme, size, className, onSuccess, }: WaitlistFormProps): react_jsx_runtime.JSX.Element;

interface FibSpiralProps {
    theme?: 'dark' | 'light';
    className?: string;
}
declare function FibSpiral({ theme, className }: FibSpiralProps): react_jsx_runtime.JSX.Element;

interface StatItem {
    val: string;
    label: string;
    sub: string;
}
interface StatsSectionProps {
    stats: StatItem[];
    theme?: 'dark' | 'light';
    className?: string;
}
declare function StatsSection({ stats, theme, className, }: StatsSectionProps): react_jsx_runtime.JSX.Element;

interface CommunitySectionProps {
    theme?: 'dark' | 'light';
    className?: string;
    title: React__default.ReactNode;
    description: string;
    label?: string;
    perks?: string[];
    children?: React__default.ReactNode;
}
declare function CommunitySection({ theme, className, title, description, label, perks, children, }: CommunitySectionProps): react_jsx_runtime.JSX.Element;

type MarketSession = "pre-open" | "open" | "closed" | "post-close";
interface MarketStatusData {
    session: MarketSession;
    label: string;
    nextEvent?: string;
    nextEventTime?: string;
}
interface SupportLiveBarProps {
    marketStatus?: MarketStatusData;
    onSupportClick?: () => void;
    className?: string;
}
declare const SupportLiveBar: React__default.FC<SupportLiveBarProps>;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, AdvancedRealTimeChart, Alert, type AlertProps, AppBar, type AppBarProps, AppFooter, type AppFooterProps, AppHeader, type AppHeaderNavItem, type AppHeaderProps, AreaChart, AssetLibrary, Autocomplete, type AutocompleteOption, type AutocompleteProps, Avatar, AvatarFallback, AvatarImage, type AvatarProps, Backdrop, type BackdropProps, Badge, type BadgeProps, type BaseProps, BaselineChart, BottomNav, type BottomNavItem, BottomNavigation, type BottomNavigationItem, type BottomNavigationProps, Box, type BoxProps, type BreadcrumbItem, Breadcrumbs, type BreadcrumbsProps, Button, type ButtonProps, CandlestickChart, Card, type CardProps, Carousel, type CarouselProps, CheckBox, type CheckBoxProps, type ChildrenProps, Chip, type ChipProps, type ColumnDef, CommunitySection, type CommunitySectionProps, CustomTickerTape, DataTable, DatePicker, type DatePickerProps, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DiffCard, type DiffCardProps, type Differentiator, Differentiators, type DifferentiatorsProps, DigitInput, type DigitInputProps, Divider, type DividerProps, Drawer, type DrawerProps, Fab, type FabProps, FadeIn, FibSpiral, type FibSpiralProps, FileUploader, type FileUploaderProps, type FooterColumn, type FooterLink, type GlobalBadgeVariant, Hero, type HeroProps, HowItWorks, type HowItWorksProps, type HowItWorksStep, ICONS, ILLUSTRATIONS, IconButton, type IconButtonProps, type IconCategory, type IconDef, type IllustrationCategory, type IllustrationDef, Image, ImageList, type ImageListProps, type ImageProps, Input, type InputProps, InsightCard, type InsightData, Link, type LinkProps, List, ListItem, type ListItemProps, type ListProps, Loader, type LoaderProps, MarketOverview, MarketStatus, Menu, MenuContent, MenuGroup, MenuItem, MenuLabel, MenuPortal, MenuSeparator, MenuSub, MenuTrigger, MetricCard, type MetricData, MintxLogo, type NavItem, NotiStackProvider, Nudge, type NudgeProps, NudgesPanel, Pagination, type PaginationProps, Popover, PopoverContent, PopoverTrigger, PriceChange, type PriceDirection, Progress, ProgressIndicator, type ProgressIndicatorProps, type ProgressProps, ProgressTracker, type ProgressTrackerProps, type ProgressTrackerStep, RadioGroup, RadioGroupItem, type RadioItemProps, Rating, type RatingProps, SVGS, ScaleIn, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Separator, type SeparatorProps, Sidebar, type Size, Skeleton, SlideIn, Slider, type SliderProps, Sparkline, Stack, type StackProps, type StatItem, StatsSection, type StatsSectionProps, StockCard, type StockData, SupportLiveBar, Switch, type SwitchProps, SymbolOverviewMini, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, type TabsProps, Tag, TagGroup, type TagGroupProps, type TagProps, TechnicalAnalysis, TextArea, type TextAreaProps, TextField, TextFieldPassword, type TextFieldPasswordProps, type TextFieldProps, type Theme, type ThemeContextValue, ThemeProvider, ThemeToggle, Ticker, type TickerProps, TickerTape, Toast, ToastAction, type ToastActionElement, ToastClose, ToastContext, ToastDescription, type ToastProps, ToastProvider, ToastTitle, ToastViewport, Toggle, type ToggleProps, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, VolumeChart, WaitlistForm, type WaitlistFormProps, type WaitlistStatus, badgeVariants, cn, getDirection, useCountUp, useDisclosure, useIsMobile, useLocalStorage, useMediaQuery, usePriceDirection, useTheme, useToast };
