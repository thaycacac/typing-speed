<template>
  <div class="container">
    <h1 class="title is-1">Test Speed</h1>
    <p>{{ paragraph }}</p>
    <div class="field">
      <div class="control">
        <input class="input" 
        @keyup.space="enterKey" 
        v-model="textInput" 
        type="text" 
        placeholder="Text input">
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h1 class="title is-3">Correct</h1>
        <p class="has-text-success">{{ textCorrect }}</p>
      </div>
      <div class="column">
        <h1 class="title is-3">Incorrect</h1>
        <p class="has-text-danger">{{ textIncorrect }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      textInput: '',
      paragraph: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.',
      textCorrect: '',
      textIncorrect: ''
    }
  },
  methods: {
    enterKey () {
      const paras = this.paragraph.split(" ")
      if (this.textInput === paras[0]+ ' ') {
        this.textCorrect = this.textCorrect + ' ' + paras[0]
      } else {
        this.textIncorrect = this.textIncorrect + ' ' + paras[0]
        console.log(false)
      }
      this.paragraph = this.paragraph.substring(this.paragraph.indexOf(' ') + 1)
      console.log(this.paragraph)
      this.textInput = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
