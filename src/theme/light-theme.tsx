import {
  activatedOpacity,
  backgroundOpacity,
  base_border_radius,
  disabledOpacity,
  focusOpacity,
  font_12,
  font_13,
  font_14,
  font_16,
  font_weight_bold,
  font_weight_light,
  font_weight_medium,
  font_weight_regular,
  heading_base,
  heading_lg,
  heading_md,
  heading_s,
  heading_xl,
  heading_xs,
  hoverOpacity,
  selectedOpacity,
  sb_neutral_black,
  sb_neutral_white,
  sb_primary,
  sb_secondary,
  sb_secondary_50,
  sb_info,
  sb_info_950,
  sb_success,
  sb_danger,
  sb_warning,
  sb_base_50,
  sb_base_100,
  sb_base_200,
  sb_base_300,
  sb_base_400,
  sb_base_500,
  sb_base_600,
  sb_base_700,
  sb_base_800,
  sb_base_900,
  sb_overlay_secondary,
} from '@src/theme/design-tokens'
import { alpha, createTheme, Theme, ThemeOptions } from '@mui/material'
import { ShapeOptions } from '@mui/system'
import { sidebarWidthNarrow } from '@src/theme/constants'
import {
  CheckedCheckboxIcon,
  CheckedRadioIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  IndeterminateCheckboxIcon,
  SquareErrorIcon,
  SquareInfoIcon,
  SquareSuccessIcon,
  SquareWarningIcon,
  UncheckedCheckboxIcon,
  UncheckedRadioIcon,
} from '@src/icons'

const shadows = [
  'none',
  '0px 4px 8px 0px rgba(27, 36, 63, 0.08)',
  '0px 8px 24px 0px rgba(27, 36, 63, 0.08)',
  '0px 16px 32px 0px rgba(27, 36, 63, 0.08)',
  '0px 16px 48px 0px rgba(27, 36, 63, 0.08)',
  ...Array(20).fill('none'),
] as Theme['shadows']

const spacing = (factor?: number) => Math.floor(factor ?? 1) * 4

const palette = {
  mode: 'light',
  primary: {
    main: sb_primary,
    contrastText: sb_neutral_white,
  },
  secondary: {
    main: sb_secondary,
    contrastText: sb_neutral_white,
  },
  success: {
    main: sb_success,
    contrastText: sb_neutral_white,
  },
  info: {
    main: sb_info,
    contrastText: sb_neutral_white,
  },
  warning: {
    main: sb_warning,
    contrastText: sb_neutral_black,
  },
  error: {
    main: sb_danger,
    contrastText: sb_neutral_white,
  },
  background: {
    default: sb_neutral_white,
    paper: sb_neutral_white,
  },
  common: {
    white: sb_neutral_white,
    black: sb_neutral_black,
  },
  text: {
    primary: sb_info_950,
    secondary: sb_base_700,
    disabled: sb_base_500,
  },
  divider: sb_base_200,
  action: {
    focus: sb_base_500, // background-color
    focusOpacity: focusOpacity,
    active: sb_base_700,
    activatedOpacity: activatedOpacity,
    disabled: sb_secondary_50,
    disabledBackground: sb_overlay_secondary,
    disabledOpacity: disabledOpacity,
    hover: sb_secondary_50, // background-color
    hoverOpacity: hoverOpacity,
    selected: sb_base_500, // color
    selectedOpacity: selectedOpacity,
  },
  grey: {
    '50': sb_base_50,
    '100': sb_base_100,
    '200': sb_base_200,
    '300': sb_base_300,
    '400': sb_base_400,
    '500': sb_base_500,
    '600': sb_base_600,
    '700': sb_base_700,
    '800': sb_base_800,
    '900': sb_base_900,
  },
} as const

