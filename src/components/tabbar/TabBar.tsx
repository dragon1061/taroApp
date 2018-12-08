import Taro, { Component, navigateTo, redirectTo } from '@tarojs/taro'
// import { AtTabBar } from 'taro-ui'


class TabBar extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    if(value === 0){
      Taro.navigateTo({
        url: '../index/index'
      })
    }else if(value === 1){
      Taro.navigateTo({
        url: '../car/index'
      })
    }else if(value === 2){
      Taro.navigateTo({
        url: '../member/index'
      })
    }
    this.setState({
      current: value
    })
  }
  render () {
    return (

        <View></View>
      //   <AtTabBar className='roottabbar' fixed tabList={[
      //     { title: '首页', iconType: 'bullet-list' },
      //     { title: '购物车', iconType: 'camera' },
      //     { title: '我的', iconType: 'folder' }
      //   ]}
      //   onClick={this.handleClick.bind(this)}
      //   current={this.state.current}
      // />
      
    )
  }
 

