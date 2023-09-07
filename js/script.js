console.log('Conexión Existosa')

//Función para confirmar el ejercicio
function confirmarEjercicio() {
    let respuesta = prompt('¿Desean ejecutar el ejercicio? SI/NO').toUpperCase()

    switch (respuesta) {
        case "SI":
            console.log('Resolviendo ejercicio ' + opcion)
            break;

        case "NO":
            console.log('Ejercicio no se ejecuto')
            break;

        default:
            console.log("Opción no válida. Intente nuevamente.");
            break;
    }

    // if (respuesta === 'SI') {
    //     console.log('Resolviendo ejercicio seleccionado')
    // } else {
    //     console.log('Ejercicio no se ejecuto')
    // }
}

//Ejercicio 9. Verificador de Palíndromos
function Palindromo(palabra) {
    const longitud = palabra.length
    for (let i = 0; i < longitud / 2; i++) {
        if (palabra[i] !== palabra[longitud - 1 - i]) {
            return false
        }
    }
    return true
}

//11. Contador de Vocales y Consonante
//Función para contar las vocales en una cadena
function contarVocales(cadena) {
    const vocales = "aeiouAEIOU"
    let contador = 0

    for (let i = 0; i < cadena.length; i++) {
        if (vocales.indexOf(cadena[i]) !== -1) { //El método indexOf() devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde indiceDesde; o -1 si no se encuentra dicho valor.
            contador++
        }
    }
    return contador
}

//Función para contar las consonantes en una cadena
function contarConsonantes(cadena) {
    const consonantes = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
    let contador = 0

    for (let i = 0; i < cadena.length; i++) {
        if (consonantes.indexOf(cadena[i]) !== -1) {
            contador++
        }
    }
    return contador
}

//13. Juego de Piedra, Papel o Tijeras
//Función para elejir pieda, papel o tijeras
function eleccion() {
    const opciones = ["piedra", "papel", "tijeras"]
    const indiceAleatorio = Math.floor(Math.random() * 3)
    return opciones[indiceAleatorio]
}

