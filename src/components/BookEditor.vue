<template>
  <div>
    <div class="editor-header">
      <h2>{{ book.name }}</h2>
    </div>
    <div class="editor-content">
      <catalog-component></catalog-component>
      <questionDetailComponent></questionDetailComponent>
    </div>
  </div>
</template>

<script>
import CatalogComponent from './CatalogComponent.vue'
import QuestionDetailComponent from './QuestionDetailComponent.vue'

export default {
  name: 'BookEditor',
  data () {
    return {
      book: {
        name: '测试图书'
      }
    }
  },
  components: {
    CatalogComponent,
    QuestionDetailComponent
  }
}
</script>

<style lang="less" scoped>
.editor-header {
  background: rgb(0, 150,136);
  color: #fff;
}
.editor-content {
  display: flex;
  flex-direction: row;
}
</style>