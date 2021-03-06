# Doraemon Game Versions

This is a small project designed to make obtaining versions of Doraemon easy and simple.

[Demo 地址](https://yoniji.github.io/)


## 如何使用

所有文件都在 `public` 目录下

将版本数据输出到与 `index.html` 同目录的 `versions.json` 文件中


## 开发

### 首次使用

安装 nodeJS 后，执行：

```sh
npm install
```

### 开发

运行以下命令，即可在 <http://localhost:3000/> 实时查看效果

```sh
npm start
```

修改数据来源

在 app.js 文件末尾可以找到：

```sh
ReactDOM.render(
  <VersionsPage url="versions.json" pollInterval={3000} />,
  document.getElementById('content')
);
```

修改 url 属性即可。

此外，pollInterval 属性代表刷新间隔。


### Build

运行

```sh
npm run build
```

