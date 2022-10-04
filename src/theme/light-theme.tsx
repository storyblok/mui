import { createTheme } from '@mui/material/styles'
import {
  activatedOpacity,
  backgroundOpacity,
  base_border_radius,
  black,
  blue,
  color_negative,
  color_positive,
  color_primary,
  color_primary_dark,
  color_warning,
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
  light,
  light_25,
  light_50,
  sb_dark_blue,
  sb_dark_blue_25,
  sb_dark_blue_50,
  selectedOpacity,
  white,
} from '@src/theme/design-tokens'
import { TypographyOptions } from '@mui/material/styles/createTypography'
import { Shadows } from '@mui/material/styles/shadows'
import { alpha } from '@mui/material'
import { ShapeOptions } from '@mui/system/createTheme/shape'
import { sidebarWidthNarrow } from '@src/theme/constants'
import {
  CheckedCheckboxIcon,
  CheckedRadioIcon,
  ChevronDownIcon,
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
  ...new Array(24)
    .fill(0)
    .map((_, i) => i + 1)
    .map((i) => [0, i / 12, i, i / 4])
    .map((v) => v.map(Math.ceil))
    .map(
      (v) =>
        `${v[0]}px ${v[1]}px ${v[2]}px ${v[3]}px ${alpha(sb_dark_blue, 0.07)}`,
    ),
] as Shadows

const spacing = 5

const palette = {
  mode: 'light',
  primary: {
    main: color_primary,
    contrastText: white,
  },
  secondary: {
    // main: color_secondary,
    main: color_primary_dark,
    contrastText: white,
  },
  success: {
    main: color_positive,
    contrastText: white,
  },
  info: {
    main: blue,
    contrastText: white,
  },
  warning: {
    main: color_warning,
    contrastText: white,
  },
  error: {
    main: color_negative,
    contrastText: white,
  },
  background: {
    default: white,
    paper: white,
  },
  common: {
    white: white,
    black: black,
  },
  text: {
    primary: sb_dark_blue,
    secondary: sb_dark_blue_50,
    disabled: light_50,
  },
  divider: light,
  action: {
    focus: light_50, // background-color
    focusOpacity: focusOpacity,
    active: sb_dark_blue_50,
    activatedOpacity: activatedOpacity,
    disabled: sb_dark_blue_25,
    disabledBackground: light_25,
    disabledOpacity: disabledOpacity,
    hover: light_25, // background-color
    hoverOpacity: hoverOpacity,
    selected: light_50, // color
    selectedOpacity: selectedOpacity,
  },
  grey: {
    '50': '#f7f8f9',
    '100': '#ECF0FF',
    '200': '#E2E6F5',
    '300': '#D1D5E4',
    '400': '#ADB1C0',
    '500': '#8d919f',
    '600': '#656976',
    '700': '#525662',
    '800': '#343743',
    '900': '#141822',
  },
} as const

const typography: TypographyOptions = {
  htmlFontSize: 10,
  fontSize: 14,
  fontWeightLight: font_weight_light,
  fontWeightRegular: font_weight_regular,
  fontWeightMedium: font_weight_medium,
  fontWeightBold: font_weight_bold,
  h1: {
    marginTop: spacing * 2,
    marginBottom: spacing * 2,
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

const successIconMixin = {
  '& .MuiAlert-icon': {
    color: palette.success.main,
  },
}
const infoIconMixin = {
  '& .MuiAlert-icon': {
    color: palette.info.main,
  },
}
const warningIconMixin = {
  '& .MuiAlert-icon': {
    color: palette.warning.main,
  },
}
const errorIconMixin = {
  '& .MuiAlert-icon': {
    color: palette.error.main,
  },
}

const successAlertMixin = {
  backgroundColor: alpha(palette.success.main, backgroundOpacity),
  ...successIconMixin,
}
const infoAlertMixin = {
  backgroundColor: alpha(palette.info.main, backgroundOpacity),
  ...infoIconMixin,
}
const warningAlertMixin = {
  backgroundColor: alpha(palette.warning.main, backgroundOpacity),
  ...warningIconMixin,
}
const errorAlertMixin = {
  backgroundColor: alpha(palette.error.main, backgroundOpacity),
  ...errorIconMixin,
}

const focusShadow = (color: string) =>
  `0px 0px 0px 3px ${alpha(color, backgroundOpacity)}`

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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        code: {
          fontFamily: `ui-monospace,Menlo,Monaco,"Roboto Mono","Oxygen Mono","Ubuntu Monospace","Source Code Pro","Droid Sans Mono","Courier New",monospace`,
          color: sb_dark_blue,
          backgroundColor: palette.grey['50'],
          borderRadius: shape.borderRadius,
          padding: '3px 5px',
          fontSize: font_13,
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
          fontSize: typography.htmlFontSize,
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
          color: color_primary,
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
        outlinedInherit: {
          borderColor: palette.divider,
        },
        outlinedSecondary: {
          borderColor: palette.divider,
        },
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
    },
    MuiAccordion: {
      defaultProps: {
        elevation: 0,
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
    MuiFormLabel: {
      styleOverrides: {
        root: {
          marginBottom: spacing * 2,
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
          paddingTop: spacing * 2,
          paddingBottom: spacing * 2,
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
          marginTop: spacing * 2,
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
            backgroundColor: alpha(
              sb_dark_blue,
              palette.action.selectedOpacity,
            ),
            '&:hover': {
              backgroundColor: alpha(sb_dark_blue, palette.action.hoverOpacity),
            },
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: alpha(
              sb_dark_blue,
              palette.action.selectedOpacity,
            ),
            '&:hover': {
              backgroundColor: alpha(sb_dark_blue, palette.action.hoverOpacity),
            },
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: alpha(sb_dark_blue, palette.action.hoverOpacity),
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(sb_dark_blue, 0.2),
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
        standardSuccess: successAlertMixin,
        filledSuccess: successAlertMixin,
        outlinedSuccess: successIconMixin,

        standardInfo: infoAlertMixin,
        filledInfo: infoAlertMixin,
        outlinedInfo: infoIconMixin,

        standardWarning: warningAlertMixin,
        filledWarning: warningAlertMixin,
        outlinedWarning: warningIconMixin,

        standardError: errorAlertMixin,
        filledError: errorAlertMixin,
        outlinedError: errorIconMixin,

        outlined: {
          borderColor: palette.divider,
          boxShadow: shadows[12],
        },
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
          paddingLeft: spacing,
          paddingRight: spacing,
          height: 24,
          fontWeight: typography.fontWeightBold,
          fontSize: font_13,
          lineHeight: font_13,
        },
        label: {
          padding: 0,
          marginLeft: spacing,
          marginRight: spacing,
        },
        icon: {
          margin: 0,
        },
        deleteIcon: {
          margin: 0,
        },
      },
    },
  },
})

// TODO dark theme (replicate the side nav in the storyblok application)

export { lightTheme }
