import mongoose from 'mongoose'

const connectDb = async () => {
    try { 
        await mongoose.connect(process.env.ATLAS_URI)
        console.log('Mongoose connected')
    } catch(e) {
        console.log(e)
    }
}

export default connectDb 