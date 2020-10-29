const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://wiki.anno.wiki',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logoLink: 'https://wiki.anno.wiki',
    title: "Bogus title, keeping for now",
    githubUrl: 'https://github.com/anno-wiki/icc2-wiki',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="/" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: 'anno.wiki', link: 'https://anno.wiki' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/textus',
      '/bibjson',
      '/repos',
      '/development',
      '/formatter',
      '/library',
      '/insert'
    ],
    collapsedNav: [
      '/textus', // add trailing slash if enabled above
      '/formatter',
    ],
    links: [
      { text: 'Textus', link: 'http://okfnlabs.org/textus/' },
      { text: 'BibJSON', link: 'https://okfnlabs.org/bibjson/' }
    ],
    frontline: false,
    ignoreIndex: true,
    title:
    "<a href='https://github.com/Anno-Wiki'>ICC2 </a><div class='greenCircle'></div><a href='#'>documentation </a>",
  },
  siteMetadata: {
    title: 'Intertextual Canon Cloud 2 Documentation',
    description: 'Documentation for the Intertextual Canon Cloud 2',
    ogImage: null,
    docsLocation: 'https://github.com/Anno-Wiki/icc2-wiki/tree/master/content',
    favicon: require.resolve('./src/components/images/logo.svg')
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
