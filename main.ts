function Fibonacci () {
    list = [0, 1]
    serial.writeValue("length", list.length)
    serial.writeValue("at pos" + index, list[index])
    index += 1
    serial.writeValue("at pos" + index, list[index])
    index += 1
    for (let index2 = 0; index2 < 100; index2++) {
        list.push(list[index - 1] + list[index - 2])
        serial.writeValue("at pos" + index, list[index])
        index += 1
        basic.pause(100)
    }
}
let index = 0
let list: number[] = []
list = []
serial.writeValue("length", list.length)
for (let index2 = 0; index2 < 10; index2++) {
    list.push(randint(0, 20))
    serial.writeValue("adding at pos" + index, list[index])
    index += 1
    basic.pause(100)
}
serial.writeValue("length", list.length)
for (let index2 = 0; index2 < 10; index2++) {
    index += -1
    serial.writeValue("removing at pos" + index, list.removeAt(index))
    basic.pause(100)
}
serial.writeValue("length", list.length)
