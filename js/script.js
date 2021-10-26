/**
 Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
 */
/**operazioni da svolgere */
//.1 creare una array in cui sono presenti le email
//.2 attraverso un ciclo al cui interno c'è una condizione if verificare se l'email sia presente nella lista
//3. stampare l'output in cui si dice che l'email è stata trovata

//creo una lista array che contenga le mail
const emailList = ["josefkoudelka@gmail.com", "jamesnachtwey@gmail.com", "paolopellegrin@gmail.com", "alexmajoli@gmail.com", "raymonddepardon@gmail.com", "reneburri@gmail.com", "jasoneskenazi@gmail.com", "gillesperes@gmail.com"]
// console.log(emailList);

//inizializzo la variabile email 
let email = "josefkoudelka@gmail.com"//prompt('Qual è la tua email?')
// console.log(email);
let emailInLista = false //variabile booleana di default è falsa

//creo un ciclo for in cui verifico la presenza dell'email 
for(let i=0; i<emailList.length; i++){
  console.log(emailList[i]);
  if (emailList[i] === email) {  //l'email inserita si trova dentro la lista?
    console.log('email in lista'); //si! => email in lista
    emailInLista = true
    console.log(emailInLista); //nella console comparità: true
}
}

//riferisco se l'email è: "email in lista" o "email non in lista"
if(emailInLista == true){
  console.log('la tua email è in lista');
}else{
  console.log('la tua email non è in lista');
}

//stampo il risultato della mia ricerca ossia: "trovata" o "non trovata"
const mail = document.getElementById('mail');
mail.innerHTML = `${emailInLista}`




/**
 Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */
//numero random per il player
const player = Math.floor(Math.random() * 6) + 1;
console.log(player);

//numero random per il computer
const computer = Math.floor(Math.random() * 6) + 1;
console.log(computer);

//verifico chi ha il numero più alto
