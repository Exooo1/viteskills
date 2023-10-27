export const utils = () =>{
    console.log('ONE TIME!')
    return 'Hello this is Utils!'
}

export const math = () =>{
    return 'Double Math!'
}
console.log(utils())

export default "Vlasik the best!"

const testExport = {
    name:'vlas'
}

export {
    testExport as vlas
}
