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
              <p class="title is-1 has-text-danger">3,456 WPM</p>
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
  data() {
            return {
                data: [
                    { 'info': 'Keystrokes', 'result': '15'},
                    { 'info': 'Accuracy', 'result': '100%'},
                    { 'info': 'Correct words', 'result': '100'},
                    { 'info': 'Wrong words', 'result': 'Wrong words'}
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

