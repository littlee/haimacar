// Garden Gnome Software - Skin
// Object2VR 3.1.5/10768
// Filename: skin.ggsk
// Generated 周五 10月 6 22:38:36 2017

function object2vrSkin(player, base) {
	var me = this
	var flag = false
	var nodeMarker = new Array()
	var activeNodeMarker = new Array()
	this.player = player
	this.player.skinObj = this
	this.divSkin = player.divSkin
	var basePath = ''
	this.elementMouseDown = new Array()
	this.elementMouseOver = new Array()
	var cssPrefix = ''
	var domTransition = 'transition'
	var domTransform = 'transform'
	var prefixes = 'Webkit,Moz,O,ms,Ms'.split(',')
	var i
	for (i = 0; i < prefixes.length; i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix = '-' + prefixes[i].toLowerCase() + '-'
			domTransition = prefixes[i] + 'Transition'
			domTransform = prefixes[i] + 'Transform'
		}
	}

	this.player.setMargins(0, 0, 0, 0)

	this.updateSize = function(startElement) {
		var stack = new Array()
		stack.push(startElement)
		while (stack.length > 0) {
			var e = stack.pop()
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition()
			}
			if (e.hasChildNodes()) {
				for (i = 0; i < e.childNodes.length; i++) {
					stack.push(e.childNodes[i])
				}
			}
		}
	}

	parameterToTransform = function(p) {
		var hs =
			'translate(' +
			p.rx +
			'px,' +
			p.ry +
			'px) rotate(' +
			p.a +
			'deg) scale(' +
			p.sx +
			',' +
			p.sy +
			')'
		return hs
	}

	this.findElements = function(id, regex) {
		var r = new Array()
		var stack = new Array()
		var pat = new RegExp(id, '')
		stack.push(me.divSkin)
		while (stack.length > 0) {
			var e = stack.pop()
			if (regex) {
				if (pat.test(e.ggId)) r.push(e)
			} else {
				if (e.ggId == id) r.push(e)
			}
			if (e.hasChildNodes()) {
				for (i = 0; i < e.childNodes.length; i++) {
					stack.push(e.childNodes[i])
				}
			}
		}
		return r
	}

	this.addSkin = function() {
		this.divSkin.ggUpdateSize = function(w, h) {
			me.updateSize(me.divSkin)
		}
		this.divSkin.ggViewerInit = function() {}
		this.divSkin.ggLoaded = function() {}
		this.divSkin.ggReLoaded = function() {}
		this.divSkin.ggLoadedLevels = function() {}
		this.divSkin.ggReLoadedLevels = function() {}
		this.divSkin.ggEnterFullscreen = function() {}
		this.divSkin.ggExitFullscreen = function() {}
		this.skinTimerEvent()
	}
	this.hotspotProxyClick = function(id) {}
	this.hotspotProxyOver = function(id) {}
	this.hotspotProxyOut = function(id) {}
	this.changeActiveNode = function(id) {
		var newMarker = new Array()
		var i, j
		var tags = me.player.userdata.tags
		for (i = 0; i < nodeMarker.length; i++) {
			var match = false
			if (nodeMarker[i].ggMarkerNodeId == id && id != '') match = true
			for (j = 0; j < tags.length; j++) {
				if (nodeMarker[i].ggMarkerNodeId == tags[j]) match = true
			}
			if (match) {
				newMarker.push(nodeMarker[i])
			}
		}
		for (i = 0; i < activeNodeMarker.length; i++) {
			if (newMarker.indexOf(activeNodeMarker[i]) < 0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility = 'inherit'
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility = 'hidden'
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate()
				}
			}
		}
		for (i = 0; i < newMarker.length; i++) {
			if (activeNodeMarker.indexOf(newMarker[i]) < 0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility = 'hidden'
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility = 'inherit'
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate()
				}
			}
		}
		activeNodeMarker = newMarker
	}
	this.skinTimerEvent = function() {
		setTimeout(function() {
			me.skinTimerEvent()
		}, 10)
	}
	function SkinHotspotClass(skinObj, hotspot) {
		var me = this
		var flag = false
		this.player = skinObj.player
		this.skin = skinObj
		this.hotspot = hotspot
		this.elementMouseDown = new Array()
		this.elementMouseOver = new Array()
		this.__div = document.createElement('div')
		this.__div.setAttribute(
			'style',
			'position:absolute; left:0px;top:0px;visibility: inherit;'
		)

		this.findElements = function(id, regex) {
			return me.skin.findElements(id, regex)
		}

		if (hotspot.skinid == 'bxg') {
			this.__div = document.createElement('div')
			this.__div.ggId = 'bxg'
			this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 }
			this.__div.ggVisible = true
			this.__div.className = 'ggskin ggskin_hotspot'
			this.__div.ggType = 'hotspot'
			hs = 'position:absolute;'
			hs += 'left: 0px;'
			hs += 'top:  0px;'
			hs += 'width: 5px;'
			hs += 'height: 5px;'
			hs += cssPrefix + 'transform-origin: 50% 50%;'
			hs += 'visibility: inherit;'
			this.__div.setAttribute('style', hs)
			this.__div.onclick = function() {
				me.player.openUrl('/?page=detail&product=s5bxg', '')
				me.skin.hotspotProxyClick(me.hotspot.id)
			}
			this.__div.onmouseover = function() {
				me.player.hotspot = me.hotspot
				me.skin.hotspotProxyOver(me.hotspot.id)
			}
			this.__div.onmouseout = function() {
				me.player.hotspot = me.player.emptyHotspot
				me.skin.hotspotProxyOut(me.hotspot.id)
			}
			this._bxg = document.createElement('div')
			this._bxg.ggId = 'Image 1'
			this._bxg.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 }
			this._bxg.ggVisible = true
			this._bxg.className = 'ggskin ggskin_image'
			this._bxg.ggType = 'image'
			hs = 'position:absolute;'
			hs += 'left: -20px;'
			hs += 'top:  -26px;'
			hs += 'width: 40px;'
			hs += 'height: 53px;'
			hs += cssPrefix + 'transform-origin: 50% 50%;'
			hs += 'visibility: inherit;'
			this._bxg.setAttribute('style', hs)
			this._bxg__img = document.createElement('img')
			this._bxg__img.className = 'ggskin ggskin_image'
			this._bxg__img.setAttribute(
				'src',
				basePath + '/images/model/s5young/bxg.png'
			)
			this._bxg__img.setAttribute(
				'style',
				'position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;'
			)
			this._bxg__img.className = 'ggskin ggskin_image'
			this._bxg__img['ondragstart'] = function() {
				return false
			}
			me.player.checkLoaded.push(this._bxg__img)
			this._bxg.appendChild(this._bxg__img)
			this.__div.appendChild(this._bxg)
		} else if (hotspot.skinid == 'cclt') {
			this.__div = document.createElement('div')
			this.__div.ggId = 'lt'
			this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 }
			this.__div.ggVisible = true
			this.__div.className = 'ggskin ggskin_hotspot'
			this.__div.ggType = 'hotspot'
			hs = 'position:absolute;'
			hs += 'left: 0px;'
			hs += 'top:  0px;'
			hs += 'width: 5px;'
			hs += 'height: 5px;'
			hs += cssPrefix + 'transform-origin: 50% 50%;'
			hs += 'visibility: inherit;'
			this.__div.setAttribute('style', hs)
			this.__div.onclick = function() {
				me.player.openUrl('/?page=detail&product=s5cclt', '')
				me.skin.hotspotProxyClick(me.hotspot.id)
			}
			this.__div.onmouseover = function() {
				me.player.hotspot = me.hotspot
				me.skin.hotspotProxyOver(me.hotspot.id)
			}
			this.__div.onmouseout = function() {
				me.player.hotspot = me.player.emptyHotspot
				me.skin.hotspotProxyOut(me.hotspot.id)
			}
			this._cclt = document.createElement('div')
			this._cclt.ggId = 'Image 2'
			this._cclt.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 }
			this._cclt.ggVisible = true
			this._cclt.className = 'ggskin ggskin_image'
			this._cclt.ggType = 'image'
			hs = 'position:absolute;'
			hs += 'left: -20px;'
			hs += 'top:  -26px;'
			hs += 'width: 40px;'
			hs += 'height: 53px;'
			hs += cssPrefix + 'transform-origin: 50% 50%;'
			hs += 'visibility: inherit;'
			this._cclt.setAttribute('style', hs)
			this._cclt__img = document.createElement('img')
			this._cclt__img.className = 'ggskin ggskin_image'
			this._cclt__img.setAttribute(
				'src',
				basePath + '/images/model/s5young/cclt.png'
			)
			this._cclt__img.setAttribute(
				'style',
				'position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;'
			)
			this._cclt__img.className = 'ggskin ggskin_image'
			this._cclt__img['ondragstart'] = function() {
				return false
			}
			me.player.checkLoaded.push(this._cclt__img)
			this._cclt.appendChild(this._cclt__img)
			this.__div.appendChild(this._cclt)
		} else if (hotspot.skinid == 'ctb') {
			this.__div = document.createElement('div')
			this.__div.ggId = 'lt'
			this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 }
			this.__div.ggVisible = true
			this.__div.className = 'ggskin ggskin_hotspot'
			this.__div.ggType = 'hotspot'
			hs = 'position:absolute;'
			hs += 'left: 0px;'
			hs += 'top:  0px;'
			hs += 'width: 5px;'
			hs += 'height: 5px;'
			hs += cssPrefix + 'transform-origin: 50% 50%;'
			hs += 'visibility: inherit;'
			this.__div.setAttribute('style', hs)
			this.__div.onclick = function() {
				me.player.openUrl('/?page=detail&product=s5ctb', '')
				me.skin.hotspotProxyClick(me.hotspot.id)
			}
			this.__div.onmouseover = function() {
				me.player.hotspot = me.hotspot
				me.skin.hotspotProxyOver(me.hotspot.id)
			}
			this.__div.onmouseout = function() {
				me.player.hotspot = me.player.emptyHotspot
				me.skin.hotspotProxyOut(me.hotspot.id)
			}
			this._ctb = document.createElement('div')
			this._ctb.ggId = 'Image 2'
			this._ctb.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 }
			this._ctb.ggVisible = true
			this._ctb.className = 'ggskin ggskin_image'
			this._ctb.ggType = 'image'
			hs = 'position:absolute;'
			hs += 'left: -20px;'
			hs += 'top:  -26px;'
			hs += 'width: 40px;'
			hs += 'height: 53px;'
			hs += cssPrefix + 'transform-origin: 50% 50%;'
			hs += 'visibility: inherit;'
			this._ctb.setAttribute('style', hs)
			this._ctb__img = document.createElement('img')
			this._ctb__img.className = 'ggskin ggskin_image'
			this._ctb__img.setAttribute(
				'src',
				basePath + '/images/model/s5young/ctb.png'
			)
			this._ctb__img.setAttribute(
				'style',
				'position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;'
			)
			this._ctb__img.className = 'ggskin ggskin_image'
			this._ctb__img['ondragstart'] = function() {
				return false
			}
			me.player.checkLoaded.push(this._ctb__img)
			this._ctb.appendChild(this._ctb__img)
			this.__div.appendChild(this._ctb)
		} else if (hotspot.skinid == 'ym') {
			this.__div = document.createElement('div')
			this.__div.ggId = 'lt'
			this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 }
			this.__div.ggVisible = true
			this.__div.className = 'ggskin ggskin_hotspot'
			this.__div.ggType = 'hotspot'
			hs = 'position:absolute;'
			hs += 'left: 0px;'
			hs += 'top:  0px;'
			hs += 'width: 5px;'
			hs += 'height: 5px;'
			hs += cssPrefix + 'transform-origin: 50% 50%;'
			hs += 'visibility: inherit;'
			this.__div.setAttribute('style', hs)
			this.__div.onclick = function() {
				me.player.openUrl('/?page=detail&product=s5ym', '')
				me.skin.hotspotProxyClick(me.hotspot.id)
			}
			this.__div.onmouseover = function() {
				me.player.hotspot = me.hotspot
				me.skin.hotspotProxyOver(me.hotspot.id)
			}
			this.__div.onmouseout = function() {
				me.player.hotspot = me.player.emptyHotspot
				me.skin.hotspotProxyOut(me.hotspot.id)
			}
			this._ym = document.createElement('div')
			this._ym.ggId = 'Image 2'
			this._ym.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 }
			this._ym.ggVisible = true
			this._ym.className = 'ggskin ggskin_image'
			this._ym.ggType = 'image'
			hs = 'position:absolute;'
			hs += 'left: -20px;'
			hs += 'top:  -26px;'
			hs += 'width: 40px;'
			hs += 'height: 53px;'
			hs += cssPrefix + 'transform-origin: 50% 50%;'
			hs += 'visibility: inherit;'
			this._ym.setAttribute('style', hs)
			this._ym__img = document.createElement('img')
			this._ym__img.className = 'ggskin ggskin_image'
			this._ym__img.setAttribute(
				'src',
				basePath + '/images/model/s5young/ym.png'
			)
			this._ym__img.setAttribute(
				'style',
				'position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;'
			)
			this._ym__img.className = 'ggskin ggskin_image'
			this._ym__img['ondragstart'] = function() {
				return false
			}
			me.player.checkLoaded.push(this._ym__img)
			this._ym.appendChild(this._ym__img)
			this.__div.appendChild(this._ym)
		}
	}
	this.addSkinHotspot = function(hotspot) {
		return new SkinHotspotClass(me, hotspot)
	}
	this.addSkin()
}
