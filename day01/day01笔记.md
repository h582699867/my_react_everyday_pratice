#### 虚拟DOM是什么(对应js中哪一种数据类型)？
- 对应的是js中普通的Object对象，只不过里面包含了一些react内部在用的一些特殊属性

#### 虚拟DOM和真实DOM的区别？
- 虚拟DOM是react内部存在的，没有真实DOM身上那么多的属性
- 虚拟DOM最终一定会转换成真实DOM放在页面

#### 虚拟DOM的两种创建方式
- jsx语法创建是最便捷的一种
- 不使用js语法创建虚拟DOM，麻烦，可读性不高
- jsx创建虚拟DOM的代码，通过babel编译一定会转化为js语法创建虚拟DOM的形式
- jsx创建虚拟DOM的方式是js语法创建虚拟DOM的语法糖

#### jsx的意义
- 存在的意义：让程序员更加方便的去创建虚拟DOM，让结构和html一样清晰
- jsx经过babel的编译，一定会转为js

#### jsx语法规则
- 不要使用引号
- 标签中混入js表达式要使用{}括起来
- 样式类名不要使用class要使用className
- 内联样式写法：style={{color:'pink',fontSize:'15px'}}
- 必须只有一个根标签
- 标签必须闭合：如<input type="text" />
- 标签的开头字母可以大写也可小写
  - 小写,jsx会把你写的标签去和html内置的进行对应
    - 对应上，把jsx标签转换为html标签，放入页面
    - 对应不上，报错，但内容可以正常展示
  - 大写，按照组件进行解析
- 遇到 < 开头就以标签语法进行解析，遇到 { 开头就以js表达式解析
- {/*jsx中的注释写法*/}

#### 区分js代码和js表达式
- 表达式：一个表达式会产生一个值，可以放在任何需要一个值的地方
  - a
  - a + b
  - demo(1)
  - arr.map()
  - function demo1(){}
- 语句(代码) 控制代码走向
  - if(){}
  - swich(){case:xxx}
  - for(){}

#### 组件的两种创建方式
- 函数模式
- 类模式

#### 当执行了ReactDOM.render(<Demo/>......之后发生了什么？
- React发现<Demo/>
  - 标签首字母为大写，
    - 检查是否定义Demo组件，如果未定义报错，
    - 调用Demo，得到返回的虚拟DOM结构，如果没有return报错
  - 标签首字母小写
    - 检查标签和html预设标签是否对应上，能则转换为同名html标签
    - 没有对应上，界面有效果但报错
  - 把返回的虚拟DOM，经过diff算法之后，转为真实DOM放入页面