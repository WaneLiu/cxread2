import React, { PureComponent } from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import history from '../router/history'
import BookShelfves from "../pages/bookShelvesPage";
import TabBar from './tabBar';
import ItemBar from './itemBar';
import selectedPage from '../pages/selectedPage';
import RankPage from '../pages/rankPage';
import SearchResultPage from '../pages/searchResultPage';
import BookDetailPage from '../pages/bookDetailPage';
/**
 * 自己写的导航栏组件
 * 本组件由itemBar与tabBar拼接而成
 */

class BookNavBar extends PureComponent {

    render() {
        return (
            <Router history={history}>
                <div style={{
                    height: '100%'
                }}>
                    
                    <Switch>
                        <Route exact path="/bookshelves" component={BookShelfves}/>
                        <Route exact path="/selected" component={selectedPage}/>
                        <Route exact path="/rank" component={RankPage}/>
                        <Route exact path="/my" component={BookShelfves}/>
                        <Route exact path="/search" component={SearchResultPage}/>
                        <Route exact path="/bookDetail" component={BookDetailPage} />
                    </Switch>
                    <div style={{
                        width: '100%',
                        backgroundColor: 'aqua',
                        minHeight: '100%'
                    }}>
                        <TabBar>
                            <ItemBar text="书架" name="bookshelves" />
                            <ItemBar text="精选" name="selected" />
                            <ItemBar text="排行榜" name="rank" />
                            <ItemBar text="我的" name="my" />
                        </TabBar>
                    </div>
                </div>
            </Router>
        )
    }
}

export default BookNavBar