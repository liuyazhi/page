var app=angular.module('myapp',["ui.router"]);
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
            },
            {
                ID:9,
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
                ID:10,
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
                ID:11,
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
                ID:12,
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
                ID:13,
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
                ID:14,
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
                ID:15,
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
                ID:16,
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
            },
            {
                ID:17,
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
                ID:18,
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
                ID:19,
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
                ID:20,
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
                ID:21,
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
                ID:22,
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
                ID:23,
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
                ID:24,
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
app.service("cutpage",function () {
    return function ($scope) {
        var oldData=$scope.fileData();
        $scope.allPage=Math.ceil(oldData.length/$scope.maxLength);
        $scope.pageArr=[];
        for(var i=2;i<$scope.allPage;i++){
            $scope.pageArr.push(i)
        }
        $scope.len=($scope.middlePage-1)/2;
        $scope.pageShow=function (i) {
            $scope.index=i-1;
            $scope.showStatue1=false;
            $scope.showStatue2=false;
            if($scope.index<$scope.middlePage-$scope.len){
                $scope.showStatue1=false;
                $scope.showStatue2=true;
                $scope.showArr=[];
                for(var i=1;i<=$scope.middlePage;i++){
                    $scope.showArr.push(i)
                }

            }else if($scope.index>=$scope.middlePage-$scope.len&&$scope.index<=$scope.allPage-($scope.middlePage-1)/2-2){
                $scope.showStatue1=true;
                $scope.showStatue2=true;
                if($scope.index==$scope.middlePage-$scope.len){
                    $scope.showStatue1=false;
                }
                if($scope.index==$scope.allPage-($scope.middlePage-1)/2-2){
                    $scope.showStatue2=false;
                }

                $scope.showArr=[$scope.index+1];
                for(var i=0;i<$scope.len;i++){
                    $scope.showArr.push($scope.index-i)
                }
                for(var i=2;i<=$scope.len+1;i++){
                    $scope.showArr.push($scope.index+i)
                }
            }else{
                $scope.showStatue1=true;
                $scope.showStatue2=false;
                $scope.showArr=[];
                for(var i=1;i<$scope.middlePage;i++){
                    $scope.showArr.push($scope.allPage-i)
                }
            }
            if($scope.allPage<=6){
                $scope.showStatue1=false;
                $scope.showStatue2=false;
            }
            $scope.cutDataFn()
        };

        $scope.cutDataFn=function () {
            var newdata=$scope.fileData();
            $scope.cutoutData=newdata.splice($scope.index*$scope.maxLength,$scope.maxLength)
        };
        $scope.changeIndexFn=function (i) {
            $scope.pageShow(i)

        };
        $scope.updownFn=function (i) {
            if(i=="+"){
                if(($scope.index+1)< $scope.allPage){
                    $scope.pageShow($scope.index+2)
                }
            }else{
                if($scope.index>0){
                    $scope.pageShow($scope.index)
                }
            }
        };
        $scope.changeInput=function () {
            $scope.pageShow($scope.valueDATA)

        };
        $scope.pageShow(1)
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
            controller:function($scope,cutpage) {
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
                cutpage($scope);
                //修改
                $scope.edit = function (id) {
                    $scope.cutDataFn();
                    $scope.show = true;
                    $scope.cutoutData.forEach(function (item) {
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
                    $scope.cutoutData.forEach(function (item, index) {
                        if (item.ID == $scope.tar.ID) {
                            $scope.show = false;
                            $scope.cutoutData[index] = $scope.tar;
                        }
                    });
                };
                //取消
                $scope.no = function () {
                    $scope.show = false;
                };
                //删除
                $scope.del = function (id) {
                    $scope.data.forEach(function (item, index) {
                        if (item.ID == id) {
                            $scope.data.splice(index, 1)
                        }
                    });
                    cutpage($scope);
                };
            }
        })
});
app.controller("all",function ($scope,alldata,cutpage) {
    $scope.data=alldata.thirdata;
    $scope.fileData=function () {
        return alldata.thirdata.map(function (i) {
            return i
        })
    };
//        每一页显示的数据长度
    $scope.maxLength=2;
//        定义中间页数显示的长度,只能为奇数；
    $scope.middlePage=5;
    cutpage($scope);
    $scope.$on('addData',function(e,d){
        $scope.data.push(d.data);
    })
})