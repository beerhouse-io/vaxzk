import * as __compactRuntime from '@midnight-ntwrk/compact-runtime';
__compactRuntime.checkRuntimeVersion('0.15.0');

export var Role;
(function (Role) {
  Role[Role['admin'] = 0] = 'admin';
  Role[Role['clinic'] = 1] = 'clinic';
})(Role || (Role = {}));

const _descriptor_0 = new __compactRuntime.CompactTypeBytes(32);

const _descriptor_1 = new __compactRuntime.CompactTypeBytes(20);

const _descriptor_2 = new __compactRuntime.CompactTypeUnsignedInteger(340282366920938463463374607431768211455n, 16);

class _VaccineProofRequest_0 {
  alignment() {
    return _descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_2.alignment()));
  }
  fromValue(value_0) {
    return {
      vaccine: _descriptor_1.fromValue(value_0),
      personalId: _descriptor_1.fromValue(value_0),
      validUntil: _descriptor_2.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_1.toValue(value_0.vaccine).concat(_descriptor_1.toValue(value_0.personalId).concat(_descriptor_2.toValue(value_0.validUntil)));
  }
}

const _descriptor_3 = new _VaccineProofRequest_0();

const _descriptor_4 = __compactRuntime.CompactTypeBoolean;

const _descriptor_5 = __compactRuntime.CompactTypeJubjubPoint;

const _descriptor_6 = __compactRuntime.CompactTypeField;

class _SchnorrSignature_0 {
  alignment() {
    return _descriptor_5.alignment().concat(_descriptor_6.alignment());
  }
  fromValue(value_0) {
    return {
      announcement: _descriptor_5.fromValue(value_0),
      response: _descriptor_6.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_5.toValue(value_0.announcement).concat(_descriptor_6.toValue(value_0.response));
  }
}

const _descriptor_7 = new _SchnorrSignature_0();

class _VaxZkProof_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_2.alignment().concat(_descriptor_7.alignment()))));
  }
  fromValue(value_0) {
    return {
      issuerId: _descriptor_0.fromValue(value_0),
      vaccine: _descriptor_1.fromValue(value_0),
      personalId: _descriptor_1.fromValue(value_0),
      expirationDate: _descriptor_2.fromValue(value_0),
      issuerSignature: _descriptor_7.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.issuerId).concat(_descriptor_1.toValue(value_0.vaccine).concat(_descriptor_1.toValue(value_0.personalId).concat(_descriptor_2.toValue(value_0.expirationDate).concat(_descriptor_7.toValue(value_0.issuerSignature)))));
  }
}

const _descriptor_8 = new _VaxZkProof_0();

const _descriptor_9 = __compactRuntime.CompactTypeOpaqueString;

class _CertIssuerInfo_0 {
  alignment() {
    return _descriptor_9.alignment().concat(_descriptor_9.alignment().concat(_descriptor_5.alignment().concat(_descriptor_9.alignment())));
  }
  fromValue(value_0) {
    return {
      uri: _descriptor_9.fromValue(value_0),
      name: _descriptor_9.fromValue(value_0),
      key: _descriptor_5.fromValue(value_0),
      verificationEndpoint: _descriptor_9.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_9.toValue(value_0.uri).concat(_descriptor_9.toValue(value_0.name).concat(_descriptor_5.toValue(value_0.key).concat(_descriptor_9.toValue(value_0.verificationEndpoint))));
  }
}

const _descriptor_10 = new _CertIssuerInfo_0();

const _descriptor_11 = new __compactRuntime.CompactTypeBytes(64);

class _ClinicProfile_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_11.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_4.alignment())))));
  }
  fromValue(value_0) {
    return {
      ownerId: _descriptor_0.fromValue(value_0),
      name: _descriptor_0.fromValue(value_0),
      address: _descriptor_11.fromValue(value_0),
      latitud: _descriptor_1.fromValue(value_0),
      longitud: _descriptor_1.fromValue(value_0),
      isOnline: _descriptor_4.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.ownerId).concat(_descriptor_0.toValue(value_0.name).concat(_descriptor_11.toValue(value_0.address).concat(_descriptor_1.toValue(value_0.latitud).concat(_descriptor_1.toValue(value_0.longitud).concat(_descriptor_4.toValue(value_0.isOnline))))));
  }
}

const _descriptor_12 = new _ClinicProfile_0();

const _descriptor_13 = new __compactRuntime.CompactTypeUnsignedInteger(65535n, 2);

const _descriptor_14 = new __compactRuntime.CompactTypeUnsignedInteger(18446744073709551615n, 8);

const _descriptor_15 = new __compactRuntime.CompactTypeEnum(1, 1);

class _ZswapCoinPublicKey_0 {
  alignment() {
    return _descriptor_0.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.bytes);
  }
}

const _descriptor_16 = new _ZswapCoinPublicKey_0();

const _descriptor_17 = new __compactRuntime.CompactTypeUnsignedInteger(452312848583266388373324160190187140051835877600158453279131187530910662655n, 31);

class _tuple_0 {
  alignment() {
    return _descriptor_6.alignment().concat(_descriptor_17.alignment());
  }
  fromValue(value_0) {
    return [
      _descriptor_6.fromValue(value_0),
      _descriptor_17.fromValue(value_0)
    ]
  }
  toValue(value_0) {
    return _descriptor_6.toValue(value_0[0]).concat(_descriptor_17.toValue(value_0[1]));
  }
}

const _descriptor_18 = new _tuple_0();

const _descriptor_19 = new __compactRuntime.CompactTypeVector(2, _descriptor_6);

class _VaxZkSchnorrHashInput_0 {
  alignment() {
    return _descriptor_5.alignment().concat(_descriptor_5.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_2.alignment().concat(_descriptor_0.alignment())))));
  }
  fromValue(value_0) {
    return {
      ann: _descriptor_5.fromValue(value_0),
      pk: _descriptor_5.fromValue(value_0),
      vaccine: _descriptor_1.fromValue(value_0),
      personalId: _descriptor_1.fromValue(value_0),
      expirationDate: _descriptor_2.fromValue(value_0),
      userPubKey: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_5.toValue(value_0.ann).concat(_descriptor_5.toValue(value_0.pk).concat(_descriptor_1.toValue(value_0.vaccine).concat(_descriptor_1.toValue(value_0.personalId).concat(_descriptor_2.toValue(value_0.expirationDate).concat(_descriptor_0.toValue(value_0.userPubKey))))));
  }
}

const _descriptor_20 = new _VaxZkSchnorrHashInput_0();

const _descriptor_21 = new __compactRuntime.CompactTypeVector(2, _descriptor_0);

class _Either_0 {
  alignment() {
    return _descriptor_4.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment()));
  }
  fromValue(value_0) {
    return {
      is_left: _descriptor_4.fromValue(value_0),
      left: _descriptor_0.fromValue(value_0),
      right: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_4.toValue(value_0.is_left).concat(_descriptor_0.toValue(value_0.left).concat(_descriptor_0.toValue(value_0.right)));
  }
}

const _descriptor_22 = new _Either_0();

class _ContractAddress_0 {
  alignment() {
    return _descriptor_0.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.bytes);
  }
}

const _descriptor_23 = new _ContractAddress_0();

const _descriptor_24 = new __compactRuntime.CompactTypeUnsignedInteger(255n, 1);

