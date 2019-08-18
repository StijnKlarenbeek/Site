<template>
  <a
    v-if="typeof to === 'undefined'"
    key="normallink"
    :target="target"
    :href="href"
    :class="colorize"
  >
    <slot></slot>
  </a>
  <nuxt-link :class="colorize" v-else key="routerlink" :to="to">
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String
    },
    href: {
      type: String
    },
    target: {
      type: String
    },
    color: {
      type: String
    },
    rounded: {
      type: Boolean,
      default: false
    },
    /**
     * Makes the btn 100% width on small screens
     */
    phoneBlock: {
      type: Boolean,
      default: false
    },
    isItem: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    colorize() {
      return {
        btn: true,
        teal: this.color.includes("teal"),
        primary: this.color.includes("primary"),
        tertiary: this.color.includes("tertiary"),
        quartenary: this.color.includes("quartenary"),
        opacified: this.color.includes("opacified"),
        rounded: this.rounded,
        white: this.color.includes('white'),
        "dark-teal": this.color.includes("dark-teal"),
        "phone-block": this.phoneBlock,
        "item-btn": this.isItem,
        'outlined': this.outlined
      };
    }
  }
};
</script>

<style scoped>
/**Default btn styles**/
.btn {
  display:inline-block;
  background: white;
  border: 1px solid white;
  color: black;
  text-decoration: none;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 1.3rem;
  border-radius: 2px;
  transition: 250ms;
}

.btn:hover {
  background: transparent;
  color: white;
  transition: 250ms;
}

.btn.item-btn {
  font-size: 1.1rem;
  font-weight: bolder;
  border: none;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.btn.outlined {
  border: 1px solid transparent;
}
.btn.outlined:hover{
  border-color:white;
}

.btn i {
  display: inline-block;
  margin-left: 1rem;
}

.btn.rounded {
  border-radius: 30px;
}

/**Teal color**/
.btn.teal {
  background: rgb(104, 255, 209);
  border-color: rgb(104, 255, 209);
  color: rgba(0,0,0,.5);
}

.btn.teal:hover {
  background: transparent;
  color: #68ffd1;
}

.btn.teal.outlined:hover{
  border-color: rgb(104, 255, 209);
}

.btn.dark-teal {
  background: rgb(29, 192, 166);
  color: #fff;
}
.btn.dark-teal:hover {
  background: rgb(25, 170, 146);
  color: white;
}

.btn.white{
    background:rgb(125, 130, 156);
    color:#fff;
}
.btn.white:hover{
  background: rgb(90, 82, 255);
  color: #fff;
}

.btn.teal.opacified {
  background: rgba(104, 255, 209, 0.35);
  color: #68ffd1;
}
.btn.teal.opacified:hover {
  border-color: rgb(104, 255, 209);
  background: rgb(104, 255, 209);
  color: #fff;
}

.btn.primary {
  background: #5100ff;
  border-color: #5100ff;
  color: #fff;
}
.btn.primary.opacified {
  background: rgba(81, 0, 255, 0.35);
  color: #5100ff;
  border: none;
}
.btn.primary.opacified:hover {
  color: white;
  background: #5100ff;
}

.btn.primary:hover {
  background: transparent;
  color: #5100ff;
}

.btn.tertiary {
  background: #ff5495;
  border-color: #ff5495;
  color: #fff;
}

.btn.tertiary:hover {
  background: rgb(219, 72, 128);
  color: #fff;
}
.btn.tertiary.opacified {
  background: rgba(244, 168, 197, 0.35);
  color: #ff5495;
}
.btn.tertiary.opacified:hover {
  background: #ff5495;
  color: #fff;
}

.btn.quartenary {
  background: rgb(90, 82, 255);
  color: white;
}
.btn.quartenary:hover {
  background: rgb(77, 70, 219);
}
.btn.btn.quartenary.opacified {
  background: rgba(90, 82, 255, 0.35);
}
.btn.btn.quartenary.opacified:hover {
  background: rgb(90, 82, 255);
}

@media screen and (max-width: 570px) {
  .btn {
    font-size: 1rem;
  }
  .btn.btn.tertiary {
    font-size: 1rem;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }
}

@media screen and (max-width: 450px) {
  .phone-block {
    display: block;
    width: 100%;
    text-align: center;
  }
}
</style>
