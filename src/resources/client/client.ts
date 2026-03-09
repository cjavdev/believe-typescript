// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TicketSalesAPI from './ticket-sales';
import {
  TicketSaleCreateParams,
  TicketSaleCreateResponse,
  TicketSaleListParams,
  TicketSaleListResponse,
  TicketSaleListResponsesSkipLimitPage,
  TicketSaleRetrieveResponse,
  TicketSaleUpdateParams,
  TicketSaleUpdateResponse,
  TicketSales,
} from './ticket-sales';
import * as WsAPI from './ws';
import { Ws } from './ws';

export class Client extends APIResource {
  ws: WsAPI.Ws = new WsAPI.Ws(this._client);
  ticketSales: TicketSalesAPI.TicketSales = new TicketSalesAPI.TicketSales(this._client);
}

Client.Ws = Ws;
Client.TicketSales = TicketSales;

export declare namespace Client {
  export { Ws as Ws };

  export {
    TicketSales as TicketSales,
    type TicketSaleCreateResponse as TicketSaleCreateResponse,
    type TicketSaleRetrieveResponse as TicketSaleRetrieveResponse,
    type TicketSaleUpdateResponse as TicketSaleUpdateResponse,
    type TicketSaleListResponse as TicketSaleListResponse,
    type TicketSaleListResponsesSkipLimitPage as TicketSaleListResponsesSkipLimitPage,
    type TicketSaleCreateParams as TicketSaleCreateParams,
    type TicketSaleUpdateParams as TicketSaleUpdateParams,
    type TicketSaleListParams as TicketSaleListParams,
  };
}
