class Socket {

    handle(io) {
        let content = {}
        io.on('connection', socket => {
            content.labels = ["January", "February", "March", "April", "May", "June", "July", "February", "March", "April", "May", "June", "February", "March", "April", "May", "June", "February", "March", "April", "May", "June"]
            content.datasets = [
                {
                    label: "Phoenix Trade Ticker",
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                    data: [2, 555, 2, 3, 4, 556, 5553],
                }
            ]

            this._heatBeat(io, socket)
            this._tickerRoom(io, content)
            this._connected(io, content)
            this._orderBookRoom(io, content)
        })
    }

    _heatBeat(io, socket) {
        socket.on('ping', () => {
            io.emit('ping', 'pong')
        })
    }

    _tickerRoom(io, content) {
        io.emit('ticker', content)
    }

    _orderBookRoom(io, content) {
        io.emit('orderBook', content)
    }

    _connected(io, content) {
        io.emit('connected', content)
    }
}


module.exports = Socket