module.exports = {
  siteMetadata: {
    title: `Enpu You`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `pacifico:400`,
          `Rubik:100,400,600,700`,
          `raleway:100,400,600,700`,
          `lato: 300,400,500`,
          `Montserrat: 300,400,500`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 925,
              // Remove the default behavior of adding a link to each
              // image.
              linkImagesToOriginal: true,
              // Analyze images' pixel density to make decisions about
              // target image size. This is what GitHub is doing when
              // embedding images in tickets. This is a useful setting
              // for documentation pages with a lot of screenshots.
              // It can have unintended side effects on high pixel
              // density artworks.
              //
              // Example: A screenshot made on a retina screen with a
              // resolution of 144 (e.g. Macbook) and a width of 100px,
              // will be rendered at 50px.
              //
              // Defaults to false.
              sizeByPixelDensity: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-187004616-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KBMCLN8",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Enpu You Portfolio",
        short_name: "Enpu You",
        start_url: "/",
        background_color: "#292929",
        theme_color: "#405375",
        display: "minimal-ui",
        icon: `static/apple-touch-icon.png`
      }
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://23d8e0b792d442d29d0b4344a79ef87d@sentry.io/170806"
      }
    }
  ]
};
