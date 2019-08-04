module.exports = {
    presets: ['@babel/preset-env'],
    plugins: [
        [
            '@babel/plugin-transform-runtime',
            {
                helpers: true,
                corejs: 2
            }
        ],
        '@babel/plugin-syntax-dynamic-import'
    ]
}
