!function(e,r,t){"use strict";function n(){function e(e,t){return r.extend(Object.create(e),t)}function t(e,r){var t=r.caseInsensitiveMatch,n={originalPath:e,regexp:e},a=n.keys=[];return e=e.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(e,r,t,n){var o="?"===n?n:null,i="*"===n?n:null;return a.push({name:t,optional:!!o}),r=r||"",(o?"":r)+"(?:"+(o?r:"")+(i&&"(.+?)"||"([^/]+)")+(o||"")+")"+(o||"")}).replace(/([\/$\*])/g,"\\$1"),n.regexp=new RegExp("^"+e+"$",t?"i":""),n}var n={};this.when=function(e,a){var o=r.copy(a);if(r.isUndefined(o.reloadOnSearch)&&(o.reloadOnSearch=!0),r.isUndefined(o.caseInsensitiveMatch)&&(o.caseInsensitiveMatch=this.caseInsensitiveMatch),n[e]=r.extend(o,e&&t(e,o)),e){var i="/"==e[e.length-1]?e.substr(0,e.length-1):e+"/";n[i]=r.extend({redirectTo:e},t(i,o))}return this},this.caseInsensitiveMatch=!1,this.otherwise=function(e){return"string"==typeof e&&(e={redirectTo:e}),this.when(null,e),this},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(t,a,o,i,c,l,s){function h(e,r){var t=r.keys,n={};if(!r.regexp)return null;var a=r.regexp.exec(e);if(!a)return null;for(var o=1,i=a.length;o<i;++o){var c=t[o-1],u=a[o];c&&u&&(n[c.name]=u)}return n}function $(e){var n=w.current;v=f(),(m=v&&n&&v.$$route===n.$$route&&r.equals(v.pathParams,n.pathParams)&&!v.reloadOnSearch&&!g)||!n&&!v||t.$broadcast("$routeChangeStart",v,n).defaultPrevented&&e&&e.preventDefault()}function p(){var e=w.current,n=v;m?(e.params=n.params,r.copy(e.params,o),t.$broadcast("$routeUpdate",e)):(n||e)&&(g=!1,w.current=n,n&&n.redirectTo&&(r.isString(n.redirectTo)?a.path(d(n.redirectTo,n.params)).search(n.params).replace():a.url(n.redirectTo(n.pathParams,a.path(),a.search())).replace()),i.when(n).then(function(){if(n){var e,t,a=r.extend({},n.resolve);return r.forEach(a,function(e,t){a[t]=r.isString(e)?c.get(e):c.invoke(e,null,null,t)}),r.isDefined(e=n.template)?r.isFunction(e)&&(e=e(n.params)):r.isDefined(t=n.templateUrl)&&(r.isFunction(t)&&(t=t(n.params)),t=s.getTrustedResourceUrl(t),r.isDefined(t)&&(n.loadedTemplateUrl=t,e=l(t))),r.isDefined(e)&&(a.$template=e),i.all(a)}}).then(function(a){n==w.current&&(n&&(n.locals=a,r.copy(n.params,o)),t.$broadcast("$routeChangeSuccess",n,e))},function(r){n==w.current&&t.$broadcast("$routeChangeError",n,e,r)}))}function f(){var t,o;return r.forEach(n,function(n,i){!o&&(t=h(a.path(),n))&&((o=e(n,{params:r.extend({},a.search(),t),pathParams:t})).$$route=n)}),o||n[null]&&e(n[null],{params:{},pathParams:{}})}function d(e,t){var n=[];return r.forEach((e||"").split(":"),function(e,r){if(0===r)n.push(e);else{var a=e.match(/(\w+)(?:[?*])?(.*)/),o=a[1];n.push(t[o]),n.push(a[2]||""),delete t[o]}}),n.join("")}var v,m,g=!1,w={routes:n,reload:function(){g=!0,t.$evalAsync(function(){$(),p()})},updateParams:function(e){if(!this.current||!this.current.$$route)throw u("norout","Tried updating route when with no current route");e=r.extend({},this.current.params,e),a.path(d(this.current.$$route.originalPath,e)),a.search(e)}};return t.$on("$locationChangeStart",$),t.$on("$locationChangeSuccess",p),w}]}function a(){this.$get=function(){return{}}}function o(e,t,n){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,o,i,c,u){function l(){p&&(n.cancel(p),p=null),h&&(h.$destroy(),h=null),$&&((p=n.leave($)).then(function(){p=null}),$=null)}function s(){var i=e.current&&e.current.locals,c=i&&i.$template;if(r.isDefined(c)){var s=a.$new(),p=e.current,v=u(s,function(e){n.enter(e,null,$||o).then(function(){!r.isDefined(f)||f&&!a.$eval(f)||t()}),l()});$=v,(h=p.scope=s).$emit("$viewContentLoaded"),h.$eval(d)}else l()}var h,$,p,f=i.autoscroll,d=i.onload||"";a.$on("$routeChangeSuccess",s),s()}}}function i(e,r,t){return{restrict:"ECA",priority:-400,link:function(n,a){var o=t.current,i=o.locals;a.html(i.$template);var c=e(a.contents());if(o.controller){i.$scope=n;var u=r(o.controller,i);o.controllerAs&&(n[o.controllerAs]=u),a.data("$ngControllerController",u),a.children().data("$ngControllerController",u)}c(n)}}}var c=r.module("ngRoute",["ng"]).provider("$route",n),u=r.$$minErr("ngRoute");c.provider("$routeParams",a),c.directive("ngView",o),c.directive("ngView",i),o.$inject=["$route","$anchorScroll","$animate"],i.$inject=["$compile","$controller","$route"]}(window,window.angular);