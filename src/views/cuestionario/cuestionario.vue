<template >
    <div id="cuestionario">
      <div class="cnt_cuest">
         <div v-if="page == 1">
            <p class="tlt_cst">Cuestionario de Valoración
            para procedimientos
            bariátricos</p>
           <p class="br_cst"></p>

           <p class="prf_cst">Los datos proporcionados en el siguiente cuestionario son necesarios para proceder con su cita de valoración.</p>
           <p class="prf_cst">Su información será utilizada única y exclusivamente para valorar la cirugía.</p>
           <p class="prf_cst">Los términos y condiciones solo aplican si procede a agendar su cirugía.</p>


           <div class="dflxc">
            <div @click="page =2" class="btn_cst">
            <p>Comenzar</p>
            <img src="../../assets/cuestionario/next.svg" alt="siguiente">
           </div>
           </div>
           <div class="dflxc">
             <a class="cst_cancel" href="/">Cancelar</a>
           </div>
          
        

         </div>
         <div v-if="page == 2">
            <p class="tlt_cst">Datos personales</p>
           <p class="br_cst"></p>

           <div class="grp_cst">
                <label for="first_name"> Nombre(s)<span>*</span> </label>
                <input v-model="first_name" type="text" name="first_name" :placeholder="'Nombre'">
           </div>
           <div class="grp_cst mtp2">
                <label for="last_name"> Apellido(s)<span>*</span> </label>
                <input v-model="last_name" type="text" name="last_name" :placeholder="'Apellidos'">
           </div>
           <div class="grp_cst mtp2">
                <label for="email"> Correo electrónico<span>*</span> </label>
                <input v-model="email" type="email" name="email" class="ch" :placeholder="'Correo PROPIO, no el de otro paciente.'">
           </div>
           <div class="grp_cst mtp2">
                <label for="phone"> Número de télefono<span>*</span> </label>
                <input v-model="phone" type="text" name="phone" :placeholder="'10 dígitos'">
           </div>
           <div class="grp_cst mtp2">
                <label for="date_of_birth"> Fecha de Nacimiento<span>*</span> </label>
                <input v-model="date_of_birth" type="date" name="date_of_birth" :placeholder="'DD/MM/AAA'">
           </div>

           <div class="grp_cst mtp2">
                <label > Dirección<span>*</span> </label>
                <input v-model="street_address" type="text" name="street_address" :placeholder="'Calle'">
                <div class="dflx">
                    <input class="mdinp" v-model="num_ext" type="text" name="num_ext" :placeholder="'Número Ext'">
                    <input class="mdinp" v-model="num_int" type="text" name="num_int" :placeholder="'Número Int'">
                </div>
                <div class="select_ctr" @click="mostrar_paises = !mostrar_paises" :class="{'activo' : mostrar_paises ==true}">
                    <p>{{ country }}</p> <img v-if="!mostrar_paises" src="../../assets/cuestionario/abajo.svg" alt="">
                    <img v-else src="../../assets/cuestionario/arriba.svg" alt="">
                </div>
                <div class="cnt_paises" v-if="mostrar_paises">
                    <div class="pais_ctr" v-for="(pais, index) in paises" :key="'pais_'+index" @click="country =pais, mostrar_paises =false">
                       <p> {{ pais }}</p>
                    </div>
                </div>
                <input v-model="state" type="text" name="state" :placeholder="'Estado'">
                <input v-model="city" type="text" name="city" :placeholder="'Ciudad'">
                <input v-model="zip_code" type="text" name="zip_code" :placeholder="'Código Postal'">
           </div>

           <div class="grp_cst mtp2">
                <label > Género<span>*</span> </label>
                <div class="dflx">
                    <div class="bx_gn"  @click="gender ='Femenino'">
                        <img v-if="gender=='Femenino'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>Femenino</p>
                    </div>
                    <div class="bx_gn" @click="gender ='Masculino'">
                        <img v-if="gender=='Masculino'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>Masculino</p>
                    </div>
                </div>
           </div>

           <div class="grp_cst mtp2">
                <label for="occupation"> Ocupación </label>
                <input v-model="occupation" type="text" name="occupation" :placeholder="'Ocupación'">
           </div>
           <div class="grp_cst mtp2">
                <label for="height"> Estatura<span>*</span> </label>
                <input v-model="height" type="text" name="height" :placeholder="'Estatura en cm'">
           </div>
           <div class="grp_cst mtp2">
                <label for="current_weight">Peso actual<span>*</span> </label>
                <input v-model="current_weight" type="text" name="current_weight" :placeholder="'Peso en kg'">
           </div>
           <div class="grp_cst mtp2">
                <label > ¿Cómo se enteró de nosotros?<span>*</span> </label>
               
                <div class="select_ctr" @click="mostrar_entero = !mostrar_entero" :class="{'activo' : mostrar_entero ==true}">
                    <p v-if="!p1">Seleccionar</p> <p v-else>{{ p1 }}</p> <img v-if="!mostrar_entero" src="../../assets/cuestionario/abajo.svg" alt="">
                    <img v-else src="../../assets/cuestionario/arriba.svg" alt="">
                </div>
                <div class="cnt_paises" v-if="mostrar_entero">
                    <div class="pais_ctr"  @click="p1 ='Amigo / Familia', mostrar_entero =false">
                       <p> Amigo / Familia</p>
                    </div>
                    <div class="pais_ctr"  @click="p1 ='Google', mostrar_entero =false">
                       <p> Google </p>
                    </div>
                    <div class="pais_ctr"  @click="p1 ='Facebook', mostrar_entero =false">
                       <p> Facebook </p>
                    </div>
                    <div class="pais_ctr"  @click="p1 ='Instagram', mostrar_entero =false">
                       <p> Instagram </p>
                    </div>
                    <div class="pais_ctr"  @click="p1 ='Social Media', mostrar_entero =false">
                       <p> Social MediaSocial Media </p>
                    </div>
                    <div class="pais_ctr"  @click="p1 ='Sitio Web', mostrar_entero =false">
                       <p> Sitio Web </p>
                    </div>
                    <div class="pais_ctr"  @click="p1 ='Otro', mostrar_entero =false">
                       <p> Otro </p>
                    </div>
                </div>
                
           </div>



           <div class="dflxc">
            <div @click="page =3" class="btn_cst">
            <p>Siguiente</p>
            <img src="../../assets/cuestionario/next.svg" alt="siguiente">
           </div>
           </div>
           
           <div class="dflxc">
            <p @click="page =1" class="cst_back">Regresar</p>
           </div>
        

         </div>
         <div v-if="page == 3">
            <p class="tlt_cst">Preferencias de Cirugía</p>
           <p class="br_cst"></p>

           <div class="grp_cst mtp2">
                <label > ¿Ha tenido un procedimiento bariátrico previo?<span>*</span> </label>
                <div class="dflx">
                    <div class="bx_gn"  @click="p2 ='Si'">
                        <img v-if="p2=='Si'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>Si</p>
                    </div>
                    <div class="bx_gn" @click="p2 ='No'">
                        <img v-if="p2=='No'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>No</p>
                    </div>
                </div>
           </div>

         
         
           <div class="grp_cst mtp2" v-if="p2=='No' ||  p2=='Si'">
                <label v-if="p2=='No'"> ¿Qué procedimiento le interesa<span>*</span> </label>
                <label v-if="p2=='Si'" > Procedimiento bariátrico previo<span>*</span> </label>


                <div class="select_ctr" @click="mostrar_p3 = !mostrar_p3" :class="{'activo' : mostrar_p3 ==true}">
                    <p v-if="!p3">Seleccionar</p> <p v-else>{{ p3 }}</p> <img v-if="!mostrar_p3" src="../../assets/cuestionario/abajo.svg" alt="">
                    <img v-else src="../../assets/cuestionario/arriba.svg" alt="">
                </div>
                <div class="cnt_paises" v-if="mostrar_p3">
                    <div class="pais_ctr"  @click="p3 ='Manga gástrica', mostrar_p3 =false">
                       <p> Manga gástrica</p>
                    </div>
                    
                </div>
                
           </div>

           <!-- PENDIENTE VALIDAR LAS POSIBLES PREGUNTAS -->
           <div class="grp_cst mtp2" >
                <label > Escoja a su coordinador<span>*</span> </label>
               
                <div class="select_ctr" @click="mostrar_p4 = !mostrar_p4" :class="{'activo' : mostrar_p4 ==true}">
                    <p v-if="!p4">Seleccionar</p> <p v-else>{{ p4 }}</p> <img v-if="!mostrar_p4" src="../../assets/cuestionario/abajo.svg" alt="">
                    <img v-else src="../../assets/cuestionario/arriba.svg" alt="">
                </div>
                <div class="cnt_paises hg_at" v-if="mostrar_p4">
                    <div class="pais_ctr"  @click="p4 ='Raul', mostrar_p4 =false">
                       <p> Raul</p>
                    </div>
                    
                </div>
                
           </div>



           <div class="dflxc">
            <div @click="page =4" class="btn_cst">
            <p>Siguiente</p>
            <img src="../../assets/cuestionario/next.svg" alt="siguiente">
           </div>
           </div>
           
           <div class="dflxc">
            <p @click="page =2" class="cst_back">Regresar</p>
           </div>
        

         </div>

         <div v-if="page == 4">
           <p class="tlt_cst">Condiciones médicas actuales</p>
           <p class="br_cst"></p>

         <!-- hep -->
           <div class="grp_cst mtp2">
                <label > ¿Le han diagnosticado hepatitis?<span>*</span> </label>
                <div class="dflx">
                    <div class="bx_gn"  @click="p5 ='Si'">
                        <img v-if="p5=='Si'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>Si</p>
                    </div>
                    <div class="bx_gn" @click="p5 ='No'">
                        <img v-if="p5=='No'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>No</p>
                    </div>
                </div>
           </div>
           <div class="grp_cst mtp2"  v-if="p5 =='Si'">
                <label > Tipo de Hepatitis<span>*</span> </label>
               
                <div class="select_ctr" @click="mostrar_p6 = !mostrar_p6" :class="{'activo' : mostrar_p6 ==true}">
                    <p v-if="!p6">Seleccionar</p> <p v-else>{{ p6 }}</p> <img v-if="!mostrar_p6" src="../../assets/cuestionario/abajo.svg" alt="">
                    <img v-else src="../../assets/cuestionario/arriba.svg" alt="">
                </div>
                <div class="cnt_paises hg_at" v-if="mostrar_p6">
                    <div class="pais_ctr"  @click="p6 ='A', mostrar_p6 =false">
                       <p> A</p>
                    </div>
                    <div class="pais_ctr"  @click="p6 ='B', mostrar_p6 =false">
                       <p> B</p>
                    </div>
                    <div class="pais_ctr"  @click="p6 ='C', mostrar_p6 =false">
                       <p> C</p>
                    </div>
                    
                </div>
                
           </div>

           <div class="grp_cst mtp2" v-if="p5 =='Si'">
                <label > ¿Se ha tratado la hepatitis? <span>*</span> </label>
                <div class="dflx">
                    <div class="bx_gn"  @click="p7 ='Si'">
                        <img v-if="p7=='Si'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>Si</p>
                    </div>
                    <div class="bx_gn" @click="p7 ='No'">
                        <img v-if="p7=='No'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>No</p>
                    </div>
                </div>
           </div>
         
          <!-- fin hep -->
                  <!-- vih -->
          <div class="grp_cst mtp2">
                <label > ¿Le han diagnosticado VIH?<span>*</span> </label>
                <div class="dflx">
                    <div class="bx_gn"  @click="p8 ='Si'">
                        <img v-if="p8=='Si'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>Si</p>
                    </div>
                    <div class="bx_gn" @click="p8 ='No'">
                        <img v-if="p8=='No'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>No</p>
                    </div>
                </div>
           </div>

           <div class="grp_cst mtp2" v-if="p8 =='Si'">
                <label for="p9"> Fecha del diagnóstico<span>*</span> </label>
                <input v-model="p9" type="date" name="p9" :placeholder="'DD/MM/AAA'">
           </div>
           <div class="grp_cst mtp2" v-if="p8 =='Si'">
                <label > ¿Se ha tratado la VIH? <span>*</span> </label>
                <div class="dflx">
                    <div class="bx_gn"  @click="p10 ='Si'">
                        <img v-if="p10=='Si'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>Si</p>
                    </div>
                    <div class="bx_gn" @click="p10 ='No'">
                        <img v-if="p10=='No'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>No</p>
                    </div>
                </div>
           </div>
            <!-- fin vih -->
             <!-- diabe -->
            <div class="grp_cst mtp2">
                <label > ¿Es usted diabetico?<span>*</span> </label>
                <div class="dflx">
                    <div class="bx_gn"  @click="p11 ='Si'">
                        <img v-if="p11=='Si'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>Si</p>
                    </div>
                    <div class="bx_gn" @click="p11 ='No'">
                        <img v-if="p11=='No'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>No</p>
                    </div>
                </div>
           </div>

           <div class="grp_cst mtp2" v-if="p11 =='Si'">
                <label for="p12"> Tipo de diabetes <span>*</span>  </label>
                <input v-model="p12" type="text" name="p12" :placeholder="''">
           </div>

           <div class="grp_cst mtp2" v-if="p11 =='Si'">
                <label for="p13"> ¿Cómo se controla la diabetes? <span>*</span>  </label>
                <input v-model="p13" type="text" name="p13" :placeholder="''">
           </div>

            
           
           
           <!-- fin diabe -->
           <!-- transfusiones -->
           <div class="grp_cst mtp2">
                <label > ¿Está usted en contra de las transfusiones sanguíneas?<span>*</span> </label>
                <div class="dflx">
                    <div class="bx_gn"  @click="p14 ='Si'">
                        <img v-if="p14=='Si'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>Si</p>
                    </div>
                    <div class="bx_gn" @click="p14 ='No'">
                        <img v-if="p14=='No'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>No</p>
                    </div>
                </div>
           </div>

           <div class="grp_cst mtp2" v-if="p14 =='Si'">
                <label for="p15"> ¿Razón para rechazar transfusiones de sangre?<span>*</span>  </label>
                <input v-model="p15" type="text" name="p15" :placeholder="''">
           </div>
           <!-- fin transfusiones -->
                  <!-- alergias -->
                  <div class="grp_cst mtp2">
                <label >¿Tiene alguna alergia?<span>*</span> </label>
                <div class="dflx">
                    <div class="bx_gn"  @click="p16 ='Si'">
                        <img v-if="p16=='Si'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>Si</p>
                    </div>
                    <div class="bx_gn" @click="p16 ='No'">
                        <img v-if="p16=='No'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>No</p>
                    </div>
                </div>
           </div>

           <div class="grp_cst mtp2" v-if="p16 =='Si'">
                <label for="p17"> Tipo de alergias <span>*</span>  </label>
                <input v-model="p17" type="text" name="p17" :placeholder="''">
           </div>
           <div class="grp_cst mtp2" v-if="p16 =='Si'">
                <label for="p18"> ¿Reacciones alérgicas? <span>*</span>  </label>
                <input v-model="p18" type="text" name="p18" :placeholder="''">
           </div>
           <!-- fin alergias -->
           <div class="grp_cst mtp2">
                <label >¿Ha tenido alguna cirugía para tratar el reflujo gastroesofágico?<span>*</span> </label>
                <p class="sbtext"> ej. Funduplicatura de Nissen</p>
                <div class="dflx">
                    <div class="bx_gn"  @click="p19 ='Si'">
                        <img v-if="p19=='Si'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>Si</p>
                    </div>
                    <div class="bx_gn" @click="p19 ='No'">
                        <img v-if="p19=='No'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>No</p>
                    </div>
                </div>
           </div>
           <div class="grp_cst mtp2"  v-if="p19 =='Si'">
                <label > Cirugía previa<span>*</span> </label>
               
                <div class="select_ctr" @click="mostrar_p20 = !mostrar_p20" :class="{'activo' : mostrar_p20 ==true}">
                    <p v-if="!p20 && p20_otra==false">Seleccionar</p> <p v-else-if="p20_otra==true">Otra</p>  <p v-else>{{ p20 }}</p> <img v-if="!mostrar_p20" src="../../assets/cuestionario/abajo.svg" alt="">
                    <img v-else src="../../assets/cuestionario/arriba.svg" alt="">
                </div>
                <div class="cnt_paises hg_at" v-if="mostrar_p20">
                    <div class="pais_ctr"  @click="p20 ='Funduplicatura de Nissen', mostrar_p20 =false, p20_otra=false">
                       <p> Funduplicatura de Nissen</p>
                    </div>
                    <div class="p20 pais_ctr"  @click="p20 ='', mostrar_p20 =false, p20_otra= true">
                       <p> Otra</p>
                    </div>
                   
                    
                </div>
                <input v-if="p20_otra==true" v-model="p20" type="text" name="p20" :placeholder="''" >
                
           </div>

           <div class="grp_cst mtp2" v-if="p19 =='Si'">
                <label >Procedimiento Tipo <span>*</span> </label>
                <div class="">
                    <div class="bx_gn"  @click="p21 ='Laparoscopia'">
                        <img v-if="p21=='Laparoscopia'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>Laparoscopico</p>
                    </div>
                    <div class="bx_gn" @click="p21 ='Incisión abierta'">
                        <img v-if="p21=='Incisión abierta'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>Incisión abierta</p>
                    </div>
                    <div class="bx_gn" @click="p21 ='No estoy seguro'">
                        <img v-if="p21=='No estoy seguro'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>No estoy seguro</p>
                    </div>
                </div>
           </div>
           <div class="grp_cst mtp2" v-if="p19 =='Si'">
                <label for="p22">Fecha Procedimiento  <span>*</span> </label>
                <input v-model="p22" type="date" name="p22" :placeholder="'DD/MM/AAA'">
           </div>
            <!-- fin reflujo-->
            <div class="grp_cst mtp2">
                <label >¿Ha sido diagnosticado con Hernia Hiatal, sin ser tratada?<span>*</span> </label>
                <div class="dflx">
                    <div class="bx_gn"  @click="p23 ='Si'">
                        <img v-if="p23=='Si'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>Si</p>
                    </div>
                    <div class="bx_gn" @click="p23 ='No'">
                        <img v-if="p23=='No'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>No</p>
                    </div>
                </div>
           </div>



           <div class="dflxc">
            <div @click="page =5" class="btn_cst">
            <p>Siguiente</p>
            <img src="../../assets/cuestionario/next.svg" alt="siguiente">
           </div>
           </div>
           
           <div class="dflxc">
            <p @click="page =3" class="cst_back">Regresar</p>
           </div>
        

         </div>

         <div v-if="page == 5">
           <p class="tlt_cst">Medicación actual</p>
           <p class="br_cst"></p>

           <div class="grp_cst mtp2">
                <label >¿Actualmente esta tomando algun medicamento?<span>*</span> </label>
                <div class="dflx">
                    <div class="bx_gn"  @click="p24 ='Si'">
                        <img v-if="p24=='Si'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>Si</p>
                    </div>
                    <div class="bx_gn" @click="p24 ='No'">
                        <img v-if="p24=='No'" src="../../assets/cuestionario/on.svg" alt="">
                        <img v-else src="../../assets/cuestionario/off.svg" alt="">
                        <p>No</p>
                    </div>
                </div>
           </div>

           <div v-if="p24=='Si'" class="box_med">

            <div class="box_med_cnt">

                <div class="grp_cst2 mtp2" >
                    <label for="medicamento"> Medicamento<span>*</span>  </label>
                    <input v-model="medicamento" type="text" name="medicamento" :placeholder="''">
                </div>
                <div class="grp_cst2 mtp2" >
                    <label for="dosis"> Dosis/Frecuencia<span>*</span>  </label>
                    <input v-model="dosis" type="text" name="dosis" :placeholder="''">
                </div>
                <div class="grp_cst2 mtp2" >
                    <label for="razon"> Razón de uso<span>*</span>  </label>
                    <input v-model="razon" type="text" name="razon" :placeholder="''">
                </div>

                <div class="dflxc">
                <img class="icon_box" src="../../assets/cuestionario/Más.svg" alt="" @click="addMedicamento(medicamento, dosis, razon)">
                <img class="icon_box" src="../../assets/cuestionario/Borrar.svg" alt="" @click="medicamento ='', dosis='', razon=''">
            </div>

                <p class="subtxt">Agrega o elimina medicamentos con los botones superiores. </p>
           
                <p class="br_cst mtp2" v-if="medicamentos.length >0"></p>
                <p v-if="medicamentos.length>=14" class="subtxt"> Maximo de registros superado ({{ medicamentos.length }}).</p>
                <div v-for="(item, index) in medicamentos" :key="'medicamento_'+index">
                    <div class="grp_cst2 mtp2" >
                    <label for="medicamento"> Medicamento<span>*</span>  </label>
                    <input v-model="medicamentos[index].medicamento" type="text" name="medicamento" :placeholder="''">
                </div>
                <div class="grp_cst2 mtp2" >
                    <label for="dosis"> Dosis/Frecuencia<span>*</span>  </label>
                    <input v-model="medicamentos[index].dosis" type="text" name="dosis" :placeholder="''">
                </div>
                <div class="grp_cst2 mtp2" >
                    <label for="razon"> Razón de uso<span>*</span>  </label>
                    <input v-model="medicamentos[index].razon" type="text" name="razon" :placeholder="''">
                </div>

                <div class="dflxc">
                <img class="icon_box" src="../../assets/cuestionario/Más.svg" alt="" @click="addMedicamento(medicamentos[index].medicamento, medicamentos[index].dosis, medicamentos[index].razon)">
                <img class="icon_box" src="../../assets/cuestionario/Borrar.svg" alt="" @click="delMedicamento(index)">
               </div>
                </div>
                <p v-if="medicamentos.length>=14" class="subtxt"> Maximo de registros superado ({{ medicamentos.length }}).</p>
                <p class="br_cst mtp2" v-if="medicamentos.length >0"></p>

            </div>


           </div>




           <div class="dflxc">
            <div @click="page =6" class="btn_cst">
            <p>Siguiente</p>
            <img src="../../assets/cuestionario/next.svg" alt="siguiente">
           </div>
           </div>
           
           <div class="dflxc">
            <p @click="page =4" class="cst_back">Regresar</p>
           </div>
         </div>

         <div v-if="page == 6">
           <p class="tlt_cst">Enfermedades</p>
           <p class="br_cst"></p>


           <div class="dflxc">
            <div @click="page =7" class="btn_cst">
            <p>Siguiente</p>
            <img src="../../assets/cuestionario/next.svg" alt="siguiente">
           </div>
           </div>
           
           <div class="dflxc">
            <p @click="page =5" class="cst_back">Regresar</p>
           </div>
         </div>

         <div v-if="page == 7">
           <p class="tlt_cst">Cirugías</p>
           <p class="br_cst"></p>


           <div class="dflxc">
            <div @click="page =8" class="btn_cst">
            <p>Siguiente</p>
            <img src="../../assets/cuestionario/next.svg" alt="siguiente">
           </div>
           </div>
           
           <div class="dflxc">
            <p @click="page =6" class="cst_back">Regresar</p>
           </div>
         </div>

         <div v-if="page == 8">
           <p class="tlt_cst">Salud</p>
           <p class="br_cst"></p>


           <div class="dflxc">
            <div @click="page =9" class="btn_cst">
            <p>Siguiente</p>
            <img src="../../assets/cuestionario/next.svg" alt="siguiente">
           </div>
           </div>
           
           <div class="dflxc">
            <p @click="page =7" class="cst_back">Regresar</p>
           </div>
         </div>

         <div v-if="page == 9">
           <p class="tlt_cst">Dieta</p>
           <p class="br_cst"></p>


           <div class="dflxc">
            <div @click="page =10" class="btn_cst">
            <p>Siguiente</p>
            <img src="../../assets/cuestionario/next.svg" alt="siguiente">
           </div>
           </div>
           
           <div class="dflxc">
            <p @click="page =8" class="cst_back">Regresar</p>
           </div>
         </div>

         <div v-if="page == 10">
           <p class="tlt_cst">¿Tiene alguna pregunta para el médico o el coordinador?*</p>
           <p class="br_cst"></p>


           <div class="dflxc">
            <div @click="page =11" class="btn_cst">
            <p>Siguiente</p>
            <img src="../../assets/cuestionario/next.svg" alt="siguiente">
           </div>
           </div>
           
           <div class="dflxc">
            <p @click="page =9" class="cst_back">Regresar</p>
           </div>
         </div>
         <div v-if="page == 11">
           <p class="tlt_cst">Cuestionario terminado.</p>
           <p class="br_cst"></p>
         </div>


      
      </div>
    </div>
