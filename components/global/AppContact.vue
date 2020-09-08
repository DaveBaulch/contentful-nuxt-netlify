<template>
  <div :class="{ visible: contactActive }" class="contact-wrapper">
    <CloseButton />

    <div class="contact-inner">
      <div class="left-col">
        some text goes here
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
            <div ref="name-wrapper" class="form-item">
              <label for="name">Name*</label>
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
              <label for="email">Email address*</label>
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
              <label for="message">Message*</label>
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
      this.$store.dispatch('contact/formEntered', true)

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
      this.form.message = ''
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
  overflow-y: hidden;
  color: #333;
  background: rgba(10, 50, 70, 100);
  backface-visibility: hidden;
  transform: translateY(-100%);
  z-index: 10000;
  transition: all 0.5s ease-in-out;
  opacity: 0;

  &.visible {
    transition: all 0.5s ease-in-out;
    transform: translateY(0);
    opacity: 0.98;
  }

  @include breakpoint(md) {
    background-color: transparent;
    transform: translateX(-100%);
    z-index: -1;
    transition: transform 0s 2s, z-index 0s 2s;
    overflow-y: scroll;
    opacity: 1;

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
  margin: 0 auto;
  z-index: 1000;
  display: flex;
  flex-direction: column;

  @include breakpoint(md) {
    flex-direction: row;

    .left-col,
    .right-col {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: all 0.2s ease-in-out;
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
  // border: 1px solid #f0f;
}
</style>
