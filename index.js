Vue.component('todo', {
  template: '<li>{{ todoitem }}</li>',
  props: ['todoitem']
});

var app = new Vue({
  el: '#vueApp',
  data: {
    message: 'Welkom in deze prachtige app!',
    hoverTitle: 'Welkom jonguh!',
    timeVisible: false,
    buttonText: 'Toon tijd',
    beers: ['Hertog Jan', 'Gulpener', 'Palm', 'Jupiler', 'Duvel'],
    headerText: 'Welkom!',
    todoList: [{ text: 'todo 1', id: '1' }, { text: 'todo 2', id: '2' }, { text: 'todo 3', id: '3' }, { text: 'todo 4', id: '4' }]
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