const typography: ThemeOptions['typography'] = {
  htmlFontSize: 10,
  fontSize: 14,
  fontWeightLight: font_weight_light,
  fontWeightRegular: font_weight_regular,
  fontWeightMedium: font_weight_medium,
  fontWeightBold: font_weight_bold,
  h1: {
    marginTop: spacing(2),
    marginBottom: spacing(2),
    fontWeight: font_weight_bold,
    letterSpacing: 0,
    fontSize: heading_xl,
  },
  h2: {
    fontSize: heading_lg,
    fontWeight: font_weight_medium,
  },
  h3: {
    fontSize: heading_md,
    fontWeight: font_weight_medium,
  },
  h4: {
    fontSize: heading_base,
    fontWeight: font_weight_medium,
  },
  h5: {
    fontSize: heading_s,
    fontWeight: font_weight_medium,
  },
  h6: {
    fontSize: heading_xs,
    fontWeight: font_weight_medium,
  },
  subtitle1: {
    fontSize: font_14,
    fontWeight: font_weight_medium,
  },
  subtitle2: {
    fontSize: font_14,
    fontWeight: font_weight_regular,
  },
  button: {
    fontSize: font_16,
    fontWeight: font_weight_medium,
    textTransform: 'inherit',
    lineHeight: 'normal',
  },
  body1: {
    fontSize: font_14,
  },
  body2: {
    fontSize: font_12,
  },
  overline: {
    fontSize: font_13,
  },
  caption: {
    fontSize: font_12,
  },
}

const shape: ShapeOptions = {
  borderRadius: base_border_radius as number,
}

const focusShadow = (color: string, width: number = 3) =>
  `0px 0px 0px ${width}px ${alpha(color, backgroundOpacity)}`

