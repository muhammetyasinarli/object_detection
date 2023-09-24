import {randomBytes} from 'crypto'
import MJpegDecoder from 'mjpeg-decoder'
import fs from'fs'
import axios from 'axios'

const post = async (instance:any)=>{
    const {data} = await axios.post('${process.env.SERVER_TF}/v1/models/default:predict',{instance},{maxContentLength:Infinity,
    maxBodyLength:Infinity})

    return data
}

const getDetectedObjects = async (room:any) =>{

    const salt = randomBytes(4).toString('hex')
    const path = './assets/screenshots/screenshot_${room.id}_${salt}.jpg'

    console.log('Picking room id : ${room.id} with url:${room.url}')

    const decoder = new MJpegDecoder(room.url,{maxFrames:1})

    const frame = await decoder.takeSnapshot()

    fs.writeFileSync(path, frame)

    fs.unlinkSync(path)
}