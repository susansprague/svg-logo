const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/Shape')
const prompt = inquirer.createPromptModule();
 function getInfo(){
   prompt([
        {
            type:'input',
            name:'text',
            message:'enter three letters'
        }, 
        {
            type:'list',
            name:'colorType',
            message:'Select format for color',
            choices:['RGBA', 'name', 'hexCode']

        },
        {
            type:'input',
            name:'hexCode',
            message:'Enter valid hex code'
        }
    ])
    .then(({hexCode, text, colorType}) => {
        prompt({ type: 'list', name: 'shape', message: 'Select shape from list', choices: ['circle', 'square', 'triangle'] })
            .then(async function ({ shape }) {
                console.log(shape)
                switch (shape) {
                    case 'circle':
                        
                        const circle = new Circle(text, colorType, hexCode)
                        const result = circle.render()
                        console.log(result)

                        break;
                    case 'square':
                        const square = new Square()
                        let str2 = square.render()

                        break;
                    case 'triangle':
                        const triangle = new Triangle()
                        let str3 = triangle.render()

                        break;
                    default:
                        break;
                }
            })
    })
}
getInfo()