<template>
    <div class="controleur">
        <h3>Contrôleur domotique</h3>
        <div class="controleur__itemsContainer">
            <div class="controleur__items">
                <img src="@/assets/controleur_icon1.webp" alt="logo">
                <p>Système de sécurité</p>
            </div>
            <div class="controleur__items">
                 <img src="@/assets/controleur_icon2.webp" alt="logo">
                <p>Vidéoprotection</p>
            </div>
            <div class="controleur__items">
                 <img src="@/assets/controleur_icon3.webp" alt="logo">
                <p>Éclairage</p>
            </div>
            <div class="controleur__items">
                 <img src="@/assets/controleur_icon4.webp" alt="logo">
                <p>Chauffage</p>
            </div>
        </div>
        <div class="controleur__itemsContainer">
            <div class="controleur__items">
                 <img src="@/assets/controleur_icon5.webp" alt="logo">
                <p>Consomations</p>
            </div>
            <div class="controleur__items">
                 <img src="@/assets/controleur_icon6.webp" alt="logo">
                <p>Motorisation</p>
            </div>
            <div class="controleur__items">
                 <img src="@/assets/controleur_icon7.webp" alt="logo">
                <p>Contrôle d’accès</p>
            </div>
            <div class="controleur__items">
                 <img src="@/assets/controleur_icon8.webp" alt="logo">
                <p>Multimédia</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .controleur {
        width: 100%;
        background-color: #2b2b2b;
        padding: 50px 0;
        color: #9e9e9e;
        margin-bottom: 75px;
    }
    h3 {
        width: 100%;
        text-align: center;
        padding-top: 30px;
        font-size: 30px;
        font-weight: 500;
    }
    .controleur__itemsContainer {
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 35px auto;
    }
    .controleur__items {
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 5%;
    }
    .controleur__items:nth-last-child(1) {
        margin-right: 0;
    }
    .controleur__items img {
        width: 80px;
        height: 80px;
        margin-bottom: 13%;
    }
    .controleur__items p {
        font-size: 14px;
    }
    @media screen and (max-width: 900px) {
        .controleur__items {
            width: 45%;
            margin: 0 0 30px 0;
        }
        h3 {
            font-size: 25px;
        }
        .controleur__itemsContainer {
            width: 100%;
            margin: 0 auto;
        }
        .controleur__itemsContainer {
            margin-top: 70px;
        }
        .controleur__itemsContainer:nth-last-child(1) {
            margin-top: 0px;
        }
    }
    @media screen and (max-width: 499px) {
        .controleur__items img {
        width: 60px;
        height: 60px;
    }
    }
</style>