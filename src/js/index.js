/**
 * Created by Administrator on 2017/5/24.
 */
var app = angular.module("myapp", ['ui.router']);
app.service('alldata',function() {
    return {
        fstdata:[
            {
                id:1,
                name:'个人中心',
                nickname:'账户管理'
            },
            {
                id:2,
                name:'系统设置',
                nickname:'权限管理'
            }
        ],
        secdata:[
            {
                id:11,
                parentid:1,
                name:'个人信息',
                page:'grxx.html'
            },
            {
                id:12,
                parentid:1,
                name:'修改密码',
                page:'xgmm.html'
            },
            {
                id:21,
                parentid:2,
                name:'功能配置',
                page:'gnpz.html'
            },
            {
                id:22,
                parentid:2,
                name:'角色管理',
                page:'jsgl.html'
            },
            {
                id:23,
                parentid:2,
                name:'用户管理',
                page:'yhgl.html'
            }
        ],
        thirdata:[
            {
                ID:1,
                parentid:23,
                loginname:'zhangsan',
                name:'张三',
                role:'13管理员aaa',
                telephone:'15098950322',
                email:'837990335@qq.com',
                state:'启用',
                creattime:'2014-07-27 16:56',
                change:'修改',
                delete:'删除'
            },
            {
                ID:2,
                parentid:23,
                loginname:'lisi',
                name:'李四',
                role:'13管理员aaa',
                telephone:'15098950322',
                email:'837990335@qq.com',
                state:'禁用',
                creattime:'2014-07-27 16:56',
                change:'修改',
                delete:'删除'
            },
            {
                ID:3,
                parentid:23,
                loginname:'wangwu',
                name:'王五',
                role:'13管理员aaa',
                telephone:'15098950322',
                email:'837990335@qq.com',
                state:'启用',
                creattime:'2014-07-27 16:56',
                change:'修改',
                delete:'删除'
            },
            {
                ID:4,
                parentid:23,
                loginname:'zhangchen',
                name:'张晨',
                role:'13管理员aaa',
                telephone:'15098950322',
                email:'837990335@qq.com',
                state:'启用',
                creattime:'2014-07-27 16:56',
                change:'修改',
                delete:'删除'
            },
            {
                ID:5,
                parentid:23,
                loginname:'liucheng',
                name:'刘成',
                role:'管理员',
                telephone:'15098950322',
                email:'837990335@qq.com',
                state:'禁用',
                creattime:'2014-07-27 16:56',
                change:'修改',
                delete:'删除'
            },
            {
                ID:6,
                parentid:23,
                loginname:'liji',
                name:'李继',
                role:'13管理员aaa',
                telephone:'15098950322',
                email:'837990335@qq.com',
                state:'禁用',
                creattime:'2014-07-27 16:56',
                change:'修改',
                delete:'删除'
            },
            {
                ID:7,
                parentid:23,
                loginname:'yuantao',
                name:'袁涛',
                role:'13管理',
                telephone:'15098950322',
                email:'837990335@qq.com',
                state:'启用',
                creattime:'2014-07-27 16:56',
                change:'修改',
                delete:'删除'
            },
            {
                ID:8,
                parentid:23,
                loginname:'wangjian',
                name:'王建',
                role:'管理员',
                telephone:'15098950322',
                email:'837990335@qq.com',
                state:'禁用',
                creattime:'2014-07-27 16:56',
                change:'修改',
                delete:'删除'
            }
        ],
        fourdata:[
            {
                ID:1,
                role:"管理员",
                state:"启用",
                orders:0,
                creattime:'2014-07-27 16:35'
            },
            {
                ID:2,
                role:"管理员2",
                state:"禁用",
                orders:2,
                creattime:'2014-07-27 16:35'
            },
            {
                ID:3,
                role:"管理员",
                state:"禁用",
                orders:5,
                creattime:'2014-07-27 16:35'
            },
            {
                ID:4,
                role:"管理员2",
                state:"启用",
                orders:0,
                creattime:'2014-07-27 16:35'
            },
            {
                ID:5,
                role:"管理员0",
                state:"启用",
                orders:2,
                creattime:'2014-07-27 16:35'
            },
            {
                ID:6,
                role:"管理员1",
                state:"禁用",
                orders:0,
                creattime:'2014-07-27 16:35'
            },
            {
                ID:7,
                role:"管理员是",
                state:"启用",
                orders:0,
                creattime:'2014-07-27 16:35'
            },
            {
                ID:8,
                role:"管理员0",
                state:"启用",
                orders:1,
                creattime:'2014-07-27 16:35'
            },
            {
                ID:9,
                role:"管理员2",
                state:"启用",
                orders:0,
                creattime:'2014-07-27 16:35'
            },
            {
                ID:10,
                role:"管理2",
                state:"启用",
                orders:0,
                creattime:'2014-07-27 16:35'
            },
            {
                ID:11,
                role:"管理员2",
                state:"禁用",
                orders:0,
                creattime:'2014-07-27 16:35'
            }

        ]
    }
});
var num=100;
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/user');
    $stateProvider
        .state('add', {
            url: "/add",
            templateUrl: 'page/add.html',
            controller:function($scope){
                $scope.addFn=function(){
                    $scope.add.ID=num++;
                    $scope.add.state="启用";
                    $scope.add.change="修改";
                    $scope.add.delete="删除";
                    $scope.add.creattime=new Date();
                    $scope.$emit('addData',{
                        data:$scope.add
                    })
                }
            }
        })
        .state('user',{
            url:"/user",
            templateUrl:"page/list.html",
            controller:function($scope,alldata) {
                //分页
                $scope.alldata = alldata.thirdata;
                $scope.num = 2;//每页显示的个数
                $scope.length = $scope.alldata.length;//总长度
                $scope.pages = Math.ceil($scope.length / $scope.num); //得到页数
                $scope.pageList = [];//生成页码，在 html里 ng-repeat 出来
                for (var i = 1; i <= $scope.pages; i++) {
                    $scope.pageList.push(i);
                }
                //初始页面显示
                $scope.text = $scope.alldata.slice(0, $scope.num);
                //分页显示
                $scope.current = 1;
                $scope.selectPage = function (page) {
                    $scope.current = page;
                    $scope.text = $scope.alldata.slice(($scope.current - 1) * $scope.num, $scope.current * $scope.num)
                };
                //上一页
                $scope.Previous = function () {
                    if($scope.current>1) {
                        $scope.selectPage($scope.current - 1);
                    }
                };
                //下一页
                $scope.Next = function () {
                    if($scope.current<$scope.pages){
                        $scope.selectPage($scope.current + 1);
                    }
                };
                //查询
                $scope.filt={};
                $(document).on('keyup',function(e){
                    if(e.keyCode==13){
                        $scope.$apply(function(){
                            $scope.filt=$scope.search;
                        });
                    }
                });
                $scope.sea=function(){
                    $scope.filt=$scope.search;
                };
                //修改
                $scope.edit = function (id) {
                    $scope.show = true;
                    $scope.text.forEach(function (item, index) {
                        if (item.ID == id) {
                            $scope.tar = {};
                            for (var k in item) {
                                $scope.tar[k] = item[k];
                            }
                        }
                    });
                };
                //确定
                $scope.ok = function () {
                    $scope.text.forEach(function (item, index) {
                        if (item.ID == $scope.tar.ID) {
                            $scope.show = false;
                            $scope.text[index] = $scope.tar;
                        }
                    });
                };
                //取消
                $scope.no = function () {
                    $scope.show = false;
                };
                //删除
                $scope.del = function (id) {
                    $scope.text.forEach(function (item, index) {
                        if (item.ID == id) {
                            $scope.text.splice(index, 1)
                        }
                    });
                };
            }
        })
});
app.controller("all", function ($scope, alldata) {
    $scope.alldata = alldata.thirdata;
    $scope.num = 2;//每页显示的个数
    $scope.length = $scope.alldata.length;//总长度
    $scope.pages = Math.ceil($scope.length / $scope.num); //得到页数
    $scope.pageList = [];//生成页码，在 html里 ng-repeat 出来
    for (var i = 1; i <= $scope.pages; i++) {
        $scope.pageList.push(i);
    }
    //初始页面显示
    $scope.text = $scope.alldata.slice(0, $scope.num);
    //分页显示
    $scope.current = 1;
    $scope.selectPage = function (page) {
        $scope.current = page;
        $scope.text = $scope.alldata.slice(($scope.current - 1) * $scope.num, $scope.current * $scope.num)
    };
    $scope.$on('addData',function(e,d){
        $scope.alldata.push(d.data);
    })
});