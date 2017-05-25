module.exports = {
    entry: './jsx/app.jsx',
    output: {
        filename: './js/app.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: [
                    'style-loader',
                    'css-loader'
                    ]
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                    ]
            }
        ]
    }
}