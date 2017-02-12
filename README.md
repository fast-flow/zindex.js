# zindex.js

> To obtain the biggest zindex（dialog,tooltip,select menu need this）

```shell
npm install zindex.js --save
```

```js
var zIndex = require('zindex.js')
// zIndex(type) type: dialog-mask dialog popup tooltip

zIndex() //  1
zIndex() //  2
zIndex() //  3
zIndex('dialog-mask') //  1051
zIndex('dialog-mask') //  1052
zIndex('dialog-mask') //  1053
zIndex('dialog') //  1151
zIndex('dialog') //  1152
zIndex('dialog') //  1153
zIndex('popup') //  1251
zIndex('popup') //  1252
zIndex('tooltip') //  1351
zIndex('tooltip') //  1352
```


```js
Dialog.prototype.show = function () {
    this.dom.mask.style.zIndex = zIndex('dialog-mask') // 1051 , 1052 , 1053
    this.dom.wrap.style.zIndex = zIndex('dialog') // 1151 , 1152, 1153
}
Tooltip.prototype.show = function () {
    this.dom.wrap.style.zIndex = zIndex('tooltip') // 1351, 1352, 1353
}
```
