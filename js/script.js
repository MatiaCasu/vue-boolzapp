var app = new Vue({
  el: "#app",
  data: {
    index: 0,
    // Messaggio Utente/Risposta automatica
    inputMessage: {
      text: "",
      status: 'sent'
    },
    answer: {
      text: "ook",
    },
    // /Messaggio Utente/Risposta automatica
    // Contatti Rubrica
    contacts:
    [{
      nome: "Isabel",
      activeClass: "",
      srcImg: "img/avatar_1.jpg",
      messages: [
        {
          text: "we",
          date: dayjs().subtract(9, 'm').format('DD/MM/YY  HH:mm:ss')
        }
      ]
      },
      {
      nome: "Nicola",
      activeClass: "",
      srcImg: "img/avatar_3.jpg",
      messages: [
        {
          text: "buongiorno",
          date: dayjs().subtract(40, 'm').format('DD/MM/YY  HH:mm:ss')
        },
        {
          text: "buongiornooooooo",
          date: dayjs().subtract(10, 'm').format('DD/MM/YY  HH:mm:ss')
        },
        {
          text: "CIAOOOOOOOH",
          date: dayjs().subtract(9, 'm').format('DD/MM/YY  HH:mm:ss')
        }
      ]
      },
      {
      nome: "Arianna",
      activeClass: "",
      srcImg: "img/avatar_5.jpg",
      messages: [
        {
          text: "Come va?",
          date: dayjs().subtract(10, 'y').format('DD/MM/YY  HH:mm:ss')
        }
      ]
      },
      {
      nome: "Francesca",
      activeClass: "",
      srcImg: "img/avatar_6.jpg",
      messages: [
        {
          text: "prova",
          date: dayjs().subtract(1, 'm').format('DD/MM/YY  HH:mm:ss')
        }
      ]
      }
  ]},
  // /Contatti Rubrica
  // Funzioni
  methods: {
    activeContact: function(array, fIndex){
      array.forEach((element)=>{
        element.activeClass = "";
      });
      this.index = fIndex;
      array[fIndex].activeClass = "active";
    },
    addMessage: function(){
      this.inputMessage.date = dayjs().format('DD/MM/YY  HH:mm:ss');
      const copy = {...this.inputMessage};
      this.inputMessage.text !== "" ? this.contacts[this.index].messages.push(copy) : this.inputMessage.text == "";
      this.inputMessage.text = "";
      this.answer.date = dayjs().add(1, 's').format('DD/MM/YY  HH:mm:ss');
    },
    autoAnswer: function(){
      let appScopeThis = this;
      setTimeout(function(){
        appScopeThis.contacts[appScopeThis.index].messages.push(appScopeThis.answer);
      }, 1000);
    }
  }
  // Funzioni
});
