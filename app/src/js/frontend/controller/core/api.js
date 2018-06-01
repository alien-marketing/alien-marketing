class API {

    unique(arr, comparator) {
        let uniqueArr = [];
        for (let i in arr) {
            let found = false;
            for (let j in uniqueArr) {
                if (comparator instanceof Function) {
                    if (comparator.call(null, arr[i], uniqueArr[j])) {
                        found = true;
                        break;
                    }
                }
                else {
                    if (arr[i] == uniqueArr[j]) {
                        found = true;
                        break;
                    }
                }
            }
            if (!found) {
                uniqueArr.push(arr[i]);
            }
        }
        return uniqueArr;
    }

    randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    }

    trimContent(str,trim) {
    	let content;
    	if(str.length > trim) {
    		content = str.substring(0,trim) + ' ...';;
    	}
    	else {
    		content = str;
    	}
    	return content;
    }

}