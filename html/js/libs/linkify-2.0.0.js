;(function () {
"use strict";
// Output from the Closure Compiler
var module$lib$linkify$core$state = {__esModule:!0};
function _inherits$$module$lib$linkify$core$state(a, b) {
  if ("function" !== typeof b && null !== b) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof b);
  }
  a.prototype = Object.create(b && b.prototype, {constructor:{value:a, enumerable:!1, writable:!0, configurable:!0}});
  b && (a.__proto__ = b);
}
function _classCallCheck$$module$lib$linkify$core$state(a, b) {
  if (!(a instanceof b)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var BaseState$$module$lib$linkify$core$state = function() {
  function a(b) {
    _classCallCheck$$module$lib$linkify$core$state(this, a);
    this.j = [];
    this.T = b || null;
  }
  a.prototype.on = function(a, c) {
    if (a instanceof Array) {
      for (var d = 0;d < a.length;d++) {
        this.j.push([a[d], c]);
      }
    } else {
      this.j.push([a, c]);
    }
  };
  a.prototype.next = function(a) {
    for (var c = 0;c < this.j.length;c++) {
      var d = this.j[c], g = d[1];
      if (this.test(a, d[0])) {
        return g;
      }
    }
    return!1;
  };
  a.prototype.accepts = function() {
    return!!this.T;
  };
  a.prototype.test = function(a, c) {
    return a === c;
  };
  a.prototype.emit = function() {
    return this.T;
  };
  return a;
}(), CharacterState$$module$lib$linkify$core$state = function(a) {
  function b() {
    _classCallCheck$$module$lib$linkify$core$state(this, b);
    null != a && a.apply(this, arguments);
  }
  _inherits$$module$lib$linkify$core$state(b, a);
  b.prototype.test = function(a, b) {
    return a === b || b instanceof RegExp && b.test(a);
  };
  return b;
}(BaseState$$module$lib$linkify$core$state), TokenState$$module$lib$linkify$core$state = function(a) {
  function b() {
    _classCallCheck$$module$lib$linkify$core$state(this, b);
    null != a && a.apply(this, arguments);
  }
  _inherits$$module$lib$linkify$core$state(b, a);
  b.prototype.test = function(a, b) {
    return a instanceof b;
  };
  return b;
}(BaseState$$module$lib$linkify$core$state);
function stateify$$module$lib$linkify$core$state(a, b, c, d) {
  for (var g = 0, e = a.length, h = [], f = void 0;g < e && (f = b.next(a[g]));) {
    b = f, g++;
  }
  if (g >= e) {
    return[];
  }
  for (;g < e - 1;) {
    f = new CharacterState$$module$lib$linkify$core$state(d), h.push(f), b.on(a[g], f), b = f, g++;
  }
  f = new CharacterState$$module$lib$linkify$core$state(c);
  h.push(f);
  b.on(a[e - 1], f);
  return h;
}
module$lib$linkify$core$state.CharacterState = CharacterState$$module$lib$linkify$core$state;
module$lib$linkify$core$state.TokenState = TokenState$$module$lib$linkify$core$state;
module$lib$linkify$core$state.stateify = stateify$$module$lib$linkify$core$state;
var module$lib$linkify$core$tokens = {__esModule:!0};
function _inherits$$module$lib$linkify$core$tokens(a, b) {
  if ("function" !== typeof b && null !== b) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof b);
  }
  a.prototype = Object.create(b && b.prototype, {constructor:{value:a, enumerable:!1, writable:!0, configurable:!0}});
  b && (a.__proto__ = b);
}
function _classCallCheck$$module$lib$linkify$core$tokens(a, b) {
  if (!(a instanceof b)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var TextToken$$module$lib$linkify$core$tokens = function() {
  function a(b) {
    _classCallCheck$$module$lib$linkify$core$tokens(this, a);
    this.v = b;
  }
  a.prototype.toString = function() {
    return this.v + "";
  };
  return a;
}(), DOMAIN$$module$lib$linkify$core$tokens = function(a) {
  function b() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, b);
    null != a && a.apply(this, arguments);
  }
  _inherits$$module$lib$linkify$core$tokens(b, a);
  return b;
}(TextToken$$module$lib$linkify$core$tokens), AT$$module$lib$linkify$core$tokens = function(a) {
  function b() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, b);
    a.call(this, "@");
  }
  _inherits$$module$lib$linkify$core$tokens(b, a);
  return b;
}(TextToken$$module$lib$linkify$core$tokens), COLON$$module$lib$linkify$core$tokens = function(a) {
  function b() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, b);
    a.call(this, ":");
  }
  _inherits$$module$lib$linkify$core$tokens(b, a);
  return b;
}(TextToken$$module$lib$linkify$core$tokens), DOT$$module$lib$linkify$core$tokens = function(a) {
  function b() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, b);
    a.call(this, ".");
  }
  _inherits$$module$lib$linkify$core$tokens(b, a);
  return b;
}(TextToken$$module$lib$linkify$core$tokens), PUNCTUATION$$module$lib$linkify$core$tokens = function(a) {
  function b() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, b);
    null != a && a.apply(this, arguments);
  }
  _inherits$$module$lib$linkify$core$tokens(b, a);
  return b;
}(TextToken$$module$lib$linkify$core$tokens), LOCALHOST$$module$lib$linkify$core$tokens = function(a) {
  function b() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, b);
    null != a && a.apply(this, arguments);
  }
  _inherits$$module$lib$linkify$core$tokens(b, a);
  return b;
}(TextToken$$module$lib$linkify$core$tokens), TNL$$module$lib$linkify$core$tokens = function(a) {
  function b() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, b);
    a.call(this, "\n");
  }
  _inherits$$module$lib$linkify$core$tokens(b, a);
  return b;
}(TextToken$$module$lib$linkify$core$tokens), NUM$$module$lib$linkify$core$tokens = function(a) {
  function b() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, b);
    null != a && a.apply(this, arguments);
  }
  _inherits$$module$lib$linkify$core$tokens(b, a);
  return b;
}(TextToken$$module$lib$linkify$core$tokens), PLUS$$module$lib$linkify$core$tokens = function(a) {
  function b() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, b);
    a.call(this, "+");
  }
  _inherits$$module$lib$linkify$core$tokens(b, a);
  return b;
}(TextToken$$module$lib$linkify$core$tokens), POUND$$module$lib$linkify$core$tokens = function(a) {
  function b() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, b);
    a.call(this, "#");
  }
  _inherits$$module$lib$linkify$core$tokens(b, a);
  return b;
}(TextToken$$module$lib$linkify$core$tokens), PROTOCOL$$module$lib$linkify$core$tokens = function(a) {
  function b() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, b);
    null != a && a.apply(this, arguments);
  }
  _inherits$$module$lib$linkify$core$tokens(b, a);
  return b;
}(TextToken$$module$lib$linkify$core$tokens), QUERY$$module$lib$linkify$core$tokens = function(a) {
  function b() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, b);
    a.call(this, "?");
  }
  _inherits$$module$lib$linkify$core$tokens(b, a);
  return b;
}(TextToken$$module$lib$linkify$core$tokens), SLASH$$module$lib$linkify$core$tokens = function(a) {
  function b() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, b);
    a.call(this, "/");
  }
  _inherits$$module$lib$linkify$core$tokens(b, a);
  return b;
}(TextToken$$module$lib$linkify$core$tokens), SYM$$module$lib$linkify$core$tokens = function(a) {
  function b() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, b);
    null != a && a.apply(this, arguments);
  }
  _inherits$$module$lib$linkify$core$tokens(b, a);
  return b;
}(TextToken$$module$lib$linkify$core$tokens), TLD$$module$lib$linkify$core$tokens = function(a) {
  function b() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, b);
    null != a && a.apply(this, arguments);
  }
  _inherits$$module$lib$linkify$core$tokens(b, a);
  return b;
}(TextToken$$module$lib$linkify$core$tokens), WS$$module$lib$linkify$core$tokens = function(a) {
  function b() {
    _classCallCheck$$module$lib$linkify$core$tokens(this, b);
    null != a && a.apply(this, arguments);
  }
  _inherits$$module$lib$linkify$core$tokens(b, a);
  return b;
}(TextToken$$module$lib$linkify$core$tokens), text$$module$lib$linkify$core$tokens = {Base:TextToken$$module$lib$linkify$core$tokens, DOMAIN:DOMAIN$$module$lib$linkify$core$tokens, AT:AT$$module$lib$linkify$core$tokens, COLON:COLON$$module$lib$linkify$core$tokens, DOT:DOT$$module$lib$linkify$core$tokens, PUNCTUATION:PUNCTUATION$$module$lib$linkify$core$tokens, LOCALHOST:LOCALHOST$$module$lib$linkify$core$tokens, NL:TNL$$module$lib$linkify$core$tokens, NUM:NUM$$module$lib$linkify$core$tokens, PLUS:PLUS$$module$lib$linkify$core$tokens, 
POUND:POUND$$module$lib$linkify$core$tokens, QUERY:QUERY$$module$lib$linkify$core$tokens, PROTOCOL:PROTOCOL$$module$lib$linkify$core$tokens, SLASH:SLASH$$module$lib$linkify$core$tokens, SYM:SYM$$module$lib$linkify$core$tokens, TLD:TLD$$module$lib$linkify$core$tokens, WS:WS$$module$lib$linkify$core$tokens};
function isDomainToken$$module$lib$linkify$core$tokens(a) {
  return a instanceof DOMAIN$$module$lib$linkify$core$tokens || a instanceof TLD$$module$lib$linkify$core$tokens;
}
var MultiToken$$module$lib$linkify$core$tokens = function() {
  function a(b) {
    _classCallCheck$$module$lib$linkify$core$tokens(this, a);
    this.v = b;
    this.type = "token";
    this.isLink = !1;
  }
  a.prototype.toString = function() {
    for (var a = [], c = 0;c < this.v.length;c++) {
      a.push(this.v[c].toString());
    }
    return a.join("");
  };
  a.prototype.toHref = function() {
    return this.toString();
  };
  a.prototype.toObject = function(a) {
    return{type:this.type, value:this.toString(), href:this.toHref(void 0 === a ? "http" : a)};
  };
  return a;
}(), EMAIL$$module$lib$linkify$core$tokens = function(a) {
  function b(c) {
    _classCallCheck$$module$lib$linkify$core$tokens(this, b);
    a.call(this, c);
    this.type = "email";
    this.isLink = !0;
  }
  _inherits$$module$lib$linkify$core$tokens(b, a);
  b.prototype.toHref = function() {
    return "mailto:" + this.toString();
  };
  return b;
}(MultiToken$$module$lib$linkify$core$tokens), TEXT$$module$lib$linkify$core$tokens = function(a) {
  function b(c) {
    _classCallCheck$$module$lib$linkify$core$tokens(this, b);
    a.call(this, c);
    this.type = "text";
  }
  _inherits$$module$lib$linkify$core$tokens(b, a);
  return b;
}(MultiToken$$module$lib$linkify$core$tokens), MNL$$module$lib$linkify$core$tokens = function(a) {
  function b(c) {
    _classCallCheck$$module$lib$linkify$core$tokens(this, b);
    a.call(this, c);
    this.type = "nl";
  }
  _inherits$$module$lib$linkify$core$tokens(b, a);
  return b;
}(MultiToken$$module$lib$linkify$core$tokens), URL$$module$lib$linkify$core$tokens = function(a) {
  function b(c) {
    _classCallCheck$$module$lib$linkify$core$tokens(this, b);
    a.call(this, c);
    this.type = "url";
    this.isLink = !0;
  }
  _inherits$$module$lib$linkify$core$tokens(b, a);
  b.prototype.toHref = function(a) {
    a = void 0 === a ? "http" : a;
    for (var b = !1, g = !1, e = this.v, h = [], f = 0;e[f] instanceof PROTOCOL$$module$lib$linkify$core$tokens;) {
      b = !0, h.push(e[f].toString().toLowerCase()), f++;
    }
    for (;e[f] instanceof SLASH$$module$lib$linkify$core$tokens;) {
      g = !0, h.push(e[f].toString()), f++;
    }
    for (;isDomainToken$$module$lib$linkify$core$tokens(e[f]);) {
      h.push(e[f].toString().toLowerCase()), f++;
    }
    for (;f < e.length;f++) {
      h.push(e[f].toString());
    }
    h = h.join("");
    b || g || (h = a + "://" + h);
    return h;
  };
  b.prototype.hasProtocol = function() {
    return this.v[0] instanceof PROTOCOL$$module$lib$linkify$core$tokens;
  };
  return b;
}(MultiToken$$module$lib$linkify$core$tokens), multi$$module$lib$linkify$core$tokens = {Base:MultiToken$$module$lib$linkify$core$tokens, EMAIL:EMAIL$$module$lib$linkify$core$tokens, NL:MNL$$module$lib$linkify$core$tokens, TEXT:TEXT$$module$lib$linkify$core$tokens, URL:URL$$module$lib$linkify$core$tokens};
module$lib$linkify$core$tokens.text = text$$module$lib$linkify$core$tokens;
module$lib$linkify$core$tokens.multi = multi$$module$lib$linkify$core$tokens;
var module$lib$linkify$core$parser = {__esModule:!0}, _tokens$$module$lib$linkify$core$parser = module$lib$linkify$core$tokens, _state$$module$lib$linkify$core$parser = module$lib$linkify$core$state, makeState$$module$lib$linkify$core$parser = function(a) {
  return new _state$$module$lib$linkify$core$parser.TokenState(a);
}, TT_DOMAIN$$module$lib$linkify$core$parser = _tokens$$module$lib$linkify$core$parser.text.DOMAIN, TT_AT$$module$lib$linkify$core$parser = _tokens$$module$lib$linkify$core$parser.text.AT, TT_COLON$$module$lib$linkify$core$parser = _tokens$$module$lib$linkify$core$parser.text.COLON, TT_DOT$$module$lib$linkify$core$parser = _tokens$$module$lib$linkify$core$parser.text.DOT, TT_PUNCTUATION$$module$lib$linkify$core$parser = _tokens$$module$lib$linkify$core$parser.text.PUNCTUATION, TT_LOCALHOST$$module$lib$linkify$core$parser = 
_tokens$$module$lib$linkify$core$parser.text.LOCALHOST, TT_NL$$module$lib$linkify$core$parser = _tokens$$module$lib$linkify$core$parser.text.NL, TT_NUM$$module$lib$linkify$core$parser = _tokens$$module$lib$linkify$core$parser.text.NUM, TT_PLUS$$module$lib$linkify$core$parser = _tokens$$module$lib$linkify$core$parser.text.PLUS, TT_POUND$$module$lib$linkify$core$parser = _tokens$$module$lib$linkify$core$parser.text.POUND, TT_PROTOCOL$$module$lib$linkify$core$parser = _tokens$$module$lib$linkify$core$parser.text.PROTOCOL, 
TT_QUERY$$module$lib$linkify$core$parser = _tokens$$module$lib$linkify$core$parser.text.QUERY, TT_SLASH$$module$lib$linkify$core$parser = _tokens$$module$lib$linkify$core$parser.text.SLASH, TT_SYM$$module$lib$linkify$core$parser = _tokens$$module$lib$linkify$core$parser.text.SYM, TT_TLD$$module$lib$linkify$core$parser = _tokens$$module$lib$linkify$core$parser.text.TLD, T_EMAIL$$module$lib$linkify$core$parser = _tokens$$module$lib$linkify$core$parser.multi.EMAIL, T_NL$$module$lib$linkify$core$parser = 
_tokens$$module$lib$linkify$core$parser.multi.NL, T_TEXT$$module$lib$linkify$core$parser = _tokens$$module$lib$linkify$core$parser.multi.TEXT, T_URL$$module$lib$linkify$core$parser = _tokens$$module$lib$linkify$core$parser.multi.URL, S_START$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_PROTOCOL$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_PROTOCOL_SLASH$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), 
S_PROTOCOL_SLASH_SLASH$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_DOMAIN$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_DOMAIN_DOT$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_TLD$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(T_URL$$module$lib$linkify$core$parser), S_TLD_COLON$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_TLD_PORT$$module$lib$linkify$core$parser = 
makeState$$module$lib$linkify$core$parser(T_URL$$module$lib$linkify$core$parser), S_PSS_DOMAIN$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_PSS_DOMAIN_DOT$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_PSS_TLD$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(T_URL$$module$lib$linkify$core$parser), S_PSS_TLD_COLON$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_PSS_TLD_PORT$$module$lib$linkify$core$parser = 
makeState$$module$lib$linkify$core$parser(T_URL$$module$lib$linkify$core$parser), S_URL$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(T_URL$$module$lib$linkify$core$parser), S_URL_SYMS$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_EMAIL_DOMAIN$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_EMAIL_DOMAIN_DOT$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_EMAIL$$module$lib$linkify$core$parser = 
makeState$$module$lib$linkify$core$parser(T_EMAIL$$module$lib$linkify$core$parser), S_EMAIL_COLON$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_EMAIL_PORT$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(T_EMAIL$$module$lib$linkify$core$parser), S_LOCALPART$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_LOCALPART_AT$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(), S_LOCALPART_DOT$$module$lib$linkify$core$parser = 
makeState$$module$lib$linkify$core$parser(), S_NL$$module$lib$linkify$core$parser = makeState$$module$lib$linkify$core$parser(T_NL$$module$lib$linkify$core$parser);
S_START$$module$lib$linkify$core$parser.on(TT_NL$$module$lib$linkify$core$parser, S_NL$$module$lib$linkify$core$parser);
S_START$$module$lib$linkify$core$parser.on(TT_PROTOCOL$$module$lib$linkify$core$parser, S_PROTOCOL$$module$lib$linkify$core$parser);
S_START$$module$lib$linkify$core$parser.on(TT_SLASH$$module$lib$linkify$core$parser, S_PROTOCOL_SLASH$$module$lib$linkify$core$parser);
S_PROTOCOL$$module$lib$linkify$core$parser.on(TT_SLASH$$module$lib$linkify$core$parser, S_PROTOCOL_SLASH$$module$lib$linkify$core$parser);
S_PROTOCOL_SLASH$$module$lib$linkify$core$parser.on(TT_SLASH$$module$lib$linkify$core$parser, S_PROTOCOL_SLASH_SLASH$$module$lib$linkify$core$parser);
S_START$$module$lib$linkify$core$parser.on(TT_TLD$$module$lib$linkify$core$parser, S_DOMAIN$$module$lib$linkify$core$parser);
S_START$$module$lib$linkify$core$parser.on(TT_DOMAIN$$module$lib$linkify$core$parser, S_DOMAIN$$module$lib$linkify$core$parser);
S_START$$module$lib$linkify$core$parser.on(TT_LOCALHOST$$module$lib$linkify$core$parser, S_TLD$$module$lib$linkify$core$parser);
S_START$$module$lib$linkify$core$parser.on(TT_NUM$$module$lib$linkify$core$parser, S_DOMAIN$$module$lib$linkify$core$parser);
S_PROTOCOL_SLASH_SLASH$$module$lib$linkify$core$parser.on(TT_TLD$$module$lib$linkify$core$parser, S_PSS_DOMAIN$$module$lib$linkify$core$parser);
S_PROTOCOL_SLASH_SLASH$$module$lib$linkify$core$parser.on(TT_DOMAIN$$module$lib$linkify$core$parser, S_PSS_DOMAIN$$module$lib$linkify$core$parser);
S_PROTOCOL_SLASH_SLASH$$module$lib$linkify$core$parser.on(TT_NUM$$module$lib$linkify$core$parser, S_PSS_DOMAIN$$module$lib$linkify$core$parser);
S_PROTOCOL_SLASH_SLASH$$module$lib$linkify$core$parser.on(TT_LOCALHOST$$module$lib$linkify$core$parser, S_PSS_TLD$$module$lib$linkify$core$parser);
S_DOMAIN$$module$lib$linkify$core$parser.on(TT_DOT$$module$lib$linkify$core$parser, S_DOMAIN_DOT$$module$lib$linkify$core$parser);
S_PSS_DOMAIN$$module$lib$linkify$core$parser.on(TT_DOT$$module$lib$linkify$core$parser, S_PSS_DOMAIN_DOT$$module$lib$linkify$core$parser);
S_EMAIL_DOMAIN$$module$lib$linkify$core$parser.on(TT_DOT$$module$lib$linkify$core$parser, S_EMAIL_DOMAIN_DOT$$module$lib$linkify$core$parser);
S_DOMAIN_DOT$$module$lib$linkify$core$parser.on(TT_TLD$$module$lib$linkify$core$parser, S_TLD$$module$lib$linkify$core$parser);
S_DOMAIN_DOT$$module$lib$linkify$core$parser.on(TT_DOMAIN$$module$lib$linkify$core$parser, S_DOMAIN$$module$lib$linkify$core$parser);
S_DOMAIN_DOT$$module$lib$linkify$core$parser.on(TT_NUM$$module$lib$linkify$core$parser, S_DOMAIN$$module$lib$linkify$core$parser);
S_DOMAIN_DOT$$module$lib$linkify$core$parser.on(TT_LOCALHOST$$module$lib$linkify$core$parser, S_DOMAIN$$module$lib$linkify$core$parser);
S_PSS_DOMAIN_DOT$$module$lib$linkify$core$parser.on(TT_TLD$$module$lib$linkify$core$parser, S_PSS_TLD$$module$lib$linkify$core$parser);
S_PSS_DOMAIN_DOT$$module$lib$linkify$core$parser.on(TT_DOMAIN$$module$lib$linkify$core$parser, S_PSS_DOMAIN$$module$lib$linkify$core$parser);
S_PSS_DOMAIN_DOT$$module$lib$linkify$core$parser.on(TT_NUM$$module$lib$linkify$core$parser, S_PSS_DOMAIN$$module$lib$linkify$core$parser);
S_PSS_DOMAIN_DOT$$module$lib$linkify$core$parser.on(TT_LOCALHOST$$module$lib$linkify$core$parser, S_PSS_DOMAIN$$module$lib$linkify$core$parser);
S_EMAIL_DOMAIN_DOT$$module$lib$linkify$core$parser.on(TT_TLD$$module$lib$linkify$core$parser, S_EMAIL$$module$lib$linkify$core$parser);
S_EMAIL_DOMAIN_DOT$$module$lib$linkify$core$parser.on(TT_DOMAIN$$module$lib$linkify$core$parser, S_EMAIL_DOMAIN$$module$lib$linkify$core$parser);
S_EMAIL_DOMAIN_DOT$$module$lib$linkify$core$parser.on(TT_NUM$$module$lib$linkify$core$parser, S_EMAIL_DOMAIN$$module$lib$linkify$core$parser);
S_EMAIL_DOMAIN_DOT$$module$lib$linkify$core$parser.on(TT_LOCALHOST$$module$lib$linkify$core$parser, S_EMAIL_DOMAIN$$module$lib$linkify$core$parser);
S_TLD$$module$lib$linkify$core$parser.on(TT_DOT$$module$lib$linkify$core$parser, S_DOMAIN_DOT$$module$lib$linkify$core$parser);
S_PSS_TLD$$module$lib$linkify$core$parser.on(TT_DOT$$module$lib$linkify$core$parser, S_PSS_DOMAIN_DOT$$module$lib$linkify$core$parser);
S_EMAIL$$module$lib$linkify$core$parser.on(TT_DOT$$module$lib$linkify$core$parser, S_EMAIL_DOMAIN_DOT$$module$lib$linkify$core$parser);
S_TLD$$module$lib$linkify$core$parser.on(TT_COLON$$module$lib$linkify$core$parser, S_TLD_COLON$$module$lib$linkify$core$parser);
S_TLD$$module$lib$linkify$core$parser.on(TT_SLASH$$module$lib$linkify$core$parser, S_URL$$module$lib$linkify$core$parser);
S_TLD_COLON$$module$lib$linkify$core$parser.on(TT_NUM$$module$lib$linkify$core$parser, S_TLD_PORT$$module$lib$linkify$core$parser);
S_TLD_PORT$$module$lib$linkify$core$parser.on(TT_SLASH$$module$lib$linkify$core$parser, S_URL$$module$lib$linkify$core$parser);
S_PSS_TLD$$module$lib$linkify$core$parser.on(TT_COLON$$module$lib$linkify$core$parser, S_PSS_TLD_COLON$$module$lib$linkify$core$parser);
S_PSS_TLD$$module$lib$linkify$core$parser.on(TT_SLASH$$module$lib$linkify$core$parser, S_URL$$module$lib$linkify$core$parser);
S_PSS_TLD_COLON$$module$lib$linkify$core$parser.on(TT_NUM$$module$lib$linkify$core$parser, S_PSS_TLD_PORT$$module$lib$linkify$core$parser);
S_PSS_TLD_PORT$$module$lib$linkify$core$parser.on(TT_SLASH$$module$lib$linkify$core$parser, S_URL$$module$lib$linkify$core$parser);
S_EMAIL$$module$lib$linkify$core$parser.on(TT_COLON$$module$lib$linkify$core$parser, S_EMAIL_COLON$$module$lib$linkify$core$parser);
S_EMAIL_COLON$$module$lib$linkify$core$parser.on(TT_NUM$$module$lib$linkify$core$parser, S_EMAIL_PORT$$module$lib$linkify$core$parser);
var qsAccepting$$module$lib$linkify$core$parser = [TT_DOMAIN$$module$lib$linkify$core$parser, TT_AT$$module$lib$linkify$core$parser, TT_LOCALHOST$$module$lib$linkify$core$parser, TT_NUM$$module$lib$linkify$core$parser, TT_PLUS$$module$lib$linkify$core$parser, TT_POUND$$module$lib$linkify$core$parser, TT_PROTOCOL$$module$lib$linkify$core$parser, TT_SLASH$$module$lib$linkify$core$parser, TT_TLD$$module$lib$linkify$core$parser, TT_SYM$$module$lib$linkify$core$parser], qsNonAccepting$$module$lib$linkify$core$parser = 
[TT_COLON$$module$lib$linkify$core$parser, TT_DOT$$module$lib$linkify$core$parser, TT_QUERY$$module$lib$linkify$core$parser, TT_PUNCTUATION$$module$lib$linkify$core$parser];
S_URL$$module$lib$linkify$core$parser.on(qsAccepting$$module$lib$linkify$core$parser, S_URL$$module$lib$linkify$core$parser);
S_URL_SYMS$$module$lib$linkify$core$parser.on(qsAccepting$$module$lib$linkify$core$parser, S_URL$$module$lib$linkify$core$parser);
S_URL$$module$lib$linkify$core$parser.on(qsNonAccepting$$module$lib$linkify$core$parser, S_URL_SYMS$$module$lib$linkify$core$parser);
S_URL_SYMS$$module$lib$linkify$core$parser.on(qsNonAccepting$$module$lib$linkify$core$parser, S_URL_SYMS$$module$lib$linkify$core$parser);
var localpartAccepting$$module$lib$linkify$core$parser = [TT_DOMAIN$$module$lib$linkify$core$parser, TT_NUM$$module$lib$linkify$core$parser, TT_PLUS$$module$lib$linkify$core$parser, TT_POUND$$module$lib$linkify$core$parser, TT_QUERY$$module$lib$linkify$core$parser, TT_SYM$$module$lib$linkify$core$parser, TT_TLD$$module$lib$linkify$core$parser];
S_DOMAIN$$module$lib$linkify$core$parser.on(localpartAccepting$$module$lib$linkify$core$parser, S_LOCALPART$$module$lib$linkify$core$parser);
S_DOMAIN$$module$lib$linkify$core$parser.on(TT_AT$$module$lib$linkify$core$parser, S_LOCALPART_AT$$module$lib$linkify$core$parser);
S_DOMAIN_DOT$$module$lib$linkify$core$parser.on(localpartAccepting$$module$lib$linkify$core$parser, S_LOCALPART$$module$lib$linkify$core$parser);
S_TLD$$module$lib$linkify$core$parser.on(localpartAccepting$$module$lib$linkify$core$parser, S_LOCALPART$$module$lib$linkify$core$parser);
S_TLD$$module$lib$linkify$core$parser.on(TT_AT$$module$lib$linkify$core$parser, S_LOCALPART_AT$$module$lib$linkify$core$parser);
S_LOCALPART$$module$lib$linkify$core$parser.on(localpartAccepting$$module$lib$linkify$core$parser, S_LOCALPART$$module$lib$linkify$core$parser);
S_LOCALPART$$module$lib$linkify$core$parser.on(TT_AT$$module$lib$linkify$core$parser, S_LOCALPART_AT$$module$lib$linkify$core$parser);
S_LOCALPART$$module$lib$linkify$core$parser.on(TT_DOT$$module$lib$linkify$core$parser, S_LOCALPART_DOT$$module$lib$linkify$core$parser);
S_LOCALPART_DOT$$module$lib$linkify$core$parser.on(localpartAccepting$$module$lib$linkify$core$parser, S_LOCALPART$$module$lib$linkify$core$parser);
S_LOCALPART_AT$$module$lib$linkify$core$parser.on(TT_TLD$$module$lib$linkify$core$parser, S_EMAIL_DOMAIN$$module$lib$linkify$core$parser);
S_LOCALPART_AT$$module$lib$linkify$core$parser.on(TT_DOMAIN$$module$lib$linkify$core$parser, S_EMAIL_DOMAIN$$module$lib$linkify$core$parser);
S_LOCALPART_AT$$module$lib$linkify$core$parser.on(TT_LOCALHOST$$module$lib$linkify$core$parser, S_EMAIL$$module$lib$linkify$core$parser);
var run$$module$lib$linkify$core$parser = function(a) {
  for (var b = a.length, c = 0, d = [], g = [];c < b;) {
    for (var e = S_START$$module$lib$linkify$core$parser, h = null, f = null, k = 0, l = null, m = -1;c < b && !(h = e.next(a[c]));) {
      g.push(a[c++]);
    }
    for (;c < b && (f = h || e.next(a[c]));) {
      h = null, e = f, e.accepts() ? (m = 0, l = e) : 0 <= m && m++, c++, k++;
    }
    if (0 > m) {
      for (k = c - k;k < c;k++) {
        g.push(a[k]);
      }
    } else {
      0 < g.length && (d.push(new T_TEXT$$module$lib$linkify$core$parser(g)), g = []), c -= m, k -= m, e = l.emit(), d.push(new e(a.slice(c - k, c)));
    }
  }
  0 < g.length && d.push(new T_TEXT$$module$lib$linkify$core$parser(g));
  return d;
}, TOKENS$$module$lib$linkify$core$parser = _tokens$$module$lib$linkify$core$parser.multi, start$$module$lib$linkify$core$parser = S_START$$module$lib$linkify$core$parser;
module$lib$linkify$core$parser.State = _state$$module$lib$linkify$core$parser.TokenState;
module$lib$linkify$core$parser.TOKENS = TOKENS$$module$lib$linkify$core$parser;
module$lib$linkify$core$parser.run = run$$module$lib$linkify$core$parser;
module$lib$linkify$core$parser.start = start$$module$lib$linkify$core$parser;
var module$lib$linkify$core$scanner = {__esModule:!0}, _tokens$$module$lib$linkify$core$scanner = module$lib$linkify$core$tokens, _state$$module$lib$linkify$core$scanner = module$lib$linkify$core$state, tlds$$module$lib$linkify$core$scanner = "abogado ac academy accountants active actor ad adult ae aero af ag agency ai airforce al allfinanz alsace am an android ao aq aquarelle ar archi army arpa as asia associates at attorney au auction audio autos aw ax axa az ba band bar bargains bayern bb bd be beer berlin best bf bg bh bi bid bike bio biz bj black blackfriday bloomberg blue bm bmw bn bnpparibas bo boo boutique br brussels bs bt budapest build builders business buzz bv bw by bz bzh ca cab cal camera camp cancerresearch capetown capital caravan cards care career careers casa cash cat catering cc cd center ceo cern cf cg ch channel cheap christmas chrome church ci citic city ck cl claims cleaning click clinic clothing club cm cn co coach codes coffee college cologne com community company computer condos construction consulting contractors cooking cool coop country cr credit creditcard cricket crs cruises cu cuisinella cv cw cx cy cymru cz dad dance dating day de deals degree delivery democrat dental dentist desi diamonds diet digital direct directory discount dj dk dm dnp do domains durban dvag dz eat ec edu education ee eg email emerck energy engineer engineering enterprises equipment er es esq estate et eu eurovision eus events everbank exchange expert exposed fail farm fashion feedback fi finance financial firmdale fish fishing fitness fj fk flights florist flsmidth fly fm fo foo forsale foundation fr frl frogans fund furniture futbol ga gal gallery gb gbiz gd ge gent gf gg gh gi gift gifts gives gl glass gle global globo gm gmail gmo gmx gn google gop gov gp gq gr graphics gratis green gripe gs gt gu guide guitars guru gw gy hamburg haus healthcare help here hiphop hiv hk hm hn holdings holiday homes horse host hosting house how hr ht hu ibm id ie il im immo immobilien in industries info ing ink institute insure int international investments io iq ir irish is it je jetzt jm jo jobs joburg jp juegos kaufen ke kg kh ki kim kitchen kiwi km kn koeln kp kr krd kred kw ky kz la lacaixa land latrobe lawyer lb lc lds lease legal lgbt li life lighting limited limo link lk loans london lotto lr ls lt ltda lu luxe luxury lv ly ma madrid maison management mango market marketing mc md me media meet melbourne meme memorial menu mg mh miami mil mini mk ml mm mn mo mobi moda moe monash money mormon mortgage moscow motorcycles mov mp mq mr ms mt mu museum mv mw mx my mz na nagoya name navy nc ne net network neustar new nexus nf ng ngo nhk ni ninja nl no np nr nra nrw nu nyc nz okinawa om ong onl ooo org organic otsuka ovh pa paris partners parts party pe pf pg ph pharmacy photo photography photos physio pics pictures pink pizza pk pl place plumbing pm pn pohl poker porn post pr praxi press pro prod productions prof properties property ps pt pub pw py qa qpon quebec re realtor recipes red rehab reise reisen reit ren rentals repair report republican rest restaurant reviews rich rio rip ro rocks rodeo rs rsvp ru ruhr rw ryukyu sa saarland sarl sb sc sca scb schmidt schule science scot sd se services sexy sg sh shiksha shoes si singles sj sk sl sm sn so social software sohu solar solutions soy space spiegel sr st su supplies supply support surf surgery suzuki sv sx sy sydney systems sz taipei tatar tattoo tax tc td technology tel tf tg th tienda tips tirol tj tk tl tm tn to today tokyo tools top town toys tp tr trade training travel trust tt tui tv tw tz ua ug uk university uno uol us uy uz va vacations vc ve vegas ventures versicherung vet vg vi viajes villas vision vlaanderen vn vodka vote voting voto voyage vu wales wang watch webcam website wed wedding wf whoswho wien wiki williamhill wme work works world ws wtc wtf xxx xyz yachts yandex ye yoga yokohama youtube yt za zip zm zone zw".split(" "), 
REGEXP_NUM$$module$lib$linkify$core$scanner = /[0-9]/, REGEXP_ALPHANUM$$module$lib$linkify$core$scanner = /[a-z0-9]/, COLON$$module$lib$linkify$core$scanner = ":", domainStates$$module$lib$linkify$core$scanner = [], makeState$$module$lib$linkify$core$scanner = function(a) {
  return new _state$$module$lib$linkify$core$scanner.CharacterState(a);
}, T_DOMAIN$$module$lib$linkify$core$scanner = _tokens$$module$lib$linkify$core$scanner.text.DOMAIN, T_LOCALHOST$$module$lib$linkify$core$scanner = _tokens$$module$lib$linkify$core$scanner.text.LOCALHOST, T_NUM$$module$lib$linkify$core$scanner = _tokens$$module$lib$linkify$core$scanner.text.NUM, T_PROTOCOL$$module$lib$linkify$core$scanner = _tokens$$module$lib$linkify$core$scanner.text.PROTOCOL, T_TLD$$module$lib$linkify$core$scanner = _tokens$$module$lib$linkify$core$scanner.text.TLD, T_WS$$module$lib$linkify$core$scanner = 
_tokens$$module$lib$linkify$core$scanner.text.WS, S_START$$module$lib$linkify$core$scanner = makeState$$module$lib$linkify$core$scanner(), S_NUM$$module$lib$linkify$core$scanner = makeState$$module$lib$linkify$core$scanner(T_NUM$$module$lib$linkify$core$scanner), S_DOMAIN$$module$lib$linkify$core$scanner = makeState$$module$lib$linkify$core$scanner(T_DOMAIN$$module$lib$linkify$core$scanner), S_DOMAIN_HYPHEN$$module$lib$linkify$core$scanner = makeState$$module$lib$linkify$core$scanner(), S_WS$$module$lib$linkify$core$scanner = 
makeState$$module$lib$linkify$core$scanner(T_WS$$module$lib$linkify$core$scanner);
S_START$$module$lib$linkify$core$scanner.on("@", makeState$$module$lib$linkify$core$scanner(_tokens$$module$lib$linkify$core$scanner.text.AT));
S_START$$module$lib$linkify$core$scanner.on(".", makeState$$module$lib$linkify$core$scanner(_tokens$$module$lib$linkify$core$scanner.text.DOT));
S_START$$module$lib$linkify$core$scanner.on("+", makeState$$module$lib$linkify$core$scanner(_tokens$$module$lib$linkify$core$scanner.text.PLUS));
S_START$$module$lib$linkify$core$scanner.on("#", makeState$$module$lib$linkify$core$scanner(_tokens$$module$lib$linkify$core$scanner.text.POUND));
S_START$$module$lib$linkify$core$scanner.on("?", makeState$$module$lib$linkify$core$scanner(_tokens$$module$lib$linkify$core$scanner.text.QUERY));
S_START$$module$lib$linkify$core$scanner.on("/", makeState$$module$lib$linkify$core$scanner(_tokens$$module$lib$linkify$core$scanner.text.SLASH));
S_START$$module$lib$linkify$core$scanner.on(COLON$$module$lib$linkify$core$scanner, makeState$$module$lib$linkify$core$scanner(_tokens$$module$lib$linkify$core$scanner.text.COLON));
S_START$$module$lib$linkify$core$scanner.on(/[,;!]/, makeState$$module$lib$linkify$core$scanner(_tokens$$module$lib$linkify$core$scanner.text.PUNCTUATION));
S_START$$module$lib$linkify$core$scanner.on(/\n/, makeState$$module$lib$linkify$core$scanner(_tokens$$module$lib$linkify$core$scanner.text.NL));
S_START$$module$lib$linkify$core$scanner.on(/\s/, S_WS$$module$lib$linkify$core$scanner);
S_WS$$module$lib$linkify$core$scanner.on(/[^\S\n]/, S_WS$$module$lib$linkify$core$scanner);
for (var i$$module$lib$linkify$core$scanner = 0;i$$module$lib$linkify$core$scanner < tlds$$module$lib$linkify$core$scanner.length;i$$module$lib$linkify$core$scanner++) {
  var newStates$$module$lib$linkify$core$scanner = (0, _state$$module$lib$linkify$core$scanner.stateify)(tlds$$module$lib$linkify$core$scanner[i$$module$lib$linkify$core$scanner], S_START$$module$lib$linkify$core$scanner, T_TLD$$module$lib$linkify$core$scanner, T_DOMAIN$$module$lib$linkify$core$scanner);
  domainStates$$module$lib$linkify$core$scanner.push.apply(domainStates$$module$lib$linkify$core$scanner, newStates$$module$lib$linkify$core$scanner);
}
var partialProtocolFileStates$$module$lib$linkify$core$scanner = (0, _state$$module$lib$linkify$core$scanner.stateify)("file", S_START$$module$lib$linkify$core$scanner, T_DOMAIN$$module$lib$linkify$core$scanner, T_DOMAIN$$module$lib$linkify$core$scanner), partialProtocolFtpStates$$module$lib$linkify$core$scanner = (0, _state$$module$lib$linkify$core$scanner.stateify)("ftp", S_START$$module$lib$linkify$core$scanner, T_DOMAIN$$module$lib$linkify$core$scanner, T_DOMAIN$$module$lib$linkify$core$scanner), 
partialProtocolHttpStates$$module$lib$linkify$core$scanner = (0, _state$$module$lib$linkify$core$scanner.stateify)("http", S_START$$module$lib$linkify$core$scanner, T_DOMAIN$$module$lib$linkify$core$scanner, T_DOMAIN$$module$lib$linkify$core$scanner);
domainStates$$module$lib$linkify$core$scanner.push.apply(domainStates$$module$lib$linkify$core$scanner, partialProtocolFileStates$$module$lib$linkify$core$scanner);
domainStates$$module$lib$linkify$core$scanner.push.apply(domainStates$$module$lib$linkify$core$scanner, partialProtocolFtpStates$$module$lib$linkify$core$scanner);
domainStates$$module$lib$linkify$core$scanner.push.apply(domainStates$$module$lib$linkify$core$scanner, partialProtocolHttpStates$$module$lib$linkify$core$scanner);
var S_PROTOCOL_FILE$$module$lib$linkify$core$scanner = partialProtocolFileStates$$module$lib$linkify$core$scanner.pop(), S_PROTOCOL_FTP$$module$lib$linkify$core$scanner = partialProtocolFtpStates$$module$lib$linkify$core$scanner.pop(), S_PROTOCOL_HTTP$$module$lib$linkify$core$scanner = partialProtocolHttpStates$$module$lib$linkify$core$scanner.pop(), S_PROTOCOL_SECURE$$module$lib$linkify$core$scanner = makeState$$module$lib$linkify$core$scanner(T_DOMAIN$$module$lib$linkify$core$scanner), S_FULL_PROTOCOL$$module$lib$linkify$core$scanner = 
makeState$$module$lib$linkify$core$scanner(T_PROTOCOL$$module$lib$linkify$core$scanner);
S_PROTOCOL_FTP$$module$lib$linkify$core$scanner.on("s", S_PROTOCOL_SECURE$$module$lib$linkify$core$scanner);
S_PROTOCOL_HTTP$$module$lib$linkify$core$scanner.on("s", S_PROTOCOL_SECURE$$module$lib$linkify$core$scanner);
domainStates$$module$lib$linkify$core$scanner.push(S_PROTOCOL_SECURE$$module$lib$linkify$core$scanner);
S_PROTOCOL_FILE$$module$lib$linkify$core$scanner.on(COLON$$module$lib$linkify$core$scanner, S_FULL_PROTOCOL$$module$lib$linkify$core$scanner);
S_PROTOCOL_FTP$$module$lib$linkify$core$scanner.on(COLON$$module$lib$linkify$core$scanner, S_FULL_PROTOCOL$$module$lib$linkify$core$scanner);
S_PROTOCOL_HTTP$$module$lib$linkify$core$scanner.on(COLON$$module$lib$linkify$core$scanner, S_FULL_PROTOCOL$$module$lib$linkify$core$scanner);
S_PROTOCOL_SECURE$$module$lib$linkify$core$scanner.on(COLON$$module$lib$linkify$core$scanner, S_FULL_PROTOCOL$$module$lib$linkify$core$scanner);
var partialLocalhostStates$$module$lib$linkify$core$scanner = (0, _state$$module$lib$linkify$core$scanner.stateify)("localhost", S_START$$module$lib$linkify$core$scanner, T_LOCALHOST$$module$lib$linkify$core$scanner, T_DOMAIN$$module$lib$linkify$core$scanner);
domainStates$$module$lib$linkify$core$scanner.push.apply(domainStates$$module$lib$linkify$core$scanner, partialLocalhostStates$$module$lib$linkify$core$scanner);
S_START$$module$lib$linkify$core$scanner.on(REGEXP_NUM$$module$lib$linkify$core$scanner, S_NUM$$module$lib$linkify$core$scanner);
S_NUM$$module$lib$linkify$core$scanner.on("-", S_DOMAIN_HYPHEN$$module$lib$linkify$core$scanner);
S_NUM$$module$lib$linkify$core$scanner.on(REGEXP_NUM$$module$lib$linkify$core$scanner, S_NUM$$module$lib$linkify$core$scanner);
S_NUM$$module$lib$linkify$core$scanner.on(REGEXP_ALPHANUM$$module$lib$linkify$core$scanner, S_DOMAIN$$module$lib$linkify$core$scanner);
S_DOMAIN$$module$lib$linkify$core$scanner.on("-", S_DOMAIN_HYPHEN$$module$lib$linkify$core$scanner);
S_DOMAIN$$module$lib$linkify$core$scanner.on(REGEXP_ALPHANUM$$module$lib$linkify$core$scanner, S_DOMAIN$$module$lib$linkify$core$scanner);
for (i$$module$lib$linkify$core$scanner = 0;i$$module$lib$linkify$core$scanner < domainStates$$module$lib$linkify$core$scanner.length;i$$module$lib$linkify$core$scanner++) {
  domainStates$$module$lib$linkify$core$scanner[i$$module$lib$linkify$core$scanner].on("-", S_DOMAIN_HYPHEN$$module$lib$linkify$core$scanner), domainStates$$module$lib$linkify$core$scanner[i$$module$lib$linkify$core$scanner].on(REGEXP_ALPHANUM$$module$lib$linkify$core$scanner, S_DOMAIN$$module$lib$linkify$core$scanner);
}
S_DOMAIN_HYPHEN$$module$lib$linkify$core$scanner.on("-", S_DOMAIN_HYPHEN$$module$lib$linkify$core$scanner);
S_DOMAIN_HYPHEN$$module$lib$linkify$core$scanner.on(REGEXP_NUM$$module$lib$linkify$core$scanner, S_DOMAIN$$module$lib$linkify$core$scanner);
S_DOMAIN_HYPHEN$$module$lib$linkify$core$scanner.on(REGEXP_ALPHANUM$$module$lib$linkify$core$scanner, S_DOMAIN$$module$lib$linkify$core$scanner);
S_START$$module$lib$linkify$core$scanner.on(/./, makeState$$module$lib$linkify$core$scanner(_tokens$$module$lib$linkify$core$scanner.text.SYM));
var run$$module$lib$linkify$core$scanner = function(a) {
  for (var b = a.toLowerCase(), c = a.length, d = 0, g = [];d < c;) {
    for (var e = S_START$$module$lib$linkify$core$scanner, h = null, f = 0, k = null, l = -1;d < c && (h = e.next(b[d]));) {
      e = h, e.accepts() ? (l = 0, k = e) : 0 <= l && l++, f++, d++;
    }
    0 > l || (d -= l, f -= l, e = k.emit(), g.push(new e(a.substr(d - f, f))));
  }
  return g;
}, start$$module$lib$linkify$core$scanner = S_START$$module$lib$linkify$core$scanner;
module$lib$linkify$core$scanner.State = _state$$module$lib$linkify$core$scanner.CharacterState;
module$lib$linkify$core$scanner.TOKENS = _tokens$$module$lib$linkify$core$scanner.text;
module$lib$linkify$core$scanner.run = run$$module$lib$linkify$core$scanner;
module$lib$linkify$core$scanner.start = start$$module$lib$linkify$core$scanner;
var module$lib$linkify$utils$options = {__esModule:!0};
function noop$$module$lib$linkify$utils$options(a) {
  return a;
}
function typeToTarget$$module$lib$linkify$utils$options(a, b) {
  return "url" === b ? "_blank" : null;
}
function normalize$$module$lib$linkify$utils$options(a) {
  a = a || {};
  return{attributes:a.linkAttributes || null, defaultProtocol:a.defaultProtocol || "http", events:a.events || null, format:a.format || noop$$module$lib$linkify$utils$options, formatHref:a.formatHref || noop$$module$lib$linkify$utils$options, newLine:a.newLine || !1, nl2br:!!a.newLine || a.nl2br || !1, tagName:a.tagName || "a", target:a.target || typeToTarget$$module$lib$linkify$utils$options, linkClass:a.linkClass || "linkified"};
}
function resolve$$module$lib$linkify$utils$options(a) {
  for (var b = arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1;d < b;d++) {
    c[d - 1] = arguments[d];
  }
  return "function" === typeof a ? a.apply(void 0, c) : a;
}
module$lib$linkify$utils$options.normalize = normalize$$module$lib$linkify$utils$options;
module$lib$linkify$utils$options.resolve = resolve$$module$lib$linkify$utils$options;
var module$lib$linkify = {__esModule:!0};
function _interopRequireWildcard$$module$lib$linkify(a) {
  if (a && a.__esModule) {
    return a;
  }
  var b = {};
  if (null != a) {
    for (var c in a) {
      Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
    }
  }
  b["default"] = a;
  return b;
}
var _linkifyUtilsOptions$$module$lib$linkify = module$lib$linkify$utils$options, options$$module$lib$linkify = _interopRequireWildcard$$module$lib$linkify(_linkifyUtilsOptions$$module$lib$linkify), _linkifyCoreScanner$$module$lib$linkify = module$lib$linkify$core$scanner, scanner$$module$lib$linkify = _interopRequireWildcard$$module$lib$linkify(_linkifyCoreScanner$$module$lib$linkify), _linkifyCoreParser$$module$lib$linkify = module$lib$linkify$core$parser, parser$$module$lib$linkify = _interopRequireWildcard$$module$lib$linkify(_linkifyCoreParser$$module$lib$linkify);
Array.isArray || (Array.isArray = function(a) {
  return "[object Array]" === Object.prototype.toString.call(a);
});
var tokenize$$module$lib$linkify = function(a) {
  return parser$$module$lib$linkify.run(scanner$$module$lib$linkify.run(a));
}, find$$module$lib$linkify = function(a, b) {
  for (var c = void 0 === b ? null : b, d = tokenize$$module$lib$linkify(a), g = [], e = 0;e < d.length;e++) {
    !d[e].isLink || c && d[e].type !== c || g.push(d[e].toObject());
  }
  return g;
}, test$$module$lib$linkify = function(a, b) {
  var c = void 0 === b ? null : b, d = tokenize$$module$lib$linkify(a);
  return 1 === d.length && d[0].isLink && (!c || d[0].type === c);
};
module$lib$linkify.find = find$$module$lib$linkify;
module$lib$linkify.options = options$$module$lib$linkify;
module$lib$linkify.parser = parser$$module$lib$linkify;
module$lib$linkify.scanner = scanner$$module$lib$linkify;
module$lib$linkify.test = test$$module$lib$linkify;
module$lib$linkify.tokenize = tokenize$$module$lib$linkify;


window.linkify = module$lib$linkify;
})();