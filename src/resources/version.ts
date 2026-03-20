// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class BaseVersion extends APIResource {
  static override readonly _key: readonly ['version'] = Object.freeze(['version'] as const);

  /**
   * Get detailed information about API versioning.
   */
  retrieve(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/version', options);
  }
}
export class Version extends BaseVersion {}

export type VersionRetrieveResponse = unknown;

export declare namespace Version {
  export { type VersionRetrieveResponse as VersionRetrieveResponse };
}
