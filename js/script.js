console.log('Conexión Existosa')

function confirmarEjercicio() {
    let respuesta = prompt('¿Desean ejecutar el ejercicio? SI/NO').toUpperCase()

    if (respuesta === 'SI') {
        console.log('Resolviendo ejercicio seleccionado')
    } else {
        console.log('Ejercicio no se ejecuto')
    }
}

let nombre = prompt('Cual es tu nombre')

let ejercicioUno = 0
let ejercicioDos = 0
let ejercicioTres = 0
let ejercicioCuatro = 0
let ejercicioQuinto = 0
let ejercicioSexto = 0
let ejercicioSeptimo = 0

let repetir = true
while (repetir) {


    let opcion = Number(prompt(
        "¡Bienvenido " + nombre + "!😄😄 \n" +
        "Seleccione un ejercicio\n" +
        "1. Contador de Números Pares e Impares\n" +
        "2. Calculadora de Factorial\n" +
        "3. Validación de Contraseña\n" +
        "4. Generador de Tablas de Multiplicar\n" +
        "5. Adivinar el Número\n" +
        "6. Contador de Digitos\n" +
        "7. Suma de Números Primos\n" +
        "8. Secuencia de Fibonacci\n" +
        "9. Verificador de Palíndromos\n" +
        "10. Convertidos de Temperatura\n" +
        "11. Contador de Vocales y Consonante\n" +
        "12. Calculadora de Potencia\n" +
        "13. Juego de Piedra, Papel o Tijeras\n" +
        "14. Cerrar o Finalizar"
    ))

    switch (opcion) {
        case 1:
            confirmarEjercicio()

            alert('Contador de Números Pares e Impares: Diseña un programa que solicite al usuario un número y luego muestre la cantidad de números pares e impares dentro del rango desde 1 hasta ese número.')

            var numerosParesImpares = Number(prompt('Ingrese un número N'))

            if (isNaN(numerosParesImpares)) { // Verificar si el valor ingresado es número válido
                console.log('Ingrese un número válido.!')
            } else {
                console.log()
            }

            for (let i = 0; i <= numerosParesImpares; i += 2) {
                console.log('Número par: ' + i)
            }

            for (let i = 0; i <= numerosParesImpares; i += 3) {
                console.log('Número impar: ' + i)
            }
            ejercicioUno++
            break;

        case 2:
            confirmarEjercicio()

            alert('Calculadora de Factorial: Crea un programa que calcule el factorial de un número ingresado por el usuario utilizando un ciclo.')

            var numeroFactorial = Number(prompt('Ingrese un número para calcular el factorial'))

            if (isNaN(numeroFactorial)) { // Verificar si el valor ingresado es número válido
                console.log('Ingrese un número válido.!')
            } else {
                console.log()
            }

            let factorial = 1;

            for (let i = 1; i <= numeroFactorial; i++) {
                factorial *= i;
            }

            console.log('Factorial: ' + factorial)
            ejercicioDos++
            break;

        case 3:
            confirmarEjercicio()

            alert('Validación de Contraseña: Escribe un programa que pida al usuario que ingrese una contraseña. Si la contraseña es "secreto123", muestra un mensaje de acceso concedido; de lo contrario, muestra un mensaje de acceso denegado.')

            const usuarioValido = nombre
            const contrasenaValida = "secreto123"
            let intentosUsuario = 5

            while (intentosUsuario > 0) {
                const usuarioIngresado = prompt('Ingresa tu usuario\nColocar el campo de texto la palabra ' + nombre)
                const contrasenaIngresada = prompt('Ingresa tu contraseña')

                if (usuarioIngresado === usuarioValido && contrasenaIngresada === contrasenaValida) {
                    console.log('👏🏻 Inicio de sesión exitoso. ¡Bienvenido! ' + usuarioIngresado + ' 👏🏻')
                    console.log('Acceso concedido✅')
                    break;
                } else {
                    intentosUsuario--
                    if (intentosUsuario > 0) {
                        console.log('Datos incorretos. Te quedan ' + intentosUsuario)
                        console.log('Acceso denegado❌')
                    } else {
                        console.log('Has excedido el número máximo de intentos. Cuenta bloqueda.❌')
                        console.log('Acceso denegado❌')
                    }
                }
            }
            ejercicioTres++
            break;

        case 4:
            confirmarEjercicio()

            alert('Generador de Tablas de Multiplicar: Desarrolla un programa que solicite al usuario un número y luego muestre la tabla de multiplicar correspondiente a ese número.')

            let numero = Number(prompt('Ingrese un número para multiplicar'))
            for (let index = 1; index <= 10; index++) {
                console.log(numero + ' ✖ ' + index + ' = ' + (index * numero))
            }
            ejercicioCuatro++
            break;

        case 5:
            confirmarEjercicio()

            alert('Adivinar el Número: Crea un juego en el que el programa genere un número aleatorio entre 1 y 100, y el usuario debe adivinarlo. El programa debe dar pistas como "demasiado alto" o "demasiado bajo". Para ayudar al usuario a adivinar el número. El juego continúa hasta que el usuario adivine correctamente')

            const numeroALeatorio = Math.floor(Math.random() * 100) + 1
            // console.log(numeroALeatorio)

            let intentos = 0
            let adivinaNumero

            do {
                adivinaNumero = Number(prompt('Adivina el número entre 1 y 100'))
                // console.log("Número ingresado: " + adivinaNumero)

                if (isNaN(adivinaNumero)) { // Verificar si el valor ingresado es número válido
                    console.log('Ingrese un número válido.!')
                } else {
                    intentos++

                    if (adivinaNumero < numeroALeatorio) {
                        console.log('Demaciado bajo. Intenta nuevamente.')
                    } else if (adivinaNumero > numeroALeatorio) {
                        console.log('Demaciado alto. Intenta nuevamente.')
                    } else {
                        console.log('¡Felicitaciones!👏🏻 Adivinaste el número ' + numeroALeatorio + ' en ' + intentos + ' intentos.')
                    }
                }
            } while (adivinaNumero !== numeroALeatorio)
            ejercicioQuinto++
            break;

        case 6:
            confirmarEjercicio()

            alert('Contador de Dígitos: Escribe un programa que cuente y muestre la cantidad de dígitos en un número ingresado por el usuario.')

            const numeroCadena = prompt('Ingrese un número')

            if (!isNaN(numeroCadena) && numeroCadena !== null) {
                const numeroComoCadena = numeroCadena.toString()

                const cantidadDigitos = numeroComoCadena.length

                console.log('El número ' + new Intl.NumberFormat('es-ES').format(numeroCadena) + ' tiene ' + cantidadDigitos + ' digitos')
            } else {
                console.log('Ingrese un número válido')
            }
            ejercicioSexto++
            break;

        case 7:
            confirmarEjercicio()

            alert('Suma de Números Primos: Diseña un programa que calcule la suma de los primeros N números primos, donde N es ingresado por el usuario.')

            const numeroN = Number(prompt('Ingrese un número para calcular la suma de los primeros números primos'))

            if (!isNaN(numeroN) && numeroN > 0) {
                let suma = 0
                let contador = 0
                let numeroActual = 2

                while (contador < numeroN) {
                    let numeroPrimo = true
                    for (let i = 2; i <= Math.sqrt(numeroActual); i++) {
                        if (numeroActual % i === 0) {
                            numeroPrimo = false
                            break;
                        }
                    }

                    if (numeroPrimo) {
                        suma += numeroActual
                        contador++
                    }
                    numeroActual++
                }
                console.log('La suma de los primeros ' + numeroN + ' números primos es: ' +  new Intl.NumberFormat('es-ES').format(suma))
 
            } else {
                console.log('Ingrese un valor válido para N')
            }
            ejercicioSeptimo++
            break;

        case 8:
            break;

        case 9:
            break;

        case 10:
            break;

        default:
            repetir = false
            console.log('Saliendo aplicación')
            break;
    }
}

console.log('Cantidad Ejecución Ejercicio 1: ' + ejercicioUno)
console.log('Cantidad Ejecución Ejercicio 2: ' + ejercicioDos)
console.log('Cantidad Ejecución Ejercicio 3: ' + ejercicioTres)
console.log('Cantidad Ejecución Ejercicio 4: ' + ejercicioCuatro)
console.log('Cantidad Ejecución Ejercicio 5: ' + ejercicioQuinto)
console.log('Cantidad Ejecución Ejercicio 6: ' + ejercicioSexto)
console.log('Cantidad Ejecución Ejercicio 7: ' + ejercicioSeptimo)