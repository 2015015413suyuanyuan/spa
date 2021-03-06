# SPA富应用开发
## 第一节

课程流程：
1.SPA介绍
2.安装开发环境
3.做一个简单的APP

### SPA富应用开发（spa：single page application）

spa富应用开发

SPA 单页面的应用程序

**富应用** RIA：rich internet application 交互的

将webAPP做成和Windows应用一样 响应速度 细致 交互很快 的应用 叫 富应用

例子：

1. 在线脑图 Visio naotu.baidu.com  processon.com  gmail.com  
html  超文本标记语言：做信息共享 做页面 现在可以统一接口 跨平台等等  
2. audio video 对视频 音频的支持，浏览器原生支持  
3. 像素级的图像处理，例如：在线版的Photoshop  

在网络上完成，不需要下载更新占内存等，有很多优势


用记事本举例子：

 
页面：前端 UI：GUI（graphic user interface 图形用户界面）WUI（web应用程序的用户界面） CLIS （用户界面、接口、交界面：user   interface）TUI

**界面要素:**

**menubar :** 菜单栏  
> **级联菜单**（可能还有下一级菜单）  
> **系统菜单**  
> **上下文菜单**  
 

**statusbar** : 状态栏  
**dialog box** : 对话框：无模态对话框：不影响主窗体做操作  模态对话框：不关闭主窗口无法操作  
**窗口小控件** : widget

自顶向下分解：窗口（window）
 

**MVC：model view controller**
 
对话框就是controller

一、简介 一次  
二、UI(7次课)  
>   1.H5内置控件的用法 1次  
>   2.数据合法性校验 1次  
>  3.第三方组件 1次  
>  4.自定义UI组件 2/3次 **重点**  
>  5.spa   1次  
>  6.MVC  1次  不用框架 自己搭架构  

三、data storage    1次  
四、文本、图像  1次  
	  音频、视频   1次  
五、自动化构建 grunt  

\>上下级关系 +平级关系
```
div.rectangle>label+input.-width[type=’textbox’]+ label+input.-height[type=’textbox’]+
label+input.-width[type=’textbox’]+
label+input.-calc[type=’button’]+
label+input.-[type=’textbox’]|bem

```

BEM：css 的命名规范 目的：让css的命名不冲突  
**block element modify**  
Ctrl Y /注释  
div外面加div  Ctrl y   例如放form里面  输入form 加回车  
alias: lrd live reload热加载  

：lclose  关闭注释


# 第二节 H5内置控件
## 1、界面设计原则  
### 相关性（容器内部） 布局
	
**窗体**  
**页面**  
**菜单**（是什么 是这个应用程序暴露出来的所有功能 都在菜单里面  菜单需要分组、级联）  
**工具栏**（他并不所有的功能，而是常用的功能，是所有功能的子集，常用的一个集合）  
菜单 工具栏都是应用程序为用户提供的功能

考虑输入什么信息，用什么控件，控件的功能作用，合理使用。例如：radio button CheckBox 何时运用
**控件** ：输入（input textbox（既可以输入 也是展示信息） button） 输出（label的好处 点击label 就是在input里面获得焦点）

**页面**：对齐  简单 简洁（把生活实物和界面做完全的一一对应 ×）颜色（删除按钮的颜色一致） 字体文字（不同界面 统一术语 如：添加 增加 新增）（强调一致、简单 按钮的位置）

UI widget 属性 方法 事件  
> 按钮类  
> 文本框  


# 第三节   数据合法性校验  
### 1、什么是数据合法性校验

对用户的输入数据 进行检查

UI：in（用户输入） out（信息展示）

**校验** ：空值  类型 （Boolean number）范围（number string）模式

### 2、数据合法性校验的好处、用处、价值

>	保证用户提供的数据是有效的、正确的。（用户输入后可能存入数据库或者利用他们参与运算）  
>	保护用户。（例如：密码 密码确认）  
>	保护软件（非法数据可能导致崩溃和异常）  

**流程、过程** ：  
用户输入 （检查数据 如果发现非法提示信息具体明确）（容错  如果有错可以帮用户改正确）

### 3、数据合法性校验的方案

#### 方案一：  
客户端校验：优势：速度快 反馈及时
服务器端校验：  

#### 方案二：  
字符级：keydown的时候校验  
字段级：一个输入框一个输入框校验  字段验证：当未通过时 还是在这一行（onfocusout）  
表单级（窗体、集中校验）：只在提交或者计算之前进行校验  

#### 方案三：  
自己实现 H5内置 混合  

### 4、数据合法性校验的具体实现

### 5、实现数据合法性校验的技术细节  
>	事件  选择事件依据校验级别
>	正则表达式
>	IF校验

**H5的校验技术细节**：

1、控件类型 input type=‘’number tel  url  email  
2、伪类（用来控制样式）  
3、属性 min max maxlength pattern( 写正则表达式 )  
4、方法  


## 第四节 第三方组件
#### 第三方组件库：jquery UI  jQuerymobile  We UI  Lay UI jquery Easy UI  
#### 第三方组件:
组件库的需求的原因：
>   1、H5的控件是逐步完善的  
>   2、H5的组件只是定义了标准，实现方式不同，在不同的浏览器，组件表现是不一样的，虽然功能是一样的。浏览器厂商实现的不一致  
>   3、内置的组件不够用  

#### 第三方组件
>   1、百度 Echant 在页面上添加  
>   2、语法高亮 highlight.js  在页面上添加代码  
>   3、handsontable  
>   4、百度地图  
>   5、mathQuill  

## 第五节  自定义组件

1、分而治之  容易搭建

>  优势  
>  降低问题的复杂度 规模  
>  并行开始  

2、容易分工 A做A组件 B做B组件 等等

**为何有那么多组件，还需要自己自定义组件呢？**

>  各个组件可能可以找到，但是大的拼接在一起的组件，可能找不到。应用程序的功能各不相同，所以需要掌握组件封装的技术。

**组件分类**：

1. 容器 指定容器 与 不指定容器  位置：DOM结点的什么位置

2. DOM 自生成DOM 与 利用已有的DOM

3. 组件的依赖  独立组件（只需引用组件） 与 非独立组件（引用组件的依赖项）  比方说你用jQuery写的，如果不引用，就不能正常运行

位置：DOM结点的什么位置

**具体实现**  实现组件的技术细节

1. 非组件的功能   ---> 测试  
2. 封装  --->测试  
>  ① 封装后的形态  
>  1.fn  **√** return DOM  
>  2.构造函数 使用时：new A()  
>  3.{} object  
>  4.DOM对象  
>      2.3方法需要自己实现事件机制  
>  ② 接口  
>  1.init : title tlength enabled 格式  
>  2.事件  
**组件实现**  
1.DOM绘制:  
>  1.浏览器原生API  
>  2.jquery : $html()  $append($)
3. 测试


上节课复习：  
js :

fn  return  返回jQuery的一个对象  函数都有返回值  
> 好处：事件是自包含的  内含事件机制  不用自己实现事件机制

constructor fn

{} obj

剩下的两个没有事件机制  所谓的订阅者模式 观察者模式

最后一个创建一个对象，一个对象的引用，创建全剧唯一的。前面两个是多个

##  第六节
前端组件库的一个用法：

require.js:  
>> 1. 多个JS文件引用不美观 只有一个main的标签  
>> 2. js组件之间有依赖 例如：先引入jQuery 再引用我们的JS 解决重复依赖关系  
>> 3. 前端js优化：把js文件打包压缩了。 按需加载 延迟加载 （需要的时候加载，不需要的时候不加载）

## 第七节  组件化（下）

好处：分而治之  
那难以解决的大规模的问题，变成容易解决的小规模的问题。分解之后可以实现并行开发  

案例是一个企业的MIS管理后台

学籍管理 成绩管理 图书管理 设备管理


MIS系统： management information system  各种什么什么管理系统    
数据库表的CURD:create delete update retrieve  
抽象来说：database table 的  CURD操作 增删改查

前后端分离：ajax技术  局部刷新

前后端分离：如何实现现有用PHP写的页面  
提供思路：  
> a.js 是前台程序还是后台程序  
> 部署在服务器上  
> 前台是在浏览器环境 后台在服务器环境  
> 前台通过URL 下载到browser浏览器上 运行环境是浏览器，script标签上就有浏览器地址    
> 后台不会下载到浏览器上，放在服务器的运行环境解析的  
> 如果在前台浏览器，代码压缩，所以需要;  
>  
>> 前台代码为什么要进行压缩：减少js文件的加载，加快速度  

> 后台代码不会进行压缩

前端产品：  
.html .css .js

后端产品：  
restfulAPI
http:get post put delete  url路由  通过这些对数据进行增删改查操作  

前端主流的模式：  
SPA:single page application
web page
一个 *.html 多个 .css .js  
单页 登陆页面就是一个组件

login  
index APP主页  

body  
- 	div#admin-app  
- 	login-com  
- 	header  
- 	menu  
- 	stage 面板 对话框  
- 	footer  
    
model:  menus config table1 table2 
view:  header menu footer stage:panel dialog
controller:  menu