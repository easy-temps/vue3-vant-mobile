# 页面滚动位置保存与恢复指南

如果你希望在离开页面时保存当前的滚动位置，并在返回时恢复它，可以参考下面的实现思路：

## 基本思路

1. **缓存组件**：
   设置 `keepAlive` 为 `true` 以缓存组件。

2. **保存滚动位置**：
   在页面离开时，使用 `onBeforeRouteLeave` 钩子保存当前滚动位置。

3. **恢复滚动位置**：
   在页面激活时，使用 `onActivated` 钩子恢复上次的滚动位置。

## 示例代码

```js
// 定义一个 ref 用于存储滚动位置
const scrollTop = ref(0)

// 当 keepAlive 为 true 的组件被激活时，滚动到保存的位置
onActivated(() => {
  window.scrollTo(0, scrollTop.value)
})

// 在路由离开前，保存当前的滚动位置
onBeforeRouteLeave(() => {
  scrollTop.value
    = window.scrollY
      || document.documentElement.scrollTop
      || document.body.scrollTop
})
```

# 针对指定滚动容器的处理

如果你需要对特定元素（而非整个窗口）进行滚动位置的保存和恢复，可按以下步骤操作：

## 1. 在 Template 中添加 ref

在模板中，给滚动容器元素添加 `ref` 属性。例如：

```html
<div ref="scrollContainer" class="...">...</div>
```

## 2. 在 setup 中：

使用 ref 获取该元素的引用：

```js
const scrollContainer = ref(null)
```

## 3. 在 onBeforeRouteLeave 钩子中：

保存滚动容器的滚动位置：

```js
onBeforeRouteLeave(() => {
  if (scrollContainer.value) {
    scrollTop.value = scrollContainer.value.scrollTop
  }
})
```

## 3. 在 onActivated 钩子中：

恢复滚动容器的滚动位置：

```js
onActivated(() => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTop = scrollTop.value
  }
})
```

万事 OK 👌🏻
