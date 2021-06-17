const handleData = require('./handleData')
const handleCommand = ({add, remove, list}) => {
    if(add) {
        if(typeof add !== "string") {
            return console.log("Podałeś nieprawidłowy typ! Podaj tekst!".red)
            process.exit()
        } else if (add.length < 7) {
            return console.log("Tytuł zadania musi być dłuższy niż 6 znaków!".red)
            process.exit()
        }
        handleData(1, add)
    } else if(remove) {
        if(typeof remove !== "string" || remove.length < 7){
            console.log("Wpisz nazwę usuwanego zadania! Musi to być tekst i musi być dłuższy niż 6 znaków!".red)
        }
        handleData(2, remove)
    } else if(list || list === ""){
        handleData(3, null)
    } else {
        console.log("Nie rozumiem polecenia!".red)
    }
}

module.exports = handleCommand