<template>
  <div id="information">
    <p>STEP1</p>
    <p>お客様の情報を入力してください</p>
    <p>-性別-</p>
    <input type="radio" id = "men" v-model="sex" value="男性"> 
    <label for="men">男性</label>
	<input type="radio" id = "woman" v-model="sex" value="女性"> 
    <label for="woman">女性</label>
    <p>-生年月日-</p>
<select name="year" >
    <option :value="n" v-for="n in 70" :key="n">{{1950 + n}}</option>
</select>
    <label for="year">{{yearText}}</label>

<select name="month" >
    <option :value="n" v-for="n in 12" :key="n">{{n}}</option>
</select>
    <label for="month">{{monthText}}</label>

<select name="day" >
    <option :value="n" v-for="n in 31" :key="n">{{n}}</option>
</select>
     <label for="day">{{dayText}}</label>
<button>{{button}}</button>
  </div>
    

</template>

<script>

export default {
    data() {
        return {
             sex: "",
             yearText: '年',
             monthText:'月',
             dayText:'日',
             button:'次へ進む',
             listlabel:["Mens","Womens","Kids"],
        };
    },
    computed: {
        created() {
         return this.message;
        }
    }
}

</script>

