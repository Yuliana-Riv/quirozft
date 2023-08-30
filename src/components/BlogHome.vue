<template>
    <div id="Blog" class="BlogHome">
        <p class="F1">Blog</p>
        <p class="F2">Información útil para tu día a día</p>
        <div class="F3">
            <div class="F3F1">
                <div class="F3F1_B1 showMV">
                    <p>Problemas de reflujo después de una cirugía bariátrica</p>
                    <a>Leer más</a>
                </div>
                <div class="F3F1_B2">
                    <p>Post-operatorio</p>
                    <div class="F3F1_B2F2 showPC">
                        <p>Problemas de reflujo después de una cirugía bariátrica</p>
                        <a>Leer más</a>
                    </div>
                </div>
            </div>
            <div class="F3F2 showMV">
                <Carousel
                :per-page="1"
                :mouse-drag="true"
                :navigation-enabled="false"
                :loop="true"
                :paginationEnabled="false"
                class="slideB"
                >
                    <Slide v-for="(item, key) in 4" :key="key" class="Testimonio_Slide">
                        <div class="F3F2_B0">
                            <div class="F3F2_B1">
                                <div class="F3F2_B1B1">
                                    <p>Post-operatorio</p>
                                </div>
                            </div>
                            <div class="F3F2_B2">
                                <p>El embarazo después de una cirugía bariátrica</p>
                                <a>Leer más</a>
                            </div>
                        </div>
                    </Slide>
                </Carousel>
            </div>
            <div class="F3F2 showPC">
                <Carousel
                :per-page="2"
                :mouse-drag="true"
                :navigation-enabled="false"
                :loop="true"
                :paginationEnabled="false"
                class="slideB"
                >
                    <Slide v-for="(item, key) in 4" :key="key" class="Testimonio_Slide">
                        <div class="F3F2_B0">
                            <div class="F3F2_B1">
                                <div class="F3F2_B1B1">
                                    <p>Post-operatorio</p>
                                </div>
                            </div>
                            <div class="F3F2_B2">
                                <p>El embarazo después de una cirugía bariátrica</p>
                                <a>Leer más</a>
                            </div>
                        </div>
                    </Slide>
                </Carousel>
            </div>
        </div>
        <div class="F4">
            <p>Ir al blog</p>
            <img class="showPC" src="./../assets/bt_right.png">
        </div>
    </div>
</template>

<<script>

import { Carousel, Slide } from 'vue-carousel';


