window.__require=function t(e,o,n){function i(c,u){if(!o[c]){if(!e[c]){var a=c.split("/");if(a=a[a.length-1],!e[a]){var s="function"==typeof __require&&__require;if(!u&&s)return s(a,!0);if(r)return r(a,!0);throw new Error("Cannot find module '"+c+"'")}c=a}var l=o[c]={exports:{}};e[c][0].call(l.exports,function(t){return i(e[c][1][t]||t)},l,l.exports,t,e,o,n)}return o[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<n.length;c++)i(n[c]);return i}({FruitCollision:[function(t,e,o){"use strict";cc._RF.push(e,"10417yRnXZNtIP/ksyoFcQk","FruitCollision");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./GameManager"),u=cc._decorator,a=u.ccclass,s=(u.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.fruitNumber=0,e.returnNumber=!1,e.getNumberTime=0,e.bianjieX=0,e.testEndDJS=0,e.endOne=0,e}return i(e,t),e.prototype.start=function(){this.bianjieX=360-this.node.width/2},e.prototype.update=function(t){var e=this;if(this.node.x<-this.bianjieX&&(this.node.x=-this.bianjieX),this.node.x>this.bianjieX&&(this.node.x=this.bianjieX),this.returnNumber&&(this.scheduleOnce(function(){e.getNumberTime=0},.25),this.returnNumber=!1),"FruitNode"==this.node.parent.name&&(this.testEndDJS+=t),this.node.y+this.node.width/2>cc.find("Canvas/LineNode").children[0].y&&0==this.endOne&&this.testEndDJS>3){for(var o=0;o<cc.find("Canvas/FruitNode").children.length;o++)cc.find("Canvas/FruitNode").children[o].removeComponent(cc.PhysicsCircleCollider),cc.find("Canvas/FruitNode").children[o].removeComponent(cc.RigidBody);this.node.color=cc.Color.RED,cc.tween(this.node).to(.3,{opacity:0}).to(.3,{opacity:255}).union().repeat(3).call(function(){c.default.Instance.end(),cc.find("Canvas/LineNode").children[0].active=!1}).start(),this.endOne++}},e.prototype.getNumber=function(){var t=this.getNumberTime;return this.getNumberTime++,this.returnNumber=!0,t},e.prototype.onBeginContact=function(t,e,o){var n=this;if("fruit"==o.node.group){if(e.node.y<o.node.y)return;e.node.parent=cc.find("Canvas/FruitNode"),null!=e.node.getComponent(cc.RigidBody)&&(e.node.getComponent(cc.RigidBody).angularVelocity=0);var i=this.fruitNumber,r=o.node.getComponent("FruitCollision").fruitNumber;i==r&&i<9&&r<9?0==e.node.getComponent("FruitCollision").getNumber()&&(o.node.getComponent(cc.PhysicsCircleCollider).radius=0,o.node.getComponent(cc.PhysicsCircleCollider).apply(),this.node.getComponent(cc.PhysicsCircleCollider).radius=0,this.node.getComponent(cc.PhysicsCircleCollider).apply(),cc.tween(e.node).to(.1,{position:o.node.position}).call(function(){c.default.Instance.score+=n.fruitNumber+1,c.default.Instance.createLevelUpFruit(n.fruitNumber+1,o.node.position),o.node.active=!1,e.node.active=!1,o.node.destroy(),e.node.destroy()}).start()):i==r&&9==i&&9==r&&0==e.node.getComponent("FruitCollision").getNumber()&&(o.node.getComponent(cc.PhysicsCircleCollider).radius=0,o.node.getComponent(cc.PhysicsCircleCollider).apply(),this.node.getComponent(cc.PhysicsCircleCollider).radius=0,this.node.getComponent(cc.PhysicsCircleCollider).apply(),cc.tween(e.node).to(.1,{position:o.node.position}).call(function(){c.default.Instance.score+=n.fruitNumber+1,c.default.Instance.createLevelUpFruit(n.fruitNumber+1,o.node.position),o.node.active=!1,e.node.active=!1,o.node.destroy(),e.node.destroy()}).start())}},r([a],e)}(cc.Component));o.default=s,cc._RF.pop()},{"./GameManager":"GameManager"}],FruitController:[function(t,e,o){"use strict";cc._RF.push(e,"b075087xhFO/61odyoi5PAf","FruitController");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./GameManager"),u=cc._decorator,a=u.ccclass,s=u.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e}return i(e,t),e.prototype.start=function(){this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this)},e.prototype.onTouchStart=function(t){t.stopPropagation()},e.prototype.onTouchMove=function(t){t.stopPropagation()},e.prototype.onTouchEnd=function(t){t.stopPropagation(),c.default.Instance.changeCurrentFruit()},r([s(cc.Label)],e.prototype,"label",void 0),r([a],e)}(cc.Component);o.default=l,cc._RF.pop()},{"./GameManager":"GameManager"}],GameManager:[function(t,e,o){"use strict";cc._RF.push(e,"55bb8c9KfJB+rKN6Uf8Cn8w","GameManager");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,u=c.ccclass,a=c.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.fruitNode=null,e.targetfruitNode=null,e.fruitPre=null,e.lineNode=null,e.scoreLabel=null,e.targetFruit=null,e.Allfruit=[],e.score=0,e.endOne=0,e.fruitHeigth=0,e}var o;return i(e,t),o=e,e.prototype.onLoad=function(){null!=o.Instance&&o.Instance.destroy(),o.Instance=this,cc.director.getPhysicsManager().enabled=!0},e.prototype.start=function(){cc.tween(this.lineNode.children[0]).to(.3,{opacity:255}).to(.3,{opacity:0}).union().repeatForever().start(),this.lineNode.children[0].active=!1,this.createOneFruit(0,cc.v2(0,500))},e.prototype.update=function(){this.scoreLabel.string=this.score.toString(),this.lineNode.children[0].y-o.Instance.fruitHeigth<200&&this.lineNode.children[0].y-o.Instance.fruitHeigth>=0&&(this.lineNode.children[0].active=!0),this.lineNode.children[0].y-o.Instance.fruitHeigth>200&&(this.lineNode.children[0].active=!1)},e.prototype.createOneFruit=function(t,e){var o=this,n=cc.instantiate(this.fruitPre);n.setParent(this.targetfruitNode),n.getComponent(cc.Sprite).spriteFrame=this.Allfruit[t],n.getComponent("FruitCollision").fruitNumber=t,n.setPosition(e),n.setScale(0),n.getComponent(cc.RigidBody).type=cc.RigidBodyType.Static,n.getComponent(cc.PhysicsCircleCollider).radius=0,n.getComponent(cc.PhysicsCircleCollider).apply(),cc.tween(n).to(.5,{scale:1},{easing:"backOut"}).call(function(){o.targetFruit=n}).start()},e.prototype.createLevelUpFruit=function(t,e){var n=cc.instantiate(this.fruitPre);n.parent=this.fruitNode,n.getComponent(cc.Sprite).spriteFrame=this.Allfruit[t],n.getComponent("FruitCollision").fruitNumber=t,n.position=e,n.scale=0,n.getComponent(cc.RigidBody).linearVelocity=cc.v2(0,-100),n.getComponent(cc.PhysicsCircleCollider).radius=n.height/2,n.getComponent(cc.PhysicsCircleCollider).apply(),cc.tween(n).to(.5,{scale:1},{easing:"backOut"}).call(function(){null!=n.getComponent(cc.PhysicsCircleCollider)&&(n.getComponent(cc.PhysicsCircleCollider).radius=n.height/2,n.getComponent(cc.RigidBody).type=cc.RigidBodyType.Dynamic,n.getComponent(cc.PhysicsCircleCollider).apply())}).start(),o.Instance.fruitHeigth=o.Instance.findHighestFruit()},e.prototype.changeCurrentFruit=function(){var t=this.targetfruitNode.children.length,e=t&&this.targetfruitNode.children[t-1],o=e.getComponent("FruitCollision").fruitNumber;o=o+1>9?0:o+1,e.getComponent(cc.Sprite).spriteFrame=this.Allfruit[o],e.getComponent("FruitCollision").fruitNumber=o},e.prototype.end=function(){var t=this;if(0==this.endOne){for(var e=0,n=function(n){setTimeout(function(){o.Instance.score+=t.fruitNode.children[n].getComponent("FruitCollision").fruitNumber+1,t.fruitNode.children[n].active=!1},100*++e)},i=this.fruitNode.children.length-1;i>=0;i--)n(i);this.targetfruitNode.active=!0;for(var r=0;r<this.targetfruitNode.children.length;r++)this.targetfruitNode.children[r].active=!1;this.endOne++}},e.prototype.findHighestFruit=function(){for(var t=this.fruitNode.children[0].y,e=1;e<this.fruitNode.children.length;e++){var o=this.fruitNode.children[e].y+this.fruitNode.children[e].width/2;t<o&&(t=o)}return t},e.Instance=null,r([a(cc.Node)],e.prototype,"fruitNode",void 0),r([a(cc.Node)],e.prototype,"targetfruitNode",void 0),r([a(cc.Prefab)],e.prototype,"fruitPre",void 0),r([a(cc.Node)],e.prototype,"lineNode",void 0),r([a(cc.Label)],e.prototype,"scoreLabel",void 0),r([a(cc.SpriteFrame)],e.prototype,"Allfruit",void 0),o=r([u],e)}(cc.Component);o.default=s,cc._RF.pop()},{}],InputController:[function(t,e,o){"use strict";cc._RF.push(e,"54ec44VYz9C0qtS64/y8LLx","InputController");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./GameManager"),u=cc._decorator,a=u.ccclass,s=(u.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.touchNum=0,e}return i(e,t),e.prototype.start=function(){this.openTouch()},e.prototype.openTouch=function(){this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this),this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.onTouchEnd,this)},e.prototype.onTouchStart=function(t){if(null!=c.default.Instance.targetFruit){this.touchNum=1;var e=this.node.convertToNodeSpaceAR(t.getLocation()).x,o=c.default.Instance.targetFruit.y;cc.tween(c.default.Instance.targetFruit).to(.1,{position:cc.v3(e,o,0)}).start()}},e.prototype.onTouchMove=function(t){null!=c.default.Instance.targetFruit&&(this.touchNum=1,c.default.Instance.targetFruit.x=this.node.convertToNodeSpaceAR(t.getLocation()).x)},e.prototype.onTouchEnd=function(){null!=c.default.Instance.targetFruit&&1==this.touchNum&&(this.touchNum=0,c.default.Instance.targetFruit.getComponent(cc.PhysicsCircleCollider).radius=c.default.Instance.targetFruit.height/2,c.default.Instance.targetFruit.getComponent(cc.PhysicsCircleCollider).apply(),c.default.Instance.targetFruit.getComponent(cc.RigidBody).type=cc.RigidBodyType.Dynamic,c.default.Instance.targetFruit.getComponent(cc.RigidBody).linearVelocity=cc.v2(0,-800),c.default.Instance.targetFruit=null,this.scheduleOnce(function(){c.default.Instance.createOneFruit(Math.floor(5*Math.random()),cc.v2(0,500))},.5))},r([a],e)}(cc.Component));o.default=s,cc._RF.pop()},{"./GameManager":"GameManager"}]},{},["FruitCollision","FruitController","GameManager","InputController"]);