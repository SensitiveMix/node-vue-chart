const express = require('express')
const webpack = require('webpack')
const http = require('http')
const path = require('path')
const config = require('./../../webpack.config.js')
const app = express()
const server = http.Server(app)
const compiler = webpack(config)
const io = require('socket.io').listen(server)
const Socket = require('./lib/Socket')

app.use(require('webpack-dev-middleware')(compiler, {
    hot: true,
    noInfo: true,
    publicPath: config.output.publicPath
}))
app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
}))

new Socket().handle(io)


app.use('/', express.static(path.join('./dist')))

server.listen(8080, () => console.log('Server running on port ' + server.address().port))