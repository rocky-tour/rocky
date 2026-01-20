// Garden Gnome Software - Skin
// Pano2VR 6.1.10/18007
// Filename: menu bar new.ggsk
// Generated 2026-01-21T03:30:43

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 30px;';
		hs+='border-radius : 30px;';
		hs+='background : rgba(0,0,0,0.862745);';
		hs+='border : 1px solid #000000;';
		hs+='bottom : 8px;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 380px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._rectangle_1);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDM4IDM4Ij4KIDxjaXJjbGUgcj0iMTguMjUiIGZpbGwtb3BhY2l0eT0iMC4xNSIgc3Ryb2tlPSIjRUZFRkVGIiBzdHJva2Utd2lkdGg9IjEuNSIgY3g9IjE5IiBjeT0iMTkiIGZpbGw9IiNFRkVGRUYiLz4KIDxwYXRoIGQ9Ik0yNyAxOUgxMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IiNFRkVGRUYiIHN0cm9rZS13aWR0aD0iMS41Ii8+Cjwvc3ZnPgo=';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=-100;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 21px;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_1.onmouseout=function (e) {
			me.elementMouseDown['svg_1']=false;
		}
		me._svg_1.onmousedown=function (e) {
			me.elementMouseDown['svg_1']=true;
		}
		me._svg_1.onmouseup=function (e) {
			me.elementMouseDown['svg_1']=false;
		}
		me._svg_1.ontouchend=function (e) {
			me.elementMouseDown['svg_1']=false;
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._svg_1);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOSIgaGVpZ2h0PSIzOSIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDM5IDM5Ij4KIDxjaXJjbGUgcj0iMTguNzUiIGZpbGwtb3BhY2l0eT0iMC4xNSIgc3Ryb2tlPSIjRUZFRkVGIiBzdHJva2Utd2lkdGg9IjEuNSIgY3g9IjE5LjUiIGN5PSIxOS41IiBmaWxsPSIjRUZFRkVGIi8+CiA8cGF0aCBkPSJNMjAgMTJWMjhNMjggMjBIMTIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjRUZFRkVGIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8L3N2Zz4K';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=-150;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 21px;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_2.onmouseout=function (e) {
			me.elementMouseDown['svg_2']=false;
		}
		me._svg_2.onmousedown=function (e) {
			me.elementMouseDown['svg_2']=true;
		}
		me._svg_2.onmouseup=function (e) {
			me.elementMouseDown['svg_2']=false;
		}
		me._svg_2.ontouchend=function (e) {
			me.elementMouseDown['svg_2']=false;
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._svg_2);
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOSIgaGVpZ2h0PSIzOSIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDM5IDM5Ij4KIDxwYXRoIGQ9Ik0xNS4zOTQ3IDI3LjcxMDFIMTAuMjYzMUM5Ljk5MDk0IDI3LjcxMDEgOS43Mjk4OSAyNy42MDIgOS41Mzc0MiAyNy40MDk1QzkuMzQ0OTUgMjcuMjE3IDkuMjM2ODIgMjYuOTU2IDkuMjM2ODIgMjYuNjgzOFYxMi4zMTU0QzkuMjM2ODIgMTIuMDQzMiA5LjM0NDk1IDExLjc4MjEgOS41Mzc0MiAxMS41ODk3QzkuNzI5ODkgMTEuMzk3MiA5Ljk5MDk0IDExLjI4OTEgMTAuMjYzMSAxMS4yODkxSDI4LjczNjhDMj'+
			'kuMDA5IDExLjI4OTEgMjkuMjcwMSAxMS4zOTcyIDI5LjQ2MjUgMTEuNTg5N0MyOS42NTUgMTEuNzgyMSAyOS43NjMxIDEyLjA0MzIgMjkuNzYzMSAxMi4zMTU0VjE1LjM5NDNNMjguNzM2OCAxOS40OTk2SDIwLjUyNjNDMjAuMjU0MSAxOS40OTk2IDE5Ljk5MyAxOS42MDc3IDE5LjgwMDYgMTkuODAwMkMxOS42MDgxIDE5Ljk5MjcgMTkuNSAyMC4yNTM3IDE5LjUgMjAuNTI1OVYyNi42ODM4QzE5LjUgMjYuOTU2IDE5LjYwODEgMjcuMjE3IDE5LjgwMDYgMjcuNDA5NUMxOS45OTMgMjcuNjAyIDIwLjI1NDEgMjcuNzEwMSAyMC41MjYzIDI3LjcxMDFIMjguNzM2OEMyOS4wMDkgMjcuNzEwMSAyOS4y'+
			'NzAxIDI3LjYwMiAyOS40NjI1IDI3LjQwOTVDMjkuNjU1IDI3LjIxNyAyOS43NjMxIDI2Ljk1NiAyOS43NjMxIDI2LjY4MzhWMjAuNTI1OUMyOS43NjMxIDIwLjI1MzcgMjkuNjU1IDE5Ljk5MjcgMjkuNDYyNSAxOS44MDAyQzI5LjI3MDEgMTkuNjA3NyAyOS4wMDkgMTkuNDk5NiAyOC43MzY4IDE5LjQ5OTZaIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iI0VGRUZFRiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KIDxjaXJjbGUgcj0iMTguNzUiIGZpbGwtb3BhY2l0eT0iMC4xNSIgc3Ryb2tlPSIjRUZFRkVGIiBzdHJva2Utd2lkdGg9IjEuNSIgY3'+
			'g9IjE5LjUiIGN5PSIxOS41IiBmaWxsPSIjRUZFRkVGIi8+Cjwvc3ZnPgo=';
		me._svg_3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDx=151;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_3.onclick=function (e) {
			if (
				(
					((player.getIsFullscreen() == false))
				)
			) {
				player.toggleFullscreen();
			}
			if (
				(
					((player.getIsFullscreen() == true))
				)
			) {
				player.exitFullscreen();
			}
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._svg_3);
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOSIgaGVpZ2h0PSIzOSIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDM5IDM5Ij4KIDxjaXJjbGUgcj0iMTguNzUiIGZpbGwtb3BhY2l0eT0iMC4xNSIgc3Ryb2tlPSIjRUZFRkVGIiBzdHJva2Utd2lkdGg9IjEuNSIgY3g9IjE5LjUiIGN5PSIxOS41IiBmaWxsPSIjRUZFRkVGIi8+CiA8cGF0aCBkPSJNMjAgMTFMMjAgMjlaTTIwIDI5TDI3IDIyLjI1Wk0yMCAyOUwxMyAyMi4yNVoiIGZpbGwtb3BhY2l0eT0iMC4xNSIgZmlsbD0iI0VGRUZFRiIvPgogPHBhdGggZD0iTTIwIDExTDIwIDI5TTIwIDI5TDI3IDIyLj'+
			'I1TTIwIDI5TDEzIDIyLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iI0VGRUZFRiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPC9zdmc+Cg==';
		me._svg_4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggDx=100;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_4.onmouseout=function (e) {
			me.elementMouseDown['svg_4']=false;
		}
		me._svg_4.onmousedown=function (e) {
			me.elementMouseDown['svg_4']=true;
		}
		me._svg_4.onmouseup=function (e) {
			me.elementMouseDown['svg_4']=false;
		}
		me._svg_4.ontouchend=function (e) {
			me.elementMouseDown['svg_4']=false;
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._svg_4);
		el=me._svg_5=document.createElement('div');
		els=me._svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOSIgaGVpZ2h0PSIzOSIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDM5IDM5Ij4KIDxjaXJjbGUgcj0iMTguNzUiIGZpbGwtb3BhY2l0eT0iMC4xNSIgc3Ryb2tlPSIjRUZFRkVGIiBzdHJva2Utd2lkdGg9IjEuNSIgY3g9IjE5LjUiIGN5PSIxOS41IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDM5KSIgZmlsbD0iI0VGRUZFRiIvPgogPHBhdGggZD0iTTIwIDI4TDIwIDEwWk0yMCAxMEwyNyAxNi43NVpNMjAgMTBMMTMgMTYuNzVaIiBmaWxsLW9wYWNpdHk9IjAuMTUiIGZpbGw9IiNFRkVGRUYiLz4KID'+
			'xwYXRoIGQ9Ik0yMCAyOEwyMCAxME0yMCAxMEwyNyAxNi43NU0yMCAxMEwxMyAxNi43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiNFRkVGRUYiIHN0cm9rZS13aWR0aD0iMS41Ii8+Cjwvc3ZnPgo=';
		me._svg_5__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5";
		el.ggDx=50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_5.onmouseout=function (e) {
			me.elementMouseDown['svg_5']=false;
		}
		me._svg_5.onmousedown=function (e) {
			me.elementMouseDown['svg_5']=true;
		}
		me._svg_5.onmouseup=function (e) {
			me.elementMouseDown['svg_5']=false;
		}
		me._svg_5.ontouchend=function (e) {
			me.elementMouseDown['svg_5']=false;
		}
		me._svg_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._svg_5);
		el=me._svg_6=document.createElement('div');
		els=me._svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOSIgaGVpZ2h0PSIzOSIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDM5IDM5Ij4KIDxjaXJjbGUgcj0iMTguNzUiIGZpbGwtb3BhY2l0eT0iMC4xNSIgc3Ryb2tlPSIjRUZFRkVGIiBzdHJva2Utd2lkdGg9IjEuNSIgY3g9IjE5LjUiIGN5PSIxOS41IiB0cmFuc2Zvcm09Im1hdHJpeCgtNC4zNzExNGUtMDggMSAxIDQuMzcxMTRlLTA4IDEuNzA0NzRlLTA2IDApIiBmaWxsPSIjRUZFRkVGIi8+CiA8cGF0aCBkPSJNMTEgMjBMMjkgMjBaTTI5IDIwTDIyLjI1IDI3Wk0yOSAyMEwyMi4yNSAxM1oiIGZpbGwtb3BhY2'+
			'l0eT0iMC4xNSIgZmlsbD0iI0VGRUZFRiIvPgogPHBhdGggZD0iTTExIDIwTDI5IDIwTTI5IDIwTDIyLjI1IDI3TTI5IDIwTDIyLjI1IDEzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iI0VGRUZFRiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPC9zdmc+Cg==';
		me._svg_6__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 21px;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_6.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_6.onmouseout=function (e) {
			me.elementMouseDown['svg_6']=false;
		}
		me._svg_6.onmousedown=function (e) {
			me.elementMouseDown['svg_6']=true;
		}
		me._svg_6.onmouseup=function (e) {
			me.elementMouseDown['svg_6']=false;
		}
		me._svg_6.ontouchend=function (e) {
			me.elementMouseDown['svg_6']=false;
		}
		me._svg_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._svg_6);
		el=me._svg_7=document.createElement('div');
		els=me._svg_7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOSIgaGVpZ2h0PSIzOSIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDM5IDM5Ij4KIDxjaXJjbGUgcj0iMTguNzUiIGZpbGwtb3BhY2l0eT0iMC4xNSIgc3Ryb2tlPSIjRUZFRkVGIiBzdHJva2Utd2lkdGg9IjEuNSIgY3g9IjE5LjUiIGN5PSIxOS41IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxOS41IDE5LjUpIiBmaWxsPSIjRUZFRkVGIi8+CiA8cGF0aCBkPSJNMjggMjBMMTAgMjBaTTEwIDIwTDE2Ljc1IDI3Wk0xMCAyMEwxNi43NSAxM1oiIGZpbGwtb3BhY2l0eT0iMC4xNSIgZmlsbD0iI0VGRUZFRiIvPgogPH'+
			'BhdGggZD0iTTI4IDIwTDEwIDIwTTEwIDIwTDE2Ljc1IDI3TTEwIDIwTDE2Ljc1IDEzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iI0VGRUZFRiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPC9zdmc+Cg==';
		me._svg_7__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7";
		el.ggDx=-49;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 21px;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_7.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_7.onmouseout=function (e) {
			me.elementMouseDown['svg_7']=false;
		}
		me._svg_7.onmousedown=function (e) {
			me.elementMouseDown['svg_7']=true;
		}
		me._svg_7.onmouseup=function (e) {
			me.elementMouseDown['svg_7']=false;
		}
		me._svg_7.ontouchend=function (e) {
			me.elementMouseDown['svg_7']=false;
		}
		me._svg_7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._svg_7);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseDown['svg_1']) {
			player.changeFovLog(0.6,true);
		}
		if (me.elementMouseDown['svg_2']) {
			player.changeFovLog(-0.6,true);
		}
		if (me.elementMouseDown['svg_4']) {
			player.changeTiltLog(-0.6,true);
		}
		if (me.elementMouseDown['svg_5']) {
			player.changeTiltLog(0.6,true);
		}
		if (me.elementMouseDown['svg_6']) {
			player.changePanLog(-0.6,true);
		}
		if (me.elementMouseDown['svg_7']) {
			player.changePanLog(0.6,true);
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me.skinTimerEvent();
};