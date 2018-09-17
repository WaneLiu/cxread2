import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { BackTop } from 'antd';

const renderSearchResult = searchBookResult => {
    //console.log(searchBookResult)
    switch (searchBookResult.type) {
        
    }
}

const SearchResultPage = ({ searchBookResult }) => {
    //console.log(searchBookResult)
    return (
        <div className="search-result-page">
            <BackTop />
            <div>sada</div>
            {renderSearchResult(searchBookResult)}
        </div>
    )
}



const mapStateToProps = state => ({
    searchBookResult: state.searchBookResult
})

export default connect(mapStateToProps, null)(SearchResultPage)

