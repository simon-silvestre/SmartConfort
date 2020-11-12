<template>
    <div class="footer">
        <div class="footer__logo">
            <img src="@/assets/logo_smartconfort.webp" alt="">
        </div>
        <div class="footer__informations">
            <p><span>Smart</span>confort – 78550 Richebourg</p>
            <p>01.85.77.00.99</p>
            <p>contact@smartconfort.fr</p>
        </div>
        <div class="footer__partenaires">
            
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
        background-color: #2b2b2b;
    }
    .footer__logo {
        width: 200px;
        height: auto;
    }
    .footer__logo img {
        width: 100%;
    }
    .footer__informations p {
        font-size: 14px;
        font-weight: 600;
        color: #dfdfe0;
        margin: 15px;
    }
    .footer__informations p span {
        color: #95c200;
    }
</style>