#### state
- 构造器中的this是组件实例对象
- state必须为对象
- react中的状态不允许直接修改
- 更新状态必须调用setState()
- render是react中的一个重要的生命周期函数
- 只有react生命周期函数中的this才是组件实例对象
- render中的this是组件实例对象
- 初始化状态可以简写，自定义函数需要写成赋值加箭头函数形式

#### props
- 限制标签属性首先要引入prop-types
  - static propTypes = {name:PropTypes.string.isRequired}
- 设置默认值
  - static defaultProps = {name: 'tom', age: 18}
- 传值方式1
  - ReactDOM.render(<Person name="超哥" age={19} sex="男"/>,document.getElementById('test'))
- 传值方式2：react + babel 可以实现三点运算符展开对象，但仅仅用于传递标签属性的时候
  - ReactDOM.render(<Person {...p1}/>,document.getElementById('test2')) 

#### refs
- 获取DOM元素
- 该写法是字符串类型的ref,react17.x即将弃用，官方不推荐
  - <input ref="userinput" type="text"/>

#### 事件处理
- React中通过onXxx属性指定组件的事件处理函数
  - React使用的是自定义(合成)事件，而不是DOM的原生事件---良好的兼容性
  - React中事件通过事件委托的方式处理的（委托给组件最外层的元素）---效率高
  - ref能不用尽量不用

#### 受控组件与非受控组件
- 非受控组件：页面中输入类DOM的值，通过ref现用现取
- 受控组件：页面中输入类DOM的值，随着输入维护进状态（推荐）