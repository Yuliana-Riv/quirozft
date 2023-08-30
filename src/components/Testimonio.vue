<template>
    <div id="Testimonios" class="Testimonio">
        <div class="showMV">
            <p class="B1T1">Testimonios</p>
            <Carousel
            :per-page="1"
            :mouse-drag="true"
            :navigation-enabled="false"
            :loop="true"
            :paginationEnabled="true"
            class="slideA"
            >
                <Slide v-for="(item, key) in 4" :key="key" class="Testimonio_Slide">
                    <div class="B2">
                        
                        <p class="B2T1">Yo me realice un bypass gástrico con el Dr. Quiroz hace un mes y ya perdí 20 kilos. La cirugía fue rápida así como la recuperación, sin ninguna molestia ni complicaciones, no he sentido ansiedad o ataques de hambre. En Hermosillo, Sonora hay muy buenos cirujanos bariatras como el Dr. Quiroz por lo que no hay necesidad de salir del Estado. En Sonora tenemos muy buena calidad tanto en médicos como en hospitales con excelentes instalaciones.</p>
                        <p class="B2T2">Clarissa</p>
                        <p class="B2T3">Bypass Gástrico</p>
                    
                    </div>
                </Slide>
            </Carousel>
            
        </div>
        <div class="showPC">
            <p class="B1T1">Testimonios</p>
            <Carousel
            :per-page="4"
            :mouse-drag="true"
            :navigation-enabled="false"
            :loop="true"
            :paginationEnabled="true"
            class="slideA"
            >
                <Slide v-for="(item, key) in 16" :key="key" class="Testimonio_Slide">
                    <div class="B2">
                        
                        <p class="B2T1">Yo me realice un bypass gástrico con el Dr. Quiroz hace un mes y ya perdí 20 kilos. La cirugía fue rápida así como la recuperación, sin ninguna molestia ni complicaciones, no he sentido ansiedad o ataques de hambre. En Hermosillo, Sonora hay muy buenos cirujanos bariatras como el Dr. Quiroz por lo que no hay necesidad de salir del Estado. En Sonora tenemos muy buena calidad tanto en médicos como en hospitales con excelentes instalaciones.</p>
                        <p class="B2T2">Clarissa</p>
                        <p class="B2T3">Bypass Gástrico</p>
                    
                    </div>
                </Slide>
            </Carousel>
            
        </div>
    </div>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';


export default {
    name:'Testimonio',
    data(){
        return{
            nextA: '<div class="divPrev0"><p class="NButton"><</p></div>',
            nextB: '<div class="divNext0"><p class="NButton">></p></div>',
        }
    },
    components: {
        Carousel, Slide
    }
}
</script>

<style scoped>
.Testimonio {
    width: 100%;
    background-color: #F9F9F9;
    padding-top: 19.32367149758454VW;
    padding-bottom: 17.874396135265698VW;
}

p.B1T1 {
    display: flex;
    justify-content: center;
    font-size: 7.246376811594203VW;
    line-height: 9.58695652173913VW;
    font-weight: 900;
    font-family: var(--redHatDisplay);
    color: #2B4A88;
    margin: 0vw;
    margin-bottom: 9.66183574879227VW;
}

.B2 {
    width: 71.73913043478261VW;
    max-height: 151.20772946859904VW;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    margin: auto;
    padding: 8.454106280193237VW 0vw;
}
    p.B2T1 {
        width: 54.347826086956516VW;
        height: fit-content;
        font-size: 4.3478260869565215VW;
        line-height: 6.521739130434782VW;
        font-family: var(--redHatDisplay);
        font-weight: 400;
        color: var(--color-9);
        margin: auto;
    }
    p.B2T2 {
        max-width: 54.347826086956516VW;
        font-size: 4.3478260869565215VW;
        line-height: 6.521739130434782VW;
        font-family: var(--redHatDisplay);
        font-weight: 700;
        color: var(--color-9);
        margin: 0vw;
        margin-left: 8.695652173913043VW;
        margin-top: 3.864734299516908VW;
    }
    p.B2T3 {
        max-width: 54.347826086956516VW;
        font-size: 4.3478260869565215VW;
        line-height: 6.521739130434782VW;
        font-family: var(--redHatDisplay);
        font-weight: 600;
        color: var(--color-9);
        margin: 0vw;
        margin-left: 8.695652173913043VW;
    }

.showPC {
    display: none;
}
/*query pc */
@media (min-width: 769px) {
    
    .showPC {
        display: block !important;
    }
    .showMV {
        display: none;
    }

    .Testimonio {
        padding-top: 5.729166666666666VW;
        padding-bottom: 4.8421875VW;
    }

    p.B1T1 {
        font-size: 2.083333333333333VW;
        line-height: 2.75625VW;
        margin-bottom: 2.2395833333333335VW;
    }

    .B2 {
        width: 20.572916666666664VW;
        max-height: 24.322916666666668VW;
        box-shadow: 0vw 0vw 0.5208333333333333VW rgba(0, 0, 0, 0.05);
        border-radius: 1.0416666666666665VW;
        padding: 1.8229166666666667VW 0vw;
    }
    p.B2T1 {
        width: 17.1875VW;
        font-size: 0.9375VW;
        line-height: 1.40625VW;
    }
    p.B2T2 {
        max-width: 17.1875VW;
        font-size: 0.9375VW;
        line-height: 1.40625VW;
        margin-left: 1.875VW;
        margin-top: 0.8333333333333334VW;
    }
    p.B2T3 {
        max-width: 17.1875VW;
        font-size: 0.9375VW;
        line-height: 1.40625VW;
        margin-left: 1.875VW;
    }

  
}

</style>