## 项目里集成了react-navigation + redux + code-push(iOS端)
### react-navigation使用说明
1. 在每个页面里单独设置了每个页面的tabBarLabel,tabBarIcon,要修改这两个属性的话请在单独的页面里的static navigationOptions方法里修改.
2. 在TabNavigatorPage设置了底部导航栏的一些属性,如果想要添加或者修改这些属性.
3. 有关react-navigation使用方法请自行查阅react-navigation文档.
### redux使用说明
1. redux已经成功的与react-navigation集成,每次切换页面都可以使TabNavigator属性刷新,想要获取页面属性,可以使用this.prop.nav.xxx.
2. redux已经配置完毕,action/reducer/store写在了不同的文件夹里,方便项目后期维护,便于管理.
3. 有关redux的使用方法清自行查阅文档.
### code-push(热更新)使用方法
1. ios端的code-push(热更新已经配置好),使用时将info.plist文件里的CodePushDeploymentKey的值设置为自己APP的deployment-key即可.
2. 在App.js文件里的componentDidMount()方法里有热更新的初步配置,用户可根据自身需求更改.
3. 有关code-push使用方法请自行查阅文档.
