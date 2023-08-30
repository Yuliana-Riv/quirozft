<template>
    <div class="equipo">

        <div class="pt_mb">
            <Carousel
                :per-page="1"
                :mouse-drag="true"
                :navigation-enabled="false"
                :loop="true"
                :paginationEnabled="true"
                class="slideC"
                >
                <Slide v-for="(item, key) in 2" :key="key" class="equipo_Slide">
                    <div class="parte1">
                        <p class="txt1">Líderes en <strong>cirugía</strong> y <strong>endoscopía bariátrica</strong>
                            con más de <strong>10 años de experiencia</strong></p>

                            <button class="btn1">Nuestro equipo</button>


                    </div>
                </Slide>
            </Carousel>
        </div>

        <div class="pt_pc">

            <p>Cita de valoración</p>
            <p>sin costo</p>

            <button>Llena el formulario</button>

        </div>

        <!--<div class="pt2">
            <div class="circle1"></div>
            <div class="circle2"></div>
        </div>-->

    </div>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';


export default {
    name: 'Equipo',
    data(){
        return{
            
        }
    },
    components: {
        Carousel, Slide
    }
}
</script>

<style scoped>
.equipo{
    height: 177.77777777777777VW;
    margin-top: 0vw;
}

.pt_pc{
    display: none;
}
.parte1{
    width:100vw ;
    height: 153.6231884057971VW;
    background-image: url(../assets/equipo_mb.png);
    margin: 0vw;
    background-repeat: no-repeat;
}
.txt1{
    width: 84.54106280193237VW;
    height: 35.02415458937198VW;
    font-family: var(--redHatDisplay);
    font-size: 7.246376811594203VW;
    color: #FFFFFF;
    margin: 0vw;
    padding-top: 104.58937198067633VW;
    padding-left: 7.729468599033816VW;
    padding-right: 7.729468599033816VW;
    text-align: center;
}

.btn1{
    width: 52.15458937198068VW;
    height: 15.869565217391305VW;
    border-radius: 24.154589371980677VW;
    background-color: #59C1AF;
    border: 3vw solid #FFFFFF;
    margin-top: 5.5VW;
    margin-left: 25.36231884057971VW;
    margin-right: 25.36231884057971VW;
    background-image: url(../assets/btnsig_mb.png);
    background-repeat: no-repeat;
    background-position-x: 34.68115942028986VW;
    background-position-y: center;
    color: #FFFFFF;
    font-family: var(--redHatDisplay);
    text-align: left;
    padding-left: 7.246376811594203VW;

}
.pt2{
display: flex;
padding-top: 11.83574879227053VW;
padding-left: 44.20289855072464VW;
}
.circle1{
    width: 5.314009661835748VW;
    height: 5.314009661835748VW;
    border-radius: 10vw;
    border: 1px solid #2B4A88;
    background-color: #2B4A88;
    margin-right: 2.4154589371980677VW;
}
.circle2{
    width: 5.314009661835748VW;
    height: 5.314009661835748VW;
    border-radius: 10vw;
    border: 1px solid #E9E9E9;
    background-color: #E9E9E9;
}



/*query pc */
@media (min-width: 769px) {

    .pt_pc{
        display: block;
        width: ;
        height: ;
    }
.parte1 {
    height: 57.623188VW;
}
.txt1 {
    padding-top: 8.589372VW;
}
.equipo {
    height: 68.777778VW;
}

.pt_mb{
    display: none;

}

}
</style>