export const widths = {
    XXLarge: '1600px',
    XLarge: '1230px',
    Large: '960px',
    Medium: '680px',
    Small: '480px',
    XSmall: '280px'
  }

export const minQueries = {
    XXL: `(min-width: ${widths.XXLarge})`,
    XL: `(min-width: ${widths.XLarge})`,
    Lg: `(min-width: ${widths.Large})`,
    Md: `(min-width: ${widths.Medium})`,
    Sm: `(min-width: ${widths.Small})`,
    XS: `(min-width: ${widths.XSmall})`,
}

export const maxQueries = {
    XXL: `(max-width: ${widths.XXLarge})`,
    XL: `(max-width: ${widths.XLarge})`,
    Lg: `(max-width: ${widths.Large})`,
    Md: `(max-width: ${widths.Medium})`,
    Sm: `(max-width: ${widths.Small})`,
    XS: `(max-width: ${widths.XSmall})`,
}