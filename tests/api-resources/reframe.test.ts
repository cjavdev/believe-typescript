// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseReframe } from '@cjavdev/believe/resources/reframe';

import Believe, { toFile } from '@cjavdev/believe';
import { createClient, type PartialBelieve } from '@cjavdev/believe/tree-shakable';

const client = new Believe({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseReframe],
});

const runTests = (client: PartialBelieve<{ reframe: BaseReframe }>) => {
  // Mock server tests are disabled
  test.skip('transformNegativeThoughts: only required params', async () => {
    const responsePromise = client.reframe.transformNegativeThoughts({ negative_thought: 'I\'m not good enough for this job.' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('transformNegativeThoughts: required and optional params', async () => {
    const response = await client.reframe.transformNegativeThoughts({ negative_thought: 'I\'m not good enough for this job.', recurring: true });
  });
};
describe('resource reframe', () => runTests(client));
describe('resource reframe (tree shakable, base)', () => runTests(partialClient));
