// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WsAPI from './ws/ws';
import { TestClientEvent, TestServerEvent, Ws } from './ws/ws';

export class Client extends APIResource {
  ws: WsAPI.Ws = new WsAPI.Ws(this._client);
}

Client.Ws = Ws;

export declare namespace Client {
  export { Ws as Ws, type TestClientEvent as TestClientEvent, type TestServerEvent as TestServerEvent };
}
