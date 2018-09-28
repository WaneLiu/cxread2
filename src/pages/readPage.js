import React from 'react'
import { connect } from 'react-redux'
import { SUCCESS_GET_CUR_CHAPTER_CONTENT } from '../constants/actionTypes'
import Loading from '../components/loading'
const ReadPage = ({ bookChaptersObj, chapterContent }) => {
    //console.log(chapterContent)
    return (
        chapterContent.type === SUCCESS_GET_CUR_CHAPTER_CONTENT ?
        <div dangerouslySetInnerHTML={{__html: chapterContent.chapterContent.body}}></div> : <Loading title="加载中..." />
    )
}

const mapStateToProps = state => ({
    bookChaptersObj: state.bookChaptersObj,
    chapterContent: state.chapterContent
})

export default connect(mapStateToProps, null)(ReadPage)