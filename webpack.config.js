module.exports = {
  module: {
    loaders: [
      { exclude: ['node_modules'], loader: 'babel', test: /\.[jt]sx?$/},
      { loader: 'style-loader!css-loader', test: /\.css$/},
      { loader: 'url-loader', test: /\.gif$/},
      { loader: 'file-loader', test: /\.(ttf|eot|svg)$/}
    ],
    resolve: {
      extensions: ['', 'js', 'jsx'],
      modules: [
        'node_modules'
      ]
    }
  }
}