//Funcion para saber el ganador del juego
function ganador(eleccionUsuario, eleccionComputadora) {
    if (eleccionUsuario === eleccionComputadora) {
        return "Empate"
    } else if (
        (eleccionUsuario === "piedra" && eleccionComputadora === "tijeras") ||
        (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
        (eleccionUsuario === "tijeras" && eleccionComputadora === "papel")) {

        return "Usuario"
    } else {
        return "Computadora"
    }
}

//Nombre del usuario
let nombre = prompt('Cual es tu nombre')

//Contador de Ejercicios
let ejercicioUno = 0
let ejercicioDos = 0
let ejercicioTres = 0
let ejercicioCuatro = 0
let ejercicioQuinto = 0
let ejercicioSexto = 0
let ejercicioSeptimo = 0
let ejercicioOctavo = 0
let ejercicioNoveno = 0
let ejercicioDiez = 0
let ejercicioOnce = 0
let ejercicioDoce = 0
let ejercicioTrece = 0
let ejercicioSorpresa = 0

//Contador
let repetir = true
while (repetir) {

    var opcion = Number(prompt(
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
        "14. Ejercicio Sorpresa\n" +
        "15. Cerrar o Finalizar"
    ))

    switch (opcion) {
        case 1:
            confirmarEjercicio()

            alert('Contador de Números Pares e Impares: Diseña un programa que solicite al usuario un número y luego muestre la cantidad de números pares e impares dentro del rango desde 1 hasta ese número.')

            var numerosParesImpares = Number(prompt('Ingrese un número N'))

            if (isNaN(numerosParesImpares)) { //Verificar si el valor ingresado es número válido
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
                console.log('La suma de los primeros ' + numeroN + ' números primos es: ' + new Intl.NumberFormat('es-ES').format(suma))

            } else {
                console.log('Ingrese un valor válido para N')
            }
            ejercicioSeptimo++
            break;

        case 8:
            confirmarEjercicio()

            alert('Secuencia de Fibonacci: Crea un programa que genere la secuencia de Fibonacci hasta un término dado por el usuario.')

            var numeroFibonacci = Number(prompt('Ingrese un número'))

            if (isNaN(numeroFibonacci) || numeroFibonacci <= 0) {
                console.log('Ingrese un número válido y mayor que 0.')
            } else {
                let fibonacci = [0, 1]

                for (let f = 2; f < numeroFibonacci; f++) {
                    const calculoFibonacci = fibonacci[f - 1] + fibonacci[f - 2]
                    fibonacci.push(calculoFibonacci) // El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
                }

                console.log('Los primeros ' + numeroFibonacci + ' numero de la secuencia de Fibonacci son:')
                console.log(fibonacci.join(', ')) //El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
            }
            ejercicioOctavo++
            break;

        case 9:
            confirmarEjercicio()

            alert('Verificador de Palíndromos: Desarrolla un programa que determine si una palabra ingresada por el usuario es un palíndromo')

            const palabra = prompt('Ingrese una palabra').toLowerCase()// El método toLowerCase() devuelve el valor en minúsculas de la cadena que realiza la llamada.

            if (Palindromo(palabra)) {
                console.log(palabra + ' es un palíndromo')
            } else {
                console.log(palabra + ' no es un palíndromo')
            }
            ejercicioNoveno++
            break;

        case 10:
            confirmarEjercicio()

            alert('Convertidor de Temperatura: Escribe un programa que convierta temperaturas entre grados Celsius y Fahrenheit, permitiendo al usuario elegir la dirección de la conversión (de Celsius a Fahrenheit o de Fahrenheit a Celsius).')

            const convTemperatura = prompt('¿Desea convertir de Celsius a Fahrenheit (C a F) o de Fahrenheit a Celsius (F a C)?').toUpperCase()

            if (convTemperatura === "C A F") { //Conversión de Celsius a Fahrenheit
                const celsius = prompt('Ingrese la temperatura en grados Celsius')
                if (!isNaN(celsius)) {
                    const fahrenheit = (celsius * 9 / 5) + 32
                    console.log(celsius + '° Celcius son equivalente a ' + fahrenheit + '° Fahrenheit')
                } else {
                    console.log('Ingrese una temperatura válida')
                }
            } else if (convTemperatura === "F A C") {
                const fahrenheit = prompt('Ingrese la temperatura en grados Fahrenheit')
                if (!isNaN(fahrenheit)) {
                    const celsius = (fahrenheit - 32) * 5 / 9
                    console.log(fahrenheit + '° Fahrenheit son equivalentes a ' + celsius + '° Celcius')
                } else {
                    console.log('Ingrese una temperatura válida')
                }
            } else {
                console.log('Conversión no válida. Por favor, ingrese C A F o F A C')
            }
            ejercicioDiez++
            break;

        case 11:
            confirmarEjercicio()

            alert('Contador de Vocales y Consonantes: Crea un programa que cuente la cantidad de vocales y consonantes en una frase ingresada por el usuario.')

            const frase = prompt('Ingrese una frase')
            const cantidadVocales = contarVocales(frase)
            const cantidadConsonantes = contarConsonantes(frase)

            console.log('La frase ' + frase + ' tiene ' + cantidadVocales + ' vocales y ' + cantidadConsonantes + ' consonantes')

            ejercicioOnce++
            break;

        case 12:
            confirmarEjercicio()

            alert('Calculadora de Potencia: Desarrolla un programa que calcule el resultado de elevar un número a una potencia dada por el usuario.')

            const base = Number(prompt('Ingrese un número para calcular la potencia'))
            const potencia = Number(prompt('Ingrese la potencia a la que desea elevar el número'))

            const resultado = Math.pow(base, potencia)
            console.log(base + ' elevado a la potencia ' + potencia + ' es igual a ' + new Intl.NumberFormat('es-ES').format(resultado))

            ejercicioDoce++
            break;

        case 13:
            confirmarEjercicio()

            alert('Juego de Piedra, Papel o Tijeras: Crea un juego en el que el usuario juegue contra la computadora eligiendo entre piedra, papel o tijeras, y el programa determine al ganador según las reglas del juego.')

            const eleccionUsuario = prompt('Elija entre piedra, papel o tijeras').toLowerCase()
            console.log('El usuario elegio: ' + eleccionUsuario)

            if (eleccionUsuario === "piedra" || eleccionUsuario === "papel" || eleccionUsuario === "tijeras") {
                const eleccionMaq = eleccion()
                console.log('La computador elegio: ' + eleccionMaq)

                const resultado = ganador(eleccionUsuario, eleccionMaq)
                console.log('El ganador es: ' + resultado)
            } else {
                console.log('Elección no válida. Por favor, elija entre piedra, papel o tijeras.')
            }

            ejercicioTrece++
            break;

        case 14:
            confirmarEjercicio()

            alert('Conversión de Números Romanos: Desarrolla un programa que convierta un número romano (por ejemplo, "XIV")ingresado por el usuario en su equivalente numérico. Los números romanos se forman utilizando las letras I, V, X, L, C, D y M, y siguen ciertas reglas de combinación.')

            const valoresRomanos = {
                'I': 1,
                'V': 5,
                'X': 10,
                'L': 50,
                'C': 100,
                'D': 500,
                'M': 1000
            }

            var numeroRomano = prompt('Ingrese un número romano\n Letras\n I - V - X - L - C - D - M').toUpperCase()
            //  

            let resultadoR = 0
            let valor = 0

            for (let r = numeroRomano.length - 1; r >= 0; r--) {
                const valorActual = valoresRomanos[numeroRomano[r]]

                if (valorActual >= valor) {
                    resultadoR += valorActual
                } else {
                    resultadoR -= valorActual
                }

                valor = valorActual
            }

            console.log('El numero romano ' + numeroRomano + ' es equivalente a ' + resultadoR + ' en números arábigo')
            ejercicioSorpresa++
            break;

        case 15:
            repetir = false
            console.log('Saliendo aplicación')
            break;

        default:
            console.log('Opción invalida, intenta nuevamente')
            break;
    }
}

//Cantidad de ejecuciones de cada ejercicio
console.log('Cantidad Ejecución Ejercicio 1: ' + ejercicioUno)
console.log('Cantidad Ejecución Ejercicio 2: ' + ejercicioDos)
console.log('Cantidad Ejecución Ejercicio 3: ' + ejercicioTres)
console.log('Cantidad Ejecución Ejercicio 4: ' + ejercicioCuatro)
console.log('Cantidad Ejecución Ejercicio 5: ' + ejercicioQuinto)
console.log('Cantidad Ejecución Ejercicio 6: ' + ejercicioSexto)
console.log('Cantidad Ejecución Ejercicio 7: ' + ejercicioSeptimo)
console.log('Cantidad Ejecución Ejercicio 8: ' + ejercicioOctavo)
console.log('Cantidad Ejecución Ejercicio 9: ' + ejercicioNoveno)
console.log('Cantidad Ejecución Ejercicio 10: ' + ejercicioDiez)
console.log('Cantidad Ejecución Ejercicio 11: ' + ejercicioOnce)
console.log('Cantidad Ejecución Ejercicio 12: ' + ejercicioDoce)
console.log('Cantidad Ejecución Ejercicio 13: ' + ejercicioTrece)
console.log('Cantidad Ejecución Ejercicio 14: ' + ejercicioSorpresa)

let resultados = ejercicioUno + ejercicioDos + ejercicioTres + ejercicioCuatro + ejercicioQuinto + ejercicioSexto + ejercicioSeptimo + ejercicioOctavo + ejercicioNoveno + ejercicioDiez + ejercicioOnce + ejercicioDoce + ejercicioTrece + ejercicioSorpresa

console.log('Total de Ejecuciones: ' + resultados)

//Ejercicio mas seleccionado
let mayor

if (ejercicioUno > ejercicioDos && ejercicioUno > ejercicioTres && ejercicioUno > ejercicioCuatro && ejercicioUno > ejercicioQuinto && ejercicioUno > ejercicioSexto && ejercicioUno > ejercicioSeptimo && ejercicioUno > ejercicioOctavo && ejercicioUno > ejercicioNoveno && ejercicioUno > ejercicioDiez && ejercicioUno > ejercicioOnce && ejercicioUno > ejercicioDoce && ejercicioUno > ejercicioTrece && ejercicioUno > ejercicioSorpresa) {
    mayor = ejercicioUno;
} else if (ejercicioDos > ejercicioTres && ejercicioDos > ejercicioCuatro && ejercicioDos > ejercicioQuinto && ejercicioDos > ejercicioSexto && ejercicioDos > ejercicioSeptimo && ejercicioDos > ejercicioOctavo && ejercicioDos > ejercicioNoveno && ejercicioDos > ejercicioDiez && ejercicioDos > ejercicioOnce && ejercicioDos > ejercicioDoce && ejercicioDos > ejercicioTrece && ejercicioDos > ejercicioSorpresa) {
    mayor = ejercicioDos;
} else if (ejercicioTres > ejercicioCuatro && ejercicioTres > ejercicioQuinto && ejercicioTres > ejercicioSexto && ejercicioTres > ejercicioSeptimo && ejercicioTres > ejercicioOctavo && ejercicioTres > ejercicioNoveno && ejercicioTres > ejercicioDiez && ejercicioTres > ejercicioOnce && ejercicioTres > ejercicioDoce && ejercicioTres > ejercicioTrece && ejercicioTres > ejercicioSorpresa) {
    mayor = ejercicioTres;
} else if (ejercicioCuatro > ejercicioQuinto && ejercicioCuatro > ejercicioSexto && ejercicioCuatro > ejercicioSeptimo && ejercicioCuatro > ejercicioOctavo && ejercicioCuatro > ejercicioNoveno && ejercicioCuatro > ejercicioDiez && ejercicioCuatro > ejercicioOnce && ejercicioCuatro > ejercicioDoce && ejercicioCuatro > ejercicioTrece && ejercicioCuatro > ejercicioSorpresa) {
    mayor = ejercicioCuatro;
} else if (ejercicioQuinto > ejercicioSexto && ejercicioQuinto > ejercicioSeptimo && ejercicioQuinto > ejercicioOctavo && ejercicioQuinto > ejercicioNoveno && ejercicioQuinto > ejercicioDiez && ejercicioQuinto > ejercicioOnce && ejercicioQuinto > ejercicioDoce && ejercicioQuinto > ejercicioTrece && ejercicioQuinto > ejercicioSorpresa) {
    mayor = ejercicioQuinto;
} else if (ejercicioSexto > ejercicioSeptimo && ejercicioSexto > ejercicioOctavo && ejercicioSexto > ejercicioNoveno && ejercicioSexto > ejercicioDiez && ejercicioSexto > ejercicioOnce && ejercicioSexto > ejercicioDoce && ejercicioSexto > ejercicioTrece && ejercicioSexto > ejercicioSorpresa) {
    mayor = ejercicioSexto;
} else if (ejercicioSeptimo > ejercicioOctavo && ejercicioSeptimo > ejercicioNoveno && ejercicioSeptimo > ejercicioDiez && ejercicioSeptimo > ejercicioOnce && ejercicioSeptimo > ejercicioDoce && ejercicioSeptimo > ejercicioTrece && ejercicioSeptimo > ejercicioSorpresa) {
    mayor = ejercicioSeptimo;
} else if (ejercicioOctavo > ejercicioNoveno && ejercicioOctavo > ejercicioDiez && ejercicioOctavo > ejercicioOnce && ejercicioOctavo > ejercicioDoce && ejercicioOctavo > ejercicioTrece && ejercicioOctavo > ejercicioSorpresa) {
    mayor = ejercicioOctavo;
} else if (ejercicioNoveno > ejercicioDiez && ejercicioNoveno > ejercicioOnce && ejercicioNoveno > ejercicioDoce && ejercicioNoveno > ejercicioTrece && ejercicioNoveno > ejercicioSorpresa) {
    mayor = ejercicioNoveno;
} else if (ejercicioDiez > ejercicioOnce && ejercicioDiez > ejercicioDoce && ejercicioDiez > ejercicioTrece && ejercicioDiez > ejercicioSorpresa) {
    mayor = ejercicioDiez;
} else if (ejercicioOnce > ejercicioDoce && ejercicioOnce > ejercicioTrece && ejercicioOnce > ejercicioSorpresa) {
    mayor = ejercicioOnce;
} else if (ejercicioDoce > ejercicioTrece && ejercicioDoce > ejercicioSorpresa) {
    mayor = ejercicioDoce;
} else if (ejercicioTrece > ejercicioSorpresa) {
    mayor = ejercicioTrece;
} else {
    mayor = ejercicioSorpresa;
}

//Ejercicio menos seleccionado
let menor

if (ejercicioUno < ejercicioDos && ejercicioUno < ejercicioTres && ejercicioUno < ejercicioCuatro && ejercicioUno < ejercicioQuinto && ejercicioUno < ejercicioSexto && ejercicioUno < ejercicioSeptimo && ejercicioUno < ejercicioOctavo && ejercicioUno < ejercicioNoveno && ejercicioUno < ejercicioDiez && ejercicioUno < ejercicioOnce && ejercicioUno < ejercicioDoce && ejercicioUno < ejercicioTrece && ejercicioUno < ejercicioSorpresa) {
    menor = ejercicioUno;
} else if (ejercicioDos < ejercicioTres && ejercicioDos < ejercicioCuatro && ejercicioDos < ejercicioQuinto && ejercicioDos < ejercicioSexto && ejercicioDos < ejercicioSeptimo && ejercicioDos < ejercicioOctavo && ejercicioDos < ejercicioNoveno && ejercicioDos < ejercicioDiez && ejercicioDos < ejercicioOnce && ejercicioDos < ejercicioDoce && ejercicioDos < ejercicioTrece && ejercicioDos < ejercicioSorpresa) {
    menor = ejercicioDos;
} else if (ejercicioTres < ejercicioCuatro && ejercicioTres < ejercicioQuinto && ejercicioTres < ejercicioSexto && ejercicioTres < ejercicioSeptimo && ejercicioTres < ejercicioOctavo && ejercicioTres < ejercicioNoveno && ejercicioTres < ejercicioDiez && ejercicioTres < ejercicioOnce && ejercicioTres < ejercicioDoce && ejercicioTres < ejercicioTrece && ejercicioTres < ejercicioSorpresa) {
    menor = ejercicioTres;
} else if (ejercicioCuatro < ejercicioQuinto && ejercicioCuatro < ejercicioSexto && ejercicioCuatro < ejercicioSeptimo && ejercicioCuatro < ejercicioOctavo && ejercicioCuatro < ejercicioNoveno && ejercicioCuatro < ejercicioDiez && ejercicioCuatro < ejercicioOnce && ejercicioCuatro < ejercicioDoce && ejercicioCuatro < ejercicioTrece && ejercicioCuatro < ejercicioSorpresa) {
    menor = ejercicioCuatro;
} else if (ejercicioQuinto < ejercicioSexto && ejercicioQuinto < ejercicioSeptimo && ejercicioQuinto < ejercicioOctavo && ejercicioQuinto < ejercicioNoveno && ejercicioQuinto < ejercicioDiez && ejercicioQuinto < ejercicioOnce && ejercicioQuinto < ejercicioDoce && ejercicioQuinto < ejercicioTrece && ejercicioQuinto < ejercicioSorpresa) {
    menor = ejercicioQuinto;
} else if (ejercicioSexto < ejercicioSeptimo && ejercicioSexto < ejercicioOctavo && ejercicioSexto < ejercicioNoveno && ejercicioSexto < ejercicioDiez && ejercicioSexto < ejercicioOnce && ejercicioSexto < ejercicioDoce && ejercicioSexto < ejercicioTrece && ejercicioSexto < ejercicioSorpresa) {
    menor = ejercicioSexto;
} else if (ejercicioSeptimo < ejercicioOctavo && ejercicioSeptimo < ejercicioNoveno && ejercicioSeptimo < ejercicioDiez && ejercicioSeptimo < ejercicioOnce && ejercicioSeptimo < ejercicioDoce && ejercicioSeptimo < ejercicioTrece && ejercicioSeptimo < ejercicioSorpresa) {
    menor = ejercicioSeptimo;
} else if (ejercicioOctavo < ejercicioNoveno && ejercicioOctavo < ejercicioDiez && ejercicioOctavo < ejercicioOnce && ejercicioOctavo < ejercicioDoce && ejercicioOctavo < ejercicioTrece && ejercicioOctavo < ejercicioSorpresa) {
    menor = ejercicioOctavo;
} else if (ejercicioNoveno < ejercicioDiez && ejercicioNoveno < ejercicioOnce && ejercicioNoveno < ejercicioDoce && ejercicioNoveno < ejercicioTrece && ejercicioNoveno < ejercicioSorpresa) {
    menor = ejercicioNoveno;
} else if (ejercicioDiez < ejercicioOnce && ejercicioDiez < ejercicioDoce && ejercicioDiez < ejercicioTrece && ejercicioDiez < ejercicioSorpresa) {
    menor = ejercicioDiez;
} else if (ejercicioOnce < ejercicioDoce && ejercicioOnce < ejercicioTrece && ejercicioOnce < ejercicioSorpresa) {
    menor = ejercicioOnce;
} else if (ejercicioDoce < ejercicioTrece && ejercicioDoce < ejercicioSorpresa) {
    menor = ejercicioDoce;
} else if (ejercicioTrece < ejercicioSorpresa) {
    menor = ejercicioTrece;
} else {
    menor = ejercicioSorpresa;
}

//Ejercicio mas seleccionado
console.log('Mayor: ' + mayor);
console.log('Ejercicio ' + opcion)

//Ejercicio menos seleccionado
console.log('Menor: ' + menor);
console.log('Ejercicio ' + opcion)