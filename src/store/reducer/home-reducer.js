import * as actionTypes from '../actions/actionTypes'
const _ = require('lodash')
const shortid = require('shortid');

let initialState = {
    allNews: [],
    allSource: [],
    selectedSource: "",
    topNews: [],
    selectNews: []
}

const setAllNews = (state, data) => {
    let finalState = { ...state }
    let articles = data.articles
    _.forEach(articles, (each) => {
        each.news_id = shortid.generate()
    })
    finalState.allNews = articles
    return finalState
}

const setAllSource = (state, data) => {
    let finalState = { ...state }
    let uniqueValues = _.uniqBy(data.articles,'source.id')
    uniqueValues= _.remove(uniqueValues,(each)=>each.source.id!==null)
    finalState.allSource = _.slice(uniqueValues, 0, 10)
    finalState.selectedSource = uniqueValues[0].source.id
    return finalState
}
const setNewsSource = (state, data) => {
    let finalState = { ...state }
    finalState.selectedSource = data
    return finalState
}
const setTopNews = (state, data) => {
    let finalState = { ...state }
    let articles = data.articles
    _.forEach(articles, (each) => {
        each.news_id = shortid.generate()
    })
    finalState.topNews = articles
    return finalState
}
const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.SET_ALL_NEWS) {   // we can use switch
        return setAllNews(state, action.data)
    }
    if (action.type === actionTypes.GET_ALL_SOURCE) {
        return setAllSource(state, action.data)
    }
    if (action.type === actionTypes.SET_NEWS_BY_SOURCE) {
        return setNewsSource(state, action.data)
    }
    if (action.type === actionTypes.SET_TOP_NEWS) {
        return setTopNews(state, action.data)
    }
    return state
}

export default reducer;