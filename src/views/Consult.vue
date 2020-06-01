<template>
  <div class="consult">
    <p>STEP3</p>
    <p>ご相談内容をご記入下さい</p>
    <p>-ご相談内容-</p>
    <form>
      <textarea name="textarea"  @input="textArea"></textarea>
    </form>
    <br />
    <button @click="toQuestionary()">前へ戻る</button>
    <button @click="toSummary()">次へ進む</button>
  </div>
</template>

<script>
export default {
  methods: {
    toQuestionary() {
      this.$router.push("questionary");
    },
    toSummary() {
      this.$router.push("summary");
    },
    textArea(e) {
       this.$store.commit('textArea', e.target.value);
    }
  }
};
</script>
