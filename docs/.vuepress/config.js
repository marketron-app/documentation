module.exports = {
  base: "/documentation",
    themeConfig: {
      sidebar: [
        '/',
        {
            title: "Getting started",
            children: [
              'getting-started/docker',
              'getting-started/env',
            ]
        }
      ],
      displayAllHeaders: true
    }
  }