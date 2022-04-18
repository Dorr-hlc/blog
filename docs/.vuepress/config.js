module.exports = {
    // 网站 Title
    title: 'Hlc 的博客 ｜ Hlc Blog',
    base: "/blog/", 
    // 网站描述
    description: '个人博客,记录学习',

    // 网站 favicon 图标设置等
    head: [
        ['link', { rel: 'icon', href: './logo.png' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],

    // 使用的主题
    theme: 'melodydl',

    // 主题配置
    themeConfig: {
        title: 'Hlc Blog',

        // 个人信息（没有或不想设置的，删掉对应字段即可）
        personalInfo: {

            // 名称
            name: 'Hlc',

            // 头像 public文件夹下
            avatar: './avatar-top.jpeg',

            // 头部背景图
            headerBackgroundImg: './avatar-bg.jpeg',

            // 个人简介 (支持 HTML)
            description: 'Outside the pavilion, beside the ancient road, there are fragrant grass and green lotus days<br/>长亭外，古道边，芳草碧莲天',

            // 电子邮箱
            email: '1726660621@qq.com',

            // 所在地
            location: 'Chengdu, China'
        },
        // 顶部导航栏内容
        nav: [
            { text: 'HOME', link: '/' },
            { text: 'ABOUT', link: '/about/' },
            { text: 'TAGS', link: '/tags/' }
        ],

        // 首页头部标题背景图设置，图片直接放在 public 文件夹下
        header: {
            home: {
                title: 'Hlc Blog',
                subtitle: '好好生活，慢慢相遇',
                headerImage: './home-bg.jpeg'
            },

            // tag页面头部标题背景图设置，图片直接放在 public 文件夹下
            tags: {
                title: 'Tags',
                subtitle: '遇见你花光了我所有的运气',
                headerImage: './tags-bg.jpeg'
            },

            // 文章详情头部背景图
            postHeaderImg: './xq.jpeg',
        },

        // 社交平台帐号信息 
        // sns: {
        //     csdn: {
        //         account: 'csdn',
        //         link: 'https://blog.csdn.net/weixin_44002432',
        //     },
        //     weibo: {
        //         account: 'weibo',
        //         link: 'https://weibo.com/u/5656925978',
        //     },
        //     juejin: {
        //         account: 'juejin',
        //         link: 'https://juejin.im/user/5ce784a0f265da1b8333673c'
        //     },
        //     zhihu: {
        //         account: 'zhihu',
        //         link: 'https://www.zhihu.com/people/sheng-tang-de-xing-kong'
        //     },
        //     github: {
        //         account: 'github',
        //         link: 'https://github.com/youdeliang'
        //     }
        // },
        // 底部 footer 的相关设置 
        footer: {
            // gitbutton  配置
            gitbtn: {
                // 仓库地址
                repository: "https://ghbtns.com/github-btn.html?user=Dorr-hlc&repo=blog&type=star",
                frameborder: 0,
                scrolling: 0,
                width: "80px",
                height: "20px"
            },

            // 添加自定义 footer
            custom: `Copyright &copy; Hlc Blog 2022 <br /> 
            Theme By <a href="https://www.vuepress.cn/" target="_blank">VuePress</a>
            | <a href="https://github.com/Dorr-hlc/" target="_blank">hlc</a>`
        },

        // 分页配置
        pagination: {
            // 每页文章数量
            perPage: 5,
        },

        // vssue 评论配置, 如果不需要，可以设置 comments: false
        comments: false
    }
}