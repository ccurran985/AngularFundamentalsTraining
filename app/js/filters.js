'use strict';

app.filter('duration', function () {
    return function (duration) {
        switch (duration) {
            case 1:
                return 'Half an Hour'; break;
            case 2:
                return 'Hour'; break;
            case 3: 
                return 'Half a day'; break;
            case 4:
                return 'Day'; break;
        }
    };
});