// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PrinciplesAPI from './principles';
import {
  BasePrinciples,
  CoachingPrinciple,
  CoachingPrinciplesSkipLimitPage,
  PrincipleListParams,
  Principles,
} from './principles';

export class BaseCoaching extends APIResource {
  static override readonly _key: readonly ['coaching'] = Object.freeze(['coaching'] as const);
}
export class Coaching extends BaseCoaching {
  principles: PrinciplesAPI.Principles = new PrinciplesAPI.Principles(this._client);
}

Coaching.Principles = Principles;
Coaching.BasePrinciples = BasePrinciples;

export declare namespace Coaching {
  export {
    Principles as Principles,
    BasePrinciples as BasePrinciples,
    type CoachingPrinciple as CoachingPrinciple,
    type CoachingPrinciplesSkipLimitPage as CoachingPrinciplesSkipLimitPage,
    type PrincipleListParams as PrincipleListParams,
  };
}
