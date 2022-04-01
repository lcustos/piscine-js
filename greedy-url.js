//getURL that returns an array with all valid URLs present in a data-set, http and https

function getURL() {
    var url = [];
    var urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var urlArray = data.match(urlRegex);
    for (var i = 0; i < urlArray.length; i++) {
        url.push(urlArray[i]);
    }
    return url;
}

//greedyQuery that returns URL with at least 3 or more parameters from all URLs that contain a query.

function greedyQuery() {
    var url = [];
    var urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var urlArray = data.match(urlRegex);
    for (var i = 0; i < urlArray.length; i++) {
        var urlRegex2 = /\?/gi;
        var urlArray2 = urlArray[i].match(urlRegex2);
        if (urlArray2.length >= 3) {
            url.push(urlArray[i]);
        }
    }
    return url;
}

//notSoGreedy that returns URL with at least 2, but not more then 3 parameters from all URLs that contain a query.

function notSoGreedy(url) {
    var url = [];
    var urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var urlArray = data.match(urlRegex);
    for (var i = 0; i < urlArray.length; i++) {
        var urlRegex2 = /\?/gi;
        var urlArray2 = urlArray[i].match(urlRegex2);
        if (urlArray2.length >= 2 && urlArray2.length <= 3) {
            url.push(urlArray[i]);
        }
    }
    return url;
}