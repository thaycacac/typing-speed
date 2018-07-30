<template>
  <div class="container">
    <button v-on:click="start">Start</button>
    <button v-on:click="shuffle">Shuffle</button>
     <h1 class="title is-1">Test Speed</h1>
    <transition-group name="list-complete" tag="p">
    <span
      v-for="item in paragraph"
      v-bind:key="item"
      class="list-complete-item is-size-4">
      {{ item }}
    </span>
  </transition-group>
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
        <p class="has-text-danger incorrect">{{ textIncorrect }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      texts: 'đúng như tên truyện độc giả sẽ bắt gặp ở đó chi tiết thực sự dữ dội về đời thiếu niên bất hạnh cuộc chiến tranh chống giặc tàn khốc nhưng ẩn sâu bên ta vẫn tâm hồn trong sáng vô tư thấy can trường dũng phi thường của nhân vật tất cả ai đã từng đọc này hầu đều không ngăn được xúc động và những giọt mắt thương cảm phục đây là một tác phẩm quý kho tàng văn học việt nam Một câu chuyện khơi dậy mỗi người tình yêu đất nước niềm trân trọng ký ức tuổi thơ'.split(' '),
      textInput: '',
      paragraph: [],
      textCorrect: '',
      textIncorrect: ''
    }
  },
  methods: {
    randomIndex () {
      return Math.floor(Math.random() * this.texts.length)
    },
    checkExistInList (textCheck) {
      return this.paragraph.find(element => {
        return element === textCheck
      })
    },
    randomTexts () {
      for (let i = 0; i < 35; i++) {
        while(true){
          const textCheck = this.texts[this.randomIndex()]
          if (!this.checkExistInList(textCheck)) {
            this.paragraph.push(textCheck)
            break;
          }
        }
      }
      return this.paragraph
    },
    addOneTextLast () {
      while(true){
        const textCheck = this.texts[this.randomIndex()]
        if (!this.checkExistInList(textCheck)) {
          this.paragraph.push(textCheck)
          break;
        }
      }
    },
    start () {
      this.paragraph = []
      this.paragraph = this.randomTexts()
    },
    enterKey () {
      console.log(this.textInput);
      console.log(this.paragraph[0]);
      if (this.textInput.trim() === this.paragraph[0]) {
        this.textCorrect = this.textCorrect + ' ' + this.paragraph[0]
      } else {
        this.textIncorrect = this.textInput
      }
      this.paragraph.splice(0, 1);
      this.addOneTextLast()
      this.textInput = ''
    },
    shuffle: function () {
      this.paragraph = _.shuffle(this.paragraph)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.incorrect {
  text-decoration-color: blue;
}
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
