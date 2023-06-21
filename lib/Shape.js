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
        return `<circle cx="150" cy="100" r="80" fill="${this.hexCode}" />
`
    }
}
class Square extends Shape {
    constructor(text, hexCode, colorType) {
        super(text, hexCode, colorType)
    }
    render() {
        return 'square ' + this.text
    }
}
class Triangle extends Shape {
constructor(text, hexCode, colorType){
    super(text, hexCode, colorType)
}
    render() {
        return 'triangle ' + this.text
    }
}
module.exports = {Circle, Square, Triangle}