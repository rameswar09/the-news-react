import * as actionTypes from './actionTypes'
import axios from 'axios'


export const setAllNews = (data) => {
    return {
        type: actionTypes.SET_ALL_NEWS,
        data
    }
}
export const setAllSource = (data) => {
    return {
        type: actionTypes.GET_ALL_SOURCE,
        data
    }
}
export const setSourceType = (data) => {
    return {
        type: actionTypes.SET_NEWS_BY_SOURCE,
        data
    }
}

export const setTopNews = (data) => {
    return {
        type: actionTypes.SET_TOP_NEWS,
        data
    }
}
export const getAllNews = () => {
    return dispatch => {
        axios.get('https://newsapi.org/v2/everything?q=bitcoin&pageSize=100&apiKey=885ba09c02164ec69247b6685d65db32')
            .then((response) => {
                dispatch(setAllNews(response.data))
            })
    }
}


export const getAllSource = () => { //https://newsapi.org/v2/sources?apiKey=885ba09c02164ec69247b6685d65db32  data is mismatch that is why using all news
    return dispatch => {
        axios.get('https://newsapi.org/v2/everything?q=bitcoin&pageSize=100&apiKey=885ba09c02164ec69247b6685d65db32')
            .then((response) => {
                dispatch(setAllSource(response.data))
            })
    }
}

export const getTopNews = () => {
    return dispatch => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=885ba09c02164ec69247b6685d65db32')
            .then((response) => {
                dispatch(setTopNews(response.data))
            })
    }
}