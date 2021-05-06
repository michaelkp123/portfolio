<template>
    <div class="hero">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  Michael krogholm pedersen
                </h1>
                <p>
                  MULTIMEDIEDESIGNER
                </p>
              </div>
            </div>
            <div class="col-md-7">
                <div class="graphic">
                    <img src="img/bord.jpg" alt="baggrund">
                </div>
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

</style>
