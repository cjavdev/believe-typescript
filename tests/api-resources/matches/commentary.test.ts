// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCommentary } from '@cjavdev/believe/resources/matches/commentary';
import { Matches } from '@cjavdev/believe/resources/matches/matches';

import Believe, { toFile } from '@cjavdev/believe';
import { createClient, type PartialBelieve } from '@cjavdev/believe/tree-shakable';

const client = new Believe({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseCommentary],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Matches],
});

const runTests = (client: PartialBelieve<{ matches: { commentary: BaseCommentary } }>) => {
  // Mock server tests are disabled
  test.skip('stream', async () => {
    const responsePromise = client.matches.commentary.stream('match_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource commentary', () => runTests(client));
describe('resource commentary (tree shakable, base)', () => runTests(partialClient));
describe('resource commentary (tree shakable, subresource)', () => runTests(parentPartialClient));
