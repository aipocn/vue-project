module.exports = [{
        name: '资产概览',
        id: '1',
        icon: 'el-icon-menu',
        path:'/',
        component: 'index'
    },{
        name: '我的资产',
        id: '2',
        icon: 'el-icon-menu',
        path:'/AssetManage',
        component: 'AssetManage/index'
    },{
        name: '部门资产',
        id: '3',
        icon: 'el-icon-menu',
        path:'/AssetClass',
        component: 'AssetManage/AssetClass'
    },{
        name: '资产管理',
        id: '4',
        icon: 'el-icon-menu',
        sub: [{
            name: '资产录入',
            id: '4-1',
            path:'',
            component: '4-1'
        },{
            name: '资产分类',
            id: '4-2',
            path:'',
            component: 'AssetManage/AssetClass'
        }]
}]
