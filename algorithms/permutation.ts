let input = [1, 2, 3, 4];

const permutation = (input, prefix) => {
  if (input.length === 1) {
    console.log(`[${prefix},${input}]`);
  }

  for (let i = 0; i < input.length; i++) {
    let current = input.splice(i, 1);
    let newPrefix = [...prefix];
    newPrefix.push(current);
    permutation(input, newPrefix);
    input.splice(i, 0, current);
  }
};

permutation(input, []);
