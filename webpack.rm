# Webpack 开发环境搭建

>本项目为开发脚手架，从svn下载后，请另行拷贝一份开始新项目的开发，不要上传业务代码到本项目。

## 1 安装

### 1.1 安装Node.js 8.x版本

[Node.js 官网地址](http://nodejs.org/)

### 1.2 用npm安装依赖包

进入项目的根目录后执行：
```
$ npm install
```

__注意：如果是Mac环境，需要安装libpng：__
```
$ brew install libpng
```


## 2 绑定host

### 2.1 [Windows环境](https://jingyan.baidu.com/article/c45ad29c1dd610051653e25c.html)

在 `C:\windows\system32\drivers\etc\hosts` 文件中添加：
```
127.0.0.1 test.sina.cn
```

### 2.2 [Mac环境](https://jingyan.baidu.com/article/fec4bce2690417f2618d8b07.html)

在 `/etc/hosts` 文件中添加：
```
127.0.0.1 test.sina.cn
```


## 3 运行命令

**注意在Mac环境下执行以下命令时，命令前需要加sudo**

### 3.1 开发环境

```
$ npm run dev
```

### 3.2 打包生产环境代码

```
$ npm run build
```


## 4 新建文件

### 4.1 新建HTML文件

在`pages/html`文件夹下新建一个名为 `index.html` 的文件，编写相关的HTML结构：
```html
<div class="hello">Hello World</div>
```

### 4.2 新建CSS文件

在`pages/scss`文件夹下新建一个名为 `index.scss` 的文件，编写`index.html`需要引用的样式：
```css
.hello {color: red}
```

### 4.3 新建JS文件

在`pages/js/page`文件夹下新建一个名为 `index.js` 的文件：

#### 4.3.1 引入样式文件

```javascript
require('scss/index.scss');
```

#### 4.3.2 编写业务代码

```javascript
console.log('Hello World');
```
