# Doraemon Game Versions

This is a small project designed to make obtaining versions of Doraemon easy and simple.

## 如何使用

### 首次使用

安装 nodeJS 后，执行：

```sh
npm install
```

### Build

在命令行中执行

```sh
npm run build
```

所有文件都在 `public` 目录下


### 游戏版本数据

将版本数据输出到与 `index.html` 同目录的 `versions.json` 文件中


## 开发

运行

```sh
npm start
```

访问 <http://localhost:3000/> 即可


## 修改数据来源

在 app.js 文件末尾可以找到：

```sh
ReactDOM.render(
  <VersionsPage url="versions.json" pollInterval={3000} />,
  document.getElementById('content')
);
```

修改 url 属性即可。

此外，pollInterval 属性代表刷新间隔。

