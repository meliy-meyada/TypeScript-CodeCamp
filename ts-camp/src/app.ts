const button = document.querySelector('button')!;

function add(n1: number, n2: number){
  if(n1 + n2 > 0){
    return n1 + n2;
  }
  return;
}

function clickHandler(msg: string){
  // let userName = 'Meyade';
  console.log('Clicked!'+ msg);
}
// test comment
if (button){
    button.addEventListener('click', clickHandler.bind(null, "You're Welcome!"));
}