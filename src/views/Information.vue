<template>
  <div id="information">
    <p>STEP1</p>
    <p>お客様の情報を入力してください</p>
    <p>-性別-</p>
    <input type="radio" id="men" v-model="sex" value="男性" name="sex" @input="selectSex"/>
    <label for="men">男性</label>
    <input type="radio" id="woman" v-model="sex" value="女性"  name="sex" @input="selectSex"/>
    <label for="woman">女性</label>
    <p>-生年月日-</p>

    <select v-model="year" v-on:change="calculate_max_day()" @change="selectYear">
      <option v-for="y in 100" v-bind:value="y + 2020 - 100" :key="y">{{y + 2020 - 100}}</option>
    </select>
    <label for="year">{{yearText}}</label>

    <select v-model="month" v-on:change="calculate_max_day()"  @change="selectMonth">
      <option v-for="m in 12" :key="m">{{m}}</option>
    </select>
    <label for="month">{{monthText}}</label>

    <select v-model="day" @change="selectDay">
      <option v-for="d in max_day" :key="d">{{d}}</option>
    </select>
    <label for="day">{{dayText}}</label>

    <br />

    <button @click="toQuestionary()">次へ進む</button>
  </div>
</template>

<script>
export default {
  name: "information",
  data() {
    return {
      sex: "",
      yearText: "年",
      monthText: "月",
      dayText: "日",
      button: "次へ進む",
      year: 0,
      month: 0,
      day: 0,
      max_day: 31
    };
  },

  methods: {
    toQuestionary() {
      this.$router.push("/questionary");
    },
    calculate_max_day: function() {
      this.max_day = new Date(this.year, this.month, 0).getDate();
    },
    selectSex(e) {
       this.$store.commit('selectSex', e.target.value);
    },
     selectYear(e) {
       this.$store.commit('selectYear', e.target.value);
    },
     selectMonth(e) {
       this.$store.commit('selectMonth', e.target.value);
    },
       selectDay(e) {
       this.$store.commit('selectDay', e.target.value);
    },
     lifeInsurance(e) {
       this.$store.commit('lifeInsurance', e.target.value);
    }
  },
};
</script>



  

