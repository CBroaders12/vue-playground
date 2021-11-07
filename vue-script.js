Vue.component('todo-item', {
  props: ['todo'],
  template: `
    <li 
      v-bind:class="priorityClass"
    >
      {{ todo.text }}
    </li>
    `,
  computed: {
    priorityClass: function () {
      return this.todo.priority <= 2 ? 'high-priority' : 'low-priority';
    },
  },
});

const vm = new Vue({
  el: '#root',
  data: {
    title: 'Vue Playground!',
    message: `This is a testing page for Conor to learn Vue 2.`,
    todos: [
      { id: 1, text: 'Learn Vue 2', priority: 2 },
      { id: 2, text: 'Learn C#', priority: 3 },
      { id: 3, text: 'Get my references completed', priority: 1 },
    ],
  },
});
