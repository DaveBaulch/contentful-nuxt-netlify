<template>
  <div :class="{ visible: contactActive }" class="contact-wrapper">
    <close-button />
    <div class="contact">
      <form
        name="contact"
        action="/"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        class="contact-form"
        @submit.prevent="handleSubmit"
      >
        <input type="hidden" name="form-name" value="contact">
        <label for="name">Name</label>
        <input id="name" v-model="form.name" type="text" name="name" placeholder="Your name..">

        <label for="email">Email address</label>
        <input id="email" v-model="form.email" type="text" name="email" placeholder="Your email..">

        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" name="message" placeholder="Write something.." />

        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ContactForm',
  data () {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  computed: {
    contactActive () {
      return this.$store.state.contact.contactActive
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit () {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      axios.post(
        '/',
        this.encode({
          'form-name': 'contact',
          ...this.form
        }),
        axiosConfig
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-wrapper {
  width: 100%;
  height: 100%;
  background-color: $red;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  text-align: center;
  padding-top: 50px;
  font-size: 3rem;
  display: none;

  &.visible {
    opacity: 1;
    transition: all 0.4s ease-in-out;
    display: block;
    z-index: 200;
  }
}

.contact-form {
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

</style>
