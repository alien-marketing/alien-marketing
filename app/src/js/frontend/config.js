requirejs.config({
    baseUrl: '../src/js/frontend/',
    paths: {
        // libraries
        jQuery: 'libs/jquery.min',
        mask: 'libs/jquery.mask.min',
        angular: 'libs/angular.min',
        ace: 'libs/ace/ace',
        aws: 'libs/aws-sdk.min',
        bootstrap: 'libs/bootstrap.min',
        charts: 'libs/charts.min',
        cropper: 'libs/cropper.min',
        localforage: 'libs/localforage',
        moment: 'libs/moment.min',
        datetimepicker: 'libs/datetimepicker',
        messenger: 'libs/messenger',
        particle: 'libs/particle',
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
        editor: 'controller/core/editor',
        page: 'controller/core/page',
        user: 'controller/core/user',
        // default
        main: 'main',
        // pages
        about: 'controller/pages/about',
        blog: 'controller/pages/blog',
        contact: 'controller/pages/contact',
        dashboard: 'controller/pages/dashboard',
        home: 'controller/pages/home',
        post: 'controller/pages/post',
        pricing: 'controller/pages/pricing',
        register: 'controller/pages/register',
        services: 'controller/pages/services',
            // services
            analytics: 'controller/pages/services/analytics',
            email: 'controller/pages/services/email',
            listening: 'controller/pages/services/listening',
            seo: 'controller/pages/services/seo',
            social: 'controller/pages/services/social',
            web: 'controller/pages/services/web',
        team: 'controller/pages/team',
        // admin
        admin: 'controller/pages/admin/dashboard',
        audit: 'controller/pages/admin/audit',
            // posts
            newPost: 'controller/pages/admin/posts/add-new',
            editPost: 'controller/pages/admin/posts/edit',
            allPosts: 'controller/pages/admin/posts/view-all',
            // pages
            newPage: 'controller/pages/admin/pages/add-new',
            editPage: 'controller/pages/admin/posts/edit',
            allPages: 'controller/pages/admin/pages/view-all',
    },
    shim: {
        'bootstrap': ['jQuery'],
        'mask': ['jQuery'],
    }
});