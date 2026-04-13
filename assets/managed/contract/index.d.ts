import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

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

export type ClinicProfileInfo = { uri: string;
                                  name: string;
                                  location: string;
                                  latitude: bigint;
                                  longitude: bigint;
                                  image: string
                                };

export type UserProfileInfo = { uri: string; nickname: string; country: string
                              };

export type Witnesses<PS> = {
  getSchnorrReduction(context: __compactRuntime.WitnessContext<Ledger, PS>,
                      challengeHash_0: bigint): [PS, [bigint, bigint]];
  inviteSecret(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, Uint8Array];
  inviteNonce(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, Uint8Array];
  localSk(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, Uint8Array];
  getAttestedCertProofWitness(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, VaxZkProof];
}

export type ImpureCircuits<PS> = {
  registerInvite(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  useInvite(context: __compactRuntime.CircuitContext<PS>,
            _secret_0: Uint8Array,
            _nonce_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  updateUserProfile(context: __compactRuntime.CircuitContext<PS>,
                    profileInfo_0: UserProfileInfo): __compactRuntime.CircuitResults<PS, []>;
  getUserProfile(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, UserProfileInfo>;
  getCertIssuerId(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, Uint8Array>;
  getProofReqId(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, Uint8Array>;
  addAdmin(context: __compactRuntime.CircuitContext<PS>, adminId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  revokeAdmin(context: __compactRuntime.CircuitContext<PS>,
              adminId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  addClinic(context: __compactRuntime.CircuitContext<PS>,
            clinicId_0: Uint8Array,
            info_0: ClinicProfileInfo): __compactRuntime.CircuitResults<PS, []>;
  revokeClinic(context: __compactRuntime.CircuitContext<PS>,
               clinicId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  addCertificateIssuer(context: __compactRuntime.CircuitContext<PS>,
                       issuerInfo_0: CertIssuerInfo): __compactRuntime.CircuitResults<PS, Uint8Array>;
  addVaccine(context: __compactRuntime.CircuitContext<PS>, name_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  delVaccine(context: __compactRuntime.CircuitContext<PS>, name_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  requestVaccineProof(context: __compactRuntime.CircuitContext<PS>,
                      req_0: VaccineProofRequest): __compactRuntime.CircuitResults<PS, Uint8Array>;
  submitVaccineProof(context: __compactRuntime.CircuitContext<PS>,
                     proofReqId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
}

export type ProvableCircuits<PS> = {
  registerInvite(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  useInvite(context: __compactRuntime.CircuitContext<PS>,
            _secret_0: Uint8Array,
            _nonce_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  updateUserProfile(context: __compactRuntime.CircuitContext<PS>,
                    profileInfo_0: UserProfileInfo): __compactRuntime.CircuitResults<PS, []>;
  getUserProfile(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, UserProfileInfo>;
  getCertIssuerId(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, Uint8Array>;
  getProofReqId(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, Uint8Array>;
  addAdmin(context: __compactRuntime.CircuitContext<PS>, adminId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  revokeAdmin(context: __compactRuntime.CircuitContext<PS>,
              adminId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  addClinic(context: __compactRuntime.CircuitContext<PS>,
            clinicId_0: Uint8Array,
            info_0: ClinicProfileInfo): __compactRuntime.CircuitResults<PS, []>;
  revokeClinic(context: __compactRuntime.CircuitContext<PS>,
               clinicId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  addCertificateIssuer(context: __compactRuntime.CircuitContext<PS>,
                       issuerInfo_0: CertIssuerInfo): __compactRuntime.CircuitResults<PS, Uint8Array>;
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
  registerInvite(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  useInvite(context: __compactRuntime.CircuitContext<PS>,
            _secret_0: Uint8Array,
            _nonce_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  getShieldedId(context: __compactRuntime.CircuitContext<PS>, id_0: Uint8Array): __compactRuntime.CircuitResults<PS, Uint8Array>;
  updateUserProfile(context: __compactRuntime.CircuitContext<PS>,
                    profileInfo_0: UserProfileInfo): __compactRuntime.CircuitResults<PS, []>;
  getUserProfile(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, UserProfileInfo>;
  getCertIssuerId(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, Uint8Array>;
  getProofReqId(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, Uint8Array>;
  addAdmin(context: __compactRuntime.CircuitContext<PS>, adminId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  revokeAdmin(context: __compactRuntime.CircuitContext<PS>,
              adminId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  addClinic(context: __compactRuntime.CircuitContext<PS>,
            clinicId_0: Uint8Array,
            info_0: ClinicProfileInfo): __compactRuntime.CircuitResults<PS, []>;
  revokeClinic(context: __compactRuntime.CircuitContext<PS>,
               clinicId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  addCertificateIssuer(context: __compactRuntime.CircuitContext<PS>,
                       issuerInfo_0: CertIssuerInfo): __compactRuntime.CircuitResults<PS, Uint8Array>;
  addVaccine(context: __compactRuntime.CircuitContext<PS>, name_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  delVaccine(context: __compactRuntime.CircuitContext<PS>, name_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  requestVaccineProof(context: __compactRuntime.CircuitContext<PS>,
                      req_0: VaccineProofRequest): __compactRuntime.CircuitResults<PS, Uint8Array>;
  submitVaccineProof(context: __compactRuntime.CircuitContext<PS>,
                     proofReqId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
}

export type Ledger = {
  readonly inviteHash: Uint8Array;
  admins: {
    isEmpty(): boolean;
    size(): bigint;
    member(elem_0: Uint8Array): boolean;
    [Symbol.iterator](): Iterator<Uint8Array>
  };
  clinics: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): ClinicProfileInfo;
    [Symbol.iterator](): Iterator<[Uint8Array, ClinicProfileInfo]>
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
