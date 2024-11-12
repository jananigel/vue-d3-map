<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    Count: {{ this.count }}
    <AppButton :title="'Home Button'" @buttonClick="this.increment"></AppButton>
  </div>
</template>

<script>
import { AppButton } from '../shared/widgets';


export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  components: { AppButton },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count ++;
    },
  },
  mounted() {
    console.log('Home page count = ', this.count);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$color: red;
h3 {
  color: $color;
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
