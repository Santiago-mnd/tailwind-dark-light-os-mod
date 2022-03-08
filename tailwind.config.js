module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: 'media',
  theme: {
    extend: {
      typography: ({ theme }) => ({
        dark: {
          css: {
            '--tw-prose-body': theme('colors.gray[400]'),
            '--tw-prose-lead': theme('colors.gray[400]'),
            '--tw-prose-links': theme('colors.blue[400]'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-bullets': theme('colors.gray[600]'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-captions': theme('colors.gray[400]'),
            '--tw-prose-th-borders': theme('colors.gray[400]'),
            '--tw-prose-td-borders': theme('colors.gray[600]'),
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  content: [],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};

/*

// Esto iría justo debajo de darkMode => Podemos buscar la documentación para modificar los estilos de manera nativa y hacer que encajen con nuestro proyecto
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {

          }
        }
      })
    }
  },
  // Seguido de la variante que tomará en cuenta como variable
  variants: {
    extend: {
      typography: ['dark'],
    },
  },

*/
