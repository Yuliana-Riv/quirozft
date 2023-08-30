<template>
    <div class="calculadora">
        <div class="pt0">
        <div class="sec1">
            <p class="tit1">¿Eres apto para un <br> <strong>procedimiento bariátrico?</strong></p>
            <p class="tit2">Calcula tu <strong class="tit2_1">BMI</strong></p>
        </div>
        <div class="sec2">
            <form action="">
            <div class="sec222">
        <div class="btn_estatura">
            <input name="estatura" v-model="altura" class="intext" type="text" placeholder="Estatura">
            <p class="txt1">cm</p>

        </div>
        <div class="btn_peso">
            <input class="intext" type="text" placeholder="Peso">
            <p class="txt1">kg</p>
        </div>
    </div>
        <div class="btn_calcular"> 
        <button class="inbtnc">Calcular</button>    
        </div>
    </form>
        <div class="resultado">
        <p class="txt2"></p>
        <p class="txt3">IMC</p>
        </div>
    </div>
</div>

<div class="sec3">
    <div class="sec3_1"></div>
    <div class="sec3_2">
        <p class="txt4">Peso inferior al normal</p>
        <p class="txt5">-18.5</p>

        <p class="txt4">Normal</p>
        <p class="txt5">18.5 – 24.9</p>

        <p class="txt4">Peso superior al normal</p>
        <p class="txt5">25.0 – 29.9</p>

        <p class="txt4">Obesidad</p>
        <p class="txt5">+30.0</p>
    </div>
</div>
    </div>

</template>

<script>

export default defineComponent({
    data: {
    peso: null,
    altura: null,
    bmi: null
  },
  methods: {
    calcularBMI: function() {
      const alturaMetros = this.altura / 100;
      this.bmi = this.peso / (alturaMetros ** 2);
    },
    interpretarBMI: function() {
      if (this.bmi < 18.5) {
        return 'Bajo peso';
      } else if (this.bmi >= 18.5 && this.bmi < 25) {
        return 'Peso normal';
      } else if (this.bmi >= 25 && this.bmi < 30) {
        return 'Sobrepeso';
      } else {
        return 'Obesidad';
      }
    }
  }

    
    })
</script>


<style scoped>

.sec3{
    display: none;
}
.pt0{
    width: 100vw;
    height: 163.04347826086956VW;
    background-image: url(../assets/bgbmi_mb.png);
    margin: 0vw;
}
.sec1{
    padding-top: 32.367149758454104VW;

}
.tit1{
    margin: 0vw;
    font-size: 4.3478260869565215VW;
    color: #FFFFFF;
    text-align: center;
    font-family: var(--redHatDisplay);
}

.tit2{
    font-size: 10.869565217391305VW;
    margin: 0vw;
    color: #FFFFFF;
    text-align: center;
    font-family: var(--redHatDisplay);
    font-weight: 500;

}

.tit2_1{
    color: #4678BA;
    font-weight: 900;
}

.sec2{
    padding-top: 15.458937198067632VW;
    padding-left: 21.618357487922705VW;
    padding-right: 21.618357487922705VW;
}

.btn_estatura{
    width: 56.763285024154584VW;
    height: 14.734299516908212VW;
    background-color: #FFFFFF;
    border-radius: 24.154589371980677VW;
    display: flex;

}
.intext{
    width: 38.20289855072464VW;
    background: none;
    border: none;
    font-size: 4.3478260869565215VW;
    color: #787878;
    font-weight: 400;
    padding-left: 6.763285024154589VW;
    font-family: var(--redHatDisplay);


}
.txt1{
    width: 10.38647342995169VW;    
    background: none;
    border: none;
    color: #787878;
    font-size: 4.3478260869565215VW;   
    font-family: var(--redHatDisplay);

}

.btn_peso{
    width: 56.763285024154584VW;
    height: 14.734299516908212VW;
    background-color: #FFFFFF;
    border-radius: 24.154589371980677VW;
    margin-top:7.729468599033816VW ;
    display: flex;


}

.btn_calcular{
    padding-top: 6.763285024154589VW;
    padding-left: 13.647342995169081VW;

}

.inbtnc{
   width: 29.468599033816425VW;
   height: 10.869565217391305VW; 
    background-color: #2B4A88;
    border: 1px solid #2B4A88;
    border-radius: 24.154589371980677VW; 
    margin: auto;
    color: #FFFFFF;
    font-family: var(--redHatDisplay);

}

.resultado{
    width: 56.763285024154584VW;
    height: 14.734299516908212VW;
    background-color: #FFFFFF;
    border-radius: 24.154589371980677VW;
    margin-top:7.971014492753622VW;
    display: flex;
}
.txt2{
width: 44.20289855072464VW;
    background: none;
    border: none;
}

.txt3{
width: 10.38647342995169VW;    
    background: none;
    border: none;
    color: #787878;
    font-size: 4.3478260869565215VW;
    font-family: var(--redHatDisplay);

}

@media (min-width: 768px) {

    .calculadora{
        display: flex;
        }
    .pt0{
        
        width: 49.947916666666664VW;
        height: 24.0625VW;
        background-image: url(../assets/BMI_bgpc.png);
        background-repeat: no-repeat;
    }

    .sec1{
        padding-top: 3.5416666666666665VW;
        padding-left: 8.677083333333334VW;
    }

    .tit1{
        font-size: 0.9375VW;
    }

    .tit2{
        font-size: 2.34375VW;
    }

    .tit2_1{
        font-size: 2.34375VW;
    }

    .sec2{
        padding-top: 3.4375000000000004VW;
        padding-left: 15.677083333333334VW;
    }

    .btn_estatura{
        width: 12.239583333333332VW;
        height: 3.4375000000000004VW;
    }
    
    .intext{
        width: 8.072916666666668VW;
        font-size: 0.9375VW;
        padding-left: 1.4583333333333333VW;
    }

    .txt1{
        font-size: 0.9375VW;
    }

    .btn_peso{
        width: 12.239583333333332VW;
        height: 3.4375000000000004VW;
        margin-top: 0vw;
        margin-left: 2.864583333333333VW;
    }

    .resultado{
        width: 12.239583333333332VW;
        height: 3.4375000000000004VW;
        margin-top: 0vw;
        margin-top: -3.3104166666666667VW;
    }

    .btn_calcular{
        padding-top: 0vw;
        padding-left: 15.104166666666666VW;
    }

    .txt2{
        width: 9.114583333333332VW;
    }
    .txt3{
        width: 0vw;
        font-size: 0.9375VW;
    }


    .inbtnc{
        width: 12.239583333333332VW;
        height: 3.4375000000000004VW;
        margin-top: 1.5104166666666667VW;
    }

    .sec222{
        display: flex;
    }

    .sec3{
        display: flex;
        width: 50.05208333333333VW;
        height: 24.0625VW;
        background-image:url(../assets/bg_pc.png) ;
        background-repeat: no-repeat;
    }

    .sec3_1{
        width: 12.1875VW;
        height: 23.489583333333332VW;
        background-image: url(../assets/marcador_pc.png);
        background-position-x: -0.3125VW;
        background-repeat: no-repeat;
    }
    .sec3_2{
        padding-left: 4.114583333333333VW;
        padding-top: 4.895833333333333VW;
        color: #FFFFFF;
        font-family: var(--redHatDisplay);
        font-size: 1.0416666666666665VW;
    }

    .txt4{
        font-weight: 500;
        margin: 0vw;
    }
    .txt5{
        font-weight: 900;
        margin: 0vw;
        padding-bottom: 1.378125VW;

    }
}

</style>