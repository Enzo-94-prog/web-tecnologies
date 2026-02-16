<template>
    <div>
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
      <button @click="incrementCounter()">Incrementa</button>
      <p>Contatore: {{ counter }}</p>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        title: 'Benvenuti in Vue.js!',
        message: 'Questo è un esempio di componente Vue.js.',
        counter: 0
      };
    },
    methods: {
      incrementCounter() {
        this.counter++;
      }
    }
  };
  </script>
 
 <!-- 
  <style scoped>
  /* Qui puoi aggiungere stili CSS per questo componente */
  button {
    padding: 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #369f6b;
  }
  </style>
                                                  -->