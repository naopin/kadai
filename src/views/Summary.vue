<template>
  <div id="summary">
     <p>STEP4</p>
     <p>-性別-</p>
     <p>{{sex}}</p>
     <p>-生年月日-</p>
     <p>{{year}}年{{month}}月{{day}}日</p>
     <p>現在、生命保険に加入されていますか？</p>
     <p>{{insurance}}</p>
     <p>現在入院中ですか。または,最近3ヵ月以内に医師の診察・検査の結果、入院、手術をすすめられたことはありますか</p>
     <p>{{current}}</p>
     <p>過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
     <p>{{past}}</p>
     <p>-ご相談内容-</p>
     <p>{{text}}</p>
  </div>

</template>



<script>
export default {
  name: "Summary",
  computed: {
    sex() { return this.$store.getters.sex},
    year() { return this.$store.getters.year},
    month() { return this.$store.getters.month},
    day() { return this.$store.getters.day},
    insurance() { return this.$store.getters.insurance},
    current() { return this.$store.getters.current},
    past() { return this.$store.getters.past},
    text() { return this.$store.getters.text}
  },
 
};
</script>