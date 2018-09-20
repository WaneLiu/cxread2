import React from 'react'
import { connect } from 'react-redux'

const ReadPage = ({ bookChaptersObj }) => {
    return (
        <div>read page</div>
    )
}

const mapStateToProps = state => ({
    bookChaptersObj: state.bookChaptersObj
})

export default connect(mapStateToProps, null)(ReadPage)