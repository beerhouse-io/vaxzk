import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type CertIssuerInfo = { uri: string;
                               name: string;
                               key: string;
                               verificationEndpoint: string
                             };

export type VaccineProofRequest = { vaccine: string;
                                    personalId: string;
                                    validUntil: bigint
                                  };

export type VaxZkProof = { issuerId: Uint8Array;
                           vaccine: string;
                           personalId: string;
                           expirationDate: bigint
                         };

export type Witnesses<PS> = {
  localSk(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, Uint8Array];
}

export type ImpureCircuits<PS> = {
  getCertIssuerId(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, Uint8Array>;
  getProofReqId(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, Uint8Array>;
  addAdmin(context: __compactRuntime.CircuitContext<PS>, adminId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  revokeAdmin(context: __compactRuntime.CircuitContext<PS>,
              adminId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  addClinic(context: __compactRuntime.CircuitContext<PS>, clinicId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  revokeClinic(context: __compactRuntime.CircuitContext<PS>,
               clinicId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  addCertificateIssuer(context: __compactRuntime.CircuitContext<PS>,
                       issuerInfo_0: CertIssuerInfo): __compactRuntime.CircuitResults<PS, Uint8Array>;
  requestVaccineProof(context: __compactRuntime.CircuitContext<PS>,
                      req_0: VaccineProofRequest): __compactRuntime.CircuitResults<PS, Uint8Array>;
  submitVaccineProof(context: __compactRuntime.CircuitContext<PS>,
                     proofReqId_0: Uint8Array,
                     proof_0: VaxZkProof): __compactRuntime.CircuitResults<PS, []>;
}

export type ProvableCircuits<PS> = {
  getCertIssuerId(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, Uint8Array>;
  getProofReqId(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, Uint8Array>;
  addAdmin(context: __compactRuntime.CircuitContext<PS>, adminId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  revokeAdmin(context: __compactRuntime.CircuitContext<PS>,
              adminId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  addClinic(context: __compactRuntime.CircuitContext<PS>, clinicId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  revokeClinic(context: __compactRuntime.CircuitContext<PS>,
               clinicId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  addCertificateIssuer(context: __compactRuntime.CircuitContext<PS>,
                       issuerInfo_0: CertIssuerInfo): __compactRuntime.CircuitResults<PS, Uint8Array>;
  requestVaccineProof(context: __compactRuntime.CircuitContext<PS>,
                      req_0: VaccineProofRequest): __compactRuntime.CircuitResults<PS, Uint8Array>;
  submitVaccineProof(context: __compactRuntime.CircuitContext<PS>,
                     proofReqId_0: Uint8Array,
                     proof_0: VaxZkProof): __compactRuntime.CircuitResults<PS, []>;
}

export type PureCircuits = {
  getShieldedId(_sk_0: Uint8Array): Uint8Array;
}

export type Circuits<PS> = {
  getShieldedId(context: __compactRuntime.CircuitContext<PS>, _sk_0: Uint8Array): __compactRuntime.CircuitResults<PS, Uint8Array>;
  getCertIssuerId(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, Uint8Array>;
  getProofReqId(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, Uint8Array>;
  addAdmin(context: __compactRuntime.CircuitContext<PS>, adminId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  revokeAdmin(context: __compactRuntime.CircuitContext<PS>,
              adminId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  addClinic(context: __compactRuntime.CircuitContext<PS>, clinicId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  revokeClinic(context: __compactRuntime.CircuitContext<PS>,
               clinicId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  addCertificateIssuer(context: __compactRuntime.CircuitContext<PS>,
                       issuerInfo_0: CertIssuerInfo): __compactRuntime.CircuitResults<PS, Uint8Array>;
  requestVaccineProof(context: __compactRuntime.CircuitContext<PS>,
                      req_0: VaccineProofRequest): __compactRuntime.CircuitResults<PS, Uint8Array>;
  submitVaccineProof(context: __compactRuntime.CircuitContext<PS>,
                     proofReqId_0: Uint8Array,
                     proof_0: VaxZkProof): __compactRuntime.CircuitResults<PS, []>;
}

export type Ledger = {
  admins: {
    isEmpty(): boolean;
    size(): bigint;
    member(elem_0: Uint8Array): boolean;
    [Symbol.iterator](): Iterator<Uint8Array>
  };
  clinics: {
    isEmpty(): boolean;
    size(): bigint;
    member(elem_0: Uint8Array): boolean;
    [Symbol.iterator](): Iterator<Uint8Array>
  };
  issuers: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): CertIssuerInfo;
    [Symbol.iterator](): Iterator<[Uint8Array, CertIssuerInfo]>
  };
  readonly issuerId: bigint;
  readonly proofReqId: bigint;
  vaccineProofReqs: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): VaccineProofRequest;
    [Symbol.iterator](): Iterator<[Uint8Array, VaccineProofRequest]>
  };
  vaccineProofs: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): VaxZkProof;
    [Symbol.iterator](): Iterator<[Uint8Array, VaxZkProof]>
  };
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<PS = any, W extends Witnesses<PS> = Witnesses<PS>> {
  witnesses: W;
  circuits: Circuits<PS>;
  impureCircuits: ImpureCircuits<PS>;
  provableCircuits: ProvableCircuits<PS>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<PS>): __compactRuntime.ConstructorResult<PS>;
}

export declare function ledger(state: __compactRuntime.StateValue | __compactRuntime.ChargedState): Ledger;
export declare const pureCircuits: PureCircuits;
