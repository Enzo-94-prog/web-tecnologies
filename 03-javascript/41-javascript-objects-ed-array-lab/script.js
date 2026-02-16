

   /* forEach cicla su tutti gli elementi dell'oggetto */
   var frutti = ['mela', 'banana', 'arancia'];
    // Utilizzo del metodo forEach per iterare sull'array
    frutti.forEach(function(frutto) { 
        console.log(frutto); 
    });


    console.log("\n"); // serve per lasciare uno spazio tra i vari output


    /* Utilizzo dei metodi push e pop */
    var numeri = [1, 2, 3];
    // Utilizzo del metodo push per aggiungere un elemento alla fine dell'array
    numeri.push(4);
    console.log(numeri); // output: [1, 2, 3, 4]
    // Utilizzo del metodo push per aggiungere più elementi alla fine dell'array
    numeri.push(5, 6);
    console.log(numeri); // output: [1, 2, 3, 4, 5, 6]


    console.log("\n");


    var frutti = ['mela', 'banana', 'arancia'];
    // Utilizzo del metodo pop per rimuovere l'ultimo elemento dell'array
    var ultimoFrutto = frutti.pop();
    console.log(frutti); // output: ['mela', 'banana']
    console.log(ultimoFrutto); // output: 'arancia


    console.log("\n");


    /* funzione splice utilizzata per aggiungere o rimuovere elementi da un array in una posizione specifica */
    var numeri = [1, 2, 3, 4, 5];
    // Rimuove un elemento a partire dall'indice 2
    numeri.splice(2, 1);
    console.log(numeri); // output: [1, 2, 4, 5]
    // Aggiunge un elemento all'indice 2 e rimuove un elemento a partire dall'indice 3
    numeri.splice(2, 1, 6);
    console.log(numeri); // output: [1, 2, 6, 5]
    // Aggiunge due elementi all'indice 2 e non rimuove alcun elemento
    numeri.splice(2, 0, 7, 8);
    console.log(numeri); // output: [1, 2, 7, 8, 6, 5]


    console.log("\n");


    // la funzione splice crea una copia di un array
    var numeri = [1, 2, 3, 4, 5];
    // Crea una copia di una porzione dell'array originale
    var numeriCopia = numeri.slice(2, 4);
    console.log(numeriCopia); // output: [3, 4]


    console.log("\n");


    //oggetto car
    const car = {
        make: 'Honda',
        model: 'Civic',
        year: 2020,
        isOn: false,
        turnOn: function() {
            this.isOn = true;
            console.log('The car is on.');
        },
        turnOff: function() {
            this.isOn = false;
            console.log('The car is off.');
        }
    };

    car.turnOn();
    car.turnOff();
        

    console.log("\n");

    
    // Oggetto user
    const user = {
        username: 'johndoe',
        email: 'johndoe@gmail.com',
        posts: [
            { title:'First post',content:'Lorem ipsum.' },
            { title:'Second post',content:'Nulla quis lorem' },
            { title:'Third post',content: 'Sed porttitor lectus nibh.' }
        ]
    };
    

    console.log("\n");


    // Oggetto person con relative proprietè (attributi e medodi(se previsti))
    const person = {
        name: 'stefano',
        age: 45,
        address: { //address è un oggetto annidato
            street: 'la mia strada 123',
            city: 'City',
            state: 'IT'
            }
    };
    // Il ciclo permette di stampare sulla console 
    for (var propertyName in person) {
        if (typeof person[propertyName] === 'object') {
            console.log(propertyName + ':');
            for (var subProperty in person[propertyName]) {
                console.log('  ' + subProperty + ': ' + person[propertyName][subProperty]);
            }
        } else {
            console.log(propertyName + ': ' + person[propertyName]);
        }
    }  
        

    console.log("\n");


    //this fa riferimento all'oggetto corrente, ovvero l'oggetto su cui è stata chiamata la funzione o il metodo
    const persona = {
        nome: "Mario",
        saluta: function() {
        console.log("Ciao, mi chiamo " + this.nome);
        }
    };
    
    persona.saluta(); // Output: "Ciao, mi chiamo Mario"
        

    console.log("\n");

    //eccezione nell'utilizzo di this
    function saluta() {  //def della funzione saluta
        console.log("Ciao, mi chiamo " + this.nome);
    }
    
    const persona1 = {  //def dell'oggetto persona1
        nome: "Mario"
    };
    
    const persona2 = {
            nome: "Luigi"
    };
    
    saluta.call(persona1); // Output: "Ciao, mi chiamo Mario"
    saluta.call(persona2); // Output: "Ciao, mi chiamo Luigi"
        