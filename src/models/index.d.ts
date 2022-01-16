import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ChainMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Chain {
  readonly id: string;
  readonly title?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Chain, ChainMetaData>);
  static copyOf(source: Chain, mutator: (draft: MutableModel<Chain, ChainMetaData>) => MutableModel<Chain, ChainMetaData> | void): Chain;
}