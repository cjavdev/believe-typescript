// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseConflicts } from '@cjavdev/believe/resources/conflicts';

import Believe from '@cjavdev/believe';
import { createClient, type PartialBelieve } from '@cjavdev/believe/tree-shakable';

const client = new Believe({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseConflicts],
});

const runTests = (client: PartialBelieve<{ conflicts: BaseConflicts }>) => {
  // Mock server tests are disabled
  test.skip('resolve: only required params', async () => {
    const responsePromise = client.conflicts.resolve({
      conflict_type: 'interpersonal',
      description: "Alex keeps taking credit for my ideas in meetings and I'm getting resentful.",
      parties_involved: ['Me', 'My teammate Alex'],
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
  test.skip('resolve: required and optional params', async () => {
    const response = await client.conflicts.resolve({
      conflict_type: 'interpersonal',
      description: "Alex keeps taking credit for my ideas in meetings and I'm getting resentful.",
      parties_involved: ['Me', 'My teammate Alex'],
      attempts_made: ['Mentioned it casually', 'Avoided them'],
    });
  });
};
describe('resource conflicts', () => runTests(client));
describe('resource conflicts (tree shakable, base)', () => runTests(partialClient));
