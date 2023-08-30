<template>
    <div class="navigator" :class="{navigator_menu: check}">

        <div class="showMV">

            
            <div class="B1F1">
                <img class="B1F1_B1" v-if="!check" src="../../assets/default/logoBlue.svg">
                <img class="B1F1_B1" v-else src="../../assets/default/logoWhite.svg">
                <img class="B1F1_B2" v-if="!check" v-on:click="check=true" src="../../assets/default/menuCheck.png">
                <img class="B1F1_B2" v-else v-on:click="check=false" src="../../assets/default/menuQuit.png">
            </div>

            <div v-if="check" class="B2">

                <div class="B2F" :class="{B2FB: $route.name == 'Nuestro'}" v-on:click="savePos= 'Nuestro', check=false">
                    <a href="#Nuestro">Nuestro equipo</a>
                </div>
                <div class="B2F" :class="{B2FB: $route.name == 'BMI'}" v-on:click="savePos= 'BMI', check=false">
                    <a href="#BMI">Calcula tu BMI</a>
                </div>
                <div class="B2F" :class="{B2FB: $route.name == 'Servicios'}" v-on:click="savePos= 'Servicios', check=false">
                    <a href="#Servicios">Servicios</a>
                </div>
                <div class="B2F" :class="{B2FB: $route.name == 'Testimonios'}" v-on:click="savePos= 'Testimonios', check=false">
                    <a href="#Testimonios">Testimonios</a>
                </div>
                <div class="B2F" :class="{B2FB: $route.name == 'Blog'}" v-on:click="savePos= 'Blog', check=false">
                    <a href="#Blog">Blog</a>
                </div>
                <div class="B2F" :class="{B2FB: $route.name == 'Cuestionario'}" v-on:click="savePos= 'Cuestionario', check=false">
                    <a href="#Cuestionario">Cuestionario de Valoración</a>
                </div>
                <div class="B2F" :class="{B2FB: $route.name == 'Contacto'}" v-on:click="savePos= 'Contacto', check=false">
                    <a href="#Contacto">Contacto</a>
                </div>

                <div class="B3">
                    <img src="../../assets/default/FB.png">
                    <img src="../../assets/default/IG.png">
                    <img src="../../assets/default/TW.png">
                </div>
            
            </div>

        

        </div>

        <div class="B4 showPC">
        
            <img class="B1F1_B1" v-if="!check" src="../../assets/default/logoBlue.svg">

            <div class="B2F" :class="{B2FB: savePos == 'Home'}" v-on:click="savePos= 'Home'">
                <a href="#Inicio">Inicio</a>
            </div>
            <div class="B2F" :class="{B2FB: savePos == 'Equipo'}" v-on:click="savePos= 'Equipo'">
                <a href="#Equipo">Nuestro equipo</a>
            </div>
            <div class="B2F" :class="{B2FB: savePos == 'Servicios'}" v-on:click="savePos= 'Servicios'">
                <a href="#Servicios">Servicios</a>
            </div>
            <div class="B2F" :class="{B2FB: savePos == 'Cuestionario'}" v-on:click="savePos= 'Cuestionario'">
                <a href="#Cuestionario">Cuestionario de Valoración</a>
            </div>
            <div class="B2F" :class="{B2FB: savePos == 'Blog'}" v-on:click="savePos= 'Blog'">
                <a href="#Blog">Blog</a>
            </div>
            <div class="B2F" :class="{B2FB: savePos == 'Contacto'}" v-on:click="savePos= 'Contacto'">
                <a href="#Contacto">Contacto</a>
            </div>

            <div class="B3">
                <img src="../../assets/default/FB_B.svg">
                <img src="../../assets/default/IG_B.svg">
                <img src="../../assets/default/TW_B.svg">
                <img src="../../assets/default/Tiktok_B.svg">
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:'NAVIGATOR',
    data(){
        return{
            check: false,
            savePos: ''
        }
    }
}
</script>

<style scoped>

.navigator {
    width: 100%;
    position: fixed;
    z-index: 2000;
}

.navigator_menu {
    background-image: url('../../assets/default/backgBlue.png');
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
}

.B1F1 {
    width: 78.01932367149759VW;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    margin-top: 9.66183574879227VW;
    margin-bottom: 8.043478VW;
}

img.B1F1_B1{
    width: 39.130434782608695VW;
    height: auto;
}
img.B1F1_B2{
    width: auto;
    height: 7.246376811594203VW;
}

.B2F {
    width: fit-content;
    height: 16.908212560386474VW;
    display: flex;
    align-items: center;
    margin-left: auto;
}
.B2F a {
    width: 55.516908VW;
    margin: 0vw;
    font-size: 6.038647342995169VW;
    font-weight: 900;
    font-family: var(--redHatDisplay);
    color: white;
    margin-right: 11.11111111111111VW;
    text-align: right;
    line-height: 7.98792270531401VW;
}
.B2FB {
    background-color: var(--color-8);
    border-radius: 10vw 0vw 0vw 10vw;
}

.B3 {
    width: 49.275362318840585VW;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: 12.80193236714976VW;
    margin-top: 6.164251VW;
}
.B3 img {
    width: 13.54106280193237VW;
    height: auto;
}.showPC {
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

    img.B1F1_B1 {
        width: 11.510416666666666VW;
        margin-left: 8.59375VW;
        margin-right: 24.270833333333332VW;
    }
    .B4 {
        display: flex !important;
        height: 6.041666666666667VW;
        align-items: center;
    }
    .B2FB {
        background-color: var(--color-11);
        border-radius: 10vw;
    }
    .B2FB a {
        color: var(--color-5) !important;
    }
    .B2F {
        height: 1.6145833333333335VW;
        white-space: nowrap;
    }
    .B2F a {
        width: fit-content;
        margin: 0vw 0.78125VW;
        font-size: 0.8333333333333334VW;
        color: var(--color-10);
        margin-right: 0.78125VW;
        text-align: center;
        line-height: 1.1026041666666668VW;
        cursor: pointer;
    }

    .B3 {
        width: 5.052083333333333VW;
        margin-right: 8.645833333333334VW;
        margin-top: 0vw;
    }
    .B3 img {
        width: 0.9895833333333333VW;
        height: 0.9895833333333333VW;
        cursor: pointer;
    }
    
  
}

</style>