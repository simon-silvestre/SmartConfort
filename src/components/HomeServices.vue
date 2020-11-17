<template>
    <section class="homeServices">
        <h2>Nos services</h2>
        <div class="homeServices__separateur">
            <span class="line"></span>
            <span class="cercle"></span>
            <span class="line"></span>
        </div>
        <p class="text-separateur">Installateur, alarme, Vidéoprotection, intégrateur domotique, nous disposons de compétences dans le domaine de la vente, le conseil et  l’installation.</p>
        <div class="homeServices__items">
            <div class="homeServices__img">
                <img src="@/assets/smarthome.webp" alt="maison connectée">
            </div>
            
            <div class="items_container">
                 <div class="item">
                    <div class="item__logo">
                        <span class="cercle"></span>
                        <img src="@/assets/icon_alarm.webp" alt="alarme">
                    </div>
                    <div class="item__description">
                        <p><strong>alarme / sécurité</strong></p>
                        <p>Système de sécurité  pour votre domicile ou petit commerce. Protégez vos chantiers, (Télésurveillance avec vidéo) installation rapide sans besoin électrique (Location au mois)</p>
                    </div>
                </div>

                <div class="item">
                    <div class="item__logo">
                        <span class="cercle"></span>
                        <img src="@/assets/icon_camera.webp" alt="camera">
                    </div>
                    <div class="item__description">
                        <p><strong>Video surveillance</strong></p>
                        <p>Avec la Vidéoprotection, vérifiez que vos enfants sont bien rentrés de l’école ou levez un doute après un déclenchement d’alarme.</p>
                    </div>
                </div>

                <div class="item">
                    <div class="item__logo">
                        <span class="cercle"></span>
                        <img src="@/assets/icon_domotic.webp" alt="maison">
                    </div>
                    <div class="item__description">
                        <p><strong>domotique</strong></p>
                        <p>Installations Domotique. (Sans travaux ni dégradation de votre intérieur) Pilotez votre chauffage, vos éclairages, votre alarme et volets roulant depuis votre smartphone.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>

export default {

}
</script>

<style scoped>
    .homeServices {
        width: 100%;
        margin-top: 50px;
        margin-bottom: 120px;
    }
    h2 {
        font-size: 35px;
        text-transform: uppercase;
        text-align: center;
    }
    .homeServices__separateur {
        display: flex;
        justify-items: center;
        align-items: center;
        width: fit-content;
        margin: 15px auto;
    }
    .homeServices__separateur .line {
        width: 60px;
        border: solid 1px #dfdfe0;
    }
    .cercle {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #1faf8e;
        margin: 0 4px;
    }
    .text-separateur {
        width: 50%;
        min-width: 280px;
        text-align: center;
        margin: 0 auto;
    }
    .homeServices p {
        font-size: 14px;
        font-weight: 600;
        color: #595959;
    }
    .homeServices__items {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 50px;
    }
    .homeServices__img {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .homeServices__img img {
        width: 70%;
        height: auto;
    }
    .items_container {
        width: 40%;
        margin: 20px 40px 0 40px;
    }
    .item {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }
    .item__logo {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 1px solid #dfdfe0;
        margin-right: 30px;
    }
    .item__logo img {
        width: 50%;
        height: auto;
    }
    .item__logo .cercle {
       position: absolute;
       width: 12px;
       height: 12px;
       top: 18px;
       left: 48px;
       border: 2px solid #fff;
    }
    .item .item__description {
        width: 75%;
    }
    .item__description p {
        margin-top: 3px;
    }
    .item__description strong {
        font-size: 15px;
        color: #000;
        font-weight: 800;
        text-transform: uppercase;
    }

    @media screen and (max-width: 1114px) {
        .items_container {
            width: 100%;
        }
    }
    @media screen and (max-width: 650px) {
        .item {
            flex-direction: column;
            text-align: center;
            margin-top: 50px;
        }
        .item__logo {
            margin: 0 0 10px
        }
        .item .item__description {
            width: 90%;
        }
    }
</style>