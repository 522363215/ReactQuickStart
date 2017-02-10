import keyMirror from 'keymirror';

const Types = keyMirror({
    UNHANDLE: null, // 未处理

    REQUEST_BEGIN: null, // 请求开始
    REQUEST_SUCCESS: null, // 请求成功
    REQUEST_FAIL: null, // 请求失败,失败是指不能连接到服务器
    REQUEST_ERROR: null, // 请求错误是指服务器错误

    TODO: null
});

export default Types;