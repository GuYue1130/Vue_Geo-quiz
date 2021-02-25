<template>
<div class="show">
  <!-- 首页部分 -->
  <header class="head">
    <h3 class="head-welcome" v-if="showComponent == 'home'">欢迎来到地理知识问答</h3>
  </header>

  <!-- 主体内容部分 -->
  <div class="content">
    <!-- home内容 -->
    <h4 class="content-welcome" v-if="showComponent == 'home'">主要是一些城市知识问答</h4>

    <!-- questions内容 -->
    <div class="content-topic" v-if="showComponent == 'questions'">
      <!-- 题干 -->
      <div class="content-topic-question">
        {{ itemDetail[itemNum-1].topic_name }}
      </div>
      <!-- 选项 -->
      <div class="content-topic-answer">
        <ul>
          <li v-for="(item, index) in itemDetail[itemNum-1].topic_answer" :key="index" @click="choosed(index, item.topic_answer_id)" class="item_list">
            <span class="answer-option" :class="{'choosed':choosedNum==index}">{{chooseType(index)}}</span>
            <span class="answer-detail" :class="{'choosed':choosedNum==index}">{{item.answer_name}}</span>
          </li>
        </ul>
      </div>
    </div>

      <!-- score内容 -->
    <div class="content-score" v-if="showComponent == 'score'">
      总分为  : {{ totalScore }}
    </div>
  </div>

  <!-- 页脚部分 -->
  <footer class="foot">
    <!-- home内容--点击开始答题 -->
    <div class="foot-home" v-if="showComponent == 'home'">
      <!-- <router-link to="questions" class="foot-start" style="font-weight:400">开始做题</router-link> -->
      <span style="font-weight: 400;"  @click="toQuestions">开始做题</span>
    </div>

    <!-- questions内容 -->
    <div class="foot-questiontips" v-if="showComponent == 'questions'">
      <!-- 下一题和提交按钮 -->
      <span style="font-weight: 400;" @click="nextQuestion" v-if="itemNum < itemDetail.length">下一题</span>
      <span style="font-weight: 400;" v-else @click="submitAnswer">提 交</span>
    </div>
  </footer>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'show',
  // 一个子组件，在三个父组件中显示
  props: [
    'showComponent'
  ],
  created () {
    // 进入home的时，初始化所有的值
    if (this.showComponent === 'home') {
      this.initializeData()
    }
  },
  computed: mapState([
    'itemNum',
    'itemDetail',
    'answerid',
    'totalScore'
  ]),
  data () {
    return {
      choosedNum: null, // 选中答案索引
      choosedId: null // 选中答案id
    }
  },
  methods: {
    toQuestions () {
      this.$router.push('questions')
    },
    chooseType: type => {
      switch (type) {
        case 0: return 'A'
        case 1: return 'B'
        case 2: return 'C'
        case 3: return 'D'
      }
    },
    // 选中的答案信息
    choosed (type, id) {
      this.choosedNum = type
      this.choosedId = id
    },
    nextQuestion () {
      // 当点击下一题时我们提交当前所选答案值
      if (this.choosedNum != null) {
        // 保存答案, 题目索引加一，跳到下一题
        this.addNum(this.choosedId)
        this.choosedNum = null
      } else {
        alert('还没有选择答案！！！')
      }
    },
    ...mapActions([
      'addNum', 'initializeData', 'countScore'
    ]),
    submitAnswer () {
      if (this.choosedId != null) {
        // 保存答案，路由到总分
        this.addNum(this.choosedId)
        this.choosedId = null
        this.countScore()
        this.$router.push('score')
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .show {
    position: relative;
    font-size: 30px;
  }
  .head {
    position: absolute;
    left: 40%;
    top: 60px;
    &-hometips {
      font-weight: 800;
    }
  }
  .content {
    position: absolute;
    left: 40%;
    top: 100px;
    &-welcome {
      font-weight: 400;
    }
    &-topic {
      &-question {
        margin-bottom: 10px;
      }
      &-answer {
        line-height: 60px;
      }
    }
  }
  .foot {
    position: absolute;
    left: 40%;
    top: 550px;
  }
  .choosed {
    color: rgb(230, 33, 33);
  }
</style>
