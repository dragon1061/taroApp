import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
// import { TabBar } from '../../components/tabbar/TabBar'
import './index.scss'



export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      searchValue:''
    }
  }

  onChange (value) {
    this.setState({
      searchValue: value
    })
  }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }
  
  componentWillMount () { 
  
  }

  componentDidMount () {
    // Taro.setTabBarBadge({
    //   })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const isLoggedIn = process.env.TARO_ENV === 'weapp' ? true : false ;
         
    return (
      <View className='index'>
      
      {/* 顶部搜索框背景View */}
      
      </View>
    )
  }
}