export class Contract {
  witnesses;
  constructor(...args_0) {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`Contract constructor: expected 1 argument, received ${args_0.length}`);
    }
    const witnesses_0 = args_0[0];
    if (typeof(witnesses_0) !== 'object') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor is not an object');
    }
    if (typeof(witnesses_0.getSchnorrReduction) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named getSchnorrReduction');
    }
    if (typeof(witnesses_0.getAttestedCertProofWitness) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named getAttestedCertProofWitness');
    }
    this.witnesses = witnesses_0;
    this.circuits = {
      schnorrChallengeVaxZk(context, ...args_1) {
        return { result: pureCircuits.schnorrChallengeVaxZk(...args_1), context };
      },
      registerInvite: (...args_1) => {
        if (args_1.length !== 3) {
          throw new __compactRuntime.CompactError(`registerInvite: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const role_0 = args_1[1];
        const inviteCode_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('registerInvite',
                                     'argument 1 (as invoked from Typescript)',
                                     'Invites.compact line 37 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(typeof(role_0) === 'number' && role_0 >= 0 && role_0 <= 1)) {
          __compactRuntime.typeError('registerInvite',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'Invites.compact line 37 char 1',
                                     'Enum<Role, admin, clinic>',
                                     role_0)
        }
        if (!(inviteCode_0.buffer instanceof ArrayBuffer && inviteCode_0.BYTES_PER_ELEMENT === 1 && inviteCode_0.length === 32)) {
          __compactRuntime.typeError('registerInvite',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'Invites.compact line 37 char 1',
                                     'Bytes<32>',
                                     inviteCode_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_15.toValue(role_0).concat(_descriptor_0.toValue(inviteCode_0)),
            alignment: _descriptor_15.alignment().concat(_descriptor_0.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._registerInvite_0(context,
                                                partialProofData,
                                                role_0,
                                                inviteCode_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      acceptInvite: (...args_1) => {
        if (args_1.length !== 3) {
          throw new __compactRuntime.CompactError(`acceptInvite: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const role_0 = args_1[1];
        const inviteCode_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('acceptInvite',
                                     'argument 1 (as invoked from Typescript)',
                                     'Invites.compact line 51 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(typeof(role_0) === 'number' && role_0 >= 0 && role_0 <= 1)) {
          __compactRuntime.typeError('acceptInvite',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'Invites.compact line 51 char 1',
                                     'Enum<Role, admin, clinic>',
                                     role_0)
        }
        if (!(inviteCode_0.buffer instanceof ArrayBuffer && inviteCode_0.BYTES_PER_ELEMENT === 1 && inviteCode_0.length === 32)) {
          __compactRuntime.typeError('acceptInvite',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'Invites.compact line 51 char 1',
                                     'Bytes<32>',
                                     inviteCode_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_15.toValue(role_0).concat(_descriptor_0.toValue(inviteCode_0)),
            alignment: _descriptor_15.alignment().concat(_descriptor_0.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._acceptInvite_0(context,
                                              partialProofData,
                                              role_0,
                                              inviteCode_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      revokeAdmin: (...args_1) => {
        if (args_1.length !== 1) {
          throw new __compactRuntime.CompactError(`revokeAdmin: expected 1 argument (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('revokeAdmin',
                                     'argument 1 (as invoked from Typescript)',
                                     'Invites.compact line 76 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: { value: [], alignment: [] },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._revokeAdmin_0(context, partialProofData);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      getShieldedId(context, ...args_1) {
        return { result: pureCircuits.getShieldedId(...args_1), context };
      },
      addClinic: (...args_1) => {
        if (args_1.length !== 3) {
          throw new __compactRuntime.CompactError(`addClinic: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const clinicId_0 = args_1[1];
        const clinicProfile_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('addClinic',
                                     'argument 1 (as invoked from Typescript)',
                                     'vaxzk.compact line 113 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(clinicId_0.buffer instanceof ArrayBuffer && clinicId_0.BYTES_PER_ELEMENT === 1 && clinicId_0.length === 32)) {
          __compactRuntime.typeError('addClinic',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'vaxzk.compact line 113 char 1',
                                     'Bytes<32>',
                                     clinicId_0)
        }
        if (!(typeof(clinicProfile_0) === 'object' && clinicProfile_0.ownerId.buffer instanceof ArrayBuffer && clinicProfile_0.ownerId.BYTES_PER_ELEMENT === 1 && clinicProfile_0.ownerId.length === 32 && clinicProfile_0.name.buffer instanceof ArrayBuffer && clinicProfile_0.name.BYTES_PER_ELEMENT === 1 && clinicProfile_0.name.length === 32 && clinicProfile_0.address.buffer instanceof ArrayBuffer && clinicProfile_0.address.BYTES_PER_ELEMENT === 1 && clinicProfile_0.address.length === 64 && clinicProfile_0.latitud.buffer instanceof ArrayBuffer && clinicProfile_0.latitud.BYTES_PER_ELEMENT === 1 && clinicProfile_0.latitud.length === 20 && clinicProfile_0.longitud.buffer instanceof ArrayBuffer && clinicProfile_0.longitud.BYTES_PER_ELEMENT === 1 && clinicProfile_0.longitud.length === 20 && typeof(clinicProfile_0.isOnline) === 'boolean')) {
          __compactRuntime.typeError('addClinic',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'vaxzk.compact line 113 char 1',
                                     'struct ClinicProfile<ownerId: Bytes<32>, name: Bytes<32>, address: Bytes<64>, latitud: Bytes<20>, longitud: Bytes<20>, isOnline: Boolean>',
                                     clinicProfile_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(clinicId_0).concat(_descriptor_12.toValue(clinicProfile_0)),
            alignment: _descriptor_0.alignment().concat(_descriptor_12.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._addClinic_0(context,
                                           partialProofData,
                                           clinicId_0,
                                           clinicProfile_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      revokeClinic: (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`revokeClinic: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const clinicId_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('revokeClinic',
                                     'argument 1 (as invoked from Typescript)',
                                     'vaxzk.compact line 122 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(clinicId_0.buffer instanceof ArrayBuffer && clinicId_0.BYTES_PER_ELEMENT === 1 && clinicId_0.length === 32)) {
          __compactRuntime.typeError('revokeClinic',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'vaxzk.compact line 122 char 1',
                                     'Bytes<32>',
                                     clinicId_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(clinicId_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._revokeClinic_0(context,
                                              partialProofData,
                                              clinicId_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      addCertificateIssuer: (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`addCertificateIssuer: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const issuerInfo_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('addCertificateIssuer',
                                     'argument 1 (as invoked from Typescript)',
                                     'vaxzk.compact line 134 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(typeof(issuerInfo_0) === 'object' && true && true && true && true)) {
          __compactRuntime.typeError('addCertificateIssuer',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'vaxzk.compact line 134 char 1',
                                     'struct CertIssuerInfo<uri: Opaque<"string">, name: Opaque<"string">, key: Opaque<"JubjubPoint">, verificationEndpoint: Opaque<"string">>',
                                     issuerInfo_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_10.toValue(issuerInfo_0),
            alignment: _descriptor_10.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._addCertificateIssuer_0(context,
                                                      partialProofData,
                                                      issuerInfo_0);
        partialProofData.output = { value: _descriptor_0.toValue(result_0), alignment: _descriptor_0.alignment() };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      addVaccine: (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`addVaccine: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const name_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('addVaccine',
                                     'argument 1 (as invoked from Typescript)',
                                     'vaxzk.compact line 143 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(name_0.buffer instanceof ArrayBuffer && name_0.BYTES_PER_ELEMENT === 1 && name_0.length === 20)) {
          __compactRuntime.typeError('addVaccine',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'vaxzk.compact line 143 char 1',
                                     'Bytes<20>',
                                     name_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_1.toValue(name_0),
            alignment: _descriptor_1.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._addVaccine_0(context, partialProofData, name_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      delVaccine: (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`delVaccine: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const name_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('delVaccine',
                                     'argument 1 (as invoked from Typescript)',
                                     'vaxzk.compact line 151 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(name_0.buffer instanceof ArrayBuffer && name_0.BYTES_PER_ELEMENT === 1 && name_0.length === 20)) {
          __compactRuntime.typeError('delVaccine',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'vaxzk.compact line 151 char 1',
                                     'Bytes<20>',
                                     name_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_1.toValue(name_0),
            alignment: _descriptor_1.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._delVaccine_0(context, partialProofData, name_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      requestVaccineProof: (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`requestVaccineProof: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const req_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('requestVaccineProof',
                                     'argument 1 (as invoked from Typescript)',
                                     'vaxzk.compact line 159 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(typeof(req_0) === 'object' && req_0.vaccine.buffer instanceof ArrayBuffer && req_0.vaccine.BYTES_PER_ELEMENT === 1 && req_0.vaccine.length === 20 && req_0.personalId.buffer instanceof ArrayBuffer && req_0.personalId.BYTES_PER_ELEMENT === 1 && req_0.personalId.length === 20 && typeof(req_0.validUntil) === 'bigint' && req_0.validUntil >= 0n && req_0.validUntil <= 340282366920938463463374607431768211455n)) {
          __compactRuntime.typeError('requestVaccineProof',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'vaxzk.compact line 159 char 1',
                                     'struct VaccineProofRequest<vaccine: Bytes<20>, personalId: Bytes<20>, validUntil: Uint<0..340282366920938463463374607431768211456>>',
                                     req_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_3.toValue(req_0),
            alignment: _descriptor_3.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._requestVaccineProof_0(context,
                                                     partialProofData,
                                                     req_0);
        partialProofData.output = { value: _descriptor_0.toValue(result_0), alignment: _descriptor_0.alignment() };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      submitVaccineProof: (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`submitVaccineProof: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const proofReqId_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('submitVaccineProof',
                                     'argument 1 (as invoked from Typescript)',
                                     'vaxzk.compact line 176 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(proofReqId_0.buffer instanceof ArrayBuffer && proofReqId_0.BYTES_PER_ELEMENT === 1 && proofReqId_0.length === 32)) {
          __compactRuntime.typeError('submitVaccineProof',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'vaxzk.compact line 176 char 1',
                                     'Bytes<32>',
                                     proofReqId_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(proofReqId_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._submitVaccineProof_0(context,
                                                    partialProofData,
                                                    proofReqId_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      }
    };
    this.impureCircuits = {
      registerInvite: this.circuits.registerInvite,
      acceptInvite: this.circuits.acceptInvite,
      revokeAdmin: this.circuits.revokeAdmin,
      addClinic: this.circuits.addClinic,
      revokeClinic: this.circuits.revokeClinic,
      addCertificateIssuer: this.circuits.addCertificateIssuer,
      addVaccine: this.circuits.addVaccine,
      delVaccine: this.circuits.delVaccine,
      requestVaccineProof: this.circuits.requestVaccineProof,
      submitVaccineProof: this.circuits.submitVaccineProof
    };
    this.provableCircuits = {
      registerInvite: this.circuits.registerInvite,
      acceptInvite: this.circuits.acceptInvite,
      revokeAdmin: this.circuits.revokeAdmin,
      addClinic: this.circuits.addClinic,
      revokeClinic: this.circuits.revokeClinic,
      addCertificateIssuer: this.circuits.addCertificateIssuer,
      addVaccine: this.circuits.addVaccine,
      delVaccine: this.circuits.delVaccine,
      requestVaccineProof: this.circuits.requestVaccineProof,
      submitVaccineProof: this.circuits.submitVaccineProof
    };
  }
  initialState(...args_0) {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    }
    const constructorContext_0 = args_0[0];
    if (typeof(constructorContext_0) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'constructorContext' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!('initialPrivateState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialPrivateState' in argument 1 (as invoked from Typescript)`);
    }
    if (!('initialZswapLocalState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript)`);
    }
    if (typeof(constructorContext_0.initialZswapLocalState) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript) to be an object`);
    }
    const state_0 = new __compactRuntime.ContractState();
    let stateValue_0 = __compactRuntime.StateValue.newArray();
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    state_0.data = new __compactRuntime.ChargedState(stateValue_0);
    state_0.setOperation('registerInvite', new __compactRuntime.ContractOperation());
    state_0.setOperation('acceptInvite', new __compactRuntime.ContractOperation());
    state_0.setOperation('revokeAdmin', new __compactRuntime.ContractOperation());
    state_0.setOperation('addClinic', new __compactRuntime.ContractOperation());
    state_0.setOperation('revokeClinic', new __compactRuntime.ContractOperation());
    state_0.setOperation('addCertificateIssuer', new __compactRuntime.ContractOperation());
    state_0.setOperation('addVaccine', new __compactRuntime.ContractOperation());
    state_0.setOperation('delVaccine', new __compactRuntime.ContractOperation());
    state_0.setOperation('requestVaccineProof', new __compactRuntime.ContractOperation());
    state_0.setOperation('submitVaccineProof', new __compactRuntime.ContractOperation());
    const context = __compactRuntime.createCircuitContext(__compactRuntime.dummyContractAddress(), constructorContext_0.initialZswapLocalState.coinPublicKey, state_0.data, constructorContext_0.initialPrivateState);
    const partialProofData = {
      input: { value: [], alignment: [] },
      output: undefined,
      publicTranscript: [],
      privateTranscriptOutputs: []
    };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_24.toValue(0n),
                                                                                              alignment: _descriptor_24.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_24.toValue(1n),
                                                                                              alignment: _descriptor_24.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_24.toValue(2n),
                                                                                              alignment: _descriptor_24.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_24.toValue(3n),
                                                                                              alignment: _descriptor_24.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_24.toValue(4n),
                                                                                              alignment: _descriptor_24.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_24.toValue(5n),
                                                                                              alignment: _descriptor_24.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_24.toValue(6n),
                                                                                              alignment: _descriptor_24.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_24.toValue(7n),
                                                                                              alignment: _descriptor_24.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(0n),
                                                                                              alignment: _descriptor_14.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_24.toValue(8n),
                                                                                              alignment: _descriptor_24.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(0n),
                                                                                              alignment: _descriptor_14.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_24.toValue(9n),
                                                                                              alignment: _descriptor_24.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_24.toValue(10n),
                                                                                              alignment: _descriptor_24.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    const own_0 = this._ownPublicKey_0(context, partialProofData);
    const adminId_0 = this._getShieldedId_0(own_0.bytes);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(0n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(adminId_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newNull().encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    const tmp_0 = 1n;
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(7n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                                              { value: _descriptor_13.toValue(tmp_0),
                                                                alignment: _descriptor_13.alignment() }
                                                                .value
                                                            )) } },
                                       { ins: { cached: true, n: 1 } }]);
    const tmp_1 = 1n;
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(8n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                                              { value: _descriptor_13.toValue(tmp_1),
                                                                alignment: _descriptor_13.alignment() }
                                                                .value
                                                            )) } },
                                       { ins: { cached: true, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(5n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(new Uint8Array([72, 101, 112, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
                                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newNull().encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(5n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(new Uint8Array([80, 67, 86, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
                                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newNull().encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(5n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(new Uint8Array([84, 100, 97, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
                                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newNull().encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    const tmp_2 = { ownerId: adminId_0,
                    name:
                      new Uint8Array([67, 108, 105, 110, 105, 99, 32, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                    address:
                      new Uint8Array([49, 50, 51, 32, 77, 97, 105, 110, 32, 83, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                    latitud:
                      new Uint8Array([45, 50, 51, 46, 53, 57, 57, 48, 50, 54, 51, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                    longitud:
                      new Uint8Array([45, 52, 54, 46, 54, 52, 49, 57, 55, 49, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                    isOnline: true };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(4n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array([99, 108, 105, 110, 105, 99, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_12.toValue(tmp_2),
                                                                                              alignment: _descriptor_12.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    const tmp_3 = { ownerId: adminId_0,
                    name:
                      new Uint8Array([67, 108, 105, 110, 105, 99, 32, 76, 111, 99, 97, 108, 32, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                    address:
                      new Uint8Array([49, 50, 51, 32, 77, 97, 105, 110, 32, 83, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                    latitud:
                      new Uint8Array([45, 50, 51, 46, 53, 57, 57, 48, 50, 54, 51, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                    longitud:
                      new Uint8Array([45, 52, 54, 46, 54, 52, 49, 57, 55, 49, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                    isOnline: true };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(4n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array([99, 108, 105, 110, 105, 99, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_12.toValue(tmp_3),
                                                                                              alignment: _descriptor_12.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(2n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(adminId_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newNull().encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    state_0.data = new __compactRuntime.ChargedState(context.currentQueryContext.state.state);
    return {
      currentContractState: state_0,
      currentPrivateState: context.currentPrivateState,
      currentZswapLocalState: context.currentZswapLocalState
    }
  }
  _transientHash_0(value_0) {
    const result_0 = __compactRuntime.transientHash(_descriptor_20, value_0);
    return result_0;
  }
  _persistentHash_0(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_21, value_0);
    return result_0;
  }
  _persistentHash_1(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_19, value_0);
    return result_0;
  }
  _ecAdd_0(a_0, b_0) {
    const result_0 = __compactRuntime.ecAdd(a_0, b_0);
    return result_0;
  }
  _ecMul_0(a_0, b_0) {
    const result_0 = __compactRuntime.ecMul(a_0, b_0);
    return result_0;
  }
  _ecMulGenerator_0(b_0) {
    const result_0 = __compactRuntime.ecMulGenerator(b_0);
    return result_0;
  }
  _ownPublicKey_0(context, partialProofData) {
    const result_0 = __compactRuntime.ownPublicKey(context);
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_16.toValue(result_0),
      alignment: _descriptor_16.alignment()
    });
    return result_0;
  }
  _getSchnorrReduction_0(context, partialProofData, challengeHash_0) {
    const witnessContext_0 = __compactRuntime.createWitnessContext(ledger(context.currentQueryContext.state), context.currentPrivateState, context.currentQueryContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.getSchnorrReduction(witnessContext_0,
                                                                              challengeHash_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(Array.isArray(result_0) && result_0.length === 2  && typeof(result_0[0]) === 'bigint' && result_0[0] >= 0 && result_0[0] <= __compactRuntime.MAX_FIELD && typeof(result_0[1]) === 'bigint' && result_0[1] >= 0n && result_0[1] <= 452312848583266388373324160190187140051835877600158453279131187530910662655n)) {
      __compactRuntime.typeError('getSchnorrReduction',
                                 'return value',
                                 'Schnorr.compact line 29 char 3',
                                 '[Field, Uint<0..452312848583266388373324160190187140051835877600158453279131187530910662656>]',
                                 result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_18.toValue(result_0),
      alignment: _descriptor_18.alignment()
    });
    return result_0;
  }
  _schnorrVerifyVaxZk_0(context,
                        partialProofData,
                        vaccine_0,
                        personalId_0,
                        expirationDate_0,
                        userPubKey_0,
                        signature_0,
                        pk_0)
  {
    const __compact_pattern_tmp2_0 = signature_0;
    const announcement_0 = __compact_pattern_tmp2_0.announcement;
    const response_0 = __compact_pattern_tmp2_0.response;
    const cFull_0 = this._schnorrChallengeVaxZk_0(announcement_0,
                                                  pk_0,
                                                  vaccine_0,
                                                  personalId_0,
                                                  expirationDate_0,
                                                  userPubKey_0);
    const TWO_248_0 = 452312848583266388373324160190187140051835877600158453279131187530910662656n;
    const __compact_pattern_tmp1_0 = this._getSchnorrReduction_0(context,
                                                                 partialProofData,
                                                                 cFull_0);
    const q_0 = __compact_pattern_tmp1_0[0];
    const cTruncated_0 = __compact_pattern_tmp1_0[1];
    __compactRuntime.assert(__compactRuntime.addField(__compactRuntime.mulField(q_0,
                                                                                TWO_248_0),
                                                      cTruncated_0)
                            ===
                            cFull_0,
                            'Invalid challenge reduction');
    const c_0 = cTruncated_0;
    const lhs_0 = this._ecMulGenerator_0(response_0);
    const rhs_0 = this._ecAdd_0(announcement_0, this._ecMul_0(pk_0, c_0));
    __compactRuntime.assert(lhs_0 === rhs_0, 'Invalid attestation signature');
    return [];
  }
  _schnorrChallengeVaxZk_0(ann_0,
                           pk_0,
                           vaccine_0,
                           personalId_0,
                           expirationDate_0,
                           userPubKey_0)
  {
    const cFull_0 = this._transientHash_0({ ann: ann_0,
                                            pk: pk_0,
                                            vaccine: vaccine_0,
                                            personalId: personalId_0,
                                            expirationDate: expirationDate_0,
                                            userPubKey: userPubKey_0 });
    return cFull_0;
  }
  _isAdmin_0(context, partialProofData) {
    const own_0 = this._ownPublicKey_0(context, partialProofData);
    const adminId_0 = this._getShieldedId_0(own_0.bytes);
    __compactRuntime.assert(_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_24.toValue(0n),
                                                                                                                  alignment: _descriptor_24.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(adminId_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'You are not an admin');
    return [];
  }
  _isClinic_0(context, partialProofData) {
    const own_0 = this._ownPublicKey_0(context, partialProofData);
    const ownerId_0 = this._getShieldedId_0(own_0.bytes);
    __compactRuntime.assert(_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_24.toValue(2n),
                                                                                                                  alignment: _descriptor_24.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(ownerId_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'You are not a registered clinic');
    return [];
  }
  _registerInvite_0(context, partialProofData, role_0, inviteCode_0) {
    this._isAdmin_0(context, partialProofData);
    const d_role_0 = role_0;
    if (d_role_0 === 1) {
      __compactRuntime.queryLedgerState(context,
                                        partialProofData,
                                        [
                                         { idx: { cached: false,
                                                  pushPath: true,
                                                  path: [
                                                         { tag: 'value',
                                                           value: { value: _descriptor_24.toValue(3n),
                                                                    alignment: _descriptor_24.alignment() } }] } },
                                         { push: { storage: false,
                                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(inviteCode_0),
                                                                                                alignment: _descriptor_0.alignment() }).encode() } },
                                         { push: { storage: true,
                                                   value: __compactRuntime.StateValue.newNull().encode() } },
                                         { ins: { cached: false, n: 1 } },
                                         { ins: { cached: true, n: 1 } }]);
    } else {
      if (d_role_0 === 0) {
        __compactRuntime.queryLedgerState(context,
                                          partialProofData,
                                          [
                                           { idx: { cached: false,
                                                    pushPath: true,
                                                    path: [
                                                           { tag: 'value',
                                                             value: { value: _descriptor_24.toValue(1n),
                                                                      alignment: _descriptor_24.alignment() } }] } },
                                           { push: { storage: false,
                                                     value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(inviteCode_0),
                                                                                                  alignment: _descriptor_0.alignment() }).encode() } },
                                           { push: { storage: true,
                                                     value: __compactRuntime.StateValue.newNull().encode() } },
                                           { ins: { cached: false, n: 1 } },
                                           { ins: { cached: true, n: 1 } }]);
      }
    }
    return [];
  }
  _acceptInvite_0(context, partialProofData, role_0, inviteCode_0) {
    const d_role_0 = role_0;
    const d_inviteCode_0 = inviteCode_0;
    const own_0 = this._ownPublicKey_0(context, partialProofData);
    if (d_role_0 === 1) {
      __compactRuntime.assert(_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                        partialProofData,
                                                                                        [
                                                                                         { dup: { n: 0 } },
                                                                                         { idx: { cached: false,
                                                                                                  pushPath: false,
                                                                                                  path: [
                                                                                                         { tag: 'value',
                                                                                                           value: { value: _descriptor_24.toValue(3n),
                                                                                                                    alignment: _descriptor_24.alignment() } }] } },
                                                                                         { push: { storage: false,
                                                                                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(d_inviteCode_0),
                                                                                                                                                alignment: _descriptor_0.alignment() }).encode() } },
                                                                                         'member',
                                                                                         { popeq: { cached: true,
                                                                                                    result: undefined } }]).value),
                              'Invalid clinic invite code');
      const ownerId_0 = this._getShieldedId_0(own_0.bytes);
      __compactRuntime.assert(!_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                         partialProofData,
                                                                                         [
                                                                                          { dup: { n: 0 } },
                                                                                          { idx: { cached: false,
                                                                                                   pushPath: false,
                                                                                                   path: [
                                                                                                          { tag: 'value',
                                                                                                            value: { value: _descriptor_24.toValue(2n),
                                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                                          { push: { storage: false,
                                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(ownerId_0),
                                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                                          'member',
                                                                                          { popeq: { cached: true,
                                                                                                     result: undefined } }]).value),
                              'user is already a clinic');
      __compactRuntime.queryLedgerState(context,
                                        partialProofData,
                                        [
                                         { idx: { cached: false,
                                                  pushPath: true,
                                                  path: [
                                                         { tag: 'value',
                                                           value: { value: _descriptor_24.toValue(2n),
                                                                    alignment: _descriptor_24.alignment() } }] } },
                                         { push: { storage: false,
                                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(ownerId_0),
                                                                                                alignment: _descriptor_0.alignment() }).encode() } },
                                         { push: { storage: true,
                                                   value: __compactRuntime.StateValue.newNull().encode() } },
                                         { ins: { cached: false, n: 1 } },
                                         { ins: { cached: true, n: 1 } }]);
      __compactRuntime.queryLedgerState(context,
                                        partialProofData,
                                        [
                                         { idx: { cached: false,
                                                  pushPath: true,
                                                  path: [
                                                         { tag: 'value',
                                                           value: { value: _descriptor_24.toValue(3n),
                                                                    alignment: _descriptor_24.alignment() } }] } },
                                         { push: { storage: false,
                                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(d_inviteCode_0),
                                                                                                alignment: _descriptor_0.alignment() }).encode() } },
                                         { rem: { cached: false } },
                                         { ins: { cached: true, n: 1 } }]);
    } else {
      if (d_role_0 === 0) {
        __compactRuntime.assert(_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                          partialProofData,
                                                                                          [
                                                                                           { dup: { n: 0 } },
                                                                                           { idx: { cached: false,
                                                                                                    pushPath: false,
                                                                                                    path: [
                                                                                                           { tag: 'value',
                                                                                                             value: { value: _descriptor_24.toValue(1n),
                                                                                                                      alignment: _descriptor_24.alignment() } }] } },
                                                                                           { push: { storage: false,
                                                                                                     value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(d_inviteCode_0),
                                                                                                                                                  alignment: _descriptor_0.alignment() }).encode() } },
                                                                                           'member',
                                                                                           { popeq: { cached: true,
                                                                                                      result: undefined } }]).value),
                                'Invalid admin invite code');
        const adminId_0 = this._getShieldedId_0(own_0.bytes);
        __compactRuntime.assert(!_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                           partialProofData,
                                                                                           [
                                                                                            { dup: { n: 0 } },
                                                                                            { idx: { cached: false,
                                                                                                     pushPath: false,
                                                                                                     path: [
                                                                                                            { tag: 'value',
                                                                                                              value: { value: _descriptor_24.toValue(0n),
                                                                                                                       alignment: _descriptor_24.alignment() } }] } },
                                                                                            { push: { storage: false,
                                                                                                      value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(adminId_0),
                                                                                                                                                   alignment: _descriptor_0.alignment() }).encode() } },
                                                                                            'member',
                                                                                            { popeq: { cached: true,
                                                                                                       result: undefined } }]).value),
                                'user is already an admin');
        __compactRuntime.queryLedgerState(context,
                                          partialProofData,
                                          [
                                           { idx: { cached: false,
                                                    pushPath: true,
                                                    path: [
                                                           { tag: 'value',
                                                             value: { value: _descriptor_24.toValue(0n),
                                                                      alignment: _descriptor_24.alignment() } }] } },
                                           { push: { storage: false,
                                                     value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(adminId_0),
                                                                                                  alignment: _descriptor_0.alignment() }).encode() } },
                                           { push: { storage: true,
                                                     value: __compactRuntime.StateValue.newNull().encode() } },
                                           { ins: { cached: false, n: 1 } },
                                           { ins: { cached: true, n: 1 } }]);
        __compactRuntime.queryLedgerState(context,
                                          partialProofData,
                                          [
                                           { idx: { cached: false,
                                                    pushPath: true,
                                                    path: [
                                                           { tag: 'value',
                                                             value: { value: _descriptor_24.toValue(1n),
                                                                      alignment: _descriptor_24.alignment() } }] } },
                                           { push: { storage: false,
                                                     value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(d_inviteCode_0),
                                                                                                  alignment: _descriptor_0.alignment() }).encode() } },
                                           { rem: { cached: false } },
                                           { ins: { cached: true, n: 1 } }]);
      }
    }
    return [];
  }
  _revokeAdmin_0(context, partialProofData) {
    this._isAdmin_0(context, partialProofData);
    const own_0 = this._ownPublicKey_0(context, partialProofData);
    const adminId_0 = this._getShieldedId_0(own_0.bytes);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(0n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(adminId_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { rem: { cached: false } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _getAttestedCertProofWitness_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.createWitnessContext(ledger(context.currentQueryContext.state), context.currentPrivateState, context.currentQueryContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.getAttestedCertProofWitness(witnessContext_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'object' && result_0.issuerId.buffer instanceof ArrayBuffer && result_0.issuerId.BYTES_PER_ELEMENT === 1 && result_0.issuerId.length === 32 && result_0.vaccine.buffer instanceof ArrayBuffer && result_0.vaccine.BYTES_PER_ELEMENT === 1 && result_0.vaccine.length === 20 && result_0.personalId.buffer instanceof ArrayBuffer && result_0.personalId.BYTES_PER_ELEMENT === 1 && result_0.personalId.length === 20 && typeof(result_0.expirationDate) === 'bigint' && result_0.expirationDate >= 0n && result_0.expirationDate <= 340282366920938463463374607431768211455n && typeof(result_0.issuerSignature) === 'object' && true && typeof(result_0.issuerSignature.response) === 'bigint' && result_0.issuerSignature.response >= 0 && result_0.issuerSignature.response <= __compactRuntime.MAX_FIELD)) {
      __compactRuntime.typeError('getAttestedCertProofWitness',
                                 'return value',
                                 'vaxzk.compact line 51 char 1',
                                 'struct VaxZkProof<issuerId: Bytes<32>, vaccine: Bytes<20>, personalId: Bytes<20>, expirationDate: Uint<0..340282366920938463463374607431768211456>, issuerSignature: struct SchnorrSignature<announcement: Opaque<"JubjubPoint">, response: Field>>',
                                 result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_8.toValue(result_0),
      alignment: _descriptor_8.alignment()
    });
    return result_0;
  }
  _getShieldedId_0(id_0) {
    return this._persistentHash_0([new Uint8Array([114, 101, 103, 105, 115, 116, 101, 114, 101, 100, 45, 101, 110, 116, 105, 116, 121, 45, 105, 100, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                   id_0]);
  }
  _getCertIssuerId_0(context, partialProofData) {
    const newIssuerId_0 = this._persistentHash_1([__compactRuntime.convertBytesToField(32,
                                                                                       new Uint8Array([99, 101, 114, 116, 45, 105, 115, 115, 117, 101, 114, 45, 105, 100, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                                                                       'vaxzk.compact line 99 char 45'),
                                                  _descriptor_14.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                                             partialProofData,
                                                                                                             [
                                                                                                              { dup: { n: 0 } },
                                                                                                              { idx: { cached: false,
                                                                                                                       pushPath: false,
                                                                                                                       path: [
                                                                                                                              { tag: 'value',
                                                                                                                                value: { value: _descriptor_24.toValue(7n),
                                                                                                                                         alignment: _descriptor_24.alignment() } }] } },
                                                                                                              { popeq: { cached: true,
                                                                                                                         result: undefined } }]).value)]);
    const tmp_0 = 1n;
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(7n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                                              { value: _descriptor_13.toValue(tmp_0),
                                                                alignment: _descriptor_13.alignment() }
                                                                .value
                                                            )) } },
                                       { ins: { cached: true, n: 1 } }]);
    return newIssuerId_0;
  }
  _getProofReqId_0(context, partialProofData) {
    const newProofReqId_0 = this._persistentHash_1([__compactRuntime.convertBytesToField(32,
                                                                                         new Uint8Array([112, 114, 111, 111, 102, 45, 114, 101, 113, 45, 105, 100, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                                                                         'vaxzk.compact line 107 char 45'),
                                                    _descriptor_14.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                                               partialProofData,
                                                                                                               [
                                                                                                                { dup: { n: 0 } },
                                                                                                                { idx: { cached: false,
                                                                                                                         pushPath: false,
                                                                                                                         path: [
                                                                                                                                { tag: 'value',
                                                                                                                                  value: { value: _descriptor_24.toValue(8n),
                                                                                                                                           alignment: _descriptor_24.alignment() } }] } },
                                                                                                                { popeq: { cached: true,
                                                                                                                           result: undefined } }]).value)]);
    const tmp_0 = 1n;
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(8n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                                              { value: _descriptor_13.toValue(tmp_0),
                                                                alignment: _descriptor_13.alignment() }
                                                                .value
                                                            )) } },
                                       { ins: { cached: true, n: 1 } }]);
    return newProofReqId_0;
  }
  _addClinic_0(context, partialProofData, clinicId_0, clinicProfile_0) {
    this._isAdmin_0(context, partialProofData);
    __compactRuntime.assert(!_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                       partialProofData,
                                                                                       [
                                                                                        { dup: { n: 0 } },
                                                                                        { idx: { cached: false,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_24.toValue(4n),
                                                                                                                   alignment: _descriptor_24.alignment() } }] } },
                                                                                        { push: { storage: false,
                                                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(clinicId_0),
                                                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                                                        'member',
                                                                                        { popeq: { cached: true,
                                                                                                   result: undefined } }]).value),
                            'The ID is already in the clinics list');
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(4n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(clinicId_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_12.toValue(clinicProfile_0),
                                                                                              alignment: _descriptor_12.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    const tmp_0 = clinicProfile_0.ownerId;
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(2n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newNull().encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _revokeClinic_0(context, partialProofData, clinicId_0) {
    this._isAdmin_0(context, partialProofData);
    const d_clinicId_0 = clinicId_0;
    __compactRuntime.assert(_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_24.toValue(4n),
                                                                                                                  alignment: _descriptor_24.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(d_clinicId_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'Clinic ID is not in the clinics list');
    const clinicProfile_0 = _descriptor_12.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                       partialProofData,
                                                                                       [
                                                                                        { dup: { n: 0 } },
                                                                                        { idx: { cached: false,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_24.toValue(4n),
                                                                                                                   alignment: _descriptor_24.alignment() } }] } },
                                                                                        { idx: { cached: false,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_0.toValue(d_clinicId_0),
                                                                                                                   alignment: _descriptor_0.alignment() } }] } },
                                                                                        { popeq: { cached: false,
                                                                                                   result: undefined } }]).value);
    const tmp_0 = clinicProfile_0.ownerId;
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(2n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { rem: { cached: false } },
                                       { ins: { cached: true, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(4n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(d_clinicId_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { rem: { cached: false } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _addCertificateIssuer_0(context, partialProofData, issuerInfo_0) {
    this._isAdmin_0(context, partialProofData);
    const newIssuerId_0 = this._getCertIssuerId_0(context, partialProofData);
    __compactRuntime.assert(!_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                       partialProofData,
                                                                                       [
                                                                                        { dup: { n: 0 } },
                                                                                        { idx: { cached: false,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_24.toValue(6n),
                                                                                                                   alignment: _descriptor_24.alignment() } }] } },
                                                                                        { push: { storage: false,
                                                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(newIssuerId_0),
                                                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                                                        'member',
                                                                                        { popeq: { cached: true,
                                                                                                   result: undefined } }]).value),
                            'The ID is already in the issuers list');
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(6n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(newIssuerId_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(issuerInfo_0),
                                                                                              alignment: _descriptor_10.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    return newIssuerId_0;
  }
  _addVaccine_0(context, partialProofData, name_0) {
    this._isAdmin_0(context, partialProofData);
    __compactRuntime.assert(!_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                       partialProofData,
                                                                                       [
                                                                                        { dup: { n: 0 } },
                                                                                        { idx: { cached: false,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_24.toValue(5n),
                                                                                                                   alignment: _descriptor_24.alignment() } }] } },
                                                                                        { push: { storage: false,
                                                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(name_0),
                                                                                                                                               alignment: _descriptor_1.alignment() }).encode() } },
                                                                                        'member',
                                                                                        { popeq: { cached: true,
                                                                                                   result: undefined } }]).value),
                            'Vaccine type already registered');
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(5n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(name_0),
                                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newNull().encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _delVaccine_0(context, partialProofData, name_0) {
    this._isAdmin_0(context, partialProofData);
    __compactRuntime.assert(_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_24.toValue(5n),
                                                                                                                  alignment: _descriptor_24.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(name_0),
                                                                                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'Vaccine type is not registered');
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(5n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(name_0),
                                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                                       { rem: { cached: false } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _requestVaccineProof_0(context, partialProofData, req_0) {
    this._isClinic_0(context, partialProofData);
    const newProofReqId_0 = this._getProofReqId_0(context, partialProofData);
    __compactRuntime.assert(!_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                       partialProofData,
                                                                                       [
                                                                                        { dup: { n: 0 } },
                                                                                        { idx: { cached: false,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_24.toValue(9n),
                                                                                                                   alignment: _descriptor_24.alignment() } }] } },
                                                                                        { push: { storage: false,
                                                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(newProofReqId_0),
                                                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                                                        'member',
                                                                                        { popeq: { cached: true,
                                                                                                   result: undefined } }]).value),
                            'The ID is already in the vaccine proof requests list');
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(9n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(newProofReqId_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(req_0),
                                                                                              alignment: _descriptor_3.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    return newProofReqId_0;
  }
  _submitVaccineProof_0(context, partialProofData, proofReqId_0) {
    __compactRuntime.assert(_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_24.toValue(9n),
                                                                                                                  alignment: _descriptor_24.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(proofReqId_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'The ID is not the vaccine proof requests list');
    __compactRuntime.assert(!_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                       partialProofData,
                                                                                       [
                                                                                        { dup: { n: 0 } },
                                                                                        { idx: { cached: false,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_24.toValue(10n),
                                                                                                                   alignment: _descriptor_24.alignment() } }] } },
                                                                                        { push: { storage: false,
                                                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(proofReqId_0),
                                                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                                                        'member',
                                                                                        { popeq: { cached: true,
                                                                                                   result: undefined } }]).value),
                            'The vaccine proof for the given request ID has been already submitted');
    const proof_0 = this._getAttestedCertProofWitness_0(context,
                                                        partialProofData);
    const issuerId_0 = proof_0.issuerId;
    __compactRuntime.assert(_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_24.toValue(6n),
                                                                                                                  alignment: _descriptor_24.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(issuerId_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'The vaccine proof issuer is not a registered/valid entity');
    const vaccineProofReq_0 = _descriptor_3.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                        partialProofData,
                                                                                        [
                                                                                         { dup: { n: 0 } },
                                                                                         { idx: { cached: false,
                                                                                                  pushPath: false,
                                                                                                  path: [
                                                                                                         { tag: 'value',
                                                                                                           value: { value: _descriptor_24.toValue(9n),
                                                                                                                    alignment: _descriptor_24.alignment() } }] } },
                                                                                         { idx: { cached: false,
                                                                                                  pushPath: false,
                                                                                                  path: [
                                                                                                         { tag: 'value',
                                                                                                           value: { value: _descriptor_0.toValue(proofReqId_0),
                                                                                                                    alignment: _descriptor_0.alignment() } }] } },
                                                                                         { popeq: { cached: false,
                                                                                                    result: undefined } }]).value);
    const proofIssuer_0 = _descriptor_10.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                     partialProofData,
                                                                                     [
                                                                                      { dup: { n: 0 } },
                                                                                      { idx: { cached: false,
                                                                                               pushPath: false,
                                                                                               path: [
                                                                                                      { tag: 'value',
                                                                                                        value: { value: _descriptor_24.toValue(6n),
                                                                                                                 alignment: _descriptor_24.alignment() } }] } },
                                                                                      { idx: { cached: false,
                                                                                               pushPath: false,
                                                                                               path: [
                                                                                                      { tag: 'value',
                                                                                                        value: { value: _descriptor_0.toValue(issuerId_0),
                                                                                                                 alignment: _descriptor_0.alignment() } }] } },
                                                                                      { popeq: { cached: false,
                                                                                                 result: undefined } }]).value);
    __compactRuntime.assert(this._equal_0(proof_0.vaccine,
                                          vaccineProofReq_0.vaccine),
                            "The submitted proof doesn't match the vaccine type");
    __compactRuntime.assert(this._equal_1(proof_0.personalId,
                                          vaccineProofReq_0.personalId),
                            "The submitted proof doesn't match the passport or ID number");
    let t_0;
    __compactRuntime.assert((t_0 = proof_0.expirationDate,
                             t_0 >= vaccineProofReq_0.validUntil),
                            "The submitted certificate proof doesn't comply with validity date");
    const userPubKey_0 = this._getShieldedId_0(this._ownPublicKey_0(context,
                                                                    partialProofData).bytes);
    this._schnorrVerifyVaxZk_0(context,
                               partialProofData,
                               proof_0.vaccine,
                               proof_0.personalId,
                               proof_0.expirationDate,
                               userPubKey_0,
                               proof_0.issuerSignature,
                               proofIssuer_0.key);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(10n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(proofReqId_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(proof_0),
                                                                                              alignment: _descriptor_8.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _equal_0(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_1(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
}
export function ledger(stateOrChargedState) {
  const state = stateOrChargedState instanceof __compactRuntime.StateValue ? stateOrChargedState : stateOrChargedState.state;
  const chargedState = stateOrChargedState instanceof __compactRuntime.StateValue ? new __compactRuntime.ChargedState(stateOrChargedState) : stateOrChargedState;
  const context = {
    currentQueryContext: new __compactRuntime.QueryContext(chargedState, __compactRuntime.dummyContractAddress()),
    costModel: __compactRuntime.CostModel.initialCostModel()
  };
  const partialProofData = {
    input: { value: [], alignment: [] },
    output: undefined,
    publicTranscript: [],
    privateTranscriptOutputs: []
  };
  return {
    admins: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(0n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(0n),
                                                                                                                                 alignment: _descriptor_14.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_14.fromValue(__compactRuntime.queryLedgerState(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 0 } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_24.toValue(0n),
                                                                                                      alignment: _descriptor_24.alignment() } }] } },
                                                                           'size',
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const elem_0 = args_0[0];
        if (!(elem_0.buffer instanceof ArrayBuffer && elem_0.BYTES_PER_ELEMENT === 1 && elem_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'Invites.compact line 6 char 1',
                                     'Bytes<32>',
                                     elem_0)
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(0n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(elem_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[0];
        return self_0.asMap().keys().map((elem) => _descriptor_0.fromValue(elem.value))[Symbol.iterator]();
      }
    },
    inviteAdminHash: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(1n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(0n),
                                                                                                                                 alignment: _descriptor_14.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_14.fromValue(__compactRuntime.queryLedgerState(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 0 } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_24.toValue(1n),
                                                                                                      alignment: _descriptor_24.alignment() } }] } },
                                                                           'size',
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const elem_0 = args_0[0];
        if (!(elem_0.buffer instanceof ArrayBuffer && elem_0.BYTES_PER_ELEMENT === 1 && elem_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'Invites.compact line 8 char 1',
                                     'Bytes<32>',
                                     elem_0)
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(1n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(elem_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[1];
        return self_0.asMap().keys().map((elem) => _descriptor_0.fromValue(elem.value))[Symbol.iterator]();
      }
    },
    ownerClinics: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(2n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(0n),
                                                                                                                                 alignment: _descriptor_14.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_14.fromValue(__compactRuntime.queryLedgerState(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 0 } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_24.toValue(2n),
                                                                                                      alignment: _descriptor_24.alignment() } }] } },
                                                                           'size',
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const elem_0 = args_0[0];
        if (!(elem_0.buffer instanceof ArrayBuffer && elem_0.BYTES_PER_ELEMENT === 1 && elem_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'Invites.compact line 10 char 1',
                                     'Bytes<32>',
                                     elem_0)
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(2n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(elem_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[2];
        return self_0.asMap().keys().map((elem) => _descriptor_0.fromValue(elem.value))[Symbol.iterator]();
      }
    },
    inviteClinicHash: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(3n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(0n),
                                                                                                                                 alignment: _descriptor_14.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_14.fromValue(__compactRuntime.queryLedgerState(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 0 } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_24.toValue(3n),
                                                                                                      alignment: _descriptor_24.alignment() } }] } },
                                                                           'size',
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const elem_0 = args_0[0];
        if (!(elem_0.buffer instanceof ArrayBuffer && elem_0.BYTES_PER_ELEMENT === 1 && elem_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'Invites.compact line 12 char 1',
                                     'Bytes<32>',
                                     elem_0)
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(3n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(elem_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[3];
        return self_0.asMap().keys().map((elem) => _descriptor_0.fromValue(elem.value))[Symbol.iterator]();
      }
    },
    clinics: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(4n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(0n),
                                                                                                                                 alignment: _descriptor_14.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_14.fromValue(__compactRuntime.queryLedgerState(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 0 } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_24.toValue(4n),
                                                                                                      alignment: _descriptor_24.alignment() } }] } },
                                                                           'size',
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'vaxzk.compact line 24 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(4n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('lookup',
                                     'argument 1',
                                     'vaxzk.compact line 24 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_12.fromValue(__compactRuntime.queryLedgerState(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 0 } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_24.toValue(4n),
                                                                                                      alignment: _descriptor_24.alignment() } }] } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_0.toValue(key_0),
                                                                                                      alignment: _descriptor_0.alignment() } }] } },
                                                                           { popeq: { cached: false,
                                                                                      result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[4];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_12.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    vaccines: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(5n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(0n),
                                                                                                                                 alignment: _descriptor_14.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_14.fromValue(__compactRuntime.queryLedgerState(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 0 } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_24.toValue(5n),
                                                                                                      alignment: _descriptor_24.alignment() } }] } },
                                                                           'size',
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const elem_0 = args_0[0];
        if (!(elem_0.buffer instanceof ArrayBuffer && elem_0.BYTES_PER_ELEMENT === 1 && elem_0.length === 20)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'vaxzk.compact line 27 char 1',
                                     'Bytes<20>',
                                     elem_0)
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(5n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(elem_0),
                                                                                                                                 alignment: _descriptor_1.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[5];
        return self_0.asMap().keys().map((elem) => _descriptor_1.fromValue(elem.value))[Symbol.iterator]();
      }
    },
    issuers: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(6n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(0n),
                                                                                                                                 alignment: _descriptor_14.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_14.fromValue(__compactRuntime.queryLedgerState(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 0 } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_24.toValue(6n),
                                                                                                      alignment: _descriptor_24.alignment() } }] } },
                                                                           'size',
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'vaxzk.compact line 30 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(6n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('lookup',
                                     'argument 1',
                                     'vaxzk.compact line 30 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_10.fromValue(__compactRuntime.queryLedgerState(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 0 } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_24.toValue(6n),
                                                                                                      alignment: _descriptor_24.alignment() } }] } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_0.toValue(key_0),
                                                                                                      alignment: _descriptor_0.alignment() } }] } },
                                                                           { popeq: { cached: false,
                                                                                      result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[6];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_10.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    get issuerId() {
      return _descriptor_14.fromValue(__compactRuntime.queryLedgerState(context,
                                                                        partialProofData,
                                                                        [
                                                                         { dup: { n: 0 } },
                                                                         { idx: { cached: false,
                                                                                  pushPath: false,
                                                                                  path: [
                                                                                         { tag: 'value',
                                                                                           value: { value: _descriptor_24.toValue(7n),
                                                                                                    alignment: _descriptor_24.alignment() } }] } },
                                                                         { popeq: { cached: true,
                                                                                    result: undefined } }]).value);
    },
    get proofReqId() {
      return _descriptor_14.fromValue(__compactRuntime.queryLedgerState(context,
                                                                        partialProofData,
                                                                        [
                                                                         { dup: { n: 0 } },
                                                                         { idx: { cached: false,
                                                                                  pushPath: false,
                                                                                  path: [
                                                                                         { tag: 'value',
                                                                                           value: { value: _descriptor_24.toValue(8n),
                                                                                                    alignment: _descriptor_24.alignment() } }] } },
                                                                         { popeq: { cached: true,
                                                                                    result: undefined } }]).value);
    },
    vaccineProofReqs: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(9n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(0n),
                                                                                                                                 alignment: _descriptor_14.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_14.fromValue(__compactRuntime.queryLedgerState(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 0 } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_24.toValue(9n),
                                                                                                      alignment: _descriptor_24.alignment() } }] } },
                                                                           'size',
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'vaxzk.compact line 39 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(9n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('lookup',
                                     'argument 1',
                                     'vaxzk.compact line 39 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_3.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(9n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_0.toValue(key_0),
                                                                                                     alignment: _descriptor_0.alignment() } }] } },
                                                                          { popeq: { cached: false,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[9];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_3.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    vaccineProofs: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(10n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(0n),
                                                                                                                                 alignment: _descriptor_14.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_14.fromValue(__compactRuntime.queryLedgerState(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 0 } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_24.toValue(10n),
                                                                                                      alignment: _descriptor_24.alignment() } }] } },
                                                                           'size',
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'vaxzk.compact line 43 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(10n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('lookup',
                                     'argument 1',
                                     'vaxzk.compact line 43 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_8.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(10n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_0.toValue(key_0),
                                                                                                     alignment: _descriptor_0.alignment() } }] } },
                                                                          { popeq: { cached: false,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[10];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_8.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    }
  };
}
const _emptyContext = {
  currentQueryContext: new __compactRuntime.QueryContext(new __compactRuntime.ContractState().data, __compactRuntime.dummyContractAddress())
};
const _dummyContract = new Contract({
  getSchnorrReduction: (...args) => undefined,
  getAttestedCertProofWitness: (...args) => undefined
});
export const pureCircuits = {
  schnorrChallengeVaxZk: (...args_0) => {
    if (args_0.length !== 6) {
      throw new __compactRuntime.CompactError(`schnorrChallengeVaxZk: expected 6 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const ann_0 = args_0[0];
    const pk_0 = args_0[1];
    const vaccine_0 = args_0[2];
    const personalId_0 = args_0[3];
    const expirationDate_0 = args_0[4];
    const userPubKey_0 = args_0[5];
    if (!(vaccine_0.buffer instanceof ArrayBuffer && vaccine_0.BYTES_PER_ELEMENT === 1 && vaccine_0.length === 20)) {
      __compactRuntime.typeError('schnorrChallengeVaxZk',
                                 'argument 3',
                                 'Schnorr.compact line 63 char 3',
                                 'Bytes<20>',
                                 vaccine_0)
    }
    if (!(personalId_0.buffer instanceof ArrayBuffer && personalId_0.BYTES_PER_ELEMENT === 1 && personalId_0.length === 20)) {
      __compactRuntime.typeError('schnorrChallengeVaxZk',
                                 'argument 4',
                                 'Schnorr.compact line 63 char 3',
                                 'Bytes<20>',
                                 personalId_0)
    }
    if (!(typeof(expirationDate_0) === 'bigint' && expirationDate_0 >= 0n && expirationDate_0 <= 340282366920938463463374607431768211455n)) {
      __compactRuntime.typeError('schnorrChallengeVaxZk',
                                 'argument 5',
                                 'Schnorr.compact line 63 char 3',
                                 'Uint<0..340282366920938463463374607431768211456>',
                                 expirationDate_0)
    }
    if (!(userPubKey_0.buffer instanceof ArrayBuffer && userPubKey_0.BYTES_PER_ELEMENT === 1 && userPubKey_0.length === 32)) {
      __compactRuntime.typeError('schnorrChallengeVaxZk',
                                 'argument 6',
                                 'Schnorr.compact line 63 char 3',
                                 'Bytes<32>',
                                 userPubKey_0)
    }
    return _dummyContract._schnorrChallengeVaxZk_0(ann_0,
                                                   pk_0,
                                                   vaccine_0,
                                                   personalId_0,
                                                   expirationDate_0,
                                                   userPubKey_0);
  },
  getShieldedId: (...args_0) => {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`getShieldedId: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    }
    const id_0 = args_0[0];
    if (!(id_0.buffer instanceof ArrayBuffer && id_0.BYTES_PER_ELEMENT === 1 && id_0.length === 32)) {
      __compactRuntime.typeError('getShieldedId',
                                 'argument 1',
                                 'vaxzk.compact line 92 char 1',
                                 'Bytes<32>',
                                 id_0)
    }
    return _dummyContract._getShieldedId_0(id_0);
  }
};
export const contractReferenceLocations =
  { tag: 'publicLedgerArray', indices: { } };
//# sourceMappingURL=index.js.map
