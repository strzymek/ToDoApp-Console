const colors = require('colors')
const fs = require('fs')

const handleData = (type, title) => {
    const data = fs.readFileSync('datadb.json')
    let tasks = JSON.parse(data)

    if(type === 1 || type === 2) {
        isExisted = tasks.find(task => task.title === title) ? true : false
        if(type === 1 && isExisted) {
            return console.log("Takie zadanie już istnieje!".red)
            process.exit()
        } else if (type === 2 && !isExisted) {
            return console.log("Nie można usunąć zadania, które nie istnieje!".red)
            process.exit()
        }
    }

    let dataJSON = ""
    switch (type) {
        case 1:
            tasks.map((task, index) => ({id: index + 1, title: task.title}))
            const id = tasks.length + 1
            tasks.push({id, title})
            dataJSON = JSON.stringify(tasks)
            fs.writeFileSync('datadb.json', dataJSON)
            console.log(`Pomyślnie dodano zadanie: ${title}`.black.bgWhite)
            break
        case 2:
            console.log(tasks)
            const index = tasks.findIndex(task => task.title === title)
            tasks.splice(index, 1)
            console.log(tasks)
            tasks.map((task, index) => ({id: index + 1, title: task.title}))
            console.log(tasks)
            dataJSON = JSON.stringify(tasks)
            fs.writeFile('datadb.json', dataJSON, 'utf8', (err) => {
                if(err) throw err
                console.log(`Zadanie ${title} zostało usunięte!`.black.bgWhite)
            })
            break
        case 3:
            console.log(`Lista zadań do zrobienia obejmuje ${tasks.length} pozycji. Do zrobienia masz: `)
            if(tasks.length) {
                tasks.forEach((task, index) => {
                    if(index % 2) return console.log(task.title.green)
                    return console.log(task.title.blue)
                })
            }
            break
    }
}

module.exports = handleData