<template>
    <div class="contact">
        <div class="contact__infos">
            <p>SMARTCONFORT</p>
            <p>78550 Richebourg</p>
            <p class="telephone">01.85.77.00.99</p>
            <p style="font-size: 22px">Une question, un doute, n’hesitez pas à nous contacter</p>
        </div>
        <form class="contact-form" @submit.prevent="sendEmail">
          <p class="messageSend" v-show="messageSuccess">Merci de nous avoir contactés on vous répond au plus vite !</p>
          <div class="inputContainer">
            <input type="text" name="user_name" required placeholder="Nom" v-model="name">
            <input type="email" name="user_email" required placeholder="Adresse e-mail" v-model="email">
          </div>
          <textarea name="message" required placeholder="Message" v-model="message"></textarea>
          <button type="submit">Envoyer</button>
        </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      messageSuccess: false
    }
  },
  methods: {
    sendEmail(e) {
      emailjs.sendForm('contact_service', 'template_kephdd4', e.target, 'user_Rrh3ROjxVjPzV5pilSJra')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            this.name = ''
            this.email = ''
            this.message = ''
            this.messageSuccess = true
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>

<style scoped>
    .contact {
      padding-top: 134px;
    }
    .contact__infos {
      width: 80%;
      max-width: 1080px;
      margin: 0 auto;
      padding: 27px 0;
    }
    .contact__infos p {
      font-size: 18px;
      padding-bottom: 10px;
      line-height: 1em;
      color: #333;
    }
    .contact__infos .telephone {
      font-size: 26px;
      color: #1faf8e;
      font-weight: bold;
      margin-bottom: 25px;
    }
    .contact form {
      position: relative;
      width: 80%;
      max-width: 1080px;
      margin: 0 auto;
      padding: 27px 0;
      overflow: hidden;
    }
    .contact form input, .contact form textarea {
      padding: 16px;
      border: none;
      color: #999;
      background-color: #eee;
      font-size: 14px;
      border-radius: 2px;
      outline: none;
    }
    .contact form .inputContainer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 35px;
    }
    .contact form input {
      width: 45%;
      transition: all 0.3s ease-in-out;
    }
    .contact form textarea {
      width: 100%;
      min-height: 125px;
      font-family: inherit;
    }
    .contact form button {
      width: 20%;
      margin-left: 80%;
      padding: 15px 0;
      border: none;
      border-radius: 2px;
      margin-top: 15px;
      background-color: #1faf8e;
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      outline: none;
    }
    .contact form button:hover {
      background-color: #198b71;
    }
    .messageSend {
      padding: 10px 15px;
      background-color: #1e94ca;
      color: #fff;
      font-weight: 600;
      border-radius: 5px;
      margin-bottom: 20px;
      font-size: 14px;
    }

    @media screen and (max-width: 800px) {
      .contact .inputContainer {
        flex-direction: column;
        margin-bottom: 0!important;
      }
      .contact form input {
        width: 100%;
        margin-bottom: 20px;
      }
      .contact form button { 
        width: 100%;
        margin-left: 0;
      }
    }
    @media screen and (max-width: 420px) {
       .contact {
        padding-top: 90px;
      }
    }
</style>