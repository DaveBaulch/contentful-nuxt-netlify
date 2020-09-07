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
        @submit.prevent="checkForm"
      >
        <input type="hidden" name="form-name" value="contact">
        <div ref="name-wrapper" class="form-item">
          <label for="name">Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            name="name"
            placeholder="Your name.."
            @focus="onFocus"
            @blur="onBlur"
          >
          <span class="error" :class="{ visible: formEntered && !nameValid }">Please add your name</span>
        </div>

        <div ref="email-wrapper" class="form-item">
          <label for="email">Email address</label>
          <input
            id="email"
            v-model="form.email"
            type="text"
            name="email"
            placeholder="Your email.."
            @focus="onFocus"
            @blur="onBlur"
          >
          <span class="error" :class="{ visible: formEntered && !emailValid }">Please add a valid email address</span>
        </div>

        <div ref="message-wrapper" class="form-item">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            name="message"
            placeholder="Write something.."
            @focus="onFocus"
            @blur="onBlur"
          />
          <span class="error" :class="{ visible: formEntered && !messageValid }">Please add your name</span>
        </div>

        <input type="submit" value="Submit">
      </form>
    </div>

    <div class="success-block" :class="{ visible: formSuccess }">
      <h2>Thank you!</h2>
      <p>Thanks for getting in touch - if you have any further questions please email: <a href="mailto: davebaulch@yahoo.co.uk">davebaulch@yahoo.co.uk</a></p>
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
    nameValid () {
      return this.form.name !== ''
    },
    emailValid () {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(this.form.email)
    },
    messageValid () {
      return this.form.message !== ''
    },
    formEntered () {
      return this.$store.state.contact.formEntered
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
    onFocus (e) {
      this.$refs[e.target.name + '-wrapper'].classList.add('focus')
    },
    onBlur (e) {
      this.$refs[e.target.name + '-wrapper'].classList.remove('focus')
    },
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    checkForm () {
      this.$store.commit('contact/formEntered', true)

      if (this.formEntered && this.nameValid && this.emailValid && this.messageValid) {
        this.handleSubmit()
      }
    },
    handleSubmit () {
      const self = this
      this.$store.commit('contact/formSubmitted', true)

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
        self.$store.commit('contact/formSuccess', true)
        self.clearForm()
      })
        .catch(function (response) {
        // handle error
          console.log('fail' + response)
          self.$store.commit('contact/formError', true)
          self.clearForm()
        })
    },
    clearForm () {
      this.form.name = ''
      this.form.email = ''
      this.form.message = ''
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

.error {
  color: $green;
  display: none;

  &.visible {
    display: block;
  }
}

.form-item.focus {
  border: 1px solid #f0f;
}
</style>
