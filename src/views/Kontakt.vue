<template>
  <div class="Kontakt">
      <Navbar></Navbar>
        <section class="get_in_touch">
            <h1 class="title">KONTAKT</h1>

            <div class="container">
                <div class="contact-form row">
                    <div class="form-field col-lg-6">
                        <input id="name" class="input-text" type="text" name="">
                        <label for="name" class="label">NAVN</label>
                    </div>
                     <div class="form-field col-lg-6">
                        <input id="email" class="input-text" type="email" name="">
                        <label for="Email" class="label">E-MAIL</label>
                    </div>
                    <div class="form-field col-lg-6">
                        <input id="company" class="input-text" type="text" name="">
                        <label for="company" class="label">FIRMA NAVN</label>
                    </div>
                    <div class="form-field col-lg-6">
                        <input id="phone" class="input-text" type="text" name="">
                        <label for="phone" class="label">TLF NR:</label>
                    </div>
                    <div class="form-field col-lg-12">
                        <input id="message" class="input-text" type="text" name="">
                        <label for="message" class="label">BESKED</label>
                    </div>
                     <div class="form-field col-lg-12">
                         <input class="submit-btn" type="submit" value="submit" name="">
                    </div>
                </div>
            </div>
        </section>
  </div>
  
</template>

<style scoped>
.get_in_touch{
    max-width: 800px;
    margin: 50px auto;
    position: relative;
    box-shadow: 0 10px 30px 0px rgba(0, 0, 0, 0.1);
}
.get_in_touch .title{
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 3px;
    font-size: 3em;
    line-height: 48px;
    padding-bottom: 20px;
    color: #5543ca;
    background: linear-gradient(to right, #f4524d 0%, #5543ca 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.contact-form .form-field{
    position: relative;
    margin: 30px 0;
}
.contact-form .input-text{
    display: block;
    width: 100%;
    height: 36px;
    border-width: 0 0 2px 0;
    border-color: #5543ca;
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
}
.contact-form .input-text:focus + .label,
.contact-form .input-text.not-empty + .label{
    transform: translateY(-24px);
}
.contact-form .input-text:focus{
    outline: none;
}
.contact-form .label{
    position: absolute;
    left: 20px;
    bottom: 11px;
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    color: #5543ca;
    cursor: text;
    text-transform: capitalize;
    transition: transform 0.2s ease-in-out;
}
.contact-form .submit-btn{
    display: inline-block;
    background-image: linear-gradient(125deg, #a72879,#064497);
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 16px;
    padding: 8px 16px;
    border: none;
    width: 200px;
    cursor: pointer;
}
</style>