// Create a theme instance.
const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      // For apps, the sidebar is visible for these widths
      sm: 500 - sidebarWidthNarrow,
      md: 800 - sidebarWidthNarrow,
      lg: 1200,
      xl: 1536,
    },
  },
  palette,
  spacing,
  shape,
  transitions: {
    // duration: base_transition_duration,
    // easing: base_transition_easing,
  },
  shadows,
  // shadows: TODO
  typography,
  // TODO use ({theme}) => ({}) to defined styles with design tokens, rather than using the hard-coded values
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '&:not(pre)>code': {
          fontFamily: `ui-monospace,Menlo,Monaco,"Roboto Mono","Oxygen Mono","Ubuntu Monospace","Source Code Pro","Droid Sans Mono","Courier New",monospace`,
          backgroundColor: palette.grey['50'],
          borderRadius: shape.borderRadius,
          padding: '3px 5px',
        },
        pre: {
          margin: 0,
        },
        mark: {
          backgroundColor: palette.action.selected,
          padding: '3px 5px',
          borderRadius: shape.borderRadius,
        },
        '::selection': {
          color: palette.primary.contrastText,
          backgroundColor: palette.primary.main,
        },
        html: {
          fontSize: '62.5%',
        },
        body: {},
        a: {
          color: palette.primary.main,
          textDecoration: 'underline',
          textDecorationColor: alpha(palette.primary.main, 0.4),
          margin: 0,
        },
        // There's seemingly a bug in MUI where icons wrapped
        // with SvgIcon gets smaller font-size than the MUI icons.
        // The below styles fixes this.
        // TODO I think now that this only happens when you link the dependency,
        //  thus we should be able to verify and remove these styles.
        // '.MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall': {
        //     fontSize: '1.4285714285714286rem',
        // },
        // '.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium': {
        //     fontSize: '1.7142857142857142rem',
        // },
        // '.MuiSvgIcon-root.MuiSvgIcon-fontSizeLarge': {
        //     fontSize: '2.5rem',
        // },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'unset',
          },
          '&.Mui-focusVisible .MuiSvgIcon-root': {
            boxShadow: focusShadow(palette.primary.main),
            borderRadius: '50%',
          },
        },
      },
      defaultProps: {
        disableRipple: true,
        size: 'small',
        icon: (
          <UncheckedRadioIcon
            sx={{ height: 18, width: 18, color: 'divider' }}
          />
        ),
        checkedIcon: (
          <CheckedRadioIcon
            sx={{ height: 18, width: 18, color: 'primary.main' }}
          />
        ),
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          overflow: 'visible',
          padding: 0,
          width: 40,
          height: 24,
          '.Mui-focusVisible+.MuiSwitch-track': {
            boxShadow: focusShadow(palette.primary.main, 2),
          },
        },
        track: ({ theme }) => ({
          backgroundColor: theme.palette.grey.A200,
          opacity: 1,
          borderRadius: '20px',
        }),
        switchBase: ({ theme }) => ({
          padding: 0,
          top: '50%',
          left: 4,
          transform: 'translate(0, -50%)',
          '&.Mui-disabled+.MuiSwitch-track': {
            opacity: 0.5,
          },
          '&.Mui-checked': {
            transform: 'translate(100%, -50%)',
            '&.Mui-disabled+.MuiSwitch-track': {
              opacity: theme.palette.action.disabledOpacity,
            },
            '&+.MuiSwitch-track': {
              opacity: 1,
            },
          },
        }),
        thumb: ({ theme }) => ({
          color: theme.palette.background.paper,
          width: 16,
          height: 16,
          borderRadius: 8,
          boxShadow: theme.shadows[0],
        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'unset',
          },
          '&.Mui-focusVisible .MuiSvgIcon-root': {
            boxShadow: focusShadow(palette.primary.main),
          },
        },
      },
      defaultProps: {
        size: 'small',
        disableRipple: true,
        icon: (
          <UncheckedCheckboxIcon
            sx={{ height: 16, width: 16, color: 'divider' }}
          />
        ),
        checkedIcon: (
          <CheckedCheckboxIcon
            sx={{ height: 16, width: 16, color: 'primary.main' }}
          />
        ),
        indeterminateIcon: (
          <IndeterminateCheckboxIcon
            sx={{ height: 16, width: 16, color: 'primary.main' }}
          />
        ),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: sb_primary,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true,
      },
      styleOverrides: {
        sizeSmall: {
          fontSize: font_14,
          padding: `8px 16px`,
        },
        sizeMedium: {
          fontSize: font_16,
          padding: `12px 28px`,
        },
        sizeLarge: {
          fontSize: font_16,
          padding: `20px 43px`,
        },
        containedInherit: {
          backgroundColor: sb_overlay_secondary,
        },
        outlinedInherit: {
          borderColor: palette.divider,
        },
        outlinedSecondary: {
          borderColor: palette.divider,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
          '&:hover, &.Mui-focusVisible': {
            backgroundColor: theme.palette.action.hover,
          },
        }),
        sizeSmall: {
          padding: '6px',
        },
      },
      defaultProps: {
        size: 'small',
      },
    },
    MuiFab: {
      defaultProps: {
        color: 'primary',
      },
      styleOverrides: {
        sizeSmall: {
          width: 24,
          height: 24,
          minHeight: 24,
        },
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true,
      },
      styleOverrides: {
        groupedContained: {
          '&:not(:last-of-type)': {
            // The default border color is the palette[color].dark. We want the text color instead.
            borderColor: 'inherit',
          },
        },
        groupedContainedHorizontal: {
          '&:not(:last-of-type)': {
            // The default border color is the palette[color].dark. We want the text color instead.
            borderColor: 'inherit',
          },
        },
        grouped: {
          '&.MuiButton-textInherit, &.MuiButton-textSecondary,&.MuiButton-outlinedInherit, &.MuiButton-outlinedSecondary':
            {
              '&:not(:last-of-type)': {
                // The default border color is the palette[color].dark. We want the text color instead.
                borderColor: palette.divider,
              },
            },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: palette.divider,
        },
        head: {
          ...typography.subtitle2,
          borderBottom: 'none',
          color: palette.text.secondary,
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: 'secondary',
        elevation: 0,
      },
    },
    MuiToolbar: {
      defaultProps: {
        variant: 'dense',
      },
      styleOverrides: {
        root: ({ theme }) => ({
          paddingTop: theme.spacing(2),
          paddingBottom: theme.spacing(2),
          gap: theme.spacing(3),
          [theme.breakpoints.up('lg')]: {
            gap: theme.spacing(4),
          },
        }),
        gutters: ({ theme }) => ({
          // Override default media query
          [theme.breakpoints.up('xs')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
          },
        }),
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          '&::before': {
            // Divider always visible
            opacity: '1 !important',
          },
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: ({ theme }) => ({
          flexDirection: 'row-reverse',
          '&:hover': {
            color: theme.palette.primary.main,
          },
        }),
        expanded: {},
        expandIconWrapper: {
          color: 'inherit',
          '&.Mui-expanded': {
            transform: `rotate(90deg)`,
          },
        },
      },
      defaultProps: {
        expandIcon: <ChevronRightIcon color="inherit" />,
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {},
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: 1,
            boxShadow: focusShadow(palette.primary.main),
          },
          '&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: 1,
            boxShadow: focusShadow(palette.error.main),
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.primary.main,
          },
        },
        notchedOutline: {
          top: 0,
          '& legend': {
            display: 'none',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          position: 'relative',
          transform: 'none',
          color: `${palette.text.primary} !important`,
        },
      },
      defaultProps: {
        shrink: false,
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: spacing(),
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          marginBottom: spacing(2),
          color: `${palette.text.primary} !important`,
          fontSize: font_14,
          fontWeight: font_weight_medium,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
        },
      },
    },
    MuiIcon: {
      defaultProps: {
        color: 'inherit',
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          paddingLeft: '17px',
          paddingTop: spacing(2),
          paddingBottom: spacing(2),
          display: 'flex',
          alignItems: 'center',
        },
      },
      defaultProps: {
        IconComponent: () => (
          <ChevronDownIcon
            sx={{
              position: 'absolute',
              right: 0,
              m: 2,
              pointerEvents: 'none',
              width: '2.4rem',
              height: '2.4rem',
            }}
          />
        ),
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          marginTop: spacing(2),
          boxShadow: shadows[24],
        },
      },
      defaultProps: {
        BackdropProps: {
          invisible: true,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: 'transparent',
            color: palette.primary.main,
            fontWeight: font_weight_bold,
            '&:hover': {
              backgroundColor: sb_secondary_50,
            },
          },
          '&:hover': {
            backgroundColor: sb_secondary_50,
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: sb_secondary_50,
            '&:hover': {
              backgroundColor: sb_base_100,
            },
          },
          '&:hover': {
            backgroundColor: sb_secondary_50,
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: sb_secondary_50,
            '&:hover': {
              backgroundColor: sb_base_100,
            },
          },
          '&:hover': {
            backgroundColor: sb_secondary_50,
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(sb_info_950, 0.2),
        },
        invisible: {
          opacity: 0,
        },
      },
      defaultProps: {
        style: {
          // The default style has opacity: 1
          //  This gets higher priority than opacity: 0 in MuiBackdrop-invisible
          opacity: undefined,
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontSize: font_16,
          fontWeight: font_weight_medium,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        outlined: ({ theme }) => ({
          borderColor: theme.palette.divider,
          boxShadow: theme.shadows[12],
        }),
      },
      defaultProps: {
        iconMapping: {
          success: <SquareSuccessIcon />,
          info: <SquareInfoIcon />,
          warning: <SquareWarningIcon />,
          error: <SquareErrorIcon />,
        },
      },
    },
    MuiCircularProgress: {
      defaultProps: {
        disableShrink: true,
        size: 50,
        thickness: 5,
      },
      styleOverrides: {
        circle: {
          stroke: 'currentcolor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        },
      },
    },
    MuiChip: {
      defaultProps: {
        deleteIcon: <CloseIcon />,
      },
      styleOverrides: {
        root: {
          borderRadius: base_border_radius,
          paddingLeft: spacing(),
          paddingRight: spacing(),
          height: 24,
          fontWeight: typography.fontWeightBold,
          fontSize: font_13,
          lineHeight: font_13,
        },
        label: {
          padding: 0,
          marginLeft: spacing(),
          marginRight: spacing(),
        },
        icon: {
          margin: 0,
        },
        deleteIcon: {
          margin: 0,
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.grey.A100,
        }),
        rectangular: () => ({
          borderRadius: base_border_radius * 2,
        }),
      },
    },
  },
})

// TODO dark theme (replicate the side nav in the storyblok application)

export { lightTheme }
