import React from 'react'
import { connect } from 'react-redux'

const BookDetailContent = ({ bookDetail, bookChapterList}) => {
    if (JSON.stringify(bookDetail) === "{}")
        return <div>书籍不存在</div>
    return (
        <div></div>
    )
}
export default BookDetailContent
//export default connect()(BookDetailContent)