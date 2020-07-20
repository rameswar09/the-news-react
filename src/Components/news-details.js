import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/news-details.css'
import * as appAction from '../store/actions/app-actions'
const _ = require('lodash')
class NewsDetails extends Component {
    componentDidMount() {
        this.props.getAllNewsDetails()
    }
    render() {
        let newsId = this.props.match.params.newsId
        let getDetails = _.find(this.props.news, { title: newsId })
        let title = _.get(getDetails, 'title', null)
        let imgUrl =_.get(getDetails,'urlToImage','')
        let des= _.get(getDetails,'content',null)
        return (
            <div className="news-details-wrapper">
                <div className="news-content-wrapper">
                    <div className="news-title">
                        {title}
                    </div>
                    <div className="img-wrapper">
                    <img className="img" src={imgUrl}/>
                    </div>
                    <div className="news-content">
                        {des}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        news: state.app.allNews
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAllNewsDetails: () => dispatch(appAction.getAllNews()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewsDetails)