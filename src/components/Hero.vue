<template>
    <div class="masthead">
  <div class="container h-100">
    <div class="row h-100 align-items-center">
      <div class="col-12 text-center">
        <h1 class="font-weight-light">Michael Krogholm Pedersen</h1>
        <p class="lead">Multimediedesigner</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.masthead {
  height: 100vh;
  min-height: 500px;
  background-image: url('https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
