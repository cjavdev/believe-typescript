// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseHealth } from '@cjavdev/believe/resources/health';

import Believe, { toFile } from '@cjavdev/believe';
import { createClient, type PartialBelieve } from '@cjavdev/believe/tree-shakable';

const client = new Believe({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseHealth],
});

const runTests = (client: PartialBelieve<{ health: BaseHealth }>) => {
  // Mock server tests are disabled
  test.skip('check', async () => {
    const responsePromise = client.health.check();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource health', () => runTests(client));
describe('resource health (tree shakable, base)', () => runTests(partialClient));
