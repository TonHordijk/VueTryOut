var app = new Vue({
  el: '#vueApp',
  data: {
    message: 'Welkom in deze prachtige app!',
    hoverTitle: 'Welkom jonguh!',
    timeVisible: false,
    buttonText: 'Toon tijd',
    beers: ['Hertog Jan', 'Gulpener', 'Palm', 'Jupiler', 'Duvel'],
    headerText: 'Welkom!'
  },
  methods: {
    toggleTime() {
      if(!this.timeVisible) {
        this.timeMessage = 'Het is op dit moment: ' + new Date();
        this.buttonText = 'Verberg tijd';
        this.timeVisible = true;
      } else {
        this.buttonText = 'Toon tijd';
        this.timeVisible = false;
      }
    }
  }
});

// Vue.component('todo', {
//   template: '<h3>This will be a todo list</h3>'
// });