const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // para minificar os arquivos js
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin') //  para minificar os arquivos CSS

module.exports = {
  mode: modoDev ? 'development' : 'production',
  entry: './src/index.js', // ponto de entrada da aplicacao
  output: { // ponto de saida da aplicacao
    filename: 'index.js',
    path: __dirname + '/public' // o build sera "jogado" nessa pasta
  },
  devServer: {
    contentBase: "./public",
    port: 9000,
    open: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: __dirname + '/node_modules',
      '@': __dirname + '/src',
      '@assets': __dirname + '/src/assets',
      '@components': __dirname + '/src/components',
      '@lib': __dirname + '/src/lib',
      '@redux': __dirname + '/src/redux',
      '@styles': __dirname + '/src/styles',
      '@views': __dirname + '/src/views'
    }
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'   
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),    
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader, // Adiciona CSS a DOM injetando a tag <style>
          'css-loader', // interpreta @import, url()...
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'] // para incluir o @material
            }
          },
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot|png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /.js[x]?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['transform-object-rest-spread', 'transform-class-properties']
          }
        }
      }
    ]
  }
}