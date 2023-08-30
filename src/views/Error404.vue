<template >
  <div class="error-404">
    <div class="e404c">
      <img src="../assets/default/404.png" alt="404" class="c404i" />
      <section>
        <p class="title">404 Error</p>
        <p class="subt">Parece que esta página no existe.</p>
        <a href="/">
          <div class="btn-404">Volver a Inicio</div>
        </a>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "Error404",
  data() {
    return {
      status: "error",
      message: "",
    };
  },
  components: {},
};
</script>
<style scoped>
.error-404 {
  background: rgb(51, 51, 51);
  width: 100%;
  height: 100vh;
}
.error-404 p {
  margin: 0;
  color: #f5f5f5;
}
.error-404 p.title {
  font-family: "Sora";
  font-style: normal;
}
.error-404 p.subt {
  font-family: "Mukta";
  font-style: normal;
}
.error-404 .btn-404 {
  font-family: "Sora";
  font-style: normal;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 768px) {
  .error-404 {
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .e404c {
    padding-top: 42.512vw;
    margin: auto;
    width: 66.667vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .error-404 .c404i {
    width: 43.478vw;
    margin-bottom: 9.179vw;
  }
  .error-404 p.title {
    font-weight: 700;
    font-size: 12.077vw;
    line-height: 15.217vw;
    text-align: center;
  }
  .error-404 p.subt {
    font-weight: 400;
    font-size: 4.831vw;
    line-height: 7.971vw;
    text-align: center;
  }
  .error-404 a {
    width: 47.585vw;
    display: flex;
    margin: 10.628vw auto 0;
  }
  .error-404 .btn-404 {
    width: 47.585vw;
    height: 13.043vw;
    border: 0.121vw solid #FFFFFF;
    border-radius: 7.246vw;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 3.382vw;
    line-height: 4.348vw;
  }
}
@media (min-width: 768px) {
  .error-404 {
  
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .e404c {
    padding: 18.021vw 0 0 12.188vw;
    display: flex;
    flex-direction: row-reverse;
    width: fit-content;
  }
  .error-404 section {
    margin-right: 3.125vw;
  }
  .error-404 p.title {
    margin-top: 4.323vw;
    font-weight: 700;
    font-size: 3.438vw;
    line-height: 4.323vw;
  }
  .error-404 p.subt {
    font-weight: 400;
    font-size: 1.042vw;
    line-height: 1.719vw;
    margin-bottom: 2.292vw;
  }
  .error-404 section a {
    text-decoration-color: transparent;
    font-weight: 700;
    font-size: 0.729vw;
    line-height: 0.938vw;
    display: flex;
    width: fit-content;
  }
  .error-404 .btn-404 {
    width: 10.26vw;
    height: 2.813vw;
    border: 0.026vw solid #FFFFFF;
    border-radius: 1.563vw;
    color: #FFFFFF;
  }
  .error-404 .c404i {
    width: 16.458vw;
  }
}
</style>