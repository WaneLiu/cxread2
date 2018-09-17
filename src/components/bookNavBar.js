import React, { PureComponent } from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import history from '../router/history'
import BookShelfves from "../pages/bookShelvesPage";
import TabBar from './tabBar';
import ItemBar from './itemBar';
import selectedPage from '../pages/selectedPage';
import RankPage from '../pages/rankPage';
import SearchResultPage from '../pages/searchResultPage';
/**
 * 自己写的导航栏组件
 * 本组件由itemBar与tabBar拼接而成
 */

class BookNavBar extends PureComponent {

    render() {
        return (
            <Router history={history}>
                <div>
                    <div style={{
                        position: 'absolute',
                        bottom: '0',
                        width: '100%',
                        height: '35px',
                        backgroundColor: 'aqua',
                    }}>
                        <TabBar>
                            <ItemBar text="书架" name="bookshelves" />
                            <ItemBar text="精选" name="selected" />
                            <ItemBar text="排行榜" name="rank" />
                            <ItemBar text="我的" name="my" />
                        </TabBar>
                    </div>
                    <Switch>
                        <Route exact path="/bookshelves" component={BookShelfves}/>
                        <Route exact path="/selected" component={selectedPage}/>
                        <Route exact path="/rank" component={RankPage}/>
                        <Route exact path="/my" component={BookShelfves}/>
                        <Route exact path="/search" component={SearchResultPage}/>

                    </Switch>
                </div>
            </Router>
        )
    }
}

export default BookNavBar