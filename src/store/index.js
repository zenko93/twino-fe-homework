import Vue from "vue";
import Vuex from "vuex";
import data from "/task/suitability-data.json";

Vue.use(Vuex);

const TITLE_TO_GROUP_FIELD_MAP = {
  "Financial situation": "finance",
  "Investment goals": "investment",
  "Professional experience": "education",
};

const QUESTION_TO_ANSWER_FIELD_MAP = {
  "Your total assets": "totalAssets",
  "Net income in the last 12 months": "netIncome",
  "Please indicate the ratio of your regular monthly financial obligations (ex. mortgage repayment) to monthly income":
    "monthlyFinancial",
  "Your investment strategy": "investmentStrategy",
  "Imagine a situation where a stock market value has fallen by 20% in the last 3 months. At the same time, the value of the shares of a particular company you own has fallen by the same 20%. How would you act?":
    "marketHasFallen",
  "What is the recommended strategy for allocating/diversifying investment risks?":
    "diversifyingStrategy",
  "Your education": "education",
  "Your financial experience": "financialExperience",
  "Investment experience in peer-to-peer lending and crowdfunding":
    "investmentExperience",
};

export default new Vuex.Store({
  state: {
    data: {},
    answers: {
      finance: {
        totalAssets: "",
        netIncome: "",
        monthlyFinancial: "",
      },
      investment: {
        investmentStrategy: "",
        marketHasFallen: "",
        diversifyingStrategy: "",
      },
      education: {
        education: "",
        financialExperience: "",
        investmentExperience: "",
      },
    },
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
    SET_ANSWER(state, { group, question, answer }) {
      state.answers[group][question] = answer;
    },
  },
  actions: {
    getData: async ({ commit }) => {
      try {
        const { groups } = data;
        const mapData = groups.map((group) => {
          const fieldName = TITLE_TO_GROUP_FIELD_MAP[group.title];
          const questions = group.questions.map((question) => {
            const fieldName = QUESTION_TO_ANSWER_FIELD_MAP[question.question];

            return { ...question, fieldName };
          });
          return { ...group, fieldName, questions };
        });

        commit("SET_DATA", mapData);
      } catch (e) {
        console.error("something goes wrong");
      }
    },
  },
  modules: {},
});
