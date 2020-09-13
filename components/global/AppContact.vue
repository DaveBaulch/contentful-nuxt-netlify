<template>
  <div id="contact" :class="{ visible: contactActive }" class="contact-wrapper">
    <button
      id="close-button"
      ref="closeContactButton"
      type="button"
      class="button close-button js-contact-focussable"
      tabindex="-1"
      @click="closeContact"
    >
      <span class="sr-only">
        Close
      </span>
    </button>

    <div class="contact-inner">
      <div class="left-col">
        <h2>It would be great to hear from you!</h2>
        <p>Please send me a message if I can be of help in any way, or you'd just like to chat...</p>
      </div>

      <div class="right-col">
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
            <div ref="name-wrapper" class="form-item" :class="{ hasError: formEntered && !nameValid }">
              <label for="name">Name*</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                name="name"
                placeholder="Your name"
                class="js-contact-focussable"
                tabindex="-1"
                @focus="onFocus"
                @blur="onBlur"
              >
              <span class="error">Please add your name</span>
            </div>

            <div ref="email-wrapper" class="form-item" :class="{ hasError: formEntered && !emailValid }">
              <label for="email">Email address*</label>
              <input
                id="email"
                v-model="form.email"
                type="text"
                name="email"
                placeholder="Your email"
                class="js-contact-focussable"
                tabindex="-1"
                @focus="onFocus"
                @blur="onBlur"
              >
              <span class="error">Please add a valid email address</span>
            </div>

            <div ref="phone-wrapper" class="form-item">
              <label for="phone">Phone number</label>
              <input
                id="phone"
                v-model="form.phone"
                type="text"
                name="phone"
                placeholder="Your phone number"
                class="js-contact-focussable"
                tabindex="-1"
                @focus="onFocus"
                @blur="onBlur"
              >
            </div>

            <div ref="message-wrapper" class="form-item" :class="{ hasError: formEntered && !messageValid }">
              <label for="message">Message*</label>
              <textarea
                id="message"
                v-model="form.message"
                name="message"
                placeholder="How can I be of help?"
                class="js-contact-focussable"
                tabindex="-1"
                @focus="onFocus"
                @blur="onBlur"
              />
              <span class="error">Please add your message</span>
            </div>

            <input type="submit" value="Send" class="button form-button js-contact-focussable" tabindex="-1">
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
        phone: '',
        message: ''
      }
    }
  },
  computed: {
    contactActive () {
      return this.$store.state.contact.contactActive
    },
    whichOpenElementId () {
      return this.$store.state.contact.whichOpenButtonId
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
  created () {
    this.$nuxt.$on('focus-close-contact-button', () => {
      this.$refs.closeContactButton.focus()
    })
  },
  beforeDestroy () {
    this.$nuxt.$off('focus-close-contact-button')
  },
  methods: {
    onFocus (e) {
      this.$refs[e.target.name + '-wrapper'].classList.add('focus')
      this.$refs[e.target.name + '-wrapper'].classList.remove('hasError')
      this.$store.dispatch('contact/formEntered', false)
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
      this.$store.dispatch('contact/formEntered', true)

      if (!this.emailValid) {
        this.form.email = ''
      }

      if (this.formEntered && this.nameValid && this.emailValid && this.messageValid) {
        this.handleSubmit()
      }
    },
    handleSubmit () {
      const self = this
      this.$store.dispatch('contact/formSubmitted', true)

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
        self.$store.dispatch('contact/formSuccess', true)
        self.clearForm()
      })
        .catch(function (response) {
        // handle error
          console.log('fail' + response)
          self.$store.dispatch('contact/formError', true)
          self.clearForm()
        })
    },
    clearForm () {
      this.form.name = ''
      this.form.email = ''
      this.form.phone = ''
      this.form.message = ''
    },
    closeContact () {
      this.$store.dispatch('contact/toggleContact', this.whichOpenElementId)
      // clear the state values for the form on closing the modal
      this.$store.dispatch('contact/formEntered', false)
      this.$store.dispatch('contact/formSubmitted', false)
      this.$store.dispatch('contact/formSuccess', false)
      this.$store.dispatch('contact/formError', false)
      this.clearForm()

      if (this.whichOpenElementId === 'open-contact-link') {
        this.$nextTick(() => this.$nuxt.$emit('focus-open-contact-link'))
      } else {
        this.$nextTick(() => this.$nuxt.$emit('focus-open-contact-button'))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_mixins.scss';

.contact-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
  color: #333;
  background: rgba(10, 50, 70, 100);
  backface-visibility: hidden;
  transform: translateY(-100%);
  z-index: 10000;
  transition: all 0.5s ease-in-out;
  opacity: 0;
  padding: 20px;

  @include breakpoint(sm) {
    padding: 25px;
  }

  &.visible {
    transition: all 0.5s ease-in-out;
    transform: translateY(0);
    opacity: 1;
  }

  @include breakpoint(md) {
    background-color: transparent;
    transform: translateX(-100%);
    z-index: -1;
    transition: transform 0s 2s, z-index 0s 2s;
    overflow-y: scroll;
    opacity: 1;
    padding: 30px;

    &:before,
    &:after {
      content: '';
      display: block;
      width: 50%;
      position: fixed;
      z-index: -1;
      top: 0;
      bottom: 0;
      transition: transform 0.5s ease-in-out;
      will-change: transform;
    }

    &:before {
      background: rgba(255, 255, 255, 0.98);
      left: 0;
      transform: translateY(100%);
      z-index: 2;
    }

    &:after {
      right: 0;
      transform: translateY(-100%);
      z-index: 0;
      background: rgba(10, 50, 70, 0.98);
    }

    &.visible {
      transition: all 0.5s ease-in-out;
      z-index: 500;
      transform: translateY(0);
      transition: none;
      opacity: 0.98;

      &:before,
      &:after {
        transform: none;
        transition: transform 0.5s ease-in-out;
      }
    }
  }
}

.contact-inner {
  width: 1200px;
  margin: 30px auto 0  auto;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 0;

  .left-col {
    text-align: center;
  }

  .left-col * {
    color: $white;
  }

  @include breakpoint(md) {
    flex-direction: row;
    padding: 30px;

    .left-col,
    .right-col {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: all 0.2s ease-in-out;
      flex-direction: column;
      padding: 0 100px;
    }

  .left-col {
    text-align: left;
  }

    .left-col * {
      color: $grey-dark;
    }
  }

  .contact-wrapper.visible & {
    .left-col,
    .right-col {
      opacity: 1;
      transition: all 0.8s ease-in-out;
    }

    .left-col {
      transition-delay: 0.4s;
    }

    .right-col {
      transition-delay: 0.8s;
    }
  }
}

.contact-block {
  padding-bottom: 4rem;

  &.hidden {
    display: none;
  }
}

.success-block {
  display: none;
  * {
    color: $white;
  }

  &.visible {
    display: block;
  }
}

.error-block {
  display: none;
  * {
    color: $white;
  }

  &.visible {
    display: none;
  }
}

.contact-form {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @include breakpoint(md) {
    width: 300px;
  }
}

.form-item {
  position: relative;
  padding-top: 50px;

  @include breakpoint(md) {
    padding-top: 60px
  }
}

input[type='text'],
input[type='email'],
textarea {
  background-color: transparent;
  padding-left: 0;
  padding-right: 0;
  border: 0;
  border-bottom: 1px solid $grey-light;
  color: $white;
}

textarea {
  height: 100px;
}

.error {
  position: absolute;
  top: 65px;
  color: $yellow;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  z-index: -1;
  font-size: 1.8rem;

  @include breakpoint(md) {
    top: 75px;
  }

  .hasError & {
    opacity: 1;
  }

  .focus & {
    opacity: 0;
  }
}

label {
  color: $white;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: 0 100%;
  transition: transform 0.3s, color 0.3s;

  .focus & {
    transform: translateY(30%) scale(0.8);
    color: $yellow;
  }
}

.form-button {
  width: auto;
  margin: 0 auto;
  color: $white;
  border-color: $white;
  margin-top: 3rem;
  background-color: transparent;
  background: none;
  padding:  1.3rem 1.5rem;

  &:active,
  &:focus {
    outline: 0;
    border: $focus-outline;
  }
}

::-webkit-input-placeholder {
  color: $grey-mid;
  opacity: 1;

  .hasError & {
    opacity: 0;
  }
}

::-moz-placeholder {
  color: $grey-mid;
  opacity: 1;

  .hasError & {
    opacity: 0;
  }
}

:-ms-input-placeholder {
  color: $grey-mid;
  opacity: 1;

  .hasError & {
    opacity: 0;
  }
}

.close-button {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 20px;
  top: 10px;
  z-index: 2000;
  background: transparent url('~assets/layout/icon-mobile-menu-close-white.svg') no-repeat center center;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  @include breakpoint(sm) {
    right: 25px;
  }

  .contact-wrapper.visible & {
    opacity: 1;
  }
}

input:-internal-autofill-selected {
  background-color: transparent;
}
</style>
