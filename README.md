# calculator

## intro
使用vue3+jsx实现基础计算器功能。
集成  `mocha` 及 `chai` 进行单元测试

## “calculator”模块
/utils/calculator.js 模块实现了计算器的计算逻辑，它是一个很契合单元测试的模块，因为没有涉及到I/O操作，是一个纯函数。只需要check输入输出是否符合测试断言。（ps: 任何和浏览器 API 有关的都是 I/O 操作)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

