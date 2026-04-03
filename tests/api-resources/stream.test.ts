// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseStream } from '@cjavdev/believe/resources/stream';

import Believe, { toFile } from '@cjavdev/believe';
import { createClient, type PartialBelieve } from '@cjavdev/believe/tree-shakable';

const client = new Believe({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseStream],
});

const runTests = (client: PartialBelieve<{ stream: BaseStream }>) => {
  // Mock server tests are disabled
  test.skip('testConnection', async () => {
    const responsePromise = client.stream.testConnection();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource stream', () => runTests(client));
describe('resource stream (tree shakable, base)', () => runTests(partialClient));
