// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BasePress } from '@cjavdev/believe/resources/press';

import Believe, { toFile } from '@cjavdev/believe';
import { createClient, type PartialBelieve } from '@cjavdev/believe/tree-shakable';

const client = new Believe({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BasePress],
});

const runTests = (client: PartialBelieve<{ press: BasePress }>) => {
  // Mock server tests are disabled
  test.skip('simulate: only required params', async () => {
    const responsePromise = client.press.simulate({ question: 'Ted, your team just lost 5-0. How do you explain this embarrassing defeat?' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('simulate: required and optional params', async () => {
    const response = await client.press.simulate({
    question: 'Ted, your team just lost 5-0. How do you explain this embarrassing defeat?',
    hostile: true,
    topic: 'match_result',
  });
  });
};
describe('resource press', () => runTests(client));
describe('resource press (tree shakable, base)', () => runTests(partialClient));
