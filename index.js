const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

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

app.get('/maths', async (req, res) => {
    const data = await getFileData('maths')
    res.send(data)
})

app.put('/maths/:id', async (req, res) => {
    const result = await updateFile('maths', req.params.id)
    res.send(result)
})

app.get('/computers', async (req, res) => {
    const data = await getFileData('computers')
    res.send(data)
})

app.put('/computers/:id', async (req, res) => {
    const result = await updateFile('computers', req.params.id)
    res.send(result)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})