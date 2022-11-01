import dbConnect from './dbConnect.js'

export function getAllAlbums(req, res) {
    const db = dbConnect()
    db.collection('albums').get()
    .then(collection => {
        const albumsArr = collection.docs.map(doc => {
            return {...doc.data(), albumId: doc.id}
        })
        res.send(albumsArr)
    })
    .catch(err => res.status(500).send({success: false, message: err}))
    }
//     .then(collection => {
//         const albumsArr = collection.docs.map(doc => {
//             let album = doc.data()
//             album.albumId = doc.is
//             return album
//         })
//     })
//     .catch(err => res.status(500).send({success: false, message: err}))
// } = longer version of uptop

export function createNewAlbum(req, res) {
    const db = dbConnect()
    db.collection('albums').add(req.body)
    .the(doc => res.status(201)).send({success: true, message: 'Album created:' + doc.id})
    .catch(err => res.status(500).send({success: false, message: err}))
}