const path = require('path')

const webpack = require('webpack')

module.exports = {
  entry: [path.join(__dirname, 'index.js'), './src/index.js'],
  output: {
    path: path.join(__dirname, '../server/public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
      test: [/\.jsx?$/, /\.(png|jp(e*)g|svg|gif)$/],
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'images/[hash]-[name].[ext]'
          }
        }
      ],
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
}

// module.exports = {
//   entry: './src/index.js',
//   module: {
//     rules: [
//       //...
//       {
//         test: /\.(png|jp(e*)g|svg|gif)$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: 'images/[hash]-[name].[ext]',
//             },
//           },
//         ],
//       },
//     ],
//   },
//   //...
// };
