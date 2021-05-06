<template>
  <div class="Ommig">
      <Navbar></Navbar>

<section class="mb-4">
    <!--Section heading-->
    <h2 class="h1-responsive font-weight-bold text-center my-4">KONTAKT</h2>


    <div class="row">

        <!--Grid column-->
        <div class="mb-4">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <label for="name" class="">NAVN</label>
                            <input type="text" id="name" name="name" class="form-control" placeholder="John"> 
                        </div>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <label for="email" class="">E-MAIL</label>
                            <input type="text" id="email" name="email" class="form-control" placeholder="name@example.com">
                        </div>
                    </div>
                    <!--Grid column-->

                </div>
                <!--Grid row-->


                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="message">BESKED</label>
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="BEKSED"></textarea>
                        </div>

                    </div>
                </div>
            </form>
            <div class="text-center text-md-left">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>
    </div>

</section>
  </div>
  
</template>