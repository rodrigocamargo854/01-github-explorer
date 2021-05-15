//para acessar caminhos em quqluer SO
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//constante afirma que não esta em ambiente de desenvolvimento
const isDevelopment = process.env.NODE_ENV != 'production';

module.exports = {
    //se validar isDevelopment então se torna development, senao production
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    //habilitar leituras para tipos de extensoes
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    //para ter a randerização em tempo real
    //cada alteração gera um novo bundle rodando
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],

    //como a aplicção vai se comportar quando
    //importamos cada tipo de arquivo css, etc
    module: {
        rules: [
            {
                //importo o jsx e converto usando o babel-loader
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
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