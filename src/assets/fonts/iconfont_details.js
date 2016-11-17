;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-fanhui" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M952.9088 473.6H214.9888L550.2208 138.3424l-54.2976-54.2976L67.9936 512l427.9296 427.9296 54.2976-54.2976L214.9888 550.4h737.92z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-pinglun" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M387.042743 815.162514l-248.0128 70.304915 70.392686-248.0128 177.620114 177.707885zM873.325714 328.674743l-59.626057 59.713828-177.649371-177.620114 59.772343-59.655314s28.437943-28.554971 57.314742 0.438857l116.823772 116.911543c31.656229 31.714743 3.364571 60.2112 3.364571 60.2112zM795.794286 406.235429L404.6848 797.315657 227.064686 619.666286l391.168-390.992457 177.5616 177.5616z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xihuan" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512.906971 296.082286s-17.466514-11.6736-43.534628-24.341943c-30.954057-14.862629-74.196114-31.188114-115.390172-31.188114-19.163429 0-171.125029 12.200229-171.125028 169.311085 0 239.2064 330.049829 373.672229 330.049828 373.672229s328.586971-131.042743 328.235886-373.672229c0.351086-151.025371-112.64-169.311086-174.665143-169.311085-64.541257-0.029257-153.570743 55.530057-153.570743 55.530057z m0 0" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fenxiang" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M839.04 923.8016H185.0624a127.5392 127.5392 0 0 1-127.4368-127.4368V523.1616h49.3056v273.2032a78.208 78.208 0 0 0 78.1312 78.1312h654.0032a78.2336 78.2336 0 0 0 78.1568-78.1312V523.1616h49.2032v273.2032a127.488 127.488 0 0 1-127.3856 127.4368zM690.7392 317.9264c-19.7376 18.6112-41.0112 12.2368-47.3088-14.1568l-39.9616-167.6288c-6.1952-26.368 9.856-41.6256 35.9424-33.9456l165.8112 49.1264c25.9584 7.68 31.2064 29.312 11.392 47.9232l-125.8752 118.6816z" fill="" ></path>'+
      ''+
      '<path d="M411.264 737.152l-49.3312-0.6656c3.5072-259.1744 106.3424-444.3392 297.5488-535.6032l21.1456 44.544C505.088 329.1136 414.464 494.592 411.264 737.152z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jiarugouwuche" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M819.521829 287.656229H317.615543l-8.630857-71.855543a25.044114 25.044114 0 0 0-24.107886-21.240686h-4.7104a17.993143 17.993143 0 0 0-5.675886 0.8192H213.079771c-14.101943 0-25.746286 10.708114-25.746285 23.610514 0 12.9024 11.615086 23.610514 25.746285 23.610515h51.463315l49.034971 405.0944c1.462857 11.644343 12.288 21.357714 24.137143 21.357714h4.739657a18.519771 18.519771 0 0 0 5.675886-0.994743h405.7088c14.160457 0 25.629257-10.474057 25.629257-23.522743 0-12.960914-11.4688-23.610514-25.629257-23.610514H358.078171l-6.144-49.620114H755.126857c11.761371 0 23.639771-9.303771 26.2144-20.977372l54.798629-241.810286c2.545371-11.4688-4.827429-20.860343-16.618057-20.860342zM357.229714 772.242286a57.285486 57.285486 0 1 0 114.541715-0.029257 57.285486 57.285486 0 0 0-114.541715 0.029257zM641.345829 772.242286c0 31.597714 25.658514 57.256229 57.226971 57.256228a57.197714 57.197714 0 0 0 57.226971-57.256228 57.256229 57.256229 0 0 0-114.453942 0z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-songgeiTA" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M887.076571 404.362971c-31.597714 16.618057-129.521371 91.428571-162.289371 92.862172-32.504686 1.462857-118.725486-13.312-179.8144-25.219657-69.280914-13.5168-39.233829-41.486629-27.823543-43.651657 11.322514-2.311314 145.876114 2.2528 191.107657 0.789942 40.638171-1.316571 38.794971-44.558629-6.436571-50.3808-45.231543-5.909943-249.300114-39.672686-318.844343-40.96-69.602743-1.4336-179.697371 88.766171-179.697371 88.766172l2.340571 16.149943 134.290286 154.2144 19.836343 0.146285s38.122057-19.075657 68.8128-22.966857c30.632229-4.008229 194.706286 30.837029 252.840228 27.062857 58.046171-3.715657 217.848686-123.143314 252.957257-149.182171 17.056914-12.668343 30.1056-31.919543 27.326172-37.624686-13.429029-27.326171-54.008686-20.772571-74.605715-10.005943zM171.125029 450.911086c-12.346514-14.511543-27.911314-12.785371-37.858743-5.675886-10.005943 7.109486-51.521829 35.84-63.341715 42.949486-18.168686 11.0592-5.002971 33.557943 3.715658 44.383085 8.835657 10.737371 103.599543 124.606171 117.642971 142.277486 13.9264 17.8176 29.988571 17.525029 42.539886 8.162743 12.580571-9.537829 41.720686-31.919543 60.152685-43.271314 18.461257-11.4688 18.2272-26.4192 7.431315-39.3216-10.971429-12.9024-117.818514-135.138743-130.282057-149.504z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
