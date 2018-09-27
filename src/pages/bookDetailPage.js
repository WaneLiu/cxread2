import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { WingBlank, WhiteSpace, NavBar, Card } from 'antd-mobile'
import { START_GET_BOOK_DETAIL, SUCCESS_GET_BOOK_DETAIL,
    FAIL_GET_BOOK_DETAIL } from '../constants/actionTypes'
import Loading from '../components/loading';
import BookDetailContent from '../components/bookDetailContent';
import history from '../router/history';

class BookDetailPage extends PureComponent {

    renderBookDetail = (bookDetail) => {
        let ret = <div/>

        switch (bookDetail.type) {
            case START_GET_BOOK_DETAIL:
                //console.log(bookDetail.type)
                ret = <Loading title="加载中..."/>
                break
            case SUCCESS_GET_BOOK_DETAIL:
                //console.log(bookDetail.type)
                ret = <BookDetailContent bookDetail={bookDetail.bookDetail} />
                break
            case FAIL_GET_BOOK_DETAIL:
                ret = <div>{bookDetail.error}</div>
                break
            default:
                ret =  <div onClick={this.goToFirstPage}>点击跳转到首页</div>
        }
        return ret
    }
    
    goToFirstPage = () => {
        history.push({
            pathname: "/selected"
        })
    }

    render() {
        const { bookDetail } = this.props
        return (
            <WingBlank size='lg'>
                <WhiteSpace size='lg' />
                <NavBar>书籍详情</NavBar>
                <WhiteSpace size='lg' />
                    <div>
                        {this.renderBookDetail(bookDetail)}
                    </div>
                    {/* { bookDetail.type === START_GET_BOOK_DETAIL ? <div>加载中...</div> 
                        : <div>{bookDetail.bookDetail.title}</div>} */}
                    
                <WhiteSpace size='lg' />
            </WingBlank>
        )
    }
}

const mapStateToProps = state => ({
    // bookChaptersObj: state.bookChaptersObj,
    bookDetail: state.bookDetail
})

export default connect(mapStateToProps, null)(BookDetailPage)