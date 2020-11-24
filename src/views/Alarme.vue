<template>
  <div class="alarme-container">
    <div class="alarme">
      <div class="bandeau">
        <h2>Optez pour un système connecté !</h2>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="card__image">
            <img src="@/assets/intrusion.webp" alt="">
          </div>
          <div class="card__text">
            <p><strong>Alerte intrusion</strong></p>
            <p>Le système  détecte toutes tentatives d’intrusion, dissuade les intrus, donne l’alerte.</p>
          </div>
        </div>

        <div class="card">
          <div class="card__image">
            <img src="@/assets/fire.webp" alt="feu">
          </div>
          <div class="card__text">
            <p><strong>Alerte incendie</strong></p>
            <p>La centrale donne l’alerte en déclenchant une alarme sonore puissante en cas de début d’incendie.</p>
          </div>
        </div>

        <div class="card">
          <div class="card__image">
            <img src="@/assets/cctv.webp" alt="">
          </div>
          <div class="card__text">
            <p><strong>Surveillez à distance</strong></p>
            <p>Surveillez à distance votre maison à partir de votre smartphone ou tablette pour lever un doute en cas d'alerte.</p>
          </div>
        </div>

          <div class="card">
          <div class="card__image">
            <img src="@/assets/securite.webp" alt="">
          </div>
          <div class="card__text">
            <p><strong>Sécurité</strong></p>
            <p>Une centrale d’alarme vous assure une protection complète de votre maison ou de votre appartement.</p>
          </div>
        </div>
      </div>
        <a href="#video_alarme">
          <svg class="scrollDown" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512.008 512.008" style="enable-background:new 0 0 512 512" xml:space="preserve"><g>
            <path xmlns="http://www.w3.org/2000/svg" style="" d="M306.219,45.796c-21.838-21.838-57.245-21.838-79.083,0s-21.838,57.245,0,79.083l77.781,77.803  H53.333C23.878,202.682,0,226.56,0,256.015c0,29.455,23.878,53.333,53.333,53.333h251.584l-77.781,77.781  c-21.838,21.838-21.838,57.245,0,79.083c21.838,21.838,57.245,21.838,79.083,0l202.667-202.667c4.164-4.165,4.164-10.917,0-15.083  L306.219,45.796z" fill="#ffffff" data-original="#ff9800" class=""/>
            <path xmlns="http://www.w3.org/2000/svg" d="M266.667,482.575c-30.869,0.033-55.92-24.965-55.952-55.834c-0.016-14.859,5.886-29.112,16.4-39.611l77.803-77.781H53.333  C23.878,309.348,0,285.47,0,256.015c0-29.455,23.878-53.333,53.333-53.333h251.584L227.115,124.9  c-21.838-21.838-21.838-57.245,0-79.083s57.245-21.838,79.083,0l202.667,202.667c4.164,4.165,4.164,10.917,0,15.083L306.197,466.234  C295.716,476.719,281.492,482.599,266.667,482.575z M53.333,224.015c-17.673,0-32,14.327-32,32s14.327,32,32,32h277.333  c5.891-0.011,10.675,4.757,10.686,10.648c0.005,2.84-1.123,5.565-3.134,7.571l-96,96c-13.508,13.508-13.508,35.409,0,48.917  c13.508,13.508,35.409,13.508,48.917,0l195.115-195.136L291.115,60.9c-13.508-13.508-35.409-13.508-48.917,0  c-13.508,13.508-13.508,35.409,0,48.917l0,0l96,96c4.171,4.16,4.179,10.914,0.019,15.085c-2.006,2.011-4.731,3.139-7.571,3.134  L53.333,224.015z" fill="#1faf8e" data-original="#000000" style="" class=""/>
            <g xmlns="http://www.w3.org/2000/svg">
            </g>
            <g xmlns="http://www.w3.org/2000/svg">
            </g>
            <g xmlns="http://www.w3.org/2000/svg">
            </g>
            <g xmlns="http://www.w3.org/2000/svg">
            </g>
            <g xmlns="http://www.w3.org/2000/svg">
            </g>
            <g xmlns="http://www.w3.org/2000/svg">
            </g>
            <g xmlns="http://www.w3.org/2000/svg">
            </g>
            <g xmlns="http://www.w3.org/2000/svg">
            </g>
            <g xmlns="http://www.w3.org/2000/svg">
            </g>
            <g xmlns="http://www.w3.org/2000/svg">
            </g>
            <g xmlns="http://www.w3.org/2000/svg">
            </g>
            <g xmlns="http://www.w3.org/2000/svg">
            </g>
            <g xmlns="http://www.w3.org/2000/svg">
            </g>
            <g xmlns="http://www.w3.org/2000/svg">
            </g>
            <g xmlns="http://www.w3.org/2000/svg">
            </g>
            </g>
          </svg>
        </a>
    </div>
    <div id="video_alarme">
      <iframe src="https://www.youtube.com/embed/RRbvzVAwUr4" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'alarme',
  components: {
  }
}
</script>

<style scoped>
  .alarme-container {
    padding-top: 80px;
  }
  .alarme {
    color: #595959;
    min-height: calc(100vh - 80px);
  }
  .bandeau {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
    background: #1faf8e;
  }
  .alarme h2 
  {
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 30px;
    color: #000;
  }
  .alarme .card-container {
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 60px auto;
  }
  .alarme .card-container .card {
    width: 400px;
    display: flex;
    margin: 50px 50px;
  }
  .card .card__image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 82px;
    height: 82px;
    border-radius: 50%;
  }
  .card-container .card:nth-child(1) .card__image {
    background-color: #ff0015;
  }
  .card-container .card:nth-child(1) .card__image img {
    width: 40px;
    margin-bottom: 4px;
  }
  .card-container .card:nth-child(2) .card__image {
    background-color: #f77b08;
  }
  .card-container .card:nth-child(3) .card__image {
    background-color: #3880ca;
  }
  .card-container .card:nth-child(3) .card__image img {
    margin-left: 5px;
  }
  .card-container .card:nth-child(4) .card__image {
    background-color: #1faf8e;
  }
  .card__image img {
    width: 45px;
    height: auto;
  }
  .card .card__text {
    width: 310px;
    margin-left: 20px;
    font-size: 15px;
  }
  .card__text p:nth-child(2) {
    margin-top: 5px;
  }
  .card .card__text p:nth-child(1) {
    font-size: 16px;
  }
  .scrollDown {
    position: relative;
    height: 40px;
    width: auto;
    left: calc(50% - 20px);
    cursor: pointer;
    transition: all .3s ease-in-out;
    transform: rotateZ(90deg);
  }
  .scrollDown path {
    transition: all .3s ease-in-out;
  }
  .scrollDown:hover {
    transform: rotateZ(90deg) scale(1.2);
  }
  .scrollDown:hover path {
    fill: #1faf8e;
  }
  #video_alarme {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px); 
    background-color: #1faf8e;
    font-size: 100px;
    font-weight: bold;
    color: #fff;
  }
  #video_alarme iframe {
    width: 80% ;
    height: 80%;
    border: none;
  }
  @media screen and (max-width: 550px) {
    .alarme h2 
    {
      font-size: 5vw;
    }
    .alarme .card-container {
      margin: 40px auto 80px auto;
    }
    .alarme .card-container .card {
      flex-direction: column;
      align-items: center;
       margin: 30px 50px;
    }
    .card .card__text {
     margin: 20px 0 0 0;
     text-align: center;
    }
    .scrollDown {
      display: none;
    }
  }
  @media screen and (max-width: 450px) {
    .bandeau {
      height: 80px;
    }
  }
</style>