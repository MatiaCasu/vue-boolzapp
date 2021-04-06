var app = new Vue({
  el: "#app",
  data: {
    index: 0,
    searchInput: "",
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
      name: "Isabel",
      srcImg: "img/avatar_1.jpg",
      visible: true,
      messages: [
        {
          text: "we",
          date: dayjs().subtract(9, 'm').format('DD/MM/YY  HH:mm:ss')
        }
      ]
      },
      {
      name: "Nicola",
      srcImg: "img/avatar_3.jpg",
      visible: true,
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
      name: "Arianna",
      srcImg: "img/avatar_5.jpg",
      visible: true,
      messages: [
        {
          text: "Come va?",
          date: dayjs().subtract(10, 'y').format('DD/MM/YY  HH:mm:ss')
        }
      ]
      },
      {
      name: "Francesca",
      srcImg: "img/avatar_6.jpg",
      visible: true,
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
    getInput: function(){
      this.contacts.forEach((contact) => {
        if(contact.name.toLowerCase().includes(this.searchInput.toLowerCase())){
          contact.visible = true;
        }
        else{
          contact.visible = false;
        }
      });
    },
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
