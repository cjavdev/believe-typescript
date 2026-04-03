// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseBelieveResource } from '@cjavdev/believe/resources/believe';

import Believe, { toFile } from '@cjavdev/believe';
import { createClient, type PartialBelieve } from '@cjavdev/believe/tree-shakable';

const client = new Believe({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseBelieveResource],
});

const runTests = (client: PartialBelieve<{ believe: BaseBelieveResource }>) => {
  // Mock server tests are disabled
  test.skip('submit: only required params', async () => {
    const responsePromise = client.believe.submit({ situation: 'I just got passed over for a promotion I\'ve been working toward for two years.', situation_type: 'work_challenge' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('submit: required and optional params', async () => {
    const response = await client.believe.submit({
    situation: 'I just got passed over for a promotion I\'ve been working toward for two years.',
    situation_type: 'work_challenge',
    context: 'I\'ve always tried to be a team player and support my colleagues.',
    intensity: 7,
  });
  });
};
describe('resource believe', () => runTests(client));
describe('resource believe (tree shakable, base)', () => runTests(partialClient));
