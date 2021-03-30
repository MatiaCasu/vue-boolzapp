var app = new Vue({
  el: "#app",
  data: {
    index: 0,
    contacts:
    [{
      nome: "Isabel",
      activeClass: "",
      srcImg: "img/avatar_1.jpg",
      messages: [
        {
          text: "ciaoooo!",
        },
        {
          text: "come va?"
        }]
      },
      {
      nome: "Nicola",
      activeClass: "",
      srcImg: "img/avatar_3.jpg",
      messages: [
        {
          text: "buongiorno",
        },
        {
          text: "buongiornooooooo",
        },
        {
          text: "CIAOOOOOOOH",
        }]
      },
      {
      nome: "Arianna",
      activeClass: "",
      srcImg: "img/avatar_5.jpg",
      messages: [
        {
          text: "prova!",
        },
        {
          text: "provaaaaaah"
        }]
      },
  ]},
  methods: {
    activeContact: function(array, fIndex){
      array.forEach((element)=>{
        element.activeClass = "";
      });
      array[fIndex].activeClass = "active";
      this.index = fIndex;
    }
  }
});
