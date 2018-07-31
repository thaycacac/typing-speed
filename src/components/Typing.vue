<template>
  <div class="container">
    <h1 class="title is-1">Test Speed</h1>
    <h1 class="title is-1 has-text-danger" id="time">01:00</h1>
    <transition name="bounce">
      <button 
      class="button-circle button is-info"
      @click="start"
      v-show="!isStart">Start</button>
    </transition>
    <div class="box" v-show="isStart">
      <transition-group name="list-complete" tag="p">
        <span
          v-for="item in paragraph"
          v-bind:key="item"
          class="list-complete-item is-size-3 has-text-dark">
          {{ item }}
        </span>
      </transition-group>
    </div>
    <transition name="fade">
      <div class="field" v-show="isStart">
        <div class="control has-text-centered">
          <input 
          class="input is-large textfield-custom" 
          type="text"
          v-model="textInput" 
          @keyup.space="enterKey"
          @keypress = "startTime"
          placeholder="Text input">
        </div>
      </div>
    </transition>
    <div class="columns">
      <div class="column">
        <h1 class="title is-3">Correct</h1>
        <button class="button-circle button is-success">{{ percentCorrect }}%</button>
      </div>
      <div class="column" v-show="isStart && !isRunning">
        <h1 class="title is-3">Shuffle</h1>
        <button 
        @click="start" 
        class="button-circle button is-warning">
          <span class="icon">
            <i class="fas fa-undo"></i>
          </span>
        </button>
      </div>
      <div class="column">
        <h1 class="title is-3">Incorrect</h1>
        <button class="button-circle button  is-danger is-center">{{ percentIncorrect }}%</button>
      </div>
    </div>
    <result
    :wpm="countCorrect"
    :keystrokes="isStartTime"
    :percentCorrect="percentCorrect"
    :correctWords="countCorrect"
    :inCorrectWords="countIncorrect"></result>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Result from '../components/Result';
export default {
  components: {
    Result
  },
  data () {
    return {
      texts: 'đúng như tên truyện độc giả sẽ bắt gặp ở đó chi tiết thực sự dữ dội về đời thiếu niên bất hạnh cuộc chiến tranh chống giặc tàn khốc nhưng ẩn sâu bên ta vẫn tâm hồn trong sáng vô tư thấy can trường dũng phi thường của nhân vật tất cả ai đã từng đọc này hầu đều không ngăn được xúc động và những giọt mắt thương cảm phục đây là một tác phẩm quý kho tàng văn học việt nam câu chuyện khơi dậy mỗi người tình yêu đất nước niềm trân trọng ký ức tuổi thơ'.split(' '),
      textInput: '',//text user input
      paragraph: [],//paras random from array texts
      countCorrect: 0,//count number input correct
      countIncorrect: 0,//count number input incorrect
      percentCorrect: '',
      percentIncorrect: '',
      isStart: false,//check start to hidden button start
      isStartTime: 0,//to count when user presskey, if is 1 then begin run else do nothing
      isRunning: false
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
      for (let i = 0; i < 30; i++) {
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
      const display = document.querySelector('#time')
      if (display.textContent === '01:00' || display.textContent === '00:00') {
        display.textContent = '01:00'
        this.isStartTime = 0
        this.isStart = true
        this.paragraph = []
        this.paragraph = this.randomTexts()
      }
    },
    enterKey () {
      if (this.textInput.trim() === this.paragraph[0]) {
        this.countCorrect++
      } else {
        this.countIncorrect++ 
      }
      this.percentCorrect = this.countCorrect / (this.countCorrect + this.countIncorrect) *100
      this.percentIncorrect = this.countIncorrect / (this.countCorrect + this.countIncorrect) *100
      this.percentCorrect = parseFloat(Math.round(this.percentCorrect * 100) / 100).toFixed(2)
      this.percentIncorrect = parseFloat(Math.round(this.percentIncorrect * 100) / 100).toFixed(2)
      this.paragraph.splice(0, 1);
      this.addOneTextLast()
      this.textInput = ''
    },
    shuffle () {
      this.paragraph = _.shuffle(this.paragraph)
    },
    startTime () {
      this.isStartTime++
      if(this.isStartTime == 1) {
        this.isRunning = true
        const duration = 2
        const display = document.querySelector('#time')
        var timer = duration, minutes, seconds;
        const run = setInterval(() => {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                // timer = duration;
                timer = 60
                this.isRunning = false
                clearInterval(run)
            }
        }, 1000)
        }
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
.button-circle {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  font-size: 35px;
  border: 1px;
}
.textfield-custom {
  width: 70%;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
