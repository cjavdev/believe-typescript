// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseLogo } from '@cjavdev/believe/resources/teams/logo';
import { Teams } from '@cjavdev/believe/resources/teams/teams';

import Believe, { toFile } from '@cjavdev/believe';
import { createClient, type PartialBelieve } from '@cjavdev/believe/tree-shakable';

const client = new Believe({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [BaseLogo],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010',
  resources: [Teams],
});

const runTests = (client: PartialBelieve<{ teams: { logo: BaseLogo } }>) => {
  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.teams.logo.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { team_id: 'team_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.teams.logo.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { team_id: 'team_id' });
  });

  // Mock server tests are disabled
  test.skip('download: only required params', async () => {
    const responsePromise = client.teams.logo.download('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { team_id: 'team_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('download: required and optional params', async () => {
    const response = await client.teams.logo.download('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { team_id: 'team_id' });
  });

  // Mock server tests are disabled
  test.skip('upload: only required params', async () => {
    const responsePromise = client.teams.logo.upload('team_id', { file: await toFile(Buffer.from('Example data'), 'README.md') });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('upload: required and optional params', async () => {
    const response = await client.teams.logo.upload('team_id', { file: await toFile(Buffer.from('Example data'), 'README.md') });
  });
};
describe('resource logo', () => runTests(client));
describe('resource logo (tree shakable, base)', () => runTests(partialClient));
describe('resource logo (tree shakable, subresource)', () => runTests(parentPartialClient));
