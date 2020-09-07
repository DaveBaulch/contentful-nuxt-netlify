<template>
  <div :class="{ visible: contactActive }" class="contact-wrapper">
    <close-button />

    <div class="contact-block" :class="{ hidden: formSubmitted }">
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

    <div class="success-block" :class="{ visible: formSuccess }">
      <h2>Thank You!</h2>
      <p>Thanks for getting in touch - if you have any further questions please emeil: <a href="mailto: davebaulch@yahoo.co.uk">davebaulch@yahoo.co.uk</a></p>
    </div>

    <div class="error-block" :class="{ visible: formError }">
      <h2>Oh no!</h2>
      <p>It looks like something went wrong - please email me directly at: <a href="mailto: davebaulch@yahoo.co.uk">davebaulch@yahoo.co.uk</a></p>
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
    },
    formSubmitted () {
      return this.$store.state.contact.formSubmitted
    },
    formSuccess () {
      return this.$store.state.contact.formSuccess
    },
    formError () {
      return this.$store.state.contact.formError
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
      const self = this
      this.$store.commit('contact/formSubmitted')

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
      ).then(function (response) {
        // handle success
        console.log('success' + response)
        self.$store.commit('contact/formSuccess')
      })
        .catch(function (response) {
        // handle error
          console.log('fail' + response)
          self.$store.commit('contact/formError')
        })
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

.contact-block {
  &.hidden {
    display: none;
  }
}

.thankyou-block {
  display: none;

  &.visible {
    display: block;
  }
}

.success-block {
  display: none;

  &.visible {
    display: block;
  }
}

.error-block {
  display: none;

  &.visible {
    display: none;
  }
}

.contact-form {
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

</style>
