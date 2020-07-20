import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/news-details.css'
import * as appActions from '../store/actions/app-actions'
const _ = require('lodash')
class TopNewsDetails extends Component {
    componentDidMount() {
        this.props.getTopNews()
    }
    render() {
        let newsId = this.props.match.params.newsId
        let getDetails = _.find(this.props.topNews, { title: newsId })
        let title = _.get(getDetails, 'title', null)
        let imgUrl = _.get(getDetails, 'urlToImage', '')
        let des = _.get(getDetails, 'content', null)
        return (
            <div className="news-details-wrapper">
                <div className="news-content-wrapper">
                    <div className="news-title">
                        {title}
                    </div>
                    <div className="img-wrapper">
                        <img className="img" src={imgUrl} />
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
        topNews: state.app.topNews
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTopNews: () => dispatch(appActions.getTopNews())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopNewsDetails)