export function loadBMap(funcName) {
    var script = document.createElement("script");
    script.src = "http://api.map.baidu.com/api?v=2.0&ak=KvPThV8Fma7WgNSGhmxHLW2o0go53osw&callback=" + funcName;
    document.body.appendChild(script);
}