<template>
  <div class="Ommig">
    <Navbar></Navbar>
<div class="Ommig-section">
  <h1>Om mig</h1>
  <img :src="require(`@/assets/img/Mig.jpg`)" alt="mig" width="250px" height="250px">
  <p>Mit navn er Michael Krogholm Pedersen og jeg er 21 år gammel. Jeg er i gang med uddannelsen som Multimediedesigner. 
Jeg opfatter mig selv som en engageret og målrettet person, der tager ansvar og leverer 
gode resultater. Jeg brænder for at arbejde med grafisk design og webdesign.
<br> <br>
Min uddannelse sammen med min erhvervsmæssige baggrund har givet mig den nødvendige viden og erfaring 
med brugercentreret design, webudvilking, grafisk design, UX/UI design, udvikling og grafisk optimering af 
hjemmesider.</p>
</div>

  </div>
</template>

<style scoped>
.Ommig-section{
    padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

img {
  border-radius: 50%;
}
</style>