module.exports = {
  reactStrictMode: true,

  // Enable the Next SWC Minifier
  // https://bit.ly/3rBraQE
  swcMinify: true,

  compiler: {
    // Enable styled-components
    // ssr and displayName are configured by default
    styledComponents: true,
  },

  transpilePackages: [
    '@shallot-ui/next',
    '@shallot-ui/prismjs',
    '@shallot-ui/react-select',
  ],
}
