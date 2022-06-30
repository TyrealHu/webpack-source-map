# 简易cli学习部分
# webpack解析

## webpack生成的产物
产物的解析放在`assets/webpack-dist.js`中
### 产物包括一下几个
- `__webpack_modules__`，这个模块表示的是定义好的webpack模块，除了入口文件，其他所有依赖的文件都会放在这个module当中
- `__webpack_module_cache__`，这个模块是用于require储存的，这个对象与`__webpack_require__`有关，在这个函数当中会从cache中声明对象来做储存
- `__webpack_require__`，这个模块是webpack当中重要的模块，所有的import以及require都会切换成`__webpack_require__`这个方法，在这个方法中先判断cache中是否有`exports`，如果有的话那么就会直接引用，如果没有的话那么就会从`__webpack_modules__`中去获取
- `__webpack_require__.d`，目前看到是给exports上面定义属性与值，然后这个exports是在cache中获取到的
- `__webpack_require__.o`，这就是hasOwnProperty的简写而已，并没有别的内容
- `__webpack_require__.r`，这里是给exports定义__esModule属性，这些在以后的导入导出中有作用，标识其为esm
- 最后则是入口函数，webpack的执行就是从入口函数开始的