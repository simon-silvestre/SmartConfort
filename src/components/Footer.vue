<template>
    <div class="footer">
        <div class="footer__logo" v-scroll-reveal="{ duration: 1200, delay: 100, origin: 'bottom', distance: '20px'}">
            <img src="@/assets/logo_smartconfort.webp" alt="logo de la société">
        </div>
        <div class="footer__informations" v-scroll-reveal="{ duration: 1200, delay: 200, origin: 'right', distance: '20px'}">
            <p><span>Smart</span>confort – 78550 Richebourg</p>
            <p>01.85.77.00.99</p>
            <p>contact@smartconfort.fr</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    .footer {
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #333333;
    }
    .footer__logo {
        width: 200px;
        height: auto;
        margin: 15px;
    }
    .footer__logo img {
        width: 100%;
        height: auto;;
    }
    .footer__informations p {
        font-size: 14px;
        font-weight: 600;
        color: #c2c2c2;
        margin: 15px;
    }
    .footer__informations p span {
        color: #95c200;
    }
</style>