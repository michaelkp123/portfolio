<template>
  <div class="Navbar">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" href="#">Michael Krogholm Pedersen</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
          <router-link to="/Ommig" class="nav-link">Om mig</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Portfolio" class="nav-link">Portfolio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Kontakt" class="nav-link" >Kontakt</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
