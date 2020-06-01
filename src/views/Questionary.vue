<template>
  <div id="questionary">
    <p>STEP2</p>
    <p>以下にお答えください</p>
    <div>
      <p>現在、生命保険に加入されていますか？</p>
      <input type="radio" id="yf" @click="preShow = true"  v-model="questionOne" value="はい" name="lifeInsurance" @input="selctInsurance">
      <label for="yf">はい</label>
      <input type="radio" id="nf" @click="preShow = true"  v-model="questionOne" value="いいえ" name="lifeInsurance" @input="selctInsurance"/>
      <label for="nf">いいえ</label>
    </div>
    <transition name="fade">
      <div v-if="preShow">
        <p>現在入院中ですか。または,最近3ヵ月以内に医師の診察・検査の結果、入院、手術をすすめられたことはありますか</p>
        <input type="radio" id="ys" @click="postShow = true" v-model="questionTwo" value="はい"  name="currentHospitalization" @input="selctCurrent"/>
        <label for="ys">はい</label>
        <input type="radio" id="ns" @click="postShow = true" v-model="questionTwo" value="いいえ" name="currentHospitalization" @input="selctCurrent"/>
        <label for="ns">いいえ</label>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="postShow">
        <p>過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
        <input type="radio" id="yt" v-model="questionThree" value="はい" name="hospitalization" @input="selctPast"/>
        <label for="yt">はい</label>
        <input type="radio" id="nt" v-model="questionThree" value="いいえ" name="hospitalization" @input="selctPast"/>
        <label for="nt">いいえ</label>
      </div>
    </transition>
    <br />
    <button @click="toInformation()">前へ戻る</button>
    <button @click="toConsult()">次へ進む</button>
  </div>
</template>
<script>
export default {
  name: "questionary",
  data() {
    return {
      preShow: false,
      postShow: false,
      questionOne: "",
      questionTwo: "",
      questionThree: ""
    };
  },
  methods: {
    toConsult() {
      this.$router.push("consult");
    },
    toInformation() {
      this.$router.push("/");
    },
     selctInsurance(e) {
       this.$store.commit('selctInsurance', e.target.value);
    },
      selctCurrent(e) {
       this.$store.commit('selctCurrent', e.target.value);
    },
      selctPast(e) {
       this.$store.commit('selctPast', e.target.value);
    }
  }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>