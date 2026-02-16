
import Vue from 'vue';
import App from './App.vue';  // Importa il tuo componente principale

// Crea e monta l'istanza Vue sull'elemento con id="app"
new Vue({
  render: h => h(App),
}).$mount('#app');