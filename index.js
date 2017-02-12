var _map = {
    'default': 0,
    'dialog-mask': 1050,
    'dialog': 1150,
    'popup': 1250,
    'tooltip': 1350,
}
module.exports = function (type) {
    type = type || 'default'
    if (typeof _map[type] === 'undefined') {
        var types = []
        for(var key in _map) {
            types.push(key)
        }
        throw new Error('node_modules/z-index.js: zIndex(type) Only support (' + types.join(' ') + ')')
    }
    _map[type] = _map[type] + 1
    return _map[type]
}
