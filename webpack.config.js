var path = require('path');

module.exports = {
    entry: './src/main/js/app.js',
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: './built/bundle.js'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            },
                        {
                            test: /\.css$/,
                            loader: "style-loader!css-loader"
                        },
        ]
    },
    resolve: {
              alias: {
                      "ag-grid-community": path.resolve('./node_modules/ag-grid-community')
                  }
          }
};