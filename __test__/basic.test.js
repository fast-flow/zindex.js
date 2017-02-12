var zIndex = require('../index')
it('basic', function () {
    expect(zIndex()).toEqual(1)
    expect(zIndex()).toEqual(2)
    expect(zIndex('dialog-mask')).toEqual(1051)
    expect(zIndex('dialog-mask')).toEqual(1052)
    expect(zIndex('dialog')).toEqual(1151)
    expect(zIndex()).toEqual(3)
    expect(zIndex('dialog-mask')).toEqual(1053)
    expect(zIndex('dialog')).toEqual(1152)
    expect(zIndex('dialog')).toEqual(1153)
    expect(zIndex('popup')).toEqual(1251)
    expect(zIndex('popup')).toEqual(1252)
    expect(zIndex('tooltip')).toEqual(1351)
    expect(zIndex('tooltip')).toEqual(1352)
    var errorMessage = 'empty'
    try {
        zIndex('abc')
    }
    catch (e) {
        errorMessage = e.message
    }
    expect(errorMessage).toEqual('node_modules/z-index.js: zIndex(type) Only support (default dialog-mask dialog popup tooltip)')
})
