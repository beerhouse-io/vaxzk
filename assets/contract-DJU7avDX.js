import { C as e, D as t, O as n, S as r, _ as i, b as a, d as o, f as s, h as c, i as l, k as u, l as d, m as f, n as p, p as m, r as h, t as g, u as _, v, x as y, y as b, __tla as __tla_0 } from "./dist-DyJXbIi8.js";
let E, A, D, k;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    f(`0.15.0`);
    var x = new o(32), S = _, C = new m(2, x), w = new s(18446744073709551615n, 8);
    new class {
        alignment() {
            return S.alignment().concat(x.alignment().concat(x.alignment()));
        }
        fromValue(e) {
            return {
                is_left: S.fromValue(e),
                left: x.fromValue(e),
                right: x.fromValue(e)
            };
        }
        toValue(e) {
            return S.toValue(e.is_left).concat(x.toValue(e.left).concat(x.toValue(e.right)));
        }
    }, new s(340282366920938463463374607431768211455n, 16), new class {
        alignment() {
            return x.alignment();
        }
        fromValue(e) {
            return {
                bytes: x.fromValue(e)
            };
        }
        toValue(e) {
            return x.toValue(e.bytes);
        }
    };
    let T;
    T = new s(255n, 1);
    E = class {
        witnesses;
        constructor(...e){
            if (e.length !== 1) throw new t(`Contract constructor: expected 1 argument, received ${e.length}`);
            let n = e[0];
            if (typeof n != `object`) throw new t(`first (witnesses) argument to Contract constructor is not an object`);
            if (typeof n.localSk != `function`) throw new t(`first (witnesses) argument to Contract constructor does not contain a function-valued field named localSk`);
            this.witnesses = n, this.circuits = {
                publicKey (e, ...t) {
                    return {
                        result: k.publicKey(...t),
                        context: e
                    };
                },
                addAdmin: (...e)=>{
                    if (e.length !== 2) throw new t(`addAdmin: expected 2 arguments (as invoked from Typescript), received ${e.length}`);
                    let n = e[0], r = e[1];
                    typeof n == `object` && n.currentQueryContext != null || u(`addAdmin`, `argument 1 (as invoked from Typescript)`, `vaxzk.compact line 26 char 1`, `CircuitContext`, n), r.buffer instanceof ArrayBuffer && r.BYTES_PER_ELEMENT === 1 && r.length === 32 || u(`addAdmin`, `argument 1 (argument 2 as invoked from Typescript)`, `vaxzk.compact line 26 char 1`, `Bytes<32>`, r);
                    let i = {
                        ...n,
                        gasCost: h()
                    }, a = {
                        input: {
                            value: x.toValue(r),
                            alignment: x.alignment()
                        },
                        output: void 0,
                        publicTranscript: [],
                        privateTranscriptOutputs: []
                    }, o = this._addAdmin_0(i, a, r);
                    return a.output = {
                        value: [],
                        alignment: []
                    }, {
                        result: o,
                        context: i,
                        proofData: a,
                        gasCost: i.gasCost
                    };
                },
                revokeAdmin: (...e)=>{
                    if (e.length !== 2) throw new t(`revokeAdmin: expected 2 arguments (as invoked from Typescript), received ${e.length}`);
                    let n = e[0], r = e[1];
                    typeof n == `object` && n.currentQueryContext != null || u(`revokeAdmin`, `argument 1 (as invoked from Typescript)`, `vaxzk.compact line 35 char 1`, `CircuitContext`, n), r.buffer instanceof ArrayBuffer && r.BYTES_PER_ELEMENT === 1 && r.length === 32 || u(`revokeAdmin`, `argument 1 (argument 2 as invoked from Typescript)`, `vaxzk.compact line 35 char 1`, `Bytes<32>`, r);
                    let i = {
                        ...n,
                        gasCost: h()
                    }, a = {
                        input: {
                            value: x.toValue(r),
                            alignment: x.alignment()
                        },
                        output: void 0,
                        publicTranscript: [],
                        privateTranscriptOutputs: []
                    }, o = this._revokeAdmin_0(i, a, r);
                    return a.output = {
                        value: [],
                        alignment: []
                    }, {
                        result: o,
                        context: i,
                        proofData: a,
                        gasCost: i.gasCost
                    };
                },
                adminOnlyAction: (...e)=>{
                    if (e.length !== 1) throw new t(`adminOnlyAction: expected 1 argument (as invoked from Typescript), received ${e.length}`);
                    let n = e[0];
                    typeof n == `object` && n.currentQueryContext != null || u(`adminOnlyAction`, `argument 1 (as invoked from Typescript)`, `vaxzk.compact line 44 char 1`, `CircuitContext`, n);
                    let r = {
                        ...n,
                        gasCost: h()
                    }, i = {
                        input: {
                            value: [],
                            alignment: []
                        },
                        output: void 0,
                        publicTranscript: [],
                        privateTranscriptOutputs: []
                    }, a = this._adminOnlyAction_0(r, i);
                    return i.output = {
                        value: [],
                        alignment: []
                    }, {
                        result: a,
                        context: r,
                        proofData: i,
                        gasCost: r.gasCost
                    };
                },
                clinicOnlyAction: (...e)=>{
                    if (e.length !== 1) throw new t(`clinicOnlyAction: expected 1 argument (as invoked from Typescript), received ${e.length}`);
                    let n = e[0];
                    typeof n == `object` && n.currentQueryContext != null || u(`clinicOnlyAction`, `argument 1 (as invoked from Typescript)`, `vaxzk.compact line 49 char 1`, `CircuitContext`, n);
                    let r = {
                        ...n,
                        gasCost: h()
                    }, i = {
                        input: {
                            value: [],
                            alignment: []
                        },
                        output: void 0,
                        publicTranscript: [],
                        privateTranscriptOutputs: []
                    }, a = this._clinicOnlyAction_0(r, i);
                    return i.output = {
                        value: [],
                        alignment: []
                    }, {
                        result: a,
                        context: r,
                        proofData: i,
                        gasCost: r.gasCost
                    };
                },
                addClinic: (...e)=>{
                    if (e.length !== 2) throw new t(`addClinic: expected 2 arguments (as invoked from Typescript), received ${e.length}`);
                    let n = e[0], r = e[1];
                    typeof n == `object` && n.currentQueryContext != null || u(`addClinic`, `argument 1 (as invoked from Typescript)`, `vaxzk.compact line 57 char 1`, `CircuitContext`, n), r.buffer instanceof ArrayBuffer && r.BYTES_PER_ELEMENT === 1 && r.length === 32 || u(`addClinic`, `argument 1 (argument 2 as invoked from Typescript)`, `vaxzk.compact line 57 char 1`, `Bytes<32>`, r);
                    let i = {
                        ...n,
                        gasCost: h()
                    }, a = {
                        input: {
                            value: x.toValue(r),
                            alignment: x.alignment()
                        },
                        output: void 0,
                        publicTranscript: [],
                        privateTranscriptOutputs: []
                    }, o = this._addClinic_0(i, a, r);
                    return a.output = {
                        value: [],
                        alignment: []
                    }, {
                        result: o,
                        context: i,
                        proofData: a,
                        gasCost: i.gasCost
                    };
                },
                revokeClinic: (...e)=>{
                    if (e.length !== 2) throw new t(`revokeClinic: expected 2 arguments (as invoked from Typescript), received ${e.length}`);
                    let n = e[0], r = e[1];
                    typeof n == `object` && n.currentQueryContext != null || u(`revokeClinic`, `argument 1 (as invoked from Typescript)`, `vaxzk.compact line 66 char 1`, `CircuitContext`, n), r.buffer instanceof ArrayBuffer && r.BYTES_PER_ELEMENT === 1 && r.length === 32 || u(`revokeClinic`, `argument 1 (argument 2 as invoked from Typescript)`, `vaxzk.compact line 66 char 1`, `Bytes<32>`, r);
                    let i = {
                        ...n,
                        gasCost: h()
                    }, a = {
                        input: {
                            value: x.toValue(r),
                            alignment: x.alignment()
                        },
                        output: void 0,
                        publicTranscript: [],
                        privateTranscriptOutputs: []
                    }, o = this._revokeClinic_0(i, a, r);
                    return a.output = {
                        value: [],
                        alignment: []
                    }, {
                        result: o,
                        context: i,
                        proofData: a,
                        gasCost: i.gasCost
                    };
                }
            }, this.impureCircuits = {
                addAdmin: this.circuits.addAdmin,
                revokeAdmin: this.circuits.revokeAdmin,
                adminOnlyAction: this.circuits.adminOnlyAction,
                clinicOnlyAction: this.circuits.clinicOnlyAction,
                addClinic: this.circuits.addClinic,
                revokeClinic: this.circuits.revokeClinic
            }, this.provableCircuits = {
                addAdmin: this.circuits.addAdmin,
                revokeAdmin: this.circuits.revokeAdmin,
                adminOnlyAction: this.circuits.adminOnlyAction,
                clinicOnlyAction: this.circuits.clinicOnlyAction,
                addClinic: this.circuits.addClinic,
                revokeClinic: this.circuits.revokeClinic
            };
        }
        initialState(...n) {
            if (n.length !== 1) throw new t(`Contract state constructor: expected 1 argument (as invoked from Typescript), received ${n.length}`);
            let a = n[0];
            if (typeof a != `object`) throw new t(`Contract state constructor: expected 'constructorContext' in argument 1 (as invoked from Typescript) to be an object`);
            if (!(`initialPrivateState` in a)) throw new t(`Contract state constructor: expected 'initialPrivateState' in argument 1 (as invoked from Typescript)`);
            if (!(`initialZswapLocalState` in a)) throw new t(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript)`);
            if (typeof a.initialZswapLocalState != `object`) throw new t(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript) to be an object`);
            let o = new v, s = r.newArray();
            s = s.arrayPush(r.newNull()), s = s.arrayPush(r.newNull()), o.data = new c(s), o.setOperation(`addAdmin`, new i), o.setOperation(`revokeAdmin`, new i), o.setOperation(`adminOnlyAction`, new i), o.setOperation(`clinicOnlyAction`, new i), o.setOperation(`addClinic`, new i), o.setOperation(`revokeClinic`, new i);
            let u = p(e(), a.initialZswapLocalState.coinPublicKey, o.data, a.initialPrivateState), d = {
                input: {
                    value: [],
                    alignment: []
                },
                output: void 0,
                publicTranscript: [],
                privateTranscriptOutputs: []
            };
            l(u, d, [
                {
                    push: {
                        storage: !1,
                        value: r.newCell({
                            value: T.toValue(0n),
                            alignment: T.alignment()
                        }).encode()
                    }
                },
                {
                    push: {
                        storage: !0,
                        value: r.newMap(new y).encode()
                    }
                },
                {
                    ins: {
                        cached: !1,
                        n: 1
                    }
                }
            ]), l(u, d, [
                {
                    push: {
                        storage: !1,
                        value: r.newCell({
                            value: T.toValue(1n),
                            alignment: T.alignment()
                        }).encode()
                    }
                },
                {
                    push: {
                        storage: !0,
                        value: r.newMap(new y).encode()
                    }
                },
                {
                    ins: {
                        cached: !1,
                        n: 1
                    }
                }
            ]);
            let f = this._localSk_0(u, d), m = this._publicKey_0(f);
            return l(u, d, [
                {
                    idx: {
                        cached: !1,
                        pushPath: !0,
                        path: [
                            {
                                tag: `value`,
                                value: {
                                    value: T.toValue(0n),
                                    alignment: T.alignment()
                                }
                            }
                        ]
                    }
                },
                {
                    push: {
                        storage: !1,
                        value: r.newCell({
                            value: x.toValue(m),
                            alignment: x.alignment()
                        }).encode()
                    }
                },
                {
                    push: {
                        storage: !0,
                        value: r.newNull().encode()
                    }
                },
                {
                    ins: {
                        cached: !1,
                        n: 1
                    }
                },
                {
                    ins: {
                        cached: !0,
                        n: 1
                    }
                }
            ]), o.data = new c(u.currentQueryContext.state.state), {
                currentContractState: o,
                currentPrivateState: u.currentPrivateState,
                currentZswapLocalState: u.currentZswapLocalState
            };
        }
        _persistentHash_0(e) {
            return d(C, e);
        }
        _localSk_0(e, t) {
            let n = g(D(e.currentQueryContext.state), e.currentPrivateState, e.currentQueryContext.address), [r, i] = this.witnesses.localSk(n);
            return e.currentPrivateState = r, i.buffer instanceof ArrayBuffer && i.BYTES_PER_ELEMENT === 1 && i.length === 32 || u(`localSk`, `return value`, `vaxzk.compact line 8 char 1`, `Bytes<32>`, i), t.privateTranscriptOutputs.push({
                value: x.toValue(i),
                alignment: x.alignment()
            }), i;
        }
        _publicKey_0(e) {
            return this._persistentHash_0([
                new Uint8Array([
                    103,
                    117,
                    101,
                    115,
                    116,
                    45,
                    108,
                    105,
                    115,
                    116,
                    58,
                    112,
                    107,
                    58,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]),
                e
            ]);
        }
        _isAdmin_0(e, t) {
            let i = this._localSk_0(e, t), a = this._publicKey_0(i);
            return n(S.fromValue(l(e, t, [
                {
                    dup: {
                        n: 0
                    }
                },
                {
                    idx: {
                        cached: !1,
                        pushPath: !1,
                        path: [
                            {
                                tag: `value`,
                                value: {
                                    value: T.toValue(0n),
                                    alignment: T.alignment()
                                }
                            }
                        ]
                    }
                },
                {
                    push: {
                        storage: !1,
                        value: r.newCell({
                            value: x.toValue(a),
                            alignment: x.alignment()
                        }).encode()
                    }
                },
                `member`,
                {
                    popeq: {
                        cached: !0,
                        result: void 0
                    }
                }
            ]).value), `You are not an admin`), !0;
        }
        _addAdmin_0(e, t, i) {
            this._isAdmin_0(e, t);
            let a = this._publicKey_0(i);
            return n(!S.fromValue(l(e, t, [
                {
                    dup: {
                        n: 0
                    }
                },
                {
                    idx: {
                        cached: !1,
                        pushPath: !1,
                        path: [
                            {
                                tag: `value`,
                                value: {
                                    value: T.toValue(0n),
                                    alignment: T.alignment()
                                }
                            }
                        ]
                    }
                },
                {
                    push: {
                        storage: !1,
                        value: r.newCell({
                            value: x.toValue(a),
                            alignment: x.alignment()
                        }).encode()
                    }
                },
                `member`,
                {
                    popeq: {
                        cached: !0,
                        result: void 0
                    }
                }
            ]).value), `You are already in the admin list`), l(e, t, [
                {
                    idx: {
                        cached: !1,
                        pushPath: !0,
                        path: [
                            {
                                tag: `value`,
                                value: {
                                    value: T.toValue(0n),
                                    alignment: T.alignment()
                                }
                            }
                        ]
                    }
                },
                {
                    push: {
                        storage: !1,
                        value: r.newCell({
                            value: x.toValue(a),
                            alignment: x.alignment()
                        }).encode()
                    }
                },
                {
                    push: {
                        storage: !0,
                        value: r.newNull().encode()
                    }
                },
                {
                    ins: {
                        cached: !1,
                        n: 1
                    }
                },
                {
                    ins: {
                        cached: !0,
                        n: 1
                    }
                }
            ]), [];
        }
        _revokeAdmin_0(e, t, i) {
            this._isAdmin_0(e, t);
            let a = this._publicKey_0(i);
            return n(S.fromValue(l(e, t, [
                {
                    dup: {
                        n: 0
                    }
                },
                {
                    idx: {
                        cached: !1,
                        pushPath: !1,
                        path: [
                            {
                                tag: `value`,
                                value: {
                                    value: T.toValue(0n),
                                    alignment: T.alignment()
                                }
                            }
                        ]
                    }
                },
                {
                    push: {
                        storage: !1,
                        value: r.newCell({
                            value: x.toValue(a),
                            alignment: x.alignment()
                        }).encode()
                    }
                },
                `member`,
                {
                    popeq: {
                        cached: !0,
                        result: void 0
                    }
                }
            ]).value), `You are not in the admin list`), l(e, t, [
                {
                    idx: {
                        cached: !1,
                        pushPath: !0,
                        path: [
                            {
                                tag: `value`,
                                value: {
                                    value: T.toValue(0n),
                                    alignment: T.alignment()
                                }
                            }
                        ]
                    }
                },
                {
                    push: {
                        storage: !1,
                        value: r.newCell({
                            value: x.toValue(a),
                            alignment: x.alignment()
                        }).encode()
                    }
                },
                {
                    rem: {
                        cached: !1
                    }
                },
                {
                    ins: {
                        cached: !0,
                        n: 1
                    }
                }
            ]), [];
        }
        _adminOnlyAction_0(e, t) {
            return this._isAdmin_0(e, t), [];
        }
        _clinicOnlyAction_0(e, t) {
            let i = this._localSk_0(e, t), a = this._publicKey_0(i);
            return n(S.fromValue(l(e, t, [
                {
                    dup: {
                        n: 0
                    }
                },
                {
                    idx: {
                        cached: !1,
                        pushPath: !1,
                        path: [
                            {
                                tag: `value`,
                                value: {
                                    value: T.toValue(1n),
                                    alignment: T.alignment()
                                }
                            }
                        ]
                    }
                },
                {
                    push: {
                        storage: !1,
                        value: r.newCell({
                            value: x.toValue(a),
                            alignment: x.alignment()
                        }).encode()
                    }
                },
                `member`,
                {
                    popeq: {
                        cached: !0,
                        result: void 0
                    }
                }
            ]).value), `You are not an clinic`), [];
        }
        _addClinic_0(e, t, i) {
            this._isAdmin_0(e, t);
            let a = this._publicKey_0(i);
            return n(!S.fromValue(l(e, t, [
                {
                    dup: {
                        n: 0
                    }
                },
                {
                    idx: {
                        cached: !1,
                        pushPath: !1,
                        path: [
                            {
                                tag: `value`,
                                value: {
                                    value: T.toValue(1n),
                                    alignment: T.alignment()
                                }
                            }
                        ]
                    }
                },
                {
                    push: {
                        storage: !1,
                        value: r.newCell({
                            value: x.toValue(a),
                            alignment: x.alignment()
                        }).encode()
                    }
                },
                `member`,
                {
                    popeq: {
                        cached: !0,
                        result: void 0
                    }
                }
            ]).value), `You are already in the clinic list`), l(e, t, [
                {
                    idx: {
                        cached: !1,
                        pushPath: !0,
                        path: [
                            {
                                tag: `value`,
                                value: {
                                    value: T.toValue(1n),
                                    alignment: T.alignment()
                                }
                            }
                        ]
                    }
                },
                {
                    push: {
                        storage: !1,
                        value: r.newCell({
                            value: x.toValue(a),
                            alignment: x.alignment()
                        }).encode()
                    }
                },
                {
                    push: {
                        storage: !0,
                        value: r.newNull().encode()
                    }
                },
                {
                    ins: {
                        cached: !1,
                        n: 1
                    }
                },
                {
                    ins: {
                        cached: !0,
                        n: 1
                    }
                }
            ]), [];
        }
        _revokeClinic_0(e, t, i) {
            this._isAdmin_0(e, t);
            let a = this._publicKey_0(i);
            return n(!S.fromValue(l(e, t, [
                {
                    dup: {
                        n: 0
                    }
                },
                {
                    idx: {
                        cached: !1,
                        pushPath: !1,
                        path: [
                            {
                                tag: `value`,
                                value: {
                                    value: T.toValue(1n),
                                    alignment: T.alignment()
                                }
                            }
                        ]
                    }
                },
                {
                    push: {
                        storage: !1,
                        value: r.newCell({
                            value: x.toValue(a),
                            alignment: x.alignment()
                        }).encode()
                    }
                },
                `member`,
                {
                    popeq: {
                        cached: !0,
                        result: void 0
                    }
                }
            ]).value), `You are not in the clinic list`), l(e, t, [
                {
                    idx: {
                        cached: !1,
                        pushPath: !0,
                        path: [
                            {
                                tag: `value`,
                                value: {
                                    value: T.toValue(1n),
                                    alignment: T.alignment()
                                }
                            }
                        ]
                    }
                },
                {
                    push: {
                        storage: !1,
                        value: r.newCell({
                            value: x.toValue(a),
                            alignment: x.alignment()
                        }).encode()
                    }
                },
                {
                    rem: {
                        cached: !1
                    }
                },
                {
                    ins: {
                        cached: !0,
                        n: 1
                    }
                }
            ]), [];
        }
    };
    D = function(n) {
        let i = n instanceof r ? n : n.state, o = {
            currentQueryContext: new a(n instanceof r ? new c(n) : n, e()),
            costModel: b.initialCostModel()
        }, s = {
            input: {
                value: [],
                alignment: []
            },
            output: void 0,
            publicTranscript: [],
            privateTranscriptOutputs: []
        };
        return {
            admins: {
                isEmpty (...e) {
                    if (e.length !== 0) throw new t(`isEmpty: expected 0 arguments, received ${e.length}`);
                    return S.fromValue(l(o, s, [
                        {
                            dup: {
                                n: 0
                            }
                        },
                        {
                            idx: {
                                cached: !1,
                                pushPath: !1,
                                path: [
                                    {
                                        tag: `value`,
                                        value: {
                                            value: T.toValue(0n),
                                            alignment: T.alignment()
                                        }
                                    }
                                ]
                            }
                        },
                        `size`,
                        {
                            push: {
                                storage: !1,
                                value: r.newCell({
                                    value: w.toValue(0n),
                                    alignment: w.alignment()
                                }).encode()
                            }
                        },
                        `eq`,
                        {
                            popeq: {
                                cached: !0,
                                result: void 0
                            }
                        }
                    ]).value);
                },
                size (...e) {
                    if (e.length !== 0) throw new t(`size: expected 0 arguments, received ${e.length}`);
                    return w.fromValue(l(o, s, [
                        {
                            dup: {
                                n: 0
                            }
                        },
                        {
                            idx: {
                                cached: !1,
                                pushPath: !1,
                                path: [
                                    {
                                        tag: `value`,
                                        value: {
                                            value: T.toValue(0n),
                                            alignment: T.alignment()
                                        }
                                    }
                                ]
                            }
                        },
                        `size`,
                        {
                            popeq: {
                                cached: !0,
                                result: void 0
                            }
                        }
                    ]).value);
                },
                member (...e) {
                    if (e.length !== 1) throw new t(`member: expected 1 argument, received ${e.length}`);
                    let n = e[0];
                    return n.buffer instanceof ArrayBuffer && n.BYTES_PER_ELEMENT === 1 && n.length === 32 || u(`member`, `argument 1`, `vaxzk.compact line 5 char 1`, `Bytes<32>`, n), S.fromValue(l(o, s, [
                        {
                            dup: {
                                n: 0
                            }
                        },
                        {
                            idx: {
                                cached: !1,
                                pushPath: !1,
                                path: [
                                    {
                                        tag: `value`,
                                        value: {
                                            value: T.toValue(0n),
                                            alignment: T.alignment()
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            push: {
                                storage: !1,
                                value: r.newCell({
                                    value: x.toValue(n),
                                    alignment: x.alignment()
                                }).encode()
                            }
                        },
                        `member`,
                        {
                            popeq: {
                                cached: !0,
                                result: void 0
                            }
                        }
                    ]).value);
                },
                [Symbol.iterator] (...e) {
                    if (e.length !== 0) throw new t(`iter: expected 0 arguments, received ${e.length}`);
                    return i.asArray()[0].asMap().keys().map((e)=>x.fromValue(e.value))[Symbol.iterator]();
                }
            },
            clinics: {
                isEmpty (...e) {
                    if (e.length !== 0) throw new t(`isEmpty: expected 0 arguments, received ${e.length}`);
                    return S.fromValue(l(o, s, [
                        {
                            dup: {
                                n: 0
                            }
                        },
                        {
                            idx: {
                                cached: !1,
                                pushPath: !1,
                                path: [
                                    {
                                        tag: `value`,
                                        value: {
                                            value: T.toValue(1n),
                                            alignment: T.alignment()
                                        }
                                    }
                                ]
                            }
                        },
                        `size`,
                        {
                            push: {
                                storage: !1,
                                value: r.newCell({
                                    value: w.toValue(0n),
                                    alignment: w.alignment()
                                }).encode()
                            }
                        },
                        `eq`,
                        {
                            popeq: {
                                cached: !0,
                                result: void 0
                            }
                        }
                    ]).value);
                },
                size (...e) {
                    if (e.length !== 0) throw new t(`size: expected 0 arguments, received ${e.length}`);
                    return w.fromValue(l(o, s, [
                        {
                            dup: {
                                n: 0
                            }
                        },
                        {
                            idx: {
                                cached: !1,
                                pushPath: !1,
                                path: [
                                    {
                                        tag: `value`,
                                        value: {
                                            value: T.toValue(1n),
                                            alignment: T.alignment()
                                        }
                                    }
                                ]
                            }
                        },
                        `size`,
                        {
                            popeq: {
                                cached: !0,
                                result: void 0
                            }
                        }
                    ]).value);
                },
                member (...e) {
                    if (e.length !== 1) throw new t(`member: expected 1 argument, received ${e.length}`);
                    let n = e[0];
                    return n.buffer instanceof ArrayBuffer && n.BYTES_PER_ELEMENT === 1 && n.length === 32 || u(`member`, `argument 1`, `vaxzk.compact line 6 char 1`, `Bytes<32>`, n), S.fromValue(l(o, s, [
                        {
                            dup: {
                                n: 0
                            }
                        },
                        {
                            idx: {
                                cached: !1,
                                pushPath: !1,
                                path: [
                                    {
                                        tag: `value`,
                                        value: {
                                            value: T.toValue(1n),
                                            alignment: T.alignment()
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            push: {
                                storage: !1,
                                value: r.newCell({
                                    value: x.toValue(n),
                                    alignment: x.alignment()
                                }).encode()
                            }
                        },
                        `member`,
                        {
                            popeq: {
                                cached: !0,
                                result: void 0
                            }
                        }
                    ]).value);
                },
                [Symbol.iterator] (...e) {
                    if (e.length !== 0) throw new t(`iter: expected 0 arguments, received ${e.length}`);
                    return i.asArray()[1].asMap().keys().map((e)=>x.fromValue(e.value))[Symbol.iterator]();
                }
            }
        };
    };
    new a(new v().data, e());
    let O;
    O = new E({
        localSk: (...e)=>void 0
    });
    k = {
        publicKey: (...e)=>{
            if (e.length !== 1) throw new t(`publicKey: expected 1 argument (as invoked from Typescript), received ${e.length}`);
            let n = e[0];
            return n.buffer instanceof ArrayBuffer && n.BYTES_PER_ELEMENT === 1 && n.length === 32 || u(`publicKey`, `argument 1`, `vaxzk.compact line 10 char 1`, `Bytes<32>`, n), O._publicKey_0(n);
        }
    };
    A = {
        tag: `publicLedgerArray`,
        indices: {}
    };
});
export { E as Contract, A as contractReferenceLocations, D as ledger, k as pureCircuits, __tla };