</template>
<script>

import {paises} from '../../global/index'
export default {
    name:'cuestionario',
    data(){
        return{
            first_name:"",
            last_name:"",
            email:"",
            phone:"", 
            date_of_birth:"", 
            street_address:"", 
            num_ext:"", 
            num_int:"",
            city:"", 
            state:"", 
            country:"País", 
            zip_code:"",
            gender:"Femenino", 
            occupation:"",
            height:"", 
            current_weight:"", 
            p1:"",p2:"",p3:"",p4:"",p5:"",p6:"",p7:"",p8:"",p9:"",
            p10:"", p11:"",p12:"",p13:"",p14:"",p15:"",p16:"",p17:"", p18:"",p19:"",
            p20:"", p21:"",p22:"",p23:"",p24:"",p25:"",p26:"",p27:"",p28:"",p29:"",
            p30:"", p31:"",p32:"",p33:"",p34:"",p35:"",p36:"",p37:"",p38:"",p39:"",
            p40:"", p41:"",p42:"",p43:"",p44:"",p45:"",p46:"",p47:"",p48:"",p49:"",
            p50:"", p51:"",p52:"",p53:"",p54:"",p55:"",p56:"",p57:"",p58:"",p59:"",
            p60:"", p61:"",p62:"",p63:"",p64:"",p65:"",p66:"",p67:"",p68:"",p69:"",
            p70:"", p71:"",p72:"",p73:"",p74:"",p75:"",p76:"",p77:"",p78:"",p79:"",
            p80:"", p81:"",p82:"",p83:"",p84:"",p85:"",p86:"",p87:"",p88:"",p89:"",
            p90:"", p91:"",p92:"",
            page:5,
            paises,
            mostrar_paises:false,
            mostrar_entero:false,
            mostrar_p3: false,
            mostrar_p4: false,
            mostrar_p6: false,
            mostrar_p20: false,
            p20_otra:false,
            medicamentos:[],
            medicamento:'',
            dosis:'',
            razon:'',


        }
    },
   async created(){
        await this.getIdentity();
    },
    computed:{
        identity() {
         return this.$store.getters["admin/getIdentity"];
        },
    },
    methods:{
        getIdentity: async function () {
            let response = await this.$store.dispatch("admin/getData");
            return response;
        },  
        addMedicamento(medicamento, dosis, razon){
            if(!medicamento || !dosis || !razon) return;
            if(this.medicamentos.length>=14) return;

            this.medicamentos.push({medicamento, dosis, razon})
            this.medicamento =''
            this.dosis =''
            this.razon =''
        },
        delMedicamento(index){
            let newarr=[]
            for(var i=0; i<this.medicamentos.length; i++){
                if(i!=index)newarr.push(this.medicamentos[i])
            }
            this.medicamentos = newarr

            
        }
    }

}
</script>
<style scoped>
    #cuestionario{
        display: flex;
        justify-content: center;
    }
    .cnt_cuest{
      width: 78.019vw;
      margin-top: 10.386vw;
    }
    .br_cst{
        height: 1px;
        border-bottom: 1px solid #4678BA;
        margin: 0vw;
        margin-bottom: 10.386vw;
    }
    p.tlt_cst{
        color: #4678BA;
        font-weight: 700;
        font-size: 5.797vw;
        font-family: 'Red Hat Display';
        line-height: 7.669vw;
        margin: 0vw;
        margin-bottom: 2.657vw;
    }

    p.prf_cst{
        color: #787878;
        font-weight: 500;
        font-size: 4.348vw;
        font-family: 'Red Hat Display';
        line-height: 5.751vw;
    }
    .btn_cst{
        display: flex;
        width: 39.493vw;
        background-color: #59C1AF;
        border-radius: 52vw;
        align-items: center;
        justify-content: center;
        margin-top: 10.386vw;
        margin-bottom: 3.623vw;
        cursor: pointer;
    }
    .btn_cst p{
        font-weight: 700;
        font-size: 3.865vw;
        font-family: 'Red Hat Display';
        line-height: 5.114vw;
        color: #FFFFFF;
        margin-right: 1.932vw;
    }

    a.cst_cancel{
        font-weight: 700;
        font-size: 3.865vw;
        font-family: 'Red Hat Display';
        line-height: 5.114vw;
        margin: 0vw;
        color: #4678BA;
        border-bottom: 0.5vw solid #4678BA;
        margin-bottom: 10.386vw;
    }
    p.cst_back{
        font-weight: 700;
        font-size: 3.865vw;
        font-family: 'Red Hat Display';
        line-height: 5.114vw;
        margin: 0vw;
        color: #4678BA;
        border-bottom: 0.5vw solid #4678BA;
        margin-bottom: 10.386vw;
    }

    .grp_cst label{
       color: #2B4A88;
       font-weight: 700;
        font-size: 4.831vw;
        font-family: 'Red Hat Display';
        line-height: 5.114vw;
     
    }
    .grp_cst label span{
      color: #FF0000;
      font-weight: 400;
        font-size: 4.831vw;
        font-family: 'Red Hat Display';
        line-height: 5.114vw;
    }
    .grp_cst input{
        width: 75.604vw; 
          margin-top: 2.415vw;
          color: #4678BA;
          font-weight: 700;
        font-size: 4.831vw;
        font-family: 'Red Hat Display';
        line-height: 5.114vw;
        border: 1px solid #2B4A88;
        height: 14.976vw;
        border-radius: 2.415vw;
        padding-left: 2.415vw;
    }
    .grp_cst input::placeholder{
        font-weight: 300;
        color: #4678BA;
        font-style: italic;
      
    }
    .grp_cst input.ch::placeholder{
        font-size: 4vw;
    }

    .grp_cst2 label{
       color: #2B4A88;
       font-weight: 600;
        font-size: 4.831vw;
        font-family: 'Red Hat Display';
        line-height: 5.114vw;
     
    }
    .grp_cst2 label span{
      color: #FF0000;
      font-weight: 400;
        font-size: 4.831vw;
        font-family: 'Red Hat Display';
        line-height: 5.114vw;
    }
    .grp_cst2 input{
        width: 65.604vw; 
          margin-top: 2.415vw;
          color: #4678BA;
          font-weight: 600;
        font-size: 4.831vw;
        font-family: 'Red Hat Display';
        line-height: 5.114vw;
        border: 1px solid #2B4A88;
        height: 11.594vw;
        border-radius: 2.415vw;
        padding-left: 2.415vw;
    }
    .grp_cst2 input::placeholder{
        font-weight: 300;
        color: #4678BA;
        font-style: italic;
      
    }
    .grp_cst2 input.ch::placeholder{
        font-size: 4vw;
    }
    
    .mtp2{
        margin-top: 6.039vw;
    }
    input.mdinp{
        width: 34vw !important;
    }
    input.mdinp:first-child{
        margin-right: 4.106vw;
    }

    .select_ctr{
        width: 75.604vw; 
        margin-top: 2.415vw;
        border: 1px solid #2B4A88;
        height: 14.976vw;
        border-radius: 2.415vw;
        padding-left: 2.415vw;
        display: flex;
        align-items: center;
    }
    .select_ctr p{
        color: #2B4A88;
          font-weight: 700;
        font-size: 4.831vw;
        font-family: 'Red Hat Display';
        line-height: 5.114vw;
        width: 64.628vw;
        cursor: pointer;
    }
    .select_ctr img{
        width: 7.039vw;
        height: 2.932vw;
    }

    .select_ctr.activo{
        border-radius:2.415vw 2.415vw  0vw 0vw   ;
    }
    .cnt_paises{
        height: 80.5vw;
        width: 78vw; 
        overflow: auto;
        border-top: 0vw;
        border-left: 1px solid #2B4A88;
        border-bottom: 1px solid #2B4A88;
        border-right: 1px solid #2B4A88;
        border-radius: 0vw 0vw 2.415vw 2.415vw   ;

    }
    .pais_ctr{
        width: 100%; 
   
        border-bottom: 1px solid #2B4A88;

        padding: .5vw;

        height: 14.976vw;
        cursor: pointer;
        padding-left: 2.415vw;
        display: flex;
        align-items: center;
    }
  
    .pais_ctr p{
        color: #2B4A88;
          font-weight: 300;
        font-size: 4.831vw;
        font-family: 'Red Hat Display';
        line-height: 5.114vw;
        width: 64.628vw;
       
    }

    .bx_gn{
        display: flex;
        margin-top: 2.415vw;
    }
    .bx_gn img{
       width: 8.937vw;
       height: 8.937vw;
    }
    .bx_gn p{
        color: #2B4A88;
       font-weight: 700;
        font-size: 4.831vw;
        font-family: 'Red Hat Display';
        line-height: 5.114vw;
        margin: 0vw;
        margin-left: 1.691vw;
        display: flex;
        align-items: center;
      
    }

    .bx_gn:first-child{
       margin-right: 11.111vw;
    }
 
 .hg_at{
    height: auto !important;
 }

 p.sbtext{
    margin: 0vw;
    color: #787878;
    font-weight: 400;
        font-size: 3.865vw;
        font-family: 'Red Hat Display';
        line-height: 5.114vw;
 }
 p.subtxt{
    margin: 0vw;
    color: #787878;
    font-weight: 400;
        font-size: 3.865vw;
        font-family: 'Red Hat Display';
        line-height: 5.114vw;
        text-align: center;
        display: flex;
        margin-top: 4.106vw;
 }
 .box_med{
    width:78.435vw;
    display: flex;
    justify-content: center;
    background-color: #f8f8f8;
    border-radius: 4.831vw;
    margin-top: 4.589vw;
    margin-bottom: 4.589vw;
    padding-top: 7.005vw;
    padding-bottom: 7.005vw;
 }
 .box_med_cnt{
    width: 68.599vw;
 }

 img.icon_box{
    width: 12.319vw;
    height: 12.319vw;
    margin-top: 7.005vw;
    cursor: pointer;
 }
 img.icon_box:first-child{
 margin-right: 5.314vw;
 }
</style>