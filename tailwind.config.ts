import type { Config } from 'tailwindcss'

const config: Config = {
   darkMode: ['class'],
   content: ['./src/**/*.{tsx,css}'],
   theme: {
      screens: {
         '300p': '340px',
         '500p': '520px',
         '768p': '820px',
         '1024p': '1120px',
         '1080p': '1640px',
         '4k': '2250px',
      },
      extend: {
         colors: {
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            card: {
               DEFAULT: 'hsl(var(--card))',
               foreground: 'hsl(var(--card-foreground))',
            },
            popover: {
               DEFAULT: 'hsl(var(--popover))',
               foreground: 'hsl(var(--popover-foreground))',
            },
            primary: {
               DEFAULT: 'hsl(var(--primary))',
               foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
               DEFAULT: 'hsl(var(--secondary))',
               foreground: 'hsl(var(--secondary-foreground))',
            },
            muted: {
               DEFAULT: 'hsl(var(--muted))',
               foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
               DEFAULT: 'hsl(var(--accent))',
               foreground: 'hsl(var(--accent-foreground))',
            },
            destructive: {
               DEFAULT: 'hsl(var(--destructive))',
               foreground: 'hsl(var(--destructive-foreground))',
            },
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            chart: {
               '1': 'hsl(var(--chart-1))',
               '2': 'hsl(var(--chart-2))',
               '3': 'hsl(var(--chart-3))',
               '4': 'hsl(var(--chart-4))',
               '5': 'hsl(var(--chart-5))',
            },
         },
         keyframes: {
            'slide-in': {
               '0%': { transform: 'translateX(100%)', opacity: '0' },
               '100%': { transform: 'translateX(0)', opacity: '1' },
            },
         },
         animation: {
            'slide-in': 'slide-in 0.4s ease-out',
         },
         borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
         },
      },
   },
   plugins: [require('tailwindcss-animate')],
}
export default config
