<template>
  <form @submit.prevent="formSubmit" ref="form" class="flex flex-col space-y-4"
        :class="{'w-2/6' : $device.isDesktopOrTablet, 'w-11/12' : $device.isMobile }">
    <div class="flex w-full"
         :class="{'flex-row space-x-4' : $device.isDesktopOrTablet, 'flex-col space-y-4' : $device.isMobile}">
      <div :class="{'w-3/6' : $device.isDesktopOrTablet}">
        <input :class="{'border-red-500' : validation.hasError('name')}"
               type="text" id="name"
               v-model="name"
               class="bg-gray-50 border-gray-50 border-2 hover:border-black text-gray-900 focus:outline-none focus:border-black block w-full p-2.5"
               placeholder="Имя">
        <span class="text-xs text-red-700" v-if="validation.hasError('name')">{{
            validation.firstError('name')
          }}</span>
      </div>
      <div :class="{'w-3/6' : $device.isDesktopOrTablet}">
        <input :class="{'border-red-500' : validation.hasError('email')}"
               type="text" id="email"
               v-model="email"
               class="bg-gray-50 border-gray-50 border-2 hover:border-black text-gray-900 focus:outline-none focus:border-black block w-full p-2.5"
               placeholder="Эл. почта">
        <span class="text-xs text-red-700" v-if="validation.hasError('email')">{{
            validation.firstError('email')
          }}</span>
      </div>
    </div>
    <div>
      <input :class="{'border-red-500' : validation.hasError('phone')}"
             type="text" id="phone"
             v-model="phone"
             v-mask="'+7 (###) ###-##-##'"
             class="bg-gray-50 border-gray-50 border-2 hover:border-black text-gray-900 focus:outline-none focus:border-black block w-full p-2.5"
             placeholder="Телефон">
      <span class="text-xs text-red-700" v-if="validation.hasError('phone')">{{
          validation.firstError('phone')
        }}</span>
    </div>
    <div>
            <textarea
              :class="{'border-red-500' : validation.hasError('message'), 'h-48' : $device.isDesktopOrTablet, 'h-24': $device.isMobile}"
              id="message" rows="4"
              v-model="message"
              class="resize-none border-gray-50 block p-2.5 w-full text-gray-900 focus:outline-none bg-gray-50 border-2 hover:border-black focus:border-black"
              placeholder="Добавить сообщение"></textarea>
      <span class="text-xs text-red-700" v-if="validation.hasError('message')">{{
          validation.firstError('message')
        }}</span>
    </div>
    <button type="submit"
            class="text-white bg-yellow-dark hover:bg-yellow-orange outline-none focus:outline-none font-bold px-4 py-2 text-center ease-in-out duration-500"
            :class="{'text-lg' : $device.isDesktopOrTablet, 'text-sm': $device.isMobile}">
      Отправить
    </button>
  </form>
</template>
<script>
import {Validator} from "simple-vue-validator";

export default {
  name: 'FeedbackForm',
  data: () => ({
    name: '',
    email: '',
    phone: '',
    message: '',
    terms: '',
    result: '',
  }),
  validators: {
    'name': (value) => {
      return Validator.custom(() => {
        if (!Validator.isEmpty(value)) {
          const valFio = new RegExp(/^[А-ЯЧЁа-ячё\s]*$/u);
          if (!valFio.test(value)) {
            return 'Только кириллица';
          } else if (value.length < 3) {
            return 'Не менее 3 символов';
          } else if (value.length > 300) {
            return 'Не более 300 символов';
          }
        } else {
          return 'Это поле необходимо заполнить';
        }
      });
    },
    'email': (value) => {
      return Validator.custom(() => {
        if (!Validator.isEmpty(value)) {
          const valEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
          if (!valEmail.test(value)) {
            return 'Пожалуйста, введите корректный адрес электронной почты';
          } else if (value.length > 300) {
            return 'Не более 300 символов';
          }
        } else {
          return 'Это поле необходимо заполнить';
        }
      });
    },
    'phone': (value) => {
      return Validator.custom(() => {
        if (!Validator.isEmpty(value)) {
          const digits = value.replace(/[^0-9]/g, "").substr(1);
          const digitsLength = digits.length;
          if (digitsLength < 10) {
            return 'Введите корректный номер телефона';
          }
        } else {
          return 'Это поле необходимо заполнить';
        }
      });
    },
    'message': (value) => {
      return Validator.custom(() => {
        if (!Validator.isEmpty(value)) {
          if (value.length < 10) {
            return 'Не менее 10 символов';
          } else if (value.length > 600) {
            return 'Не более 600 символов';
          }
        } else {
          return 'Это поле необходимо заполнить';
        }
      });
    },
  },
  methods: {
    reset() {
      this.name = '';
      this.email = '';
      this.message = '';
      this.result = '';
      this.terms = '';
      this.phone = '';
      this.validation.reset();
    },
    formSubmit() {
      this.$validate().then(async (success) => {
        if (success) {
          const body = {
            name: this.name,
            message: this.message,
            email: this.email,
            phone: this.phone,
            terms: this.terms
          };
          console.log(body);
          // const token = await this.$recaptcha.execute('login');
          // if (token) {
          //   body['token'] = token;
          //   const res = await this.$axios.$post(
          //     '/api/feedback/',
          //     body
          //   );
          //   if (res.result && res.message) {
          //     this.result = res.message;
          //   } else {
          //     this.$refs.form.reset();
          //     this.reset();
          //   }
          // }
        }
      });
    }
  }
}
</script>
