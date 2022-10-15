const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()
const port = 5000

const round1 = 'round1'
const round2 = 'round2'
const round3 = 'round3'
const round4 = 'round4'
const round5 = 'round5'


const updateFile = async (filename, id) => {
    try {
        const data = fs.readFileSync(`./questions/${filename}.json`, "utf8")
        let jsonData = JSON.parse(data)
        let found = jsonData.findIndex((question) => parseInt(question.id) === parseInt(id))
        jsonData[found].enable = false
        fs.writeFileSync(`./questions/${filename}.json`, JSON.stringify(jsonData, undefined, 2))
        return true
    } catch {
        return false
    }
}

const getFileData = async (filename) => {
   const data = fs.readFileSync(`./questions/${filename}.json`, "utf8")
   return JSON.parse(data)
}

app.use(cors())
app.get(`/${round1}`, async (req, res) => {
    const data = await getFileData(round1)
    res.send(data)
})

app.get(`/${round2}`, async (req, res) => {
    const data = await getFileData(round2)
    res.send(data)
})

app.get(`/${round3}`, async (req, res) => {
    const data = await getFileData(round3)
    res.send(data)
})

app.get(`/${round4}`, async (req, res) => {
    const data = await getFileData(round4)
    res.send(data)
})

app.get(`/${round5}`, async (req, res) => {
    const data = await getFileData(round5)
    res.send(data)
})

app.put(`/${round1}/:id`, async (req, res) => {
    const result = await updateFile(round1, req.params.id)
    res.send(result)
})

app.put(`/${round2}/:id`, async (req, res) => {
    const result = await updateFile(round2, req.params.id)
    res.send(result)
})

app.put(`/${round3}/:id`, async (req, res) => {
    const result = await updateFile(round3, req.params.id)
    res.send(result)
})

app.put(`/${round4}/:id`, async (req, res) => {
    const result = await updateFile(round4, req.params.id)
    res.send(result)
})

app.put(`/${round5}/:id`, async (req, res) => {
    const result = await updateFile(round5, req.params.id)
    res.send(result)
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})