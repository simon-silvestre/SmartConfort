<template>
    <div class="homeContact">
        <h3>Connectez votre maison !</h3>
        <div>
            <p>Pilotez votre maison du bout des doigts ou laissez faire la magie de l’automatisation en toute sécurité.</p>
            <p>Nous vous fourniront un système clé en main.</p>
            <p>N’hesitez plus à nous contacter pour votre projet.</p>
        </div>
        <router-link to="/contact">Contact</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .homeContact {
        position: relative;
        width: 100%;
        height: 225px;
        background-color: #1faf8e;
    }
    h3 {
        font-size: 20px;
        padding: 30px 0 0 100px;
        color: #333;
    }
    .homeContact div {
        padding: 10px 0 0 100px;
    }
    .homeContact p {
        font-size: 15px;
        margin-top: 15px;
        width: 60%;
        color: #0d0d0d;
    }
    .homeContact a, h3 {
        text-transform: uppercase;
    }
    .homeContact a {
        position: absolute;
        top: calc(50% - 20px);
        right: 10%;
        padding: 10px 30px;
        background-color: #fff;
        border-radius: 5px;
        color: #126451;
        font-weight: 700;
        text-decoration: none;
    }
    @media screen and (max-width: 900px) {
        .homeContact {
            height: 315px;
        }
        h3 {
            padding: 30px 0 0 50px;
        }
        .homeContact div {
            padding: 10px 50px;
        }
        .homeContact p {
            width: 100%;
        }
        .homeContact a {
            position: relative;
            top: 40px;
            left: 40px;
        }
    }
    @media screen and (max-width: 445px) {
        .homeContact {
            height: 350px;
        }
        h3 {
            padding: 30px 0 0 0;
            font-size: 18px;
            text-align: center;
        }
        .homeContact p {
            font-size: 14px;
        }
        .homeContact a {
            position: relative;
            top: 40px;
            left: 50px
        }
    }
    @media screen and (max-width: 374px) { 
        .homeContact {
            height: 375px;
        }
    }
</style>