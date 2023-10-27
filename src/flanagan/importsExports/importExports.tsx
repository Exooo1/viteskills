export {ImportExports}

const ImportExports = () => {
    return <section>
        <h1>ImportExports is here!</h1>
    </section>
}

console.log(DefaultValue, a)
console.log(`${DefaultValue}`)

console.log(math.sayHello('diana'))
console.log(math.sayBye('diana'))

import DefaultValue, {math, a} from './code';

// import DefaultValue, {math, a} from `./code`; it'll be a mistake
// Однако при импорте значений из модулей, как правило, требуется указывать статический путь к модулю,
// который известен на этапе компиляции. Это позволяет среде выполнения (например, браузеру или Node.js)
// определить зависимости модуля и загрузить их до выполнения кода.

// console.log(DefaultValue = 'g') it'll be a mistake!

