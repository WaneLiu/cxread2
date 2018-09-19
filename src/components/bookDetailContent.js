import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { IMG_BASE_URL } from '../constants/api';

const getWordCount = (count) => {
    return count > 10000 ? (count / 10000).toFixed(2) + '丸子' : count + '字'
}

const formatDate = (date) => {
    return date.split('T')[0]
}

const getFullUrl = (curUrl) => {
    if(curUrl.indexOf(IMG_BASE_URL)!=-1){
        return curUrl;
    }
    console.log(IMG_BASE_URL + curUrl)
    return IMG_BASE_URL + curUrl;
}

const BookDetailContent = ({ bookDetail }) => {
    return (
        <div>
            <img src={getFullUrl(bookDetail.cover)} />
            <div>
                <div>{bookDetail.title}</div>
                <div>类别：{bookDetail.majorCate}</div>
                <div>紫薯: {getWordCount(bookDetail.wordCount)}</div>
                <div>最新更新时间: {formatDate(bookDetail.updated)}</div>
            </div>
        </div>
    )
}

export default BookDetailContent