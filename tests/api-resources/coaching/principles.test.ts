// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Coaching } from '@cjavdev/believe/resources/coaching/coaching';
import { BasePrinciples } from '@cjavdev/believe/resources/coaching/principles';

import Believe, { toFile } from '@cjavdev/believe';
import { createClient, type PartialBelieve } from '@cjavdev/believe/tree-shakable';

const client = new Believe({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BasePrinciples],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Coaching],
});

const runTests = (client: PartialBelieve<{ coaching: { principles: BasePrinciples } }>) => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.coaching.principles.retrieve('principle_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.coaching.principles.list();
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
    await expect(client.coaching.principles.list({ limit: 10, skip: 0 }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Believe.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getRandom', async () => {
    const responsePromise = client.coaching.principles.getRandom();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource principles', () => runTests(client));
describe('resource principles (tree shakable, base)', () => runTests(partialClient));
describe('resource principles (tree shakable, subresource)', () => runTests(parentPartialClient));
