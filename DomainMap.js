javascript:(function(n, g, q, c, f) {
    var s = document,
        l = s.onclick,
        h = "ws_cmbm-" + f,
        b = s.getElementById(h),
        d = "ws_cmbms-" + f,
        p = s.getElementById(d),
        e = null,
        o, a = {
            tl: {
                left: "10px",
                top: "10px"
            },
            tr: {
                right: "10px",
                top: "10px"
            },
            bl: {
                left: "10px",
                bottom: "10px"
            },
            br: {
                right: "10px",
                bottom: "10px"
            }
        },
        k, m = ".ws_cmbmc{position:fixed;z-index:10123456;width:200px;display:block;visibility:hidden;border:1px solid #b0b0b0;background:#fff;padding:3px 0 3px 3px;text-align:left;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;box-shadow:2px 2px 3px #777;-moz-box-shadow:2px 2px 3px #777;-webkit-box-shadow:2px 2px 3px #777;}.ws_cmbmc a{display:block;float:left;margin:0;width:191px;border:none;padding:8px 0 8px 6px;background:#fff;color:black;text-decoration:none;font:normal normal normal 12px/100% Verdana,sans-serif;letter-spacing:normal;word-spacing:normal;}.ws_cmbmc a:hover{background:#a0a0a0;color:white;border:none;text-decoration:none;font:normal normal normal 12px/100% Verdana,sans-serif;letter-spacing:normal;word-spacing:normal;}";

    function r() {
        b.style.visibility = "hidden"
    }

    function j() {
        b.style.visibility = "visible"
    }
    if (b) {
        if (b.style.visibility == "visible") {
            r()
        } else {
            j()
        }
        return
    }
    if (!p) {
        m = m.replace(/.ws_cmbmc/g, "#" + h);
        p = s.createElement("style");
        p.type = "text/css";
        p.id = d;
        p.appendChild(s.createTextNode(m));
        s.getElementsByTagName("head")[0].appendChild(p)
    }
    b = s.createElement("div");
    b.setAttribute("id", h);
    b.className = "ws_cmbmc";
    for (o = 0; o < n.length; o++) {
        e = s.createElement("a");
        e.appendChild(s.createTextNode(n[o].title));
        e.setAttribute("href", n[o].url);
        e.onclick = (function(i) {
            if (q) {
                r()
            }
        });
        b.appendChild(e)
    }
    s.getElementsByTagName("body")[0].appendChild(b);
    if (a.hasOwnProperty(g)) {
        for (k in a[g]) {
            b.style[k] = a[g][k]
        }
    } else {
        if (g == "c") {
            b.style.left = Math.round((window.innerWidth - b.offsetWidth) / 2) + "px";
            b.style.top = Math.round((window.innerHeight - b.offsetHeight) / 2) + "px"
        }
    }
    if (c) {
        s.onclick = (function() {
            r();
            if (typeof l == "function") {
                l()
            }
        });
        b.onclick = (function(i) {
            i.stopPropagation()
        })
    }
    j()
})([{
        title: "Map Current Domain.",
        url: "javascript:(function(n,g,q,c,f){var s=document,l=s.onclick,h=\x22ws_cmbm-\x22+f,b=s.getElementById(h),d=\x22ws_cmbms-\x22+f,p=s.getElementById(d),e=null,o,a={tl:{left:\x2210px\x22,top:\x2210px\x22},tr:{right:\x2210px\x22,top:\x2210px\x22},bl:{left:\x2210px\x22,bottom:\x2210px\x22},br:{right:\x2210px\x22,bottom:\x2210px\x22}},k,m=\x22.ws_cmbmc{position:fixed;z-index:10123456;width:200px;display:block;visibility:hidden;border:1px solid #b0b0b0;background:#fff;padding:3px 0 3px 3px;text-align:left;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;box-shadow:2px 2px 3px #777;-moz-box-shadow:2px 2px 3px #777;-webkit-box-shadow:2px 2px 3px #777;}.ws_cmbmc a{display:block;float:left;margin:0;width:191px;border:none;padding:8px 0 8px 6px;background:#fff;color:black;text-decoration:none;font:normal normal normal 12px/100% Verdana,sans-serif;letter-spacing:normal;word-spacing:normal;}.ws_cmbmc a:hover{background:#a0a0a0;color:white;border:none;text-decoration:none;font:normal normal normal 12px/100% Verdana,sans-serif;letter-spacing:normal;word-spacing:normal;}\x22;function r(){b.style.visibility=\x22hidden\x22}function j(){b.style.visibility=\x22visible\x22}if(b){if(b.style.visibility==\x22visible\x22){r()}else{j()}return}if(!p){m=m.replace(/.ws_cmbmc/g,\x22#\x22+h);p=s.createElement(\x22style\x22);p.type=\x22text/css\x22;p.id=d;p.appendChild(s.createTextNode(m));s.getElementsByTagName(\x22head\x22)[0].appendChild(p)}b=s.createElement(\x22div\x22);b.setAttribute(\x22id\x22,h);b.className=\x22ws_cmbmc\x22;for(o=0;o<n.length;o++){e=s.createElement(\x22a\x22);e.appendChild(s.createTextNode(n[o].title));e.setAttribute(\x22href\x22,n[o].url);e.onclick=(function(i){if(q){r()}});b.appendChild(e)}s.getElementsByTagName(\x22body\x22)[0].appendChild(b);if(a.hasOwnProperty(g)){for(k in a[g]){b.style[k]=a[g][k]}}else{if(g==\x22c\x22){b.style.left=Math.round((window.innerWidth-b.offsetWidth)/2)+\x22px\x22;b.style.top=Math.round((window.innerHeight-b.offsetHeight)/2)+\x22px\x22}}if(c){s.onclick=(function(){r();if(typeof l==\x22function\x22){l()}});b.onclick=(function(i){i.stopPropagation()})}j()})([{title:\x22Open In New Tab (Popup)\x22,url:\x22javascript:(function(n,g,q,c,f){var s=document,l=s.onclick,h=\\x22ws_cmbm-\\x22+f,b=s.getElementById(h),d=\\x22ws_cmbms-\\x22+f,p=s.getElementById(d),e=null,o,a={tl:{left:\\x2210px\\x22,top:\\x2210px\\x22},tr:{right:\\x2210px\\x22,top:\\x2210px\\x22},bl:{left:\\x2210px\\x22,bottom:\\x2210px\\x22},br:{right:\\x2210px\\x22,bottom:\\x2210px\\x22}},k,m=\\x22.ws_cmbmc{position:fixed;z-index:10123456;width:200px;display:block;visibility:hidden;border:1px solid #b0b0b0;background:#fff;padding:3px 0 3px 3px;text-align:left;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;box-shadow:2px 2px 3px #777;-moz-box-shadow:2px 2px 3px #777;-webkit-box-shadow:2px 2px 3px #777;}.ws_cmbmc a{display:block;float:left;margin:0;width:191px;border:none;padding:8px 0 8px 6px;background:#fff;color:black;text-decoration:none;font:normal normal normal 12px/100% Verdana,sans-serif;letter-spacing:normal;word-spacing:normal;}.ws_cmbmc a:hover{background:#a0a0a0;color:white;border:none;text-decoration:none;font:normal normal normal 12px/100% Verdana,sans-serif;letter-spacing:normal;word-spacing:normal;}\\x22;function r(){b.style.visibility=\\x22hidden\\x22}function j(){b.style.visibility=\\x22visible\\x22}if(b){if(b.style.visibility==\\x22visible\\x22){r()}else{j()}return}if(!p){m=m.replace(/.ws_cmbmc/g,\\x22#\\x22+h);p=s.createElement(\\x22style\\x22);p.type=\\x22text/css\\x22;p.id=d;p.appendChild(s.createTextNode(m));s.getElementsByTagName(\\x22head\\x22)[0].appendChild(p)}b=s.createElement(\\x22div\\x22);b.setAttribute(\\x22id\\x22,h);b.className=\\x22ws_cmbmc\\x22;for(o=0;o<n.length;o++){e=s.createElement(\\x22a\\x22);e.appendChild(s.createTextNode(n[o].title));e.setAttribute(\\x22href\\x22,n[o].url);e.onclick=(function(i){if(q){r()}});b.appendChild(e)}s.getElementsByTagName(\\x22body\\x22)[0].appendChild(b);if(a.hasOwnProperty(g)){for(k in a[g]){b.style[k]=a[g][k]}}else{if(g==\\x22c\\x22){b.style.left=Math.round((window.innerWidth-b.offsetWidth)/2)+\\x22px\\x22;b.style.top=Math.round((window.innerHeight-b.offsetHeight)/2)+\\x22px\\x22}}if(c){s.onclick=(function(){r();if(typeof l==\\x22function\\x22){l()}});b.onclick=(function(i){i.stopPropagation()})}j()})([{title:\\x22Get Robtex Map\\x22,url:\\x22javascript:(function() { window.open( \\\\x27https://gfx.robtex.com/gfx/graph.png?dns=\\\\x27 + window.location.hostname )})();\\x22},{title:\\x22Get dnsdumpster Map\\x22,url:\\x22javascript:(function() { window.open( \\\\x27https://dnsdumpster.com/static/map/\\\\x27 +  window.location.hostname + \\\\x27.png\\\\x27 )})();\\x22}],\\x22tl\\x22,true,true,1620686701950)\x22},{title:\x22Open In Current Tab\x22,url:\x22javascript:(function(n,g,q,c,f){var s=document,l=s.onclick,h=\\x22ws_cmbm-\\x22+f,b=s.getElementById(h),d=\\x22ws_cmbms-\\x22+f,p=s.getElementById(d),e=null,o,a={tl:{left:\\x2210px\\x22,top:\\x2210px\\x22},tr:{right:\\x2210px\\x22,top:\\x2210px\\x22},bl:{left:\\x2210px\\x22,bottom:\\x2210px\\x22},br:{right:\\x2210px\\x22,bottom:\\x2210px\\x22}},k,m=\\x22.ws_cmbmc{position:fixed;z-index:10123456;width:200px;display:block;visibility:hidden;border:1px solid #b0b0b0;background:#fff;padding:3px 0 3px 3px;text-align:left;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;box-shadow:2px 2px 3px #777;-moz-box-shadow:2px 2px 3px #777;-webkit-box-shadow:2px 2px 3px #777;}.ws_cmbmc a{display:block;float:left;margin:0;width:191px;border:none;padding:8px 0 8px 6px;background:#fff;color:black;text-decoration:none;font:normal normal normal 12px/100% Verdana,sans-serif;letter-spacing:normal;word-spacing:normal;}.ws_cmbmc a:hover{background:#a0a0a0;color:white;border:none;text-decoration:none;font:normal normal normal 12px/100% Verdana,sans-serif;letter-spacing:normal;word-spacing:normal;}\\x22;function r(){b.style.visibility=\\x22hidden\\x22}function j(){b.style.visibility=\\x22visible\\x22}if(b){if(b.style.visibility==\\x22visible\\x22){r()}else{j()}return}if(!p){m=m.replace(/.ws_cmbmc/g,\\x22#\\x22+h);p=s.createElement(\\x22style\\x22);p.type=\\x22text/css\\x22;p.id=d;p.appendChild(s.createTextNode(m));s.getElementsByTagName(\\x22head\\x22)[0].appendChild(p)}b=s.createElement(\\x22div\\x22);b.setAttribute(\\x22id\\x22,h);b.className=\\x22ws_cmbmc\\x22;for(o=0;o<n.length;o++){e=s.createElement(\\x22a\\x22);e.appendChild(s.createTextNode(n[o].title));e.setAttribute(\\x22href\\x22,n[o].url);e.onclick=(function(i){if(q){r()}});b.appendChild(e)}s.getElementsByTagName(\\x22body\\x22)[0].appendChild(b);if(a.hasOwnProperty(g)){for(k in a[g]){b.style[k]=a[g][k]}}else{if(g==\\x22c\\x22){b.style.left=Math.round((window.innerWidth-b.offsetWidth)/2)+\\x22px\\x22;b.style.top=Math.round((window.innerHeight-b.offsetHeight)/2)+\\x22px\\x22}}if(c){s.onclick=(function(){r();if(typeof l==\\x22function\\x22){l()}});b.onclick=(function(i){i.stopPropagation()})}j()})([{title:\\x22Get Robtex Map\\x22,url:\\x22javascript:(function() {document.location.href=\\\\x27https://gfx.robtex.com/gfx/graph.png?dns=\\\\x27+ window.location.hostname})();\\x22},{title:\\x22Get dnsdumpster Map\\x22,url:\\x22javascript:(function() {document.location.href=\\\\x27https://dnsdumpster.com/static/map/\\\\x27+ window.location.hostname+\\\\x27.png\\\\x27})();\\x22}],\\x22tl\\x22,true,true,1620686824751)\x22}],\x22tl\x22,true,true,1620686910209)"
    }, {
        title: "Map a Different domain.",
        url: "javascript:(function(n,g,q,c,f){var s=document,l=s.onclick,h=\x22ws_cmbm-\x22+f,b=s.getElementById(h),d=\x22ws_cmbms-\x22+f,p=s.getElementById(d),e=null,o,a={tl:{left:\x2210px\x22,top:\x2210px\x22},tr:{right:\x2210px\x22,top:\x2210px\x22},bl:{left:\x2210px\x22,bottom:\x2210px\x22},br:{right:\x2210px\x22,bottom:\x2210px\x22}},k,m=\x22.ws_cmbmc{position:fixed;z-index:10123456;width:200px;display:block;visibility:hidden;border:1px solid #b0b0b0;background:#fff;padding:3px 0 3px 3px;text-align:left;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;box-shadow:2px 2px 3px #777;-moz-box-shadow:2px 2px 3px #777;-webkit-box-shadow:2px 2px 3px #777;}.ws_cmbmc a{display:block;float:left;margin:0;width:191px;border:none;padding:8px 0 8px 6px;background:#fff;color:black;text-decoration:none;font:normal normal normal 12px/100% Verdana,sans-serif;letter-spacing:normal;word-spacing:normal;}.ws_cmbmc a:hover{background:#a0a0a0;color:white;border:none;text-decoration:none;font:normal normal normal 12px/100% Verdana,sans-serif;letter-spacing:normal;word-spacing:normal;}\x22;function r(){b.style.visibility=\x22hidden\x22}function j(){b.style.visibility=\x22visible\x22}if(b){if(b.style.visibility==\x22visible\x22){r()}else{j()}return}if(!p){m=m.replace(/.ws_cmbmc/g,\x22#\x22+h);p=s.createElement(\x22style\x22);p.type=\x22text/css\x22;p.id=d;p.appendChild(s.createTextNode(m));s.getElementsByTagName(\x22head\x22)[0].appendChild(p)}b=s.createElement(\x22div\x22);b.setAttribute(\x22id\x22,h);b.className=\x22ws_cmbmc\x22;for(o=0;o<n.length;o++){e=s.createElement(\x22a\x22);e.appendChild(s.createTextNode(n[o].title));e.setAttribute(\x22href\x22,n[o].url);e.onclick=(function(i){if(q){r()}});b.appendChild(e)}s.getElementsByTagName(\x22body\x22)[0].appendChild(b);if(a.hasOwnProperty(g)){for(k in a[g]){b.style[k]=a[g][k]}}else{if(g==\x22c\x22){b.style.left=Math.round((window.innerWidth-b.offsetWidth)/2)+\x22px\x22;b.style.top=Math.round((window.innerHeight-b.offsetHeight)/2)+\x22px\x22}}if(c){s.onclick=(function(){r();if(typeof l==\x22function\x22){l()}});b.onclick=(function(i){i.stopPropagation()})}j()})([{title:\x22Open In New Tab (Popup)\x22,url:\x22javascript:(function(n,g,q,c,f){var s=document,l=s.onclick,h=\\x22ws_cmbm-\\x22+f,b=s.getElementById(h),d=\\x22ws_cmbms-\\x22+f,p=s.getElementById(d),e=null,o,a={tl:{left:\\x2210px\\x22,top:\\x2210px\\x22},tr:{right:\\x2210px\\x22,top:\\x2210px\\x22},bl:{left:\\x2210px\\x22,bottom:\\x2210px\\x22},br:{right:\\x2210px\\x22,bottom:\\x2210px\\x22}},k,m=\\x22.ws_cmbmc{position:fixed;z-index:10123456;width:200px;display:block;visibility:hidden;border:1px solid #b0b0b0;background:#fff;padding:3px 0 3px 3px;text-align:left;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;box-shadow:2px 2px 3px #777;-moz-box-shadow:2px 2px 3px #777;-webkit-box-shadow:2px 2px 3px #777;}.ws_cmbmc a{display:block;float:left;margin:0;width:191px;border:none;padding:8px 0 8px 6px;background:#fff;color:black;text-decoration:none;font:normal normal normal 12px/100% Verdana,sans-serif;letter-spacing:normal;word-spacing:normal;}.ws_cmbmc a:hover{background:#a0a0a0;color:white;border:none;text-decoration:none;font:normal normal normal 12px/100% Verdana,sans-serif;letter-spacing:normal;word-spacing:normal;}\\x22;function r(){b.style.visibility=\\x22hidden\\x22}function j(){b.style.visibility=\\x22visible\\x22}if(b){if(b.style.visibility==\\x22visible\\x22){r()}else{j()}return}if(!p){m=m.replace(/.ws_cmbmc/g,\\x22#\\x22+h);p=s.createElement(\\x22style\\x22);p.type=\\x22text/css\\x22;p.id=d;p.appendChild(s.createTextNode(m));s.getElementsByTagName(\\x22head\\x22)[0].appendChild(p)}b=s.createElement(\\x22div\\x22);b.setAttribute(\\x22id\\x22,h);b.className=\\x22ws_cmbmc\\x22;for(o=0;o<n.length;o++){e=s.createElement(\\x22a\\x22);e.appendChild(s.createTextNode(n[o].title));e.setAttribute(\\x22href\\x22,n[o].url);e.onclick=(function(i){if(q){r()}});b.appendChild(e)}s.getElementsByTagName(\\x22body\\x22)[0].appendChild(b);if(a.hasOwnProperty(g)){for(k in a[g]){b.style[k]=a[g][k]}}else{if(g==\\x22c\\x22){b.style.left=Math.round((window.innerWidth-b.offsetWidth)/2)+\\x22px\\x22;b.style.top=Math.round((window.innerHeight-b.offsetHeight)/2)+\\x22px\\x22}}if(c){s.onclick=(function(){r();if(typeof l==\\x22function\\x22){l()}});b.onclick=(function(i){i.stopPropagation()})}j()})([{title:\\x22Get robtex Map\\x22,url:\\x22javascript:(function() {     var targetUrl = \\\\x22https://gfx.robtex.com/gfx/graph.png?dns=\\\\x22;     new Promise (         (setQuery) => {var input = window.prompt(\\\\x22Type a Domain to pull it's Map:\\\\x22); if (input) setQuery(input);}     )     .then (         (query) => window.open(targetUrl + query)     ); })();\\x22},{title:\\x22Get dnsdumpster Map\\x22,url:\\x22javascript:(function() {     var targetUrl = \\\\x22https://dnsdumpster.com/static/map/\\\\x22;     var UrlEnd = \\\\x22.png\\\\x22;     new Promise (         (setQuery) => {var input = window.prompt(\\\\x22Type a Domain to pull it's Map:\\\\x22); if (input) setQuery(input);}     )     .then (         (query) => window.open(targetUrl + query + UrlEnd)     ); })();\\x22}],\\x22tl\\x22,true,true,1620649115996)\x22},{title:\x22Open In current Tab\x22,url:\x22javascript:(function(n,g,q,c,f){var s=document,l=s.onclick,h=\\x22ws_cmbm-\\x22+f,b=s.getElementById(h),d=\\x22ws_cmbms-\\x22+f,p=s.getElementById(d),e=null,o,a={tl:{left:\\x2210px\\x22,top:\\x2210px\\x22},tr:{right:\\x2210px\\x22,top:\\x2210px\\x22},bl:{left:\\x2210px\\x22,bottom:\\x2210px\\x22},br:{right:\\x2210px\\x22,bottom:\\x2210px\\x22}},k,m=\\x22.ws_cmbmc{position:fixed;z-index:10123456;width:200px;display:block;visibility:hidden;border:1px solid #b0b0b0;background:#fff;padding:3px 0 3px 3px;text-align:left;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;box-shadow:2px 2px 3px #777;-moz-box-shadow:2px 2px 3px #777;-webkit-box-shadow:2px 2px 3px #777;}.ws_cmbmc a{display:block;float:left;margin:0;width:191px;border:none;padding:8px 0 8px 6px;background:#fff;color:black;text-decoration:none;font:normal normal normal 12px/100% Verdana,sans-serif;letter-spacing:normal;word-spacing:normal;}.ws_cmbmc a:hover{background:#a0a0a0;color:white;border:none;text-decoration:none;font:normal normal normal 12px/100% Verdana,sans-serif;letter-spacing:normal;word-spacing:normal;}\\x22;function r(){b.style.visibility=\\x22hidden\\x22}function j(){b.style.visibility=\\x22visible\\x22}if(b){if(b.style.visibility==\\x22visible\\x22){r()}else{j()}return}if(!p){m=m.replace(/.ws_cmbmc/g,\\x22#\\x22+h);p=s.createElement(\\x22style\\x22);p.type=\\x22text/css\\x22;p.id=d;p.appendChild(s.createTextNode(m));s.getElementsByTagName(\\x22head\\x22)[0].appendChild(p)}b=s.createElement(\\x22div\\x22);b.setAttribute(\\x22id\\x22,h);b.className=\\x22ws_cmbmc\\x22;for(o=0;o<n.length;o++){e=s.createElement(\\x22a\\x22);e.appendChild(s.createTextNode(n[o].title));e.setAttribute(\\x22href\\x22,n[o].url);e.onclick=(function(i){if(q){r()}});b.appendChild(e)}s.getElementsByTagName(\\x22body\\x22)[0].appendChild(b);if(a.hasOwnProperty(g)){for(k in a[g]){b.style[k]=a[g][k]}}else{if(g==\\x22c\\x22){b.style.left=Math.round((window.innerWidth-b.offsetWidth)/2)+\\x22px\\x22;b.style.top=Math.round((window.innerHeight-b.offsetHeight)/2)+\\x22px\\x22}}if(c){s.onclick=(function(){r();if(typeof l==\\x22function\\x22){l()}});b.onclick=(function(i){i.stopPropagation()})}j()})([{title:\\x22Get robtex Map\\x22,url:\\x22javascript:(function() { var p=prompt(\\\\x27Type a Domain to pull it's Map:\\\\x27,\\\\x27\\\\x27); if(p) { document.location.href=\\\\x27https://gfx.robtex.com/gfx/graph.png?dns=\\\\x27+escape(p) } })();\\x22},{title:\\x22Get dnsdumpster Map\\x22,url:\\x22javascript:(function() {var p = prompt('Type a Domain to pull it 's Map:'); if(p){document.location.href='https://dnsdumpster.com/static/map/' +escape(p) + '.png'}})();\\x22}],\\x22tl\\x22,true,true,1620406721382)\x22}],\x22tl\x22,true,true,1620649189790)"
    }], "tl", true, true, 1620687026910)
