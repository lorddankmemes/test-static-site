<template>
    <div class="full-width full-height">
        <div class="bg-black">
           <div class="row box-both q-pt-xl">
                <div class="col-md-2 col-sm-2 col-xs-5">
                    <q-img src="../assets/dc/logohero.svg"></q-img>
                </div>
                <q-space />
                <div class="col-md-8 col-sm-8 col-xs-6 justify-between text-right q-gutter-lg">
                    <q-btn class="text-white header-button gt-xs">About</q-btn>
                    <q-btn class="text-white header-button gt-xs">Partnership</q-btn>
                    <q-btn class="text-white header-button gt-xs">Service</q-btn>
                    <q-btn class="bg-white header-button">Contact Us</q-btn>
                </div>
            </div>
            <q-separator dark class="lt-sm"/>
            <div class="row box">
                <div class="col-md-7 col-sm-7 col-xs-12">
                    <div class="text-hero">
                        Production Ready<br>Developers For You
                    </div>
                     <div class="text-herocaption text-white q-pt-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquet suspendisse sit nulla urna, accumsan egestas
                        eleifend hendrerit facilisi. Hac dolor ante.
                    </div>
                </div>
                <div class="col-md-5 col-sm-5 col-xs-8 picture-mobile">
                    <q-img src="../assets/dc/Hero1.png" style="width:100%; height:100%"></q-img>
                </div>
            </div>
        </div>

        <div class="bg-black q-pt-xl">
            <div><q-img src="../assets/dc/problem.png" class="problem-picture"></q-img></div>
            <div class="row q-pt-lg q-pb-xl">
                <div class="col-12 flex flex-center">
                    <q-card class="col-md-3 col-xs-5 problem-card" :class="{hover}"
                    @mouseover="hover = true" @mouseleave="hover = false">
                        Iqbal Baharum, tech<br>expert with a<br>background of more<br>than 10-years in the<br>Tech & Software<br>Industries.
                    </q-card>
                    <q-card class="col-md-3 col-xs-5 problem-card">
                        Iqbal Baharum, tech<br>expert with a<br>background of more<br>than 10-years in the<br>Tech & Software<br>Industries.
                    </q-card>
                    <q-card class="col-md-3 col-xs-5 problem-card">
                        Iqbal Baharum, tech<br>expert with a<br>background of more<br>than 10-years in the<br>Tech & Software<br>Industries.
                    </q-card>
                    <q-card class="col-md-3 col-xs-5 problem-card">
                        Iqbal Baharum, tech<br>expert with a<br>background of more<br>than 10-years in the<br>Tech & Software<br>Industries.
                    </q-card>
                </div>
            </div>
        </div>

        <div class="bg-option">
            <div class="row box">
                <div class="col-md-7 col-sm-10 col-xs-10" style="padding: 8% 20% 5% 0">
                    <div class="text-rufina q-pb-lg">
                    We provide two (2) options for you to fix your problem.
                    </div>

                    <div class="q-pb-md">
                       <q-expansion-item
                        group="faq"
                        expand-separator
                        expand-icon="add"
                        expand-icon-class="small-icon"
                        label="Hire a skilled part-timer"
                        header-class="text-option"
                        class="option-set"
                        style="border-top: white solid 1px;"
                        >
                            <q-card-section class="text-option2" style="border-top: white solid 1px; padding: 2% 5%; 2% 0%">
                                Click on the plus button icon above to add desired ticket amount, it will
                                automatically be added to the cart and you may just proceed to checkout once
                                you’re done.
                            </q-card-section>
                        </q-expansion-item>

                        <q-expansion-item
                        group="faq"
                        expand-separator
                        expand-icon="add"
                        expand-icon-class="small-icon"
                        label="Hire a skilled full-timer"
                        header-class="text-option "
                        class=""
                        style="border-top: white solid 1px; border-bottom: white solid 1px;"
                        >
                            <q-card-section class="text-option2" style="border-top: white solid 1px; padding: 2% 5%; 2% 0%">
                                Click on the plus button icon above to add desired ticket amount, it will
                                automatically be added to the cart and you may just proceed to checkout once
                                you’re done.
                            </q-card-section>
                        </q-expansion-item>
                    </div>
                </div>

                <div class="col-md-5 col-sm-7 col-xs-7 picture-mobile" style="padding: 3% 0 3% 0">
                    <q-img src="~assets/dc/pc.svg"></q-img>
                </div>
            </div>
        </div>

        <div class="bg-none">
            <div class="row">
                <div class="col-md-3 col-xs-12 text-rufina" style="background: #777777;  padding: 6% 4% 6% 4%;">
                    How the partnership works
                </div>
                <div class="col-md-3 col-xs-4 partner-card" style="background: #C4C4C4">
                    <div class="text-solution">STEP 1</div>
                    <div class="partner-image"><q-img src="~assets/dc/phone.svg" style="width:50%; height:60%;"></q-img></div>
                    <div class="text-weight-medium">Tell us your business<br>requirement.</div>
                </div>
                 <div class="col-md-3 col-xs-4 partner-card text-center" style="background: rgb(196, 196, 196, 0.74)">
                     <div class="text-solution">STEP 2</div>
                     <div class="partner-image"><q-img src="~assets/dc/calculator.svg" style="width:55%; height:60%;"></q-img></div>
                     <div class="text-weight-medium">Choose to hire a part-timer or full-timer.</div>
                </div>
                 <div class="col-md-3 col-xs-4 partner-card text-center" style="background: #C4C4C4">
                     <div class="text-solution">STEP 3</div>
                     <div class="partner-image"><q-img src="~assets/dc/dart.svg" style="width:55%; height:60%;"></q-img></div>
                     <div class="text-weight-medium">We find a talent that fits your requirement.</div>
                </div>
            </div>
        </div>

        <div class="bg-service q-pt-xl">
            <div class="text-center text-rufina text-black q-pt-xl">Solution By Services</div>
                <q-card class="k-card">
                    <div class="row justify-center text-center q-gutter-xl">
                        <div class="col-sm-3 col-xs-4">
                            <q-img src="~assets/dc/phone.png" style="width:65%; height:70%;"></q-img>
                            <div class="text-solution">Frontend <br>Development</div>
                            <div class="text-service">Once the project has done, client can decide to continue the contract.</div>
                        </div>
                        <div class="col-sm-3 col-xs-4">
                             <q-img src="~assets/dc/phone.png" style="width:65%; height:70%;"></q-img>
                            <div class="text-solution">Backend <br> Development</div>
                            <div class="text-service">Once the project has done, client can decide to continue the contract.</div>
                        </div>
                        <div class="col-sm-3 col-xs-4">
                             <q-img src="~assets/dc/phone.png" style="width:65%; height:70%;"></q-img>
                            <div class="text-solution">UI/UX and <br> Web Design</div>
                            <div class="text-service">Once the project has done, client can decide to continue the contract.</div>
                        </div>
                        <div class="col-sm-3 col-xs-4">
                            <q-img src="~assets/dc/phone.png" style="width:65%; height:70%;"></q-img>
                            <div class="text-solution">Payment Gateway Integration</div>
                            <div class="text-service">Once the project has done, client can decide to continue the contract.</div>
                        </div>
                        <div class="col-sm-3 col-xs-4">
                            <q-img src="~assets/dc/phone.png" style="width:65%; height:70%;"></q-img>
                            <div class="text-solution">Solution By Services</div>
                            <div class="text-service">Once the project has done, client can decide to continue the contract.</div>
                        </div>
                        <div class="col-sm-3 col-xs-4">
                            <q-img src="~assets/dc/phone.png" style="width:65%; height:70%;"></q-img>
                            <div class="text-solution">Solution By Services</div>
                            <div class="text-service">Once the project has done, client can decide to continue the contract.</div>
                        </div>
                    </div>
                </q-card>
                <div class="row k-service">
                    <div class="col-md-8 col-sm-8 col-xs-12 text-rufinasmall text-black">
                        What you're looking for was not covered at here ? We're glad to assist.
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12 text-center">
                        <q-btn no-caps color="white" class="client-button1 bg-black">Let's talk software!</q-btn>
                    </div>
                </div>
        </div>

  <!--        <div class="bg-portfolio q-pt-xl">
            <div class="row box">
                <div class="col-8 text-rufina q-py-xl">
                </div>
                <div class="col-4 q-pa-xl">
                </div>
            </div>
        </div> -->

         <div class="bg-option" style="padding: 7% 0 5% 0">
            <div class="row box">
                <div class="col-md-8 col-sm-8 col-xs-12">
                    <div class="text-rufina q-pt-md">
                        Want to form a partnership and<br>invest on our talent?
                    </div>
                     <div class="text-herocaption q-pt-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet<br>suspendisse sit nulla urna.
                    </div>
                    <div>
                        <q-btn no-caps color="white" class="client-button text-black">Discuss More</q-btn>
                    </div>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-8 q-pa-lg picture-mobile">
                    <q-img src="~assets/dc/partner.png"></q-img>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  data () {
    return {
      hover: false
    }
  }
}
</script>
