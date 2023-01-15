const button = document.querySelector('button')!;

function clickHandler(msg: string){
  console.log('Clicked!'+ msg);
}
// test comment
if (button){
    button.addEventListener('click', clickHandler.bind(null));
}