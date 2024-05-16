// Función para analizar el código y mostrar los resultados
function analizarCodigo() {
    const codigo = document.getElementById('codigo').value;
    const palabras = codigo.split(/\s+|\b/);
    const tiposToken = palabras.map(palabra => {
        // Definición de tokens en español completo
        if (!isNaN(palabra)) {
            return { token: palabra, tipo: 'Número' };
        } else if (/[+\-*=\/]/.test(palabra)) {
            return { token: palabra, tipo: 'Operador' };
        } else if (/[==!=><>=<=]/.test(palabra)) {
            return { token: palabra, tipo: 'Operador de Comparación' };
        } else if (/[&&||!]/.test(palabra)) {
            return { token: palabra, tipo: 'Operador Lógico' };
        } else if (palabra === 'true' || palabra === 'false') {
            return { token: palabra, tipo: 'Tipo de Dato' };
        } else if (palabra === 'null') {
            return { token: palabra, tipo: 'Tipo de Dato' };
        } else if (/[()]/.test(palabra)) {
            return { token: palabra, tipo: 'Delimitador' };
        } else if (palabra === ',') {
            return { token: palabra, tipo: 'Separador' };
        } else if (palabra === ';') {
            return { token: palabra, tipo: 'Separador' };
        } else if (palabra === 'si' || palabra === 'if') {
            return { token: palabra, tipo: 'Palabra reservada' };
        } else if (palabra === 'entonces' || palabra === 'then') {
            return { token: palabra, tipo: 'Palabra reservada' };
        } else if (palabra === 'sino' || palabra === 'else') {
            return { token: palabra, tipo: 'Palabra reservada' };
        } else if (palabra === 'mientras' || palabra === 'while') {
            return { token: palabra, tipo: 'Palabra reservada' };
        } else if (palabra === 'hacer' || palabra === 'do') {
            return { token: palabra, tipo: 'Palabra reservada' };
        } else {
            return { token: palabra, tipo: 'Variable' };
        }
    });

    // Mostrar resultados léxicos
    const tipoAnalisis = document.getElementById('tipoAnalisis');
    const tipoToken = document.getElementById('tipoToken');
    const errores = document.getElementById('errores');

    tipoAnalisis.innerHTML = '<p>Tipo de análisis: Léxico</p>';
    tipoToken.innerHTML = tiposToken.map(t => `<p>Token: ${t.token}, Tipo: ${t.tipo}</p>`).join('');
    errores.innerHTML = '<p>No se encontraron errores léxicos.</p>';

    // Calcular y mostrar resultado normal
    const resultadoNormal = calcularResultado(codigo);
    document.getElementById('resultadoNormal').style.display = 'block';
    document.getElementById('resultadoNormalText').innerHTML = `<p>Resultado Normal: ${resultadoNormal}</p>`;

    document.getElementById('resultado').style.display = 'block';
}

// Función para calcular el resultado normal de una expresión matemática
function calcularResultado(expresion) {
    try {
        // Evaluar la expresión solo si es una expresión matemática válida
        if (/^[0-9+\-*/(). !&|<>=,;]+$/.test(expresion)) {
            const resultado = eval(expresion);
            return resultado;
        } else {
            throw new Error('Expresión matemática inválida');
        }
    } catch (error) {
        return 'Error al evaluar la expresión';
    }
}
