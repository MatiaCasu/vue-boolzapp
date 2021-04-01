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
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
      },
  ]},
  methods: {
    activeContact: function(array, fIndex){
      array.forEach((element)=>{
        element.activeClass = "";
      });
      this.index = fIndex;
      array[fIndex].activeClass = "active";
    }
  }
});
