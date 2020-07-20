import React, { Component } from 'react'
import TopNews from './top-news'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import '../css/home.css'
import Card from '../Components/antd/card'
import { Pagination } from 'antd';
import 'antd/dist/antd.css'
import Header from '../Components/header'
import * as appActions from '../store/actions/app-actions'

const _ = require('lodash')

class Home extends Component {

    state = {
        pagination: 0,
        // selectedSource: ""
    }
    onChangePage = (pageNumber) => {
        let pagination = parseInt(pageNumber) - 1
        this.setState({
            pagination
        })
    }
    componentDidMount() {
        this.props.getAllNewsDetails()
    }
    render() {
        let sourceId = this.props.match.params.source_id
        let newsDetails = []
        if (_.isEmpty(sourceId)) {
            sourceId = this.props.selectedSource
        }
        newsDetails = _.filter(this.props.allNews, (each) => {
            return each.source.id === sourceId
        })
        let sizeOfNewsDetails = _.size(newsDetails)
        let oneData = newsDetails[0]
        let sourceTitle = _.capitalize(_.get(oneData, 'source.id', ''))
        newsDetails = _.chunk(newsDetails, 10)
        let newsContent = !_.isEmpty(newsDetails[this.state.pagination]) ? _.map(newsDetails[this.state.pagination], (each) => <div><Link to={{ pathname: `/news_details/${each.title}` }} target="_blank">
            <Card url={each.urlToImage} title={each.title} description={each.description} /></Link> </div>) : null
        return (
            <div>
                <Header />
                <div className="home-wrapper">
                    <div className="top-news">
                        <TopNews />
                        <div className="news-card-wrapper">
                            <div className="source-title">
                                {sourceTitle}
                            </div>
                            <div className="news-card-content">
                                {newsContent}
                            </div>
                            <div className="pagination">
                                <Pagination defaultCurrent={1} total={sizeOfNewsDetails} onChange={this.onChangePage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStoreToProps = state => {
    return {
        allNews: state.app.allNews,
        selectedSource: state.app.selectedSource,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllNewsDetails: () => dispatch(appActions.getAllNews()),
    }
}
export default connect(mapStoreToProps, mapDispatchToProps)(Home)