module.exports = {
    title: 'Web components',
    description: 'Documentation site for the components from my own website',
    themeConfig : {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Docs', link: '/docs/'},
            {text: 'live', link: 'https://www.iamstijn.com/'},
            {text: 'Github', link: 'https://github.com/StijnKlarenbeek/Site'}
        ],
        sidebar : {
            '/docs/': [
                '',
                'Core',
                'Directives',
            ]
        }
    },
    markdown: {
        lineNumbers: true
    }
}
