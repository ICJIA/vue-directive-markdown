function activatePlugins (md, arg) {
    arg = arg || "default";
    switch (arg) {
    case 'min':
      break;
    default:
      md.use(require('markdown-it-attrs'));
      md.use(require('markdown-it-named-headers'));
      md.use(require('markdown-it-footnote'));
    }
  }

  function getModifiers (modifiers) {
    var options = {}

    if (modifiers.html) {
      options.html = true
    }

    if (modifiers.xhtmlOut) {
      options.xhtmlOut = true
    }

    if (modifiers.breaks) {
      options.breaks = true
    }

    if (modifiers.linkify) {
      options.linkify = true
    }

    if (modifiers.typographer) {
      options.typographer = true
    }

    // if (modifiers.commonmark) {
    //   options.commonmark = true
    // }

    return options
  }

  module.exports = {

    inserted: function (el, binding, vnode) {

      var modifiers = getModifiers(binding.modifiers)

      // if (modifiers.commonmark) {
      //   var md = require('markdown-it')('commonmark')
      // } else {
      //   var md = require('markdown-it')(modifiers)
      // }

      var md = require('markdown-it')(modifiers)

      if (binding.arg) {
        var arg = binding.arg
      }

      activatePlugins(md, arg)
      el.innerHTML = md.render(el.innerHTML)
    }
  }
