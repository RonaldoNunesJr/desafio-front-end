let ajax = {
    get : function (url, callback) {
        let ajax = new XMLHttpRequest();
        ajax.open("GET", url, true);
        ajax.send();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200) {
                var data = ajax.responseText;
                callback(data);
            }
        }
    }
}