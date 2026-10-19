const limite = 5 **600;

// Criamos um Buffer binário de 256KB (espaço de memória bruta super rápido)
const TAMANHO_BUFFER = 256 * 1024;
const buf = Buffer.allocUnsafe(TAMANHO_BUFFER);
let offset = 0;

// Pré-salvamos os bytes do texto fixo "contador:"
const prefixo = Buffer.from("contador:");
const tamanhoPrefixo = prefixo.length;

for (let i = 0; i < limite; i++) {
    // Se o buffer não tiver espaço para o próximo registro, descarrega no terminal
    if (offset + 25 > TAMANHO_BUFFER) {
        process.stdout.write(buf.subarray(0, offset));
        offset = 0;
    }

    // 1. Copia os bytes de "contador:" direto na memória
    prefixo.copy(buf, offset);
    offset += tamanhoPrefixo;

    // 2. Escreve o número 'i' transformando-o em texto direto nos bytes (Fast Int-to-ASCII)
    let num = i;
    let posNumero = offset;
    
    // Descobre quantos dígitos o número tem avançando o ponteiro
    if (num === 0) {
        buf[posNumero++] = 48; // Código ASCII para '0'
    } else {
        let temp = num;
        let digitos = 0;
        while (temp > 0) { digitos++; temp = (temp / 10) | 0; }
        posNumero += digitos;
        offset = posNumero; // Atualiza o offset principal
        
        // Preenche os dígitos de trás para frente na memória
        while (num > 0) {
            buf[--posNumero] = 48 + (num % 10);
            num = (num / 10) | 0;
        }
    }

    // 3. Adiciona a quebra de linha '\n' (Código ASCII 10)
    buf[offset++] = 10;
}

// Descarrega o que sobrou no buffer
if (offset > 0) {
    process.stdout.write(buf.subarray(0, offset));
}

