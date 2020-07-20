import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/top-news.css'
import { Link } from 'react-router-dom';
import * as appActions from '../store/actions/app-actions'

const _ = require('lodash')




class TopNews extends Component {
    componentDidMount() {
        this.props.getTopNews()
    }

    render() {
        let topNewsDetails = !_.isEmpty(this.props.topNews) ? _.map(this.props.topNews, (eachNews) => <div><Link  className="link" target="_blank" >
        <p>{eachNews.title}</p></Link></div>) : null
        return (
            <div className="top-news-wrapper">
                <div className="top-news-title">
                    <p >Top News</p>
               </div>
               {topNewsDetails}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        topNews: state.app.topNews
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTopNews: () => dispatch(appActions.getTopNews())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNews)