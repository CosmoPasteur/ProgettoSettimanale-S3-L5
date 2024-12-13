/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics
console.log("JS Basics:");
/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("ESERCIZIO 1:");
let sum = 10 + 20;
console.log(sum);   //Il risultato sarà la somma dei due valori letti in traccia.
console.log("****************************************");


/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("ESERCIZIO B:");
let random = Math.floor(Math.random() * 21);
console.log(random);   //Il risultato stamperà numeri casuali tra 0 e 20
console.log("****************************************");
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("ESERCIZIO C:");
let me = {
  name : "Cosimo",
  surname : "Pastore",
  age : 37
};
console.log(me);
console.log("****************************************");
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("ESERCIZIO D:");
delete me.age;    //rimuove la proprietà age
console.log(me);  //Il risultato dichiarerà il Nome ed il cognome dell'oggetto precedente
console.log("****************************************");
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("ESERCIZIO E:");
me.skills = ["JavaScript"];    //Aggiunge un array di nome 'skills', con i linguaggi di programmazione che conosco.
console.log(me);
console.log("****************************************");
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("ESERCIZIO F:");
me.skills.push("nuovo elemento");   //Aggiunge 'nuovo elemento' all'array "skills".
console.log(me);
console.log("****************************************");
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("ESERCIZIO G:");
me.skills.pop("nuovo elemento");    //Rimuove l'ultimo elemento all'array "skills".
console.log(me);
console.log("****************************************");
// Funzioni
console.log("ESERCIZIO FUNZIONI:");
/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("ESERCIZIO 1:");
function dice() {
  return Math.floor(Math.random() * 6) +1   //Genera un numero tra 1 e 6
}
console.log(dice()); //chiamata della funzione
console.log("****************************************");
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("ESERCIZIO 2:");
function whoIsBigger(num1, num2) {
  if(num1 > num2) {
    return num1
  } else {
    return num2
  };
};
console.log(whoIsBigger(5, 10));    //Nel risultato della funzione ritornerà il numero più grande.
console.log("****************************************");
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("ESERCIZIO 3:");
function splitMe(str) {
  return str.split(" ");    //Divide una stringa restituendola come array
}
console.log(splitMe("I love you"));   //Restituzione in array
console.log("****************************************");
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("ESERCIZIO 4:");
function deleteOne(str, deleteFirst) {
  if(deleteFirst) {
    return str.slice(1);    //Rimuove il primo carattere dalla stringa
  } else {
    return str.slice(0, -1);    //Altrimenti ritornerà senza l'ultimo carattere
  }
};
console.log(deleteOne("ciao", true));   //ritorna con "iao"
console.log(deleteOne("ciao", false));    //ritorna "cia"
console.log("****************************************");
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("ESERCIZIO 5:");
function onlyLetter(str) {
  return str.replace(/[0-9]/g, "");   //Rimuove le cifre
}
console.log(onlyLetter("I have 3 dogs"));   //La risposta risulterà senza numeri
console.log("****************************************");
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("ESERCIZIO 6:");
function isThisAnEmail(str) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(str);    //Restituisce True se la stringa email è valida
}
console.log("esempio@gmail.com");    //true
console.log("esempio.com");    //false
console.log("****************************************");
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("ESERCIZIO 7:");
function whatDayIsIt() {
  const giornoDellaSettimana = ["Domenica", "Lunedì", "Martedì","Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  const giornoCorrente = new Date().getDay(); //Restituisce uno dei giorno nell'array (0 - 6)
  return giornoDellaSettimana[giornoCorrente];    //Restituisce il nome del giorno
}
console.log(whatDayIsIt());   //Il risultato sarà il giorno corrente
console.log("****************************************");
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("ESERCIZIO 8:");
/*function dice() {
  return Math.floor(Math.random() *6) +1;
}

function rollTheDices(numRolls) {
  let sum = 0;
  let value = [];

  for (let i = 0; i < numRolls; i++) {
    const roll = dice();    //chiama la funzione dice per un valore
    sum += roll;    //aggiunge il valore al totale
    values.push(roll);    //Aggiunge valore all'array
  }
  return {
    sum = sum
    values = values
  };
}
console.log(rollTheDices(5));*/
console.log("****************************************");
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("ESERCIZIO 9:");
function howManyDays(date) {
  const currentDate = new Date();
  const differInTime = currentDate - new Date(date);
  const differInDays = Math.floor(differInTime / (1000 * 3000 * 24));
  return differInDays; 
}
console.log(howManyDays("2024-03-07"));
console.log("****************************************");
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("ESERCIZIO 10:");
function isTodayMyBirthday() {
  const today = new Date();
  const birthday = new Date(today.getFullYear(), 2, 7);

  return today.getMonth() === birthday.getMonth() && today.getDate() === birthday.getDate();
}
console.log(isTodayMyBirthday()); //restituirà true o false
console.log("****************************************");
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("ESERCIZIO 11:");
function deleteProp(obj, str) {
  delete obj["prop"];   //rimuove la proprietà dell'oggetto
  return obj;   //obj modificato
}
const member = { name: "Carlo", age: 20, country: "Italia"};
console.log(deleteProp(member, "age"));
console.log("****************************************");
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("ESERCIZIO 12:");
//Ho ricopiato qui l'array 'movie' perche mi portava errore nell'esecuzione della funzione. La chiedeva prima del
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

function newestMovie(movies) {
  // Trova il film più recente confrontando gli anni
  return movies.reduce((newest, current) => {
    return parseInt(current.Year) > parseInt(newest.Year) ? current : newest;
  });
}

const recentMovie = newestMovie(movies);    // Test della funzione
console.log(recentMovie);
console.log("****************************************");
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 13:");
function countMovies(movies) {
  return movies.length; // Restituisce il numero di film nell'array
}

const movieCount = countMovies(movies);   // Esempio di utilizzo
console.log(movieCount);
console.log("****************************************");
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 14:");
function onlyTheYears(movies) {
  return movies.map(movie => movie.Year);
}
const years = onlyTheYears(movies);
console.log(years);
console.log("****************************************");
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 15:");
function onlyInLastMillennium(movies) {
  return movies.filter(movie => parseInt(movie.Year) < 2000); // Filtra i film con anno inferiore a 2000
}
const lastMillenniumMovies = onlyInLastMillennium(movies);
console.log(lastMillenniumMovies);
console.log("****************************************");
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 16:");
function sumAllTheYears(movies) {
  return movies.reduce((sum, movie) => sum + parseInt(movie.Year), 0);
}
  const totalYears = sumAllTheYears(movies);
console.log(totalYears); // Stampa la somma di tutti gli anni
console.log("****************************************");
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("ESERCIZIO 17:");
function searchByTitle(searchString) {
  return movies.filter(movie => movie.Title.toLowerCase().includes(searchString.toLowerCase()));    // Filtra i film che contengono la stringa di ricerca nel titolo, ignorando maiuscole/minuscole
}
const searchResults = searchByTitle("Lord");
console.log(searchResults); // Stampa i film che contengono "Lord" nel titolo
//
const searchResults1 = searchByTitle("Avengers");
console.log(searchResults1); // Stampa i film che contengono "Avengers" nel titolo
console.log("****************************************");
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("ESERCIZIO 19:");
function removeIndex(index) {
  return movies.filter((_, i) => i !== index);    // Filtra l'array rimuovendo l'elemento all'indice specificato
}
const result = removeIndex(2); // Rimuove l'elemento all'indice 2
console.log(result);
console.log("****************************************");
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("ESERCIZIO 20:");
function selectIdContainer() {
  const container = document.querySelector("#container");
  return container;
};
//oppure
function selectContainer() {
  const container = document.getElementById('container'); // Seleziona l'elemento con id "container"
  return container;
}
console.log("****************************************");
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("ESERCIZIO 21:");
function selectAllTD() {
  const tagTd = document.querySelectorAll("td")
  return tagTd;
}
console.log("****************************************");
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("ESERCIZIO 22:");
function printTdText() {      //Funzione
  const tdElements = document.querySelectorAll('td');

tdElements.forEach(td => {
  console.log(td.textContent); // Stampa il contenuto di ogni <td>
});
}
console.log("****************************************");
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("ESERCIZIO 23:");
function addBackground() {
  const link = document.querySelectorAll("a");    //Selezione di tutti i link <a> (link)
  links.forEach(link => {
    link.style.backgroundColor = 'red'; // Sfondo. background rosso per ogni link
  });
}
console.log("****************************************");
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("ESERCIZIO 24:");
function addElementUl() {
  const myList = document.querySelector('#myList'); //selezione elemento <ul> con Id 'myList'
  const newItem = document.createElement('li'); // nuovo elemento <li>
  newItem.textContent = 'Nuovo elemento';   // Aggiungiamo un testo al nuovo elemento

  myList.appendChild(newItem); // Aggiungiamo il nuovo elemento alla lista
}
console.log("****************************************");
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("ESERCIZIO 25:");
function clearList() {
  const myList = document.getElementById('myList'); // Seleziona l'elemento <ul> con id "myList"
  myList.innerHTML = ''; // impostare innerHTML a una stringa vuota rimuove/svuota tutto il contenuto della lista
}
console.log("****************************************");
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("ESERCIZIO 26:");
function addClassToTr() {
  const trElements = document.querySelectorAll('tr'); // Seleziona tutti gli elementi <tr>
  
  trElements.forEach(tr => {
    tr.classList.add('test'); // Aggiungi la classe "test" a ciascun <tr>
  });
}
console.log("****************************************");
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("ESERCIZIO 27:");
function halfTree(height) {
  for (let i = 1; i <= height; i++) {
    let stars = '*'.repeat(i); // Crea una stringa con 'i' asterischi
    console.log(stars); // Stampa la stringa di asterischi
  }
}

console.log("****************************************");
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("ESERCIZIO 28:");
function tree(height) {
  // Costruzione dei rami dell'albero
  for (let i = 1; i <= height; i++) {
    // Calcola gli spazi per centrare gli asterischi
    let spaces = ' '.repeat(height - i);
    // Calcola il numero di asterischi per la riga corrente
    let stars = '*'.repeat(2 * i - 1);
    // Stampa la riga con spazi a sinistra e asterischi
    console.log(spaces + stars);
  }
}

console.log("****************************************");
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
function isItPrime(number) {
  if (number <= 1) {
    return false; // I numeri minori o uguali a 1 non sono primi
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // Se il numero è divisibile per 'i', non è primo
    }
  }
  return true; // Se non è divisibile da nessun numero tranne 1 e se stesso, è primo
}
/* Questo array viene usato per gli esercizi. Non modificarlo. */

/*const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]*/
