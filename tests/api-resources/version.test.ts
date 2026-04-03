// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseVersion } from '@cjavdev/believe/resources/version';

import Believe, { toFile } from '@cjavdev/believe';
import { createClient, type PartialBelieve } from '@cjavdev/believe/tree-shakable';

const client = new Believe({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseVersion],
});

const runTests = (client: PartialBelieve<{ version: BaseVersion }>) => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.version.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource version', () => runTests(client));
describe('resource version (tree shakable, base)', () => runTests(partialClient));
