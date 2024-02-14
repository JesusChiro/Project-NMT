import mongoose from 'mongoose'

const access = 'dchiroque:RlTFIiuOF1MD1Xvo'
const server = 'clusternm.womhmcg.mongodb.net'; // REPLACE WITH YOUR DB SERVER
const database = 'NMT';

export const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${access}@${server}/${database}`);
        console.log('MongoDB connected')
    } catch (err) {
        console.log(err)
    }
}