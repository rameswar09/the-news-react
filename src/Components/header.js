import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as appAction from '../store/actions/app-actions'
import '../css/header.css';
const _ = require('lodash')


class Header extends Component {
    componentDidMount() {
        this.props.getAllSourceDetails()
        // this.props.getAllNewsDetails()
    }
    handleClickSource = (sourceId) => {
        this.props.setSourceType(sourceId)
    }

    render() {
        let newsSources = !_.isEmpty(this.props.allSource) ? _.map(this.props.allSource, (each) => <Link to={{ pathname: `/home/${each.source.id}` }} className="link">
            <div value={each.id} onClick={() => this.handleClickSource(each.source.id)}>{each.source.name}</div></Link>) : null
        return (
            <div className="app-title-wrapper">
                <div className="title">
                    The News
               </div>
                <div className="nav-bar">
                    {newsSources}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // allNews: state.app.allNews,
        allSource: state.app.allSource
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // getAllNewsDetails: () => dispatch(appAction.getAllNews()),
        getAllSourceDetails: () => dispatch(appAction.getAllSource()),
        setSourceType: (data) => dispatch(appAction.setSourceType(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)