<template>
  <div class="domotique">
     <div id="video_domotique">
      <iframe src="https://www.youtube.com/embed/T1vsZjZcavk" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Domotique',
}
</script>

<style scoped>
  .domotique {
    margin-top: 80px;
  }
  #video_domotique {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px); 
    background-color: #1faf8e;
    font-size: 100px;
    font-weight: bold;
    color: #fff;
  }
  #video_domotique iframe {
    width: 80% ;
    height: 80%;
    border: none;
  }
</style>