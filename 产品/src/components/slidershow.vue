<template>
  <div class="slide-show" @mouseout="runInv" @mouseover="clearRun">
    <div class="slide-img">
      <router-link :to="{ path: '/' + slides[nowIndex].href}">
        <transition name="slide-trans">
          <img :src="slides[nowIndex].src" alt="" v-if="isShow">
        </transition>
        <transition name="slide-trans-old">
          <img :src="slides[nowIndex].src" alt="" v-if="!isShow">
         </transition>
      </router-link>
    </div>
    <ul class="slide-pages">
      <li @click="goto(prevIndex)">&lt;</li>
      <li v-for="(item, index) in slides" :key="index" @click="goto(index)">
        <a :class="{ on: index === nowIndex }">{{index + 1}}</a>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nowIndex: 2,
      isShow: true
    }
  },
  props: {
    slides: {
      type: Array,
      required: true,
      default: []
    },
    inv: {
      type: Number,
      required: true,
    }
  },
  computed: {
    prevIndex () {
      if ( this.nowIndex === 0 ) {
        return this.slides.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    nextIndex () {
      if ( this.nowIndex === this.slides.length - 1 ) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto (index) {
      this.isShow = false
      setInterval(() => {
        this.isShow = true
      }, 10);
      this.nowIndex = index
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv);
    },
    clearRun () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.runInv()
  }
}
</script>
<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}
</style>

