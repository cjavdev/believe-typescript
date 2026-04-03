// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ClientAPI from './client';
import * as WsAPI from './ws';
import { BaseWs, Ws } from './ws';

export class BaseClient extends APIResource {
  static override readonly _key: readonly ['client'] = Object.freeze(['client'] as const)

}
export class Client extends BaseClient {
  ws: WsAPI.Ws = new WsAPI.Ws(this._client);
}

Client.Ws = Ws;
Client.BaseWs = BaseWs;

export declare namespace Client {
  export {
    Ws as Ws,
    BaseWs as BaseWs
  };
}
