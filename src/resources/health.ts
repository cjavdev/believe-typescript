// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as HealthAPI from './health';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class BaseHealth extends APIResource {
  static override readonly _key: readonly ['health'] = Object.freeze(['health'] as const)

  /**
   * Check if the API is running and healthy.
   */
  check(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/health', options);
  }
}
export class Health extends BaseHealth {

}

export type HealthCheckResponse = unknown

export declare namespace Health {
  export {
    type HealthCheckResponse as HealthCheckResponse
  };
}
