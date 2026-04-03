// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Client } from '@cjavdev/believe/resources/client/client';
import { BaseWs } from '@cjavdev/believe/resources/client/ws';

import Believe, { toFile } from '@cjavdev/believe';
import { createClient, type PartialBelieve } from '@cjavdev/believe/tree-shakable';

const client = new Believe({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseWs],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Client],
});

const runTests = (client: PartialBelieve<{ client: { ws: BaseWs } }>) => {
  // Mock server tests are disabled
  test.skip('test', async () => {
    const responsePromise = client.client.ws.test();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource ws', () => runTests(client));
describe('resource ws (tree shakable, base)', () => runTests(partialClient));
describe('resource ws (tree shakable, subresource)', () => runTests(parentPartialClient));
