<template>
    <div class="full-height full-width">
        <div class="row">
            <div>
                <q-img src="~assets/dc/dc.png"></q-img>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12">
                <q-img src="~assets/dc/talentlanding.jpg" class="fit">
                <q-img src="~assets/dc/dc.png" class="q-ma-lg logo-landing"></q-img>
                <div class="transparent" style="margin: 50% 7% 0% 7%">
                    <div class="text-landingleft">For Talent</div>
                    <div class="text-leftcaption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor aliquet gravida vitae non volutpat. Auctor risus nulla pretium in ipsum. Id lorem blandit sit diam vitae enim.</div>
                </div>
                <div class="fit transparent button-landingleft" >
                    <q-btn
                    no-caps to="/talent"
                    class="left-landing"
                    :class="{hover}"
                    @mouseover="hover = true"
                    @mouseleave="hover = false"
                    >
                    Learn
                    </q-btn>
                </div>
                </q-img>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12">
                <q-img src="~assets/dc/clientlanding.jpg">
                <div class="transparent" style="margin: 50% 6% 0% 6%">
                    <div class="text-landingright">For Business</div>
                    <div class="text-rightcaption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor aliquet gravida vitae non volutpat. Auctor risus nulla pretium in ipsum. Id lorem blandit sit diam vitae enim.</div>
                </div>
                <div class="fit transparent button-landingright">
                    <q-btn
                    no-caps to="/business"
                    class="right-landing"
                    :class="{hover}"
                    @mouseover="hover = true"
                    @mouseleave="hover = false"
                    >
                    More</q-btn>
                </div>
                </q-img>
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
