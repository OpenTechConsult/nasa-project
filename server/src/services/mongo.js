const mongoose = require('mongoose')

const MONGO_URL = 'mongodb+srv://nasa-api:HctuYH5hHHxq9bsa@nasacluster.6ebmx1z.mongodb.net/nasa?retryWrites=true&w=majority'

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!')
})

mongoose.connection.on('error', (err) => {
    console.error()
})

async function mongoConnect() {
    await mongoose.disconnect()
    await mongoose.connect(MONGO_URL)
}

async function mongoDisconnect() {
    await mongoose.disconnect()
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}
