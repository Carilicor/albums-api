import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { createNewAlbum, getNewAlbums } from './src/albums.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/albums', getAllAlbums)
app.post('/albums', createNewAlbums)

export const api = functions.htttps.onRequest(app)


