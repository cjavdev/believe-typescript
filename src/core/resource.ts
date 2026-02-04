// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Believe } from '../client';

export abstract class APIResource {
  protected _client: Believe;

  constructor(client: Believe) {
    this._client = client;
  }
}
