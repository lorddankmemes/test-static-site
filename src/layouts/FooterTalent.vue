<template>
    <div class="bg-dc">
            <div class="row box q-pa-lg gt-xs">
                <div class="col-md-1 col-sm-1 q-pt-xl q-mt-lg">
                   <q-img src="~assets/dc/dc.png"></q-img>
                </div>
                <div class="col-md-10 col-sm-10 q-pa-xl text-white q-gutter-y-lg">
                   <div class="row flex justify-center q-gutter-x-xl">
                        <div><a href="/Blog"><span class="text-white">+ ABOUT</span></a></div>
                        <div><a href="/Homepage"><span class="text-white">+ PATH</span></a></div>
                        <div><a href="/Homepage"><span class="text-white">+ BENEFITS</span></a></div>
                        <div><a href="/Homepage"><span class="text-white">+ ROADMAP</span></a></div>
                        <div><a href="/Homepage"><span class="text-white">+ MORE INFO</span></a></div>
                    </div>
                    <div class="row flex justify-center q-gutter-x-xl">
                        <div><a href="/Blog"><span class="text-white">+ AFTER DC</span></a></div>
                        <div><a href="/Homepage"><span class="text-white">+ FAQ</span></a></div>
                        <div><a href="/Homepage"><span class="text-white">+ CONTACT</span></a></div>
                        <div><a href="/Homepage"><span class="text-white">+ BUSINESS</span></a></div>
                    </div>
                    <div class="row flex justify-center q-gutter-x-xl" style="margin-top:9%; margin-bottom:-5%;">
                        <div>©2022 ACCEPTBY. All rights reserved.</div>
                        <div>www.digitalcultivation.com</div>
                    </div>
                </div>

                <div class="col-md-1 col-sm-1 q-py-xl q-gutter-y-md">
                    <div><img src="~assets/dc/discord.png" style="width:30%; height:30%;"></div>
                    <div><img src="~assets/dc/insta.png" style="width:30%; height:30%;"></div>
                    <div><img src="~assets/dc/fb.png" style="width:33%; height:32%;"></div>
                </div>
            </div>

<!-- mobile -->
        <div>
            <div class="row lt-sm justify-between q-pa-lg">
                <div class="col-xs-7 text-white">
                     <q-img class="q-mt-lg" src="../assets/dc/logohero.svg"></q-img>
                     <div class="text-service q-pt-md" style="margin-right:25%">Once the project has done, client can decide to continue the contract.</div>
                       <div class="q-my-md">
                        <div class="text-service text-white">Email us :</div>
                        <q-input dark dense outlined v-model="text" />
                     </div>
                     <div class="text-service text-white q-ml-md q-pt-lg"></div>
                     <div class="flex justify-center q-gutter-x-sm">
                        <div><img src="~assets/dc/discord.png" style="width:80%; height:80%;"></div>
                        <div><img src="~assets/dc/insta.png" style="width:80%; height:80%;"></div>
                        <div><img src="~assets/dc/fb.png" style="width:83%; height:82%;"></div>
                     </div>
                </div>

                <q-separator dark vertical inset />

                 <div class="col-xs-4 q-py-lg q-pl-md">
                     <q-img src="~assets/dc/map.png"></q-img>
                     <div class="text-service q-pt-md text-white">Lot 3905 Jalan Lombong Perak 2, Kampung Lombong Seksyen 29, 40460 Shah Alam.</div>
                </div>
            </div>
            <div class="row justify-center lt-sm">
             </div>
            </div>
            <div class="row justify-center lt-sm bg-grey text-reserved" style="padding: 2% 0 1% 0;">
                <div class="col-xs-10">
                    <div>©2022 ACCEPTBY. All rights reserved.</div>
                    <div>www.digitalcultivation.com</div>
                </div>
            </div>
        </div>
</template>
