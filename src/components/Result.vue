<template>
  <section class="container">
    <div class="columns">
      <div class="column is-4"></div>
      <div class="column">
        <b-notification type="is-info">
          <div class="has-text-centered">
            <span class="icon is-large">
              <span class="fa-stack fa-lg">
                <i class="fas fa-keyboard fa-stack-2x"></i>
              </span>
            </span>
          </div>
          <div class="has-text-centered">
            <h2 class="title is-2">Result</h2>
          </div>
          <hr>
          <div class="level-item has-text-centered">
            <div>
              <p class="title is-1 has-text-danger">{{ wpm }} WPM</p>
              <p class="heading has-text-grey-light">(words per minute)</p>
            </div>
          </div>
          <hr>
          <b-table :data="data" :columns="columns" class="table is-striped table-custom"></b-table>
          <div class="has-text-centered">
            <h4 class="title is-4 has-text-success">Congratulations!</h4>
          </div>
        </b-notification>
      </div>
      <div class="column is-4"></div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    wpm: {
      type: Number,
      required: true
    },
    keystrokes: {
      type: Number,
      required: true
    },
    percentCorrect: {
      type: String,
      required: true
    },
    correctWords: {
      type: Number,
      required: true
    },
    inCorrectWords: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      data: [
          { 'info': 'Keystrokes', 'result': this.keystrokes},
          { 'info': 'Accuracy', 'result': this.percentCorrect},
          { 'info': 'Correct words', 'result': this.correctWords},
          { 'info': 'Wrong words', 'result': this.inCorrectWords}
      ],
      columns: [
          {
            field: 'info',
            label: 'Attribute',
          },
          {
            field: 'result',
            label: 'Result',
          }
      ]
    }
  }
};

</script>
<style scoped>
</style>

