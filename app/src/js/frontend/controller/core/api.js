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

    phoneApi(){
        var almApp = angular.module('almApp', []);
        almApp.controller('almCtrl', function($scope) {
          $scope.currencyVal;
        });
        almApp.directive('phoneInput', function($filter, $browser) {
            return {
                require: 'ngModel',
                link: function($scope, $element, $attrs, ngModelCtrl) {
                    var listener = function() {
                        var value = $element.val().replace(/[^0-9]/g, '');
                        $element.val($filter('tel')(value, false));
                    };
                    ngModelCtrl.$parsers.push(function(viewValue) {
                        return viewValue.replace(/[^0-9]/g, '').slice(0,10);
                    });
                    ngModelCtrl.$render = function() {
                        $element.val($filter('tel')(ngModelCtrl.$viewValue, false));
                    };
                    $element.bind('change', listener);
                    $element.bind('keydown', function(event) {
                        var key = event.keyCode;
                        if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40)){
                            return;
                        }
                        $browser.defer(listener);
                    });
                    $element.bind('paste cut', function() {
                        $browser.defer(listener);
                    });
                }
            };
        });
        almApp.filter('tel', function () {
            return function (tel) {
                if (!tel) { return ''; }
                var value = tel.toString().trim().replace(/^\+/, '');
                if (value.match(/[^0-9]/)) { return tel; }
                var country, city, number;
                switch (value.length) {
                    case 1:
                    case 2:
                    case 3:
                        city = value;
                        break;
                    default:
                        city = value.slice(0, 3);
                        number = value.slice(3);
                }
                if(number){
                    if(number.length>3){
                        number = number.slice(0, 3) + '-' + number.slice(3,7);
                    }
                    else{
                        number = number;
                    }
                    return ("(" + city + ") " + number).trim();
                }
                else{
                    return "(" + city;
                }
            };
        });
        var myApp = angular.module('myApp', ['moment-picker']);
    }

}