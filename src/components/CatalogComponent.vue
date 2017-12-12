<template>
  <div class="catalog-card">
    <div class="catolog-header">
      <button @click="changeCatalogStatus(true)">全部展开</button>
      <button @click="changeCatalogStatus(false)">全部收起</button>
    </div>
    <ul>
      <li v-for="(chapter,chapterIndex) in bookSections">
        <div class="catalog-chapter-header">
          <h2>{{chapter.name}}</h2>
        </div>
        <div class="catalog-chapter-content" v-show="catalogStatus[chapterIndex].show">
          <ul v-if="chapter.subsections">
            <li v-for="(section, sectionIndex) in chapter.subsections">
              <div class="catalog-section-header">
                <h2>{{section.name}}</h2>
              </div>
              <div class="catalog-section-content">
                <div v-for="(question, index) in section.items">
                  <a v-if="quesiton.type==1" @click="jumpToQuestion(question.questionIds[0], question,type, false, chapterIndex, sectionIndex, index)" :class="{'teal-color': selectedQuestionId===question.questionIds[0]&&selectedContentType===1}">题目{{question.questionIds[0]}}</a>
                  <a v-if="quesiton.type==2" @click="jumpToQuestion(question.materialId, question,type, false, chapterIndex, sectionIndex, index)" :class="{'teal-color': selectedMaterialId===question.materialId&&selectedContentType===2}">材料{{question.materialId}}
                    <p v-for="questionItem in question.questionids">题目{{questionItem}}</p>
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <ul v-if="chapter.items">
            <div v-for="(question, index) in chapter.items">
              <a v-if="question.type==1" @click="jumpToQuestion(question.questionIds[0], question.type, false, chapterIndex, null, index)" :class="{'teal-color': isQuestionSelected(question.questionIds[0])}">题目{{question.questionIds[0]}}</a>
              <a v-if="question.type==2" @click="jumpToQuestion(question.materialId, question.type, false, chapterIndex, null, index)" :class="{'teal-color': isMaterialSelected(question.materialId)}">材料{{question.materialId}}
                <p v-for="questionItem in question.questionIds">题目{{questionItem}}</p>
              </a>
            </div>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'CatalogComponent',
    data () {
      return {
        'bookSections': [
          {
            'name': 'CMS  测试 - 公式渲染问题',
            'type': 2,
            'level': 2,
            'items': [
              {
                'type': 1,
                'questionIds': [
                  1546485
                ],
                'createTime': 1511780602782
              },
              {
                'type': 1,
                'questionIds': [
                  2399327
                ],
                'createTime': 1511780602782
              },
              {
                'type': 1,
                'questionIds': [
                  2246495
                ],
                'createTime': 1511780602782
              }
            ]
          }
        ],
        'catalogStatus': []
      }
    },
    created: function () {
      this.catalogStatus = this.bookSections.map(() => { return { show: true } })
    },
    computed: {
      ...mapState([
        'selectedQuestionId',
        'selectedMaterialId',
        'selectedContentType',
        'ifShowSolution'
      ])
    },
    methods: {
      ...mapActions([
        'setSelectedContext'
      ]),
      changeCatalogStatus (status) {
        this.catalogStatus = this.bookSections.map(() => { return {show: status} })
      },
      jumpToQuestion (id, type, isSolution, chapterIndex, sectionIndex, questionIndex) {
        let questionId, materialId
        if (type === 1) {
          questionId = id
          materialId = -1
        } else {
          questionId = -1
          materialId = id
        }

        this.setSelectedContext({
          selectedQuestionId: questionId,
          selectedMaterialId: materialId,
          selectedContentType: type,
          ifShowSolution: isSolution,
          selectedChapterIndex: chapterIndex,
          selectedSectionIndex: sectionIndex
        })
      },
      isQuestionSelected (questionId) {
        return this.selectedQuestionId === questionId && this.selectedContentType === 1
      },
      isMaterialSelected (materialId) {
        return this.selectedMaterialId === materialId && this.selectedContentType === 2
      }
    }
  }
</script>

<style lang="less" scoped>
  .catalog-card {
    flex-grow: 1;
  }
  .teal-color {
    color: #009688;
  }
</style>