export default {
    name: 'BlogHome',
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

.BlogHome {
    padding-top: 14.492753623188406VW;
    padding-bottom: 12.318840579710146VW;
}

p.F1 {
    display: flex;
    justify-content: center;
    font-size: 7.246376811594203VW;
    font-family: var(--redHatDisplay);
    line-height: 9.58695652173913VW;
    font-weight: 900;
    color: #2B4A88;
    margin: 0vw;
}
p.F2 {
    display: flex;
    justify-content: center;
    font-size: 4.3478260869565215VW;
    font-family: var(--redHatDisplay);
    font-weight: 400;
    color: var(--color-9);
    margin: 0vw;
    margin-bottom: 8.695652173913043VW;
}

.F3F1 {
    display: flex;
    justify-content: end;
    margin-bottom: 4.3478260869565215VW;
}
.F3F1_B1 {
    width: 46.61835748792271VW;
    height: 38.164251207729464VW;
    border-radius: 4.830917874396135VW 0VW 0vw 4.830917874396135VW;
    background-color: #F5F5F5;
}
.F3F1_B1 p {
    width: 37.92270531400966VW;
    font-size: 4.3478260869565215VW;
    font-family: var(--redHatDisplay);
    font-weight: 700;
    color: var(--color-10);
    line-height: 5.751207729468598VW;
    margin: 0vw;
    padding-top: 4.1062801932367154VW;
    margin-left: 5.314009661835748VW;
}
.F3F1_B1 a {
    font-size: 2.898550724637681VW;
    font-family: var(--redHatDisplay);
    font-weight: 700;
    color: var(--color-11);
    text-decoration-line: underline;
    margin: 0vw;
    margin-left: 5.314009661835748VW;
}

.F3F1_B2 {
    display: flex;
    justify-content: end;
    width: 44.44444444444444VW;
    max-height: 38.164251207729464VW;
    background-image: url('./../assets/blog/gastric.png');
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 5.314009661835748VW;
}
.F3F1_B2 p {
    font-size: 2.898550724637681VW;
    font-family: var(--redHatDisplay);
    font-weight: 700;
    color: var(--color-11);
    margin: 0vw;
    
    width: 27.77777777777778VW;
    height: 7.246376811594203VW;
    border-radius: 8.830918VW 0VW 0vw 8.830918VW;
    border: 0.1vw solid var(--color-11);
    display: flex;
    align-items: center;
    justify-content: center;
}


.F3F2 {
    width: 90vw;
    margin-left: auto;
}
.F3F2_B0 {
    
}
.F3F2_B1 {
    display: flex;
    justify-content: end;
    width: 46.61835748792271VW;
    height: 28.26086956521739VW;
    max-height: 38.164251207729464VW;
    background-image: url('./../assets/blog/preg.png');
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 5.314009661835748VW;
    border-radius: 5vw 5vw 0vw 0vw;
}
.F3F2_B1B1 p {
    font-size: 2.898550724637681VW;
    font-family: var(--redHatDisplay);
    font-weight: 700;
    color: var(--color-11);
    margin: 0vw;
}
.F3F2_B1B1 {
    width: 27.77777777777778VW;
    height: 7.246376811594203VW;
    border-radius: 8.830918VW 0VW 0vw 8.830918VW;
    border: 0.1vw solid var(--color-11);
    display: flex;
    align-items: center;
    justify-content: center;
}

.F3F2_B2 {
    width: 46.61835748792271VW;
    height: 28.019323671497588VW;
    border-radius: 0VW 0vw 4.830917874396135VW 4.830917874396135VW ;
    background-color: #F5F5F5;
}
.F3F2_B2 p {
    width: 37.92270531400966VW;
    max-height: 15.217391304347828VW;
    font-size: 4.3478260869565215VW;
    font-family: var(--redHatDisplay);
    font-weight: 700;
    color: var(--color-10);
    line-height: 5.113526570048309VW;
    margin: 0vw;
    padding-top: 2.898550724637681VW;
    margin-left: 5.314009661835748VW;
}
.F3F2_B2 a {
    font-size: 2.898550724637681VW;
    font-family: var(--redHatDisplay);
    font-weight: 700;
    color: var(--color-11);
    text-decoration-line: underline;
    margin: 0vw;
    margin-left: 5.314009661835748VW;
}



.F4 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 29.227053140096622VW;
    height: 10.869565217391305VW;
    background-color: var(--color-12);
    border-radius: 9vw;
    margin: auto;
    margin-top: 9.903381642512077VW;
}
.F4 p {
    font-size: 3.864734299516908VW;
    font-weight: 700;
    font-family: var(--redHatDisplay);
    color: var(--color-5);
    margin: 0vw;
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


    p.F1 {
        font-size: 2.083333333333333VW;
        line-height: 2.75625VW;
    }
    p.F2 {
        font-size: 0.9375VW;
        margin-bottom: 3.4375000000000004VW;
    }


    .F3 {
        display: flex;
    }
    .F3F1 {
        margin-bottom: 0vw;
    }
    .F3F1_B2 {
        display: block;
        width: 43.28125VW;
        max-height: 20.15625VW;
        padding-top: 0vw;
        border-radius: 1.0416666666666665VW;
        margin-right: 2.1354166666666665VW;
        margin-left: 5.677083333333333VW;
    }
    .F3F1_B2 p {
        font-size: 0.625VW;
        color: var(--color-5);
        background-color: var(--color-11);
        width: 6.666666666666667VW;
        height: 1.5625VW;
        margin-left: auto;
        margin-top: 1.25VW;
    }
    .F3F1_B2F2 {
        margin-top: 9.53125VW;
    }
    .F3F1_B2F2 p {
        font-size: 1.5625VW;
        color: var(--color-5);
        width: 36.666666666666664VW;
        height: 4.166666666666666VW;
        border-radius: 0VW;
        border: 0vw solid var(--color-11);
        background-color: transparent !important;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 2.8125VW;
        margin-bottom: 1.09375VW;
        line-height: 2.0671874999999997VW;
    }
    .F3F1_B2F2 a {
        font-size: 0.625VW;
        font-weight: 700;
        font-family: var(--redHatDisplay);
        color: var(--color-11);
        text-decoration-line: underline;
        cursor: pointer;
        margin-left: 2.8125VW;
    }


    .F3F2_B1 {
        width: 20.572916666666664VW;
        height: 12.447916666666666VW;
        max-height: 38.164251207729464VW;
        padding-top: 0vw;
        border-radius: 1.0416666666666665VW 1.0416666666666665VW 0vw 0vw;
    }
    .F3F2_B2 {
        width: 20.572916666666664VW;
        height: 7.708333333333334VW;
        border-radius: 0VW 0vw 1.0416666666666665VW 1.0416666666666665VW;
    }
    .F3F2_B1B1 {
        width: 6.666666666666667VW;
        height: 1.5625VW;
        border: 0vw solid var(--color-11);
        background-color: var(--color-11);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1.25VW;
    }
    .F3F2_B1B1 p {
        font-size: 0.625VW;
        color: var(--color-5);
    }
    .F3F2_B2 p {
        width: 17.03125VW;
        max-height: 2.7083333333333335VW;
        font-size: 1.0416666666666665VW;
        line-height: 1.378125VW;
        padding-top: 1.4583333333333333VW;
        margin-left: 1.5625VW;
    }
    .F3F2_B2 a {
        font-size: 0.625VW;
        margin-left: 1.5625VW;
        cursor: pointer;
    }

    .F4 {
        width: 11.744791666666666VW;
        height: 3.4375000000000004VW;
        border-radius: 9vw;
        margin-top: 3.958333333333333VW;
    }
    .F4 p {
        font-size: 1.0416666666666665VW;
        cursor: pointer;
    }
    .F4 img {
        width: 0.9114583333333334VW;
        height: auto;
        margin-left: 0.4166666666666667VW;
    }

}
</style>