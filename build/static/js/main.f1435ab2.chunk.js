(this.webpackJsonpincrementalsudoku=this.webpackJsonpincrementalsudoku||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(8),i=n.n(a),o=(n(13),n(2)),s=n(3),u=n(4),l=(n(14),n(0));function f(e){var t=[];return t.push(Object(l.jsx)("input",{type:"radio",id:"num"+e.value,name:"radioNumber",value:e.value,checked:e.selectedNumber==e.value,onChange:e.callBack},"input"+e.value)),t.push(Object(l.jsxs)("label",{htmlFor:"num"+e.value,children:[" ",e.value," "]},"labl"+e.value)),t}function d(e){for(var t=[],n=0;n<e.size;n++)t.push(Object(l.jsx)(f,{selectedNumber:e.selectedNumber,callBack:e.callBack,value:n+1}));return Object(l.jsxs)("div",{className:"radio-toolbar",children:[" ",t," "]})}function h(e){return Object(l.jsx)("div",{children:Object(l.jsx)(d,{selectedNumber:e.selectedNumber,size:e.size,callBack:e.callBack})})}function b(e){var t=Object(c.useState)(),n=Object(s.a)(t,2),r=n[0],a=n[1],i=[],o=[],u=[],f={fontWeight:"bold",cursor:"default"};function d(t,n,c,r){return null!=(t=String(t))&&t.includes("h")?Object(l.jsx)("td",{className:"highlight",onClick:function(){return r(n,c,e.gameBoard,e.setGameBoard,e.id,e.amount)},children:t.replace("h","")},"tdK".concat(n).concat(c)):null!=t&&t.includes("og")?Object(l.jsx)("td",{style:f,children:t.replace("og","")},"tdK".concat(n).concat(c)):Object(l.jsx)("td",{onClick:function(){return r(n,c,e.gameBoard,e.setGameBoard,e.id,e.amount)},children:t},"tdK".concat(n).concat(c))}return Object(c.useEffect)((function(){for(var t=0;t<e.squares;t++)o.push(Object(l.jsx)("col",{},"colG"+t));for(var n=0;n<e.size/e.squares;n++)i.push(Object(l.jsx)("colgroup",{children:o},"colG"+n));for(var c=0;c<e.size;c++){for(var r=[],s=0;s<e.size;s++)r.push(d(e.value[c][s],c,s,e.callBack));u.push(Object(l.jsx)("tr",{children:r},"trK"+c)),c%e.squares==e.squares-1&&(i.push(Object(l.jsx)("tbody",{children:u},"tb"+c)),u=[]),a(i)}}),[e.value]),Object(l.jsx)("table",{className:"sudokuTable",children:r})}var j=n.p+"static/media/pointer.aad9b0aa.png";function m(e){var t={backgroundColor:"crimson",width:"".concat(e.fillbar,"%"),height:"100%",cursor:"pointer"};"".concat(e.duration);return Object(l.jsxs)("div",{className:"buttonList",children:[e.solved?Object(l.jsx)("button",{className:"button",type:"button",onClick:function(){return e.collect(e.size+"x"+e.size,e.collectAmount,e.size,e.squares)},children:"Complete"}):Object(l.jsx)("button",{className:"button",type:"button",disabled:!0,children:"Incomplete"}),Object(l.jsx)("button",{className:"button",type:"button",onClick:function(){return e.newGame(e.size,e.squares)},children:"New Sudoku"}),Object(l.jsxs)("div",{className:"gameshop",children:[Object(l.jsx)("div",{id:"Barfill",onClick:function(){return e.clickBar(e.clickAmount)},children:Object(l.jsx)("div",{style:t})}),Object(l.jsx)("div",{className:"wapper",children:Object(l.jsx)("img",{className:e.actives?"clicker clickerSize":"clickerSize",style:{animationDuration:"".concat(e.duration,"ms")},src:j})})]})]})}function v(e,t){var n="".concat(e.length,"::").concat(e);localStorage.setItem(t,n)}function O(e,t){localStorage.setItem(e,t)}function x(e){return Number(localStorage.getItem(e))}function p(e){return localStorage.getItem(e)}function g(e){return[1,2,3,4,5,6,7,8,9].splice(0,e)}function N(e,t,n){for(var c=g(n),r=g(n),a=function(n){c=c.filter((function(c){return c!=t[e][n]})),r=r.filter((function(c){return c!=t[n][e]}))},i=0;i<n;i++)a(i);return 0==c.length&&0==r.length}function k(e,t,n,c,r){for(var a=g(t),i=function(t){for(var i=function(n){a=a.filter((function(a){return a!=e[t+r][n+c]}))},o=0;o<n;o++)i(o)},o=0;o<n;o++)i(o);return 0==a.length}function I(e,t,n){for(var c=JSON.parse(JSON.stringify(t)),r=0;r<c.length;r++)for(var a=0;a<c.length;a++)String(c[r][a]).includes("og")&&(c[r][a]=c[r][a].replace("og",""));for(var i=0;i<e;i++)if(!N(i,c,e))return!1;for(var o=0;o<n;o++)for(var s=0;s<n;s++)if(!k(c,e,n,o*n,s*n))return!1;return!0}function y(e,t,n,c,r,a,i,o){for(var s=0;s<c;s++)n[e][s].length>1&&(n[e][s]=n[e][s].filter((function(e){return e!=r})),n[e][s].length<=1?(y(e,s,n,c,n[e][s][0],a,i,o),i.includes("".concat(e).concat(s))&&(o.splice(i.indexOf("".concat(e).concat(s)),1),i.splice(i.indexOf("".concat(e).concat(s)),1))):i.includes("".concat(e).concat(s))||(i.push("".concat(e).concat(s)),o.push([e,s]))),n[s][t].length>1&&(n[s][t]=n[s][t].filter((function(e){return e!=r})),n[s][t].length<=1?(y(s,t,n,c,n[s][t][0],a,i,o),i.includes("".concat(s).concat(t))&&(o.splice(i.indexOf("".concat(s).concat(t)),1),i.splice(i.indexOf("".concat(s).concat(t)),1))):i.includes("".concat(s).concat(t))||(i.push("".concat(s).concat(t)),o.push([s,t])));for(var u=Math.floor(e/a)*a,l=Math.floor(t/a)*a,f=0;f<a;f++)for(var d=0;d<a;d++)n[f+u][d+l].length>1&&(n[f+u][d+l]=n[f+u][d+l].filter((function(e){return e!=r})),n[f+u][d+l].length<=1?(y(f+u,d+l,n,c,n[f+u][d+l][0],a,i,o),i.includes("".concat(f+u).concat(d+l))&&(o.splice(i.indexOf("".concat(f+u).concat(d+l)),1),i.splice(i.indexOf("".concat(f+u).concat(d+l)),1))):i.includes("".concat(f+u).concat(d+l))||(i.push("".concat(f+u).concat(d+l)),o.push([f+u,d+l])))}function C(e,t,n){var c=e.length,r=function(e,t){for(var n=[],c=[],r=0;r<e*e;r++)n.push(r);n.sort((function(){return Math.random()>.5?1:-1}));for(var a=0;a<t;a++)c.push(n[a]);return c}(c,t),a=[];return r.forEach((function(t){var n=function(e,t){return[Math.floor(t/e),t%e]}(c,t);a.push("".concat(n[0]).concat(n[1]).concat(e[n[0]][n[1]])),e[n[0]][n[1]]=[]})),O(n+"curSolveList",a),function(e){for(var t=0;t<e.length;t++)for(var n=0;n<e.length;n++)e[t][n].length>0&&(e[t][n]="".concat(e[t][n],"og"))}(e),e}function S(e,t){var n=x(e);return O(e,n+=t),n}n(16);var w=function e(t,n,c,r,a,i,o,s,f,d,h,b,j){var m=this;Object(u.a)(this,e),this.PriceFunc=function(){},this.ClickFun=function(){},this.IncremenAmount=function(){},this.PriceNumber=function(){var e=x(m.Id+m.Name);m.Costs.forEach((function(t,n){m.Costs[n]=[m.Costs[n][0],m.PriceFunc(m.StartCosts[n],e)]}))},this.CostText=function(){var e=[];return m.Costs.forEach((function(t){e.push(Object(l.jsxs)("span",{children:[t[0],": ",Object(l.jsxs)("span",{className:"price",children:[" ",t[1]]}),Object(l.jsx)("br",{})]}))})),e},this.IsAffordable=function(e){var t=!0;m.Costs.forEach((function(n){e.find((function(e){return e.Name==n[0]})).Value<n[1]&&(t=!1)})),m.Affordable=t},this.IsAvailable=function(){var e=!0;m.Priors.forEach((function(t){x(m.DontUseId?t:m.Id+t)<=0&&(e=!1)})),e&&(m.Available=!0)},this.IsPurchase=function(){x(m.Id+m.Name)>=m.MaxTimesPurchase&&(m.Available=!1)},this.Available=t,this.Affordable=n,this.Name=c,this.Title=r,this.Description=a,this.Costs=i,this.StartCosts=o,this.MaxTimesPurchase=s,this.Priors=f,this.PriceFunc=d,this.IncremenAmount=h,this.Text1=b,this.Text2=j};function A(e){var t=e.items,n=Object(c.useState)(t),r=Object(s.a)(n,2),a=r[0];r[1];return Object(l.jsxs)("div",{className:"shop",children:[Object(l.jsx)("div",{className:"shopHeder",children:e.name}),a.map((function(t){t.Id=e.id;var n=e.pruchaseFuncs.find((function(e){return e.Name==t.Name}));return void 0!=n&&(t.ClickFun=n.Func),t.IsAffordable(e.resources),t.PriceNumber(),t.IsAvailable(),t.IsPurchase(),t.Text1&&(t.Description=function(e){var t=x(e.Id+e.Name),n=e.IncremenAmount(t+1)-e.IncremenAmount(t);return n=Math.abs(n.toFixed(2)),"".concat(e.Text1).concat(n).concat(e.Text2)}(t)),function(e){if(e.Available)return Object(l.jsxs)("button",{disabled:!e.Affordable,onClick:function(){return e.ClickFun(e.Costs,e.Name,e.MaxTimesPurchase,e.Id)},className:"shopBT",type:"button",children:[e.Name,Object(l.jsxs)("div",{className:"tooltiptext",children:[Object(l.jsx)("div",{className:"description",children:e.Title}),Object(l.jsx)("div",{className:"description",children:e.CostText()}),Object(l.jsx)("div",{className:"description",children:e.Description})]})]})}(t)}))]})}function B(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=p(t+"curSolveList");if(""!=c){c=c.split(",");for(var r=0;r<c.length;r++){var a=c[0].split("");if(e[a[0]][a[1]]!=a[2])return c.shift(),n||O(t+"curSolveList",c),a;c.shift()}}}function z(e){var t=e.size,n=e.squares,r=e.remove,a=e.resources,i=[new w(!0,!1,"Clicker","Buy a clicker for the progress bar","It will click ones a second",[["4x4",11]],[11],1,[""],(function(e){return e}),(function(){return!0})),new w(!1,!1,"Clicker Speed","Upgrade the clickers speed","The clicker vill click [] faster",[["4x4",15]],[15],36,["Clicker"],(function(e,t){return Math.floor(e+Math.pow(t,1.2))}),(function(e){return 1e3-190*Math.log2(e+1)}),"The clicker vill click [","]ms faster"),new w(!1,!1,"Clicker strength","Upgrade the clickers strength","It will click [] stronger",[["4x4",20]],[20],20,["Clicker","Clicker Speed"],(function(e,t){return Math.floor(e+Math.pow(t,1.3))}),(function(e){return 2+e}),"Clicks vill click [","] stronger"),new w(!1,!1,"Highlighter","Highlight the next solved fild","",[["4x4",20]],[20],1,["Clicker"],(function(e){return e}),(function(){return!0})),new w(!1,!1,"Auto Completer","The sudoku vil now auto complete","",[["4x4",30],["9x9",15]],[30,15],1,["Clicker","Clicker Speed","Clicker strength"],(function(e){return e}),(function(){return!0})),new w(!1,!1,"Increase points","Increase Points from this sudoku","It will increase the points gaind by []",[["4x4",80],["9x9",20]],[80,20],10,["Clicker","Clicker Speed","Auto Completer"],(function(e,t){return Math.round(e+Math.pow(30*t,1.3))}),(function(e){return e+1}),"It will increase the points gaind by [","]")],f=Object(c.useState)(Array(t).fill(Array(t).fill(null))),d=Object(s.a)(f,2),h=d[0],j=d[1],p=Object(c.useState)(!1),N=Object(s.a)(p,2),k=N[0],z=N[1],M=Object(c.useState)(0),E=Object(s.a)(M,2),T=E[0],F=E[1],V=Object(c.useState)([3,2]),P=Object(s.a)(V,2),q=P[0],D=P[1],G=Object(c.useState)([!1,!1,!1]),R=Object(s.a)(G,2),L=R[0],H=R[1],J=Object(c.useState)([1e3]),K=Object(s.a)(J,2),U=K[0],W=K[1];function Q(){if(L[0]){var n=a,c="".concat(t,"x").concat(t),i=100/(1e3/Math.max(U[0],.01)*q[0]),s=q[1]*(t*t)/(i*r),u=q[1]/i+s;n.find((function(e){return e.Name==c})).IncremenAmount=u,e.setResources(Object(o.a)(n))}}function X(t,n){var c=function(e,t){var n,c=function(){var c=g(e);n=Array(e).fill(null).map((function(){return Array(e).fill(c)}));for(var r=[[Math.floor(Math.random()*e),Math.floor(Math.random()*e)]],a=[],i=void 0,o=void 0,s=void 0,u=!0;u;)r.sort((function(e,t){return e.length-t.length})),i=0,r.length>0&&(n[r[i][0]][r[i][1]].length>1&&(s=Math.floor(Math.random()*n[r[i][0]][r[i][1]].length),o=n[r[i][0]][r[i][1]][s],n[r[i][0]][r[i][1]]=[o],y(r[i][0],r[i][1],n,e,o,t,a,r)),r.splice(i,1),a.splice(i,1)),r.length<=0&&(u=!1)};do{c()}while(!I(e,n,t));return n}(t,n);c=C(c,r,e.id),j(c),v(c,e.id+"curBoard")}function Y(t,n,c){var r=x(n);if(!(r>=c)){O(n,r+1);var i=a;t.forEach((function(e){var t=i.findIndex((function(t){return t.Name==e[0]}));i[t].Value=i[t].Value-e[1],O(e[0],i[t].Value)})),e.setResources(Object(o.a)(i))}}function Z(n){var c=T+n;c>=100?k?F(100):(F(0),function(n){if(null==n)return;var c=a,r="".concat(t,"x").concat(t);c.find((function(e){return e.Name==r})).Value=S(r,q[1]),e.setResources(Object(o.a)(c));var i=Object(o.a)(h);i[n[0]][n[1]]=String(n[2]+"og"),j(i),v(i,"".concat(e.id,"curBoard"))}(B(h,e.id))):F(c)}Object(c.useEffect)((function(){!function(){var t=i,n=L,c=U,r=q;n[0]=x(e.id+t[0].Name)>0,c[0]=t[1].IncremenAmount(x(e.id+t[1].Name)),r[0]=t[2].IncremenAmount(x(e.id+t[2].Name)),n[2]=x(e.id+t[3].Name)>0,n[1]=x(e.id+t[4].Name)>0,r[1]=t[5].IncremenAmount(x(e.id+t[5].Name)),W(c),H(n),D(r)}(),Q();var c=localStorage.getItem(e.id+"curBoard");if(null!=c){var r=function(e){var t=e.split("::");if(t.length<=1)return null;for(var n=t[0],c=t[1].split(","),r=0,a=[],i=0;i<n;i++){a.push([]);for(var o=0;o<n;o++)a[i].push(String(c[r])),r++}return a}(c);j(r)}else X(t,n)}),[]),Object(c.useEffect)((function(){z(I(t,h,n)),L[2]&&function(){var t=B(h,e.id,!0),n=Object(o.a)(h);if(null==t||null==n[t[0]][t[1]]||n[t[0]][t[1]].includes("h"))return;n[t[0]][t[1]]=n[t[0]][t[1]]+"h",j(n),v(n,"".concat(e.id,"curBoard"))}()}),[h,L]),function(e,t,n,r){var a=Object(c.useRef)();Object(c.useEffect)((function(){a.current=e})),Object(c.useEffect)((function(){if(n){function n(){a.current(t)}var e=setInterval(n,r);return function(){return clearInterval(e)}}}))}(Z,q[0],L[0],U[0]),Object(c.useEffect)((function(){L[1]&&k&&ee("".concat(t,"x").concat(t),q[1],t,n)}),[k]),Object(c.useEffect)((function(){Q()}),[U,q]);var $=function e(t,n){Object(u.a)(this,e),this.Name=t,this.Func=n},_=[new $(i[0].Name,(function(e,t,n,c){Y(e,c+t,n);var r=L;r[0]=!0,H(Object(o.a)(r)),Q()})),new $(i[1].Name,(function(t,n,c,r){Y(t,r+n,c);var a=x(e.id+n),s=U;s[0]=i[1].IncremenAmount(a),W(Object(o.a)(s))})),new $(i[2].Name,(function(t,n,c,r){Y(t,r+n,c);var a=x(e.id+n),s=q;s[0]=i[2].IncremenAmount(a),D(Object(o.a)(s))})),new $(i[3].Name,(function(e,t,n,c){Y(e,c+t,n);var r=L;r[2]=!0,H(Object(o.a)(r))})),new $(i[4].Name,(function(e,t,n,c){Y(e,c+t,n);var r=L;r[1]=!0,H(Object(o.a)(r))})),new $(i[5].Name,(function(t,n,c){Y(t,e.id+n,c);var r=x(e.id+n),a=q;a[1]=i[5].IncremenAmount(r),D(Object(o.a)(a))}))];function ee(t,n,c,r){var i=a;i.find((function(e){return e.Name==t})).Value=S(t,n*(c*c)),e.setResources(Object(o.a)(i)),X(c,r)}return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"game",children:[Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"sudoku",children:[Object(l.jsx)(b,{size:t,squares:n,callBack:e.handleClick,amount:q[1],value:h,gameBoard:h,setGameBoard:j,id:e.id}),Object(l.jsx)(m,{solved:k,newGame:X,squares:n,size:t,collect:ee,clickBar:Z,fillbar:T,clickAmount:q[0],collectAmount:q[1],duration:U[0],actives:L[0]})]})}),Object(l.jsx)("div",{className:"shopDiv",children:Object(l.jsx)(A,{resources:a,pruchaseFuncs:_,name:t+"x"+t,id:e.id,items:i})})]})})}function M(e){return Object(l.jsxs)("div",{className:"topBar",children:[Object(l.jsx)("span",{className:"topText",children:"Idel Sudoku"}),Object(l.jsx)("span",{className:"help",children:"?"}),Object(l.jsxs)("div",{className:"hide",children:["This is an Idel Sudoku game. ",Object(l.jsx)("br",{}),"To get started solve the sudoku or click the process bar next to the pointer  ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"More items in the shop vill become purchasable has you buy more ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"How to play Sukodu ",Object(l.jsx)("br",{}),"- Every square has to contain a single number ",Object(l.jsx)("br",{}),"- Only the numbers from 1 through to size can be used",Object(l.jsx)("br",{}),"- Each size x size box can only contain each number from 1 to size once",Object(l.jsx)("br",{}),"- Each vertical column can only contain each number from 1 to size once",Object(l.jsx)("br",{}),"- Each horizontal row can only contain each number from 1 to size once"]})]})}n(17);function E(e){return Object(l.jsx)("dis",{children:Object(l.jsx)("table",{className:"resource",children:Object(l.jsxs)("tbody",{children:[Object(l.jsx)("th",{children:"Resources"}),Object(l.jsx)("th",{}),Object(l.jsx)("th",{}),e.resources.map((function(e){return function(e,t,n,c){if(c)return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t}),Object(l.jsx)("td",{children:Number(e).toFixed(2)}),Object(l.jsxs)("td",{children:[Number(n).toFixed(2),"/s"]})]})}(e.Value,e.Name,e.IncremenAmount,e.Display)}))]})})})}var T=1;function F(e){var t="0#",n=function e(t,n,c,r,a){Object(u.a)(this,e),this.Name="name",this.Value=0,this.Interval=0,this.AmountPar=0,this.Display=!1,this.Name=t,this.Value=n,this.Interval=c,this.IncremenAmount=r,this.Display=a},r=[new n("4x4",0,0,0,!0),new n("9x9",0,0,0,!1)],a=Object(c.useState)(r),i=Object(s.a)(a,2),f=i[0],d=i[1],b=Object(c.useState)(T),j=Object(s.a)(b,2),m=j[0],g=j[1],N=Object(c.useState)([!1]),k=Object(s.a)(N,2),I=k[0],y=k[1];Object(c.useEffect)((function(){d(Object(o.a)((r.map((function(e,t,n){n[t].Value=x(e.Name),n[t].Value>0&&(n[t].Display=!0)})),r))),function(){var e=I;e[0]=x(t+B[0].Name)>0,y(e)}()}),[]),Object(c.useEffect)((function(){var e=function(e){e.key<=9&&0!=e.key&&(T=e.key,g(e.key))};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]);function C(e,t,n,c,r,a){if(!(null==n||n.lengt>=T)){var i=Object(o.a)(n);if(function(e,t,n){var c=p(e+"curSolveList");return""!=c&&(c=c.split(","),n[t[0]][t[1]]!=t[2]&&void 0!=c.find((function(e){return e==t})))}(r,"".concat(e).concat(t).concat(T),n)){var s=f,u="".concat(n.length,"x").concat(n.length);s.find((function(e){return e.Name==u})).Value=S(u,a),d(Object(o.a)(s))}i[e][t]=String(T),c(Object(o.a)(i)),v(i,r+"curBoard")}}var B=function(){var e=new w(!1,!1,"9x9 Sudoku","Buy a 9x9 sudoku","With this you can earn 9x9",[["4x4",50]],[50],1,["1#Clicker strength"],(function(e){return e}),(function(){return!0}));return e.DontUseId=!0,[e]}(),F=[new function e(t,n){Object(u.a)(this,e),this.Name=t,this.Func=n}(B[0].Name,(function(e,t,n,c){!function(e,t,n){var c=x(t);if(c>=n)return;O(t,c+1);var r=f;e.forEach((function(e){var t=r.findIndex((function(t){return t.Name==e[0]}));r[t].Value=r[t].Value-e[1],O(e[0],r[t].Value)})),d(Object(o.a)(r))}(e,c+t,n);var r=I;r[0]=!0;var a=f;a[1].Display=!0,d(Object(o.a)(a)),y(Object(o.a)(r))}))];return Object(l.jsxs)("div",{children:[Object(l.jsx)(M,{}),Object(l.jsx)(E,{resources:f}),Object(l.jsx)(h,{selectedNumber:m,size:I[0]?9:4,callBack:function(e){T=e.target.value,g(e.target.value)}}),Object(l.jsxs)("div",{className:"gameshop",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(z,{id:"1#",size:4,squares:2,remove:7,resources:f,setResources:d,handleClick:C,currencys:r}),I[0]?Object(l.jsx)(z,{id:"2#",size:9,squares:3,remove:45,resources:f,setResources:d,handleClick:C,currencys:r}):null]}),Object(l.jsx)("div",{children:Object(l.jsx)(A,{resources:f,pruchaseFuncs:F,name:"Global Shop",id:t,items:B})})]})]})}i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(F,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.f1435ab2.chunk.js.map