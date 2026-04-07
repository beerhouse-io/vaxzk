let Re, rt, B, Ue, c, d, u, Le, s, Be, o, $, at, Et, vs, Lt, gs, ds, cs, wt, Z, Ts, b, Ve, fs, os, Cs, _s, ls, ws, ps, Es, us, Ot, st, Ut, Q;
let __tla = (async ()=>{
    let e, t, n, r, i, a, l;
    e = Object.create;
    t = Object.defineProperty;
    n = Object.getOwnPropertyDescriptor;
    r = Object.getOwnPropertyNames;
    i = Object.getPrototypeOf;
    a = Object.prototype.hasOwnProperty;
    o = (e, t)=>()=>(e && (t = e(e = 0)), t);
    s = (e, t)=>()=>(t || e((t = {
                exports: {}
            }).exports, t), t.exports);
    c = (e, n)=>{
        let r = {};
        for(var i in e)t(r, i, {
            get: e[i],
            enumerable: !0
        });
        return n || t(r, Symbol.toStringTag, {
            value: `Module`
        }), r;
    };
    l = (e, i, o, s)=>{
        if (i && typeof i == `object` || typeof i == `function`) for(var c = r(i), l = 0, u = c.length, d; l < u; l++)d = c[l], !a.call(e, d) && d !== o && t(e, d, {
            get: ((e)=>i[e]).bind(null, d),
            enumerable: !(s = n(i, d)) || s.enumerable
        });
        return e;
    };
    u = (n, r, a)=>(a = n == null ? {} : e(i(n)), l(r || !n || !n.__esModule ? t(a, `default`, {
            value: n,
            enumerable: !0
        }) : a, n));
    d = (e)=>a.call(e, `module.exports`) ? e[`module.exports`] : l(t({}, `__esModule`, {
            value: !0
        }), e);
    function f() {
        R = !0;
        for(var e = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`, t = 0, n = e.length; t < n; ++t)I[t] = e[t], L[e.charCodeAt(t)] = t;
        L[45] = 62, L[95] = 63;
    }
    function p(e) {
        R || f();
        var t, n, r, i, a, o, s = e.length;
        if (s % 4 > 0) throw Error(`Invalid string. Length must be a multiple of 4`);
        a = e[s - 2] === `=` ? 2 : e[s - 1] === `=` ? 1 : 0, o = new Ne(s * 3 / 4 - a), r = a > 0 ? s - 4 : s;
        var c = 0;
        for(t = 0, n = 0; t < r; t += 4, n += 3)i = L[e.charCodeAt(t)] << 18 | L[e.charCodeAt(t + 1)] << 12 | L[e.charCodeAt(t + 2)] << 6 | L[e.charCodeAt(t + 3)], o[c++] = i >> 16 & 255, o[c++] = i >> 8 & 255, o[c++] = i & 255;
        return a === 2 ? (i = L[e.charCodeAt(t)] << 2 | L[e.charCodeAt(t + 1)] >> 4, o[c++] = i & 255) : a === 1 && (i = L[e.charCodeAt(t)] << 10 | L[e.charCodeAt(t + 1)] << 4 | L[e.charCodeAt(t + 2)] >> 2, o[c++] = i >> 8 & 255, o[c++] = i & 255), o;
    }
    function m(e) {
        return I[e >> 18 & 63] + I[e >> 12 & 63] + I[e >> 6 & 63] + I[e & 63];
    }
    function ee(e, t, n) {
        for(var r, i = [], a = t; a < n; a += 3)r = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2], i.push(m(r));
        return i.join(``);
    }
    function h(e) {
        R || f();
        for(var t, n = e.length, r = n % 3, i = ``, a = [], o = 16383, s = 0, c = n - r; s < c; s += o)a.push(ee(e, s, s + o > c ? c : s + o));
        return r === 1 ? (t = e[n - 1], i += I[t >> 2], i += I[t << 4 & 63], i += `==`) : r === 2 && (t = (e[n - 2] << 8) + e[n - 1], i += I[t >> 10], i += I[t >> 4 & 63], i += I[t << 2 & 63], i += `=`), a.push(i), a.join(``);
    }
    function g(e, t, n, r, i) {
        var a, o, s = i * 8 - r - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, f = n ? -1 : 1, p = e[t + d];
        for(d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
        for(o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
        if (a === 0) a = 1 - l;
        else if (a === c) return o ? NaN : (p ? -1 : 1) * (1 / 0);
        else o += 2 ** r, a -= l;
        return (p ? -1 : 1) * o * 2 ** (a - r);
    }
    function _(e, t, n, r, i, a) {
        var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r ? 0 : a - 1, m = r ? 1 : -1, ee = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
        for(t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
        for(o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
        e[n + p - m] |= ee * 128;
    }
    function v() {
        return b.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }
    function y(e, t) {
        if (v() < t) throw RangeError(`Invalid typed array length`);
        return b.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t), e.__proto__ = b.prototype) : (e === null && (e = new b(t)), e.length = t), e;
    }
    b = function(e, t, n) {
        if (!b.TYPED_ARRAY_SUPPORT && !(this instanceof b)) return new b(e, t, n);
        if (typeof e == `number`) {
            if (typeof t == `string`) throw Error(`If encoding is specified then the first argument must be a string`);
            return S(this, e);
        }
        return te(this, e, t, n);
    };
    function te(e, t, n, r) {
        if (typeof t == `number`) throw TypeError(`"value" argument must not be a number`);
        return typeof ArrayBuffer < `u` && t instanceof ArrayBuffer ? ie(e, t, n, r) : typeof t == `string` ? re(e, t, n) : w(e, t);
    }
    function x(e) {
        if (typeof e != `number`) throw TypeError(`"size" argument must be a number`);
        if (e < 0) throw RangeError(`"size" argument must not be negative`);
    }
    function ne(e, t, n, r) {
        return x(t), t <= 0 || n === void 0 ? y(e, t) : typeof r == `string` ? y(e, t).fill(n, r) : y(e, t).fill(n);
    }
    function S(e, t) {
        if (x(t), e = y(e, t < 0 ? 0 : T(t) | 0), !b.TYPED_ARRAY_SUPPORT) for(var n = 0; n < t; ++n)e[n] = 0;
        return e;
    }
    function re(e, t, n) {
        if ((typeof n != `string` || n === ``) && (n = `utf8`), !b.isEncoding(n)) throw TypeError(`"encoding" must be a valid string encoding`);
        var r = ae(t, n) | 0;
        e = y(e, r);
        var i = e.write(t, n);
        return i !== r && (e = e.slice(0, i)), e;
    }
    function C(e, t) {
        var n = t.length < 0 ? 0 : T(t.length) | 0;
        e = y(e, n);
        for(var r = 0; r < n; r += 1)e[r] = t[r] & 255;
        return e;
    }
    function ie(e, t, n, r) {
        if (t.byteLength, n < 0 || t.byteLength < n) throw RangeError(`'offset' is out of bounds`);
        if (t.byteLength < n + (r || 0)) throw RangeError(`'length' is out of bounds`);
        return t = n === void 0 && r === void 0 ? new Uint8Array(t) : r === void 0 ? new Uint8Array(t, n) : new Uint8Array(t, n, r), b.TYPED_ARRAY_SUPPORT ? (e = t, e.__proto__ = b.prototype) : e = C(e, t), e;
    }
    function w(e, t) {
        if (E(t)) {
            var n = T(t.length) | 0;
            return e = y(e, n), e.length === 0 || t.copy(e, 0, 0, n), e;
        }
        if (t) {
            if (typeof ArrayBuffer < `u` && t.buffer instanceof ArrayBuffer || `length` in t) return typeof t.length != `number` || ke(t.length) ? y(e, 0) : C(e, t);
            if (t.type === `Buffer` && Fe(t.data)) return C(e, t.data);
        }
        throw TypeError(`First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.`);
    }
    function T(e) {
        if (e >= v()) throw RangeError(`Attempt to allocate Buffer larger than maximum size: 0x` + v().toString(16) + ` bytes`);
        return e | 0;
    }
    function E(e) {
        return !!(e != null && e._isBuffer);
    }
    function ae(e, t) {
        if (E(e)) return e.length;
        if (typeof ArrayBuffer < `u` && typeof ArrayBuffer.isView == `function` && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
        typeof e != `string` && (e = `` + e);
        var n = e.length;
        if (n === 0) return 0;
        for(var r = !1;;)switch(t){
            case `ascii`:
            case `latin1`:
            case `binary`:
                return n;
            case `utf8`:
            case `utf-8`:
            case void 0:
                return Ee(e).length;
            case `ucs2`:
            case `ucs-2`:
            case `utf16le`:
            case `utf-16le`:
                return n * 2;
            case `hex`:
                return n >>> 1;
            case `base64`:
                return P(e).length;
            default:
                if (r) return Ee(e).length;
                t = (`` + t).toLowerCase(), r = !0;
        }
    }
    function oe(e, t, n) {
        var r = !1;
        if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return ``;
        for(e ||= `utf8`;;)switch(e){
            case `hex`:
                return ve(this, t, n);
            case `utf8`:
            case `utf-8`:
                return me(this, t, n);
            case `ascii`:
                return ge(this, t, n);
            case `latin1`:
            case `binary`:
                return _e(this, t, n);
            case `base64`:
                return pe(this, t, n);
            case `ucs2`:
            case `ucs-2`:
            case `utf16le`:
            case `utf-16le`:
                return ye(this, t, n);
            default:
                if (r) throw TypeError(`Unknown encoding: ` + e);
                e = (e + ``).toLowerCase(), r = !0;
        }
    }
    function D(e, t, n) {
        var r = e[t];
        e[t] = e[n], e[n] = r;
    }
    function O(e, t, n, r, i) {
        if (e.length === 0) return -1;
        if (typeof n == `string` ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
            if (i) return -1;
            n = e.length - 1;
        } else if (n < 0) if (i) n = 0;
        else return -1;
        if (typeof t == `string` && (t = b.from(t, r)), E(t)) return t.length === 0 ? -1 : se(e, t, n, r, i);
        if (typeof t == `number`) return t &= 255, b.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == `function` ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : se(e, [
            t
        ], n, r, i);
        throw TypeError(`val must be string, number or Buffer`);
    }
    function se(e, t, n, r, i) {
        var a = 1, o = e.length, s = t.length;
        if (r !== void 0 && (r = String(r).toLowerCase(), r === `ucs2` || r === `ucs-2` || r === `utf16le` || r === `utf-16le`)) {
            if (e.length < 2 || t.length < 2) return -1;
            a = 2, o /= 2, s /= 2, n /= 2;
        }
        function c(e, t) {
            return a === 1 ? e[t] : e.readUInt16BE(t * a);
        }
        var l;
        if (i) {
            var u = -1;
            for(l = n; l < o; l++)if (c(e, l) === c(t, u === -1 ? 0 : l - u)) {
                if (u === -1 && (u = l), l - u + 1 === s) return u * a;
            } else u !== -1 && (l -= l - u), u = -1;
        } else for(n + s > o && (n = o - s), l = n; l >= 0; l--){
            for(var d = !0, f = 0; f < s; f++)if (c(e, l + f) !== c(t, f)) {
                d = !1;
                break;
            }
            if (d) return l;
        }
        return -1;
    }
    function ce(e, t, n, r) {
        n = Number(n) || 0;
        var i = e.length - n;
        r ? (r = Number(r), r > i && (r = i)) : r = i;
        var a = t.length;
        if (a % 2 != 0) throw TypeError(`Invalid hex string`);
        r > a / 2 && (r = a / 2);
        for(var o = 0; o < r; ++o){
            var s = parseInt(t.substr(o * 2, 2), 16);
            if (isNaN(s)) return o;
            e[n + o] = s;
        }
        return o;
    }
    function le(e, t, n, r) {
        return F(Ee(t, e.length - n), e, n, r);
    }
    function ue(e, t, n, r) {
        return F(De(t), e, n, r);
    }
    function de(e, t, n, r) {
        return ue(e, t, n, r);
    }
    function k(e, t, n, r) {
        return F(P(t), e, n, r);
    }
    function fe(e, t, n, r) {
        return F(Oe(t, e.length - n), e, n, r);
    }
    function pe(e, t, n) {
        return t === 0 && n === e.length ? h(e) : h(e.slice(t, n));
    }
    function me(e, t, n) {
        n = Math.min(e.length, n);
        for(var r = [], i = t; i < n;){
            var a = e[i], o = null, s = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
            if (i + s <= n) {
                var c, l, u, d;
                switch(s){
                    case 1:
                        a < 128 && (o = a);
                        break;
                    case 2:
                        c = e[i + 1], (c & 192) == 128 && (d = (a & 31) << 6 | c & 63, d > 127 && (o = d));
                        break;
                    case 3:
                        c = e[i + 1], l = e[i + 2], (c & 192) == 128 && (l & 192) == 128 && (d = (a & 15) << 12 | (c & 63) << 6 | l & 63, d > 2047 && (d < 55296 || d > 57343) && (o = d));
                        break;
                    case 4:
                        c = e[i + 1], l = e[i + 2], u = e[i + 3], (c & 192) == 128 && (l & 192) == 128 && (u & 192) == 128 && (d = (a & 15) << 18 | (c & 63) << 12 | (l & 63) << 6 | u & 63, d > 65535 && d < 1114112 && (o = d));
                }
            }
            o === null ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, r.push(o >>> 10 & 1023 | 55296), o = 56320 | o & 1023), r.push(o), i += s;
        }
        return he(r);
    }
    function he(e) {
        var t = e.length;
        if (t <= z) return String.fromCharCode.apply(String, e);
        for(var n = ``, r = 0; r < t;)n += String.fromCharCode.apply(String, e.slice(r, r += z));
        return n;
    }
    function ge(e, t, n) {
        var r = ``;
        n = Math.min(e.length, n);
        for(var i = t; i < n; ++i)r += String.fromCharCode(e[i] & 127);
        return r;
    }
    function _e(e, t, n) {
        var r = ``;
        n = Math.min(e.length, n);
        for(var i = t; i < n; ++i)r += String.fromCharCode(e[i]);
        return r;
    }
    function ve(e, t, n) {
        var r = e.length;
        (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
        for(var i = ``, a = t; a < n; ++a)i += Te(e[a]);
        return i;
    }
    function ye(e, t, n) {
        for(var r = e.slice(t, n), i = ``, a = 0; a < r.length; a += 2)i += String.fromCharCode(r[a] + r[a + 1] * 256);
        return i;
    }
    function A(e, t, n) {
        if (e % 1 != 0 || e < 0) throw RangeError(`offset is not uint`);
        if (e + t > n) throw RangeError(`Trying to access beyond buffer length`);
    }
    function j(e, t, n, r, i, a) {
        if (!E(e)) throw TypeError(`"buffer" argument must be a Buffer instance`);
        if (t > i || t < a) throw RangeError(`"value" argument is out of bounds`);
        if (n + r > e.length) throw RangeError(`Index out of range`);
    }
    function M(e, t, n, r) {
        t < 0 && (t = 65535 + t + 1);
        for(var i = 0, a = Math.min(e.length - n, 2); i < a; ++i)e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> (r ? i : 1 - i) * 8;
    }
    function N(e, t, n, r) {
        t < 0 && (t = 4294967295 + t + 1);
        for(var i = 0, a = Math.min(e.length - n, 4); i < a; ++i)e[n + i] = t >>> (r ? i : 3 - i) * 8 & 255;
    }
    function be(e, t, n, r, i, a) {
        if (n + r > e.length || n < 0) throw RangeError(`Index out of range`);
    }
    function xe(e, t, n, r, i) {
        return i || be(e, t, n, 4), _(e, t, n, r, 23, 4), n + 4;
    }
    function Se(e, t, n, r, i) {
        return i || be(e, t, n, 8), _(e, t, n, r, 52, 8), n + 8;
    }
    function Ce(e) {
        if (e = we(e).replace(Ie, ``), e.length < 2) return ``;
        for(; e.length % 4 != 0;)e += `=`;
        return e;
    }
    function we(e) {
        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, ``);
    }
    function Te(e) {
        return e < 16 ? `0` + e.toString(16) : e.toString(16);
    }
    function Ee(e, t) {
        t ||= 1 / 0;
        for(var n, r = e.length, i = null, a = [], o = 0; o < r; ++o){
            if (n = e.charCodeAt(o), n > 55295 && n < 57344) {
                if (!i) {
                    if (n > 56319) {
                        (t -= 3) > -1 && a.push(239, 191, 189);
                        continue;
                    } else if (o + 1 === r) {
                        (t -= 3) > -1 && a.push(239, 191, 189);
                        continue;
                    }
                    i = n;
                    continue;
                }
                if (n < 56320) {
                    (t -= 3) > -1 && a.push(239, 191, 189), i = n;
                    continue;
                }
                n = (i - 55296 << 10 | n - 56320) + 65536;
            } else i && (t -= 3) > -1 && a.push(239, 191, 189);
            if (i = null, n < 128) {
                if (--t < 0) break;
                a.push(n);
            } else if (n < 2048) {
                if ((t -= 2) < 0) break;
                a.push(n >> 6 | 192, n & 63 | 128);
            } else if (n < 65536) {
                if ((t -= 3) < 0) break;
                a.push(n >> 12 | 224, n >> 6 & 63 | 128, n & 63 | 128);
            } else if (n < 1114112) {
                if ((t -= 4) < 0) break;
                a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, n & 63 | 128);
            } else throw Error(`Invalid code point`);
        }
        return a;
    }
    function De(e) {
        for(var t = [], n = 0; n < e.length; ++n)t.push(e.charCodeAt(n) & 255);
        return t;
    }
    function Oe(e, t) {
        for(var n, r, i, a = [], o = 0; o < e.length && !((t -= 2) < 0); ++o)n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
        return a;
    }
    function P(e) {
        return p(Ce(e));
    }
    function F(e, t, n, r) {
        for(var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i)t[i + n] = e[i];
        return i;
    }
    function ke(e) {
        return e !== e;
    }
    function Ae(e) {
        return e != null && (!!e._isBuffer || je(e) || Me(e));
    }
    function je(e) {
        return !!e.constructor && typeof e.constructor.isBuffer == `function` && e.constructor.isBuffer(e);
    }
    function Me(e) {
        return typeof e.readFloatLE == `function` && typeof e.slice == `function` && je(e.slice(0, 0));
    }
    let I, L, Ne, R, Pe, Fe, z, Ie, ze;
    Le = o((()=>{
        I = [], L = [], Ne = typeof Uint8Array < `u` ? Uint8Array : Array, R = !1, Pe = {}.toString, Fe = Array.isArray || function(e) {
            return Pe.call(e) == `[object Array]`;
        }, b.TYPED_ARRAY_SUPPORT = globalThis.TYPED_ARRAY_SUPPORT === void 0 ? !0 : globalThis.TYPED_ARRAY_SUPPORT, v(), b.poolSize = 8192, b._augment = function(e) {
            return e.__proto__ = b.prototype, e;
        }, b.from = function(e, t, n) {
            return te(null, e, t, n);
        }, b.TYPED_ARRAY_SUPPORT && (b.prototype.__proto__ = Uint8Array.prototype, b.__proto__ = Uint8Array, typeof Symbol < `u` && Symbol.species && b[Symbol.species]), b.alloc = function(e, t, n) {
            return ne(null, e, t, n);
        }, b.allocUnsafe = function(e) {
            return S(null, e);
        }, b.allocUnsafeSlow = function(e) {
            return S(null, e);
        }, b.isBuffer = Ae, b.compare = function(e, t) {
            if (!E(e) || !E(t)) throw TypeError(`Arguments must be Buffers`);
            if (e === t) return 0;
            for(var n = e.length, r = t.length, i = 0, a = Math.min(n, r); i < a; ++i)if (e[i] !== t[i]) {
                n = e[i], r = t[i];
                break;
            }
            return n < r ? -1 : r < n ? 1 : 0;
        }, b.isEncoding = function(e) {
            switch(String(e).toLowerCase()){
                case `hex`:
                case `utf8`:
                case `utf-8`:
                case `ascii`:
                case `latin1`:
                case `binary`:
                case `base64`:
                case `ucs2`:
                case `ucs-2`:
                case `utf16le`:
                case `utf-16le`:
                    return !0;
                default:
                    return !1;
            }
        }, b.concat = function(e, t) {
            if (!Fe(e)) throw TypeError(`"list" argument must be an Array of Buffers`);
            if (e.length === 0) return b.alloc(0);
            var n;
            if (t === void 0) for(t = 0, n = 0; n < e.length; ++n)t += e[n].length;
            var r = b.allocUnsafe(t), i = 0;
            for(n = 0; n < e.length; ++n){
                var a = e[n];
                if (!E(a)) throw TypeError(`"list" argument must be an Array of Buffers`);
                a.copy(r, i), i += a.length;
            }
            return r;
        }, b.byteLength = ae, b.prototype._isBuffer = !0, b.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 != 0) throw RangeError(`Buffer size must be a multiple of 16-bits`);
            for(var t = 0; t < e; t += 2)D(this, t, t + 1);
            return this;
        }, b.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 != 0) throw RangeError(`Buffer size must be a multiple of 32-bits`);
            for(var t = 0; t < e; t += 4)D(this, t, t + 3), D(this, t + 1, t + 2);
            return this;
        }, b.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 != 0) throw RangeError(`Buffer size must be a multiple of 64-bits`);
            for(var t = 0; t < e; t += 8)D(this, t, t + 7), D(this, t + 1, t + 6), D(this, t + 2, t + 5), D(this, t + 3, t + 4);
            return this;
        }, b.prototype.toString = function() {
            var e = this.length | 0;
            return e === 0 ? `` : arguments.length === 0 ? me(this, 0, e) : oe.apply(this, arguments);
        }, b.prototype.equals = function(e) {
            if (!E(e)) throw TypeError(`Argument must be a Buffer`);
            return this === e ? !0 : b.compare(this, e) === 0;
        }, b.prototype.inspect = function() {
            var e = ``, t = 50;
            return this.length > 0 && (e = this.toString(`hex`, 0, t).match(/.{2}/g).join(` `), this.length > t && (e += ` ... `)), `<Buffer ` + e + `>`;
        }, b.prototype.compare = function(e, t, n, r, i) {
            if (!E(e)) throw TypeError(`Argument must be a Buffer`);
            if (t === void 0 && (t = 0), n === void 0 && (n = e ? e.length : 0), r === void 0 && (r = 0), i === void 0 && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw RangeError(`out of range index`);
            if (r >= i && t >= n) return 0;
            if (r >= i) return -1;
            if (t >= n) return 1;
            if (t >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === e) return 0;
            for(var a = i - r, o = n - t, s = Math.min(a, o), c = this.slice(r, i), l = e.slice(t, n), u = 0; u < s; ++u)if (c[u] !== l[u]) {
                a = c[u], o = l[u];
                break;
            }
            return a < o ? -1 : o < a ? 1 : 0;
        }, b.prototype.includes = function(e, t, n) {
            return this.indexOf(e, t, n) !== -1;
        }, b.prototype.indexOf = function(e, t, n) {
            return O(this, e, t, n, !0);
        }, b.prototype.lastIndexOf = function(e, t, n) {
            return O(this, e, t, n, !1);
        }, b.prototype.write = function(e, t, n, r) {
            if (t === void 0) r = `utf8`, n = this.length, t = 0;
            else if (n === void 0 && typeof t == `string`) r = t, n = this.length, t = 0;
            else if (isFinite(t)) t |= 0, isFinite(n) ? (n |= 0, r === void 0 && (r = `utf8`)) : (r = n, n = void 0);
            else throw Error(`Buffer.write(string, encoding, offset[, length]) is no longer supported`);
            var i = this.length - t;
            if ((n === void 0 || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw RangeError(`Attempt to write outside buffer bounds`);
            r ||= `utf8`;
            for(var a = !1;;)switch(r){
                case `hex`:
                    return ce(this, e, t, n);
                case `utf8`:
                case `utf-8`:
                    return le(this, e, t, n);
                case `ascii`:
                    return ue(this, e, t, n);
                case `latin1`:
                case `binary`:
                    return de(this, e, t, n);
                case `base64`:
                    return k(this, e, t, n);
                case `ucs2`:
                case `ucs-2`:
                case `utf16le`:
                case `utf-16le`:
                    return fe(this, e, t, n);
                default:
                    if (a) throw TypeError(`Unknown encoding: ` + r);
                    r = (`` + r).toLowerCase(), a = !0;
            }
        }, b.prototype.toJSON = function() {
            return {
                type: `Buffer`,
                data: Array.prototype.slice.call(this._arr || this, 0)
            };
        }, z = 4096, b.prototype.slice = function(e, t) {
            var n = this.length;
            e = ~~e, t = t === void 0 ? n : ~~t, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < e && (t = e);
            var r;
            if (b.TYPED_ARRAY_SUPPORT) r = this.subarray(e, t), r.__proto__ = b.prototype;
            else {
                var i = t - e;
                r = new b(i, void 0);
                for(var a = 0; a < i; ++a)r[a] = this[a + e];
            }
            return r;
        }, b.prototype.readUIntLE = function(e, t, n) {
            e |= 0, t |= 0, n || A(e, t, this.length);
            for(var r = this[e], i = 1, a = 0; ++a < t && (i *= 256);)r += this[e + a] * i;
            return r;
        }, b.prototype.readUIntBE = function(e, t, n) {
            e |= 0, t |= 0, n || A(e, t, this.length);
            for(var r = this[e + --t], i = 1; t > 0 && (i *= 256);)r += this[e + --t] * i;
            return r;
        }, b.prototype.readUInt8 = function(e, t) {
            return t || A(e, 1, this.length), this[e];
        }, b.prototype.readUInt16LE = function(e, t) {
            return t || A(e, 2, this.length), this[e] | this[e + 1] << 8;
        }, b.prototype.readUInt16BE = function(e, t) {
            return t || A(e, 2, this.length), this[e] << 8 | this[e + 1];
        }, b.prototype.readUInt32LE = function(e, t) {
            return t || A(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
        }, b.prototype.readUInt32BE = function(e, t) {
            return t || A(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
        }, b.prototype.readIntLE = function(e, t, n) {
            e |= 0, t |= 0, n || A(e, t, this.length);
            for(var r = this[e], i = 1, a = 0; ++a < t && (i *= 256);)r += this[e + a] * i;
            return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
        }, b.prototype.readIntBE = function(e, t, n) {
            e |= 0, t |= 0, n || A(e, t, this.length);
            for(var r = t, i = 1, a = this[e + --r]; r > 0 && (i *= 256);)a += this[e + --r] * i;
            return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
        }, b.prototype.readInt8 = function(e, t) {
            return t || A(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
        }, b.prototype.readInt16LE = function(e, t) {
            t || A(e, 2, this.length);
            var n = this[e] | this[e + 1] << 8;
            return n & 32768 ? n | 4294901760 : n;
        }, b.prototype.readInt16BE = function(e, t) {
            t || A(e, 2, this.length);
            var n = this[e + 1] | this[e] << 8;
            return n & 32768 ? n | 4294901760 : n;
        }, b.prototype.readInt32LE = function(e, t) {
            return t || A(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
        }, b.prototype.readInt32BE = function(e, t) {
            return t || A(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
        }, b.prototype.readFloatLE = function(e, t) {
            return t || A(e, 4, this.length), g(this, e, !0, 23, 4);
        }, b.prototype.readFloatBE = function(e, t) {
            return t || A(e, 4, this.length), g(this, e, !1, 23, 4);
        }, b.prototype.readDoubleLE = function(e, t) {
            return t || A(e, 8, this.length), g(this, e, !0, 52, 8);
        }, b.prototype.readDoubleBE = function(e, t) {
            return t || A(e, 8, this.length), g(this, e, !1, 52, 8);
        }, b.prototype.writeUIntLE = function(e, t, n, r) {
            if (e = +e, t |= 0, n |= 0, !r) {
                var i = 2 ** (8 * n) - 1;
                j(this, e, t, n, i, 0);
            }
            var a = 1, o = 0;
            for(this[t] = e & 255; ++o < n && (a *= 256);)this[t + o] = e / a & 255;
            return t + n;
        }, b.prototype.writeUIntBE = function(e, t, n, r) {
            if (e = +e, t |= 0, n |= 0, !r) {
                var i = 2 ** (8 * n) - 1;
                j(this, e, t, n, i, 0);
            }
            var a = n - 1, o = 1;
            for(this[t + a] = e & 255; --a >= 0 && (o *= 256);)this[t + a] = e / o & 255;
            return t + n;
        }, b.prototype.writeUInt8 = function(e, t, n) {
            return e = +e, t |= 0, n || j(this, e, t, 1, 255, 0), b.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = e & 255, t + 1;
        }, b.prototype.writeUInt16LE = function(e, t, n) {
            return e = +e, t |= 0, n || j(this, e, t, 2, 65535, 0), b.TYPED_ARRAY_SUPPORT ? (this[t] = e & 255, this[t + 1] = e >>> 8) : M(this, e, t, !0), t + 2;
        }, b.prototype.writeUInt16BE = function(e, t, n) {
            return e = +e, t |= 0, n || j(this, e, t, 2, 65535, 0), b.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = e & 255) : M(this, e, t, !1), t + 2;
        }, b.prototype.writeUInt32LE = function(e, t, n) {
            return e = +e, t |= 0, n || j(this, e, t, 4, 4294967295, 0), b.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255) : N(this, e, t, !0), t + 4;
        }, b.prototype.writeUInt32BE = function(e, t, n) {
            return e = +e, t |= 0, n || j(this, e, t, 4, 4294967295, 0), b.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255) : N(this, e, t, !1), t + 4;
        }, b.prototype.writeIntLE = function(e, t, n, r) {
            if (e = +e, t |= 0, !r) {
                var i = 2 ** (8 * n - 1);
                j(this, e, t, n, i - 1, -i);
            }
            var a = 0, o = 1, s = 0;
            for(this[t] = e & 255; ++a < n && (o *= 256);)e < 0 && s === 0 && this[t + a - 1] !== 0 && (s = 1), this[t + a] = (e / o >> 0) - s & 255;
            return t + n;
        }, b.prototype.writeIntBE = function(e, t, n, r) {
            if (e = +e, t |= 0, !r) {
                var i = 2 ** (8 * n - 1);
                j(this, e, t, n, i - 1, -i);
            }
            var a = n - 1, o = 1, s = 0;
            for(this[t + a] = e & 255; --a >= 0 && (o *= 256);)e < 0 && s === 0 && this[t + a + 1] !== 0 && (s = 1), this[t + a] = (e / o >> 0) - s & 255;
            return t + n;
        }, b.prototype.writeInt8 = function(e, t, n) {
            return e = +e, t |= 0, n || j(this, e, t, 1, 127, -128), b.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
        }, b.prototype.writeInt16LE = function(e, t, n) {
            return e = +e, t |= 0, n || j(this, e, t, 2, 32767, -32768), b.TYPED_ARRAY_SUPPORT ? (this[t] = e & 255, this[t + 1] = e >>> 8) : M(this, e, t, !0), t + 2;
        }, b.prototype.writeInt16BE = function(e, t, n) {
            return e = +e, t |= 0, n || j(this, e, t, 2, 32767, -32768), b.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = e & 255) : M(this, e, t, !1), t + 2;
        }, b.prototype.writeInt32LE = function(e, t, n) {
            return e = +e, t |= 0, n || j(this, e, t, 4, 2147483647, -2147483648), b.TYPED_ARRAY_SUPPORT ? (this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : N(this, e, t, !0), t + 4;
        }, b.prototype.writeInt32BE = function(e, t, n) {
            return e = +e, t |= 0, n || j(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), b.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255) : N(this, e, t, !1), t + 4;
        }, b.prototype.writeFloatLE = function(e, t, n) {
            return xe(this, e, t, !0, n);
        }, b.prototype.writeFloatBE = function(e, t, n) {
            return xe(this, e, t, !1, n);
        }, b.prototype.writeDoubleLE = function(e, t, n) {
            return Se(this, e, t, !0, n);
        }, b.prototype.writeDoubleBE = function(e, t, n) {
            return Se(this, e, t, !1, n);
        }, b.prototype.copy = function(e, t, n, r) {
            if (n ||= 0, !r && r !== 0 && (r = this.length), t >= e.length && (t = e.length), t ||= 0, r > 0 && r < n && (r = n), r === n || e.length === 0 || this.length === 0) return 0;
            if (t < 0) throw RangeError(`targetStart out of bounds`);
            if (n < 0 || n >= this.length) throw RangeError(`sourceStart out of bounds`);
            if (r < 0) throw RangeError(`sourceEnd out of bounds`);
            r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
            var i = r - n, a;
            if (this === e && n < t && t < r) for(a = i - 1; a >= 0; --a)e[a + t] = this[a + n];
            else if (i < 1e3 || !b.TYPED_ARRAY_SUPPORT) for(a = 0; a < i; ++a)e[a + t] = this[a + n];
            else Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t);
            return i;
        }, b.prototype.fill = function(e, t, n, r) {
            if (typeof e == `string`) {
                if (typeof t == `string` ? (r = t, t = 0, n = this.length) : typeof n == `string` && (r = n, n = this.length), e.length === 1) {
                    var i = e.charCodeAt(0);
                    i < 256 && (e = i);
                }
                if (r !== void 0 && typeof r != `string`) throw TypeError(`encoding must be a string`);
                if (typeof r == `string` && !b.isEncoding(r)) throw TypeError(`Unknown encoding: ` + r);
            } else typeof e == `number` && (e &= 255);
            if (t < 0 || this.length < t || this.length < n) throw RangeError(`Out of range index`);
            if (n <= t) return this;
            t >>>= 0, n = n === void 0 ? this.length : n >>> 0, e ||= 0;
            var a;
            if (typeof e == `number`) for(a = t; a < n; ++a)this[a] = e;
            else {
                var o = E(e) ? e : Ee(new b(e, r).toString()), s = o.length;
                for(a = 0; a < n - t; ++a)this[a + t] = o[a % s];
            }
            return this;
        }, Ie = /[^+\/0-9A-Za-z-_]/g;
    }));
    Re = s(((e, t)=>{
        t.exports = {};
    }));
    ze = u(s(((e, t)=>{
        var n = typeof Map == `function` && Map.prototype, r = Object.getOwnPropertyDescriptor && n ? Object.getOwnPropertyDescriptor(Map.prototype, `size`) : null, i = n && r && typeof r.get == `function` ? r.get : null, a = n && Map.prototype.forEach, o = typeof Set == `function` && Set.prototype, s = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, `size`) : null, c = o && s && typeof s.get == `function` ? s.get : null, l = o && Set.prototype.forEach, u = typeof WeakMap == `function` && WeakMap.prototype ? WeakMap.prototype.has : null, d = typeof WeakSet == `function` && WeakSet.prototype ? WeakSet.prototype.has : null, f = typeof WeakRef == `function` && WeakRef.prototype ? WeakRef.prototype.deref : null, p = Boolean.prototype.valueOf, m = Object.prototype.toString, ee = Function.prototype.toString, h = String.prototype.match, g = String.prototype.slice, _ = String.prototype.replace, v = String.prototype.toUpperCase, y = String.prototype.toLowerCase, b = RegExp.prototype.test, te = Array.prototype.concat, x = Array.prototype.join, ne = Array.prototype.slice, S = Math.floor, re = typeof BigInt == `function` ? BigInt.prototype.valueOf : null, C = Object.getOwnPropertySymbols, ie = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? Symbol.prototype.toString : null, w = typeof Symbol == `function` && typeof Symbol.iterator == `object`, T = typeof Symbol == `function` && Symbol.toStringTag ? Symbol.toStringTag : null, E = Object.prototype.propertyIsEnumerable, ae = (typeof Reflect == `function` ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
            return e.__proto__;
        } : null);
        function oe(e, t) {
            if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || b.call(/e/, t)) return t;
            var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
            if (typeof e == `number`) {
                var r = e < 0 ? -S(-e) : S(e);
                if (r !== e) {
                    var i = String(r), a = g.call(t, i.length + 1);
                    return _.call(i, n, `$&_`) + `.` + _.call(_.call(a, /([0-9]{3})/g, `$&_`), /_$/, ``);
                }
            }
            return _.call(t, n, `$&_`);
        }
        var D = Re(), O = D.custom, se = ye(O) ? O : null, ce = {
            __proto__: null,
            double: `"`,
            single: `'`
        }, le = {
            __proto__: null,
            double: /(["\\])/g,
            single: /(['\\])/g
        };
        t.exports = function e(t, n, r, o) {
            var s = n || {};
            if (M(s, `quoteStyle`) && !M(ce, s.quoteStyle)) throw TypeError(`option "quoteStyle" must be "single" or "double"`);
            if (M(s, `maxStringLength`) && (typeof s.maxStringLength == `number` ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : s.maxStringLength !== null)) throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
            var u = M(s, `customInspect`) ? s.customInspect : !0;
            if (typeof u != `boolean` && u !== `symbol`) throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
            if (M(s, `indent`) && s.indent !== null && s.indent !== `	` && !(parseInt(s.indent, 10) === s.indent && s.indent > 0)) throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
            if (M(s, `numericSeparator`) && typeof s.numericSeparator != `boolean`) throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');
            var d = s.numericSeparator;
            if (t === void 0) return `undefined`;
            if (t === null) return `null`;
            if (typeof t == `boolean`) return t ? `true` : `false`;
            if (typeof t == `string`) return Oe(t, s);
            if (typeof t == `number`) {
                if (t === 0) return 1 / 0 / t > 0 ? `0` : `-0`;
                var f = String(t);
                return d ? oe(t, f) : f;
            }
            if (typeof t == `bigint`) {
                var m = String(t) + `n`;
                return d ? oe(t, m) : m;
            }
            var ee = s.depth === void 0 ? 5 : s.depth;
            if (r === void 0 && (r = 0), r >= ee && ee > 0 && typeof t == `object`) return fe(t) ? `[Array]` : `[Object]`;
            var h = Me(s, r);
            if (o === void 0) o = [];
            else if (xe(o, t) >= 0) return `[Circular]`;
            function v(t, n, i) {
                if (n && (o = ne.call(o), o.push(n)), i) {
                    var a = {
                        depth: s.depth
                    };
                    return M(s, `quoteStyle`) && (a.quoteStyle = s.quoteStyle), e(t, a, r + 1, o);
                }
                return e(t, s, r + 1, o);
            }
            if (typeof t == `function` && !me(t)) {
                var b = be(t), S = L(t, v);
                return `[Function` + (b ? `: ` + b : ` (anonymous)`) + `]` + (S.length > 0 ? ` { ` + x.call(S, `, `) + ` }` : ``);
            }
            if (ye(t)) {
                var C = w ? _.call(String(t), /^(Symbol\(.*\))_[^)]*$/, `$1`) : ie.call(t);
                return typeof t == `object` && !w ? F(C) : C;
            }
            if (De(t)) {
                for(var O = `<` + y.call(String(t.nodeName)), le = t.attributes || [], k = 0; k < le.length; k++)O += ` ` + le[k].name + `=` + ue(de(le[k].value), `double`, s);
                return O += `>`, t.childNodes && t.childNodes.length && (O += `...`), O += `</` + y.call(String(t.nodeName)) + `>`, O;
            }
            if (fe(t)) {
                if (t.length === 0) return `[]`;
                var j = L(t, v);
                return h && !je(j) ? `[` + I(j, h) + `]` : `[ ` + x.call(j, `, `) + ` ]`;
            }
            if (he(t)) {
                var P = L(t, v);
                return !(`cause` in Error.prototype) && `cause` in t && !E.call(t, `cause`) ? `{ [` + String(t) + `] ` + x.call(te.call(`[cause]: ` + v(t.cause), P), `, `) + ` }` : P.length === 0 ? `[` + String(t) + `]` : `{ [` + String(t) + `] ` + x.call(P, `, `) + ` }`;
            }
            if (typeof t == `object` && u) {
                if (se && typeof t[se] == `function` && D) return D(t, {
                    depth: ee - r
                });
                if (u !== `symbol` && typeof t.inspect == `function`) return t.inspect();
            }
            if (Se(t)) {
                var Ne = [];
                return a && a.call(t, function(e, n) {
                    Ne.push(v(n, t, !0) + ` => ` + v(e, t));
                }), Ae(`Map`, i.call(t), Ne, h);
            }
            if (Te(t)) {
                var R = [];
                return l && l.call(t, function(e) {
                    R.push(v(e, t));
                }), Ae(`Set`, c.call(t), R, h);
            }
            if (Ce(t)) return ke(`WeakMap`);
            if (Ee(t)) return ke(`WeakSet`);
            if (we(t)) return ke(`WeakRef`);
            if (_e(t)) return F(v(Number(t)));
            if (A(t)) return F(v(re.call(t)));
            if (ve(t)) return F(p.call(t));
            if (ge(t)) return F(v(String(t)));
            if (typeof window < `u` && t === window) return `{ [object Window] }`;
            if (typeof globalThis < `u` && t === globalThis || typeof globalThis < `u` && t === globalThis) return `{ [object globalThis] }`;
            if (!pe(t) && !me(t)) {
                var Pe = L(t, v), Fe = ae ? ae(t) === Object.prototype : t instanceof Object || t.constructor === Object, z = t instanceof Object ? `` : `null prototype`, Ie = !Fe && T && Object(t) === t && T in t ? g.call(N(t), 8, -1) : z ? `Object` : ``, Le = (Fe || typeof t.constructor != `function` ? `` : t.constructor.name ? t.constructor.name + ` ` : ``) + (Ie || z ? `[` + x.call(te.call([], Ie || [], z || []), `: `) + `] ` : ``);
                return Pe.length === 0 ? Le + `{}` : h ? Le + `{` + I(Pe, h) + `}` : Le + `{ ` + x.call(Pe, `, `) + ` }`;
            }
            return String(t);
        };
        function ue(e, t, n) {
            var r = ce[n.quoteStyle || t];
            return r + e + r;
        }
        function de(e) {
            return _.call(String(e), /"/g, `&quot;`);
        }
        function k(e) {
            return !T || !(typeof e == `object` && (T in e || e[T] !== void 0));
        }
        function fe(e) {
            return N(e) === `[object Array]` && k(e);
        }
        function pe(e) {
            return N(e) === `[object Date]` && k(e);
        }
        function me(e) {
            return N(e) === `[object RegExp]` && k(e);
        }
        function he(e) {
            return N(e) === `[object Error]` && k(e);
        }
        function ge(e) {
            return N(e) === `[object String]` && k(e);
        }
        function _e(e) {
            return N(e) === `[object Number]` && k(e);
        }
        function ve(e) {
            return N(e) === `[object Boolean]` && k(e);
        }
        function ye(e) {
            if (w) return e && typeof e == `object` && e instanceof Symbol;
            if (typeof e == `symbol`) return !0;
            if (!e || typeof e != `object` || !ie) return !1;
            try {
                return ie.call(e), !0;
            } catch  {}
            return !1;
        }
        function A(e) {
            if (!e || typeof e != `object` || !re) return !1;
            try {
                return re.call(e), !0;
            } catch  {}
            return !1;
        }
        var j = Object.prototype.hasOwnProperty || function(e) {
            return e in this;
        };
        function M(e, t) {
            return j.call(e, t);
        }
        function N(e) {
            return m.call(e);
        }
        function be(e) {
            if (e.name) return e.name;
            var t = h.call(ee.call(e), /^function\s*([\w$]+)/);
            return t ? t[1] : null;
        }
        function xe(e, t) {
            if (e.indexOf) return e.indexOf(t);
            for(var n = 0, r = e.length; n < r; n++)if (e[n] === t) return n;
            return -1;
        }
        function Se(e) {
            if (!i || !e || typeof e != `object`) return !1;
            try {
                i.call(e);
                try {
                    c.call(e);
                } catch  {
                    return !0;
                }
                return e instanceof Map;
            } catch  {}
            return !1;
        }
        function Ce(e) {
            if (!u || !e || typeof e != `object`) return !1;
            try {
                u.call(e, u);
                try {
                    d.call(e, d);
                } catch  {
                    return !0;
                }
                return e instanceof WeakMap;
            } catch  {}
            return !1;
        }
        function we(e) {
            if (!f || !e || typeof e != `object`) return !1;
            try {
                return f.call(e), !0;
            } catch  {}
            return !1;
        }
        function Te(e) {
            if (!c || !e || typeof e != `object`) return !1;
            try {
                c.call(e);
                try {
                    i.call(e);
                } catch  {
                    return !0;
                }
                return e instanceof Set;
            } catch  {}
            return !1;
        }
        function Ee(e) {
            if (!d || !e || typeof e != `object`) return !1;
            try {
                d.call(e, d);
                try {
                    u.call(e, u);
                } catch  {
                    return !0;
                }
                return e instanceof WeakSet;
            } catch  {}
            return !1;
        }
        function De(e) {
            return !e || typeof e != `object` ? !1 : typeof HTMLElement < `u` && e instanceof HTMLElement ? !0 : typeof e.nodeName == `string` && typeof e.getAttribute == `function`;
        }
        function Oe(e, t) {
            if (e.length > t.maxStringLength) {
                var n = e.length - t.maxStringLength, r = `... ` + n + ` more character` + (n > 1 ? `s` : ``);
                return Oe(g.call(e, 0, t.maxStringLength), t) + r;
            }
            var i = le[t.quoteStyle || `single`];
            return i.lastIndex = 0, ue(_.call(_.call(e, i, `\\$1`), /[\x00-\x1f]/g, P), `single`, t);
        }
        function P(e) {
            var t = e.charCodeAt(0), n = {
                8: `b`,
                9: `t`,
                10: `n`,
                12: `f`,
                13: `r`
            }[t];
            return n ? `\\` + n : `\\x` + (t < 16 ? `0` : ``) + v.call(t.toString(16));
        }
        function F(e) {
            return `Object(` + e + `)`;
        }
        function ke(e) {
            return e + ` { ? }`;
        }
        function Ae(e, t, n, r) {
            var i = r ? I(n, r) : x.call(n, `, `);
            return e + ` (` + t + `) {` + i + `}`;
        }
        function je(e) {
            for(var t = 0; t < e.length; t++)if (xe(e[t], `
`) >= 0) return !1;
            return !0;
        }
        function Me(e, t) {
            var n;
            if (e.indent === `	`) n = `	`;
            else if (typeof e.indent == `number` && e.indent > 0) n = x.call(Array(e.indent + 1), ` `);
            else return null;
            return {
                base: n,
                prev: x.call(Array(t + 1), n)
            };
        }
        function I(e, t) {
            if (e.length === 0) return ``;
            var n = `
` + t.prev + t.base;
            return n + x.call(e, `,` + n) + `
` + t.prev;
        }
        function L(e, t) {
            var n = fe(e), r = [];
            if (n) {
                r.length = e.length;
                for(var i = 0; i < e.length; i++)r[i] = M(e, i) ? t(e[i], e) : ``;
            }
            var a = typeof C == `function` ? C(e) : [], o;
            if (w) {
                o = {};
                for(var s = 0; s < a.length; s++)o[`$` + a[s]] = a[s];
            }
            for(var c in e)M(e, c) && (n && String(Number(c)) === c && c < e.length || w && o[`$` + c] instanceof Symbol || (b.call(/[^\w$]/, c) ? r.push(t(c, e) + `: ` + t(e[c], e)) : r.push(c + `: ` + t(e[c], e))));
            if (typeof C == `function`) for(var l = 0; l < a.length; l++)E.call(e, a[l]) && r.push(`[` + t(a[l]) + `]: ` + t(e[a[l]], e));
            return r;
        }
    }))(), 1);
    B = class extends Error {
        constructor(e){
            super(e), this.name = `CompactError`;
        }
    };
    Be = function(e, t) {
        if (!e) throw new B(`failed assert: ${t}`);
    };
    Ve = function(e, t, n, r, i) {
        throw new B(`type error: ${e} ${t} at ${n}; expected value of type ${r} but received ${(0, ze.default)(i)}`);
    };
    var He = `/assets/midnight_onchain_runtime_wasm_bg-D2U4EkPt.wasm`;
    Le();
    let V;
    Ue = async (e = {}, t)=>{
        let n;
        if (t.startsWith(`data:`)) {
            let r = t.replace(/^data:.*?base64,/, ``), i;
            if (typeof b == `function` && typeof b.from == `function`) i = b.from(r, `base64`);
            else if (typeof atob == `function`) {
                let e = atob(r);
                i = new Uint8Array(e.length);
                for(let t = 0; t < e.length; t++)i[t] = e.charCodeAt(t);
            } else throw Error(`Cannot decode base64-encoded data URL`);
            n = await WebAssembly.instantiate(i, e);
        } else {
            let r = await fetch(t), i = r.headers.get(`Content-Type`) || ``;
            if (`instantiateStreaming` in WebAssembly && i.startsWith(`application/wasm`)) n = await WebAssembly.instantiateStreaming(r, e);
            else {
                let t = await r.arrayBuffer();
                n = await WebAssembly.instantiate(t, e);
            }
        }
        return n.instance.exports;
    };
    function We(e) {
        V = e;
    }
    function H(e) {
        let t = V.__externref_table_alloc();
        return V.__wbindgen_export_2.set(t, e), t;
    }
    function U(e, t) {
        try {
            return e.apply(this, t);
        } catch (e) {
            let t = H(e);
            V.__wbindgen_exn_store(t);
        }
    }
    var Ge = null;
    function Ke() {
        return (Ge === null || Ge.byteLength === 0) && (Ge = new Uint8Array(V.memory.buffer)), Ge;
    }
    var qe = new TextDecoder(`utf-8`, {
        ignoreBOM: !0,
        fatal: !0
    });
    qe.decode();
    var Je = 2146435072, Ye = 0;
    function Xe(e, t) {
        return Ye += t, Ye >= Je && (qe = new TextDecoder(`utf-8`, {
            ignoreBOM: !0,
            fatal: !0
        }), qe.decode(), Ye = t), qe.decode(Ke().subarray(e, e + t));
    }
    function W(e, t) {
        return e >>>= 0, Xe(e, t);
    }
    var G = 0, Ze = new TextEncoder;
    `encodeInto` in Ze || (Ze.encodeInto = function(e, t) {
        let n = Ze.encode(e);
        return t.set(n), {
            read: e.length,
            written: n.length
        };
    });
    function K(e, t, n) {
        if (n === void 0) {
            let n = Ze.encode(e), r = t(n.length, 1) >>> 0;
            return Ke().subarray(r, r + n.length).set(n), G = n.length, r;
        }
        let r = e.length, i = t(r, 1) >>> 0, a = Ke(), o = 0;
        for(; o < r; o++){
            let t = e.charCodeAt(o);
            if (t > 127) break;
            a[i + o] = t;
        }
        if (o !== r) {
            o !== 0 && (e = e.slice(o)), i = n(i, r, r = o + e.length * 3, 1) >>> 0;
            let t = Ke().subarray(i + o, i + r), a = Ze.encodeInto(e, t);
            o += a.written, i = n(i, r, o, 1) >>> 0;
        }
        return G = o, i;
    }
    var Qe = null;
    function q() {
        return (Qe === null || Qe.buffer.detached === !0 || Qe.buffer.detached === void 0 && Qe.buffer !== V.memory.buffer) && (Qe = new DataView(V.memory.buffer)), Qe;
    }
    function J(e) {
        return e == null;
    }
    function $e(e, t) {
        return e >>>= 0, Ke().subarray(e / 1, e / 1 + t);
    }
    function et(e) {
        let t = typeof e;
        if (t == `number` || t == `boolean` || e == null) return `${e}`;
        if (t == `string`) return `"${e}"`;
        if (t == `symbol`) {
            let t = e.description;
            return t == null ? `Symbol` : `Symbol(${t})`;
        }
        if (t == `function`) {
            let t = e.name;
            return typeof t == `string` && t.length > 0 ? `Function(${t})` : `Function`;
        }
        if (Array.isArray(e)) {
            let t = e.length, n = `[`;
            t > 0 && (n += et(e[0]));
            for(let r = 1; r < t; r++)n += `, ` + et(e[r]);
            return n += `]`, n;
        }
        let n = /\[object ([^\]]+)\]/.exec(toString.call(e)), r;
        if (n && n.length > 1) r = n[1];
        else return toString.call(e);
        if (r == `Object`) try {
            return `Object(` + JSON.stringify(e) + `)`;
        } catch  {
            return `Object`;
        }
        return e instanceof Error ? `${e.name}: ${e.message}\n${e.stack}` : r;
    }
    var tt = typeof FinalizationRegistry > `u` ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>{
        V.__wbindgen_export_5.get(e.dtor)(e.a, e.b);
    });
    function nt(e, t, n, r) {
        let i = {
            a: e,
            b: t,
            cnt: 1,
            dtor: n
        }, a = (...e)=>{
            i.cnt++;
            let t = i.a;
            i.a = 0;
            try {
                return r(t, i.b, ...e);
            } finally{
                --i.cnt === 0 ? (V.__wbindgen_export_5.get(i.dtor)(t, i.b), tt.unregister(i)) : i.a = t;
            }
        };
        return a.original = i, tt.register(a, i, i), a;
    }
    function Y(e) {
        let t = V.__wbindgen_export_2.get(e);
        return V.__externref_table_dealloc(e), t;
    }
    rt = function() {
        let e, t;
        try {
            let i = V.dummyContractAddress();
            var n = i[0], r = i[1];
            if (i[3]) throw n = 0, r = 0, Y(i[2]);
            return e = n, t = r, W(n, r);
        } finally{
            V.__wbindgen_free(e, t, 1);
        }
    };
    function it(e) {
        let t = V.bigIntToValue(e);
        if (t[2]) throw Y(t[1]);
        return Y(t[0]);
    }
    at = function(e) {
        let t, n;
        try {
            let a = K(e, V.__wbindgen_malloc, V.__wbindgen_realloc), o = G, s = V.signatureVerifyingKey(a, o);
            var r = s[0], i = s[1];
            if (s[3]) throw r = 0, i = 0, Y(s[2]);
            return t = r, n = i, W(r, i);
        } finally{
            V.__wbindgen_free(t, n, 1);
        }
    };
    function ot() {
        let e = V.maxField();
        if (e[2]) throw Y(e[1]);
        return Y(e[0]);
    }
    st = function() {
        let e, t;
        try {
            let i = V.sampleSigningKey();
            var n = i[0], r = i[1];
            if (i[3]) throw n = 0, r = 0, Y(i[2]);
            return e = n, t = r, W(n, r);
        } finally{
            V.__wbindgen_free(e, t, 1);
        }
    };
    function ct(e, t) {
        let n = V.persistentHash(e, t);
        if (n[2]) throw Y(n[1]);
        return Y(n[0]);
    }
    function lt(e) {
        let t = V.valueToBigInt(e);
        if (t[2]) throw Y(t[1]);
        return Y(t[0]);
    }
    function ut(e) {
        let t = K(e, V.__wbindgen_malloc, V.__wbindgen_realloc), n = G, r = V.encodeContractAddress(t, n);
        if (r[2]) throw Y(r[1]);
        return Y(r[0]);
    }
    function dt(e) {
        let t, n;
        try {
            let a = V.decodeCoinPublicKey(e);
            var r = a[0], i = a[1];
            if (a[3]) throw r = 0, i = 0, Y(a[2]);
            return t = r, n = i, W(r, i);
        } finally{
            V.__wbindgen_free(t, n, 1);
        }
    }
    function ft(e) {
        let t = K(e, V.__wbindgen_malloc, V.__wbindgen_realloc), n = G, r = V.encodeCoinPublicKey(t, n);
        if (r[2]) throw Y(r[1]);
        return Y(r[0]);
    }
    function pt(e) {
        let t = V.encodeShieldedCoinInfo(e);
        if (t[2]) throw Y(t[1]);
        return Y(t[0]);
    }
    function mt(e) {
        let t = V.decodeShieldedCoinInfo(e);
        if (t[2]) throw Y(t[1]);
        return Y(t[0]);
    }
    function ht(e) {
        let t, n;
        try {
            let a = V.decodeContractAddress(e);
            var r = a[0], i = a[1];
            if (a[3]) throw r = 0, i = 0, Y(a[2]);
            return t = r, n = i, W(r, i);
        } finally{
            V.__wbindgen_free(t, n, 1);
        }
    }
    function gt(e) {
        let t = V.decodeQualifiedShieldedCoinInfo(e);
        if (t[2]) throw Y(t[1]);
        return Y(t[0]);
    }
    function _t(e) {
        let t = V.encodeQualifiedShieldedCoinInfo(e);
        if (t[2]) throw Y(t[1]);
        return Y(t[0]);
    }
    function X(e, t) {
        if (!(e instanceof t)) throw Error(`expected instance of ${t.name}`);
    }
    function vt(e, t) {
        e >>>= 0;
        let n = q(), r = [];
        for(let i = e; i < e + 4 * t; i += 4)r.push(V.__wbindgen_export_2.get(n.getUint32(i, !0)));
        return V.__externref_drop_slice(e, t), r;
    }
    function yt(e, t, n) {
        V.closure690_externref_shim(e, t, n);
    }
    function bt(e, t, n, r) {
        V.closure730_externref_shim(e, t, n, r);
    }
    let xt, St;
    xt = [
        `bytes`
    ];
    St = typeof FinalizationRegistry > `u` ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>V.__wbg_chargedstate_free(e >>> 0, 1));
    Z = class e {
        static __wrap(t) {
            t >>>= 0;
            let n = Object.create(e.prototype);
            return n.__wbg_ptr = t, St.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            let e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, St.unregister(this), e;
        }
        free() {
            let e = this.__destroy_into_raw();
            V.__wbg_chargedstate_free(e, 0);
        }
        constructor(e){
            return X(e, $), this.__wbg_ptr = V.chargedstate_new(e.__wbg_ptr) >>> 0, St.register(this, this.__wbg_ptr, this), this;
        }
        get state() {
            let e = V.chargedstate_state(this.__wbg_ptr);
            return $.__wrap(e);
        }
        toString(e) {
            let t, n;
            try {
                let r = V.chargedstate_toString(this.__wbg_ptr, J(e) ? 16777215 : e ? 1 : 0);
                return t = r[0], n = r[1], W(r[0], r[1]);
            } finally{
                V.__wbindgen_free(t, n, 1);
            }
        }
    };
    Symbol.dispose && (Z.prototype[Symbol.dispose] = Z.prototype.free);
    let Ct;
    Ct = typeof FinalizationRegistry > `u` ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>V.__wbg_contractmaintenanceauthority_free(e >>> 0, 1));
    wt = class e {
        static __wrap(t) {
            t >>>= 0;
            let n = Object.create(e.prototype);
            return n.__wbg_ptr = t, Ct.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            let e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Ct.unregister(this), e;
        }
        free() {
            let e = this.__destroy_into_raw();
            V.__wbg_contractmaintenanceauthority_free(e, 0);
        }
        static deserialize(t) {
            let n = V.contractmaintenanceauthority_deserialize(t);
            if (n[2]) throw Y(n[1]);
            return e.__wrap(n[0]);
        }
        constructor(e, t, n){
            let r = V.contractmaintenanceauthority_new(e, t, J(n) ? 0 : H(n));
            if (r[2]) throw Y(r[1]);
            return this.__wbg_ptr = r[0] >>> 0, Ct.register(this, this.__wbg_ptr, this), this;
        }
        get counter() {
            return V.contractmaintenanceauthority_counter(this.__wbg_ptr);
        }
        get committee() {
            let e = V.contractmaintenanceauthority_committee(this.__wbg_ptr);
            if (e[2]) throw Y(e[1]);
            return Y(e[0]);
        }
        serialize() {
            let e = V.contractmaintenanceauthority_serialize(this.__wbg_ptr);
            if (e[2]) throw Y(e[1]);
            return Y(e[0]);
        }
        get threshold() {
            return V.contractmaintenanceauthority_threshold(this.__wbg_ptr) >>> 0;
        }
        toString(e) {
            let t, n;
            try {
                let r = V.contractmaintenanceauthority_toString(this.__wbg_ptr, J(e) ? 16777215 : e ? 1 : 0);
                return t = r[0], n = r[1], W(r[0], r[1]);
            } finally{
                V.__wbindgen_free(t, n, 1);
            }
        }
    };
    Symbol.dispose && (wt.prototype[Symbol.dispose] = wt.prototype.free);
    let Tt;
    Tt = typeof FinalizationRegistry > `u` ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>V.__wbg_contractoperation_free(e >>> 0, 1));
    Et = class e {
        static __wrap(t) {
            t >>>= 0;
            let n = Object.create(e.prototype);
            return n.__wbg_ptr = t, Tt.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            let e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Tt.unregister(this), e;
        }
        free() {
            let e = this.__destroy_into_raw();
            V.__wbg_contractoperation_free(e, 0);
        }
        static deserialize(t) {
            let n = V.contractoperation_deserialize(t);
            if (n[2]) throw Y(n[1]);
            return e.__wrap(n[0]);
        }
        get verifierKey() {
            let e = V.contractoperation_verifier_key(this.__wbg_ptr);
            if (e[2]) throw Y(e[1]);
            return Y(e[0]);
        }
        set verifierKey(e) {
            let t = V.contractoperation_set_verifier_key(this.__wbg_ptr, e);
            if (t[1]) throw Y(t[0]);
        }
        constructor(){
            let e = V.contractoperation_new();
            if (e[2]) throw Y(e[1]);
            return this.__wbg_ptr = e[0] >>> 0, Tt.register(this, this.__wbg_ptr, this), this;
        }
        serialize() {
            let e = V.contractoperation_serialize(this.__wbg_ptr);
            if (e[2]) throw Y(e[1]);
            return Y(e[0]);
        }
        toString(e) {
            let t, n;
            try {
                let r = V.contractoperation_toString(this.__wbg_ptr, J(e) ? 16777215 : e ? 1 : 0);
                return t = r[0], n = r[1], W(r[0], r[1]);
            } finally{
                V.__wbindgen_free(t, n, 1);
            }
        }
    };
    Symbol.dispose && (Et.prototype[Symbol.dispose] = Et.prototype.free);
    let Dt;
    Dt = typeof FinalizationRegistry > `u` ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>V.__wbg_contractstate_free(e >>> 0, 1));
    Ot = class e {
        static __wrap(t) {
            t >>>= 0;
            let n = Object.create(e.prototype);
            return n.__wbg_ptr = t, Dt.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            let e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Dt.unregister(this), e;
        }
        free() {
            let e = this.__destroy_into_raw();
            V.__wbg_contractstate_free(e, 0);
        }
        operations() {
            let e = V.contractstate_operations(this.__wbg_ptr);
            var t = vt(e[0], e[1]).slice();
            return V.__wbindgen_free(e[0], e[1] * 4, 4), t;
        }
        static deserialize(t) {
            let n = V.contractstate_deserialize(t);
            if (n[2]) throw Y(n[1]);
            return e.__wrap(n[0]);
        }
        set balance(e) {
            let t = V.contractstate_set_balance(this.__wbg_ptr, e);
            if (t[1]) throw Y(t[0]);
        }
        setOperation(e, t) {
            X(t, Et);
            let n = V.contractstate_setOperation(this.__wbg_ptr, e, t.__wbg_ptr);
            if (n[1]) throw Y(n[0]);
        }
        get maintenanceAuthority() {
            let e = V.contractstate_maintenance_authority(this.__wbg_ptr);
            return wt.__wrap(e);
        }
        set maintenanceAuthority(e) {
            X(e, wt), V.contractstate_set_maintenance_authority(this.__wbg_ptr, e.__wbg_ptr);
        }
        constructor(){
            return this.__wbg_ptr = V.contractstate_new() >>> 0, Dt.register(this, this.__wbg_ptr, this), this;
        }
        get data() {
            let e = V.contractstate_data(this.__wbg_ptr);
            return Z.__wrap(e);
        }
        query(e, t) {
            X(t, Q);
            let n = V.contractstate_query(this.__wbg_ptr, e, t.__wbg_ptr);
            if (n[2]) throw Y(n[1]);
            return Y(n[0]);
        }
        get balance() {
            let e = V.contractstate_balance(this.__wbg_ptr);
            if (e[2]) throw Y(e[1]);
            return Y(e[0]);
        }
        set data(e) {
            X(e, Z), V.contractstate_set_data(this.__wbg_ptr, e.__wbg_ptr);
        }
        operation(e) {
            let t = V.contractstate_operation(this.__wbg_ptr, e);
            if (t[2]) throw Y(t[1]);
            return t[0] === 0 ? void 0 : Et.__wrap(t[0]);
        }
        serialize() {
            let e = V.contractstate_serialize(this.__wbg_ptr);
            if (e[2]) throw Y(e[1]);
            return Y(e[0]);
        }
        toString(e) {
            let t, n;
            try {
                let r = V.contractstate_toString(this.__wbg_ptr, J(e) ? 16777215 : e ? 1 : 0);
                return t = r[0], n = r[1], W(r[0], r[1]);
            } finally{
                V.__wbindgen_free(t, n, 1);
            }
        }
    };
    Symbol.dispose && (Ot.prototype[Symbol.dispose] = Ot.prototype.free);
    let kt;
    kt = typeof FinalizationRegistry > `u` ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>V.__wbg_costmodel_free(e >>> 0, 1));
    Q = class e {
        static __wrap(t) {
            t >>>= 0;
            let n = Object.create(e.prototype);
            return n.__wbg_ptr = t, kt.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            let e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, kt.unregister(this), e;
        }
        free() {
            let e = this.__destroy_into_raw();
            V.__wbg_costmodel_free(e, 0);
        }
        static initialCostModel() {
            let t = V.costmodel_initialCostModel();
            return e.__wrap(t);
        }
        constructor(){
            let e = V.costmodel_new();
            if (e[2]) throw Y(e[1]);
            return this.__wbg_ptr = e[0] >>> 0, kt.register(this, this.__wbg_ptr, this), this;
        }
        toString(e) {
            let t, n;
            try {
                let r = V.costmodel_toString(this.__wbg_ptr, J(e) ? 16777215 : e ? 1 : 0);
                return t = r[0], n = r[1], W(r[0], r[1]);
            } finally{
                V.__wbindgen_free(t, n, 1);
            }
        }
    };
    Symbol.dispose && (Q.prototype[Symbol.dispose] = Q.prototype.free);
    var At = typeof FinalizationRegistry > `u` ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>V.__wbg_intounderlyingbytesource_free(e >>> 0, 1)), jt = class {
        __destroy_into_raw() {
            let e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, At.unregister(this), e;
        }
        free() {
            let e = this.__destroy_into_raw();
            V.__wbg_intounderlyingbytesource_free(e, 0);
        }
        get autoAllocateChunkSize() {
            return V.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>> 0;
        }
        pull(e) {
            return V.intounderlyingbytesource_pull(this.__wbg_ptr, e);
        }
        start(e) {
            V.intounderlyingbytesource_start(this.__wbg_ptr, e);
        }
        get type() {
            return xt[V.intounderlyingbytesource_type(this.__wbg_ptr)];
        }
        cancel() {
            let e = this.__destroy_into_raw();
            V.intounderlyingbytesource_cancel(e);
        }
    };
    Symbol.dispose && (jt.prototype[Symbol.dispose] = jt.prototype.free);
    var Mt = typeof FinalizationRegistry > `u` ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>V.__wbg_intounderlyingsink_free(e >>> 0, 1)), Nt = class {
        __destroy_into_raw() {
            let e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Mt.unregister(this), e;
        }
        free() {
            let e = this.__destroy_into_raw();
            V.__wbg_intounderlyingsink_free(e, 0);
        }
        abort(e) {
            let t = this.__destroy_into_raw();
            return V.intounderlyingsink_abort(t, e);
        }
        close() {
            let e = this.__destroy_into_raw();
            return V.intounderlyingsink_close(e);
        }
        write(e) {
            return V.intounderlyingsink_write(this.__wbg_ptr, e);
        }
    };
    Symbol.dispose && (Nt.prototype[Symbol.dispose] = Nt.prototype.free);
    var Pt = typeof FinalizationRegistry > `u` ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>V.__wbg_intounderlyingsource_free(e >>> 0, 1)), Ft = class {
        __destroy_into_raw() {
            let e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Pt.unregister(this), e;
        }
        free() {
            let e = this.__destroy_into_raw();
            V.__wbg_intounderlyingsource_free(e, 0);
        }
        pull(e) {
            return V.intounderlyingsource_pull(this.__wbg_ptr, e);
        }
        cancel() {
            let e = this.__destroy_into_raw();
            V.intounderlyingsource_cancel(e);
        }
    };
    Symbol.dispose && (Ft.prototype[Symbol.dispose] = Ft.prototype.free);
    let It;
    It = typeof FinalizationRegistry > `u` ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>V.__wbg_querycontext_free(e >>> 0, 1));
    Lt = class e {
        static __wrap(t) {
            t >>>= 0;
            let n = Object.create(e.prototype);
            return n.__wbg_ptr = t, It.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            let e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, It.unregister(this), e;
        }
        free() {
            let e = this.__destroy_into_raw();
            V.__wbg_querycontext_free(e, 0);
        }
        get comIndices() {
            let e = V.querycontext_com_indices(this.__wbg_ptr);
            if (e[2]) throw Y(e[1]);
            return Y(e[0]);
        }
        set effects(e) {
            let t = V.querycontext_set_effects(this.__wbg_ptr, e);
            if (t[1]) throw Y(t[0]);
        }
        toVmStack() {
            let e = V.querycontext_toVmStack(this.__wbg_ptr);
            return Jt.__wrap(e);
        }
        runTranscript(t, n) {
            X(n, Q);
            let r = V.querycontext_runTranscript(this.__wbg_ptr, t, n.__wbg_ptr);
            if (r[2]) throw Y(r[1]);
            return e.__wrap(r[0]);
        }
        insertCommitment(t, n) {
            let r = K(t, V.__wbindgen_malloc, V.__wbindgen_realloc), i = G, a = V.querycontext_insertCommitment(this.__wbg_ptr, r, i, n);
            if (a[2]) throw Y(a[1]);
            return e.__wrap(a[0]);
        }
        constructor(e, t){
            X(e, Z);
            let n = K(t, V.__wbindgen_malloc, V.__wbindgen_realloc), r = G, i = V.querycontext_new(e.__wbg_ptr, n, r);
            if (i[2]) throw Y(i[1]);
            return this.__wbg_ptr = i[0] >>> 0, It.register(this, this.__wbg_ptr, this), this;
        }
        get block() {
            let e = V.querycontext_block(this.__wbg_ptr);
            if (e[2]) throw Y(e[1]);
            return Y(e[0]);
        }
        query(e, t, n) {
            X(t, Q);
            let r = V.querycontext_query(this.__wbg_ptr, e, t.__wbg_ptr, n);
            if (r[2]) throw Y(r[1]);
            return zt.__wrap(r[0]);
        }
        get state() {
            let e = V.querycontext_state(this.__wbg_ptr);
            return Z.__wrap(e);
        }
        get address() {
            let e, t;
            try {
                let i = V.querycontext_address(this.__wbg_ptr);
                var n = i[0], r = i[1];
                if (i[3]) throw n = 0, r = 0, Y(i[2]);
                return e = n, t = r, W(n, r);
            } finally{
                V.__wbindgen_free(e, t, 1);
            }
        }
        get effects() {
            let e = V.querycontext_effects(this.__wbg_ptr);
            if (e[2]) throw Y(e[1]);
            return Y(e[0]);
        }
        qualify(e) {
            let t = V.querycontext_qualify(this.__wbg_ptr, e);
            if (t[2]) throw Y(t[1]);
            return Y(t[0]);
        }
        set block(e) {
            let t = V.querycontext_set_block(this.__wbg_ptr, e);
            if (t[1]) throw Y(t[0]);
        }
        toString(e) {
            let t, n;
            try {
                let r = V.querycontext_toString(this.__wbg_ptr, J(e) ? 16777215 : e ? 1 : 0);
                return t = r[0], n = r[1], W(r[0], r[1]);
            } finally{
                V.__wbindgen_free(t, n, 1);
            }
        }
    };
    Symbol.dispose && (Lt.prototype[Symbol.dispose] = Lt.prototype.free);
    var Rt = typeof FinalizationRegistry > `u` ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>V.__wbg_queryresults_free(e >>> 0, 1)), zt = class e {
        static __wrap(t) {
            t >>>= 0;
            let n = Object.create(e.prototype);
            return n.__wbg_ptr = t, Rt.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            let e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Rt.unregister(this), e;
        }
        free() {
            let e = this.__destroy_into_raw();
            V.__wbg_queryresults_free(e, 0);
        }
        constructor(){
            let e = V.queryresults_new();
            if (e[2]) throw Y(e[1]);
            return this.__wbg_ptr = e[0] >>> 0, Rt.register(this, this.__wbg_ptr, this), this;
        }
        get events() {
            let e = V.queryresults_events(this.__wbg_ptr);
            if (e[2]) throw Y(e[1]);
            return Y(e[0]);
        }
        get context() {
            let e = V.queryresults_context(this.__wbg_ptr);
            return Lt.__wrap(e);
        }
        get gasCost() {
            let e = V.queryresults_gas_cost(this.__wbg_ptr);
            if (e[2]) throw Y(e[1]);
            return Y(e[0]);
        }
        toString(e) {
            let t, n;
            try {
                let r = V.queryresults_toString(this.__wbg_ptr, J(e) ? 16777215 : e ? 1 : 0);
                return t = r[0], n = r[1], W(r[0], r[1]);
            } finally{
                V.__wbindgen_free(t, n, 1);
            }
        }
    };
    Symbol.dispose && (zt.prototype[Symbol.dispose] = zt.prototype.free);
    var Bt = typeof FinalizationRegistry > `u` ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>V.__wbg_stateboundedmerkletree_free(e >>> 0, 1)), Vt = class e {
        static __wrap(t) {
            t >>>= 0;
            let n = Object.create(e.prototype);
            return n.__wbg_ptr = t, Bt.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            let e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Bt.unregister(this), e;
        }
        free() {
            let e = this.__destroy_into_raw();
            V.__wbg_stateboundedmerkletree_free(e, 0);
        }
        pathForLeaf(e, t) {
            let n = V.stateboundedmerkletree_pathForLeaf(this.__wbg_ptr, e, t);
            if (n[2]) throw Y(n[1]);
            return Y(n[0]);
        }
        findPathForLeaf(e) {
            let t = V.stateboundedmerkletree_findPathForLeaf(this.__wbg_ptr, e);
            if (t[2]) throw Y(t[1]);
            return Y(t[0]);
        }
        root() {
            let e = V.stateboundedmerkletree_root(this.__wbg_ptr);
            if (e[2]) throw Y(e[1]);
            return Y(e[0]);
        }
        constructor(e){
            return this.__wbg_ptr = V.stateboundedmerkletree_blank(e) >>> 0, Bt.register(this, this.__wbg_ptr, this), this;
        }
        get height() {
            return V.stateboundedmerkletree_height(this.__wbg_ptr);
        }
        rehash() {
            let t = V.stateboundedmerkletree_rehash(this.__wbg_ptr);
            return e.__wrap(t);
        }
        update(t, n) {
            let r = V.stateboundedmerkletree_update(this.__wbg_ptr, t, n);
            if (r[2]) throw Y(r[1]);
            return e.__wrap(r[0]);
        }
        collapse(t, n) {
            let r = V.stateboundedmerkletree_collapse(this.__wbg_ptr, t, n);
            return e.__wrap(r);
        }
        toString(e) {
            let t, n;
            try {
                let r = V.stateboundedmerkletree_toString(this.__wbg_ptr, J(e) ? 16777215 : e ? 1 : 0);
                return t = r[0], n = r[1], W(r[0], r[1]);
            } finally{
                V.__wbindgen_free(t, n, 1);
            }
        }
    };
    Symbol.dispose && (Vt.prototype[Symbol.dispose] = Vt.prototype.free);
    let Ht;
    Ht = typeof FinalizationRegistry > `u` ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>V.__wbg_statemap_free(e >>> 0, 1));
    Ut = class e {
        static __wrap(t) {
            t >>>= 0;
            let n = Object.create(e.prototype);
            return n.__wbg_ptr = t, Ht.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            let e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Ht.unregister(this), e;
        }
        free() {
            let e = this.__destroy_into_raw();
            V.__wbg_statemap_free(e, 0);
        }
        get(e) {
            let t = V.statemap_get(this.__wbg_ptr, e);
            if (t[2]) throw Y(t[1]);
            return t[0] === 0 ? void 0 : $.__wrap(t[0]);
        }
        constructor(){
            return this.__wbg_ptr = V.statemap_new() >>> 0, Ht.register(this, this.__wbg_ptr, this), this;
        }
        keys() {
            let e = V.statemap_keys(this.__wbg_ptr);
            if (e[3]) throw Y(e[2]);
            var t = vt(e[0], e[1]).slice();
            return V.__wbindgen_free(e[0], e[1] * 4, 4), t;
        }
        insert(t, n) {
            X(n, $);
            let r = V.statemap_insert(this.__wbg_ptr, t, n.__wbg_ptr);
            if (r[2]) throw Y(r[1]);
            return e.__wrap(r[0]);
        }
        remove(t) {
            let n = V.statemap_remove(this.__wbg_ptr, t);
            if (n[2]) throw Y(n[1]);
            return e.__wrap(n[0]);
        }
        toString(e) {
            let t, n;
            try {
                let r = V.statemap_toString(this.__wbg_ptr, J(e) ? 16777215 : e ? 1 : 0);
                return t = r[0], n = r[1], W(r[0], r[1]);
            } finally{
                V.__wbindgen_free(t, n, 1);
            }
        }
    };
    Symbol.dispose && (Ut.prototype[Symbol.dispose] = Ut.prototype.free);
    let Wt;
    Wt = typeof FinalizationRegistry > `u` ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>V.__wbg_statevalue_free(e >>> 0, 1));
    $ = class e {
        static __wrap(t) {
            t >>>= 0;
            let n = Object.create(e.prototype);
            return n.__wbg_ptr = t, Wt.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            let e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Wt.unregister(this), e;
        }
        free() {
            let e = this.__destroy_into_raw();
            V.__wbg_statevalue_free(e, 0);
        }
        arrayPush(t) {
            X(t, e);
            let n = V.statevalue_arrayPush(this.__wbg_ptr, t.__wbg_ptr);
            if (n[2]) throw Y(n[1]);
            return e.__wrap(n[0]);
        }
        asBoundedMerkleTree() {
            let e = V.statevalue_asBoundedMerkleTree(this.__wbg_ptr);
            if (e[2]) throw Y(e[1]);
            return e[0] === 0 ? void 0 : Vt.__wrap(e[0]);
        }
        static newBoundedMerkleTree(t) {
            X(t, Vt);
            let n = V.statevalue_newBoundedMerkleTree(t.__wbg_ptr);
            return e.__wrap(n);
        }
        constructor(){
            let e = V.statevalue_new();
            if (e[2]) throw Y(e[1]);
            return this.__wbg_ptr = e[0] >>> 0, Wt.register(this, this.__wbg_ptr, this), this;
        }
        type() {
            let e, t;
            try {
                let n = V.statevalue_type(this.__wbg_ptr);
                return e = n[0], t = n[1], W(n[0], n[1]);
            } finally{
                V.__wbindgen_free(e, t, 1);
            }
        }
        asMap() {
            let e = V.statevalue_asMap(this.__wbg_ptr);
            if (e[2]) throw Y(e[1]);
            return e[0] === 0 ? void 0 : Ut.__wrap(e[0]);
        }
        static decode(t) {
            let n = V.statevalue_decode(t);
            if (n[2]) throw Y(n[1]);
            return e.__wrap(n[0]);
        }
        encode() {
            let e = V.statevalue_encode(this.__wbg_ptr);
            if (e[2]) throw Y(e[1]);
            return Y(e[0]);
        }
        asCell() {
            let e = V.statevalue_asCell(this.__wbg_ptr);
            if (e[2]) throw Y(e[1]);
            return Y(e[0]);
        }
        static newMap(t) {
            X(t, Ut);
            let n = V.statevalue_newMap(t.__wbg_ptr);
            return e.__wrap(n);
        }
        asArray() {
            let e = V.statevalue_asArray(this.__wbg_ptr);
            if (e[3]) throw Y(e[2]);
            let t;
            return e[0] !== 0 && (t = vt(e[0], e[1]).slice(), V.__wbindgen_free(e[0], e[1] * 4, 4)), t;
        }
        logSize() {
            return V.statevalue_logSize(this.__wbg_ptr) >>> 0;
        }
        static newCell(t) {
            let n = V.statevalue_newCell(t);
            if (n[2]) throw Y(n[1]);
            return e.__wrap(n[0]);
        }
        static newNull() {
            let t = V.statevalue_newNull();
            return e.__wrap(t);
        }
        static newArray() {
            let t = V.statevalue_newArray();
            return e.__wrap(t);
        }
        toString(e) {
            let t, n;
            try {
                let r = V.statevalue_toString(this.__wbg_ptr, J(e) ? 16777215 : e ? 1 : 0);
                return t = r[0], n = r[1], W(r[0], r[1]);
            } finally{
                V.__wbindgen_free(t, n, 1);
            }
        }
    };
    Symbol.dispose && ($.prototype[Symbol.dispose] = $.prototype.free);
    var Gt = typeof FinalizationRegistry > `u` ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>V.__wbg_vmresults_free(e >>> 0, 1)), Kt = class e {
        static __wrap(t) {
            t >>>= 0;
            let n = Object.create(e.prototype);
            return n.__wbg_ptr = t, Gt.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            let e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Gt.unregister(this), e;
        }
        free() {
            let e = this.__destroy_into_raw();
            V.__wbg_vmresults_free(e, 0);
        }
        constructor(){
            let e = V.vmresults_new();
            if (e[2]) throw Y(e[1]);
            return $.__wrap(e[0]);
        }
        get stack() {
            let e = V.vmresults_stack(this.__wbg_ptr);
            return Jt.__wrap(e);
        }
        get events() {
            let e = V.vmresults_events(this.__wbg_ptr);
            if (e[2]) throw Y(e[1]);
            return Y(e[0]);
        }
        get gasCost() {
            let e = V.vmresults_gas_cost(this.__wbg_ptr);
            if (e[2]) throw Y(e[1]);
            return Y(e[0]);
        }
        toString(e) {
            let t, n;
            try {
                let r = V.vmresults_toString(this.__wbg_ptr, J(e) ? 16777215 : e ? 1 : 0);
                return t = r[0], n = r[1], W(r[0], r[1]);
            } finally{
                V.__wbindgen_free(t, n, 1);
            }
        }
    };
    Symbol.dispose && (Kt.prototype[Symbol.dispose] = Kt.prototype.free);
    var qt = typeof FinalizationRegistry > `u` ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>V.__wbg_vmstack_free(e >>> 0, 1)), Jt = class e {
        static __wrap(t) {
            t >>>= 0;
            let n = Object.create(e.prototype);
            return n.__wbg_ptr = t, qt.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            let e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, qt.unregister(this), e;
        }
        free() {
            let e = this.__destroy_into_raw();
            V.__wbg_vmstack_free(e, 0);
        }
        removeLast() {
            V.vmstack_removeLast(this.__wbg_ptr);
        }
        get(e) {
            let t = V.vmstack_get(this.__wbg_ptr, e);
            return t === 0 ? void 0 : $.__wrap(t);
        }
        constructor(){
            return this.__wbg_ptr = V.vmstack_new() >>> 0, qt.register(this, this.__wbg_ptr, this), this;
        }
        push(e, t) {
            X(e, $), V.vmstack_push(this.__wbg_ptr, e.__wbg_ptr, t);
        }
        length() {
            return V.vmstack_length(this.__wbg_ptr) >>> 0;
        }
        isStrong(e) {
            let t = V.vmstack_isStrong(this.__wbg_ptr, e);
            return t === 16777215 ? void 0 : t !== 0;
        }
        toString(e) {
            let t, n;
            try {
                let r = V.vmstack_toString(this.__wbg_ptr, J(e) ? 16777215 : e ? 1 : 0);
                return t = r[0], n = r[1], W(r[0], r[1]);
            } finally{
                V.__wbindgen_free(t, n, 1);
            }
        }
    };
    Symbol.dispose && (Jt.prototype[Symbol.dispose] = Jt.prototype.free);
    function Yt() {
        return U(function(e) {
            return BigInt(e);
        }, arguments);
    }
    function Xt(e) {
        return BigInt(e);
    }
    function Zt(e, t) {
        return Error(W(e, t));
    }
    function Qt(e) {
        return Number(e);
    }
    function $t(e, t) {
        let n = K(String(t), V.__wbindgen_malloc, V.__wbindgen_realloc), r = G;
        q().setInt32(e + 4, r, !0), q().setInt32(e + 0, n, !0);
    }
    function en(e) {
        return e.buffer;
    }
    function tn(e) {
        let t = e.byobRequest;
        return J(t) ? 0 : H(t);
    }
    function nn(e) {
        return e.byteLength;
    }
    function rn(e) {
        return e.byteOffset;
    }
    function an() {
        return U(function(e, t) {
            return e.call(t);
        }, arguments);
    }
    function on() {
        return U(function(e, t, n) {
            return e.call(t, n);
        }, arguments);
    }
    function sn() {
        return U(function(e) {
            e.close();
        }, arguments);
    }
    function cn() {
        return U(function(e) {
            e.close();
        }, arguments);
    }
    function ln(e) {
        return Ot.__wrap(e);
    }
    function un(e) {
        return e.crypto;
    }
    function dn(e) {
        return e.done;
    }
    function fn() {
        return U(function(e, t) {
            e.enqueue(t);
        }, arguments);
    }
    function pn(e) {
        return Object.entries(e);
    }
    function mn(e) {
        return Array.from(e);
    }
    function hn() {
        return U(function(e, t) {
            e.getRandomValues(t);
        }, arguments);
    }
    function gn(e, t) {
        return e[t >>> 0];
    }
    function _n() {
        return U(function(e, t) {
            return Reflect.get(e, t);
        }, arguments);
    }
    function vn(e, t) {
        return e.get(t);
    }
    function yn(e, t) {
        return e[t];
    }
    function bn(e) {
        let t;
        try {
            t = e instanceof ArrayBuffer;
        } catch  {
            t = !1;
        }
        return t;
    }
    function xn(e) {
        let t;
        try {
            t = e instanceof Map;
        } catch  {
            t = !1;
        }
        return t;
    }
    function Sn(e) {
        let t;
        try {
            t = e instanceof Uint8Array;
        } catch  {
            t = !1;
        }
        return t;
    }
    function Cn(e) {
        return Array.isArray(e);
    }
    function wn(e) {
        return Number.isSafeInteger(e);
    }
    function Tn() {
        return Symbol.iterator;
    }
    function En(e) {
        return e.keys();
    }
    function Dn(e) {
        return e.length;
    }
    function On(e) {
        return e.length;
    }
    function kn(e) {
        return e.msCrypto;
    }
    function An() {
        return {};
    }
    function jn() {
        return [];
    }
    function Mn(e, t) {
        try {
            var n = {
                a: e,
                b: t
            };
            return new Promise((e, t)=>{
                let r = n.a;
                n.a = 0;
                try {
                    return bt(r, n.b, e, t);
                } finally{
                    n.a = r;
                }
            });
        } finally{
            n.a = n.b = 0;
        }
    }
    function Nn() {
        return new Map;
    }
    function Pn(e) {
        return new Uint8Array(e);
    }
    function Fn(e, t) {
        return Error(W(e, t));
    }
    function In(e, t) {
        return new Uint8Array($e(e, t));
    }
    function Ln(e, t) {
        return Function(W(e, t));
    }
    function Rn(e, t, n) {
        return new Uint8Array(e, t >>> 0, n >>> 0);
    }
    function zn(e) {
        return new Uint8Array(e >>> 0);
    }
    function Bn(e) {
        return e.next;
    }
    function Vn() {
        return U(function(e) {
            return e.next();
        }, arguments);
    }
    function Hn(e) {
        return e.node;
    }
    function Un(e) {
        return e.process;
    }
    function Wn(e, t, n) {
        Uint8Array.prototype.set.call($e(e, t), n);
    }
    function Gn(e, t) {
        return e.push(t);
    }
    function Kn(e) {
        queueMicrotask(e);
    }
    function qn(e) {
        return e.queueMicrotask;
    }
    function Jn() {
        return U(function(e, t) {
            e.randomFillSync(t);
        }, arguments);
    }
    function Yn() {
        return U(function() {
            return module.require;
        }, arguments);
    }
    function Xn(e) {
        return Promise.resolve(e);
    }
    function Zn() {
        return U(function(e, t) {
            e.respond(t >>> 0);
        }, arguments);
    }
    function Qn(e, t, n) {
        e.set($e(t, n));
    }
    function $n(e, t, n) {
        e[t] = n;
    }
    function er(e, t, n) {
        e[t >>> 0] = n;
    }
    function tr(e, t, n) {
        return e.set(t, n);
    }
    function nr(e) {
        return $.__wrap(e);
    }
    function rr() {
        let e = typeof globalThis > `u` ? null : globalThis;
        return J(e) ? 0 : H(e);
    }
    function ir() {
        let e = typeof globalThis > `u` ? null : globalThis;
        return J(e) ? 0 : H(e);
    }
    function ar() {
        let e = typeof self > `u` ? null : self;
        return J(e) ? 0 : H(e);
    }
    function or() {
        let e = typeof window > `u` ? null : window;
        return J(e) ? 0 : H(e);
    }
    function sr(e, t, n) {
        return e.subarray(t >>> 0, n >>> 0);
    }
    function cr(e, t) {
        return e.then(t);
    }
    function lr() {
        return U(function(e, t) {
            return e.toString(t);
        }, arguments);
    }
    function ur(e) {
        return e.toString();
    }
    function dr(e) {
        return e.value;
    }
    function fr(e) {
        return e.versions;
    }
    function pr(e) {
        let t = e.view;
        return J(t) ? 0 : H(t);
    }
    function mr(e, t) {
        let n = t, r = typeof n == `bigint` ? n : void 0;
        q().setBigInt64(e + 8, J(r) ? BigInt(0) : r, !0), q().setInt32(e + 0, !J(r), !0);
    }
    function hr(e) {
        let t = e, n = typeof t == `boolean` ? t : void 0;
        return J(n) ? 16777215 : n ? 1 : 0;
    }
    function gr(e) {
        let t = e.original;
        return t.cnt-- == 1 ? (t.a = 0, !0) : !1;
    }
    function _r(e, t) {
        let n = K(et(t), V.__wbindgen_malloc, V.__wbindgen_realloc), r = G;
        q().setInt32(e + 4, r, !0), q().setInt32(e + 0, n, !0);
    }
    function vr(e, t) {
        return e in t;
    }
    function yr(e) {
        return typeof e == `bigint`;
    }
    function br(e) {
        return typeof e == `function`;
    }
    function xr(e) {
        return e === null;
    }
    function Sr(e) {
        let t = e;
        return typeof t == `object` && !!t;
    }
    function Cr(e) {
        return typeof e == `string`;
    }
    function wr(e) {
        return e === void 0;
    }
    function Tr(e, t) {
        return e === t;
    }
    function Er(e, t) {
        return e == t;
    }
    function Dr(e, t) {
        let n = t, r = typeof n == `number` ? n : void 0;
        q().setFloat64(e + 8, J(r) ? 0 : r, !0), q().setInt32(e + 0, !J(r), !0);
    }
    function Or(e, t) {
        return e >> t;
    }
    function kr(e, t) {
        let n = t, r = typeof n == `string` ? n : void 0;
        var i = J(r) ? 0 : K(r, V.__wbindgen_malloc, V.__wbindgen_realloc), a = G;
        q().setInt32(e + 4, a, !0), q().setInt32(e + 0, i, !0);
    }
    function Ar(e, t) {
        throw Error(W(e, t));
    }
    function jr(e, t) {
        return W(e, t);
    }
    function Mr(e) {
        return BigInt.asUintN(64, e);
    }
    function Nr(e) {
        return e;
    }
    function Pr(e, t) {
        return nt(e, t, 689, yt);
    }
    function Fr(e, t) {
        return $e(e, t);
    }
    function Ir(e) {
        return e;
    }
    function Lr(e, t) {
        return BigInt.asUintN(64, e) | BigInt.asUintN(64, t) << BigInt(64);
    }
    function Rr() {
        let e = V.__wbindgen_export_2, t = e.grow(4);
        e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1);
    }
    var zr = c({
        __externref_drop_slice: ()=>es,
        __externref_table_alloc: ()=>qo,
        __externref_table_dealloc: ()=>Qo,
        __wbg_chargedstate_free: ()=>Vr,
        __wbg_contractmaintenanceauthority_free: ()=>Hr,
        __wbg_contractoperation_free: ()=>Ur,
        __wbg_contractstate_free: ()=>Wr,
        __wbg_costmodel_free: ()=>Gr,
        __wbg_intounderlyingbytesource_free: ()=>No,
        __wbg_intounderlyingsink_free: ()=>Po,
        __wbg_intounderlyingsource_free: ()=>Fo,
        __wbg_querycontext_free: ()=>Kr,
        __wbg_queryresults_free: ()=>qr,
        __wbg_stateboundedmerkletree_free: ()=>Jr,
        __wbg_statemap_free: ()=>Yr,
        __wbg_statevalue_free: ()=>Xr,
        __wbg_vmresults_free: ()=>Zr,
        __wbg_vmstack_free: ()=>Qr,
        __wbindgen_exn_store: ()=>Ko,
        __wbindgen_export_2: ()=>Jo,
        __wbindgen_export_5: ()=>Zo,
        __wbindgen_free: ()=>$o,
        __wbindgen_malloc: ()=>Yo,
        __wbindgen_realloc: ()=>Xo,
        __wbindgen_start: ()=>rs,
        bigIntModFr: ()=>$r,
        bigIntToValue: ()=>ei,
        chargedstate_new: ()=>ti,
        chargedstate_state: ()=>ni,
        chargedstate_toString: ()=>ri,
        closure690_externref_shim: ()=>ts,
        closure730_externref_shim: ()=>ns,
        communicationCommitment: ()=>ii,
        communicationCommitmentRandomness: ()=>ai,
        contractmaintenanceauthority_committee: ()=>oi,
        contractmaintenanceauthority_counter: ()=>si,
        contractmaintenanceauthority_deserialize: ()=>ci,
        contractmaintenanceauthority_new: ()=>li,
        contractmaintenanceauthority_serialize: ()=>ui,
        contractmaintenanceauthority_threshold: ()=>di,
        contractmaintenanceauthority_toString: ()=>fi,
        contractoperation_deserialize: ()=>pi,
        contractoperation_new: ()=>mi,
        contractoperation_serialize: ()=>hi,
        contractoperation_set_verifier_key: ()=>gi,
        contractoperation_toString: ()=>_i,
        contractoperation_verifier_key: ()=>vi,
        contractstate_balance: ()=>yi,
        contractstate_data: ()=>bi,
        contractstate_deserialize: ()=>xi,
        contractstate_maintenance_authority: ()=>Si,
        contractstate_new: ()=>Ci,
        contractstate_operation: ()=>wi,
        contractstate_operations: ()=>Ti,
        contractstate_query: ()=>Ei,
        contractstate_serialize: ()=>Di,
        contractstate_setOperation: ()=>Oi,
        contractstate_set_balance: ()=>ki,
        contractstate_set_data: ()=>Ai,
        contractstate_set_maintenance_authority: ()=>ji,
        contractstate_toString: ()=>Mi,
        costmodel_initialCostModel: ()=>Ni,
        costmodel_new: ()=>Pi,
        costmodel_toString: ()=>Fi,
        decodeCoinPublicKey: ()=>Ii,
        decodeContractAddress: ()=>Li,
        decodeQualifiedShieldedCoinInfo: ()=>Ri,
        decodeRawTokenType: ()=>zi,
        decodeShieldedCoinInfo: ()=>Bi,
        decodeUserAddress: ()=>Vi,
        degradeToTransient: ()=>Hi,
        dummyContractAddress: ()=>Ui,
        dummyUserAddress: ()=>Wi,
        ecAdd: ()=>Gi,
        ecMul: ()=>Ki,
        ecMulGenerator: ()=>qi,
        encodeCoinPublicKey: ()=>Ji,
        encodeContractAddress: ()=>Yi,
        encodeQualifiedShieldedCoinInfo: ()=>Xi,
        encodeRawTokenType: ()=>Zi,
        encodeShieldedCoinInfo: ()=>Qi,
        encodeUserAddress: ()=>$i,
        entryPointHash: ()=>ea,
        hashToCurve: ()=>ta,
        intounderlyingbytesource_autoAllocateChunkSize: ()=>Io,
        intounderlyingbytesource_cancel: ()=>Lo,
        intounderlyingbytesource_pull: ()=>Ro,
        intounderlyingbytesource_start: ()=>zo,
        intounderlyingbytesource_type: ()=>Bo,
        intounderlyingsink_abort: ()=>Vo,
        intounderlyingsink_close: ()=>Ho,
        intounderlyingsink_write: ()=>Uo,
        intounderlyingsource_cancel: ()=>Wo,
        intounderlyingsource_pull: ()=>Go,
        leafHash: ()=>na,
        maxAlignedSize: ()=>ra,
        maxField: ()=>ia,
        memory: ()=>Br,
        persistentCommit: ()=>aa,
        persistentHash: ()=>oa,
        proofDataIntoSerializedPreimage: ()=>sa,
        querycontext_address: ()=>ca,
        querycontext_block: ()=>la,
        querycontext_com_indices: ()=>ua,
        querycontext_effects: ()=>da,
        querycontext_insertCommitment: ()=>fa,
        querycontext_new: ()=>pa,
        querycontext_qualify: ()=>ma,
        querycontext_query: ()=>ha,
        querycontext_runTranscript: ()=>ga,
        querycontext_set_block: ()=>_a,
        querycontext_set_effects: ()=>va,
        querycontext_state: ()=>ya,
        querycontext_toString: ()=>ba,
        querycontext_toVmStack: ()=>xa,
        queryresults_context: ()=>Sa,
        queryresults_events: ()=>Ca,
        queryresults_gas_cost: ()=>wa,
        queryresults_new: ()=>Ta,
        queryresults_toString: ()=>Ea,
        rawTokenType: ()=>Da,
        runProgram: ()=>Oa,
        runtimeCoinCommitment: ()=>ka,
        runtimeCoinNullifier: ()=>Aa,
        sampleContractAddress: ()=>ja,
        sampleRawTokenType: ()=>Ma,
        sampleSigningKey: ()=>Na,
        sampleUserAddress: ()=>Pa,
        signData: ()=>Fa,
        signatureVerifyingKey: ()=>Ia,
        signingKeyFromBip340: ()=>La,
        stateboundedmerkletree_blank: ()=>Ra,
        stateboundedmerkletree_collapse: ()=>za,
        stateboundedmerkletree_findPathForLeaf: ()=>Ba,
        stateboundedmerkletree_height: ()=>Va,
        stateboundedmerkletree_pathForLeaf: ()=>Ha,
        stateboundedmerkletree_rehash: ()=>Ua,
        stateboundedmerkletree_root: ()=>Wa,
        stateboundedmerkletree_toString: ()=>Ga,
        stateboundedmerkletree_update: ()=>Ka,
        statemap_get: ()=>qa,
        statemap_insert: ()=>Ja,
        statemap_keys: ()=>Ya,
        statemap_new: ()=>Xa,
        statemap_remove: ()=>Za,
        statemap_toString: ()=>Qa,
        statevalue_arrayPush: ()=>$a,
        statevalue_asArray: ()=>eo,
        statevalue_asBoundedMerkleTree: ()=>to,
        statevalue_asCell: ()=>no,
        statevalue_asMap: ()=>ro,
        statevalue_decode: ()=>io,
        statevalue_encode: ()=>ao,
        statevalue_logSize: ()=>oo,
        statevalue_new: ()=>so,
        statevalue_newArray: ()=>co,
        statevalue_newBoundedMerkleTree: ()=>lo,
        statevalue_newCell: ()=>uo,
        statevalue_newMap: ()=>fo,
        statevalue_newNull: ()=>po,
        statevalue_toString: ()=>mo,
        statevalue_type: ()=>ho,
        transientCommit: ()=>go,
        transientHash: ()=>_o,
        upgradeFromTransient: ()=>vo,
        valueToBigInt: ()=>yo,
        verifySignature: ()=>bo,
        vmresults_events: ()=>xo,
        vmresults_gas_cost: ()=>So,
        vmresults_new: ()=>Co,
        vmresults_stack: ()=>wo,
        vmresults_toString: ()=>To,
        vmstack_get: ()=>Eo,
        vmstack_isStrong: ()=>Do,
        vmstack_length: ()=>Oo,
        vmstack_new: ()=>ko,
        vmstack_push: ()=>Ao,
        vmstack_removeLast: ()=>jo,
        vmstack_toString: ()=>Mo
    });
    URL = globalThis.URL;
    var { memory: Br, __wbg_chargedstate_free: Vr, __wbg_contractmaintenanceauthority_free: Hr, __wbg_contractoperation_free: Ur, __wbg_contractstate_free: Wr, __wbg_costmodel_free: Gr, __wbg_querycontext_free: Kr, __wbg_queryresults_free: qr, __wbg_stateboundedmerkletree_free: Jr, __wbg_statemap_free: Yr, __wbg_statevalue_free: Xr, __wbg_vmresults_free: Zr, __wbg_vmstack_free: Qr, bigIntModFr: $r, bigIntToValue: ei, chargedstate_new: ti, chargedstate_state: ni, chargedstate_toString: ri, communicationCommitment: ii, communicationCommitmentRandomness: ai, contractmaintenanceauthority_committee: oi, contractmaintenanceauthority_counter: si, contractmaintenanceauthority_deserialize: ci, contractmaintenanceauthority_new: li, contractmaintenanceauthority_serialize: ui, contractmaintenanceauthority_threshold: di, contractmaintenanceauthority_toString: fi, contractoperation_deserialize: pi, contractoperation_new: mi, contractoperation_serialize: hi, contractoperation_set_verifier_key: gi, contractoperation_toString: _i, contractoperation_verifier_key: vi, contractstate_balance: yi, contractstate_data: bi, contractstate_deserialize: xi, contractstate_maintenance_authority: Si, contractstate_new: Ci, contractstate_operation: wi, contractstate_operations: Ti, contractstate_query: Ei, contractstate_serialize: Di, contractstate_setOperation: Oi, contractstate_set_balance: ki, contractstate_set_data: Ai, contractstate_set_maintenance_authority: ji, contractstate_toString: Mi, costmodel_initialCostModel: Ni, costmodel_new: Pi, costmodel_toString: Fi, decodeCoinPublicKey: Ii, decodeContractAddress: Li, decodeQualifiedShieldedCoinInfo: Ri, decodeRawTokenType: zi, decodeShieldedCoinInfo: Bi, decodeUserAddress: Vi, degradeToTransient: Hi, dummyContractAddress: Ui, dummyUserAddress: Wi, ecAdd: Gi, ecMul: Ki, ecMulGenerator: qi, encodeCoinPublicKey: Ji, encodeContractAddress: Yi, encodeQualifiedShieldedCoinInfo: Xi, encodeRawTokenType: Zi, encodeShieldedCoinInfo: Qi, encodeUserAddress: $i, entryPointHash: ea, hashToCurve: ta, leafHash: na, maxAlignedSize: ra, maxField: ia, persistentCommit: aa, persistentHash: oa, proofDataIntoSerializedPreimage: sa, querycontext_address: ca, querycontext_block: la, querycontext_com_indices: ua, querycontext_effects: da, querycontext_insertCommitment: fa, querycontext_new: pa, querycontext_qualify: ma, querycontext_query: ha, querycontext_runTranscript: ga, querycontext_set_block: _a, querycontext_set_effects: va, querycontext_state: ya, querycontext_toString: ba, querycontext_toVmStack: xa, queryresults_context: Sa, queryresults_events: Ca, queryresults_gas_cost: wa, queryresults_new: Ta, queryresults_toString: Ea, rawTokenType: Da, runProgram: Oa, runtimeCoinCommitment: ka, runtimeCoinNullifier: Aa, sampleContractAddress: ja, sampleRawTokenType: Ma, sampleSigningKey: Na, sampleUserAddress: Pa, signData: Fa, signatureVerifyingKey: Ia, signingKeyFromBip340: La, stateboundedmerkletree_blank: Ra, stateboundedmerkletree_collapse: za, stateboundedmerkletree_findPathForLeaf: Ba, stateboundedmerkletree_height: Va, stateboundedmerkletree_pathForLeaf: Ha, stateboundedmerkletree_rehash: Ua, stateboundedmerkletree_root: Wa, stateboundedmerkletree_toString: Ga, stateboundedmerkletree_update: Ka, statemap_get: qa, statemap_insert: Ja, statemap_keys: Ya, statemap_new: Xa, statemap_remove: Za, statemap_toString: Qa, statevalue_arrayPush: $a, statevalue_asArray: eo, statevalue_asBoundedMerkleTree: to, statevalue_asCell: no, statevalue_asMap: ro, statevalue_decode: io, statevalue_encode: ao, statevalue_logSize: oo, statevalue_new: so, statevalue_newArray: co, statevalue_newBoundedMerkleTree: lo, statevalue_newCell: uo, statevalue_newMap: fo, statevalue_newNull: po, statevalue_toString: mo, statevalue_type: ho, transientCommit: go, transientHash: _o, upgradeFromTransient: vo, valueToBigInt: yo, verifySignature: bo, vmresults_events: xo, vmresults_gas_cost: So, vmresults_new: Co, vmresults_stack: wo, vmresults_toString: To, vmstack_get: Eo, vmstack_isStrong: Do, vmstack_length: Oo, vmstack_new: ko, vmstack_push: Ao, vmstack_removeLast: jo, vmstack_toString: Mo, __wbg_intounderlyingbytesource_free: No, __wbg_intounderlyingsink_free: Po, __wbg_intounderlyingsource_free: Fo, intounderlyingbytesource_autoAllocateChunkSize: Io, intounderlyingbytesource_cancel: Lo, intounderlyingbytesource_pull: Ro, intounderlyingbytesource_start: zo, intounderlyingbytesource_type: Bo, intounderlyingsink_abort: Vo, intounderlyingsink_close: Ho, intounderlyingsink_write: Uo, intounderlyingsource_cancel: Wo, intounderlyingsource_pull: Go, __wbindgen_exn_store: Ko, __externref_table_alloc: qo, __wbindgen_export_2: Jo, __wbindgen_malloc: Yo, __wbindgen_realloc: Xo, __wbindgen_export_5: Zo, __externref_table_dealloc: Qo, __wbindgen_free: $o, __externref_drop_slice: es, closure690_externref_shim: ts, closure730_externref_shim: ns, __wbindgen_start: rs } = await Ue({
        "./midnight_onchain_runtime_wasm_bg.js": {
            __wbg_statevalue_new: nr,
            __wbg_contractstate_new: ln,
            __wbg_getwithrefkey_1dc361bd10053bfe: yn,
            __wbg_set_3f1d0b984ed272ed: $n,
            __wbg_String_8f0eb39a4a4c2f66: $t,
            __wbg_queueMicrotask_25d0739ac89e8c88: Kn,
            __wbg_queueMicrotask_4488407636f5bf24: qn,
            __wbg_respond_6c2c4e20ef85138e: Zn,
            __wbg_view_91cc97d57ab30530: pr,
            __wbg_byobRequest_2c036bceca1e6037: tn,
            __wbg_close_cccada6053ee3a65: sn,
            __wbg_enqueue_452bc2343d1c2ff9: fn,
            __wbg_close_d71a78219dc23e91: cn,
            __wbg_crypto_86f2631e91b51511: un,
            __wbg_process_3975fd6c72f520aa: Un,
            __wbg_versions_4e31226f5e8dc909: fr,
            __wbg_node_e1f24f89a7336c2e: Hn,
            __wbg_require_b74f47fc2d022fd6: Yn,
            __wbg_msCrypto_d562bbe83e0d4b91: kn,
            __wbg_getRandomValues_b3f15fcbfabb0f8b: hn,
            __wbg_randomFillSync_f8c153b79f285817: Jn,
            __wbg_byteLength_331a6b5545834024: nn,
            __wbg_byteOffset_49a5b5608000358b: rn,
            __wbg_newfromslice_074c56947bd43469: In,
            __wbg_newwithlength_a167dcc7aaa3ba77: zn,
            __wbg_newwithbyteoffsetandlength_e8f53910b4d42b45: Rn,
            __wbg_new_638ebfaedbf32a5e: Pn,
            __wbg_buffer_8d40b1d762fb3c66: en,
            __wbg_length_6bb7e81f9d7713e4: On,
            __wbg_prototypesetcall_3d4a26c1ed734349: Wn,
            __wbg_subarray_70fd07feefe14294: sr,
            __wbg_set_1353b2a5e96bc48c: Qn,
            __wbg_BigInt_40a77d45cca49470: Yt,
            __wbg_done_75ed0ee6dd243d9d: dn,
            __wbg_value_dd9372230531eade: dr,
            __wbg_instanceof_Map_ebb01a5b6b5ffd0b: xn,
            __wbg_instanceof_Uint8Array_9a8378d955933db7: Sn,
            __wbg_instanceof_ArrayBuffer_67f3012529f6a2dd: bn,
            __wbg_BigInt_6adbfd8eb0f7ec07: Xt,
            __wbg_get_5ee3191755594360: vn,
            __wbg_new_2ff1f68f3676ea53: Nn,
            __wbg_set_b7f1cf4fae26fe2a: tr,
            __wbg_keys_822161a7faf55538: En,
            __wbg_get_0da715ceaecea5c8: gn,
            __wbg_new_1f3a344cf3123716: jn,
            __wbg_set_90f6c0f7bd8c0415: er,
            __wbg_from_88bc52ce20ba6318: mn,
            __wbg_push_330b2eb93e4e1212: Gn,
            __wbg_length_186546c51cd61acd: Dn,
            __wbg_isArray_030cce220591fb41: Cn,
            __wbg_new_da9dc54c5db29dfa: Fn,
            __wbg_toString_d8f537919ef401d6: ur,
            __wbg_toString_7268338f40012a03: lr,
            __wbg_isSafeInteger_1c0d1af5542e102a: wn,
            __wbg_new_19c25a3f2fa63a02: An,
            __wbg_entries_2be2f15bd5554996: pn,
            __wbg_iterator_f370b34483c71a1c: Tn,
            __wbg_static_accessor_GLOBAL_THIS_f0a4409105898184: ir,
            __wbg_static_accessor_SELF_995b214ae681ff99: ar,
            __wbg_static_accessor_GLOBAL_8921f820c2ce3f12: rr,
            __wbg_static_accessor_WINDOW_cde3890479c675ea: or,
            __wbg_new_2e3c58a15f39f5f9: Mn,
            __wbg_then_e22500defe16819f: cr,
            __wbg_resolve_4055c623acdd6a1b: Xn,
            __wbg_get_458e874b43b18b25: _n,
            __wbg_newnoargs_254190557c45b4ec: Ln,
            __wbg_call_13410aac570ffff7: an,
            __wbg_call_a5400b25a865cfd8: on,
            __wbg_next_5b3530e612fde77d: Bn,
            __wbg_next_692e82279131b03c: Vn,
            __wbg_wbindgenin_d7a1ee10933d2d55: vr,
            __wbg_wbindgenshr_7d2aae6044c0dab1: Or,
            __wbg_wbindgenthrow_451ec1a8469d7eb6: Ar,
            __wbg_wbindgencbdrop_eb10308566512b88: gr,
            __wbg_wbindgenisnull_f3037694abe4d97a: xr,
            __wbg_wbindgenjsvaleq_e6f2ad59ccae1b58: Tr,
            __wbg_Number_998bea33bd87c3e0: Qt,
            __wbg_Error_e17e777aac105295: Zt,
            __wbg_wbindgenisbigint_ecb90cc08a5a9154: yr,
            __wbg_wbindgenisobject_307a53c6bd97fbf8: Sr,
            __wbg_wbindgenisstring_d4fa939789f003b0: Cr,
            __wbg_wbindgennumberget_f74b4c7525ac05cb: Dr,
            __wbg_wbindgenstringget_0f16a6ddddef376f: kr,
            __wbg_wbindgenbooleanget_3fe6f642c7d97746: hr,
            __wbg_wbindgenisfunction_8cee7dce3725ae74: br,
            __wbg_wbindgenisundefined_c4b71d073b92f3c5: wr,
            __wbg_wbindgenjsvallooseeq_9bec8c9be826bed1: Er,
            __wbg_wbindgenbigintgetasi64_ac743ece6ab9bba1: mr,
            __wbg_wbindgendebugstring_99ef257a3ddda34d: _r,
            __wbindgen_init_externref_table: Rr,
            __wbindgen_cast_e7b45dd881f38ce3: Lr,
            __wbindgen_cast_2241b6af4c4b2941: jr,
            __wbindgen_cast_9ae0607507abb057: Nr,
            __wbindgen_cast_4625c577ab2ec9ee: Mr,
            __wbindgen_cast_9f23747c70687cbf: Pr,
            __wbindgen_cast_cb9088102bce6b30: Fr,
            __wbindgen_cast_d6cd19b81560fd6e: Ir
        }
    }, He);
    We(zr), rs();
    var is = ot();
    rt();
    let as, ss;
    as = `0.15.0`;
    os = (e)=>{
        let t = e.split(`-`)[0].split(`.`).map(Number), n = as.split(`-`)[0].split(`.`).map(Number);
        if (t[0] !== n[0] || n[0] === 0 && t[1] !== n[1] || t[1] > n[1] || t[1] === n[1] && t[2] > n[2]) throw new B(`Version mismatch: compiled code expects ${e}, runtime is ${as}`);
        let r = 52435875175126190479447740508185965837690552500527637822603658699938581184512n;
        if (r !== is) throw new B(`Maximum field mismatch: compiled code uses ${r}, runtime uses ${is}`);
    };
    ss = {
        alignment () {
            return [
                {
                    tag: `atom`,
                    value: {
                        tag: `field`
                    }
                }
            ];
        },
        fromValue (e) {
            let t = e.shift();
            if (t == null) throw new B(`expected Field`);
            return lt([
                t
            ]);
        },
        toValue (e) {
            return it(e);
        }
    };
    cs = class {
        maxValue;
        length;
        constructor(e, t){
            this.maxValue = e, this.length = t;
        }
        alignment() {
            return [
                {
                    tag: `atom`,
                    value: {
                        tag: `bytes`,
                        length: this.length
                    }
                }
            ];
        }
        fromValue(e) {
            let t = e.shift();
            if (t == null) throw new B(`expected UnsignedInteger[<=${this.maxValue}]`);
            {
                let e = 0n;
                for(let n = 0; n < t.length; n++)e += (1n << 8n * BigInt(n)) * BigInt(t[n]);
                if (e > this.maxValue) throw new B(`expected UnsignedInteger[<=${this.maxValue}]`);
                return e;
            }
        }
        toValue(e) {
            return ss.toValue(e);
        }
    };
    ls = class {
        length;
        type;
        constructor(e, t){
            this.length = e, this.type = t;
        }
        alignment() {
            let e = this.type.alignment(), t = [];
            for(let n = 0; n < this.length; n++)t = t.concat(e);
            return t;
        }
        fromValue(e) {
            let t = [];
            for(let n = 0; n < this.length; n++)t.push(this.type.fromValue(e));
            return t;
        }
        toValue(e) {
            if (e.length != this.length) throw new B(`expected ${this.length}-element array`);
            let t = [];
            for(let n = 0; n < this.length; n++)t = t.concat(this.type.toValue(e[n]));
            return t;
        }
    };
    us = {
        alignment () {
            return [
                {
                    tag: `atom`,
                    value: {
                        tag: `bytes`,
                        length: 1
                    }
                }
            ];
        },
        fromValue (e) {
            let t = e.shift();
            if (t == null || t.length > 1 || t.length == 1 && t[0] != 1) throw new B(`expected Boolean`);
            return t.length == 1;
        },
        toValue (e) {
            return e ? [
                new Uint8Array([
                    1
                ])
            ] : [
                new Uint8Array
            ];
        }
    };
    ds = class {
        length;
        constructor(e){
            this.length = e;
        }
        alignment() {
            return [
                {
                    tag: `atom`,
                    value: {
                        tag: `bytes`,
                        length: this.length
                    }
                }
            ];
        }
        fromValue(e) {
            let t = e.shift();
            if (t == null || t.length > this.length) throw new B(`expected Bytes[${this.length}]`);
            if (t.length == this.length) return t;
            let n = new Uint8Array(this.length);
            return n.set(t, 0), n;
        }
        toValue(e) {
            let t = e.length;
            for(; t > 0 && e[t - 1] == 0;)--t;
            return [
                e.slice(0, t)
            ];
        }
    };
    new ds(32), new cs(18446744073709551615n, 8), is + 1n;
    fs = function(e, t) {
        let n = ct(e.alignment(), e.toValue(t))[0], r = new Uint8Array(32);
        return r.set(n, 0), r;
    };
    let ms, hs, ys, bs, xs, Ss;
    ps = (e)=>({
            coinPublicKey: typeof e == `string` ? {
                bytes: ft(e)
            } : e,
            currentIndex: 0n,
            inputs: [],
            outputs: []
        });
    ms = ({ is_left: e, left: t, right: n })=>({
            is_left: e,
            left: {
                bytes: ft(t)
            },
            right: {
                bytes: ut(n)
            }
        });
    hs = ({ is_left: e, left: t, right: n })=>({
            is_left: e,
            left: dt(t.bytes),
            right: ht(n.bytes)
        });
    gs = (e)=>({
            coinPublicKey: {
                bytes: ft(e.coinPublicKey)
            },
            currentIndex: e.currentIndex,
            inputs: e.inputs.map(_t),
            outputs: e.outputs.map(({ coinInfo: e, recipient: t })=>({
                    coinInfo: pt(e),
                    recipient: ms(t)
                }))
        });
    _s = (e)=>({
            coinPublicKey: dt(e.coinPublicKey.bytes),
            currentIndex: e.currentIndex,
            inputs: e.inputs.map(gt),
            outputs: e.outputs.map(({ coinInfo: e, recipient: t })=>({
                    coinInfo: mt(e),
                    recipient: hs(t)
                }))
        });
    vs = (e, t)=>({
            initialPrivateState: e,
            initialZswapLocalState: ps(t)
        });
    ys = (e)=>{
        let t;
        if (e instanceof Z) t = e;
        else if (e instanceof Ot) t = e.data;
        else if (e instanceof $) t = new Z(e);
        else throw new B(`'contractState' parameter ${e} has unexpected type`);
        return t;
    };
    bs = (e, t, n)=>{
        let r = new Lt(ys(e), t), i = e instanceof Ot ? e.balance : new Map;
        return r.block = {
            ...r.block,
            balance: i,
            ownAddress: t,
            secondsSinceEpoch: BigInt(n ?? Math.floor(Date.now() / 1e3))
        }, r;
    };
    xs = (e)=>typeof e == `object` && !!e && `coinPublicKey` in e && typeof e.coinPublicKey == `string` && `currentIndex` in e && `inputs` in e && `outputs` in e;
    Ss = (e)=>typeof e == `object` && !!e && `coinPublicKey` in e && typeof e.coinPublicKey == `object` && e.coinPublicKey !== null && `bytes` in e.coinPublicKey && `currentIndex` in e && `inputs` in e && `outputs` in e;
    Cs = (e, t, n, r, i, a, o)=>{
        let s = bs(n, e, o), c;
        return c = xs(t) ? gs(t) : Ss(t) ? t : ps(t), {
            currentPrivateState: r,
            currentZswapLocalState: c,
            currentQueryContext: s,
            costModel: a ?? Q.initialCostModel(),
            gasLimit: i
        };
    };
    ws = ()=>({
            readTime: 0n,
            computeTime: 0n,
            bytesWritten: 0n,
            bytesDeleted: 0n
        });
    Ts = (e, t, n)=>{
        try {
            let r = e.currentQueryContext.query(n, e.costModel, e.gasLimit);
            e.currentQueryContext = r.context, e.gasCost = r.gasCost;
            let i = r.events.filter((e)=>e.tag === `read`), a = 0;
            if (t.publicTranscript = t.publicTranscript.concat(n.map((e)=>typeof e == `object` && `popeq` in e ? {
                    popeq: {
                        ...e.popeq,
                        result: i[a++].content
                    }
                } : e)), r.events.length === 1) {
                let e = r.events[0];
                if (e.tag === `read`) return e.content;
            }
            return r.events;
        } catch (e) {
            throw e instanceof Error ? new B(e.toString()) : e;
        }
    };
    Es = function(e, t, n) {
        return {
            ledger: e,
            privateState: t,
            contractAddress: n
        };
    };
})();
export { Re as A, rt as C, B as D, Ue as E, c as F, d as I, u as L, Le as M, s as N, Be as O, o as P, $ as S, at as T, Et as _, vs as a, Lt as b, gs as c, ds as d, cs as f, wt as g, Z as h, Ts as i, b as j, Ve as k, fs as l, os as m, Cs as n, _s as o, ls as p, ws as r, ps as s, Es as t, us as u, Ot as v, st as w, Ut as x, Q as y, __tla };
