// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseTicketSales } from '@cjavdev/believe/resources/ticket-sales';

import Believe from '@cjavdev/believe';
import { createClient, type PartialBelieve } from '@cjavdev/believe/tree-shakable';

const client = new Believe({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseTicketSales],
});

const runTests = (client: PartialBelieve<{ ticketSales: BaseTicketSales }>) => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.ticketSales.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ticketSales.list(
        {
          coupon_code: 'coupon_code',
          currency: 'currency',
          limit: 10,
          match_id: 'match_id',
          purchase_method: 'online',
          skip: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Believe.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.ticketSales.create({
      buyer_name: 'Mae Green',
      currency: 'GBP',
      discount: '9.00',
      match_id: 'match-001',
      purchase_method: 'online',
      quantity: 2,
      subtotal: '90.00',
      tax: '16.20',
      total: '97.20',
      unit_price: '45.00',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.ticketSales.create({
      buyer_name: 'Mae Green',
      currency: 'GBP',
      discount: '9.00',
      match_id: 'match-001',
      purchase_method: 'online',
      quantity: 2,
      subtotal: '90.00',
      tax: '16.20',
      total: '97.20',
      unit_price: '45.00',
      buyer_email: 'mae.green@example.com',
      coupon_code: 'BELIEVE10',
    });
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.ticketSales.delete('ticket_sale_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.ticketSales.retrieve('ticket_sale_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.ticketSales.update('ticket_sale_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource ticketSales', () => runTests(client));
describe('resource ticketSales (tree shakable, base)', () => runTests(partialClient));
