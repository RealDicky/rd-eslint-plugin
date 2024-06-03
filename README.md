### 自动eslint工具小插件

#### 自动更换函数内的变量
```js
/**
 * test
 * 
 * save and auto change token
 */

// rd:ct:h1 -> h3
function test1 (h1) {
  const h2 = h1
  console.log('h1');
  
  return h2 + h1
}

// rd:ct:h1 -> h3

const test2 = (h1) => {
  const h2 = h1
  console.log('h1');
  
  return h2 + h1
}


```