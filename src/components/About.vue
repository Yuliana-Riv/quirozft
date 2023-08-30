<template>
    <div id="Nuestro" class="about">
        <div class="video">
            <video src=""></video>
        </div>

        <div class="pt2">

            <p class="tit1">Nuestro compromiso</p>

            <p class="txt1">La salud y el bienestar de nuestros pacientes es lo primordial.</p>
            <p class="txt2">Por esto estamos en constante preparación y actualización para 
               brindar un servicio de la mejor calidad trabajando siempre con 
               equipo, materialy hospitales certificados y avalados por los 
               organismos correspondientes.</p>
            <p class="txt3">Estás en buenas manos.</p>
        </div>
</div>
</template>

<style scoped>
.about{

    padding-top: 9.178743961352657VW;
    padding-left: 13.526570048309178VW;
    padding-right: 13.526570048309178VW;

}
.pt1{

}

.video{
    display: none;
}
.tit1{
    font-size: 7.246376811594203VW;
    color: #2B4A88;
    font-weight: 900;
    padding-bottom: 4.5893719806763285VW;
    font-family: var(--redHatDisplay);

}
.pt2{
    width: 72.70531400966183VW;
    height: 78.26086956521739VW;
    font-size: 4.3478260869565215VW;
    color: #787878;
}
.txt1{
    padding-bottom: 3vw;
    font-family: var(--redHatDisplay);
    font-size: 4.3478260869565215VW;
}
.txt2{
    padding-bottom: 3vw;
    font-family: var(--redHatDisplay);
    font-size: 4.3478260869565215VW;
 
}
.txt3{
    font-weight: 700;
    font-family: var(--redHatDisplay);
    font-size: 4.3478260869565215VW;

}

@media (min-width: 768px) {

    .about{
        display: flex;
        padding-top: 0vw;
        padding-left: 0vw;
        padding-right: 0vw;
    }

    .parr{
        width: 33.125VW;
        height: 9.84375VW;
    }

    .video{
        display: block;
        width: 48.802083333333336VW;
        height: 36.45833333333333VW;

        
    }

    .pt2{
        width: 33.125VW;
        height: 36.45833333333333VW;

    }
    .tit1{
        font-size: 2.083333333333333VW;
        padding-top: 14.0625VW;
        margin: 0vw;
        padding-bottom: 0vw;
    }

    .txt1{
        font-size: 0.9375VW;
        margin: 0vw;
        padding-top: 1.9791666666666665VW;
        padding-bottom: 0.5791666666666665VW;
    }
    
    .txt2{
        font-size: 0.9375VW;
        padding-bottom: 0.5791666666666665VW;
        
    }

    .txt3{
        font-size: 0.9375VW;
    }
    
    
}
</style>