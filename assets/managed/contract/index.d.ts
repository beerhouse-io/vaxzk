import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type ClinicProfile = { ownerId: Uint8Array;
                              name: Uint8Array;
                              urlImage: Uint8Array;
                              address: Uint8Array;
                              latitud: Uint8Array;
                              longitud: Uint8Array;
                              isOnline: boolean
                            };

export type UserProfile = { isAdmin: boolean; isClinic: boolean };

export type CertIssuerInfo = { uri: string;
                               name: string;
                               key: __compactRuntime.JubjubPoint;
                               verificationEndpoint: string
                             };

export type VaccineProofRequest = { vaccine: Uint8Array;
                                    personalId: Uint8Array;
                                    validUntil: bigint
                                  };

export type VaxZkProof = { issuerId: Uint8Array;
                           vaccine: Uint8Array;
                           personalId: Uint8Array;
                           expirationDate: bigint;
                           issuerSignature: SchnorrSignature
                         };

export type SchnorrSignature = { announcement: __compactRuntime.JubjubPoint;
                                 response: bigint
                               };

export type Witnesses<PS> = {
  getSchnorrReduction(context: __compactRuntime.WitnessContext<Ledger, PS>,
                      challengeHash_0: bigint): [PS, [bigint, bigint]];
  getAttestedCertProofWitness(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, VaxZkProof];
}

export type ImpureCircuits<PS> = {
  registerInviteAdmin(context: __compactRuntime.CircuitContext<PS>,
                      inviteCode_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  acceptInviteAdmin(context: __compactRuntime.CircuitContext<PS>,
                    inviteCode_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  revokeAdmin(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  addClinic(context: __compactRuntime.CircuitContext<PS>,
            clinicId_0: Uint8Array,
            clinicProfile_0: ClinicProfile): __compactRuntime.CircuitResults<PS, []>;
  revokeClinic(context: __compactRuntime.CircuitContext<PS>,
               clinicId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  addCertificateIssuer(context: __compactRuntime.CircuitContext<PS>,
                       issuerInfo_0: CertIssuerInfo): __compactRuntime.CircuitResults<PS, Uint8Array>;
  getProfile(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, UserProfile>;
  addVaccine(context: __compactRuntime.CircuitContext<PS>, name_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  delVaccine(context: __compactRuntime.CircuitContext<PS>, name_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  requestVaccineProof(context: __compactRuntime.CircuitContext<PS>,
                      req_0: VaccineProofRequest): __compactRuntime.CircuitResults<PS, Uint8Array>;
  submitVaccineProof(context: __compactRuntime.CircuitContext<PS>,
                     proofReqId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
}

export type ProvableCircuits<PS> = {
  registerInviteAdmin(context: __compactRuntime.CircuitContext<PS>,
                      inviteCode_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  acceptInviteAdmin(context: __compactRuntime.CircuitContext<PS>,
                    inviteCode_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  revokeAdmin(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  addClinic(context: __compactRuntime.CircuitContext<PS>,
            clinicId_0: Uint8Array,
            clinicProfile_0: ClinicProfile): __compactRuntime.CircuitResults<PS, []>;
  revokeClinic(context: __compactRuntime.CircuitContext<PS>,
               clinicId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  addCertificateIssuer(context: __compactRuntime.CircuitContext<PS>,
                       issuerInfo_0: CertIssuerInfo): __compactRuntime.CircuitResults<PS, Uint8Array>;
  getProfile(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, UserProfile>;
  addVaccine(context: __compactRuntime.CircuitContext<PS>, name_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  delVaccine(context: __compactRuntime.CircuitContext<PS>, name_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  requestVaccineProof(context: __compactRuntime.CircuitContext<PS>,
                      req_0: VaccineProofRequest): __compactRuntime.CircuitResults<PS, Uint8Array>;
  submitVaccineProof(context: __compactRuntime.CircuitContext<PS>,
                     proofReqId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
}

export type PureCircuits = {
  schnorrChallengeVaxZk(ann_0: __compactRuntime.JubjubPoint,
                        pk_0: __compactRuntime.JubjubPoint,
                        vaccine_0: Uint8Array,
                        personalId_0: Uint8Array,
                        expirationDate_0: bigint,
                        userPubKey_0: Uint8Array): bigint;
  getShieldedId(id_0: Uint8Array): Uint8Array;
}

export type Circuits<PS> = {
  schnorrChallengeVaxZk(context: __compactRuntime.CircuitContext<PS>,
                        ann_0: __compactRuntime.JubjubPoint,
                        pk_0: __compactRuntime.JubjubPoint,
                        vaccine_0: Uint8Array,
                        personalId_0: Uint8Array,
                        expirationDate_0: bigint,
                        userPubKey_0: Uint8Array): __compactRuntime.CircuitResults<PS, bigint>;
  registerInviteAdmin(context: __compactRuntime.CircuitContext<PS>,
                      inviteCode_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  acceptInviteAdmin(context: __compactRuntime.CircuitContext<PS>,
                    inviteCode_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  revokeAdmin(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  getShieldedId(context: __compactRuntime.CircuitContext<PS>, id_0: Uint8Array): __compactRuntime.CircuitResults<PS, Uint8Array>;
  addClinic(context: __compactRuntime.CircuitContext<PS>,
            clinicId_0: Uint8Array,
            clinicProfile_0: ClinicProfile): __compactRuntime.CircuitResults<PS, []>;
  revokeClinic(context: __compactRuntime.CircuitContext<PS>,
               clinicId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  addCertificateIssuer(context: __compactRuntime.CircuitContext<PS>,
                       issuerInfo_0: CertIssuerInfo): __compactRuntime.CircuitResults<PS, Uint8Array>;
  getProfile(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, UserProfile>;
  addVaccine(context: __compactRuntime.CircuitContext<PS>, name_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  delVaccine(context: __compactRuntime.CircuitContext<PS>, name_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  requestVaccineProof(context: __compactRuntime.CircuitContext<PS>,
                      req_0: VaccineProofRequest): __compactRuntime.CircuitResults<PS, Uint8Array>;
  submitVaccineProof(context: __compactRuntime.CircuitContext<PS>,
                     proofReqId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
}

export type Ledger = {
  readonly totalAdmin: bigint;
  readonly totalInviteAdmin: bigint;
  clinics: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): ClinicProfile;
    [Symbol.iterator](): Iterator<[Uint8Array, ClinicProfile]>
  };
  ownerClinicIndex: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): boolean;
    [Symbol.iterator](): Iterator<[Uint8Array, boolean]>
  };
  vaccines: {
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
