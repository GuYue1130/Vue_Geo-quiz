import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemNum: 1, // 第几题
    answerid: [], // 答案存放数组
    rightAnswerid: [1, 7, 11, 13, 17],
    totalScore: 0, // 总分
    itemDetail: [{
      topic_id: 20,
      active_topic_id: 4,
      type: 'ONE',
      topic_name: '1.中国的首都是',
      active_id: 1,
      topic_answer: [{
        topic_answer_id: 1,
        topic_id: 20,
        answer_name: '北京',
        is_standard_answer: 1
      }, {
        topic_answer_id: 2,
        topic_id: 20,
        answer_name: '深圳',
        is_standard_answer: 0
      }, {
        topic_answer_id: 3,
        topic_id: 20,
        answer_name: '上海',
        is_standard_answer: 0
      }, {
        topic_answer_id: 4,
        topic_id: 20,
        answer_name: '广州',
        is_standard_answer: 0
      }]
    }, {
      topic_id: 21,
      active_topic_id: 4,
      type: 'MORE',
      topic_name: '2.美国的首都是',
      active_id: 1,
      topic_answer: [{
        topic_answer_id: 5,
        topic_id: 21,
        answer_name: '纽约',
        is_standard_answer: 0
      }, {
        topic_answer_id: 6,
        topic_id: 21,
        answer_name: '芝加哥',
        is_standard_answer: 0
      }, {
        topic_answer_id: 7,
        topic_id: 21,
        answer_name: '华盛顿',
        is_standard_answer: 1
      }, {
        topic_answer_id: 8,
        topic_id: 21,
        answer_name: '洛杉矶',
        is_standard_answer: 0
      }]
    }, {
      topic_id: 21,
      active_topic_id: 4,
      type: 'MORE',
      topic_name: '3.挪威的首都是',
      active_id: 1,
      topic_answer: [{
        topic_answer_id: 9,
        topic_id: 21,
        answer_name: '赫尔辛基',
        is_standard_answer: 0
      }, {
        topic_answer_id: 10,
        topic_id: 21,
        answer_name: '卑尔根',
        is_standard_answer: 0
      }, {
        topic_answer_id: 11,
        topic_id: 21,
        answer_name: '奥斯陆',
        is_standard_answer: 1
      }, {
        topic_answer_id: 12,
        topic_id: 21,
        answer_name: '拉普兰',
        is_standard_answer: 0
      }]
    }, {
      topic_id: 21,
      active_topic_id: 4,
      type: 'MORE',
      topic_name: '4.阿富汗首都是',
      active_id: 1,
      topic_answer: [{
        topic_answer_id: 13,
        topic_id: 21,
        answer_name: '喀布尔',
        is_standard_answer: 1
      }, {
        topic_answer_id: 14,
        topic_id: 21,
        answer_name: '伊斯兰堡',
        is_standard_answer: 0
      }, {
        topic_answer_id: 15,
        topic_id: 21,
        answer_name: '巴格达',
        is_standard_answer: 0
      }, {
        topic_answer_id: 16,
        topic_id: 21,
        answer_name: '乌鲁克',
        is_standard_answer: 0
      }]
    }, {
      topic_id: 21,
      active_topic_id: 4,
      type: 'MORE',
      topic_name: '5.以下城市最先迎来新的一天的是',
      active_id: 1,
      topic_answer: [{
        topic_answer_id: 17,
        topic_id: 21,
        answer_name: '塔瓦拉',
        is_standard_answer: 1
      }, {
        topic_answer_id: 18,
        topic_id: 21,
        answer_name: '亚伦',
        is_standard_answer: 0
      }, {
        topic_answer_id: 19,
        topic_id: 21,
        answer_name: '路易港',
        is_standard_answer: 0
      }, {
        topic_answer_id: 20,
        topic_id: 21,
        answer_name: '奥克兰',
        is_standard_answer: 0
      }]
    }]
  },
  mutations: {
    addNum: state => {
      state.itemNum += 1
    },
    saveAnswer: (state, id) => {
      state.answerid.push(id)
    },
    initializeData: state => {
      state.itemNum = 1
      state.answerid = []
      state.totalScore = 0
    },
    countScore: state => {
      state.answerid.forEach((item, index) => {
        if (item === state.rightAnswerid[index]) {
          state.totalScore += 20
        }
      })
    }
  },

  // actions 注册事件处理函数，当这个函数被触发时，将状态提交到 mutaions中处理
  actions: {
    addNum: ({ commit, state }, id) => {
      commit('saveAnswer', id)
      if (state.itemNum < state.itemDetail.length) {
        commit('addNum')
      }
    },
    initializeData: ({ commit }) => {
      commit('initializeData')
    },
    countScore: ({ commit }) => {
      commit('countScore')
    }
  },
  modules: {
  }
})
