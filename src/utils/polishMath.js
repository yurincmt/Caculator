
export function polishExpSolver(exp) {
  const stack = [];

  for (const token of exp.split(' ')) {
    if (['+', '−', '×', '÷'].includes(token)) {
      const n2 = parseFloat(stack.pop());
      const n1 = parseFloat(stack.pop());
      let eq;
      switch (token) {
        case '+':
          eq = n1 + n2;
          break;
        case '−':
          eq = n1 - n2;
          break;
        case '×':
          eq = n1 * n2;
          break;
        case '÷':
          eq = n1 / n2;
          break;
      }
      stack.push(eq);
    } else {
      stack.push(token);
    }
    // console.log(stack);
  }
  return stack.at(0);
}

export function infix2Polish(exp) {
  const stack = [];
  const polishExp = [];

  // for (const token of exp.split(' ')) { // spaços são delimitadores: 2 + 2 / 2 * 10
  for (const token of exp.split(/(\+|\−|\×|\÷|%)/).filter(item => item !== '')) { // não precisa de delimitadores: 2+2/2*10
    if (['+', '−', '×', '÷', '%'].includes(token)) {

      if (token === '%') {
        polishExp.push('100');
        polishExp.push('÷');
        continue;
      }

      if (stack.length > 0) {

        if (['÷', '×'].includes(stack.at(-1))) {
          while (stack.length > 0) {
            polishExp.push(stack.pop());
          }
          stack.push(token);
          
        } else if (['÷', '×'].includes(token)) {
          stack.push(token);

        } else {
          polishExp.push(stack.pop());
          stack.push(token);
        }
      } else {
        stack.push(token);
      }
    } else {
      polishExp.push(token);
    }
  }

  while (stack.length > 0) {
    polishExp.push(stack.pop());
  }
  return polishExp.join(' ');
}