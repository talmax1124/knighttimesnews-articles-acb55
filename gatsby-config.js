const path = require('path');

module.exports = {
    siteMetadata: {
        title: `Knight Times News Articles`,
        name: `Knight Times News`,
        siteUrl: `https://gatsby-theme-novela.netlify.com`,
        description: `This is my description that will be used in the meta tags and important for search results`,

        // important to set the main text that appears in the hero
        hero: {
            heading: `Perspectives on technology, design and business from the team at Narative.`,
            maxWidth: 652,
        },
        social: [
            {
                name: `twitter`,
                url: `https://twitter.com/knighttimesnews`,
            },
            {
                name: `github`,
                url: `https://github.com/knighttimesnews`,
            },
        ],
    },
    plugins: [
        {
            resolve: "@narative/gatsby-theme-novela",
            options: {
                contentPosts: "content/posts",
                contentAuthors: "content/authors",
                rootPath: "/",
                basePath: "/",
                authorsPage: true,
                mailchimp: true,
                sources: {
                    local: true,
                    contentful: false,
                },
            },
        }
    ],
};
