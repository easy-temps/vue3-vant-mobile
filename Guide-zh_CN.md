<h1 align="center">使用指南</h1>

<p align="center">指南非常地详细，并非说明上手多么地复杂，只是更好的使用它做的说明而已</p>

简体中文 / [English](./Guide.md)

### 开始使用

本模板采用2023年最新技术栈开发，汇聚了 Vue 生态最新工具流，包括不限于 Vue3、Vite4、Pinia2、Vitest、TypeScript，前端组件库选用接受度最高的 Vant4 （按需使用）进行搭建，开发者可以在此基础模板之上，快速构建移动端应用。

### 包管理器

推荐使用 [pnpm](https://pnpm.io/) 来进行包管理，可以极大地减少install时间, 而且非常节省磁盘空间。

### 目录结构

下面是模板的主要目录结构和一些简要地说明。

```
├── .husky
│   └── commit-msg           # commit 信息校验
|   └── pre-commit           # eslint 代码检验
├── src
│   ├── api                  # Api ajax 等
│   ├── assets               # 本地静态资源
│   ├── layouts              # 封装布局组件
│   ├── components           # 业务通用组件和基础布局组件
│   ├── router               # Vue-Router
│   ├── store                # Pinia
│   ├── utils                # 工具库
│   ├── views                # 业务页面入口和常用模板
│   ├── App.vue              # Vue 模板入口
│   └── main.ts              # Vue 入口 JS
│   └── app.less             # 全局样式
│   └── env.d.ts             # 全局公用 TypeScript 类型
├── build/mock               # mock 服务
├── mock                     # mock 数据
├── plop-templates           # 代码块生成
├── public                   # 静态文件
├── scripts                  # 公共执行脚本
├── tests                    # 单元测试
├── plopfile.js              # plop 入口
├── auto-imports.d.ts        # Vue3 组合式API 类型声明文件
├── components.d.ts          # 组件自注册类型声明文件
├── vite.config.ts           # Vite 配置文件
├── tsconfig.json            # TS 配置文件
├── index.html               # 浏览器渲染入口
├── Guide.md                 # 使用指南
├── README.md                # 简单介绍
└── package.json             # 项目的依赖
```

### 本地开发

克隆原仓库的代码到本地。

```bash
git clone https://github.com/CharleeWa/vue3-vant-mobile.git
```

进入代码目录，安装项目的依赖。

```bash
cd vue3-vant-mobile

# with pnpm
pnpm install

```

> 如果网络状况不佳，可以设置 pnpm 的 npm 加载源，如 pnpm config set registry https://registry.npmmirror.com

完成前面的步骤以后，就可以启动项目，开始进行业务开发了。

```bash
pnpm dev
```

### 新增页面

这里的『页面』指配置了路由，能够通过链接直接访问的模块，要新建一个页面，通常只需要在脚手架的基础上进行简单的配置。

脚手架除了手动创建以外，还集成了 `plop`，一种代码片段快速生成插件，避免重复拷贝粘贴工作。

- 命令式创建

这里已经为大家预置了两种：`view` 和 `component`，选择一个之后按回车键就可以在项目目录的左侧看到了。

```bash
pnpm plop
```

- 手动创建

在 src/views 下新建页面的vue文件，如果相关页面有多个，可以新建一个文件夹来放置相关文件。

值得提醒的是，样式文件默认使用 `Less`，如果想要集成其它预处理器，如 `Sass` 和 `Stylus`，请自行安装。

最后，记得将新建的文件加入路由 - router/index.ts


### 新增业务组件

对于一些可能被多处引用的功能模块，建议提炼成业务组件统一管理。这些组件一般有以下特征：

- 只负责一块相对独立，稳定的功能；
- 没有单独的路由配置；
- 可能是纯静态的，也可能包含自己的 state，但不涉及 pinia 的数据流，仅受父组件（通常是一个页面）传递的参数控制。

这里以一个简单的静态组件为例进行介绍。假设你的应用中经常需要展现图片，这些图片有固定的高度和宽度，有背景颜色，还有一段文字介绍。你可以用一个组件来实现这个功能，它有默认的样式，同时可以接收父组件传递过来的参数进行展示。

- 1、新建文件

在 src/components 下新建一个以组件名命名的文件夹，注意首字母大写，命名尽量体现组件的功能，这里就叫 image-wrapper。在此文件夹下新增 js/ts/vue 文件及样式文件（如果需要），命名为 index.ts和 index.less。

> 如果你的组件比较复杂，可以分为多个文件，最后在 index.ts 中统一 export。

你的代码大概是这个样子：

```
<template>
	<div class="image-wrapper">
		<img class="img" :src="src" :alt="desc" />
    <!-- 如果使用该组件的使用者没用 slot，则默认 div.desc 来输出传递的 desc 属性 -->
		<slot name="desc">
			<div class="desc" v-if="desc">{{ desc }}</div>
		</slot>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
  src: String,
  desc: String,
})
</script>
```

- 2、使用

在要使用这个组件的地方，按照组件定义的 API 传入参数，直接使用就好:

```
<template>
	<!-- 普通使用方式 -->
	<image-wrapper :src="state.imageSrc" :desc="state.context"></image-wrapper>
	
	<!-- 使用 slot 的 desc 方式 -->
	<image-wrapper :src="state.imageSrc">
		<template #desc>
      <span>{{ state.context }}</span>
		</template>
	</image-wrapper>
</template>

<script setup lang="ts">
const state = reactive({
  context: '示意图',
  imageSrc: 'xxxxxxxxx.png'
})
</script>
```

值得说明的是，我们不必先引入组件再使用组件，也不必先引入Vue3 API再使用API，因为这一切都由 `unplugin-vue-components` 和 `unplugin-auto-import` 帮我们做好了。
