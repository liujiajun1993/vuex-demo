<template>
  <div class="detail-card">
    <p>请求{{typeStr}}, ID{{id}}</p>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'QuestionDetailComponent',
    computed: {
      ...mapState([
        'selectedQuestionId',
        'selectedMaterialId',
        'selectedContentType',
        'ifShowSolution'
      ]),
      typeStr: function () {
        return this.selectedContentType === 1 ? '题目' : '材料'
      },
      id: function () {
        return this.selectedContentType === 1 ? this.selectedQuestionId : this.selectedMaterialId
      }
    }
  }
</script>

<style lang="less" scoped>
  .detail-card {
    flex-grow: 1;
  }
</style>