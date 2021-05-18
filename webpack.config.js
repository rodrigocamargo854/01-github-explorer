//para acessar caminhos em quqluer SO
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
//constante afirma que não esta em ambiente de desenvolvimento
const isDevelopment = process.env.NODE_ENV != 'production';
module.exports = {
    //se validar isDevelopment então se torna development, senao production
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    //habilitar leituras para tipos de extensoes
    resolve: {
        extensions: ['.js', '.jsx', '.ts' , '.tsx'],
    },
    //para ter a randerização em tempo real
    //cada alteração gera um novo bundle rodando
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot:true,
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
    //como a aplicção vai se comportar quando
    //importamos cada tipo de arquivo css, etc
    module: {
        rules: [
            {
                //importo o jsx e converto usando o babel-loader
                test: /\.(j|t)sx$/,
                exclude: /node_modules/,
                use: {
                    loader : 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                } 
            },
            {
                    //importo o jsx e converto usando o babel-loader
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    }
};