
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/**/**/*.jsx',
    './src/**/*.js',
    './src/assets/styles/custom/*.css',
    './src/assets/styles/*.css',
    './public/index.html',
    './src/index.html',
    './dist/index.html',
    './dist/*.html'
  ],
  theme: {
    animation: {
      bounce: 'bounce 2s ease-in-out',
      spin: 'spin 1s linear infinite'
    },
    keyframes: {
      bounce: {
        '0%, 100%': {
          transform: 'rotate(0deg)',
        },
        '25%': {
          transform: 'rotate(-30deg)',
        },
        '75%': {
          transform: 'rotate(30deg)',
        },
      },
      spin: {
        'from': {
          transform: 'rotate(0deg)',
        },
        'to': {
          transform: 'rotate(360deg)',
        }
      }
    },
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      opacity: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        65: '0.65',
        70: '0.7',
        95: '0.95',
      },
      maxWidth: {
        '2-full': '200%',
        '7xl': '80rem',
        104: '26rem',
        120: '30rem',
        128: '32rem',
        144: '36rem',
        196: '49rem',
        207: '51.75rem',
        250: '58rem',
        28: '7rem',
        314: '78.5rem',
        88: '22rem',
        large: '18.5rem',
        larger: '54.25rem',
        normal: '11rem',
        small: '8.25rem',
        smaller: '7.75rem',
      },
      minWidth: {
        16: '4rem',
        21: '5.25rem',
        23: '5.75rem',
        27: '6.75rem',
        28: '7rem',
        31: '7.75rem',
        short: '8.125rem',
        33: '8.25rem',
        37: '9.25rem',
        50: '12.5rem',
        72: '18rem',
        80: '20rem',
        88: '22rem',
        'max-content': 'max-content',
        'fit-content': 'fit-content',
      },
      top: {
        6: '1.5rem',
        24: '6rem',
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
      transitionDuration: {
        500: '500ms',
        1250: '1250ms',
      },
      fontFamily: {
        sans: ['Muli', 'sans-serif'],
        avenir: ['Avenir', 'avenir'],
        'avenir-roman': ['AvenirRoman', 'Avenir'],
        montserrat: ['Montserrat', 'montserrat'],
        serif: ['SourceSerifPro', 'serif'],
        helvetica: ['Helvetica'],
        nunito: ['NunitoSans'],
        'roboto-condensed': ['RobotoCondensed'],
        grotesk: ['NiveauGrotesk'],
        roboto: ['Roboto'],
      },
      borderWidth: {
        tiny: '.03125rem',
      },
      borderRadius: {
        2: '0.5rem',
        3: '.75rem',
        4: '1rem',
        larger: '1.2rem',
        8: '2rem',
      },
      height: {
        '2-5': '0.625rem',
        '5-5': '1.375rem',
        7: '1.75rem',
        9: '2.25rem',
        11: '2.75rem',
        14: '3.5rem',
        15: '3.75rem',
        16: '4.0rem',
        18: '4.5rem',
        22: '5.5rem',
        27: '6.75rem',
        28: '7rem',
        36: '9rem',
        50: '12.5rem',
        61: '15.25rem',
        84: '21rem',
        104: '26rem',
        160: '31.7rem',
        172: '43rem',
        184: '53rem',
      },
      lineHeight: {
        3: 0.75,
        small: 0.83,
        '1-09': 1.09,
        usual: 1.14,
        common: 1.23,
        natural: 1.29,
        large: 1.33,
        larger: 1.44,
        largest: 1.50,
        '1-6': 1.60,
        common2: 1.66,
        relaxed2: 1.75,
        '1-85': 1.85,
        large2: 2.18,
        loose2: 2.5,
        'loose2-75': 2.75,
        'loose3-14': 3.14,
        20: '5rem',
        '0-8': '0.875rem',
      },
      width: {
        '1-1': '0.27rem',
        '5-5': '1.375rem',
        6: '1.5rem',
        7: '1.75rem',
        9: '2.25rem',
        11: '2.75rem',
        13: '3.25rem',
        14: '3.5rem',
        18: '4.5rem',
        24: '6rem',
        27: '6.75rem',
        28: '7rem',
        30: '7.50rem',
        34: '8.50rem',
        35: '8.75rem',
        36: '9rem',
        37: '9.25rem',
        42: '10.5rem',
        44: '11rem',
        50: '12.5rem',
        51: '12.75rem',
        52: '13rem',
        58: '14.5rem',
        60: '15rem',
        65: '16.25rem',
        68: '17rem',
        70: '17.5rem',
        72: '18rem',
        80: '20rem',
        82: '20.5rem',
        88: '22rem',
        91: '23rem',
        95: '23.625rem',
        96: '24rem',
        98: '24.5rem',
        100: '25rem',
        101: '25.25rem',
        104: '26rem',
        120: '30rem',
        200: '50rem',
        'fit-content': 'fit-content',
        '12p': '12%',
        '14p': '14%',
        '18p': '18%',
        '22p': '22%',
        '24p': '24%',
        '34p': '34%',
      },
      maxHeight: {
        0: '0',
        6: '1.5rem',
        limit: '1rem',
        14: '3.5rem',
        32: '8rem',
        50: '13rem',
        64: '16rem',
        100: '25rem',
      },
      minHeight: {
        4: '1rem',
        14: '3.5rem',
        15: '3.75rem',
        28: '7rem',
        32: '8rem',
      },
      margin: {
        '-3/8': '-37.5%',
        '-7': '-1.75rem',
        '-9': '-2.25rem',
        '1-5': '0.375rem',
        '3-5': '0.925rem',
        '4-5': '1.125rem',
        7: '1.75rem',
        9: '2.25rem',
        11: '2.75rem',
        13: '3.25rem',
        14: '3.5rem',
        15: '3.75rem',
        16: '4rem',
        17: '4.25rem',
        18: '4.5rem',
        23: '5.75rem',
        24: '6rem',
        26: '6.5rem',
        28: '7rem',
        29: '7.25rem',
        30: '7.5rem',
        36: '9rem',
        39: '9.75rem',
        56: '14rem',
        72: '18rem',
        88: '22rem',
        auto: 'auto',
      },
      padding: {
        tiny: '0.1875rem',
        sm: '0.625rem',
        usual: '0.875rem',
        '1-2': '0.375rem',
        '3-4': '0.675rem',
        '4-5': '0.950rem',
        7: '1.75rem',
        9: '2.25rem',
        11: '2.75rem',
        13: '3.25rem',
        14: '3.5rem',
        15: '3.75rem',
        18: '4.5rem',
        23: '5.75rem',
        24: '6rem',
        26: '6.5rem',
      },
      inset: {
        '-14': '-3.5rem',
        '-8': '-2rem',
        '-4': '-1rem',
        '-2': '-0.50rem',
        '-1': '-0.25rem',
        1: '0.25rem',
        2: '0.5rem',
        4: '1rem',
        5: '1.25rem',
        '7-8': '1.875rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        18: '4.5rem',
        24: '6rem',
        32: '8rem',
        56: '14rem',
        72: '18rem',
        88: '22rem',
        '1/2': '50%',
      },
      flex: {
        2: '2',
        3: '3',
        4: '4',
        8: '8',
      },
      fontStyle: {
        oblique: 'oblique',
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        casibold: '650',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
        blackk: '900',
      }
    },
    outline: {
      none: 'none',
    },
    colors: {
      'accepted': '#52aa5e',
      'light-accepted': '#6ee7b7',
      'hover-accepted': '#047857',
      'cancelled': '#c71f37',
      'light-cancelled': '#e01e37',
      'hover-cancelled': '#b21e35',
      'pending': '#f6bd60',
      'light-pending': '#fae588',
      'hover-pending': '#f9dc5c',
      'algae-green': '#24c46e',
      'athens-grey': '#f1f3f7',
      beige: '#ffd591',
      black: '#000',
      'blue-facebook': '#3b5998',
      'blue-google': '#4285f4',
      'blue-grey': '#818f9d',
      'chateau-green': '#28a963',
      charcoal: '#464646',
      'clear-blue': '#2a93ff',
      'cloudy-blue': '#c0c7ce',
      'club-green-alt': '#249f5b',
      'club-green': '#2dbd6e',
      coral: '#ff4545',
      'coral-10': '#ff45451a',
      'current-color': 'currentColor',
      dark: '#1d1d22',
      'dark-red': '#fd4d2f',
      'red-100' : '#FEE2E2',
      'red-500' : '#EF4444',
      'red-600' : '#DC2638',
      'dark-grey-blue': '#44586b',
      'dark-grey-three': '#1e1e20',
      'dark-grey': '#1c1c1e',
      'dodger-blue': '#4078FF',
      'electric-blue': '#004aff',
      grey: '#9e9e9e',
      'ice-blue': '#eef1f3',
      'gray-50': '#f9fafb',
      'gray-100': '#f3f4f6',
      'gray-300': '#d1d5db',
      'gray-400': '#9ca3af',
      'gray-500': '#6B7280',
      'gray-700': '#374151',
      'gray-800': '#1f2937',
      'gray-900': '#111827',
      'gray-unselected': '#B0B0B0',
      'gray-name': '#222222',
      'light-green': '#ace3b0',
      'dark-green': '#2e8c47',
      'indigo-500': '#6366f1',
      'indigo-600': '#4f46e5',
      'indigo-700': '#4338ca',
      jaguar: '#242427',
      'light-gold': '#AA9056',
      'light-grey-blue-five': '#c6c6c8',
      'light-grey-blue-two': '#adafb8',
      'light-grey-blue': '#adb9c5',
      'light-grey-three': '#c4cbd5',
      'light-grey-two': '#cccfdb',
      'light-grey': '#ced6df',
      'light-grey-2': '#f2f3f7',
      'light-grey-3': '#e2e3da',
      'light-periwinkle-60': 'rgba(191, 210, 255, 0.6)',
      'light-periwinkle-three-30': 'rgba(221, 223, 234, 0.3)',
      'light-periwinkle-three': '#dddfea',
      'light-periwinkle-two': '#d6d9e6',
      'light-periwinkle': '#bfd2ff',
      'light-red': '#fedcce',
      'lighter-red': '#fff8f8',
      mango: '#ffb723',
      navy: '#041f3b',
      overlay: 'rgba(30, 30, 32, 0.7)',
      pale: '#ffeac8',
      'orangey-red': '#fd4e30',
      'pale-aqua-50': 'rgba(200, 240, 219, 0.5)',
      'pale-grey': '#ecedf4',
      'periwinkle-three': '#e4e7ea',
      'powder-blue': '#c6d1ec',
      primary: '#FF5A5F',
      'primary-hover': '#e43c42',
      'primary-light': '#ff8985',
      'primary-measures': '#dee2ff',
      'primary-header': '#3c096c',
      red: '#d31f1f',
      'rewards-blue-light': '#f3fafc',
      'rewards-blue': '#85cfe3',
      'red-700': '#b91c1c',
      salmon: '#ff7474',
      sapphire: '#1c48b4',
      secondary: '#008489',
      'secondary-hover': '#2563eb',
      shamrock: '#00b252',
      silver: '#bfbfbf',
      slate: '#43576c',
      'slate-grey': '#56565a',
      transparent: 'transparent',
      'very-light-orange': '#feedea',
      white: '#fff',
      'white-one': '#f5f7f8',
      'blue-button': '#037aff',
      'blue-button-light': '#cde4ff',
      'blue-button-hover': '#1f68cf',
      'blue-button-hover-light': '#9fc2f5',
      'blue-calendar': '#a5dff8',
      'nili-dark-blue': '#2F3F52',
      'nili-blue': '#3F7CAC',
      'nili-dark-yellow': '#BDC4A7',
      'orange-btn': '#F58F29',
      'nili-yellow': '#D5E1A3',
      'nili-grey-blue': '#95AFBA',
      'small-tile': '#BFBBF1',
      'big-tile': '#D6D3F0',
      'plus-btn': '#F6511D',
      'casi-black': '#171717',
      'casi-black-bnb': '#222222',
      'mas-blue': '#4285ec'
    },
    fontSize: {
      '2-5': '0.625rem',
      3: '0.75rem',
      '3-5': '0.875rem',
      '3-75': '0.9375rem',
      4: '1rem',
      '4-5': '1.125rem',
      5: '1.25rem',
      '5-5': '1.375rem',
      6: '1.5rem',
      '6-5': '1.625rem',
      7: '1.75rem',
      '7-5': '1.875rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      12: '3rem',
      15: '3.75rem',
      18: '4.5rem',
      24: '6rem',
      36: '8rem',
    },
    letterSpacing: {
      '-1-8': '-1.8px',
      '-1-2': '-1.2px',
      '-1': '-1px',
      '-0-8': '-0.8px',
      '-0-7': '-0.7px',
      '-0-65': '-0.65px',
      '-0-6': '-0.6px',
      '-0-5': '-0.5px',
      '-0-47': '-0.47px',
      '-0-44': '-0.44px',
      '-0-4': '-0.4px',
      '-0-37': '-0.37px',
      '-0-34': '-0.34px',
      '-0-33': '-0.33px',
      '-0-3': '-0.3px',
      '-0-28': '-0.28px',
      '-0-27': '-0.27px',
      '-0-26': '-0.26px',
      '-0-25': '-0.25px',
      '-0-23': '-0.23px',
      '-0-22': '-0.22px',
      '-0-21': '-0.21px',
      '-0-2': '-0.2px',
      '-0-16': '-0.16px',
      '-0-11': '-0.11px',
      '-0-04': '-0.04px',
      0: '0',
      '0-18': '0.18px',
      '0-19': '0.19px',
      '0-4': '0.4px',
      '0-6': '0.6px',
      '0-69': '0.69px',
      '0-8': '0.8px',
      1: '1px',
      '1-16': '1.16px',
      '1-5': '1.5px',
      3: '3px',
    },
    rotate: {
      neg: {
        45: '-45deg',
        20: '-20deg',
        5: '-5deg',
      },
      5: '5deg',
      20: '20deg',
      45: '45deg',
      90: '90deg',
      180: '180deg',
      270: '270deg',
    },
    translate: {
      'right-up': [
        '-0.5rem',
        '0.6rem',
      ],
      'bottom-down': [
        '-0.6rem',
        '-0.75rem',
      ],
      up: [
        '-0.25rem',
      ],
    },
    scale: {
      90: '0.9',
      100: '1',
      110: '1.1',
      120: '1.2',
      200: '2',
      '-100': '-1',
    },
  },
  variants: {
    backgroundColor: [
      'active',
      'disabled',
      'focus',
      'hover',
      'responsive',
    ],
    borderColor: [
      'disabled',
      'focus',
      'hover',
      'responsive',
    ],
    borderStyle: [
      'responsive',
      'hover',
      'focus',
      'disabled',
      'last',
    ],
    borderWidth: [
      'responsive',
      'last',
      'hover',
      'focus',
    ],
    cursor: [
      'disabled',
    ],
    fill: [
      'hover',
    ],
    opacity: [
      'responsive',
      'hover',
      'focus',
      'disabled',
    ],
    scale: [
      'hover',
    ],
    textColor: [
      'disabled',
      'responsive',
      'hover',
      'focus',
    ],
  },
  corePlugins: {
    animation: true,
  },
  plugins: [],
}