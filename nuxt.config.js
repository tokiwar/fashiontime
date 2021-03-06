const dev = !process.env.PRODUCTION;
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  target: "server",
  server: {
    port: 38907
  },
  head: {
    title: 'Время красоты',
    htmlAttrs: {
      lang: "ru"
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "48x48",
        href: "/favicon-48x48.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon-96x96.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/android-icon-192x192.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/apple-icon-57x57.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/apple-icon-60x60.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/apple-icon-72x72.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/apple-icon-76x76.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/apple-icon-114x114.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/apple-icon-120x120.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/apple-icon-144x144.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/apple-icon-152x152.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-icon-180x180.png"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/fonts.css',
    '@/assets/css/style.css',
    '@/assets/css/hamburger.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@/plugins/ymapPlugin.js', ssr: false},
    {src: '@/plugins/simple-validator.js', ssr: true},
    {src: '@/plugins/v-mask.js', ssr: true}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv'
  ],

  tailwindcss: {
    config: {
      theme: {
        extend: {
          maxWidth: {
            '1/2': '50%'
          },
          backgroundImage: {
            'main-page': "url('@/assets/img/time-bg.jpg')",
            'main-services': "url('@/assets/img/bg-mustache.jpg')",
            'pattern-salon': "url(@/assets/img/svg/pattern-salon.svg)"
          },
          inset: {
            '1/20': '5%',
            '1/10': '10%',
            '3/10': '15%',
            '1/5': '20%'
          },
          colors: {
            'yellow-orange': '#F4AD76',
            'yellow-dark': '#B88355',
            'header': '#493325',
            'sub-header': '#E5BE8E',
            'sub-header-dark': '#ceab7f',
            'section': '#FFF5E9',
            'section-gray': '#DFE0DF'
          },
          fontFamily: {
            'alice': ['Alice'],
            'ametist': ['Ametist'],
            'izis': ['Izis'],
            'olympia': ['Olympia'],
            'seminaria': ['Seminaria'],
            'kelly': ['Kelly'],
            'impact': ['Impact']
          },
          width: {
            '84': '21rem',
            '88': '22rem',
            '104': '26rem',
            '112': '28rem',
            '120': '30rem',
            '128': '32rem',
            '136': '34rem',
            '144': '36rem',
            '152': '38rem',
            '160': '40rem',
            '168': '42rem',
            '176': '44rem',
            '184': '46rem',
            '192': '48rem',
            'screen-5': '5vw',
            'screen-10': '10vw',
            'screen-15': '15vw',
            'screen-20': '20vw',
            'screen-25': '25vw',
            'screen-30': '30vw',
            'screen-35': '35vw',
            'screen-40': '40vw',
            'screen-45': '45vw',
            'screen-50': '50vw',
            'screen-75': '75vw',
            'screen-80': '80vw',
            'screen-85': '85vw'
          },
          height: {
            '84': '21rem',
            '88': '22rem',
            '104': '26rem',
            '112': '28rem',
            '120': '30rem',
            '128': '32rem',
            '136': '34rem',
            '144': '36rem',
            '152': '38rem',
            '160': '40rem',
            '168': '42rem',
            '176': '44rem',
            '184': '46rem',
            '192': '48rem',
            'screen-5': '5vh',
            'screen-10': '10vh',
            'screen-15': '15vh',
            'screen-20': '20vh',
            'screen-25': '25vh',
            'screen-35': '35vh',
            'screen-30': '30vh',
            'screen-40': '40vh',
            'screen-45': '45vh',
            'screen-50': '50vh',
            'screen-60': '60vh',
            'screen-65': '65vh',
            'screen-70': '70vh',
            'screen-75': '75vh',
            'screen-80': '80vh',
            'screen-85': '85vh'
          },
          fontSize: {
            '10xl': '10rem',
            '11xl': '12rem',
            '12xl': '15rem',
            '13xl': '18rem',
            '14xl': '21rem',
            '15xl': '25rem'
          }
        }
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
    '@nuxtjs/device',
    'nuxt-mq',
    '@nuxtjs/redirect-module',
    ['@nuxtjs/sitemap',
      {
        hostname: 'https://fashiontimekrd.ru/',
        trailingSlash: true,
        exclude: [
          '/vacancies**',
          '/gallery**'
        ]
      }
    ]
  ],
  redirect: [
    {
      from: '^.*(?<!\/)$',
      to: (from, req) => req.url + '/'
    }
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: dev,
    baseURL: 'https://fashiontimekrd.ru/'
  },
  proxy: {
    '/api': {target: 'https://fashiontimekrd.ru', changeOrigin: true}
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  router: {
    scrollBehavior: async function (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      const findEl = async (hash, x = 0) => {
        return (
          document.querySelector(hash) ||
          new Promise(resolve => {
            if (x > 50) {
              return resolve(document.querySelector("#app"));
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1));
            }, 100);
          })
        );
      };

      if (to.hash) {
        const el = await findEl(to.hash);
        if ("scrollBehavior" in document.documentElement.style) {
          return window.scrollTo({top: el.offsetTop - 250, behavior: "smooth"});
        } else {
          return window.scrollTo(0, el.offsetTop);
        }
      }

      return {x: 0, y: 0};
    }
  },
  robots: {
    UserAgent: '*',
    Disallow: [
      '/'
    ],
    Sitemap: 'https://fashiontimekrd.ru/sitemap.xml'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, {isClient}) {
      if (isClient) {
        config.optimization.splitChunks.maxSize = 51200
      }
    }
  }
}
