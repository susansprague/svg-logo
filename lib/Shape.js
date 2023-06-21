class Shape {
    constructor(text, colorType){
        this.text = text
        this.colorType = colorType
    }
}
class Circle extends Shape{
    constructor(text, colorType, hexCode){
        super(text, colorType)
        this.hexCode = hexCode
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.hexCode}" />`
    }
}
class Square extends Shape {
    constructor(text, hexCode, colorType) {
        super(text, hexCode, colorType)
    }
    render() {
        return ` <rect width="100" height="100" fill="${this.hexCode}"/>`
    }
}
class Triangle extends Shape {
constructor(text, hexCode, colorType){
    super(text, hexCode, colorType)
}
    render() {
        return `<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" fill="${this.hexCode}"/>`
    }
}
module.exports = {Circle, Square, Triangle}