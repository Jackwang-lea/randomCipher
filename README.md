# 🔐 随机密码生成器

一个使用Vue 3、TypeScript、Vite和UnoCSS构建的美观且功能强大的随机密码生成器。

![密码生成器预览](./screenshot.png)

## ✨ 功能特点

- 生成可自定义长度（4-32个字符）的安全随机密码
- 可选择包含或排除大写字母、小写字母、数字和特殊符号
- 直观的密码强度指示器
- 一键复制到剪贴板
- 响应式设计，支持深色模式
- 使用UnoCSS的现代UI界面

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 🌐 部署

本项目已配置为易于部署到GitHub Pages。您可以使用以下方法之一进行部署：

### 方法一：手动部署（快速）

```bash
# 构建并部署到GitHub Pages
npm run deploy
```

此命令将构建您的项目并将其发布到您存储库的gh-pages分支。

### 方法二：自动部署（推荐）

1. 将代码推送到GitHub的新存储库
2. 转到存储库设置 → Pages
3. 将源设置为"GitHub Actions"
4. 每当你推送到main分支时，GitHub Actions将自动部署你的网站

部署完成后，您的网站将在以下地址可用：

```
https://你的用户名.github.io/存储库名称/
```

### 完成设置

1. 确保你的存储库是公开的（或者你有GitHub Pro可以使用私有存储库）
2. 提交并推送我们所做的所有更改
3. 等待GitHub Actions工作流完成首次部署

您的随机密码生成器现在将在线上可供任何人使用！

## 🛠️ 技术栈

- [Vue 3](https://vuejs.org/) - 渐进式JavaScript框架
- [TypeScript](https://www.typescriptlang.org/) - 带类型的JavaScript
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [UnoCSS](https://unocss.dev/) - 即时原子CSS引擎


