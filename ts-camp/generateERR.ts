let userInput: unknown;
let userName: string;


userInput = 5;
userName = 'Meya';
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateErr(message: string, code: number): never {
  throw {message: message, errorCode: code};
  // while (true) {}
}

generateErr('An error occurred', 500);