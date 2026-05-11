// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PagePromise, SkipLimitPage, type SkipLimitPageParams } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Ticket sales with 300 records for practicing pagination, filtering, and financial data
 */
export class BaseTicketSales extends APIResource {
  static override readonly _key: readonly ['ticketSales'] = Object.freeze(['ticketSales'] as const);

  /**
   * Get a paginated list of all ticket sales with optional filtering. With 300
   * records, this endpoint is ideal for practicing pagination.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const ticketSale of client.ticketSales.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TicketSaleListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TicketSalesSkipLimitPage, TicketSale> {
    return this._client.getAPIList('/ticket-sales', SkipLimitPage<TicketSale>, { query, ...options });
  }

  /**
   * Record a new ticket sale.
   *
   * @example
   * ```ts
   * const ticketSale = await client.ticketSales.create({
   *   buyer_name: 'Mae Green',
   *   currency: 'GBP',
   *   discount: '9.00',
   *   match_id: 'match-001',
   *   purchase_method: 'online',
   *   quantity: 2,
   *   subtotal: '90.00',
   *   tax: '16.20',
   *   total: '97.20',
   *   unit_price: '45.00',
   * });
   * ```
   */
  create(body: TicketSaleCreateParams, options?: RequestOptions): APIPromise<TicketSale> {
    return this._client.post('/ticket-sales', { body, ...options });
  }

  /**
   * Remove a ticket sale from the database.
   *
   * @example
   * ```ts
   * await client.ticketSales.delete('ticket_sale_id');
   * ```
   */
  delete(ticketSaleID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/ticket-sales/${ticketSaleID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve detailed information about a specific ticket sale.
   *
   * @example
   * ```ts
   * const ticketSale = await client.ticketSales.retrieve(
   *   'ticket_sale_id',
   * );
   * ```
   */
  retrieve(ticketSaleID: string, options?: RequestOptions): APIPromise<TicketSale> {
    return this._client.get(path`/ticket-sales/${ticketSaleID}`, options);
  }

  /**
   * Update specific fields of an existing ticket sale.
   *
   * @example
   * ```ts
   * const ticketSale = await client.ticketSales.update(
   *   'ticket_sale_id',
   * );
   * ```
   */
  update(
    ticketSaleID: string,
    body: TicketSaleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TicketSale> {
    return this._client.patch(path`/ticket-sales/${ticketSaleID}`, { body, ...options });
  }
}
/**
 * Ticket sales with 300 records for practicing pagination, filtering, and financial data
 */
export class TicketSales extends BaseTicketSales {}

export type TicketSalesSkipLimitPage = SkipLimitPage<TicketSale>;

/**
 * How the ticket was purchased.
 */
export type PurchaseMethod = 'online' | 'box_office' | 'will_call' | 'phone';

/**
 * Full ticket sale model with ID.
 */
export interface TicketSale {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Name of the ticket buyer
   */
  buyer_name: string;

  /**
   * Currency code (GBP, USD, or EUR)
   */
  currency: string;

  /**
   * Discount amount applied from coupon
   */
  discount: string;

  /**
   * ID of the match
   */
  match_id: string;

  /**
   * How the ticket was purchased
   */
  purchase_method: PurchaseMethod;

  /**
   * Number of tickets purchased
   */
  quantity: number;

  /**
   * Subtotal before discount and tax (unit_price \* quantity)
   */
  subtotal: string;

  /**
   * Tax amount (20% UK VAT on discounted subtotal)
   */
  tax: string;

  /**
   * Final total (subtotal - discount + tax)
   */
  total: string;

  /**
   * Price per ticket (decimal string)
   */
  unit_price: string;

  /**
   * Email of the ticket buyer
   */
  buyer_email?: string | null;

  /**
   * Coupon code applied, if any
   */
  coupon_code?: string | null;
}

export interface TicketSaleListParams extends SkipLimitPageParams {
  /**
   * Filter by coupon code (use 'none' for sales without coupons)
   */
  coupon_code?: string | null;

  /**
   * Filter by currency (GBP, USD, EUR)
   */
  currency?: string | null;

  /**
   * Filter by match ID
   */
  match_id?: string | null;

  /**
   * Filter by purchase method
   */
  purchase_method?: PurchaseMethod | null;
}

export interface TicketSaleCreateParams {
  /**
   * Name of the ticket buyer
   */
  buyer_name: string;

  /**
   * Currency code (GBP, USD, or EUR)
   */
  currency: string;

  /**
   * Discount amount applied from coupon
   */
  discount: string;

  /**
   * ID of the match
   */
  match_id: string;

  /**
   * How the ticket was purchased
   */
  purchase_method: PurchaseMethod;

  /**
   * Number of tickets purchased
   */
  quantity: number;

  /**
   * Subtotal before discount and tax (unit_price \* quantity)
   */
  subtotal: string;

  /**
   * Tax amount (20% UK VAT on discounted subtotal)
   */
  tax: string;

  /**
   * Final total (subtotal - discount + tax)
   */
  total: string;

  /**
   * Price per ticket (decimal string)
   */
  unit_price: string;

  /**
   * Email of the ticket buyer
   */
  buyer_email?: string | null;

  /**
   * Coupon code applied, if any
   */
  coupon_code?: string | null;
}

export interface TicketSaleUpdateParams {
  buyer_email?: string | null;

  buyer_name?: string | null;

  coupon_code?: string | null;

  currency?: string | null;

  discount?: string | null;

  match_id?: string | null;

  /**
   * How the ticket was purchased.
   */
  purchase_method?: PurchaseMethod | null;

  quantity?: number | null;

  subtotal?: string | null;

  tax?: string | null;

  total?: string | null;

  unit_price?: string | null;
}

export declare namespace TicketSales {
  export {
    type PurchaseMethod as PurchaseMethod,
    type TicketSale as TicketSale,
    type TicketSalesSkipLimitPage as TicketSalesSkipLimitPage,
    type TicketSaleListParams as TicketSaleListParams,
    type TicketSaleCreateParams as TicketSaleCreateParams,
    type TicketSaleUpdateParams as TicketSaleUpdateParams,
  };
}
