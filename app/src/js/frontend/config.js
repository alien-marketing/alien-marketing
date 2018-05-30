requirejs.config({
    baseUrl: '../src/js/frontend/',
    paths: {
        // libraries
        jQuery: 'libs/jquery.min',
        angular: 'libs/angular.min',
        aws: 'libs/aws-sdk.min',
        charts: 'libs/charts.min',
        cropper: 'libs/cropper.min',
        localforage: 'libs/localforage',
        moment: 'libs/moment.min',
        messenger: 'libs/messenger',
        progress: 'libs/progressbar.min',
        signature: 'libs/signature.min',
        youtube: 'libs/youtube',
        owl: 'libs/owl',
        // cryptoJS
        AES: 'libs/cryptoJS/aes',
        MD5: 'libs/cryptoJS/md5',
        // controller
        app: 'controller/app',
        // core
        api: 'controller/core/api',
        config: 'controller/core/config',
        user: 'controller/core/user',
        // default
        main: 'main',
        // pages
        about: 'controller/pages/about',
        blog: 'controller/pages/blog',
        dashboard: 'controller/pages/dashboard',
        home: 'controller/pages/home',
        page: 'controller/pages/page',
        post: 'controller/pages/post',
        register: 'controller/pages/register',
        team: 'controller/pages/team',
    }
});