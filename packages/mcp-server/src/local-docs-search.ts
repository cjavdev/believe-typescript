// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'get_welcome',
    endpoint: '/',
    httpMethod: 'get',
    summary: 'Welcome to the Ted Lasso API',
    description: 'Get a warm welcome and overview of available endpoints.',
    stainlessPath: '(resource) $client > (method) get_welcome',
    qualified: 'client.getWelcome',
    response: 'object',
    markdown:
      "## get_welcome\n\n`client.getWelcome(): object`\n\n**get** `/`\n\nGet a warm welcome and overview of available endpoints.\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst response = await client.getWelcome();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: '$client get_welcome',
        example: "believe get-welcome \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.GetWelcome',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.GetWelcome(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example: 'curl https://believe.cjav.dev/ \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'getWelcome',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.ClientGetWelcomeParams;\nimport com.believe.api.models.ClientGetWelcomeResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        ClientGetWelcomeResponse response = client.getWelcome();\n    }\n}',
      },
      kotlin: {
        method: 'getWelcome',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.ClientGetWelcomeParams\nimport com.believe.api.models.ClientGetWelcomeResponse\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val response: ClientGetWelcomeResponse = client.getWelcome()\n}',
      },
      python: {
        method: 'get_welcome',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.get_welcome()\nprint(response)',
      },
      ruby: {
        method: 'get_welcome',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresponse = believe.get_welcome\n\nputs(response)',
      },
      typescript: {
        method: 'client.getWelcome',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.getWelcome();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/characters',
    httpMethod: 'get',
    summary: 'List all characters',
    description: 'Get a paginated list of Ted Lasso characters.',
    stainlessPath: '(resource) characters > (method) list',
    qualified: 'client.characters.list',
    params: [
      'limit?: number;',
      'min_optimism?: number;',
      'role?: string;',
      'skip?: number;',
      'team_id?: string;',
    ],
    response:
      '{ id: string; background: string; emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }; name: string; personality_traits: string[]; role: string; date_of_birth?: string; email?: string; growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }',
    markdown:
      "## list\n\n`client.characters.list(limit?: number, min_optimism?: number, role?: string, skip?: number, team_id?: string): { id: string; background: string; emotional_stats: emotional_stats; name: string; personality_traits: string[]; role: character_role; date_of_birth?: string; email?: string; growth_arcs?: growth_arc[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }`\n\n**get** `/characters`\n\nGet a paginated list of Ted Lasso characters.\n\n### Parameters\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `min_optimism?: number`\n  Minimum optimism score\n\n- `role?: string`\n  Filter by role\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n- `team_id?: string`\n  Filter by team ID\n\n### Returns\n\n- `{ id: string; background: string; emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }; name: string; personality_traits: string[]; role: string; date_of_birth?: string; email?: string; growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }`\n  Full character model with ID.\n\n  - `id: string`\n  - `background: string`\n  - `emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }`\n  - `name: string`\n  - `personality_traits: string[]`\n  - `role: string`\n  - `date_of_birth?: string`\n  - `email?: string`\n  - `growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]`\n  - `height_meters?: number`\n  - `profile_image_url?: string`\n  - `salary_gbp?: string`\n  - `signature_quotes?: string[]`\n  - `team_id?: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\n// Automatically fetches more pages as needed.\nfor await (const character of client.characters.list()) {\n  console.log(character);\n}\n```",
    perLanguage: {
      cli: {
        method: 'characters list',
        example: "believe characters list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Characters.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Characters.List(context.TODO(), believe.CharacterListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/characters \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'characters().list',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.characters.CharacterListPage;\nimport com.believe.api.models.characters.CharacterListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        CharacterListPage page = client.characters().list();\n    }\n}',
      },
      kotlin: {
        method: 'characters().list',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.characters.CharacterListPage\nimport com.believe.api.models.characters.CharacterListParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val page: CharacterListPage = client.characters().list()\n}',
      },
      python: {
        method: 'characters.list',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.characters.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'characters.list',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\npage = believe.characters.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.characters.list',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const character of client.characters.list()) {\n  console.log(character.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/characters',
    httpMethod: 'post',
    summary: 'Create a new character',
    description: 'Add a new character to the Ted Lasso universe.',
    stainlessPath: '(resource) characters > (method) create',
    qualified: 'client.characters.create',
    params: [
      'background: string;',
      'emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; };',
      'name: string;',
      'personality_traits: string[];',
      'role: string;',
      'date_of_birth?: string;',
      'email?: string;',
      'growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[];',
      'height_meters?: number;',
      'profile_image_url?: string;',
      'salary_gbp?: number | string;',
      'signature_quotes?: string[];',
      'team_id?: string;',
    ],
    response:
      '{ id: string; background: string; emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }; name: string; personality_traits: string[]; role: string; date_of_birth?: string; email?: string; growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }',
    markdown:
      "## create\n\n`client.characters.create(background: string, emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }, name: string, personality_traits: string[], role: string, date_of_birth?: string, email?: string, growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[], height_meters?: number, profile_image_url?: string, salary_gbp?: number | string, signature_quotes?: string[], team_id?: string): { id: string; background: string; emotional_stats: emotional_stats; name: string; personality_traits: string[]; role: character_role; date_of_birth?: string; email?: string; growth_arcs?: growth_arc[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }`\n\n**post** `/characters`\n\nAdd a new character to the Ted Lasso universe.\n\n### Parameters\n\n- `background: string`\n  Character background and history\n\n- `emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }`\n  Emotional intelligence stats\n  - `curiosity: number`\n    Level of curiosity over judgment (0-100)\n  - `empathy: number`\n    Capacity for empathy (0-100)\n  - `optimism: number`\n    Level of optimism (0-100)\n  - `resilience: number`\n    Bounce-back ability (0-100)\n  - `vulnerability: number`\n    Willingness to be vulnerable (0-100)\n\n- `name: string`\n  Character's full name\n\n- `personality_traits: string[]`\n  Key personality traits\n\n- `role: string`\n  Character's role\n\n- `date_of_birth?: string`\n  Character's date of birth\n\n- `email?: string`\n  Character's email address\n\n- `growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]`\n  Character development across seasons\n\n- `height_meters?: number`\n  Height in meters\n\n- `profile_image_url?: string`\n  URL to character's profile image\n\n- `salary_gbp?: number | string`\n  Annual salary in GBP\n\n- `signature_quotes?: string[]`\n  Memorable quotes from this character\n\n- `team_id?: string`\n  ID of the team they belong to\n\n### Returns\n\n- `{ id: string; background: string; emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }; name: string; personality_traits: string[]; role: string; date_of_birth?: string; email?: string; growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }`\n  Full character model with ID.\n\n  - `id: string`\n  - `background: string`\n  - `emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }`\n  - `name: string`\n  - `personality_traits: string[]`\n  - `role: string`\n  - `date_of_birth?: string`\n  - `email?: string`\n  - `growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]`\n  - `height_meters?: number`\n  - `profile_image_url?: string`\n  - `salary_gbp?: string`\n  - `signature_quotes?: string[]`\n  - `team_id?: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst character = await client.characters.create({\n  background: 'Legendary midfielder for Chelsea and AFC Richmond, now assistant coach. Known for his gruff exterior hiding a heart of gold.',\n  emotional_stats: {\n  curiosity: 40,\n  empathy: 85,\n  optimism: 45,\n  resilience: 95,\n  vulnerability: 60,\n},\n  name: 'Roy Kent',\n  personality_traits: ['intense', 'loyal', 'secretly caring', 'profane'],\n  role: 'coach',\n});\n\nconsole.log(character);\n```",
    perLanguage: {
      cli: {
        method: 'characters create',
        example:
          "believe characters create \\\n  --api-key 'My API Key' \\\n  --background 'Legendary midfielder for Chelsea and AFC Richmond, now assistant coach. Known for his gruff exterior hiding a heart of gold.' \\\n  --emotional-stats '{curiosity: 40, empathy: 85, optimism: 45, resilience: 95, vulnerability: 60}' \\\n  --name 'Roy Kent' \\\n  --personality-trait intense \\\n  --personality-trait loyal \\\n  --personality-trait 'secretly caring' \\\n  --personality-trait profane \\\n  --role coach",
      },
      go: {
        method: 'client.Characters.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcharacter, err := client.Characters.New(context.TODO(), believe.CharacterNewParams{\n\t\tBackground: "Legendary midfielder for Chelsea and AFC Richmond, now assistant coach. Known for his gruff exterior hiding a heart of gold.",\n\t\tEmotionalStats: believe.EmotionalStatsParam{\n\t\t\tCuriosity:     40,\n\t\t\tEmpathy:       85,\n\t\t\tOptimism:      45,\n\t\t\tResilience:    95,\n\t\t\tVulnerability: 60,\n\t\t},\n\t\tName:              "Roy Kent",\n\t\tPersonalityTraits: []string{"intense", "loyal", "secretly caring", "profane"},\n\t\tRole:              believe.CharacterRoleCoach,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", character.ID)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/characters \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY" \\\n    -d "{\n          \\"background\\": \\"Legendary midfielder for Chelsea and AFC Richmond, now assistant coach. Known for his gruff exterior hiding a heart of gold.\\",\n          \\"emotional_stats\\": {\n            \\"curiosity\\": 40,\n            \\"empathy\\": 85,\n            \\"optimism\\": 45,\n            \\"resilience\\": 95,\n            \\"vulnerability\\": 60\n          },\n          \\"name\\": \\"Roy Kent\\",\n          \\"personality_traits\\": [\n            \\"intense\\",\n            \\"loyal\\",\n            \\"secretly caring\\",\n            \\"profane\\"\n          ],\n          \\"role\\": \\"coach\\",\n          \\"date_of_birth\\": \\"1977-03-15\\",\n          \\"email\\": \\"roy.kent@afcrichmond.com\\",\n          \\"height_meters\\": 1.78,\n          \\"profile_image_url\\": \\"https://afcrichmond.com/images/roy-kent.jpg\\",\n          \\"salary_gbp\\": \\"175000.00\\",\n          \\"signature_quotes\\": [\n            \\"He\'s here, he\'s there, he\'s every-f***ing-where, Roy Kent!\\",\n            \\"Whistle!\\"\n          ],\n          \\"team_id\\": \\"afc-richmond\\"\n        }"',
      },
      java: {
        method: 'characters().create',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.characters.Character;\nimport com.believe.api.models.characters.CharacterCreateParams;\nimport com.believe.api.models.characters.CharacterRole;\nimport com.believe.api.models.characters.EmotionalStats;\nimport java.util.List;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        CharacterCreateParams params = CharacterCreateParams.builder()\n            .background("Legendary midfielder for Chelsea and AFC Richmond, now assistant coach. Known for his gruff exterior hiding a heart of gold.")\n            .emotionalStats(EmotionalStats.builder()\n                .curiosity(40L)\n                .empathy(85L)\n                .optimism(45L)\n                .resilience(95L)\n                .vulnerability(60L)\n                .build())\n            .name("Roy Kent")\n            .personalityTraits(List.of(\n              "intense",\n              "loyal",\n              "secretly caring",\n              "profane"\n            ))\n            .role(CharacterRole.COACH)\n            .build();\n        Character character = client.characters().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'characters().create',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.characters.Character\nimport com.believe.api.models.characters.CharacterCreateParams\nimport com.believe.api.models.characters.CharacterRole\nimport com.believe.api.models.characters.EmotionalStats\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val params: CharacterCreateParams = CharacterCreateParams.builder()\n        .background("Legendary midfielder for Chelsea and AFC Richmond, now assistant coach. Known for his gruff exterior hiding a heart of gold.")\n        .emotionalStats(EmotionalStats.builder()\n            .curiosity(40L)\n            .empathy(85L)\n            .optimism(45L)\n            .resilience(95L)\n            .vulnerability(60L)\n            .build())\n        .name("Roy Kent")\n        .personalityTraits(listOf(\n          "intense",\n          "loyal",\n          "secretly caring",\n          "profane",\n        ))\n        .role(CharacterRole.COACH)\n        .build()\n    val character: Character = client.characters().create(params)\n}',
      },
      python: {
        method: 'characters.create',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\ncharacter = client.characters.create(\n    background="Legendary midfielder for Chelsea and AFC Richmond, now assistant coach. Known for his gruff exterior hiding a heart of gold.",\n    emotional_stats={\n        "curiosity": 40,\n        "empathy": 85,\n        "optimism": 45,\n        "resilience": 95,\n        "vulnerability": 60,\n    },\n    name="Roy Kent",\n    personality_traits=["intense", "loyal", "secretly caring", "profane"],\n    role="coach",\n)\nprint(character.id)',
      },
      ruby: {
        method: 'characters.create',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\ncharacter = believe.characters.create(\n  background: "Legendary midfielder for Chelsea and AFC Richmond, now assistant coach. Known for his gruff exterior hiding a heart of gold.",\n  emotional_stats: {curiosity: 40, empathy: 85, optimism: 45, resilience: 95, vulnerability: 60},\n  name: "Roy Kent",\n  personality_traits: ["intense", "loyal", "secretly caring", "profane"],\n  role: :coach\n)\n\nputs(character)',
      },
      typescript: {
        method: 'client.characters.create',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst character = await client.characters.create({\n  background:\n    'Legendary midfielder for Chelsea and AFC Richmond, now assistant coach. Known for his gruff exterior hiding a heart of gold.',\n  emotional_stats: {\n    curiosity: 40,\n    empathy: 85,\n    optimism: 45,\n    resilience: 95,\n    vulnerability: 60,\n  },\n  name: 'Roy Kent',\n  personality_traits: ['intense', 'loyal', 'secretly caring', 'profane'],\n  role: 'coach',\n});\n\nconsole.log(character.id);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/characters/{character_id}',
    httpMethod: 'get',
    summary: 'Get a character by ID',
    description: 'Retrieve detailed information about a specific character.',
    stainlessPath: '(resource) characters > (method) retrieve',
    qualified: 'client.characters.retrieve',
    params: ['character_id: string;'],
    response:
      '{ id: string; background: string; emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }; name: string; personality_traits: string[]; role: string; date_of_birth?: string; email?: string; growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }',
    markdown:
      "## retrieve\n\n`client.characters.retrieve(character_id: string): { id: string; background: string; emotional_stats: emotional_stats; name: string; personality_traits: string[]; role: character_role; date_of_birth?: string; email?: string; growth_arcs?: growth_arc[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }`\n\n**get** `/characters/{character_id}`\n\nRetrieve detailed information about a specific character.\n\n### Parameters\n\n- `character_id: string`\n\n### Returns\n\n- `{ id: string; background: string; emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }; name: string; personality_traits: string[]; role: string; date_of_birth?: string; email?: string; growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }`\n  Full character model with ID.\n\n  - `id: string`\n  - `background: string`\n  - `emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }`\n  - `name: string`\n  - `personality_traits: string[]`\n  - `role: string`\n  - `date_of_birth?: string`\n  - `email?: string`\n  - `growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]`\n  - `height_meters?: number`\n  - `profile_image_url?: string`\n  - `salary_gbp?: string`\n  - `signature_quotes?: string[]`\n  - `team_id?: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst character = await client.characters.retrieve('character_id');\n\nconsole.log(character);\n```",
    perLanguage: {
      cli: {
        method: 'characters retrieve',
        example: "believe characters retrieve \\\n  --api-key 'My API Key' \\\n  --character-id character_id",
      },
      go: {
        method: 'client.Characters.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcharacter, err := client.Characters.Get(context.TODO(), "character_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", character.ID)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/characters/$CHARACTER_ID \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'characters().retrieve',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.characters.Character;\nimport com.believe.api.models.characters.CharacterRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        Character character = client.characters().retrieve("character_id");\n    }\n}',
      },
      kotlin: {
        method: 'characters().retrieve',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.characters.Character\nimport com.believe.api.models.characters.CharacterRetrieveParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val character: Character = client.characters().retrieve("character_id")\n}',
      },
      python: {
        method: 'characters.retrieve',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\ncharacter = client.characters.retrieve(\n    "character_id",\n)\nprint(character.id)',
      },
      ruby: {
        method: 'characters.retrieve',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\ncharacter = believe.characters.retrieve("character_id")\n\nputs(character)',
      },
      typescript: {
        method: 'client.characters.retrieve',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst character = await client.characters.retrieve('character_id');\n\nconsole.log(character.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/characters/{character_id}',
    httpMethod: 'patch',
    summary: 'Update a character',
    description: 'Update specific fields of an existing character.',
    stainlessPath: '(resource) characters > (method) update',
    qualified: 'client.characters.update',
    params: [
      'character_id: string;',
      'background?: string;',
      'date_of_birth?: string;',
      'email?: string;',
      'emotional_stats?: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; };',
      'growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[];',
      'height_meters?: number;',
      'name?: string;',
      'personality_traits?: string[];',
      'profile_image_url?: string;',
      'role?: string;',
      'salary_gbp?: number | string;',
      'signature_quotes?: string[];',
      'team_id?: string;',
    ],
    response:
      '{ id: string; background: string; emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }; name: string; personality_traits: string[]; role: string; date_of_birth?: string; email?: string; growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }',
    markdown:
      "## update\n\n`client.characters.update(character_id: string, background?: string, date_of_birth?: string, email?: string, emotional_stats?: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }, growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[], height_meters?: number, name?: string, personality_traits?: string[], profile_image_url?: string, role?: string, salary_gbp?: number | string, signature_quotes?: string[], team_id?: string): { id: string; background: string; emotional_stats: emotional_stats; name: string; personality_traits: string[]; role: character_role; date_of_birth?: string; email?: string; growth_arcs?: growth_arc[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }`\n\n**patch** `/characters/{character_id}`\n\nUpdate specific fields of an existing character.\n\n### Parameters\n\n- `character_id: string`\n\n- `background?: string`\n\n- `date_of_birth?: string`\n\n- `email?: string`\n\n- `emotional_stats?: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }`\n  Emotional intelligence statistics for a character.\n  - `curiosity: number`\n    Level of curiosity over judgment (0-100)\n  - `empathy: number`\n    Capacity for empathy (0-100)\n  - `optimism: number`\n    Level of optimism (0-100)\n  - `resilience: number`\n    Bounce-back ability (0-100)\n  - `vulnerability: number`\n    Willingness to be vulnerable (0-100)\n\n- `growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]`\n\n- `height_meters?: number`\n\n- `name?: string`\n\n- `personality_traits?: string[]`\n\n- `profile_image_url?: string`\n\n- `role?: string`\n  Roles characters can have.\n\n- `salary_gbp?: number | string`\n\n- `signature_quotes?: string[]`\n\n- `team_id?: string`\n\n### Returns\n\n- `{ id: string; background: string; emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }; name: string; personality_traits: string[]; role: string; date_of_birth?: string; email?: string; growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }`\n  Full character model with ID.\n\n  - `id: string`\n  - `background: string`\n  - `emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }`\n  - `name: string`\n  - `personality_traits: string[]`\n  - `role: string`\n  - `date_of_birth?: string`\n  - `email?: string`\n  - `growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]`\n  - `height_meters?: number`\n  - `profile_image_url?: string`\n  - `salary_gbp?: string`\n  - `signature_quotes?: string[]`\n  - `team_id?: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst character = await client.characters.update('character_id');\n\nconsole.log(character);\n```",
    perLanguage: {
      cli: {
        method: 'characters update',
        example: "believe characters update \\\n  --api-key 'My API Key' \\\n  --character-id character_id",
      },
      go: {
        method: 'client.Characters.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcharacter, err := client.Characters.Update(\n\t\tcontext.TODO(),\n\t\t"character_id",\n\t\tbelieve.CharacterUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", character.ID)\n}\n',
      },
      http: {
        example:
          "curl https://believe.cjav.dev/characters/$CHARACTER_ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $BELIEVE_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'characters().update',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.characters.Character;\nimport com.believe.api.models.characters.CharacterUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        Character character = client.characters().update("character_id");\n    }\n}',
      },
      kotlin: {
        method: 'characters().update',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.characters.Character\nimport com.believe.api.models.characters.CharacterUpdateParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val character: Character = client.characters().update("character_id")\n}',
      },
      python: {
        method: 'characters.update',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\ncharacter = client.characters.update(\n    character_id="character_id",\n)\nprint(character.id)',
      },
      ruby: {
        method: 'characters.update',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\ncharacter = believe.characters.update("character_id")\n\nputs(character)',
      },
      typescript: {
        method: 'client.characters.update',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst character = await client.characters.update('character_id');\n\nconsole.log(character.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/characters/{character_id}',
    httpMethod: 'delete',
    summary: 'Delete a character',
    description: 'Remove a character from the database.',
    stainlessPath: '(resource) characters > (method) delete',
    qualified: 'client.characters.delete',
    params: ['character_id: string;'],
    markdown:
      "## delete\n\n`client.characters.delete(character_id: string): void`\n\n**delete** `/characters/{character_id}`\n\nRemove a character from the database.\n\n### Parameters\n\n- `character_id: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nawait client.characters.delete('character_id')\n```",
    perLanguage: {
      cli: {
        method: 'characters delete',
        example: "believe characters delete \\\n  --api-key 'My API Key' \\\n  --character-id character_id",
      },
      go: {
        method: 'client.Characters.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Characters.Delete(context.TODO(), "character_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/characters/$CHARACTER_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'characters().delete',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.characters.CharacterDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        client.characters().delete("character_id");\n    }\n}',
      },
      kotlin: {
        method: 'characters().delete',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.characters.CharacterDeleteParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    client.characters().delete("character_id")\n}',
      },
      python: {
        method: 'characters.delete',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nclient.characters.delete(\n    "character_id",\n)',
      },
      ruby: {
        method: 'characters.delete',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresult = believe.characters.delete("character_id")\n\nputs(result)',
      },
      typescript: {
        method: 'client.characters.delete',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.characters.delete('character_id');",
      },
    },
  },
  {
    name: 'get_quotes',
    endpoint: '/characters/{character_id}/quotes',
    httpMethod: 'get',
    summary: "Get character's signature quotes",
    description: 'Get all signature quotes from a specific character.',
    stainlessPath: '(resource) characters > (method) get_quotes',
    qualified: 'client.characters.getQuotes',
    params: ['character_id: string;'],
    response: 'string[]',
    markdown:
      "## get_quotes\n\n`client.characters.getQuotes(character_id: string): string[]`\n\n**get** `/characters/{character_id}/quotes`\n\nGet all signature quotes from a specific character.\n\n### Parameters\n\n- `character_id: string`\n\n### Returns\n\n- `string[]`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst response = await client.characters.getQuotes('character_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'characters get_quotes',
        example:
          "believe characters get-quotes \\\n  --api-key 'My API Key' \\\n  --character-id character_id",
      },
      go: {
        method: 'client.Characters.GetQuotes',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Characters.GetQuotes(context.TODO(), "character_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/characters/$CHARACTER_ID/quotes \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'characters().getQuotes',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.characters.CharacterGetQuotesParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        List<String> response = client.characters().getQuotes("character_id");\n    }\n}',
      },
      kotlin: {
        method: 'characters().getQuotes',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.characters.CharacterGetQuotesParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val response: List<String> = client.characters().getQuotes("character_id")\n}',
      },
      python: {
        method: 'characters.get_quotes',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.characters.get_quotes(\n    "character_id",\n)\nprint(response)',
      },
      ruby: {
        method: 'characters.get_quotes',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresponse = believe.characters.get_quotes("character_id")\n\nputs(response)',
      },
      typescript: {
        method: 'client.characters.getQuotes',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.characters.getQuotes('character_id');\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/teams',
    httpMethod: 'get',
    summary: 'List all teams',
    description: 'Get a paginated list of all teams with optional filtering by league or culture score.',
    stainlessPath: '(resource) teams > (method) list',
    qualified: 'client.teams.list',
    params: ['league?: string;', 'limit?: number;', 'min_culture_score?: number;', 'skip?: number;'],
    response:
      '{ id: string; culture_score: number; founded_year: number; league: string; name: string; stadium: string; values: { primary_value: string; secondary_values: string[]; team_motto: string; }; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: { latitude: number; longitude: number; }; website?: string; win_percentage?: number; }',
    markdown:
      "## list\n\n`client.teams.list(league?: string, limit?: number, min_culture_score?: number, skip?: number): { id: string; culture_score: number; founded_year: number; league: league; name: string; stadium: string; values: team_values; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: geo_location; website?: string; win_percentage?: number; }`\n\n**get** `/teams`\n\nGet a paginated list of all teams with optional filtering by league or culture score.\n\n### Parameters\n\n- `league?: string`\n  Filter by league\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `min_culture_score?: number`\n  Minimum culture score\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n### Returns\n\n- `{ id: string; culture_score: number; founded_year: number; league: string; name: string; stadium: string; values: { primary_value: string; secondary_values: string[]; team_motto: string; }; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: { latitude: number; longitude: number; }; website?: string; win_percentage?: number; }`\n  Full team model with ID.\n\n  - `id: string`\n  - `culture_score: number`\n  - `founded_year: number`\n  - `league: string`\n  - `name: string`\n  - `stadium: string`\n  - `values: { primary_value: string; secondary_values: string[]; team_motto: string; }`\n  - `annual_budget_gbp?: string`\n  - `average_attendance?: number`\n  - `contact_email?: string`\n  - `is_active?: boolean`\n  - `nickname?: string`\n  - `primary_color?: string`\n  - `rival_teams?: string[]`\n  - `secondary_color?: string`\n  - `stadium_location?: { latitude: number; longitude: number; }`\n  - `website?: string`\n  - `win_percentage?: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\n// Automatically fetches more pages as needed.\nfor await (const team of client.teams.list()) {\n  console.log(team);\n}\n```",
    perLanguage: {
      cli: {
        method: 'teams list',
        example: "believe teams list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Teams.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Teams.List(context.TODO(), believe.TeamListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example: 'curl https://believe.cjav.dev/teams \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'teams().list',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.teams.TeamListPage;\nimport com.believe.api.models.teams.TeamListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        TeamListPage page = client.teams().list();\n    }\n}',
      },
      kotlin: {
        method: 'teams().list',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.teams.TeamListPage\nimport com.believe.api.models.teams.TeamListParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val page: TeamListPage = client.teams().list()\n}',
      },
      python: {
        method: 'teams.list',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.teams.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'teams.list',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\npage = believe.teams.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.teams.list',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const team of client.teams.list()) {\n  console.log(team.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/teams',
    httpMethod: 'post',
    summary: 'Create a new team',
    description: 'Add a new team to the league.',
    stainlessPath: '(resource) teams > (method) create',
    qualified: 'client.teams.create',
    params: [
      'culture_score: number;',
      'founded_year: number;',
      'league: string;',
      'name: string;',
      'stadium: string;',
      'values: { primary_value: string; secondary_values: string[]; team_motto: string; };',
      'annual_budget_gbp?: number | string;',
      'average_attendance?: number;',
      'contact_email?: string;',
      'is_active?: boolean;',
      'nickname?: string;',
      'primary_color?: string;',
      'rival_teams?: string[];',
      'secondary_color?: string;',
      'stadium_location?: { latitude: number; longitude: number; };',
      'website?: string;',
      'win_percentage?: number;',
    ],
    response:
      '{ id: string; culture_score: number; founded_year: number; league: string; name: string; stadium: string; values: { primary_value: string; secondary_values: string[]; team_motto: string; }; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: { latitude: number; longitude: number; }; website?: string; win_percentage?: number; }',
    markdown:
      "## create\n\n`client.teams.create(culture_score: number, founded_year: number, league: string, name: string, stadium: string, values: { primary_value: string; secondary_values: string[]; team_motto: string; }, annual_budget_gbp?: number | string, average_attendance?: number, contact_email?: string, is_active?: boolean, nickname?: string, primary_color?: string, rival_teams?: string[], secondary_color?: string, stadium_location?: { latitude: number; longitude: number; }, website?: string, win_percentage?: number): { id: string; culture_score: number; founded_year: number; league: league; name: string; stadium: string; values: team_values; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: geo_location; website?: string; win_percentage?: number; }`\n\n**post** `/teams`\n\nAdd a new team to the league.\n\n### Parameters\n\n- `culture_score: number`\n  Team culture/morale score (0-100)\n\n- `founded_year: number`\n  Year the club was founded\n\n- `league: string`\n  Current league\n\n- `name: string`\n  Team name\n\n- `stadium: string`\n  Home stadium name\n\n- `values: { primary_value: string; secondary_values: string[]; team_motto: string; }`\n  Team's core values\n  - `primary_value: string`\n    The team's primary guiding value\n  - `secondary_values: string[]`\n    Supporting values\n  - `team_motto: string`\n    Team's motivational motto\n\n- `annual_budget_gbp?: number | string`\n  Annual budget in GBP\n\n- `average_attendance?: number`\n  Average match attendance\n\n- `contact_email?: string`\n  Team contact email\n\n- `is_active?: boolean`\n  Whether the team is currently active\n\n- `nickname?: string`\n  Team nickname\n\n- `primary_color?: string`\n  Primary team color (hex)\n\n- `rival_teams?: string[]`\n  List of rival team IDs\n\n- `secondary_color?: string`\n  Secondary team color (hex)\n\n- `stadium_location?: { latitude: number; longitude: number; }`\n  Geographic coordinates for a location.\n  - `latitude: number`\n    Latitude in degrees\n  - `longitude: number`\n    Longitude in degrees\n\n- `website?: string`\n  Official team website\n\n- `win_percentage?: number`\n  Season win percentage\n\n### Returns\n\n- `{ id: string; culture_score: number; founded_year: number; league: string; name: string; stadium: string; values: { primary_value: string; secondary_values: string[]; team_motto: string; }; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: { latitude: number; longitude: number; }; website?: string; win_percentage?: number; }`\n  Full team model with ID.\n\n  - `id: string`\n  - `culture_score: number`\n  - `founded_year: number`\n  - `league: string`\n  - `name: string`\n  - `stadium: string`\n  - `values: { primary_value: string; secondary_values: string[]; team_motto: string; }`\n  - `annual_budget_gbp?: string`\n  - `average_attendance?: number`\n  - `contact_email?: string`\n  - `is_active?: boolean`\n  - `nickname?: string`\n  - `primary_color?: string`\n  - `rival_teams?: string[]`\n  - `secondary_color?: string`\n  - `stadium_location?: { latitude: number; longitude: number; }`\n  - `website?: string`\n  - `win_percentage?: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst team = await client.teams.create({\n  culture_score: 70,\n  founded_year: 1895,\n  league: 'Premier League',\n  name: 'West Ham United',\n  stadium: 'London Stadium',\n  values: {\n  primary_value: 'Pride',\n  secondary_values: ['History', 'Community', 'Passion'],\n  team_motto: 'Forever Blowing Bubbles',\n},\n});\n\nconsole.log(team);\n```",
    perLanguage: {
      cli: {
        method: 'teams create',
        example:
          "believe teams create \\\n  --api-key 'My API Key' \\\n  --culture-score 70 \\\n  --founded-year 1895 \\\n  --league 'Premier League' \\\n  --name 'West Ham United' \\\n  --stadium 'London Stadium' \\\n  --values '{primary_value: Pride, secondary_values: [History, Community, Passion], team_motto: Forever Blowing Bubbles}'",
      },
      go: {
        method: 'client.Teams.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tteam, err := client.Teams.New(context.TODO(), believe.TeamNewParams{\n\t\tCultureScore: 70,\n\t\tFoundedYear:  1895,\n\t\tLeague:       believe.LeaguePremierLeague,\n\t\tName:         "West Ham United",\n\t\tStadium:      "London Stadium",\n\t\tValues: believe.TeamValuesParam{\n\t\t\tPrimaryValue:    "Pride",\n\t\t\tSecondaryValues: []string{"History", "Community", "Passion"},\n\t\t\tTeamMotto:       "Forever Blowing Bubbles",\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", team.ID)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/teams \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY" \\\n    -d \'{\n          "culture_score": 70,\n          "founded_year": 1895,\n          "league": "Premier League",\n          "name": "West Ham United",\n          "stadium": "London Stadium",\n          "values": {\n            "primary_value": "Pride",\n            "secondary_values": [\n              "History",\n              "Community",\n              "Passion"\n            ],\n            "team_motto": "Forever Blowing Bubbles"\n          },\n          "annual_budget_gbp": "150000000.00",\n          "average_attendance": 59988,\n          "contact_email": "info@westhamunited.co.uk",\n          "nickname": "The Hammers",\n          "primary_color": "#7A263A",\n          "rival_teams": [\n            "afc-richmond",\n            "tottenham"\n          ],\n          "secondary_color": "#1BB1E7",\n          "website": "https://www.whufc.com",\n          "win_percentage": 52.3\n        }\'',
      },
      java: {
        method: 'teams().create',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.teams.League;\nimport com.believe.api.models.teams.Team;\nimport com.believe.api.models.teams.TeamCreateParams;\nimport com.believe.api.models.teams.TeamValues;\nimport java.util.List;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        TeamCreateParams params = TeamCreateParams.builder()\n            .cultureScore(70L)\n            .foundedYear(1895L)\n            .league(League.PREMIER_LEAGUE)\n            .name("West Ham United")\n            .stadium("London Stadium")\n            .values(TeamValues.builder()\n                .primaryValue("Pride")\n                .secondaryValues(List.of(\n                  "History",\n                  "Community",\n                  "Passion"\n                ))\n                .teamMotto("Forever Blowing Bubbles")\n                .build())\n            .build();\n        Team team = client.teams().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'teams().create',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.teams.League\nimport com.believe.api.models.teams.Team\nimport com.believe.api.models.teams.TeamCreateParams\nimport com.believe.api.models.teams.TeamValues\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val params: TeamCreateParams = TeamCreateParams.builder()\n        .cultureScore(70L)\n        .foundedYear(1895L)\n        .league(League.PREMIER_LEAGUE)\n        .name("West Ham United")\n        .stadium("London Stadium")\n        .values(TeamValues.builder()\n            .primaryValue("Pride")\n            .secondaryValues(listOf(\n              "History",\n              "Community",\n              "Passion",\n            ))\n            .teamMotto("Forever Blowing Bubbles")\n            .build())\n        .build()\n    val team: Team = client.teams().create(params)\n}',
      },
      python: {
        method: 'teams.create',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nteam = client.teams.create(\n    culture_score=70,\n    founded_year=1895,\n    league="Premier League",\n    name="West Ham United",\n    stadium="London Stadium",\n    values={\n        "primary_value": "Pride",\n        "secondary_values": ["History", "Community", "Passion"],\n        "team_motto": "Forever Blowing Bubbles",\n    },\n)\nprint(team.id)',
      },
      ruby: {
        method: 'teams.create',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nteam = believe.teams.create(\n  culture_score: 70,\n  founded_year: 1895,\n  league: :"Premier League",\n  name: "West Ham United",\n  stadium: "London Stadium",\n  values: {\n    primary_value: "Pride",\n    secondary_values: ["History", "Community", "Passion"],\n    team_motto: "Forever Blowing Bubbles"\n  }\n)\n\nputs(team)',
      },
      typescript: {
        method: 'client.teams.create',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst team = await client.teams.create({\n  culture_score: 70,\n  founded_year: 1895,\n  league: 'Premier League',\n  name: 'West Ham United',\n  stadium: 'London Stadium',\n  values: {\n    primary_value: 'Pride',\n    secondary_values: ['History', 'Community', 'Passion'],\n    team_motto: 'Forever Blowing Bubbles',\n  },\n});\n\nconsole.log(team.id);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/teams/{team_id}',
    httpMethod: 'get',
    summary: 'Get a team by ID',
    description: 'Retrieve detailed information about a specific team.',
    stainlessPath: '(resource) teams > (method) retrieve',
    qualified: 'client.teams.retrieve',
    params: ['team_id: string;'],
    response:
      '{ id: string; culture_score: number; founded_year: number; league: string; name: string; stadium: string; values: { primary_value: string; secondary_values: string[]; team_motto: string; }; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: { latitude: number; longitude: number; }; website?: string; win_percentage?: number; }',
    markdown:
      "## retrieve\n\n`client.teams.retrieve(team_id: string): { id: string; culture_score: number; founded_year: number; league: league; name: string; stadium: string; values: team_values; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: geo_location; website?: string; win_percentage?: number; }`\n\n**get** `/teams/{team_id}`\n\nRetrieve detailed information about a specific team.\n\n### Parameters\n\n- `team_id: string`\n\n### Returns\n\n- `{ id: string; culture_score: number; founded_year: number; league: string; name: string; stadium: string; values: { primary_value: string; secondary_values: string[]; team_motto: string; }; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: { latitude: number; longitude: number; }; website?: string; win_percentage?: number; }`\n  Full team model with ID.\n\n  - `id: string`\n  - `culture_score: number`\n  - `founded_year: number`\n  - `league: string`\n  - `name: string`\n  - `stadium: string`\n  - `values: { primary_value: string; secondary_values: string[]; team_motto: string; }`\n  - `annual_budget_gbp?: string`\n  - `average_attendance?: number`\n  - `contact_email?: string`\n  - `is_active?: boolean`\n  - `nickname?: string`\n  - `primary_color?: string`\n  - `rival_teams?: string[]`\n  - `secondary_color?: string`\n  - `stadium_location?: { latitude: number; longitude: number; }`\n  - `website?: string`\n  - `win_percentage?: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst team = await client.teams.retrieve('team_id');\n\nconsole.log(team);\n```",
    perLanguage: {
      cli: {
        method: 'teams retrieve',
        example: "believe teams retrieve \\\n  --api-key 'My API Key' \\\n  --team-id team_id",
      },
      go: {
        method: 'client.Teams.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tteam, err := client.Teams.Get(context.TODO(), "team_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", team.ID)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/teams/$TEAM_ID \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'teams().retrieve',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.teams.Team;\nimport com.believe.api.models.teams.TeamRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        Team team = client.teams().retrieve("team_id");\n    }\n}',
      },
      kotlin: {
        method: 'teams().retrieve',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.teams.Team\nimport com.believe.api.models.teams.TeamRetrieveParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val team: Team = client.teams().retrieve("team_id")\n}',
      },
      python: {
        method: 'teams.retrieve',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nteam = client.teams.retrieve(\n    "team_id",\n)\nprint(team.id)',
      },
      ruby: {
        method: 'teams.retrieve',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nteam = believe.teams.retrieve("team_id")\n\nputs(team)',
      },
      typescript: {
        method: 'client.teams.retrieve',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst team = await client.teams.retrieve('team_id');\n\nconsole.log(team.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/teams/{team_id}',
    httpMethod: 'patch',
    summary: 'Update a team',
    description: 'Update specific fields of an existing team.',
    stainlessPath: '(resource) teams > (method) update',
    qualified: 'client.teams.update',
    params: [
      'team_id: string;',
      'annual_budget_gbp?: number | string;',
      'average_attendance?: number;',
      'contact_email?: string;',
      'culture_score?: number;',
      'founded_year?: number;',
      'is_active?: boolean;',
      'league?: string;',
      'name?: string;',
      'nickname?: string;',
      'primary_color?: string;',
      'rival_teams?: string[];',
      'secondary_color?: string;',
      'stadium?: string;',
      'stadium_location?: { latitude: number; longitude: number; };',
      'values?: { primary_value: string; secondary_values: string[]; team_motto: string; };',
      'website?: string;',
      'win_percentage?: number;',
    ],
    response:
      '{ id: string; culture_score: number; founded_year: number; league: string; name: string; stadium: string; values: { primary_value: string; secondary_values: string[]; team_motto: string; }; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: { latitude: number; longitude: number; }; website?: string; win_percentage?: number; }',
    markdown:
      "## update\n\n`client.teams.update(team_id: string, annual_budget_gbp?: number | string, average_attendance?: number, contact_email?: string, culture_score?: number, founded_year?: number, is_active?: boolean, league?: string, name?: string, nickname?: string, primary_color?: string, rival_teams?: string[], secondary_color?: string, stadium?: string, stadium_location?: { latitude: number; longitude: number; }, values?: { primary_value: string; secondary_values: string[]; team_motto: string; }, website?: string, win_percentage?: number): { id: string; culture_score: number; founded_year: number; league: league; name: string; stadium: string; values: team_values; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: geo_location; website?: string; win_percentage?: number; }`\n\n**patch** `/teams/{team_id}`\n\nUpdate specific fields of an existing team.\n\n### Parameters\n\n- `team_id: string`\n\n- `annual_budget_gbp?: number | string`\n\n- `average_attendance?: number`\n\n- `contact_email?: string`\n\n- `culture_score?: number`\n\n- `founded_year?: number`\n\n- `is_active?: boolean`\n\n- `league?: string`\n  Football leagues.\n\n- `name?: string`\n\n- `nickname?: string`\n\n- `primary_color?: string`\n\n- `rival_teams?: string[]`\n\n- `secondary_color?: string`\n\n- `stadium?: string`\n\n- `stadium_location?: { latitude: number; longitude: number; }`\n  Geographic coordinates for a location.\n  - `latitude: number`\n    Latitude in degrees\n  - `longitude: number`\n    Longitude in degrees\n\n- `values?: { primary_value: string; secondary_values: string[]; team_motto: string; }`\n  Core values that define a team's culture.\n  - `primary_value: string`\n    The team's primary guiding value\n  - `secondary_values: string[]`\n    Supporting values\n  - `team_motto: string`\n    Team's motivational motto\n\n- `website?: string`\n\n- `win_percentage?: number`\n\n### Returns\n\n- `{ id: string; culture_score: number; founded_year: number; league: string; name: string; stadium: string; values: { primary_value: string; secondary_values: string[]; team_motto: string; }; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: { latitude: number; longitude: number; }; website?: string; win_percentage?: number; }`\n  Full team model with ID.\n\n  - `id: string`\n  - `culture_score: number`\n  - `founded_year: number`\n  - `league: string`\n  - `name: string`\n  - `stadium: string`\n  - `values: { primary_value: string; secondary_values: string[]; team_motto: string; }`\n  - `annual_budget_gbp?: string`\n  - `average_attendance?: number`\n  - `contact_email?: string`\n  - `is_active?: boolean`\n  - `nickname?: string`\n  - `primary_color?: string`\n  - `rival_teams?: string[]`\n  - `secondary_color?: string`\n  - `stadium_location?: { latitude: number; longitude: number; }`\n  - `website?: string`\n  - `win_percentage?: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst team = await client.teams.update('team_id');\n\nconsole.log(team);\n```",
    perLanguage: {
      cli: {
        method: 'teams update',
        example: "believe teams update \\\n  --api-key 'My API Key' \\\n  --team-id team_id",
      },
      go: {
        method: 'client.Teams.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tteam, err := client.Teams.Update(\n\t\tcontext.TODO(),\n\t\t"team_id",\n\t\tbelieve.TeamUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", team.ID)\n}\n',
      },
      http: {
        example:
          "curl https://believe.cjav.dev/teams/$TEAM_ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $BELIEVE_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'teams().update',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.teams.Team;\nimport com.believe.api.models.teams.TeamUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        Team team = client.teams().update("team_id");\n    }\n}',
      },
      kotlin: {
        method: 'teams().update',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.teams.Team\nimport com.believe.api.models.teams.TeamUpdateParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val team: Team = client.teams().update("team_id")\n}',
      },
      python: {
        method: 'teams.update',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nteam = client.teams.update(\n    team_id="team_id",\n)\nprint(team.id)',
      },
      ruby: {
        method: 'teams.update',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nteam = believe.teams.update("team_id")\n\nputs(team)',
      },
      typescript: {
        method: 'client.teams.update',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst team = await client.teams.update('team_id');\n\nconsole.log(team.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/teams/{team_id}',
    httpMethod: 'delete',
    summary: 'Delete a team',
    description: 'Remove a team from the database (relegation to oblivion).',
    stainlessPath: '(resource) teams > (method) delete',
    qualified: 'client.teams.delete',
    params: ['team_id: string;'],
    markdown:
      "## delete\n\n`client.teams.delete(team_id: string): void`\n\n**delete** `/teams/{team_id}`\n\nRemove a team from the database (relegation to oblivion).\n\n### Parameters\n\n- `team_id: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nawait client.teams.delete('team_id')\n```",
    perLanguage: {
      cli: {
        method: 'teams delete',
        example: "believe teams delete \\\n  --api-key 'My API Key' \\\n  --team-id team_id",
      },
      go: {
        method: 'client.Teams.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Teams.Delete(context.TODO(), "team_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/teams/$TEAM_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'teams().delete',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.teams.TeamDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        client.teams().delete("team_id");\n    }\n}',
      },
      kotlin: {
        method: 'teams().delete',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.teams.TeamDeleteParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    client.teams().delete("team_id")\n}',
      },
      python: {
        method: 'teams.delete',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nclient.teams.delete(\n    "team_id",\n)',
      },
      ruby: {
        method: 'teams.delete',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresult = believe.teams.delete("team_id")\n\nputs(result)',
      },
      typescript: {
        method: 'client.teams.delete',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.teams.delete('team_id');",
      },
    },
  },
  {
    name: 'get_rivals',
    endpoint: '/teams/{team_id}/rivals',
    httpMethod: 'get',
    summary: "Get team's rivals",
    description: 'Get all rival teams for a specific team.',
    stainlessPath: '(resource) teams > (method) get_rivals',
    qualified: 'client.teams.getRivals',
    params: ['team_id: string;'],
    response:
      '{ id: string; culture_score: number; founded_year: number; league: string; name: string; stadium: string; values: object; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: object; website?: string; win_percentage?: number; }[]',
    markdown:
      "## get_rivals\n\n`client.teams.getRivals(team_id: string): object[]`\n\n**get** `/teams/{team_id}/rivals`\n\nGet all rival teams for a specific team.\n\n### Parameters\n\n- `team_id: string`\n\n### Returns\n\n- `{ id: string; culture_score: number; founded_year: number; league: string; name: string; stadium: string; values: object; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: object; website?: string; win_percentage?: number; }[]`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst teams = await client.teams.getRivals('team_id');\n\nconsole.log(teams);\n```",
    perLanguage: {
      cli: {
        method: 'teams get_rivals',
        example: "believe teams get-rivals \\\n  --api-key 'My API Key' \\\n  --team-id team_id",
      },
      go: {
        method: 'client.Teams.GetRivals',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tteams, err := client.Teams.GetRivals(context.TODO(), "team_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", teams)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/teams/$TEAM_ID/rivals \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'teams().getRivals',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.teams.Team;\nimport com.believe.api.models.teams.TeamGetRivalsParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        List<Team> teams = client.teams().getRivals("team_id");\n    }\n}',
      },
      kotlin: {
        method: 'teams().getRivals',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.teams.Team\nimport com.believe.api.models.teams.TeamGetRivalsParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val teams: List<Team> = client.teams().getRivals("team_id")\n}',
      },
      python: {
        method: 'teams.get_rivals',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nteams = client.teams.get_rivals(\n    "team_id",\n)\nprint(teams)',
      },
      ruby: {
        method: 'teams.get_rivals',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nteams = believe.teams.get_rivals("team_id")\n\nputs(teams)',
      },
      typescript: {
        method: 'client.teams.getRivals',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst teams = await client.teams.getRivals('team_id');\n\nconsole.log(teams);",
      },
    },
  },
  {
    name: 'get_culture',
    endpoint: '/teams/{team_id}/culture',
    httpMethod: 'get',
    summary: 'Get team culture details',
    description: 'Get detailed culture and values information for a team.',
    stainlessPath: '(resource) teams > (method) get_culture',
    qualified: 'client.teams.getCulture',
    params: ['team_id: string;'],
    response: 'object',
    markdown:
      "## get_culture\n\n`client.teams.getCulture(team_id: string): object`\n\n**get** `/teams/{team_id}/culture`\n\nGet detailed culture and values information for a team.\n\n### Parameters\n\n- `team_id: string`\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst response = await client.teams.getCulture('team_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'teams get_culture',
        example: "believe teams get-culture \\\n  --api-key 'My API Key' \\\n  --team-id team_id",
      },
      go: {
        method: 'client.Teams.GetCulture',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Teams.GetCulture(context.TODO(), "team_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/teams/$TEAM_ID/culture \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'teams().getCulture',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.teams.TeamGetCultureParams;\nimport com.believe.api.models.teams.TeamGetCultureResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        TeamGetCultureResponse response = client.teams().getCulture("team_id");\n    }\n}',
      },
      kotlin: {
        method: 'teams().getCulture',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.teams.TeamGetCultureParams\nimport com.believe.api.models.teams.TeamGetCultureResponse\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val response: TeamGetCultureResponse = client.teams().getCulture("team_id")\n}',
      },
      python: {
        method: 'teams.get_culture',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.teams.get_culture(\n    "team_id",\n)\nprint(response)',
      },
      ruby: {
        method: 'teams.get_culture',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresponse = believe.teams.get_culture("team_id")\n\nputs(response)',
      },
      typescript: {
        method: 'client.teams.getCulture',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.teams.getCulture('team_id');\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'list_logos',
    endpoint: '/teams/{team_id}/logos',
    httpMethod: 'get',
    summary: 'List team logos',
    description: 'List all uploaded logos for a team.',
    stainlessPath: '(resource) teams > (method) list_logos',
    qualified: 'client.teams.listLogos',
    params: ['team_id: string;'],
    response:
      '{ checksum_sha256: string; content_type: string; file_id: string; filename: string; size_bytes: number; uploaded_at: string; }[]',
    markdown:
      "## list_logos\n\n`client.teams.listLogos(team_id: string): object[]`\n\n**get** `/teams/{team_id}/logos`\n\nList all uploaded logos for a team.\n\n### Parameters\n\n- `team_id: string`\n\n### Returns\n\n- `{ checksum_sha256: string; content_type: string; file_id: string; filename: string; size_bytes: number; uploaded_at: string; }[]`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst fileUploads = await client.teams.listLogos('team_id');\n\nconsole.log(fileUploads);\n```",
    perLanguage: {
      cli: {
        method: 'teams list_logos',
        example: "believe teams list-logos \\\n  --api-key 'My API Key' \\\n  --team-id team_id",
      },
      go: {
        method: 'client.Teams.ListLogos',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfileUploads, err := client.Teams.ListLogos(context.TODO(), "team_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", fileUploads)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/teams/$TEAM_ID/logos \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'teams().listLogos',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.teams.TeamListLogosParams;\nimport com.believe.api.models.teams.logo.FileUpload;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        List<FileUpload> fileUploads = client.teams().listLogos("team_id");\n    }\n}',
      },
      kotlin: {
        method: 'teams().listLogos',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.teams.TeamListLogosParams\nimport com.believe.api.models.teams.logo.FileUpload\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val fileUploads: List<FileUpload> = client.teams().listLogos("team_id")\n}',
      },
      python: {
        method: 'teams.list_logos',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nfile_uploads = client.teams.list_logos(\n    "team_id",\n)\nprint(file_uploads)',
      },
      ruby: {
        method: 'teams.list_logos',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nfile_uploads = believe.teams.list_logos("team_id")\n\nputs(file_uploads)',
      },
      typescript: {
        method: 'client.teams.listLogos',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst fileUploads = await client.teams.listLogos('team_id');\n\nconsole.log(fileUploads);",
      },
    },
  },
  {
    name: 'upload',
    endpoint: '/teams/{team_id}/logo',
    httpMethod: 'post',
    summary: 'Upload team logo',
    description: 'Upload a logo image for a team. Accepts image files (jpg, png, gif, webp).',
    stainlessPath: '(resource) teams.logo > (method) upload',
    qualified: 'client.teams.logo.upload',
    params: ['team_id: string;', 'file: string;'],
    response:
      '{ checksum_sha256: string; content_type: string; file_id: string; filename: string; size_bytes: number; uploaded_at: string; }',
    markdown:
      "## upload\n\n`client.teams.logo.upload(team_id: string, file: string): { checksum_sha256: string; content_type: string; file_id: string; filename: string; size_bytes: number; uploaded_at: string; }`\n\n**post** `/teams/{team_id}/logo`\n\nUpload a logo image for a team. Accepts image files (jpg, png, gif, webp).\n\n### Parameters\n\n- `team_id: string`\n\n- `file: string`\n  Logo image file\n\n### Returns\n\n- `{ checksum_sha256: string; content_type: string; file_id: string; filename: string; size_bytes: number; uploaded_at: string; }`\n  Response model for file uploads.\n\n  - `checksum_sha256: string`\n  - `content_type: string`\n  - `file_id: string`\n  - `filename: string`\n  - `size_bytes: number`\n  - `uploaded_at: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst fileUpload = await client.teams.logo.upload('team_id', { file: fs.createReadStream('path/to/file') });\n\nconsole.log(fileUpload);\n```",
    perLanguage: {
      cli: {
        method: 'logo upload',
        example:
          "believe teams:logo upload \\\n  --api-key 'My API Key' \\\n  --team-id team_id \\\n  --file 'Example data'",
      },
      go: {
        method: 'client.Teams.Logo.Upload',
        example:
          'package main\n\nimport (\n\t"bytes"\n\t"context"\n\t"fmt"\n\t"io"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfileUpload, err := client.Teams.Logo.Upload(\n\t\tcontext.TODO(),\n\t\t"team_id",\n\t\tbelieve.TeamLogoUploadParams{\n\t\t\tFile: io.Reader(bytes.NewBuffer([]byte("Example data"))),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", fileUpload.FileID)\n}\n',
      },
      http: {
        example:
          "curl https://believe.cjav.dev/teams/$TEAM_ID/logo \\\n    -H 'Content-Type: multipart/form-data' \\\n    -H \"Authorization: Bearer $BELIEVE_API_KEY\" \\\n    -F 'file=@/path/to/file'",
      },
      java: {
        method: 'teams().logo().upload',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.teams.logo.FileUpload;\nimport com.believe.api.models.teams.logo.LogoUploadParams;\nimport java.io.ByteArrayInputStream;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        LogoUploadParams params = LogoUploadParams.builder()\n            .teamId("team_id")\n            .file(new ByteArrayInputStream("Example data".getBytes()))\n            .build();\n        FileUpload fileUpload = client.teams().logo().upload(params);\n    }\n}',
      },
      kotlin: {
        method: 'teams().logo().upload',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.teams.logo.FileUpload\nimport com.believe.api.models.teams.logo.LogoUploadParams\nimport java.io.ByteArrayInputStream\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val params: LogoUploadParams = LogoUploadParams.builder()\n        .teamId("team_id")\n        .file("Example data".byteInputStream())\n        .build()\n    val fileUpload: FileUpload = client.teams().logo().upload(params)\n}',
      },
      python: {
        method: 'teams.logo.upload',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nfile_upload = client.teams.logo.upload(\n    team_id="team_id",\n    file=b"Example data",\n)\nprint(file_upload.file_id)',
      },
      ruby: {
        method: 'teams.logo.upload',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nfile_upload = believe.teams.logo.upload("team_id", file: StringIO.new("Example data"))\n\nputs(file_upload)',
      },
      typescript: {
        method: 'client.teams.logo.upload',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst fileUpload = await client.teams.logo.upload('team_id', {\n  file: fs.createReadStream('path/to/file'),\n});\n\nconsole.log(fileUpload.file_id);",
      },
    },
  },
  {
    name: 'download',
    endpoint: '/teams/{team_id}/logo/{file_id}',
    httpMethod: 'get',
    summary: 'Download team logo',
    description: "Download a team's logo by file ID.",
    stainlessPath: '(resource) teams.logo > (method) download',
    qualified: 'client.teams.logo.download',
    params: ['team_id: string;', 'file_id: string;'],
    response: 'object',
    markdown:
      "## download\n\n`client.teams.logo.download(team_id: string, file_id: string): object`\n\n**get** `/teams/{team_id}/logo/{file_id}`\n\nDownload a team's logo by file ID.\n\n### Parameters\n\n- `team_id: string`\n\n- `file_id: string`\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst response = await client.teams.logo.download('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { team_id: 'team_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'logo download',
        example:
          "believe teams:logo download \\\n  --api-key 'My API Key' \\\n  --team-id team_id \\\n  --file-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      go: {
        method: 'client.Teams.Logo.Download',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Teams.Logo.Download(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tbelieve.TeamLogoDownloadParams{\n\t\t\tTeamID: "team_id",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/teams/$TEAM_ID/logo/$FILE_ID \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'teams().logo().download',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.teams.logo.LogoDownloadParams;\nimport com.believe.api.models.teams.logo.LogoDownloadResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        LogoDownloadParams params = LogoDownloadParams.builder()\n            .teamId("team_id")\n            .fileId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .build();\n        LogoDownloadResponse response = client.teams().logo().download(params);\n    }\n}',
      },
      kotlin: {
        method: 'teams().logo().download',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.teams.logo.LogoDownloadParams\nimport com.believe.api.models.teams.logo.LogoDownloadResponse\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val params: LogoDownloadParams = LogoDownloadParams.builder()\n        .teamId("team_id")\n        .fileId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n        .build()\n    val response: LogoDownloadResponse = client.teams().logo().download(params)\n}',
      },
      python: {
        method: 'teams.logo.download',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.teams.logo.download(\n    file_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    team_id="team_id",\n)\nprint(response)',
      },
      ruby: {
        method: 'teams.logo.download',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresponse = believe.teams.logo.download("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e", team_id: "team_id")\n\nputs(response)',
      },
      typescript: {
        method: 'client.teams.logo.download',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.teams.logo.download('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  team_id: 'team_id',\n});\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/teams/{team_id}/logo/{file_id}',
    httpMethod: 'delete',
    summary: 'Delete team logo',
    description: "Delete a team's logo.",
    stainlessPath: '(resource) teams.logo > (method) delete',
    qualified: 'client.teams.logo.delete',
    params: ['team_id: string;', 'file_id: string;'],
    markdown:
      "## delete\n\n`client.teams.logo.delete(team_id: string, file_id: string): void`\n\n**delete** `/teams/{team_id}/logo/{file_id}`\n\nDelete a team's logo.\n\n### Parameters\n\n- `team_id: string`\n\n- `file_id: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nawait client.teams.logo.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { team_id: 'team_id' })\n```",
    perLanguage: {
      cli: {
        method: 'logo delete',
        example:
          "believe teams:logo delete \\\n  --api-key 'My API Key' \\\n  --team-id team_id \\\n  --file-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      go: {
        method: 'client.Teams.Logo.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Teams.Logo.Delete(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tbelieve.TeamLogoDeleteParams{\n\t\t\tTeamID: "team_id",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/teams/$TEAM_ID/logo/$FILE_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'teams().logo().delete',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.teams.logo.LogoDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        LogoDeleteParams params = LogoDeleteParams.builder()\n            .teamId("team_id")\n            .fileId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n            .build();\n        client.teams().logo().delete(params);\n    }\n}',
      },
      kotlin: {
        method: 'teams().logo().delete',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.teams.logo.LogoDeleteParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val params: LogoDeleteParams = LogoDeleteParams.builder()\n        .teamId("team_id")\n        .fileId("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n        .build()\n    client.teams().logo().delete(params)\n}',
      },
      python: {
        method: 'teams.logo.delete',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nclient.teams.logo.delete(\n    file_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    team_id="team_id",\n)',
      },
      ruby: {
        method: 'teams.logo.delete',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresult = believe.teams.logo.delete("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e", team_id: "team_id")\n\nputs(result)',
      },
      typescript: {
        method: 'client.teams.logo.delete',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.teams.logo.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { team_id: 'team_id' });",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/matches',
    httpMethod: 'get',
    summary: 'List all matches',
    description: 'Get a paginated list of all matches with optional filtering.',
    stainlessPath: '(resource) matches > (method) list',
    qualified: 'client.matches.list',
    params: [
      'limit?: number;',
      "match_type?: 'league' | 'cup' | 'friendly' | 'playoff' | 'final';",
      "result?: 'win' | 'loss' | 'draw' | 'pending';",
      'skip?: number;',
      'team_id?: string;',
    ],
    response:
      "{ id: string; away_team_id: string; date: string; home_team_id: string; match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: 'win' | 'loss' | 'draw' | 'pending'; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]; weather_temp_celsius?: number; }",
    markdown:
      "## list\n\n`client.matches.list(limit?: number, match_type?: 'league' | 'cup' | 'friendly' | 'playoff' | 'final', result?: 'win' | 'loss' | 'draw' | 'pending', skip?: number, team_id?: string): { id: string; away_team_id: string; date: string; home_team_id: string; match_type: match_type; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: match_result; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: turning_point[]; weather_temp_celsius?: number; }`\n\n**get** `/matches`\n\nGet a paginated list of all matches with optional filtering.\n\n### Parameters\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `match_type?: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'`\n  Filter by match type\n\n- `result?: 'win' | 'loss' | 'draw' | 'pending'`\n  Filter by result\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n- `team_id?: string`\n  Filter by team (home or away)\n\n### Returns\n\n- `{ id: string; away_team_id: string; date: string; home_team_id: string; match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: 'win' | 'loss' | 'draw' | 'pending'; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]; weather_temp_celsius?: number; }`\n  Full match model with ID.\n\n  - `id: string`\n  - `away_team_id: string`\n  - `date: string`\n  - `home_team_id: string`\n  - `match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'`\n  - `attendance?: number`\n  - `away_score?: number`\n  - `episode_id?: string`\n  - `home_score?: number`\n  - `lesson_learned?: string`\n  - `possession_percentage?: number`\n  - `result?: 'win' | 'loss' | 'draw' | 'pending'`\n  - `ted_halftime_speech?: string`\n  - `ticket_revenue_gbp?: string`\n  - `turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]`\n  - `weather_temp_celsius?: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\n// Automatically fetches more pages as needed.\nfor await (const match of client.matches.list()) {\n  console.log(match);\n}\n```",
    perLanguage: {
      cli: {
        method: 'matches list',
        example: "believe matches list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Matches.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Matches.List(context.TODO(), believe.MatchListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example: 'curl https://believe.cjav.dev/matches \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'matches().list',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.matches.MatchListPage;\nimport com.believe.api.models.matches.MatchListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        MatchListPage page = client.matches().list();\n    }\n}',
      },
      kotlin: {
        method: 'matches().list',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.matches.MatchListPage\nimport com.believe.api.models.matches.MatchListParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val page: MatchListPage = client.matches().list()\n}',
      },
      python: {
        method: 'matches.list',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.matches.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'matches.list',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\npage = believe.matches.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.matches.list',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const match of client.matches.list()) {\n  console.log(match.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/matches',
    httpMethod: 'post',
    summary: 'Create a new match',
    description: 'Schedule a new match.',
    stainlessPath: '(resource) matches > (method) create',
    qualified: 'client.matches.create',
    params: [
      'away_team_id: string;',
      'date: string;',
      'home_team_id: string;',
      "match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final';",
      'attendance?: number;',
      'away_score?: number;',
      'episode_id?: string;',
      'home_score?: number;',
      'lesson_learned?: string;',
      'possession_percentage?: number;',
      "result?: 'win' | 'loss' | 'draw' | 'pending';",
      'ted_halftime_speech?: string;',
      'ticket_revenue_gbp?: number | string;',
      'turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[];',
      'weather_temp_celsius?: number;',
    ],
    response:
      "{ id: string; away_team_id: string; date: string; home_team_id: string; match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: 'win' | 'loss' | 'draw' | 'pending'; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]; weather_temp_celsius?: number; }",
    markdown:
      "## create\n\n`client.matches.create(away_team_id: string, date: string, home_team_id: string, match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final', attendance?: number, away_score?: number, episode_id?: string, home_score?: number, lesson_learned?: string, possession_percentage?: number, result?: 'win' | 'loss' | 'draw' | 'pending', ted_halftime_speech?: string, ticket_revenue_gbp?: number | string, turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[], weather_temp_celsius?: number): { id: string; away_team_id: string; date: string; home_team_id: string; match_type: match_type; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: match_result; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: turning_point[]; weather_temp_celsius?: number; }`\n\n**post** `/matches`\n\nSchedule a new match.\n\n### Parameters\n\n- `away_team_id: string`\n  Away team ID\n\n- `date: string`\n  Match date and time\n\n- `home_team_id: string`\n  Home team ID\n\n- `match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'`\n  Type of match\n\n- `attendance?: number`\n  Match attendance\n\n- `away_score?: number`\n  Away team score\n\n- `episode_id?: string`\n  Episode ID where this match is featured\n\n- `home_score?: number`\n  Home team score\n\n- `lesson_learned?: string`\n  The life lesson learned from this match\n\n- `possession_percentage?: number`\n  Home team possession percentage\n\n- `result?: 'win' | 'loss' | 'draw' | 'pending'`\n  Match result from home team perspective\n\n- `ted_halftime_speech?: string`\n  Ted's inspirational halftime speech\n\n- `ticket_revenue_gbp?: number | string`\n  Total ticket revenue in GBP\n\n- `turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]`\n  Key moments that changed the match\n\n- `weather_temp_celsius?: number`\n  Temperature at kickoff in Celsius\n\n### Returns\n\n- `{ id: string; away_team_id: string; date: string; home_team_id: string; match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: 'win' | 'loss' | 'draw' | 'pending'; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]; weather_temp_celsius?: number; }`\n  Full match model with ID.\n\n  - `id: string`\n  - `away_team_id: string`\n  - `date: string`\n  - `home_team_id: string`\n  - `match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'`\n  - `attendance?: number`\n  - `away_score?: number`\n  - `episode_id?: string`\n  - `home_score?: number`\n  - `lesson_learned?: string`\n  - `possession_percentage?: number`\n  - `result?: 'win' | 'loss' | 'draw' | 'pending'`\n  - `ted_halftime_speech?: string`\n  - `ticket_revenue_gbp?: string`\n  - `turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]`\n  - `weather_temp_celsius?: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst match = await client.matches.create({\n  away_team_id: 'tottenham',\n  date: '2024-02-20T19:45:00Z',\n  home_team_id: 'afc-richmond',\n  match_type: 'cup',\n});\n\nconsole.log(match);\n```",
    perLanguage: {
      cli: {
        method: 'matches create',
        example:
          "believe matches create \\\n  --api-key 'My API Key' \\\n  --away-team-id tottenham \\\n  --date \"'2024-02-20T19:45:00Z'\" \\\n  --home-team-id afc-richmond \\\n  --match-type cup",
      },
      go: {
        method: 'client.Matches.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tmatch, err := client.Matches.New(context.TODO(), believe.MatchNewParams{\n\t\tAwayTeamID: "tottenham",\n\t\tDate:       time.Now(),\n\t\tHomeTeamID: "afc-richmond",\n\t\tMatchType:  believe.MatchTypeCup,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", match.ID)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/matches \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY" \\\n    -d "{\n          \\"away_team_id\\": \\"tottenham\\",\n          \\"date\\": \\"2024-02-20T19:45:00Z\\",\n          \\"home_team_id\\": \\"afc-richmond\\",\n          \\"match_type\\": \\"cup\\",\n          \\"attendance\\": 24500,\n          \\"episode_id\\": \\"s02e05\\",\n          \\"lesson_learned\\": \\"It\'s not about the wins and losses, it\'s about helping these young fellas be the best versions of themselves.\\",\n          \\"possession_percentage\\": 50,\n          \\"ted_halftime_speech\\": \\"You know what the happiest animal on Earth is? It\'s a goldfish. You know why? It\'s got a 10-second memory.\\",\n          \\"ticket_revenue_gbp\\": \\"735000.00\\",\n          \\"weather_temp_celsius\\": 8.5\n        }"',
      },
      java: {
        method: 'matches().create',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.matches.Match;\nimport com.believe.api.models.matches.MatchCreateParams;\nimport com.believe.api.models.matches.MatchType;\nimport java.time.OffsetDateTime;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        MatchCreateParams params = MatchCreateParams.builder()\n            .awayTeamId("tottenham")\n            .date(OffsetDateTime.parse("2024-02-20T19:45:00Z"))\n            .homeTeamId("afc-richmond")\n            .matchType(MatchType.CUP)\n            .build();\n        Match match = client.matches().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'matches().create',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.matches.Match\nimport com.believe.api.models.matches.MatchCreateParams\nimport com.believe.api.models.matches.MatchType\nimport java.time.OffsetDateTime\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val params: MatchCreateParams = MatchCreateParams.builder()\n        .awayTeamId("tottenham")\n        .date(OffsetDateTime.parse("2024-02-20T19:45:00Z"))\n        .homeTeamId("afc-richmond")\n        .matchType(MatchType.CUP)\n        .build()\n    val match: Match = client.matches().create(params)\n}',
      },
      python: {
        method: 'matches.create',
        example:
          'import os\nfrom datetime import datetime\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nmatch = client.matches.create(\n    away_team_id="tottenham",\n    date=datetime.fromisoformat("2024-02-20T19:45:00"),\n    home_team_id="afc-richmond",\n    match_type="cup",\n)\nprint(match.id)',
      },
      ruby: {
        method: 'matches.create',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nmatch = believe.matches.create(\n  away_team_id: "tottenham",\n  date: "2024-02-20T19:45:00Z",\n  home_team_id: "afc-richmond",\n  match_type: :cup\n)\n\nputs(match)',
      },
      typescript: {
        method: 'client.matches.create',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst match = await client.matches.create({\n  away_team_id: 'tottenham',\n  date: '2024-02-20T19:45:00Z',\n  home_team_id: 'afc-richmond',\n  match_type: 'cup',\n});\n\nconsole.log(match.id);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/matches/{match_id}',
    httpMethod: 'get',
    summary: 'Get a match by ID',
    description: 'Retrieve detailed information about a specific match.',
    stainlessPath: '(resource) matches > (method) retrieve',
    qualified: 'client.matches.retrieve',
    params: ['match_id: string;'],
    response:
      "{ id: string; away_team_id: string; date: string; home_team_id: string; match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: 'win' | 'loss' | 'draw' | 'pending'; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]; weather_temp_celsius?: number; }",
    markdown:
      "## retrieve\n\n`client.matches.retrieve(match_id: string): { id: string; away_team_id: string; date: string; home_team_id: string; match_type: match_type; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: match_result; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: turning_point[]; weather_temp_celsius?: number; }`\n\n**get** `/matches/{match_id}`\n\nRetrieve detailed information about a specific match.\n\n### Parameters\n\n- `match_id: string`\n\n### Returns\n\n- `{ id: string; away_team_id: string; date: string; home_team_id: string; match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: 'win' | 'loss' | 'draw' | 'pending'; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]; weather_temp_celsius?: number; }`\n  Full match model with ID.\n\n  - `id: string`\n  - `away_team_id: string`\n  - `date: string`\n  - `home_team_id: string`\n  - `match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'`\n  - `attendance?: number`\n  - `away_score?: number`\n  - `episode_id?: string`\n  - `home_score?: number`\n  - `lesson_learned?: string`\n  - `possession_percentage?: number`\n  - `result?: 'win' | 'loss' | 'draw' | 'pending'`\n  - `ted_halftime_speech?: string`\n  - `ticket_revenue_gbp?: string`\n  - `turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]`\n  - `weather_temp_celsius?: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst match = await client.matches.retrieve('match_id');\n\nconsole.log(match);\n```",
    perLanguage: {
      cli: {
        method: 'matches retrieve',
        example: "believe matches retrieve \\\n  --api-key 'My API Key' \\\n  --match-id match_id",
      },
      go: {
        method: 'client.Matches.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tmatch, err := client.Matches.Get(context.TODO(), "match_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", match.ID)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/matches/$MATCH_ID \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'matches().retrieve',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.matches.Match;\nimport com.believe.api.models.matches.MatchRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        Match match = client.matches().retrieve("match_id");\n    }\n}',
      },
      kotlin: {
        method: 'matches().retrieve',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.matches.Match\nimport com.believe.api.models.matches.MatchRetrieveParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val match: Match = client.matches().retrieve("match_id")\n}',
      },
      python: {
        method: 'matches.retrieve',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nmatch = client.matches.retrieve(\n    "match_id",\n)\nprint(match.id)',
      },
      ruby: {
        method: 'matches.retrieve',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nmatch = believe.matches.retrieve("match_id")\n\nputs(match)',
      },
      typescript: {
        method: 'client.matches.retrieve',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst match = await client.matches.retrieve('match_id');\n\nconsole.log(match.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/matches/{match_id}',
    httpMethod: 'patch',
    summary: 'Update a match',
    description: 'Update specific fields of an existing match (e.g., update score).',
    stainlessPath: '(resource) matches > (method) update',
    qualified: 'client.matches.update',
    params: [
      'match_id: string;',
      'attendance?: number;',
      'away_score?: number;',
      'away_team_id?: string;',
      'date?: string;',
      'episode_id?: string;',
      'home_score?: number;',
      'home_team_id?: string;',
      'lesson_learned?: string;',
      "match_type?: 'league' | 'cup' | 'friendly' | 'playoff' | 'final';",
      'possession_percentage?: number;',
      "result?: 'win' | 'loss' | 'draw' | 'pending';",
      'ted_halftime_speech?: string;',
      'ticket_revenue_gbp?: number | string;',
      'turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[];',
      'weather_temp_celsius?: number;',
    ],
    response:
      "{ id: string; away_team_id: string; date: string; home_team_id: string; match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: 'win' | 'loss' | 'draw' | 'pending'; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]; weather_temp_celsius?: number; }",
    markdown:
      "## update\n\n`client.matches.update(match_id: string, attendance?: number, away_score?: number, away_team_id?: string, date?: string, episode_id?: string, home_score?: number, home_team_id?: string, lesson_learned?: string, match_type?: 'league' | 'cup' | 'friendly' | 'playoff' | 'final', possession_percentage?: number, result?: 'win' | 'loss' | 'draw' | 'pending', ted_halftime_speech?: string, ticket_revenue_gbp?: number | string, turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[], weather_temp_celsius?: number): { id: string; away_team_id: string; date: string; home_team_id: string; match_type: match_type; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: match_result; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: turning_point[]; weather_temp_celsius?: number; }`\n\n**patch** `/matches/{match_id}`\n\nUpdate specific fields of an existing match (e.g., update score).\n\n### Parameters\n\n- `match_id: string`\n\n- `attendance?: number`\n\n- `away_score?: number`\n\n- `away_team_id?: string`\n\n- `date?: string`\n\n- `episode_id?: string`\n\n- `home_score?: number`\n\n- `home_team_id?: string`\n\n- `lesson_learned?: string`\n\n- `match_type?: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'`\n  Types of matches.\n\n- `possession_percentage?: number`\n\n- `result?: 'win' | 'loss' | 'draw' | 'pending'`\n  Match result types.\n\n- `ted_halftime_speech?: string`\n\n- `ticket_revenue_gbp?: number | string`\n\n- `turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]`\n\n- `weather_temp_celsius?: number`\n\n### Returns\n\n- `{ id: string; away_team_id: string; date: string; home_team_id: string; match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: 'win' | 'loss' | 'draw' | 'pending'; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]; weather_temp_celsius?: number; }`\n  Full match model with ID.\n\n  - `id: string`\n  - `away_team_id: string`\n  - `date: string`\n  - `home_team_id: string`\n  - `match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'`\n  - `attendance?: number`\n  - `away_score?: number`\n  - `episode_id?: string`\n  - `home_score?: number`\n  - `lesson_learned?: string`\n  - `possession_percentage?: number`\n  - `result?: 'win' | 'loss' | 'draw' | 'pending'`\n  - `ted_halftime_speech?: string`\n  - `ticket_revenue_gbp?: string`\n  - `turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]`\n  - `weather_temp_celsius?: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst match = await client.matches.update('match_id');\n\nconsole.log(match);\n```",
    perLanguage: {
      cli: {
        method: 'matches update',
        example: "believe matches update \\\n  --api-key 'My API Key' \\\n  --match-id match_id",
      },
      go: {
        method: 'client.Matches.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tmatch, err := client.Matches.Update(\n\t\tcontext.TODO(),\n\t\t"match_id",\n\t\tbelieve.MatchUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", match.ID)\n}\n',
      },
      http: {
        example:
          "curl https://believe.cjav.dev/matches/$MATCH_ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $BELIEVE_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'matches().update',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.matches.Match;\nimport com.believe.api.models.matches.MatchUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        Match match = client.matches().update("match_id");\n    }\n}',
      },
      kotlin: {
        method: 'matches().update',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.matches.Match\nimport com.believe.api.models.matches.MatchUpdateParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val match: Match = client.matches().update("match_id")\n}',
      },
      python: {
        method: 'matches.update',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nmatch = client.matches.update(\n    match_id="match_id",\n)\nprint(match.id)',
      },
      ruby: {
        method: 'matches.update',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nmatch = believe.matches.update("match_id")\n\nputs(match)',
      },
      typescript: {
        method: 'client.matches.update',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst match = await client.matches.update('match_id');\n\nconsole.log(match.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/matches/{match_id}',
    httpMethod: 'delete',
    summary: 'Delete a match',
    description: 'Remove a match from the database.',
    stainlessPath: '(resource) matches > (method) delete',
    qualified: 'client.matches.delete',
    params: ['match_id: string;'],
    markdown:
      "## delete\n\n`client.matches.delete(match_id: string): void`\n\n**delete** `/matches/{match_id}`\n\nRemove a match from the database.\n\n### Parameters\n\n- `match_id: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nawait client.matches.delete('match_id')\n```",
    perLanguage: {
      cli: {
        method: 'matches delete',
        example: "believe matches delete \\\n  --api-key 'My API Key' \\\n  --match-id match_id",
      },
      go: {
        method: 'client.Matches.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Matches.Delete(context.TODO(), "match_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/matches/$MATCH_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'matches().delete',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.matches.MatchDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        client.matches().delete("match_id");\n    }\n}',
      },
      kotlin: {
        method: 'matches().delete',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.matches.MatchDeleteParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    client.matches().delete("match_id")\n}',
      },
      python: {
        method: 'matches.delete',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nclient.matches.delete(\n    "match_id",\n)',
      },
      ruby: {
        method: 'matches.delete',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresult = believe.matches.delete("match_id")\n\nputs(result)',
      },
      typescript: {
        method: 'client.matches.delete',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.matches.delete('match_id');",
      },
    },
  },
  {
    name: 'get_turning_points',
    endpoint: '/matches/{match_id}/turning-points',
    httpMethod: 'get',
    summary: 'Get match turning points',
    description: 'Get all turning points from a specific match.',
    stainlessPath: '(resource) matches > (method) get_turning_points',
    qualified: 'client.matches.getTurningPoints',
    params: ['match_id: string;'],
    response: 'object[]',
    markdown:
      "## get_turning_points\n\n`client.matches.getTurningPoints(match_id: string): object[]`\n\n**get** `/matches/{match_id}/turning-points`\n\nGet all turning points from a specific match.\n\n### Parameters\n\n- `match_id: string`\n\n### Returns\n\n- `object[]`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst response = await client.matches.getTurningPoints('match_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'matches get_turning_points',
        example: "believe matches get-turning-points \\\n  --api-key 'My API Key' \\\n  --match-id match_id",
      },
      go: {
        method: 'client.Matches.GetTurningPoints',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Matches.GetTurningPoints(context.TODO(), "match_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/matches/$MATCH_ID/turning-points \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'matches().getTurningPoints',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.matches.MatchGetTurningPointsParams;\nimport com.believe.api.models.matches.MatchGetTurningPointsResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        List<MatchGetTurningPointsResponse> response = client.matches().getTurningPoints("match_id");\n    }\n}',
      },
      kotlin: {
        method: 'matches().getTurningPoints',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.matches.MatchGetTurningPointsParams\nimport com.believe.api.models.matches.MatchGetTurningPointsResponse\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val response: List<MatchGetTurningPointsResponse> = client.matches().getTurningPoints("match_id")\n}',
      },
      python: {
        method: 'matches.get_turning_points',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.matches.get_turning_points(\n    "match_id",\n)\nprint(response)',
      },
      ruby: {
        method: 'matches.get_turning_points',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresponse = believe.matches.get_turning_points("match_id")\n\nputs(response)',
      },
      typescript: {
        method: 'client.matches.getTurningPoints',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.matches.getTurningPoints('match_id');\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_lesson',
    endpoint: '/matches/{match_id}/lesson',
    httpMethod: 'get',
    summary: 'Get match lesson',
    description: 'Get the life lesson learned from a specific match.',
    stainlessPath: '(resource) matches > (method) get_lesson',
    qualified: 'client.matches.getLesson',
    params: ['match_id: string;'],
    response: 'object',
    markdown:
      "## get_lesson\n\n`client.matches.getLesson(match_id: string): object`\n\n**get** `/matches/{match_id}/lesson`\n\nGet the life lesson learned from a specific match.\n\n### Parameters\n\n- `match_id: string`\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst response = await client.matches.getLesson('match_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'matches get_lesson',
        example: "believe matches get-lesson \\\n  --api-key 'My API Key' \\\n  --match-id match_id",
      },
      go: {
        method: 'client.Matches.GetLesson',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Matches.GetLesson(context.TODO(), "match_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/matches/$MATCH_ID/lesson \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'matches().getLesson',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.matches.MatchGetLessonParams;\nimport com.believe.api.models.matches.MatchGetLessonResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        MatchGetLessonResponse response = client.matches().getLesson("match_id");\n    }\n}',
      },
      kotlin: {
        method: 'matches().getLesson',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.matches.MatchGetLessonParams\nimport com.believe.api.models.matches.MatchGetLessonResponse\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val response: MatchGetLessonResponse = client.matches().getLesson("match_id")\n}',
      },
      python: {
        method: 'matches.get_lesson',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.matches.get_lesson(\n    "match_id",\n)\nprint(response)',
      },
      ruby: {
        method: 'matches.get_lesson',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresponse = believe.matches.get_lesson("match_id")\n\nputs(response)',
      },
      typescript: {
        method: 'client.matches.getLesson',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.matches.getLesson('match_id');\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'stream_live',
    endpoint: '/matches/live',
    httpMethod: 'get',
    summary: 'Live Match Simulation WebSocket',
    description:
      'WebSocket endpoint for real-time live match simulation.\n\nConnect to receive a stream of match events as they happen in a simulated football match.\n\n## Connection\n\nConnect via WebSocket with optional query parameters to customize the simulation.\n\n## Example WebSocket URL\n\n```\nws://localhost:8000/matches/live?home_team=AFC%20Richmond&away_team=Manchester%20City&speed=2.0&excitement_level=7\n```\n\n## Server Messages\n\nThe server sends JSON messages with these types:\n- `match_start` - When the match begins\n- `match_event` - For each match event (goals, fouls, cards, etc.)\n- `match_end` - When the match concludes\n- `error` - If an error occurs\n- `pong` - Response to client ping\n\n## Client Messages\n\nSend JSON to control the simulation:\n- `{"action": "ping"}` - Keep-alive, server responds with `{"type": "pong"}`\n- `{"action": "pause"}` - Pause the simulation\n- `{"action": "resume"}` - Resume a paused simulation\n- `{"action": "set_speed", "speed": 2.0}` - Change playback speed (0.1-10.0)\n- `{"action": "get_status"}` - Request current match status\n',
    stainlessPath: '(resource) matches > (method) stream_live',
    qualified: 'client.matches.streamLive',
    params: ['away_team?: string;', 'excitement_level?: number;', 'home_team?: string;', 'speed?: number;'],
    markdown:
      '## stream_live\n\n`client.matches.streamLive(away_team?: string, excitement_level?: number, home_team?: string, speed?: number): void`\n\n**get** `/matches/live`\n\nWebSocket endpoint for real-time live match simulation.\n\nConnect to receive a stream of match events as they happen in a simulated football match.\n\n## Connection\n\nConnect via WebSocket with optional query parameters to customize the simulation.\n\n## Example WebSocket URL\n\n```\nws://localhost:8000/matches/live?home_team=AFC%20Richmond&away_team=Manchester%20City&speed=2.0&excitement_level=7\n```\n\n## Server Messages\n\nThe server sends JSON messages with these types:\n- `match_start` - When the match begins\n- `match_event` - For each match event (goals, fouls, cards, etc.)\n- `match_end` - When the match concludes\n- `error` - If an error occurs\n- `pong` - Response to client ping\n\n## Client Messages\n\nSend JSON to control the simulation:\n- `{"action": "ping"}` - Keep-alive, server responds with `{"type": "pong"}`\n- `{"action": "pause"}` - Pause the simulation\n- `{"action": "resume"}` - Resume a paused simulation\n- `{"action": "set_speed", "speed": 2.0}` - Change playback speed (0.1-10.0)\n- `{"action": "get_status"}` - Request current match status\n\n\n### Parameters\n\n- `away_team?: string`\n  Away team name\n\n- `excitement_level?: number`\n  How eventful the match should be (1=boring, 10=chaos)\n\n- `home_team?: string`\n  Home team name\n\n- `speed?: number`\n  Simulation speed multiplier (1.0 = real-time)\n\n### Example\n\n```typescript\nimport Believe from \'@cjavdev/believe\';\n\nconst client = new Believe();\n\nawait client.matches.streamLive()\n```',
    perLanguage: {
      cli: {
        method: 'matches stream_live',
        example: "believe matches stream-live \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Matches.StreamLive',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Matches.StreamLive(context.TODO(), believe.MatchStreamLiveParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/matches/live \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'matches().streamLive',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.matches.MatchStreamLiveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        client.matches().streamLive();\n    }\n}',
      },
      kotlin: {
        method: 'matches().streamLive',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.matches.MatchStreamLiveParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    client.matches().streamLive()\n}',
      },
      python: {
        method: 'matches.stream_live',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nclient.matches.stream_live()',
      },
      ruby: {
        method: 'matches.stream_live',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresult = believe.matches.stream_live\n\nputs(result)',
      },
      typescript: {
        method: 'client.matches.streamLive',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.matches.streamLive();",
      },
    },
  },
  {
    name: 'stream',
    endpoint: '/matches/{match_id}/commentary/stream',
    httpMethod: 'post',
    summary: 'Stream Match Commentary',
    description:
      'Stream live match commentary for a specific match. Uses Server-Sent Events (SSE) to stream commentary events in real-time.',
    stainlessPath: '(resource) matches.commentary > (method) stream',
    qualified: 'client.matches.commentary.stream',
    params: ['match_id: string;'],
    response: 'object',
    markdown:
      "## stream\n\n`client.matches.commentary.stream(match_id: string): object`\n\n**post** `/matches/{match_id}/commentary/stream`\n\nStream live match commentary for a specific match. Uses Server-Sent Events (SSE) to stream commentary events in real-time.\n\n### Parameters\n\n- `match_id: string`\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst response = await client.matches.commentary.stream('match_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'commentary stream',
        example: "believe matches:commentary stream \\\n  --api-key 'My API Key' \\\n  --match-id match_id",
      },
      go: {
        method: 'client.Matches.Commentary.Stream',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Matches.Commentary.Stream(context.TODO(), "match_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/matches/$MATCH_ID/commentary/stream \\\n    -X POST \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'matches().commentary().stream',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.matches.commentary.CommentaryStreamParams;\nimport com.believe.api.models.matches.commentary.CommentaryStreamResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        CommentaryStreamResponse response = client.matches().commentary().stream("match_id");\n    }\n}',
      },
      kotlin: {
        method: 'matches().commentary().stream',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.matches.commentary.CommentaryStreamParams\nimport com.believe.api.models.matches.commentary.CommentaryStreamResponse\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val response: CommentaryStreamResponse = client.matches().commentary().stream("match_id")\n}',
      },
      python: {
        method: 'matches.commentary.stream',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.matches.commentary.stream(\n    "match_id",\n)\nprint(response)',
      },
      ruby: {
        method: 'matches.commentary.stream',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresponse = believe.matches.commentary.stream("match_id")\n\nputs(response)',
      },
      typescript: {
        method: 'client.matches.commentary.stream',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.matches.commentary.stream('match_id');\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/episodes',
    httpMethod: 'get',
    summary: 'List all episodes',
    description: 'Get a paginated list of all Ted Lasso episodes with optional filtering by season.',
    stainlessPath: '(resource) episodes > (method) list',
    qualified: 'client.episodes.list',
    params: ['character_focus?: string;', 'limit?: number;', 'season?: number;', 'skip?: number;'],
    response:
      '{ id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }',
    markdown:
      "## list\n\n`client.episodes.list(character_focus?: string, limit?: number, season?: number, skip?: number): { id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }`\n\n**get** `/episodes`\n\nGet a paginated list of all Ted Lasso episodes with optional filtering by season.\n\n### Parameters\n\n- `character_focus?: string`\n  Filter by character focus (character ID)\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `season?: number`\n  Filter by season\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n### Returns\n\n- `{ id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }`\n  Full episode model with ID.\n\n  - `id: string`\n  - `air_date: string`\n  - `character_focus: string[]`\n  - `director: string`\n  - `episode_number: number`\n  - `main_theme: string`\n  - `runtime_minutes: number`\n  - `season: number`\n  - `synopsis: string`\n  - `ted_wisdom: string`\n  - `title: string`\n  - `writer: string`\n  - `biscuits_with_boss_moment?: string`\n  - `memorable_moments?: string[]`\n  - `us_viewers_millions?: number`\n  - `viewer_rating?: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\n// Automatically fetches more pages as needed.\nfor await (const episode of client.episodes.list()) {\n  console.log(episode);\n}\n```",
    perLanguage: {
      cli: {
        method: 'episodes list',
        example: "believe episodes list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Episodes.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Episodes.List(context.TODO(), believe.EpisodeListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example: 'curl https://believe.cjav.dev/episodes \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'episodes().list',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.episodes.EpisodeListPage;\nimport com.believe.api.models.episodes.EpisodeListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        EpisodeListPage page = client.episodes().list();\n    }\n}',
      },
      kotlin: {
        method: 'episodes().list',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.episodes.EpisodeListPage\nimport com.believe.api.models.episodes.EpisodeListParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val page: EpisodeListPage = client.episodes().list()\n}',
      },
      python: {
        method: 'episodes.list',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.episodes.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'episodes.list',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\npage = believe.episodes.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.episodes.list',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const episode of client.episodes.list()) {\n  console.log(episode.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/episodes',
    httpMethod: 'post',
    summary: 'Create a new episode',
    description: 'Add a new episode to the series.',
    stainlessPath: '(resource) episodes > (method) create',
    qualified: 'client.episodes.create',
    params: [
      'air_date: string;',
      'character_focus: string[];',
      'director: string;',
      'episode_number: number;',
      'main_theme: string;',
      'runtime_minutes: number;',
      'season: number;',
      'synopsis: string;',
      'ted_wisdom: string;',
      'title: string;',
      'writer: string;',
      'biscuits_with_boss_moment?: string;',
      'memorable_moments?: string[];',
      'us_viewers_millions?: number;',
      'viewer_rating?: number;',
    ],
    response:
      '{ id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }',
    markdown:
      "## create\n\n`client.episodes.create(air_date: string, character_focus: string[], director: string, episode_number: number, main_theme: string, runtime_minutes: number, season: number, synopsis: string, ted_wisdom: string, title: string, writer: string, biscuits_with_boss_moment?: string, memorable_moments?: string[], us_viewers_millions?: number, viewer_rating?: number): { id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }`\n\n**post** `/episodes`\n\nAdd a new episode to the series.\n\n### Parameters\n\n- `air_date: string`\n  Original air date\n\n- `character_focus: string[]`\n  Characters with significant development\n\n- `director: string`\n  Episode director\n\n- `episode_number: number`\n  Episode number within season\n\n- `main_theme: string`\n  Central theme of the episode\n\n- `runtime_minutes: number`\n  Episode runtime in minutes\n\n- `season: number`\n  Season number\n\n- `synopsis: string`\n  Brief plot synopsis\n\n- `ted_wisdom: string`\n  Key piece of Ted wisdom from the episode\n\n- `title: string`\n  Episode title\n\n- `writer: string`\n  Episode writer(s)\n\n- `biscuits_with_boss_moment?: string`\n  Notable biscuits with the boss scene\n\n- `memorable_moments?: string[]`\n  Standout moments from the episode\n\n- `us_viewers_millions?: number`\n  US viewership in millions\n\n- `viewer_rating?: number`\n  Viewer rating out of 10\n\n### Returns\n\n- `{ id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }`\n  Full episode model with ID.\n\n  - `id: string`\n  - `air_date: string`\n  - `character_focus: string[]`\n  - `director: string`\n  - `episode_number: number`\n  - `main_theme: string`\n  - `runtime_minutes: number`\n  - `season: number`\n  - `synopsis: string`\n  - `ted_wisdom: string`\n  - `title: string`\n  - `writer: string`\n  - `biscuits_with_boss_moment?: string`\n  - `memorable_moments?: string[]`\n  - `us_viewers_millions?: number`\n  - `viewer_rating?: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst episode = await client.episodes.create({\n  air_date: '2020-10-02',\n  character_focus: ['ted-lasso', 'coach-beard', 'higgins', 'nate'],\n  director: 'MJ Delaney',\n  episode_number: 8,\n  main_theme: 'The power of vulnerability and male friendship',\n  runtime_minutes: 29,\n  season: 1,\n  synopsis: 'Ted creates a support group for the coaching staff while Rebecca faces a difficult decision about her future.',\n  ted_wisdom: 'There\\'s two buttons I never like to hit: that\\'s panic and snooze.',\n  title: 'The Diamond Dogs',\n  writer: 'Jason Sudeikis, Brendan Hunt, Joe Kelly',\n});\n\nconsole.log(episode);\n```",
    perLanguage: {
      cli: {
        method: 'episodes create',
        example:
          "believe episodes create \\\n  --api-key 'My API Key' \\\n  --air-date \"'2020-10-02'\" \\\n  --character-focus ted-lasso \\\n  --character-focus coach-beard \\\n  --character-focus higgins \\\n  --character-focus nate \\\n  --director 'MJ Delaney' \\\n  --episode-number 8 \\\n  --main-theme 'The power of vulnerability and male friendship' \\\n  --runtime-minutes 29 \\\n  --season 1 \\\n  --synopsis 'Ted creates a support group for the coaching staff while Rebecca faces a difficult decision about her future.' \\\n  --ted-wisdom \"There's two buttons I never like to hit: that's panic and snooze.\" \\\n  --title 'The Diamond Dogs' \\\n  --writer 'Jason Sudeikis, Brendan Hunt, Joe Kelly'",
      },
      go: {
        method: 'client.Episodes.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tepisode, err := client.Episodes.New(context.TODO(), believe.EpisodeNewParams{\n\t\tAirDate:        time.Now(),\n\t\tCharacterFocus: []string{"ted-lasso", "coach-beard", "higgins", "nate"},\n\t\tDirector:       "MJ Delaney",\n\t\tEpisodeNumber:  8,\n\t\tMainTheme:      "The power of vulnerability and male friendship",\n\t\tRuntimeMinutes: 29,\n\t\tSeason:         1,\n\t\tSynopsis:       "Ted creates a support group for the coaching staff while Rebecca faces a difficult decision about her future.",\n\t\tTedWisdom:      "There\'s two buttons I never like to hit: that\'s panic and snooze.",\n\t\tTitle:          "The Diamond Dogs",\n\t\tWriter:         "Jason Sudeikis, Brendan Hunt, Joe Kelly",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", episode.ID)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/episodes \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY" \\\n    -d "{\n          \\"air_date\\": \\"2020-10-02\\",\n          \\"character_focus\\": [\n            \\"ted-lasso\\",\n            \\"coach-beard\\",\n            \\"higgins\\",\n            \\"nate\\"\n          ],\n          \\"director\\": \\"MJ Delaney\\",\n          \\"episode_number\\": 8,\n          \\"main_theme\\": \\"The power of vulnerability and male friendship\\",\n          \\"runtime_minutes\\": 29,\n          \\"season\\": 1,\n          \\"synopsis\\": \\"Ted creates a support group for the coaching staff while Rebecca faces a difficult decision about her future.\\",\n          \\"ted_wisdom\\": \\"There\'s two buttons I never like to hit: that\'s panic and snooze.\\",\n          \\"title\\": \\"The Diamond Dogs\\",\n          \\"writer\\": \\"Jason Sudeikis, Brendan Hunt, Joe Kelly\\",\n          \\"biscuits_with_boss_moment\\": \\"Ted and Rebecca have an honest conversation about trust.\\",\n          \\"memorable_moments\\": [\n            \\"First Diamond Dogs meeting\\",\n            \\"The famous dart scene with Rupert\\",\n            \\"Be curious, not judgmental speech\\"\n          ],\n          \\"us_viewers_millions\\": 1.42,\n          \\"viewer_rating\\": 9.1\n        }"',
      },
      java: {
        method: 'episodes().create',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.episodes.Episode;\nimport com.believe.api.models.episodes.EpisodeCreateParams;\nimport java.time.LocalDate;\nimport java.util.List;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        EpisodeCreateParams params = EpisodeCreateParams.builder()\n            .airDate(LocalDate.parse("2020-10-02"))\n            .characterFocus(List.of(\n              "ted-lasso",\n              "coach-beard",\n              "higgins",\n              "nate"\n            ))\n            .director("MJ Delaney")\n            .episodeNumber(8L)\n            .mainTheme("The power of vulnerability and male friendship")\n            .runtimeMinutes(29L)\n            .season(1L)\n            .synopsis("Ted creates a support group for the coaching staff while Rebecca faces a difficult decision about her future.")\n            .tedWisdom("There\'s two buttons I never like to hit: that\'s panic and snooze.")\n            .title("The Diamond Dogs")\n            .writer("Jason Sudeikis, Brendan Hunt, Joe Kelly")\n            .build();\n        Episode episode = client.episodes().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'episodes().create',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.episodes.Episode\nimport com.believe.api.models.episodes.EpisodeCreateParams\nimport java.time.LocalDate\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val params: EpisodeCreateParams = EpisodeCreateParams.builder()\n        .airDate(LocalDate.parse("2020-10-02"))\n        .characterFocus(listOf(\n          "ted-lasso",\n          "coach-beard",\n          "higgins",\n          "nate",\n        ))\n        .director("MJ Delaney")\n        .episodeNumber(8L)\n        .mainTheme("The power of vulnerability and male friendship")\n        .runtimeMinutes(29L)\n        .season(1L)\n        .synopsis("Ted creates a support group for the coaching staff while Rebecca faces a difficult decision about her future.")\n        .tedWisdom("There\'s two buttons I never like to hit: that\'s panic and snooze.")\n        .title("The Diamond Dogs")\n        .writer("Jason Sudeikis, Brendan Hunt, Joe Kelly")\n        .build()\n    val episode: Episode = client.episodes().create(params)\n}',
      },
      python: {
        method: 'episodes.create',
        example:
          'import os\nfrom datetime import date\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nepisode = client.episodes.create(\n    air_date=date.fromisoformat("2020-10-02"),\n    character_focus=["ted-lasso", "coach-beard", "higgins", "nate"],\n    director="MJ Delaney",\n    episode_number=8,\n    main_theme="The power of vulnerability and male friendship",\n    runtime_minutes=29,\n    season=1,\n    synopsis="Ted creates a support group for the coaching staff while Rebecca faces a difficult decision about her future.",\n    ted_wisdom="There\'s two buttons I never like to hit: that\'s panic and snooze.",\n    title="The Diamond Dogs",\n    writer="Jason Sudeikis, Brendan Hunt, Joe Kelly",\n)\nprint(episode.id)',
      },
      ruby: {
        method: 'episodes.create',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nepisode = believe.episodes.create(\n  air_date: "2020-10-02",\n  character_focus: ["ted-lasso", "coach-beard", "higgins", "nate"],\n  director: "MJ Delaney",\n  episode_number: 8,\n  main_theme: "The power of vulnerability and male friendship",\n  runtime_minutes: 29,\n  season: 1,\n  synopsis: "Ted creates a support group for the coaching staff while Rebecca faces a difficult decision about her future.",\n  ted_wisdom: "There\'s two buttons I never like to hit: that\'s panic and snooze.",\n  title: "The Diamond Dogs",\n  writer: "Jason Sudeikis, Brendan Hunt, Joe Kelly"\n)\n\nputs(episode)',
      },
      typescript: {
        method: 'client.episodes.create',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst episode = await client.episodes.create({\n  air_date: '2020-10-02',\n  character_focus: ['ted-lasso', 'coach-beard', 'higgins', 'nate'],\n  director: 'MJ Delaney',\n  episode_number: 8,\n  main_theme: 'The power of vulnerability and male friendship',\n  runtime_minutes: 29,\n  season: 1,\n  synopsis:\n    'Ted creates a support group for the coaching staff while Rebecca faces a difficult decision about her future.',\n  ted_wisdom: \"There's two buttons I never like to hit: that's panic and snooze.\",\n  title: 'The Diamond Dogs',\n  writer: 'Jason Sudeikis, Brendan Hunt, Joe Kelly',\n});\n\nconsole.log(episode.id);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/episodes/{episode_id}',
    httpMethod: 'get',
    summary: 'Get an episode by ID',
    description: 'Retrieve detailed information about a specific episode.',
    stainlessPath: '(resource) episodes > (method) retrieve',
    qualified: 'client.episodes.retrieve',
    params: ['episode_id: string;'],
    response:
      '{ id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }',
    markdown:
      "## retrieve\n\n`client.episodes.retrieve(episode_id: string): { id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }`\n\n**get** `/episodes/{episode_id}`\n\nRetrieve detailed information about a specific episode.\n\n### Parameters\n\n- `episode_id: string`\n\n### Returns\n\n- `{ id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }`\n  Full episode model with ID.\n\n  - `id: string`\n  - `air_date: string`\n  - `character_focus: string[]`\n  - `director: string`\n  - `episode_number: number`\n  - `main_theme: string`\n  - `runtime_minutes: number`\n  - `season: number`\n  - `synopsis: string`\n  - `ted_wisdom: string`\n  - `title: string`\n  - `writer: string`\n  - `biscuits_with_boss_moment?: string`\n  - `memorable_moments?: string[]`\n  - `us_viewers_millions?: number`\n  - `viewer_rating?: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst episode = await client.episodes.retrieve('episode_id');\n\nconsole.log(episode);\n```",
    perLanguage: {
      cli: {
        method: 'episodes retrieve',
        example: "believe episodes retrieve \\\n  --api-key 'My API Key' \\\n  --episode-id episode_id",
      },
      go: {
        method: 'client.Episodes.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tepisode, err := client.Episodes.Get(context.TODO(), "episode_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", episode.ID)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/episodes/$EPISODE_ID \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'episodes().retrieve',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.episodes.Episode;\nimport com.believe.api.models.episodes.EpisodeRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        Episode episode = client.episodes().retrieve("episode_id");\n    }\n}',
      },
      kotlin: {
        method: 'episodes().retrieve',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.episodes.Episode\nimport com.believe.api.models.episodes.EpisodeRetrieveParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val episode: Episode = client.episodes().retrieve("episode_id")\n}',
      },
      python: {
        method: 'episodes.retrieve',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nepisode = client.episodes.retrieve(\n    "episode_id",\n)\nprint(episode.id)',
      },
      ruby: {
        method: 'episodes.retrieve',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nepisode = believe.episodes.retrieve("episode_id")\n\nputs(episode)',
      },
      typescript: {
        method: 'client.episodes.retrieve',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst episode = await client.episodes.retrieve('episode_id');\n\nconsole.log(episode.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/episodes/{episode_id}',
    httpMethod: 'patch',
    summary: 'Update an episode',
    description: 'Update specific fields of an existing episode.',
    stainlessPath: '(resource) episodes > (method) update',
    qualified: 'client.episodes.update',
    params: [
      'episode_id: string;',
      'air_date?: string;',
      'biscuits_with_boss_moment?: string;',
      'character_focus?: string[];',
      'director?: string;',
      'episode_number?: number;',
      'main_theme?: string;',
      'memorable_moments?: string[];',
      'runtime_minutes?: number;',
      'season?: number;',
      'synopsis?: string;',
      'ted_wisdom?: string;',
      'title?: string;',
      'us_viewers_millions?: number;',
      'viewer_rating?: number;',
      'writer?: string;',
    ],
    response:
      '{ id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }',
    markdown:
      "## update\n\n`client.episodes.update(episode_id: string, air_date?: string, biscuits_with_boss_moment?: string, character_focus?: string[], director?: string, episode_number?: number, main_theme?: string, memorable_moments?: string[], runtime_minutes?: number, season?: number, synopsis?: string, ted_wisdom?: string, title?: string, us_viewers_millions?: number, viewer_rating?: number, writer?: string): { id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }`\n\n**patch** `/episodes/{episode_id}`\n\nUpdate specific fields of an existing episode.\n\n### Parameters\n\n- `episode_id: string`\n\n- `air_date?: string`\n\n- `biscuits_with_boss_moment?: string`\n\n- `character_focus?: string[]`\n\n- `director?: string`\n\n- `episode_number?: number`\n\n- `main_theme?: string`\n\n- `memorable_moments?: string[]`\n\n- `runtime_minutes?: number`\n\n- `season?: number`\n\n- `synopsis?: string`\n\n- `ted_wisdom?: string`\n\n- `title?: string`\n\n- `us_viewers_millions?: number`\n\n- `viewer_rating?: number`\n\n- `writer?: string`\n\n### Returns\n\n- `{ id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }`\n  Full episode model with ID.\n\n  - `id: string`\n  - `air_date: string`\n  - `character_focus: string[]`\n  - `director: string`\n  - `episode_number: number`\n  - `main_theme: string`\n  - `runtime_minutes: number`\n  - `season: number`\n  - `synopsis: string`\n  - `ted_wisdom: string`\n  - `title: string`\n  - `writer: string`\n  - `biscuits_with_boss_moment?: string`\n  - `memorable_moments?: string[]`\n  - `us_viewers_millions?: number`\n  - `viewer_rating?: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst episode = await client.episodes.update('episode_id');\n\nconsole.log(episode);\n```",
    perLanguage: {
      cli: {
        method: 'episodes update',
        example: "believe episodes update \\\n  --api-key 'My API Key' \\\n  --episode-id episode_id",
      },
      go: {
        method: 'client.Episodes.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tepisode, err := client.Episodes.Update(\n\t\tcontext.TODO(),\n\t\t"episode_id",\n\t\tbelieve.EpisodeUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", episode.ID)\n}\n',
      },
      http: {
        example:
          "curl https://believe.cjav.dev/episodes/$EPISODE_ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $BELIEVE_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'episodes().update',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.episodes.Episode;\nimport com.believe.api.models.episodes.EpisodeUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        Episode episode = client.episodes().update("episode_id");\n    }\n}',
      },
      kotlin: {
        method: 'episodes().update',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.episodes.Episode\nimport com.believe.api.models.episodes.EpisodeUpdateParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val episode: Episode = client.episodes().update("episode_id")\n}',
      },
      python: {
        method: 'episodes.update',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nepisode = client.episodes.update(\n    episode_id="episode_id",\n)\nprint(episode.id)',
      },
      ruby: {
        method: 'episodes.update',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nepisode = believe.episodes.update("episode_id")\n\nputs(episode)',
      },
      typescript: {
        method: 'client.episodes.update',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst episode = await client.episodes.update('episode_id');\n\nconsole.log(episode.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/episodes/{episode_id}',
    httpMethod: 'delete',
    summary: 'Delete an episode',
    description: 'Remove an episode from the database.',
    stainlessPath: '(resource) episodes > (method) delete',
    qualified: 'client.episodes.delete',
    params: ['episode_id: string;'],
    markdown:
      "## delete\n\n`client.episodes.delete(episode_id: string): void`\n\n**delete** `/episodes/{episode_id}`\n\nRemove an episode from the database.\n\n### Parameters\n\n- `episode_id: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nawait client.episodes.delete('episode_id')\n```",
    perLanguage: {
      cli: {
        method: 'episodes delete',
        example: "believe episodes delete \\\n  --api-key 'My API Key' \\\n  --episode-id episode_id",
      },
      go: {
        method: 'client.Episodes.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Episodes.Delete(context.TODO(), "episode_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/episodes/$EPISODE_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'episodes().delete',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.episodes.EpisodeDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        client.episodes().delete("episode_id");\n    }\n}',
      },
      kotlin: {
        method: 'episodes().delete',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.episodes.EpisodeDeleteParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    client.episodes().delete("episode_id")\n}',
      },
      python: {
        method: 'episodes.delete',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nclient.episodes.delete(\n    "episode_id",\n)',
      },
      ruby: {
        method: 'episodes.delete',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresult = believe.episodes.delete("episode_id")\n\nputs(result)',
      },
      typescript: {
        method: 'client.episodes.delete',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.episodes.delete('episode_id');",
      },
    },
  },
  {
    name: 'get_wisdom',
    endpoint: '/episodes/{episode_id}/wisdom',
    httpMethod: 'get',
    summary: 'Get episode wisdom',
    description: "Get Ted's wisdom and memorable moments from a specific episode.",
    stainlessPath: '(resource) episodes > (method) get_wisdom',
    qualified: 'client.episodes.getWisdom',
    params: ['episode_id: string;'],
    response: 'object',
    markdown:
      "## get_wisdom\n\n`client.episodes.getWisdom(episode_id: string): object`\n\n**get** `/episodes/{episode_id}/wisdom`\n\nGet Ted's wisdom and memorable moments from a specific episode.\n\n### Parameters\n\n- `episode_id: string`\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst response = await client.episodes.getWisdom('episode_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'episodes get_wisdom',
        example: "believe episodes get-wisdom \\\n  --api-key 'My API Key' \\\n  --episode-id episode_id",
      },
      go: {
        method: 'client.Episodes.GetWisdom',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Episodes.GetWisdom(context.TODO(), "episode_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/episodes/$EPISODE_ID/wisdom \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'episodes().getWisdom',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.episodes.EpisodeGetWisdomParams;\nimport com.believe.api.models.episodes.EpisodeGetWisdomResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        EpisodeGetWisdomResponse response = client.episodes().getWisdom("episode_id");\n    }\n}',
      },
      kotlin: {
        method: 'episodes().getWisdom',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.episodes.EpisodeGetWisdomParams\nimport com.believe.api.models.episodes.EpisodeGetWisdomResponse\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val response: EpisodeGetWisdomResponse = client.episodes().getWisdom("episode_id")\n}',
      },
      python: {
        method: 'episodes.get_wisdom',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.episodes.get_wisdom(\n    "episode_id",\n)\nprint(response)',
      },
      ruby: {
        method: 'episodes.get_wisdom',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresponse = believe.episodes.get_wisdom("episode_id")\n\nputs(response)',
      },
      typescript: {
        method: 'client.episodes.getWisdom',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.episodes.getWisdom('episode_id');\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/quotes',
    httpMethod: 'get',
    summary: 'List all quotes',
    description: 'Get a paginated list of all memorable Ted Lasso quotes with optional filtering.',
    stainlessPath: '(resource) quotes > (method) list',
    qualified: 'client.quotes.list',
    params: [
      'character_id?: string;',
      'funny?: boolean;',
      'inspirational?: boolean;',
      'limit?: number;',
      'moment_type?: string;',
      'skip?: number;',
      'theme?: string;',
    ],
    response:
      '{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }',
    markdown:
      "## list\n\n`client.quotes.list(character_id?: string, funny?: boolean, inspirational?: boolean, limit?: number, moment_type?: string, skip?: number, theme?: string): { id: string; character_id: string; context: string; moment_type: quote_moment; text: string; theme: quote_theme; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: quote_theme[]; times_shared?: number; }`\n\n**get** `/quotes`\n\nGet a paginated list of all memorable Ted Lasso quotes with optional filtering.\n\n### Parameters\n\n- `character_id?: string`\n  Filter by character\n\n- `funny?: boolean`\n  Filter funny quotes\n\n- `inspirational?: boolean`\n  Filter inspirational quotes\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `moment_type?: string`\n  Filter by moment type\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n- `theme?: string`\n  Filter by theme\n\n### Returns\n\n- `{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }`\n  Full quote model with ID.\n\n  - `id: string`\n  - `character_id: string`\n  - `context: string`\n  - `moment_type: string`\n  - `text: string`\n  - `theme: string`\n  - `episode_id?: string`\n  - `is_funny?: boolean`\n  - `is_inspirational?: boolean`\n  - `popularity_score?: number`\n  - `secondary_themes?: string[]`\n  - `times_shared?: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\n// Automatically fetches more pages as needed.\nfor await (const quote of client.quotes.list()) {\n  console.log(quote);\n}\n```",
    perLanguage: {
      cli: {
        method: 'quotes list',
        example: "believe quotes list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Quotes.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Quotes.List(context.TODO(), believe.QuoteListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example: 'curl https://believe.cjav.dev/quotes \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'quotes().list',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.quotes.QuoteListPage;\nimport com.believe.api.models.quotes.QuoteListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        QuoteListPage page = client.quotes().list();\n    }\n}',
      },
      kotlin: {
        method: 'quotes().list',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.quotes.QuoteListPage\nimport com.believe.api.models.quotes.QuoteListParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val page: QuoteListPage = client.quotes().list()\n}',
      },
      python: {
        method: 'quotes.list',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.quotes.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'quotes.list',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\npage = believe.quotes.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.quotes.list',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const quote of client.quotes.list()) {\n  console.log(quote.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/quotes',
    httpMethod: 'post',
    summary: 'Create a new quote',
    description: 'Add a new memorable quote to the collection.',
    stainlessPath: '(resource) quotes > (method) create',
    qualified: 'client.quotes.create',
    params: [
      'character_id: string;',
      'context: string;',
      'moment_type: string;',
      'text: string;',
      'theme: string;',
      'episode_id?: string;',
      'is_funny?: boolean;',
      'is_inspirational?: boolean;',
      'popularity_score?: number;',
      'secondary_themes?: string[];',
      'times_shared?: number;',
    ],
    response:
      '{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }',
    markdown:
      "## create\n\n`client.quotes.create(character_id: string, context: string, moment_type: string, text: string, theme: string, episode_id?: string, is_funny?: boolean, is_inspirational?: boolean, popularity_score?: number, secondary_themes?: string[], times_shared?: number): { id: string; character_id: string; context: string; moment_type: quote_moment; text: string; theme: quote_theme; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: quote_theme[]; times_shared?: number; }`\n\n**post** `/quotes`\n\nAdd a new memorable quote to the collection.\n\n### Parameters\n\n- `character_id: string`\n  ID of the character who said it\n\n- `context: string`\n  Context in which the quote was said\n\n- `moment_type: string`\n  Type of moment when the quote was said\n\n- `text: string`\n  The quote text\n\n- `theme: string`\n  Primary theme of the quote\n\n- `episode_id?: string`\n  Episode where the quote appears\n\n- `is_funny?: boolean`\n  Whether this quote is humorous\n\n- `is_inspirational?: boolean`\n  Whether this quote is inspirational\n\n- `popularity_score?: number`\n  Popularity/virality score (0-100)\n\n- `secondary_themes?: string[]`\n  Additional themes\n\n- `times_shared?: number`\n  Number of times shared on social media\n\n### Returns\n\n- `{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }`\n  Full quote model with ID.\n\n  - `id: string`\n  - `character_id: string`\n  - `context: string`\n  - `moment_type: string`\n  - `text: string`\n  - `theme: string`\n  - `episode_id?: string`\n  - `is_funny?: boolean`\n  - `is_inspirational?: boolean`\n  - `popularity_score?: number`\n  - `secondary_themes?: string[]`\n  - `times_shared?: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst quote = await client.quotes.create({\n  character_id: 'ted-lasso',\n  context: 'Ted\\'s first team meeting, revealing his coaching philosophy',\n  moment_type: 'locker_room',\n  text: 'I believe in believe.',\n  theme: 'belief',\n});\n\nconsole.log(quote);\n```",
    perLanguage: {
      cli: {
        method: 'quotes create',
        example:
          "believe quotes create \\\n  --api-key 'My API Key' \\\n  --character-id ted-lasso \\\n  --context \"Ted's first team meeting, revealing his coaching philosophy\" \\\n  --moment-type locker_room \\\n  --text 'I believe in believe.' \\\n  --theme belief",
      },
      go: {
        method: 'client.Quotes.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tquote, err := client.Quotes.New(context.TODO(), believe.QuoteNewParams{\n\t\tCharacterID: "ted-lasso",\n\t\tContext:     "Ted\'s first team meeting, revealing his coaching philosophy",\n\t\tMomentType:  believe.QuoteMomentLockerRoom,\n\t\tText:        "I believe in believe.",\n\t\tTheme:       believe.QuoteThemeBelief,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", quote.ID)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/quotes \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY" \\\n    -d "{\n          \\"character_id\\": \\"ted-lasso\\",\n          \\"context\\": \\"Ted\'s first team meeting, revealing his coaching philosophy\\",\n          \\"moment_type\\": \\"locker_room\\",\n          \\"text\\": \\"I believe in believe.\\",\n          \\"theme\\": \\"belief\\",\n          \\"episode_id\\": \\"s01e01\\",\n          \\"popularity_score\\": 98.5,\n          \\"secondary_themes\\": [\n            \\"leadership\\",\n            \\"teamwork\\"\n          ],\n          \\"times_shared\\": 250000\n        }"',
      },
      java: {
        method: 'quotes().create',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.quotes.Quote;\nimport com.believe.api.models.quotes.QuoteCreateParams;\nimport com.believe.api.models.quotes.QuoteMoment;\nimport com.believe.api.models.quotes.QuoteTheme;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        QuoteCreateParams params = QuoteCreateParams.builder()\n            .characterId("ted-lasso")\n            .context("Ted\'s first team meeting, revealing his coaching philosophy")\n            .momentType(QuoteMoment.LOCKER_ROOM)\n            .text("I believe in believe.")\n            .theme(QuoteTheme.BELIEF)\n            .build();\n        Quote quote = client.quotes().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'quotes().create',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.quotes.Quote\nimport com.believe.api.models.quotes.QuoteCreateParams\nimport com.believe.api.models.quotes.QuoteMoment\nimport com.believe.api.models.quotes.QuoteTheme\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val params: QuoteCreateParams = QuoteCreateParams.builder()\n        .characterId("ted-lasso")\n        .context("Ted\'s first team meeting, revealing his coaching philosophy")\n        .momentType(QuoteMoment.LOCKER_ROOM)\n        .text("I believe in believe.")\n        .theme(QuoteTheme.BELIEF)\n        .build()\n    val quote: Quote = client.quotes().create(params)\n}',
      },
      python: {
        method: 'quotes.create',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nquote = client.quotes.create(\n    character_id="ted-lasso",\n    context="Ted\'s first team meeting, revealing his coaching philosophy",\n    moment_type="locker_room",\n    text="I believe in believe.",\n    theme="belief",\n)\nprint(quote.id)',
      },
      ruby: {
        method: 'quotes.create',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nquote = believe.quotes.create(\n  character_id: "ted-lasso",\n  context: "Ted\'s first team meeting, revealing his coaching philosophy",\n  moment_type: :locker_room,\n  text: "I believe in believe.",\n  theme: :belief\n)\n\nputs(quote)',
      },
      typescript: {
        method: 'client.quotes.create',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst quote = await client.quotes.create({\n  character_id: 'ted-lasso',\n  context: \"Ted's first team meeting, revealing his coaching philosophy\",\n  moment_type: 'locker_room',\n  text: 'I believe in believe.',\n  theme: 'belief',\n});\n\nconsole.log(quote.id);",
      },
    },
  },
  {
    name: 'get_random',
    endpoint: '/quotes/random',
    httpMethod: 'get',
    summary: 'Get a random quote',
    description: 'Get a random Ted Lasso quote, optionally filtered.',
    stainlessPath: '(resource) quotes > (method) get_random',
    qualified: 'client.quotes.getRandom',
    params: ['character_id?: string;', 'inspirational?: boolean;', 'theme?: string;'],
    response:
      '{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }',
    markdown:
      "## get_random\n\n`client.quotes.getRandom(character_id?: string, inspirational?: boolean, theme?: string): { id: string; character_id: string; context: string; moment_type: quote_moment; text: string; theme: quote_theme; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: quote_theme[]; times_shared?: number; }`\n\n**get** `/quotes/random`\n\nGet a random Ted Lasso quote, optionally filtered.\n\n### Parameters\n\n- `character_id?: string`\n  Filter by character\n\n- `inspirational?: boolean`\n  Filter inspirational quotes\n\n- `theme?: string`\n  Filter by theme\n\n### Returns\n\n- `{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }`\n  Full quote model with ID.\n\n  - `id: string`\n  - `character_id: string`\n  - `context: string`\n  - `moment_type: string`\n  - `text: string`\n  - `theme: string`\n  - `episode_id?: string`\n  - `is_funny?: boolean`\n  - `is_inspirational?: boolean`\n  - `popularity_score?: number`\n  - `secondary_themes?: string[]`\n  - `times_shared?: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst quote = await client.quotes.getRandom();\n\nconsole.log(quote);\n```",
    perLanguage: {
      cli: {
        method: 'quotes get_random',
        example: "believe quotes get-random \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Quotes.GetRandom',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tquote, err := client.Quotes.GetRandom(context.TODO(), believe.QuoteGetRandomParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", quote.ID)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/quotes/random \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'quotes().getRandom',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.quotes.Quote;\nimport com.believe.api.models.quotes.QuoteGetRandomParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        Quote quote = client.quotes().getRandom();\n    }\n}',
      },
      kotlin: {
        method: 'quotes().getRandom',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.quotes.Quote\nimport com.believe.api.models.quotes.QuoteGetRandomParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val quote: Quote = client.quotes().getRandom()\n}',
      },
      python: {
        method: 'quotes.get_random',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nquote = client.quotes.get_random()\nprint(quote.id)',
      },
      ruby: {
        method: 'quotes.get_random',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nquote = believe.quotes.get_random\n\nputs(quote)',
      },
      typescript: {
        method: 'client.quotes.getRandom',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst quote = await client.quotes.getRandom();\n\nconsole.log(quote.id);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/quotes/{quote_id}',
    httpMethod: 'get',
    summary: 'Get a quote by ID',
    description: 'Retrieve a specific quote by its ID.',
    stainlessPath: '(resource) quotes > (method) retrieve',
    qualified: 'client.quotes.retrieve',
    params: ['quote_id: string;'],
    response:
      '{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }',
    markdown:
      "## retrieve\n\n`client.quotes.retrieve(quote_id: string): { id: string; character_id: string; context: string; moment_type: quote_moment; text: string; theme: quote_theme; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: quote_theme[]; times_shared?: number; }`\n\n**get** `/quotes/{quote_id}`\n\nRetrieve a specific quote by its ID.\n\n### Parameters\n\n- `quote_id: string`\n\n### Returns\n\n- `{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }`\n  Full quote model with ID.\n\n  - `id: string`\n  - `character_id: string`\n  - `context: string`\n  - `moment_type: string`\n  - `text: string`\n  - `theme: string`\n  - `episode_id?: string`\n  - `is_funny?: boolean`\n  - `is_inspirational?: boolean`\n  - `popularity_score?: number`\n  - `secondary_themes?: string[]`\n  - `times_shared?: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst quote = await client.quotes.retrieve('quote_id');\n\nconsole.log(quote);\n```",
    perLanguage: {
      cli: {
        method: 'quotes retrieve',
        example: "believe quotes retrieve \\\n  --api-key 'My API Key' \\\n  --quote-id quote_id",
      },
      go: {
        method: 'client.Quotes.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tquote, err := client.Quotes.Get(context.TODO(), "quote_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", quote.ID)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/quotes/$QUOTE_ID \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'quotes().retrieve',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.quotes.Quote;\nimport com.believe.api.models.quotes.QuoteRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        Quote quote = client.quotes().retrieve("quote_id");\n    }\n}',
      },
      kotlin: {
        method: 'quotes().retrieve',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.quotes.Quote\nimport com.believe.api.models.quotes.QuoteRetrieveParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val quote: Quote = client.quotes().retrieve("quote_id")\n}',
      },
      python: {
        method: 'quotes.retrieve',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nquote = client.quotes.retrieve(\n    "quote_id",\n)\nprint(quote.id)',
      },
      ruby: {
        method: 'quotes.retrieve',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nquote = believe.quotes.retrieve("quote_id")\n\nputs(quote)',
      },
      typescript: {
        method: 'client.quotes.retrieve',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst quote = await client.quotes.retrieve('quote_id');\n\nconsole.log(quote.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/quotes/{quote_id}',
    httpMethod: 'patch',
    summary: 'Update a quote',
    description: 'Update specific fields of an existing quote.',
    stainlessPath: '(resource) quotes > (method) update',
    qualified: 'client.quotes.update',
    params: [
      'quote_id: string;',
      'character_id?: string;',
      'context?: string;',
      'episode_id?: string;',
      'is_funny?: boolean;',
      'is_inspirational?: boolean;',
      'moment_type?: string;',
      'popularity_score?: number;',
      'secondary_themes?: string[];',
      'text?: string;',
      'theme?: string;',
      'times_shared?: number;',
    ],
    response:
      '{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }',
    markdown:
      "## update\n\n`client.quotes.update(quote_id: string, character_id?: string, context?: string, episode_id?: string, is_funny?: boolean, is_inspirational?: boolean, moment_type?: string, popularity_score?: number, secondary_themes?: string[], text?: string, theme?: string, times_shared?: number): { id: string; character_id: string; context: string; moment_type: quote_moment; text: string; theme: quote_theme; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: quote_theme[]; times_shared?: number; }`\n\n**patch** `/quotes/{quote_id}`\n\nUpdate specific fields of an existing quote.\n\n### Parameters\n\n- `quote_id: string`\n\n- `character_id?: string`\n\n- `context?: string`\n\n- `episode_id?: string`\n\n- `is_funny?: boolean`\n\n- `is_inspirational?: boolean`\n\n- `moment_type?: string`\n  Types of moments when quotes occur.\n\n- `popularity_score?: number`\n\n- `secondary_themes?: string[]`\n\n- `text?: string`\n\n- `theme?: string`\n  Themes that quotes can be categorized under.\n\n- `times_shared?: number`\n\n### Returns\n\n- `{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }`\n  Full quote model with ID.\n\n  - `id: string`\n  - `character_id: string`\n  - `context: string`\n  - `moment_type: string`\n  - `text: string`\n  - `theme: string`\n  - `episode_id?: string`\n  - `is_funny?: boolean`\n  - `is_inspirational?: boolean`\n  - `popularity_score?: number`\n  - `secondary_themes?: string[]`\n  - `times_shared?: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst quote = await client.quotes.update('quote_id');\n\nconsole.log(quote);\n```",
    perLanguage: {
      cli: {
        method: 'quotes update',
        example: "believe quotes update \\\n  --api-key 'My API Key' \\\n  --quote-id quote_id",
      },
      go: {
        method: 'client.Quotes.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tquote, err := client.Quotes.Update(\n\t\tcontext.TODO(),\n\t\t"quote_id",\n\t\tbelieve.QuoteUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", quote.ID)\n}\n',
      },
      http: {
        example:
          "curl https://believe.cjav.dev/quotes/$QUOTE_ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $BELIEVE_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'quotes().update',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.quotes.Quote;\nimport com.believe.api.models.quotes.QuoteUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        Quote quote = client.quotes().update("quote_id");\n    }\n}',
      },
      kotlin: {
        method: 'quotes().update',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.quotes.Quote\nimport com.believe.api.models.quotes.QuoteUpdateParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val quote: Quote = client.quotes().update("quote_id")\n}',
      },
      python: {
        method: 'quotes.update',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nquote = client.quotes.update(\n    quote_id="quote_id",\n)\nprint(quote.id)',
      },
      ruby: {
        method: 'quotes.update',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nquote = believe.quotes.update("quote_id")\n\nputs(quote)',
      },
      typescript: {
        method: 'client.quotes.update',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst quote = await client.quotes.update('quote_id');\n\nconsole.log(quote.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/quotes/{quote_id}',
    httpMethod: 'delete',
    summary: 'Delete a quote',
    description: 'Remove a quote from the collection.',
    stainlessPath: '(resource) quotes > (method) delete',
    qualified: 'client.quotes.delete',
    params: ['quote_id: string;'],
    markdown:
      "## delete\n\n`client.quotes.delete(quote_id: string): void`\n\n**delete** `/quotes/{quote_id}`\n\nRemove a quote from the collection.\n\n### Parameters\n\n- `quote_id: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nawait client.quotes.delete('quote_id')\n```",
    perLanguage: {
      cli: {
        method: 'quotes delete',
        example: "believe quotes delete \\\n  --api-key 'My API Key' \\\n  --quote-id quote_id",
      },
      go: {
        method: 'client.Quotes.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Quotes.Delete(context.TODO(), "quote_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/quotes/$QUOTE_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'quotes().delete',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.quotes.QuoteDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        client.quotes().delete("quote_id");\n    }\n}',
      },
      kotlin: {
        method: 'quotes().delete',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.quotes.QuoteDeleteParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    client.quotes().delete("quote_id")\n}',
      },
      python: {
        method: 'quotes.delete',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nclient.quotes.delete(\n    "quote_id",\n)',
      },
      ruby: {
        method: 'quotes.delete',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresult = believe.quotes.delete("quote_id")\n\nputs(result)',
      },
      typescript: {
        method: 'client.quotes.delete',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.quotes.delete('quote_id');",
      },
    },
  },
  {
    name: 'list_by_theme',
    endpoint: '/quotes/themes/{theme}',
    httpMethod: 'get',
    summary: 'Get quotes by theme',
    description: 'Get a paginated list of quotes related to a specific theme.',
    stainlessPath: '(resource) quotes > (method) list_by_theme',
    qualified: 'client.quotes.listByTheme',
    params: ['theme: string;', 'limit?: number;', 'skip?: number;'],
    response:
      '{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }',
    markdown:
      "## list_by_theme\n\n`client.quotes.listByTheme(theme: string, limit?: number, skip?: number): { id: string; character_id: string; context: string; moment_type: quote_moment; text: string; theme: quote_theme; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: quote_theme[]; times_shared?: number; }`\n\n**get** `/quotes/themes/{theme}`\n\nGet a paginated list of quotes related to a specific theme.\n\n### Parameters\n\n- `theme: string`\n  Themes that quotes can be categorized under.\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n### Returns\n\n- `{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }`\n  Full quote model with ID.\n\n  - `id: string`\n  - `character_id: string`\n  - `context: string`\n  - `moment_type: string`\n  - `text: string`\n  - `theme: string`\n  - `episode_id?: string`\n  - `is_funny?: boolean`\n  - `is_inspirational?: boolean`\n  - `popularity_score?: number`\n  - `secondary_themes?: string[]`\n  - `times_shared?: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\n// Automatically fetches more pages as needed.\nfor await (const quote of client.quotes.listByTheme('belief')) {\n  console.log(quote);\n}\n```",
    perLanguage: {
      cli: {
        method: 'quotes list_by_theme',
        example: "believe quotes list-by-theme \\\n  --api-key 'My API Key' \\\n  --theme belief",
      },
      go: {
        method: 'client.Quotes.ListByTheme',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Quotes.ListByTheme(\n\t\tcontext.TODO(),\n\t\tbelieve.QuoteThemeBelief,\n\t\tbelieve.QuoteListByThemeParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/quotes/themes/$THEME \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'quotes().listByTheme',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.quotes.QuoteListByThemePage;\nimport com.believe.api.models.quotes.QuoteListByThemeParams;\nimport com.believe.api.models.quotes.QuoteTheme;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        QuoteListByThemePage page = client.quotes().listByTheme(QuoteTheme.BELIEF);\n    }\n}',
      },
      kotlin: {
        method: 'quotes().listByTheme',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.quotes.QuoteListByThemePage\nimport com.believe.api.models.quotes.QuoteListByThemeParams\nimport com.believe.api.models.quotes.QuoteTheme\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val page: QuoteListByThemePage = client.quotes().listByTheme(QuoteTheme.BELIEF)\n}',
      },
      python: {
        method: 'quotes.list_by_theme',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.quotes.list_by_theme(\n    theme="belief",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'quotes.list_by_theme',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\npage = believe.quotes.list_by_theme(:belief)\n\nputs(page)',
      },
      typescript: {
        method: 'client.quotes.listByTheme',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const quote of client.quotes.listByTheme('belief')) {\n  console.log(quote.id);\n}",
      },
    },
  },
  {
    name: 'list_by_character',
    endpoint: '/quotes/characters/{character_id}',
    httpMethod: 'get',
    summary: 'Get all quotes by a character',
    description: 'Get a paginated list of quotes from a specific character.',
    stainlessPath: '(resource) quotes > (method) list_by_character',
    qualified: 'client.quotes.listByCharacter',
    params: ['character_id: string;', 'limit?: number;', 'skip?: number;'],
    response:
      '{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }',
    markdown:
      "## list_by_character\n\n`client.quotes.listByCharacter(character_id: string, limit?: number, skip?: number): { id: string; character_id: string; context: string; moment_type: quote_moment; text: string; theme: quote_theme; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: quote_theme[]; times_shared?: number; }`\n\n**get** `/quotes/characters/{character_id}`\n\nGet a paginated list of quotes from a specific character.\n\n### Parameters\n\n- `character_id: string`\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n### Returns\n\n- `{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }`\n  Full quote model with ID.\n\n  - `id: string`\n  - `character_id: string`\n  - `context: string`\n  - `moment_type: string`\n  - `text: string`\n  - `theme: string`\n  - `episode_id?: string`\n  - `is_funny?: boolean`\n  - `is_inspirational?: boolean`\n  - `popularity_score?: number`\n  - `secondary_themes?: string[]`\n  - `times_shared?: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\n// Automatically fetches more pages as needed.\nfor await (const quote of client.quotes.listByCharacter('character_id')) {\n  console.log(quote);\n}\n```",
    perLanguage: {
      cli: {
        method: 'quotes list_by_character',
        example:
          "believe quotes list-by-character \\\n  --api-key 'My API Key' \\\n  --character-id character_id",
      },
      go: {
        method: 'client.Quotes.ListByCharacter',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Quotes.ListByCharacter(\n\t\tcontext.TODO(),\n\t\t"character_id",\n\t\tbelieve.QuoteListByCharacterParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/quotes/characters/$CHARACTER_ID \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'quotes().listByCharacter',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.quotes.QuoteListByCharacterPage;\nimport com.believe.api.models.quotes.QuoteListByCharacterParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        QuoteListByCharacterPage page = client.quotes().listByCharacter("character_id");\n    }\n}',
      },
      kotlin: {
        method: 'quotes().listByCharacter',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.quotes.QuoteListByCharacterPage\nimport com.believe.api.models.quotes.QuoteListByCharacterParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val page: QuoteListByCharacterPage = client.quotes().listByCharacter("character_id")\n}',
      },
      python: {
        method: 'quotes.list_by_character',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.quotes.list_by_character(\n    character_id="character_id",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'quotes.list_by_character',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\npage = believe.quotes.list_by_character("character_id")\n\nputs(page)',
      },
      typescript: {
        method: 'client.quotes.listByCharacter',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const quote of client.quotes.listByCharacter('character_id')) {\n  console.log(quote.id);\n}",
      },
    },
  },
  {
    name: 'submit',
    endpoint: '/believe',
    httpMethod: 'post',
    summary: 'The Believe Engine',
    description: 'Submit your situation and receive Ted Lasso-style motivational guidance.',
    stainlessPath: '(resource) believe > (method) submit',
    qualified: 'client.believe.submit',
    params: ['situation: string;', 'situation_type: string;', 'context?: string;', 'intensity?: number;'],
    response:
      '{ action_suggestion: string; believe_score: number; goldfish_wisdom: string; relevant_quote: string; ted_response: string; }',
    markdown:
      "## submit\n\n`client.believe.submit(situation: string, situation_type: string, context?: string, intensity?: number): { action_suggestion: string; believe_score: number; goldfish_wisdom: string; relevant_quote: string; ted_response: string; }`\n\n**post** `/believe`\n\nSubmit your situation and receive Ted Lasso-style motivational guidance.\n\n### Parameters\n\n- `situation: string`\n  Describe your situation\n\n- `situation_type: string`\n  Type of situation\n\n- `context?: string`\n  Additional context\n\n- `intensity?: number`\n  How intense is the response needed (1=gentle, 10=full Ted)\n\n### Returns\n\n- `{ action_suggestion: string; believe_score: number; goldfish_wisdom: string; relevant_quote: string; ted_response: string; }`\n  Response from the Believe Engine.\n\n  - `action_suggestion: string`\n  - `believe_score: number`\n  - `goldfish_wisdom: string`\n  - `relevant_quote: string`\n  - `ted_response: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst response = await client.believe.submit({ situation: 'I just got passed over for a promotion I\\'ve been working toward for two years.', situation_type: 'work_challenge' });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'believe submit',
        example:
          "believe believe submit \\\n  --api-key 'My API Key' \\\n  --situation \"I just got passed over for a promotion I've been working toward for two years.\" \\\n  --situation-type work_challenge",
      },
      go: {
        method: 'client.Believe.Submit',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Believe.Submit(context.TODO(), believe.BelieveSubmitParams{\n\t\tSituation:     "I just got passed over for a promotion I\'ve been working toward for two years.",\n\t\tSituationType: believe.BelieveSubmitParamsSituationTypeWorkChallenge,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ActionSuggestion)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/believe \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY" \\\n    -d "{\n          \\"situation\\": \\"I just got passed over for a promotion I\'ve been working toward for two years.\\",\n          \\"situation_type\\": \\"work_challenge\\",\n          \\"context\\": \\"I\'ve always tried to be a team player and support my colleagues.\\"\n        }"',
      },
      java: {
        method: 'believe().submit',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.believe.BelieveSubmitParams;\nimport com.believe.api.models.believe.BelieveSubmitResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        BelieveSubmitParams params = BelieveSubmitParams.builder()\n            .situation("I just got passed over for a promotion I\'ve been working toward for two years.")\n            .situationType(BelieveSubmitParams.SituationType.WORK_CHALLENGE)\n            .build();\n        BelieveSubmitResponse response = client.believe().submit(params);\n    }\n}',
      },
      kotlin: {
        method: 'believe().submit',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.believe.BelieveSubmitParams\nimport com.believe.api.models.believe.BelieveSubmitResponse\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val params: BelieveSubmitParams = BelieveSubmitParams.builder()\n        .situation("I just got passed over for a promotion I\'ve been working toward for two years.")\n        .situationType(BelieveSubmitParams.SituationType.WORK_CHALLENGE)\n        .build()\n    val response: BelieveSubmitResponse = client.believe().submit(params)\n}',
      },
      python: {
        method: 'believe.submit',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.believe.submit(\n    situation="I just got passed over for a promotion I\'ve been working toward for two years.",\n    situation_type="work_challenge",\n)\nprint(response.action_suggestion)',
      },
      ruby: {
        method: 'believe.submit',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresponse = believe.believe.submit(\n  situation: "I just got passed over for a promotion I\'ve been working toward for two years.",\n  situation_type: :work_challenge\n)\n\nputs(response)',
      },
      typescript: {
        method: 'client.believe.submit',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.believe.submit({\n  situation: \"I just got passed over for a promotion I've been working toward for two years.\",\n  situation_type: 'work_challenge',\n});\n\nconsole.log(response.action_suggestion);",
      },
    },
  },
  {
    name: 'resolve',
    endpoint: '/conflicts/resolve',
    httpMethod: 'post',
    summary: 'Resolve Conflicts',
    description: 'Get Ted Lasso-style advice for resolving conflicts.',
    stainlessPath: '(resource) conflicts > (method) resolve',
    qualified: 'client.conflicts.resolve',
    params: [
      "conflict_type: 'interpersonal' | 'team_dynamics' | 'leadership' | 'ego' | 'miscommunication' | 'competition';",
      'description: string;',
      'parties_involved: string[];',
      'attempts_made?: string[];',
    ],
    response:
      '{ barbecue_sauce_wisdom: string; diagnosis: string; diamond_dogs_advice: string; potential_outcome: string; steps_to_resolution: string[]; ted_approach: string; }',
    markdown:
      "## resolve\n\n`client.conflicts.resolve(conflict_type: 'interpersonal' | 'team_dynamics' | 'leadership' | 'ego' | 'miscommunication' | 'competition', description: string, parties_involved: string[], attempts_made?: string[]): { barbecue_sauce_wisdom: string; diagnosis: string; diamond_dogs_advice: string; potential_outcome: string; steps_to_resolution: string[]; ted_approach: string; }`\n\n**post** `/conflicts/resolve`\n\nGet Ted Lasso-style advice for resolving conflicts.\n\n### Parameters\n\n- `conflict_type: 'interpersonal' | 'team_dynamics' | 'leadership' | 'ego' | 'miscommunication' | 'competition'`\n  Type of conflict\n\n- `description: string`\n  Describe the conflict\n\n- `parties_involved: string[]`\n  Who is involved in the conflict\n\n- `attempts_made?: string[]`\n  What you've already tried\n\n### Returns\n\n- `{ barbecue_sauce_wisdom: string; diagnosis: string; diamond_dogs_advice: string; potential_outcome: string; steps_to_resolution: string[]; ted_approach: string; }`\n  Conflict resolution response.\n\n  - `barbecue_sauce_wisdom: string`\n  - `diagnosis: string`\n  - `diamond_dogs_advice: string`\n  - `potential_outcome: string`\n  - `steps_to_resolution: string[]`\n  - `ted_approach: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst response = await client.conflicts.resolve({\n  conflict_type: 'interpersonal',\n  description: 'Alex keeps taking credit for my ideas in meetings and I\\'m getting resentful.',\n  parties_involved: ['Me', 'My teammate Alex'],\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'conflicts resolve',
        example:
          "believe conflicts resolve \\\n  --api-key 'My API Key' \\\n  --conflict-type interpersonal \\\n  --description \"Alex keeps taking credit for my ideas in meetings and I'm getting resentful.\" \\\n  --parties-involved Me \\\n  --parties-involved 'My teammate Alex'",
      },
      go: {
        method: 'client.Conflicts.Resolve',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Conflicts.Resolve(context.TODO(), believe.ConflictResolveParams{\n\t\tConflictType:    believe.ConflictResolveParamsConflictTypeInterpersonal,\n\t\tDescription:     "Alex keeps taking credit for my ideas in meetings and I\'m getting resentful.",\n\t\tPartiesInvolved: []string{"Me", "My teammate Alex"},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.BarbecueSauceWisdom)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/conflicts/resolve \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY" \\\n    -d "{\n          \\"conflict_type\\": \\"interpersonal\\",\n          \\"description\\": \\"Alex keeps taking credit for my ideas in meetings and I\'m getting resentful.\\",\n          \\"parties_involved\\": [\n            \\"Me\\",\n            \\"My teammate Alex\\"\n          ],\n          \\"attempts_made\\": [\n            \\"Mentioned it casually\\",\n            \\"Avoided them\\"\n          ]\n        }"',
      },
      java: {
        method: 'conflicts().resolve',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.conflicts.ConflictResolveParams;\nimport com.believe.api.models.conflicts.ConflictResolveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        ConflictResolveParams params = ConflictResolveParams.builder()\n            .conflictType(ConflictResolveParams.ConflictType.INTERPERSONAL)\n            .description("Alex keeps taking credit for my ideas in meetings and I\'m getting resentful.")\n            .addPartiesInvolved("Me")\n            .addPartiesInvolved("My teammate Alex")\n            .build();\n        ConflictResolveResponse response = client.conflicts().resolve(params);\n    }\n}',
      },
      kotlin: {
        method: 'conflicts().resolve',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.conflicts.ConflictResolveParams\nimport com.believe.api.models.conflicts.ConflictResolveResponse\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val params: ConflictResolveParams = ConflictResolveParams.builder()\n        .conflictType(ConflictResolveParams.ConflictType.INTERPERSONAL)\n        .description("Alex keeps taking credit for my ideas in meetings and I\'m getting resentful.")\n        .addPartiesInvolved("Me")\n        .addPartiesInvolved("My teammate Alex")\n        .build()\n    val response: ConflictResolveResponse = client.conflicts().resolve(params)\n}',
      },
      python: {
        method: 'conflicts.resolve',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.conflicts.resolve(\n    conflict_type="interpersonal",\n    description="Alex keeps taking credit for my ideas in meetings and I\'m getting resentful.",\n    parties_involved=["Me", "My teammate Alex"],\n)\nprint(response.barbecue_sauce_wisdom)',
      },
      ruby: {
        method: 'conflicts.resolve',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresponse = believe.conflicts.resolve(\n  conflict_type: :interpersonal,\n  description: "Alex keeps taking credit for my ideas in meetings and I\'m getting resentful.",\n  parties_involved: ["Me", "My teammate Alex"]\n)\n\nputs(response)',
      },
      typescript: {
        method: 'client.conflicts.resolve',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.conflicts.resolve({\n  conflict_type: 'interpersonal',\n  description: \"Alex keeps taking credit for my ideas in meetings and I'm getting resentful.\",\n  parties_involved: ['Me', 'My teammate Alex'],\n});\n\nconsole.log(response.barbecue_sauce_wisdom);",
      },
    },
  },
  {
    name: 'transform_negative_thoughts',
    endpoint: '/reframe',
    httpMethod: 'post',
    summary: 'Reframe Negative Thoughts',
    description: "Transform negative thoughts into positive perspectives with Ted's help.",
    stainlessPath: '(resource) reframe > (method) transform_negative_thoughts',
    qualified: 'client.reframe.transformNegativeThoughts',
    params: ['negative_thought: string;', 'recurring?: boolean;'],
    response:
      '{ daily_affirmation: string; original_thought: string; reframed_thought: string; ted_perspective: string; dr_sharon_insight?: string; }',
    markdown:
      "## transform_negative_thoughts\n\n`client.reframe.transformNegativeThoughts(negative_thought: string, recurring?: boolean): { daily_affirmation: string; original_thought: string; reframed_thought: string; ted_perspective: string; dr_sharon_insight?: string; }`\n\n**post** `/reframe`\n\nTransform negative thoughts into positive perspectives with Ted's help.\n\n### Parameters\n\n- `negative_thought: string`\n  The negative thought to reframe\n\n- `recurring?: boolean`\n  Is this a recurring thought?\n\n### Returns\n\n- `{ daily_affirmation: string; original_thought: string; reframed_thought: string; ted_perspective: string; dr_sharon_insight?: string; }`\n  Reframed perspective response.\n\n  - `daily_affirmation: string`\n  - `original_thought: string`\n  - `reframed_thought: string`\n  - `ted_perspective: string`\n  - `dr_sharon_insight?: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst response = await client.reframe.transformNegativeThoughts({ negative_thought: 'I\\'m not good enough for this job.' });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'reframe transform_negative_thoughts',
        example:
          "believe reframe transform-negative-thoughts \\\n  --api-key 'My API Key' \\\n  --negative-thought \"I'm not good enough for this job.\"",
      },
      go: {
        method: 'client.Reframe.TransformNegativeThoughts',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Reframe.TransformNegativeThoughts(context.TODO(), believe.ReframeTransformNegativeThoughtsParams{\n\t\tNegativeThought: "I\'m not good enough for this job.",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.DailyAffirmation)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/reframe \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY" \\\n    -d "{\n          \\"negative_thought\\": \\"I\'m not good enough for this job.\\"\n        }"',
      },
      java: {
        method: 'reframe().transformNegativeThoughts',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.reframe.ReframeTransformNegativeThoughtsParams;\nimport com.believe.api.models.reframe.ReframeTransformNegativeThoughtsResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        ReframeTransformNegativeThoughtsParams params = ReframeTransformNegativeThoughtsParams.builder()\n            .negativeThought("I\'m not good enough for this job.")\n            .build();\n        ReframeTransformNegativeThoughtsResponse response = client.reframe().transformNegativeThoughts(params);\n    }\n}',
      },
      kotlin: {
        method: 'reframe().transformNegativeThoughts',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.reframe.ReframeTransformNegativeThoughtsParams\nimport com.believe.api.models.reframe.ReframeTransformNegativeThoughtsResponse\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val params: ReframeTransformNegativeThoughtsParams = ReframeTransformNegativeThoughtsParams.builder()\n        .negativeThought("I\'m not good enough for this job.")\n        .build()\n    val response: ReframeTransformNegativeThoughtsResponse = client.reframe().transformNegativeThoughts(params)\n}',
      },
      python: {
        method: 'reframe.transform_negative_thoughts',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reframe.transform_negative_thoughts(\n    negative_thought="I\'m not good enough for this job.",\n)\nprint(response.daily_affirmation)',
      },
      ruby: {
        method: 'reframe.transform_negative_thoughts',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresponse = believe.reframe.transform_negative_thoughts(negative_thought: "I\'m not good enough for this job.")\n\nputs(response)',
      },
      typescript: {
        method: 'client.reframe.transformNegativeThoughts',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reframe.transformNegativeThoughts({\n  negative_thought: \"I'm not good enough for this job.\",\n});\n\nconsole.log(response.daily_affirmation);",
      },
    },
  },
  {
    name: 'simulate',
    endpoint: '/press',
    httpMethod: 'post',
    summary: 'Press Conference Simulator',
    description: "Get Ted's response to press conference questions.",
    stainlessPath: '(resource) press > (method) simulate',
    qualified: 'client.press.simulate',
    params: ['question: string;', 'hostile?: boolean;', 'topic?: string;'],
    response:
      '{ actual_wisdom: string; follow_up_dodge: string; reporter_reaction: string; response: string; deflection_humor?: string; }',
    markdown:
      "## simulate\n\n`client.press.simulate(question: string, hostile?: boolean, topic?: string): { actual_wisdom: string; follow_up_dodge: string; reporter_reaction: string; response: string; deflection_humor?: string; }`\n\n**post** `/press`\n\nGet Ted's response to press conference questions.\n\n### Parameters\n\n- `question: string`\n  The press question to answer\n\n- `hostile?: boolean`\n  Is this a hostile question from Trent Crimm?\n\n- `topic?: string`\n  Topic category\n\n### Returns\n\n- `{ actual_wisdom: string; follow_up_dodge: string; reporter_reaction: string; response: string; deflection_humor?: string; }`\n  Ted's press conference response.\n\n  - `actual_wisdom: string`\n  - `follow_up_dodge: string`\n  - `reporter_reaction: string`\n  - `response: string`\n  - `deflection_humor?: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst response = await client.press.simulate({ question: 'Ted, your team just lost 5-0. How do you explain this embarrassing defeat?' });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'press simulate',
        example:
          "believe press simulate \\\n  --api-key 'My API Key' \\\n  --question 'Ted, your team just lost 5-0. How do you explain this embarrassing defeat?'",
      },
      go: {
        method: 'client.Press.Simulate',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Press.Simulate(context.TODO(), believe.PressSimulateParams{\n\t\tQuestion: "Ted, your team just lost 5-0. How do you explain this embarrassing defeat?",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ActualWisdom)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/press \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY" \\\n    -d \'{\n          "question": "Ted, your team just lost 5-0. How do you explain this embarrassing defeat?",\n          "topic": "match_result"\n        }\'',
      },
      java: {
        method: 'press().simulate',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.press.PressSimulateParams;\nimport com.believe.api.models.press.PressSimulateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        PressSimulateParams params = PressSimulateParams.builder()\n            .question("Ted, your team just lost 5-0. How do you explain this embarrassing defeat?")\n            .build();\n        PressSimulateResponse response = client.press().simulate(params);\n    }\n}',
      },
      kotlin: {
        method: 'press().simulate',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.press.PressSimulateParams\nimport com.believe.api.models.press.PressSimulateResponse\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val params: PressSimulateParams = PressSimulateParams.builder()\n        .question("Ted, your team just lost 5-0. How do you explain this embarrassing defeat?")\n        .build()\n    val response: PressSimulateResponse = client.press().simulate(params)\n}',
      },
      python: {
        method: 'press.simulate',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.press.simulate(\n    question="Ted, your team just lost 5-0. How do you explain this embarrassing defeat?",\n)\nprint(response.actual_wisdom)',
      },
      ruby: {
        method: 'press.simulate',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresponse = believe.press.simulate(\n  question: "Ted, your team just lost 5-0. How do you explain this embarrassing defeat?"\n)\n\nputs(response)',
      },
      typescript: {
        method: 'client.press.simulate',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.press.simulate({\n  question: 'Ted, your team just lost 5-0. How do you explain this embarrassing defeat?',\n});\n\nconsole.log(response.actual_wisdom);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/coaching/principles',
    httpMethod: 'get',
    summary: 'Get Coaching Principles',
    description: "Get a paginated list of Ted Lasso's core coaching principles and philosophy.",
    stainlessPath: '(resource) coaching.principles > (method) list',
    qualified: 'client.coaching.principles.list',
    params: ['limit?: number;', 'skip?: number;'],
    response:
      '{ id: string; application: string; example_from_show: string; explanation: string; principle: string; ted_quote: string; }',
    markdown:
      "## list\n\n`client.coaching.principles.list(limit?: number, skip?: number): { id: string; application: string; example_from_show: string; explanation: string; principle: string; ted_quote: string; }`\n\n**get** `/coaching/principles`\n\nGet a paginated list of Ted Lasso's core coaching principles and philosophy.\n\n### Parameters\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n### Returns\n\n- `{ id: string; application: string; example_from_show: string; explanation: string; principle: string; ted_quote: string; }`\n  A Ted Lasso coaching principle.\n\n  - `id: string`\n  - `application: string`\n  - `example_from_show: string`\n  - `explanation: string`\n  - `principle: string`\n  - `ted_quote: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\n// Automatically fetches more pages as needed.\nfor await (const coachingPrinciple of client.coaching.principles.list()) {\n  console.log(coachingPrinciple);\n}\n```",
    perLanguage: {
      cli: {
        method: 'principles list',
        example: "believe coaching:principles list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Coaching.Principles.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Coaching.Principles.List(context.TODO(), believe.CoachingPrincipleListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/coaching/principles \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'coaching().principles().list',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.coaching.principles.PrincipleListPage;\nimport com.believe.api.models.coaching.principles.PrincipleListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        PrincipleListPage page = client.coaching().principles().list();\n    }\n}',
      },
      kotlin: {
        method: 'coaching().principles().list',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.coaching.principles.PrincipleListPage\nimport com.believe.api.models.coaching.principles.PrincipleListParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val page: PrincipleListPage = client.coaching().principles().list()\n}',
      },
      python: {
        method: 'coaching.principles.list',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.coaching.principles.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'coaching.principles.list',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\npage = believe.coaching.principles.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.coaching.principles.list',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const coachingPrinciple of client.coaching.principles.list()) {\n  console.log(coachingPrinciple.id);\n}",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/coaching/principles/{principle_id}',
    httpMethod: 'get',
    summary: 'Get a Specific Coaching Principle',
    description: 'Get details about a specific coaching principle.',
    stainlessPath: '(resource) coaching.principles > (method) retrieve',
    qualified: 'client.coaching.principles.retrieve',
    params: ['principle_id: string;'],
    response:
      '{ id: string; application: string; example_from_show: string; explanation: string; principle: string; ted_quote: string; }',
    markdown:
      "## retrieve\n\n`client.coaching.principles.retrieve(principle_id: string): { id: string; application: string; example_from_show: string; explanation: string; principle: string; ted_quote: string; }`\n\n**get** `/coaching/principles/{principle_id}`\n\nGet details about a specific coaching principle.\n\n### Parameters\n\n- `principle_id: string`\n\n### Returns\n\n- `{ id: string; application: string; example_from_show: string; explanation: string; principle: string; ted_quote: string; }`\n  A Ted Lasso coaching principle.\n\n  - `id: string`\n  - `application: string`\n  - `example_from_show: string`\n  - `explanation: string`\n  - `principle: string`\n  - `ted_quote: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst coachingPrinciple = await client.coaching.principles.retrieve('principle_id');\n\nconsole.log(coachingPrinciple);\n```",
    perLanguage: {
      cli: {
        method: 'principles retrieve',
        example:
          "believe coaching:principles retrieve \\\n  --api-key 'My API Key' \\\n  --principle-id principle_id",
      },
      go: {
        method: 'client.Coaching.Principles.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcoachingPrinciple, err := client.Coaching.Principles.Get(context.TODO(), "principle_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", coachingPrinciple.ID)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/coaching/principles/$PRINCIPLE_ID \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'coaching().principles().retrieve',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.coaching.principles.CoachingPrinciple;\nimport com.believe.api.models.coaching.principles.PrincipleRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        CoachingPrinciple coachingPrinciple = client.coaching().principles().retrieve("principle_id");\n    }\n}',
      },
      kotlin: {
        method: 'coaching().principles().retrieve',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.coaching.principles.CoachingPrinciple\nimport com.believe.api.models.coaching.principles.PrincipleRetrieveParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val coachingPrinciple: CoachingPrinciple = client.coaching().principles().retrieve("principle_id")\n}',
      },
      python: {
        method: 'coaching.principles.retrieve',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\ncoaching_principle = client.coaching.principles.retrieve(\n    "principle_id",\n)\nprint(coaching_principle.id)',
      },
      ruby: {
        method: 'coaching.principles.retrieve',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\ncoaching_principle = believe.coaching.principles.retrieve("principle_id")\n\nputs(coaching_principle)',
      },
      typescript: {
        method: 'client.coaching.principles.retrieve',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst coachingPrinciple = await client.coaching.principles.retrieve('principle_id');\n\nconsole.log(coachingPrinciple.id);",
      },
    },
  },
  {
    name: 'get_random',
    endpoint: '/coaching/principles/random',
    httpMethod: 'get',
    summary: 'Get a Random Coaching Principle',
    description: 'Get a random coaching principle to inspire your day.',
    stainlessPath: '(resource) coaching.principles > (method) get_random',
    qualified: 'client.coaching.principles.getRandom',
    response:
      '{ id: string; application: string; example_from_show: string; explanation: string; principle: string; ted_quote: string; }',
    markdown:
      "## get_random\n\n`client.coaching.principles.getRandom(): { id: string; application: string; example_from_show: string; explanation: string; principle: string; ted_quote: string; }`\n\n**get** `/coaching/principles/random`\n\nGet a random coaching principle to inspire your day.\n\n### Returns\n\n- `{ id: string; application: string; example_from_show: string; explanation: string; principle: string; ted_quote: string; }`\n  A Ted Lasso coaching principle.\n\n  - `id: string`\n  - `application: string`\n  - `example_from_show: string`\n  - `explanation: string`\n  - `principle: string`\n  - `ted_quote: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst coachingPrinciple = await client.coaching.principles.getRandom();\n\nconsole.log(coachingPrinciple);\n```",
    perLanguage: {
      cli: {
        method: 'principles get_random',
        example: "believe coaching:principles get-random \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Coaching.Principles.GetRandom',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcoachingPrinciple, err := client.Coaching.Principles.GetRandom(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", coachingPrinciple.ID)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/coaching/principles/random \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'coaching().principles().getRandom',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.coaching.principles.CoachingPrinciple;\nimport com.believe.api.models.coaching.principles.PrincipleGetRandomParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        CoachingPrinciple coachingPrinciple = client.coaching().principles().getRandom();\n    }\n}',
      },
      kotlin: {
        method: 'coaching().principles().getRandom',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.coaching.principles.CoachingPrinciple\nimport com.believe.api.models.coaching.principles.PrincipleGetRandomParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val coachingPrinciple: CoachingPrinciple = client.coaching().principles().getRandom()\n}',
      },
      python: {
        method: 'coaching.principles.get_random',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\ncoaching_principle = client.coaching.principles.get_random()\nprint(coaching_principle.id)',
      },
      ruby: {
        method: 'coaching.principles.get_random',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\ncoaching_principle = believe.coaching.principles.get_random\n\nputs(coaching_principle)',
      },
      typescript: {
        method: 'client.coaching.principles.getRandom',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst coachingPrinciple = await client.coaching.principles.getRandom();\n\nconsole.log(coachingPrinciple.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/biscuits',
    httpMethod: 'get',
    summary: 'Biscuits as a Service',
    description:
      "Get a paginated list of Ted's famous homemade biscuits! Each comes with a heartwarming message.",
    stainlessPath: '(resource) biscuits > (method) list',
    qualified: 'client.biscuits.list',
    params: ['limit?: number;', 'skip?: number;'],
    response:
      "{ id: string; message: string; pairs_well_with: string; ted_note: string; type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin' | 'snickerdoodle' | 'lemon_drizzle'; warmth_level: number; }",
    markdown:
      "## list\n\n`client.biscuits.list(limit?: number, skip?: number): { id: string; message: string; pairs_well_with: string; ted_note: string; type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin' | 'snickerdoodle' | 'lemon_drizzle'; warmth_level: number; }`\n\n**get** `/biscuits`\n\nGet a paginated list of Ted's famous homemade biscuits! Each comes with a heartwarming message.\n\n### Parameters\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n### Returns\n\n- `{ id: string; message: string; pairs_well_with: string; ted_note: string; type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin' | 'snickerdoodle' | 'lemon_drizzle'; warmth_level: number; }`\n  A biscuit from Ted.\n\n  - `id: string`\n  - `message: string`\n  - `pairs_well_with: string`\n  - `ted_note: string`\n  - `type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin' | 'snickerdoodle' | 'lemon_drizzle'`\n  - `warmth_level: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\n// Automatically fetches more pages as needed.\nfor await (const biscuit of client.biscuits.list()) {\n  console.log(biscuit);\n}\n```",
    perLanguage: {
      cli: {
        method: 'biscuits list',
        example: "believe biscuits list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Biscuits.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Biscuits.List(context.TODO(), believe.BiscuitListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example: 'curl https://believe.cjav.dev/biscuits \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'biscuits().list',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.biscuits.BiscuitListPage;\nimport com.believe.api.models.biscuits.BiscuitListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        BiscuitListPage page = client.biscuits().list();\n    }\n}',
      },
      kotlin: {
        method: 'biscuits().list',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.biscuits.BiscuitListPage\nimport com.believe.api.models.biscuits.BiscuitListParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val page: BiscuitListPage = client.biscuits().list()\n}',
      },
      python: {
        method: 'biscuits.list',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.biscuits.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'biscuits.list',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\npage = believe.biscuits.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.biscuits.list',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const biscuit of client.biscuits.list()) {\n  console.log(biscuit.id);\n}",
      },
    },
  },
  {
    name: 'get_fresh',
    endpoint: '/biscuits/fresh',
    httpMethod: 'get',
    summary: 'Get a Fresh Biscuit',
    description: 'Get a single fresh biscuit with a personalized message from Ted.',
    stainlessPath: '(resource) biscuits > (method) get_fresh',
    qualified: 'client.biscuits.getFresh',
    response:
      "{ id: string; message: string; pairs_well_with: string; ted_note: string; type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin' | 'snickerdoodle' | 'lemon_drizzle'; warmth_level: number; }",
    markdown:
      "## get_fresh\n\n`client.biscuits.getFresh(): { id: string; message: string; pairs_well_with: string; ted_note: string; type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin' | 'snickerdoodle' | 'lemon_drizzle'; warmth_level: number; }`\n\n**get** `/biscuits/fresh`\n\nGet a single fresh biscuit with a personalized message from Ted.\n\n### Returns\n\n- `{ id: string; message: string; pairs_well_with: string; ted_note: string; type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin' | 'snickerdoodle' | 'lemon_drizzle'; warmth_level: number; }`\n  A biscuit from Ted.\n\n  - `id: string`\n  - `message: string`\n  - `pairs_well_with: string`\n  - `ted_note: string`\n  - `type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin' | 'snickerdoodle' | 'lemon_drizzle'`\n  - `warmth_level: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst biscuit = await client.biscuits.getFresh();\n\nconsole.log(biscuit);\n```",
    perLanguage: {
      cli: {
        method: 'biscuits get_fresh',
        example: "believe biscuits get-fresh \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Biscuits.GetFresh',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tbiscuit, err := client.Biscuits.GetFresh(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", biscuit.ID)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/biscuits/fresh \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'biscuits().getFresh',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.biscuits.Biscuit;\nimport com.believe.api.models.biscuits.BiscuitGetFreshParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        Biscuit biscuit = client.biscuits().getFresh();\n    }\n}',
      },
      kotlin: {
        method: 'biscuits().getFresh',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.biscuits.Biscuit\nimport com.believe.api.models.biscuits.BiscuitGetFreshParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val biscuit: Biscuit = client.biscuits().getFresh()\n}',
      },
      python: {
        method: 'biscuits.get_fresh',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nbiscuit = client.biscuits.get_fresh()\nprint(biscuit.id)',
      },
      ruby: {
        method: 'biscuits.get_fresh',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nbiscuit = believe.biscuits.get_fresh\n\nputs(biscuit)',
      },
      typescript: {
        method: 'client.biscuits.getFresh',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst biscuit = await client.biscuits.getFresh();\n\nconsole.log(biscuit.id);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/biscuits/{biscuit_id}',
    httpMethod: 'get',
    summary: 'Get a Specific Biscuit',
    description: 'Get a specific type of biscuit by ID.',
    stainlessPath: '(resource) biscuits > (method) retrieve',
    qualified: 'client.biscuits.retrieve',
    params: ['biscuit_id: string;'],
    response:
      "{ id: string; message: string; pairs_well_with: string; ted_note: string; type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin' | 'snickerdoodle' | 'lemon_drizzle'; warmth_level: number; }",
    markdown:
      "## retrieve\n\n`client.biscuits.retrieve(biscuit_id: string): { id: string; message: string; pairs_well_with: string; ted_note: string; type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin' | 'snickerdoodle' | 'lemon_drizzle'; warmth_level: number; }`\n\n**get** `/biscuits/{biscuit_id}`\n\nGet a specific type of biscuit by ID.\n\n### Parameters\n\n- `biscuit_id: string`\n\n### Returns\n\n- `{ id: string; message: string; pairs_well_with: string; ted_note: string; type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin' | 'snickerdoodle' | 'lemon_drizzle'; warmth_level: number; }`\n  A biscuit from Ted.\n\n  - `id: string`\n  - `message: string`\n  - `pairs_well_with: string`\n  - `ted_note: string`\n  - `type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin' | 'snickerdoodle' | 'lemon_drizzle'`\n  - `warmth_level: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst biscuit = await client.biscuits.retrieve('biscuit_id');\n\nconsole.log(biscuit);\n```",
    perLanguage: {
      cli: {
        method: 'biscuits retrieve',
        example: "believe biscuits retrieve \\\n  --api-key 'My API Key' \\\n  --biscuit-id biscuit_id",
      },
      go: {
        method: 'client.Biscuits.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tbiscuit, err := client.Biscuits.Get(context.TODO(), "biscuit_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", biscuit.ID)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/biscuits/$BISCUIT_ID \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'biscuits().retrieve',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.biscuits.Biscuit;\nimport com.believe.api.models.biscuits.BiscuitRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        Biscuit biscuit = client.biscuits().retrieve("biscuit_id");\n    }\n}',
      },
      kotlin: {
        method: 'biscuits().retrieve',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.biscuits.Biscuit\nimport com.believe.api.models.biscuits.BiscuitRetrieveParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val biscuit: Biscuit = client.biscuits().retrieve("biscuit_id")\n}',
      },
      python: {
        method: 'biscuits.retrieve',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nbiscuit = client.biscuits.retrieve(\n    "biscuit_id",\n)\nprint(biscuit.id)',
      },
      ruby: {
        method: 'biscuits.retrieve',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nbiscuit = believe.biscuits.retrieve("biscuit_id")\n\nputs(biscuit)',
      },
      typescript: {
        method: 'client.biscuits.retrieve',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst biscuit = await client.biscuits.retrieve('biscuit_id');\n\nconsole.log(biscuit.id);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/pep-talk',
    httpMethod: 'get',
    summary: 'Get a Pep Talk',
    description:
      'Get a motivational pep talk from Ted Lasso himself. By default returns the complete pep talk. Add `?stream=true` to get Server-Sent Events (SSE) streaming the pep talk chunk by chunk.',
    stainlessPath: '(resource) pep_talk > (method) retrieve',
    qualified: 'client.pepTalk.retrieve',
    params: ['stream?: boolean;'],
    response:
      '{ chunks: { chunk_id: number; is_final: boolean; text: string; emotional_beat?: string; }[]; text: string; }',
    markdown:
      "## retrieve\n\n`client.pepTalk.retrieve(stream?: boolean): { chunks: object[]; text: string; }`\n\n**get** `/pep-talk`\n\nGet a motivational pep talk from Ted Lasso himself. By default returns the complete pep talk. Add `?stream=true` to get Server-Sent Events (SSE) streaming the pep talk chunk by chunk.\n\n### Parameters\n\n- `stream?: boolean`\n  If true, returns SSE stream instead of full response\n\n### Returns\n\n- `{ chunks: { chunk_id: number; is_final: boolean; text: string; emotional_beat?: string; }[]; text: string; }`\n  A complete pep talk response.\n\n  - `chunks: { chunk_id: number; is_final: boolean; text: string; emotional_beat?: string; }[]`\n  - `text: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst pepTalk = await client.pepTalk.retrieve();\n\nconsole.log(pepTalk);\n```",
    perLanguage: {
      cli: {
        method: 'pep_talk retrieve',
        example: "believe pep-talk retrieve \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.PepTalk.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpepTalk, err := client.PepTalk.Get(context.TODO(), believe.PepTalkGetParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", pepTalk.Chunks)\n}\n',
      },
      http: {
        example: 'curl https://believe.cjav.dev/pep-talk \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'pepTalk().retrieve',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.peptalk.PepTalkRetrieveParams;\nimport com.believe.api.models.peptalk.PepTalkRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        PepTalkRetrieveResponse pepTalk = client.pepTalk().retrieve();\n    }\n}',
      },
      kotlin: {
        method: 'pepTalk().retrieve',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.peptalk.PepTalkRetrieveParams\nimport com.believe.api.models.peptalk.PepTalkRetrieveResponse\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val pepTalk: PepTalkRetrieveResponse = client.pepTalk().retrieve()\n}',
      },
      python: {
        method: 'pep_talk.retrieve',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\npep_talk = client.pep_talk.retrieve()\nprint(pep_talk.chunks)',
      },
      ruby: {
        method: 'pep_talk.retrieve',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\npep_talk = believe.pep_talk.retrieve\n\nputs(pep_talk)',
      },
      typescript: {
        method: 'client.pepTalk.retrieve',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst pepTalk = await client.pepTalk.retrieve();\n\nconsole.log(pepTalk.chunks);",
      },
    },
  },
  {
    name: 'test_connection',
    endpoint: '/stream/test',
    httpMethod: 'get',
    summary: 'Test SSE Connection',
    description: 'A simple SSE test endpoint that streams numbers 1-5.',
    stainlessPath: '(resource) stream > (method) test_connection',
    qualified: 'client.stream.testConnection',
    response: 'object',
    markdown:
      "## test_connection\n\n`client.stream.testConnection(): object`\n\n**get** `/stream/test`\n\nA simple SSE test endpoint that streams numbers 1-5.\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst response = await client.stream.testConnection();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'stream test_connection',
        example: "believe stream test-connection \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Stream.TestConnection',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Stream.TestConnection(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/stream/test \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'stream().testConnection',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.stream.StreamTestConnectionParams;\nimport com.believe.api.models.stream.StreamTestConnectionResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        StreamTestConnectionResponse response = client.stream().testConnection();\n    }\n}',
      },
      kotlin: {
        method: 'stream().testConnection',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.stream.StreamTestConnectionParams\nimport com.believe.api.models.stream.StreamTestConnectionResponse\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val response: StreamTestConnectionResponse = client.stream().testConnection()\n}',
      },
      python: {
        method: 'stream.test_connection',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.stream.test_connection()\nprint(response)',
      },
      ruby: {
        method: 'stream.test_connection',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresponse = believe.stream.test_connection\n\nputs(response)',
      },
      typescript: {
        method: 'client.stream.testConnection',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.stream.testConnection();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/team-members',
    httpMethod: 'get',
    summary: 'List all team members',
    description:
      'Get a paginated list of all team members.\n\nThis endpoint demonstrates **union types (oneOf)** in the response.\nEach team member can be one of: Player, Coach, MedicalStaff, or EquipmentManager.\nThe `member_type` field acts as a discriminator to determine the shape of each object.',
    stainlessPath: '(resource) team_members > (method) list',
    qualified: 'client.teamMembers.list',
    params: [
      'limit?: number;',
      "member_type?: 'player' | 'coach' | 'medical_staff' | 'equipment_manager';",
      'skip?: number;',
      'team_id?: string;',
    ],
    response:
      "{ id: string; character_id: string; jersey_number: number; position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; } | { id: string; character_id: string; specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; } | { id: string; character_id: string; specialty: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id: string; years_with_team: number; license_number?: string; member_type?: 'medical_staff'; qualifications?: string[]; } | { id: string; character_id: string; team_id: string; years_with_team: number; is_head_kitman?: boolean; member_type?: 'equipment_manager'; responsibilities?: string[]; }",
    markdown:
      "## list\n\n`client.teamMembers.list(limit?: number, member_type?: 'player' | 'coach' | 'medical_staff' | 'equipment_manager', skip?: number, team_id?: string): object | object | object | object`\n\n**get** `/team-members`\n\nGet a paginated list of all team members.\n\nThis endpoint demonstrates **union types (oneOf)** in the response.\nEach team member can be one of: Player, Coach, MedicalStaff, or EquipmentManager.\nThe `member_type` field acts as a discriminator to determine the shape of each object.\n\n### Parameters\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `member_type?: 'player' | 'coach' | 'medical_staff' | 'equipment_manager'`\n  Filter by member type\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n- `team_id?: string`\n  Filter by team ID\n\n### Returns\n\n- `{ id: string; character_id: string; jersey_number: number; position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; } | { id: string; character_id: string; specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; } | { id: string; character_id: string; specialty: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id: string; years_with_team: number; license_number?: string; member_type?: 'medical_staff'; qualifications?: string[]; } | { id: string; character_id: string; team_id: string; years_with_team: number; is_head_kitman?: boolean; member_type?: 'equipment_manager'; responsibilities?: string[]; }`\n  Full player model with ID.\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\n// Automatically fetches more pages as needed.\nfor await (const teamMemberListResponse of client.teamMembers.list()) {\n  console.log(teamMemberListResponse);\n}\n```",
    perLanguage: {
      cli: {
        method: 'team_members list',
        example: "believe team-members list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.TeamMembers.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.TeamMembers.List(context.TODO(), believe.TeamMemberListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/team-members \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'teamMembers().list',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.teammembers.TeamMemberListPage;\nimport com.believe.api.models.teammembers.TeamMemberListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        TeamMemberListPage page = client.teamMembers().list();\n    }\n}',
      },
      kotlin: {
        method: 'teamMembers().list',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.teammembers.TeamMemberListPage\nimport com.believe.api.models.teammembers.TeamMemberListParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val page: TeamMemberListPage = client.teamMembers().list()\n}',
      },
      python: {
        method: 'team_members.list',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.team_members.list()\npage = page.data[0]\nprint(page)',
      },
      ruby: {
        method: 'team_members.list',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\npage = believe.team_members.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.teamMembers.list',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const teamMemberListResponse of client.teamMembers.list()) {\n  console.log(teamMemberListResponse);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/team-members',
    httpMethod: 'post',
    summary: 'Create a new team member',
    description:
      'Add a new team member to a team.\n\nThe request body is a **union type (oneOf)** - you must include the `member_type` discriminator field:\n- `"member_type": "player"` - Creates a player (requires position, jersey_number, etc.)\n- `"member_type": "coach"` - Creates a coach (requires specialty, etc.)\n- `"member_type": "medical_staff"` - Creates medical staff (requires medical specialty, etc.)\n- `"member_type": "equipment_manager"` - Creates equipment manager (requires responsibilities, etc.)\n\nThe `character_id` field references an existing character from `/characters/{id}`.\n\n**Example for creating a player:**\n```json\n{\n  "member_type": "player",\n  "character_id": "sam-obisanya",\n  "team_id": "afc-richmond",\n  "years_with_team": 2,\n  "position": "midfielder",\n  "jersey_number": 24,\n  "goals_scored": 12,\n  "assists": 15\n}\n```',
    stainlessPath: '(resource) team_members > (method) create',
    qualified: 'client.teamMembers.create',
    params: [
      "member: { character_id: string; jersey_number: number; position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; } | { character_id: string; specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; } | { character_id: string; specialty: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id: string; years_with_team: number; license_number?: string; member_type?: 'medical_staff'; qualifications?: string[]; } | { character_id: string; team_id: string; years_with_team: number; is_head_kitman?: boolean; member_type?: 'equipment_manager'; responsibilities?: string[]; };",
    ],
    response:
      "{ id: string; character_id: string; jersey_number: number; position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; } | { id: string; character_id: string; specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; } | { id: string; character_id: string; specialty: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id: string; years_with_team: number; license_number?: string; member_type?: 'medical_staff'; qualifications?: string[]; } | { id: string; character_id: string; team_id: string; years_with_team: number; is_head_kitman?: boolean; member_type?: 'equipment_manager'; responsibilities?: string[]; }",
    markdown:
      "## create\n\n`client.teamMembers.create(member: { character_id: string; jersey_number: number; position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; } | { character_id: string; specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; } | { character_id: string; specialty: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id: string; years_with_team: number; license_number?: string; member_type?: 'medical_staff'; qualifications?: string[]; } | { character_id: string; team_id: string; years_with_team: number; is_head_kitman?: boolean; member_type?: 'equipment_manager'; responsibilities?: string[]; }): object | object | object | object`\n\n**post** `/team-members`\n\nAdd a new team member to a team.\n\nThe request body is a **union type (oneOf)** - you must include the `member_type` discriminator field:\n- `\"member_type\": \"player\"` - Creates a player (requires position, jersey_number, etc.)\n- `\"member_type\": \"coach\"` - Creates a coach (requires specialty, etc.)\n- `\"member_type\": \"medical_staff\"` - Creates medical staff (requires medical specialty, etc.)\n- `\"member_type\": \"equipment_manager\"` - Creates equipment manager (requires responsibilities, etc.)\n\nThe `character_id` field references an existing character from `/characters/{id}`.\n\n**Example for creating a player:**\n```json\n{\n  \"member_type\": \"player\",\n  \"character_id\": \"sam-obisanya\",\n  \"team_id\": \"afc-richmond\",\n  \"years_with_team\": 2,\n  \"position\": \"midfielder\",\n  \"jersey_number\": 24,\n  \"goals_scored\": 12,\n  \"assists\": 15\n}\n```\n\n### Parameters\n\n- `member: { character_id: string; jersey_number: number; position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; } | { character_id: string; specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; } | { character_id: string; specialty: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id: string; years_with_team: number; license_number?: string; member_type?: 'medical_staff'; qualifications?: string[]; } | { character_id: string; team_id: string; years_with_team: number; is_head_kitman?: boolean; member_type?: 'equipment_manager'; responsibilities?: string[]; }`\n  A football player on the team.\n\n### Returns\n\n- `{ id: string; character_id: string; jersey_number: number; position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; } | { id: string; character_id: string; specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; } | { id: string; character_id: string; specialty: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id: string; years_with_team: number; license_number?: string; member_type?: 'medical_staff'; qualifications?: string[]; } | { id: string; character_id: string; team_id: string; years_with_team: number; is_head_kitman?: boolean; member_type?: 'equipment_manager'; responsibilities?: string[]; }`\n  Full player model with ID.\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst teamMember = await client.teamMembers.create({ member: {\n  character_id: 'jamie-tartt',\n  jersey_number: 9,\n  position: 'forward',\n  team_id: 'afc-richmond',\n  years_with_team: 3,\n  member_type: 'player',\n} });\n\nconsole.log(teamMember);\n```",
    perLanguage: {
      cli: {
        method: 'team_members create',
        example:
          "believe team-members create \\\n  --api-key 'My API Key' \\\n  --member '{character_id: jamie-tartt, jersey_number: 9, position: forward, team_id: afc-richmond, years_with_team: 3, member_type: player}'",
      },
      go: {
        method: 'client.TeamMembers.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tteamMember, err := client.TeamMembers.New(context.TODO(), believe.TeamMemberNewParams{\n\t\tOfPlayer: &believe.TeamMemberNewParamsMemberPlayer{\n\t\t\tCharacterID:   "jamie-tartt",\n\t\t\tJerseyNumber:  9,\n\t\t\tPosition:      believe.PositionForward,\n\t\t\tTeamID:        "afc-richmond",\n\t\t\tYearsWithTeam: 3,\n\t\t\tMemberType:    "player",\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", teamMember)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/team-members \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY" \\\n    -d \'{\n          "character_id": "jamie-tartt",\n          "jersey_number": 9,\n          "position": "forward",\n          "team_id": "afc-richmond",\n          "years_with_team": 3,\n          "assists": 23,\n          "goals_scored": 47,\n          "is_captain": false,\n          "member_type": "player"\n        }\'',
      },
      java: {
        method: 'teamMembers().create',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.teammembers.Position;\nimport com.believe.api.models.teammembers.TeamMemberCreateParams;\nimport com.believe.api.models.teammembers.TeamMemberCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        TeamMemberCreateParams.Member.Player params = TeamMemberCreateParams.Member.Player.builder()\n            .characterId("jamie-tartt")\n            .jerseyNumber(9L)\n            .position(Position.FORWARD)\n            .teamId("afc-richmond")\n            .yearsWithTeam(3L)\n            .memberType(TeamMemberCreateParams.Member.Player.MemberType.PLAYER)\n            .build();\n        TeamMemberCreateResponse teamMember = client.teamMembers().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'teamMembers().create',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.teammembers.Position\nimport com.believe.api.models.teammembers.TeamMemberCreateParams\nimport com.believe.api.models.teammembers.TeamMemberCreateResponse\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val params: TeamMemberCreateParams.Member.Player = TeamMemberCreateParams.Member.Player.builder()\n        .characterId("jamie-tartt")\n        .jerseyNumber(9L)\n        .position(Position.FORWARD)\n        .teamId("afc-richmond")\n        .yearsWithTeam(3L)\n        .memberType(TeamMemberCreateParams.Member.Player.MemberType.PLAYER)\n        .build()\n    val teamMember: TeamMemberCreateResponse = client.teamMembers().create(params)\n}',
      },
      python: {
        method: 'team_members.create',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nteam_member = client.team_members.create(\n    member={\n        "character_id": "jamie-tartt",\n        "jersey_number": 9,\n        "position": "forward",\n        "team_id": "afc-richmond",\n        "years_with_team": 3,\n        "member_type": "player",\n    },\n)\nprint(team_member)',
      },
      ruby: {
        method: 'team_members.create',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nteam_member = believe.team_members.create(\n  member: {\n    character_id: "jamie-tartt",\n    jersey_number: 9,\n    position: :forward,\n    team_id: "afc-richmond",\n    years_with_team: 3,\n    member_type: :player\n  }\n)\n\nputs(team_member)',
      },
      typescript: {
        method: 'client.teamMembers.create',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst teamMember = await client.teamMembers.create({\n  member: {\n    character_id: 'jamie-tartt',\n    jersey_number: 9,\n    position: 'forward',\n    team_id: 'afc-richmond',\n    years_with_team: 3,\n    member_type: 'player',\n  },\n});\n\nconsole.log(teamMember);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/team-members/{member_id}',
    httpMethod: 'get',
    summary: 'Get a team member by ID',
    description:
      "Retrieve detailed information about a specific team member.\n\nThe response is a **union type (oneOf)** - the actual shape depends on the member's type:\n- **player**: Includes position, jersey_number, goals_scored, assists, is_captain\n- **coach**: Includes specialty, certifications, win_rate\n- **medical_staff**: Includes specialty, qualifications, license_number\n- **equipment_manager**: Includes responsibilities, is_head_kitman\n\nUse `character_id` to fetch full character details from `/characters/{character_id}`.",
    stainlessPath: '(resource) team_members > (method) retrieve',
    qualified: 'client.teamMembers.retrieve',
    params: ['member_id: string;'],
    response:
      "{ id: string; character_id: string; jersey_number: number; position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; } | { id: string; character_id: string; specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; } | { id: string; character_id: string; specialty: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id: string; years_with_team: number; license_number?: string; member_type?: 'medical_staff'; qualifications?: string[]; } | { id: string; character_id: string; team_id: string; years_with_team: number; is_head_kitman?: boolean; member_type?: 'equipment_manager'; responsibilities?: string[]; }",
    markdown:
      "## retrieve\n\n`client.teamMembers.retrieve(member_id: string): object | object | object | object`\n\n**get** `/team-members/{member_id}`\n\nRetrieve detailed information about a specific team member.\n\nThe response is a **union type (oneOf)** - the actual shape depends on the member's type:\n- **player**: Includes position, jersey_number, goals_scored, assists, is_captain\n- **coach**: Includes specialty, certifications, win_rate\n- **medical_staff**: Includes specialty, qualifications, license_number\n- **equipment_manager**: Includes responsibilities, is_head_kitman\n\nUse `character_id` to fetch full character details from `/characters/{character_id}`.\n\n### Parameters\n\n- `member_id: string`\n\n### Returns\n\n- `{ id: string; character_id: string; jersey_number: number; position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; } | { id: string; character_id: string; specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; } | { id: string; character_id: string; specialty: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id: string; years_with_team: number; license_number?: string; member_type?: 'medical_staff'; qualifications?: string[]; } | { id: string; character_id: string; team_id: string; years_with_team: number; is_head_kitman?: boolean; member_type?: 'equipment_manager'; responsibilities?: string[]; }`\n  Full player model with ID.\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst teamMember = await client.teamMembers.retrieve('member_id');\n\nconsole.log(teamMember);\n```",
    perLanguage: {
      cli: {
        method: 'team_members retrieve',
        example: "believe team-members retrieve \\\n  --api-key 'My API Key' \\\n  --member-id member_id",
      },
      go: {
        method: 'client.TeamMembers.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tteamMember, err := client.TeamMembers.Get(context.TODO(), "member_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", teamMember)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/team-members/$MEMBER_ID \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'teamMembers().retrieve',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.teammembers.TeamMemberRetrieveParams;\nimport com.believe.api.models.teammembers.TeamMemberRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        TeamMemberRetrieveResponse teamMember = client.teamMembers().retrieve("member_id");\n    }\n}',
      },
      kotlin: {
        method: 'teamMembers().retrieve',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.teammembers.TeamMemberRetrieveParams\nimport com.believe.api.models.teammembers.TeamMemberRetrieveResponse\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val teamMember: TeamMemberRetrieveResponse = client.teamMembers().retrieve("member_id")\n}',
      },
      python: {
        method: 'team_members.retrieve',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nteam_member = client.team_members.retrieve(\n    "member_id",\n)\nprint(team_member)',
      },
      ruby: {
        method: 'team_members.retrieve',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nteam_member = believe.team_members.retrieve("member_id")\n\nputs(team_member)',
      },
      typescript: {
        method: 'client.teamMembers.retrieve',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst teamMember = await client.teamMembers.retrieve('member_id');\n\nconsole.log(teamMember);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/team-members/{member_id}',
    httpMethod: 'patch',
    summary: 'Update a team member',
    description: 'Update specific fields of an existing team member. Fields vary by member type.',
    stainlessPath: '(resource) team_members > (method) update',
    qualified: 'client.teamMembers.update',
    params: [
      'member_id: string;',
      "updates: { assists?: number; goals_scored?: number; is_captain?: boolean; jersey_number?: number; position?: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id?: string; years_with_team?: number; } | { certifications?: string[]; specialty?: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id?: string; win_rate?: number; years_with_team?: number; } | { license_number?: string; qualifications?: string[]; specialty?: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id?: string; years_with_team?: number; } | { is_head_kitman?: boolean; responsibilities?: string[]; team_id?: string; years_with_team?: number; };",
    ],
    response:
      "{ id: string; character_id: string; jersey_number: number; position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; } | { id: string; character_id: string; specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; } | { id: string; character_id: string; specialty: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id: string; years_with_team: number; license_number?: string; member_type?: 'medical_staff'; qualifications?: string[]; } | { id: string; character_id: string; team_id: string; years_with_team: number; is_head_kitman?: boolean; member_type?: 'equipment_manager'; responsibilities?: string[]; }",
    markdown:
      "## update\n\n`client.teamMembers.update(member_id: string, updates: { assists?: number; goals_scored?: number; is_captain?: boolean; jersey_number?: number; position?: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id?: string; years_with_team?: number; } | { certifications?: string[]; specialty?: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id?: string; win_rate?: number; years_with_team?: number; } | { license_number?: string; qualifications?: string[]; specialty?: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id?: string; years_with_team?: number; } | { is_head_kitman?: boolean; responsibilities?: string[]; team_id?: string; years_with_team?: number; }): object | object | object | object`\n\n**patch** `/team-members/{member_id}`\n\nUpdate specific fields of an existing team member. Fields vary by member type.\n\n### Parameters\n\n- `member_id: string`\n\n- `updates: { assists?: number; goals_scored?: number; is_captain?: boolean; jersey_number?: number; position?: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id?: string; years_with_team?: number; } | { certifications?: string[]; specialty?: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id?: string; win_rate?: number; years_with_team?: number; } | { license_number?: string; qualifications?: string[]; specialty?: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id?: string; years_with_team?: number; } | { is_head_kitman?: boolean; responsibilities?: string[]; team_id?: string; years_with_team?: number; }`\n  Update model for players.\n\n### Returns\n\n- `{ id: string; character_id: string; jersey_number: number; position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; } | { id: string; character_id: string; specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; } | { id: string; character_id: string; specialty: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id: string; years_with_team: number; license_number?: string; member_type?: 'medical_staff'; qualifications?: string[]; } | { id: string; character_id: string; team_id: string; years_with_team: number; is_head_kitman?: boolean; member_type?: 'equipment_manager'; responsibilities?: string[]; }`\n  Full player model with ID.\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst teamMember = await client.teamMembers.update('member_id', { updates: {} });\n\nconsole.log(teamMember);\n```",
    perLanguage: {
      cli: {
        method: 'team_members update',
        example:
          "believe team-members update \\\n  --api-key 'My API Key' \\\n  --member-id member_id \\\n  --updates '{}'",
      },
      go: {
        method: 'client.TeamMembers.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tteamMember, err := client.TeamMembers.Update(\n\t\tcontext.TODO(),\n\t\t"member_id",\n\t\tbelieve.TeamMemberUpdateParams{\n\t\t\tOfPlayerUpdate: &believe.TeamMemberUpdateParamsUpdatesPlayerUpdate{},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", teamMember)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/team-members/$MEMBER_ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY" \\\n    -d \'{\n          "assists": 0,\n          "goals_scored": 0,\n          "is_captain": true,\n          "jersey_number": 1,\n          "position": "goalkeeper",\n          "team_id": "team_id",\n          "years_with_team": 0\n        }\'',
      },
      java: {
        method: 'teamMembers().update',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.teammembers.TeamMemberUpdateParams;\nimport com.believe.api.models.teammembers.TeamMemberUpdateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        TeamMemberUpdateParams params = TeamMemberUpdateParams.builder()\n            .memberId("member_id")\n            .updates(TeamMemberUpdateParams.Updates.PlayerUpdate.builder().build())\n            .build();\n        TeamMemberUpdateResponse teamMember = client.teamMembers().update(params);\n    }\n}',
      },
      kotlin: {
        method: 'teamMembers().update',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.teammembers.TeamMemberUpdateParams\nimport com.believe.api.models.teammembers.TeamMemberUpdateResponse\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val params: TeamMemberUpdateParams = TeamMemberUpdateParams.builder()\n        .memberId("member_id")\n        .updates(TeamMemberUpdateParams.Updates.PlayerUpdate.builder().build())\n        .build()\n    val teamMember: TeamMemberUpdateResponse = client.teamMembers().update(params)\n}',
      },
      python: {
        method: 'team_members.update',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nteam_member = client.team_members.update(\n    member_id="member_id",\n    updates={},\n)\nprint(team_member)',
      },
      ruby: {
        method: 'team_members.update',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nteam_member = believe.team_members.update("member_id", updates: {})\n\nputs(team_member)',
      },
      typescript: {
        method: 'client.teamMembers.update',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst teamMember = await client.teamMembers.update('member_id', { updates: {} });\n\nconsole.log(teamMember);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/team-members/{member_id}',
    httpMethod: 'delete',
    summary: 'Delete a team member',
    description: 'Remove a team member from the roster.',
    stainlessPath: '(resource) team_members > (method) delete',
    qualified: 'client.teamMembers.delete',
    params: ['member_id: string;'],
    markdown:
      "## delete\n\n`client.teamMembers.delete(member_id: string): void`\n\n**delete** `/team-members/{member_id}`\n\nRemove a team member from the roster.\n\n### Parameters\n\n- `member_id: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nawait client.teamMembers.delete('member_id')\n```",
    perLanguage: {
      cli: {
        method: 'team_members delete',
        example: "believe team-members delete \\\n  --api-key 'My API Key' \\\n  --member-id member_id",
      },
      go: {
        method: 'client.TeamMembers.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.TeamMembers.Delete(context.TODO(), "member_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/team-members/$MEMBER_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'teamMembers().delete',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.teammembers.TeamMemberDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        client.teamMembers().delete("member_id");\n    }\n}',
      },
      kotlin: {
        method: 'teamMembers().delete',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.teammembers.TeamMemberDeleteParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    client.teamMembers().delete("member_id")\n}',
      },
      python: {
        method: 'team_members.delete',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nclient.team_members.delete(\n    "member_id",\n)',
      },
      ruby: {
        method: 'team_members.delete',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresult = believe.team_members.delete("member_id")\n\nputs(result)',
      },
      typescript: {
        method: 'client.teamMembers.delete',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.teamMembers.delete('member_id');",
      },
    },
  },
  {
    name: 'list_players',
    endpoint: '/team-members/players/',
    httpMethod: 'get',
    summary: 'List all players',
    description: 'Get only players (filtered subset of team members).',
    stainlessPath: '(resource) team_members > (method) list_players',
    qualified: 'client.teamMembers.listPlayers',
    params: [
      'limit?: number;',
      "position?: 'goalkeeper' | 'defender' | 'midfielder' | 'forward';",
      'skip?: number;',
      'team_id?: string;',
    ],
    response:
      "{ id: string; character_id: string; jersey_number: number; position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; }",
    markdown:
      "## list_players\n\n`client.teamMembers.listPlayers(limit?: number, position?: 'goalkeeper' | 'defender' | 'midfielder' | 'forward', skip?: number, team_id?: string): { id: string; character_id: string; jersey_number: number; position: position; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; }`\n\n**get** `/team-members/players/`\n\nGet only players (filtered subset of team members).\n\n### Parameters\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `position?: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'`\n  Filter by position\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n- `team_id?: string`\n  Filter by team ID\n\n### Returns\n\n- `{ id: string; character_id: string; jersey_number: number; position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; }`\n  Full player model with ID.\n\n  - `id: string`\n  - `character_id: string`\n  - `jersey_number: number`\n  - `position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'`\n  - `team_id: string`\n  - `years_with_team: number`\n  - `assists?: number`\n  - `goals_scored?: number`\n  - `is_captain?: boolean`\n  - `member_type?: 'player'`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\n// Automatically fetches more pages as needed.\nfor await (const player of client.teamMembers.listPlayers()) {\n  console.log(player);\n}\n```",
    perLanguage: {
      cli: {
        method: 'team_members list_players',
        example: "believe team-members list-players \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.TeamMembers.ListPlayers',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.TeamMembers.ListPlayers(context.TODO(), believe.TeamMemberListPlayersParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/team-members/players/ \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'teamMembers().listPlayers',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.teammembers.TeamMemberListPlayersPage;\nimport com.believe.api.models.teammembers.TeamMemberListPlayersParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        TeamMemberListPlayersPage page = client.teamMembers().listPlayers();\n    }\n}',
      },
      kotlin: {
        method: 'teamMembers().listPlayers',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.teammembers.TeamMemberListPlayersPage\nimport com.believe.api.models.teammembers.TeamMemberListPlayersParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val page: TeamMemberListPlayersPage = client.teamMembers().listPlayers()\n}',
      },
      python: {
        method: 'team_members.list_players',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.team_members.list_players()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'team_members.list_players',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\npage = believe.team_members.list_players\n\nputs(page)',
      },
      typescript: {
        method: 'client.teamMembers.listPlayers',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const player of client.teamMembers.listPlayers()) {\n  console.log(player.id);\n}",
      },
    },
  },
  {
    name: 'list_coaches',
    endpoint: '/team-members/coaches/',
    httpMethod: 'get',
    summary: 'List all coaches',
    description: 'Get only coaches (filtered subset of team members).',
    stainlessPath: '(resource) team_members > (method) list_coaches',
    qualified: 'client.teamMembers.listCoaches',
    params: [
      'limit?: number;',
      'skip?: number;',
      "specialty?: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst';",
      'team_id?: string;',
    ],
    response:
      "{ id: string; character_id: string; specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; }",
    markdown:
      "## list_coaches\n\n`client.teamMembers.listCoaches(limit?: number, skip?: number, specialty?: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst', team_id?: string): { id: string; character_id: string; specialty: coach_specialty; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; }`\n\n**get** `/team-members/coaches/`\n\nGet only coaches (filtered subset of team members).\n\n### Parameters\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n- `specialty?: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'`\n  Filter by specialty\n\n- `team_id?: string`\n  Filter by team ID\n\n### Returns\n\n- `{ id: string; character_id: string; specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; }`\n  Full coach model with ID.\n\n  - `id: string`\n  - `character_id: string`\n  - `specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'`\n  - `team_id: string`\n  - `years_with_team: number`\n  - `certifications?: string[]`\n  - `member_type?: 'coach'`\n  - `win_rate?: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\n// Automatically fetches more pages as needed.\nfor await (const coach of client.teamMembers.listCoaches()) {\n  console.log(coach);\n}\n```",
    perLanguage: {
      cli: {
        method: 'team_members list_coaches',
        example: "believe team-members list-coaches \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.TeamMembers.ListCoaches',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.TeamMembers.ListCoaches(context.TODO(), believe.TeamMemberListCoachesParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/team-members/coaches/ \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'teamMembers().listCoaches',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.teammembers.TeamMemberListCoachesPage;\nimport com.believe.api.models.teammembers.TeamMemberListCoachesParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        TeamMemberListCoachesPage page = client.teamMembers().listCoaches();\n    }\n}',
      },
      kotlin: {
        method: 'teamMembers().listCoaches',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.teammembers.TeamMemberListCoachesPage\nimport com.believe.api.models.teammembers.TeamMemberListCoachesParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val page: TeamMemberListCoachesPage = client.teamMembers().listCoaches()\n}',
      },
      python: {
        method: 'team_members.list_coaches',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.team_members.list_coaches()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'team_members.list_coaches',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\npage = believe.team_members.list_coaches\n\nputs(page)',
      },
      typescript: {
        method: 'client.teamMembers.listCoaches',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const coach of client.teamMembers.listCoaches()) {\n  console.log(coach.id);\n}",
      },
    },
  },
  {
    name: 'list_staff',
    endpoint: '/team-members/staff/',
    httpMethod: 'get',
    summary: 'List all staff (non-player, non-coach)',
    description:
      'Get all staff members (medical staff and equipment managers).\n\nThis demonstrates a **narrower union type** - the response is oneOf MedicalStaff or EquipmentManager.',
    stainlessPath: '(resource) team_members > (method) list_staff',
    qualified: 'client.teamMembers.listStaff',
    params: ['limit?: number;', 'skip?: number;', 'team_id?: string;'],
    response:
      "{ id: string; character_id: string; specialty: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id: string; years_with_team: number; license_number?: string; member_type?: 'medical_staff'; qualifications?: string[]; } | { id: string; character_id: string; team_id: string; years_with_team: number; is_head_kitman?: boolean; member_type?: 'equipment_manager'; responsibilities?: string[]; }",
    markdown:
      "## list_staff\n\n`client.teamMembers.listStaff(limit?: number, skip?: number, team_id?: string): object | object`\n\n**get** `/team-members/staff/`\n\nGet all staff members (medical staff and equipment managers).\n\nThis demonstrates a **narrower union type** - the response is oneOf MedicalStaff or EquipmentManager.\n\n### Parameters\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n- `team_id?: string`\n  Filter by team ID\n\n### Returns\n\n- `{ id: string; character_id: string; specialty: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id: string; years_with_team: number; license_number?: string; member_type?: 'medical_staff'; qualifications?: string[]; } | { id: string; character_id: string; team_id: string; years_with_team: number; is_head_kitman?: boolean; member_type?: 'equipment_manager'; responsibilities?: string[]; }`\n  Full medical staff model with ID.\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\n// Automatically fetches more pages as needed.\nfor await (const teamMemberListStaffResponse of client.teamMembers.listStaff()) {\n  console.log(teamMemberListStaffResponse);\n}\n```",
    perLanguage: {
      cli: {
        method: 'team_members list_staff',
        example: "believe team-members list-staff \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.TeamMembers.ListStaff',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.TeamMembers.ListStaff(context.TODO(), believe.TeamMemberListStaffParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/team-members/staff/ \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'teamMembers().listStaff',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.teammembers.TeamMemberListStaffPage;\nimport com.believe.api.models.teammembers.TeamMemberListStaffParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        TeamMemberListStaffPage page = client.teamMembers().listStaff();\n    }\n}',
      },
      kotlin: {
        method: 'teamMembers().listStaff',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.teammembers.TeamMemberListStaffPage\nimport com.believe.api.models.teammembers.TeamMemberListStaffParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val page: TeamMemberListStaffPage = client.teamMembers().listStaff()\n}',
      },
      python: {
        method: 'team_members.list_staff',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.team_members.list_staff()\npage = page.data[0]\nprint(page)',
      },
      ruby: {
        method: 'team_members.list_staff',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\npage = believe.team_members.list_staff\n\nputs(page)',
      },
      typescript: {
        method: 'client.teamMembers.listStaff',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const teamMemberListStaffResponse of client.teamMembers.listStaff()) {\n  console.log(teamMemberListStaffResponse);\n}",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/webhooks',
    httpMethod: 'get',
    summary: 'List registered webhooks',
    description: 'Get a list of all registered webhook endpoints.',
    stainlessPath: '(resource) webhooks > (method) list',
    qualified: 'client.webhooks.list',
    response:
      "{ id: string; created_at: string; event_types: 'match.completed' | 'team_member.transferred'[]; secret: string; url: string; description?: string; }[]",
    markdown:
      "## list\n\n`client.webhooks.list(): object[]`\n\n**get** `/webhooks`\n\nGet a list of all registered webhook endpoints.\n\n### Returns\n\n- `{ id: string; created_at: string; event_types: 'match.completed' | 'team_member.transferred'[]; secret: string; url: string; description?: string; }[]`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst registeredWebhooks = await client.webhooks.list();\n\nconsole.log(registeredWebhooks);\n```",
    perLanguage: {
      cli: {
        method: 'webhooks list',
        example: "believe webhooks list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Webhooks.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tregisteredWebhooks, err := client.Webhooks.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", registeredWebhooks)\n}\n',
      },
      http: {
        example: 'curl https://believe.cjav.dev/webhooks \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'webhooks().list',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.webhooks.RegisteredWebhook;\nimport com.believe.api.models.webhooks.WebhookListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        List<RegisteredWebhook> registeredWebhooks = client.webhooks().list();\n    }\n}',
      },
      kotlin: {
        method: 'webhooks().list',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.webhooks.RegisteredWebhook\nimport com.believe.api.models.webhooks.WebhookListParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val registeredWebhooks: List<RegisteredWebhook> = client.webhooks().list()\n}',
      },
      python: {
        method: 'webhooks.list',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nregistered_webhooks = client.webhooks.list()\nprint(registered_webhooks)',
      },
      ruby: {
        method: 'webhooks.list',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nregistered_webhooks = believe.webhooks.list\n\nputs(registered_webhooks)',
      },
      typescript: {
        method: 'client.webhooks.list',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst registeredWebhooks = await client.webhooks.list();\n\nconsole.log(registeredWebhooks);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/webhooks',
    httpMethod: 'post',
    summary: 'Register a webhook endpoint',
    description:
      "Register a new webhook endpoint to receive event notifications.\n\n## Event Types\n\nAvailable event types to subscribe to:\n- `match.completed` - Fired when a football match ends\n- `team_member.transferred` - Fired when a player/coach joins or leaves a team\n\nIf no event types are specified, the webhook will receive all event types.\n\n## Webhook Signatures\n\nAll webhook deliveries include Standard Webhooks signature headers:\n- `webhook-id` - Unique message identifier\n- `webhook-timestamp` - Unix timestamp of when the webhook was sent\n- `webhook-signature` - HMAC-SHA256 signature in format `v1,{base64_signature}`\n\nStore the returned `secret` securely - you'll need it to verify webhook signatures.",
    stainlessPath: '(resource) webhooks > (method) create',
    qualified: 'client.webhooks.create',
    params: [
      'url: string;',
      'description?: string;',
      "event_types?: 'match.completed' | 'team_member.transferred'[];",
    ],
    response:
      "{ webhook: { id: string; created_at: string; event_types: 'match.completed' | 'team_member.transferred'[]; secret: string; url: string; description?: string; }; message?: string; ted_says?: string; }",
    markdown:
      "## create\n\n`client.webhooks.create(url: string, description?: string, event_types?: 'match.completed' | 'team_member.transferred'[]): { webhook: registered_webhook; message?: string; ted_says?: string; }`\n\n**post** `/webhooks`\n\nRegister a new webhook endpoint to receive event notifications.\n\n## Event Types\n\nAvailable event types to subscribe to:\n- `match.completed` - Fired when a football match ends\n- `team_member.transferred` - Fired when a player/coach joins or leaves a team\n\nIf no event types are specified, the webhook will receive all event types.\n\n## Webhook Signatures\n\nAll webhook deliveries include Standard Webhooks signature headers:\n- `webhook-id` - Unique message identifier\n- `webhook-timestamp` - Unix timestamp of when the webhook was sent\n- `webhook-signature` - HMAC-SHA256 signature in format `v1,{base64_signature}`\n\nStore the returned `secret` securely - you'll need it to verify webhook signatures.\n\n### Parameters\n\n- `url: string`\n  The URL to send webhook events to\n\n- `description?: string`\n  Optional description for this webhook\n\n- `event_types?: 'match.completed' | 'team_member.transferred'[]`\n  List of event types to subscribe to. If not provided, subscribes to all events.\n\n### Returns\n\n- `{ webhook: { id: string; created_at: string; event_types: 'match.completed' | 'team_member.transferred'[]; secret: string; url: string; description?: string; }; message?: string; ted_says?: string; }`\n  Response after registering a webhook.\n\n  - `webhook: { id: string; created_at: string; event_types: 'match.completed' | 'team_member.transferred'[]; secret: string; url: string; description?: string; }`\n  - `message?: string`\n  - `ted_says?: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst webhook = await client.webhooks.create({ url: 'https://example.com/webhooks' });\n\nconsole.log(webhook);\n```",
    perLanguage: {
      cli: {
        method: 'webhooks create',
        example:
          "believe webhooks create \\\n  --api-key 'My API Key' \\\n  --url https://example.com/webhooks",
      },
      go: {
        method: 'client.Webhooks.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\twebhook, err := client.Webhooks.New(context.TODO(), believe.WebhookNewParams{\n\t\tURL: "https://example.com/webhooks",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", webhook.Webhook)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/webhooks \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY" \\\n    -d \'{\n          "url": "https://example.com/webhooks"\n        }\'',
      },
      java: {
        method: 'webhooks().create',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.webhooks.WebhookCreateParams;\nimport com.believe.api.models.webhooks.WebhookCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        WebhookCreateParams params = WebhookCreateParams.builder()\n            .url("https://example.com/webhooks")\n            .build();\n        WebhookCreateResponse webhook = client.webhooks().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'webhooks().create',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.webhooks.WebhookCreateParams\nimport com.believe.api.models.webhooks.WebhookCreateResponse\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val params: WebhookCreateParams = WebhookCreateParams.builder()\n        .url("https://example.com/webhooks")\n        .build()\n    val webhook: WebhookCreateResponse = client.webhooks().create(params)\n}',
      },
      python: {
        method: 'webhooks.create',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nwebhook = client.webhooks.create(\n    url="https://example.com/webhooks",\n)\nprint(webhook.webhook)',
      },
      ruby: {
        method: 'webhooks.create',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nwebhook = believe.webhooks.create(url: "https://example.com/webhooks")\n\nputs(webhook)',
      },
      typescript: {
        method: 'client.webhooks.create',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst webhook = await client.webhooks.create({ url: 'https://example.com/webhooks' });\n\nconsole.log(webhook.webhook);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/webhooks/{webhook_id}',
    httpMethod: 'get',
    summary: 'Get a webhook',
    description: 'Get details of a specific webhook endpoint.',
    stainlessPath: '(resource) webhooks > (method) retrieve',
    qualified: 'client.webhooks.retrieve',
    params: ['webhook_id: string;'],
    response:
      "{ id: string; created_at: string; event_types: 'match.completed' | 'team_member.transferred'[]; secret: string; url: string; description?: string; }",
    markdown:
      "## retrieve\n\n`client.webhooks.retrieve(webhook_id: string): { id: string; created_at: string; event_types: 'match.completed' | 'team_member.transferred'[]; secret: string; url: string; description?: string; }`\n\n**get** `/webhooks/{webhook_id}`\n\nGet details of a specific webhook endpoint.\n\n### Parameters\n\n- `webhook_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; event_types: 'match.completed' | 'team_member.transferred'[]; secret: string; url: string; description?: string; }`\n  A registered webhook endpoint.\n\n  - `id: string`\n  - `created_at: string`\n  - `event_types: 'match.completed' | 'team_member.transferred'[]`\n  - `secret: string`\n  - `url: string`\n  - `description?: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst registeredWebhook = await client.webhooks.retrieve('webhook_id');\n\nconsole.log(registeredWebhook);\n```",
    perLanguage: {
      cli: {
        method: 'webhooks retrieve',
        example: "believe webhooks retrieve \\\n  --api-key 'My API Key' \\\n  --webhook-id webhook_id",
      },
      go: {
        method: 'client.Webhooks.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tregisteredWebhook, err := client.Webhooks.Get(context.TODO(), "webhook_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", registeredWebhook.ID)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/webhooks/$WEBHOOK_ID \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'webhooks().retrieve',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.webhooks.RegisteredWebhook;\nimport com.believe.api.models.webhooks.WebhookRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        RegisteredWebhook registeredWebhook = client.webhooks().retrieve("webhook_id");\n    }\n}',
      },
      kotlin: {
        method: 'webhooks().retrieve',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.webhooks.RegisteredWebhook\nimport com.believe.api.models.webhooks.WebhookRetrieveParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val registeredWebhook: RegisteredWebhook = client.webhooks().retrieve("webhook_id")\n}',
      },
      python: {
        method: 'webhooks.retrieve',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nregistered_webhook = client.webhooks.retrieve(\n    "webhook_id",\n)\nprint(registered_webhook.id)',
      },
      ruby: {
        method: 'webhooks.retrieve',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nregistered_webhook = believe.webhooks.retrieve("webhook_id")\n\nputs(registered_webhook)',
      },
      typescript: {
        method: 'client.webhooks.retrieve',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst registeredWebhook = await client.webhooks.retrieve('webhook_id');\n\nconsole.log(registeredWebhook.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/webhooks/{webhook_id}',
    httpMethod: 'delete',
    summary: 'Delete a webhook',
    description: 'Unregister a webhook endpoint. It will no longer receive events.',
    stainlessPath: '(resource) webhooks > (method) delete',
    qualified: 'client.webhooks.delete',
    params: ['webhook_id: string;'],
    response: 'object',
    markdown:
      "## delete\n\n`client.webhooks.delete(webhook_id: string): object`\n\n**delete** `/webhooks/{webhook_id}`\n\nUnregister a webhook endpoint. It will no longer receive events.\n\n### Parameters\n\n- `webhook_id: string`\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst webhook = await client.webhooks.delete('webhook_id');\n\nconsole.log(webhook);\n```",
    perLanguage: {
      cli: {
        method: 'webhooks delete',
        example: "believe webhooks delete \\\n  --api-key 'My API Key' \\\n  --webhook-id webhook_id",
      },
      go: {
        method: 'client.Webhooks.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\twebhook, err := client.Webhooks.Delete(context.TODO(), "webhook_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", webhook)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/webhooks/$WEBHOOK_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'webhooks().delete',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.webhooks.WebhookDeleteParams;\nimport com.believe.api.models.webhooks.WebhookDeleteResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        WebhookDeleteResponse webhook = client.webhooks().delete("webhook_id");\n    }\n}',
      },
      kotlin: {
        method: 'webhooks().delete',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.webhooks.WebhookDeleteParams\nimport com.believe.api.models.webhooks.WebhookDeleteResponse\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val webhook: WebhookDeleteResponse = client.webhooks().delete("webhook_id")\n}',
      },
      python: {
        method: 'webhooks.delete',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nwebhook = client.webhooks.delete(\n    "webhook_id",\n)\nprint(webhook)',
      },
      ruby: {
        method: 'webhooks.delete',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nwebhook = believe.webhooks.delete("webhook_id")\n\nputs(webhook)',
      },
      typescript: {
        method: 'client.webhooks.delete',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst webhook = await client.webhooks.delete('webhook_id');\n\nconsole.log(webhook);",
      },
    },
  },
  {
    name: 'trigger_event',
    endpoint: '/webhooks/trigger',
    httpMethod: 'post',
    summary: 'Trigger a webhook event',
    description:
      'Trigger a webhook event and deliver it to all subscribed endpoints.\n\nThis endpoint is useful for testing your webhook integration. It will:\n1. Generate an event with the specified type and payload\n2. Find all webhooks subscribed to that event type\n3. Send a POST request to each webhook URL with signature headers\n4. Return the delivery results\n\n## Event Payload\n\nYou can provide a custom payload, or leave it empty to use a sample payload.\n\n## Webhook Signature Headers\n\nEach webhook delivery includes:\n- `webhook-id` - Unique event identifier (e.g., `evt_abc123...`)\n- `webhook-timestamp` - Unix timestamp\n- `webhook-signature` - HMAC-SHA256 signature (`v1,{base64}`)\n\nTo verify signatures, compute:\n```\nsignature = HMAC-SHA256(\n    key = base64_decode(secret_without_prefix),\n    message = "{timestamp}.{raw_json_payload}"\n)\n```',
    stainlessPath: '(resource) webhooks > (method) trigger_event',
    qualified: 'client.webhooks.triggerEvent',
    params: [
      "event_type: 'match.completed' | 'team_member.transferred';",
      "payload?: { data: { away_score: number; away_team_id: string; completed_at: string; home_score: number; home_team_id: string; match_id: string; match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'; result: 'home_win' | 'away_win' | 'draw'; ted_post_match_quote: string; lesson_learned?: string; man_of_the_match?: string; }; event_type?: 'match.completed'; } | { data: { character_id: string; character_name: string; member_type: 'player' | 'coach' | 'medical_staff' | 'equipment_manager'; team_id: string; team_member_id: string; team_name: string; ted_reaction: string; transfer_type: 'joined' | 'departed'; previous_team_id?: string; previous_team_name?: string; transfer_fee_gbp?: string; years_with_previous_team?: number; }; event_type?: 'team_member.transferred'; };",
    ],
    response:
      "{ deliveries: { success: boolean; url: string; webhook_id: string; error?: string; status_code?: number; }[]; event_id: string; event_type: 'match.completed' | 'team_member.transferred'; successful_deliveries: number; ted_says: string; total_webhooks: number; }",
    markdown:
      "## trigger_event\n\n`client.webhooks.triggerEvent(event_type: 'match.completed' | 'team_member.transferred', payload?: { data: { away_score: number; away_team_id: string; completed_at: string; home_score: number; home_team_id: string; match_id: string; match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'; result: 'home_win' | 'away_win' | 'draw'; ted_post_match_quote: string; lesson_learned?: string; man_of_the_match?: string; }; event_type?: 'match.completed'; } | { data: { character_id: string; character_name: string; member_type: 'player' | 'coach' | 'medical_staff' | 'equipment_manager'; team_id: string; team_member_id: string; team_name: string; ted_reaction: string; transfer_type: 'joined' | 'departed'; previous_team_id?: string; previous_team_name?: string; transfer_fee_gbp?: string; years_with_previous_team?: number; }; event_type?: 'team_member.transferred'; }): { deliveries: object[]; event_id: string; event_type: 'match.completed' | 'team_member.transferred'; successful_deliveries: number; ted_says: string; total_webhooks: number; }`\n\n**post** `/webhooks/trigger`\n\nTrigger a webhook event and deliver it to all subscribed endpoints.\n\nThis endpoint is useful for testing your webhook integration. It will:\n1. Generate an event with the specified type and payload\n2. Find all webhooks subscribed to that event type\n3. Send a POST request to each webhook URL with signature headers\n4. Return the delivery results\n\n## Event Payload\n\nYou can provide a custom payload, or leave it empty to use a sample payload.\n\n## Webhook Signature Headers\n\nEach webhook delivery includes:\n- `webhook-id` - Unique event identifier (e.g., `evt_abc123...`)\n- `webhook-timestamp` - Unix timestamp\n- `webhook-signature` - HMAC-SHA256 signature (`v1,{base64}`)\n\nTo verify signatures, compute:\n```\nsignature = HMAC-SHA256(\n    key = base64_decode(secret_without_prefix),\n    message = \"{timestamp}.{raw_json_payload}\"\n)\n```\n\n### Parameters\n\n- `event_type: 'match.completed' | 'team_member.transferred'`\n  The type of event to trigger\n\n- `payload?: { data: { away_score: number; away_team_id: string; completed_at: string; home_score: number; home_team_id: string; match_id: string; match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'; result: 'home_win' | 'away_win' | 'draw'; ted_post_match_quote: string; lesson_learned?: string; man_of_the_match?: string; }; event_type?: 'match.completed'; } | { data: { character_id: string; character_name: string; member_type: 'player' | 'coach' | 'medical_staff' | 'equipment_manager'; team_id: string; team_member_id: string; team_name: string; ted_reaction: string; transfer_type: 'joined' | 'departed'; previous_team_id?: string; previous_team_name?: string; transfer_fee_gbp?: string; years_with_previous_team?: number; }; event_type?: 'team_member.transferred'; }`\n  Optional event payload. If not provided, a sample payload will be generated.\n\n### Returns\n\n- `{ deliveries: { success: boolean; url: string; webhook_id: string; error?: string; status_code?: number; }[]; event_id: string; event_type: 'match.completed' | 'team_member.transferred'; successful_deliveries: number; ted_says: string; total_webhooks: number; }`\n  Response after triggering webhook events.\n\n  - `deliveries: { success: boolean; url: string; webhook_id: string; error?: string; status_code?: number; }[]`\n  - `event_id: string`\n  - `event_type: 'match.completed' | 'team_member.transferred'`\n  - `successful_deliveries: number`\n  - `ted_says: string`\n  - `total_webhooks: number`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst response = await client.webhooks.triggerEvent({ event_type: 'match.completed' });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'webhooks trigger_event',
        example:
          "believe webhooks trigger-event \\\n  --api-key 'My API Key' \\\n  --event-type match.completed",
      },
      go: {
        method: 'client.Webhooks.TriggerEvent',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Webhooks.TriggerEvent(context.TODO(), believe.WebhookTriggerEventParams{\n\t\tEventType: believe.WebhookTriggerEventParamsEventTypeMatchCompleted,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.EventID)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/webhooks/trigger \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY" \\\n    -d \'{\n          "event_type": "match.completed"\n        }\'',
      },
      java: {
        method: 'webhooks().triggerEvent',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.webhooks.WebhookTriggerEventParams;\nimport com.believe.api.models.webhooks.WebhookTriggerEventResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        WebhookTriggerEventParams params = WebhookTriggerEventParams.builder()\n            .eventType(WebhookTriggerEventParams.EventType.MATCH_COMPLETED)\n            .build();\n        WebhookTriggerEventResponse response = client.webhooks().triggerEvent(params);\n    }\n}',
      },
      kotlin: {
        method: 'webhooks().triggerEvent',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.webhooks.WebhookTriggerEventParams\nimport com.believe.api.models.webhooks.WebhookTriggerEventResponse\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val params: WebhookTriggerEventParams = WebhookTriggerEventParams.builder()\n        .eventType(WebhookTriggerEventParams.EventType.MATCH_COMPLETED)\n        .build()\n    val response: WebhookTriggerEventResponse = client.webhooks().triggerEvent(params)\n}',
      },
      python: {
        method: 'webhooks.trigger_event',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.webhooks.trigger_event(\n    event_type="match.completed",\n)\nprint(response.event_id)',
      },
      ruby: {
        method: 'webhooks.trigger_event',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresponse = believe.webhooks.trigger_event(event_type: :"match.completed")\n\nputs(response)',
      },
      typescript: {
        method: 'client.webhooks.triggerEvent',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.webhooks.triggerEvent({ event_type: 'match.completed' });\n\nconsole.log(response.event_id);",
      },
    },
  },
  {
    name: 'unwrap',
    endpoint: '',
    httpMethod: '',
    summary: '',
    description: '',
    stainlessPath: '(resource) webhooks > (method) unwrap',
    qualified: 'client.webhooks.unwrap',
    perLanguage: {
      cli: {
        example: "believe webhooks unwrap \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Webhooks.Unwrap',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Webhooks.Unwrap(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      java: {
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.webhooks.WebhookUnwrapParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        client.webhooks().unwrap();\n    }\n}',
      },
      kotlin: {
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.webhooks.WebhookUnwrapParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    client.webhooks().unwrap()\n}',
      },
      python: {
        method: 'webhooks.unwrap',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nclient.webhooks.unwrap()',
      },
      ruby: {
        method: 'webhooks.unwrap',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresult = believe.webhooks.unwrap\n\nputs(result)',
      },
      typescript: {
        method: 'client.webhooks.unwrap',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.webhooks.unwrap();",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/ticket-sales',
    httpMethod: 'get',
    summary: 'List all ticket sales',
    description:
      'Get a paginated list of all ticket sales with optional filtering. With 300 records, this endpoint is ideal for practicing pagination.',
    stainlessPath: '(resource) ticket_sales > (method) list',
    qualified: 'client.ticketSales.list',
    params: [
      'coupon_code?: string;',
      'currency?: string;',
      'limit?: number;',
      'match_id?: string;',
      "purchase_method?: 'online' | 'box_office' | 'will_call' | 'phone';",
      'skip?: number;',
    ],
    response:
      "{ id: string; buyer_name: string; currency: string; discount: string; match_id: string; purchase_method: 'online' | 'box_office' | 'will_call' | 'phone'; quantity: number; subtotal: string; tax: string; total: string; unit_price: string; buyer_email?: string; coupon_code?: string; }",
    markdown:
      "## list\n\n`client.ticketSales.list(coupon_code?: string, currency?: string, limit?: number, match_id?: string, purchase_method?: 'online' | 'box_office' | 'will_call' | 'phone', skip?: number): { id: string; buyer_name: string; currency: string; discount: string; match_id: string; purchase_method: purchase_method; quantity: number; subtotal: string; tax: string; total: string; unit_price: string; buyer_email?: string; coupon_code?: string; }`\n\n**get** `/ticket-sales`\n\nGet a paginated list of all ticket sales with optional filtering. With 300 records, this endpoint is ideal for practicing pagination.\n\n### Parameters\n\n- `coupon_code?: string`\n  Filter by coupon code (use 'none' for sales without coupons)\n\n- `currency?: string`\n  Filter by currency (GBP, USD, EUR)\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `match_id?: string`\n  Filter by match ID\n\n- `purchase_method?: 'online' | 'box_office' | 'will_call' | 'phone'`\n  Filter by purchase method\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n### Returns\n\n- `{ id: string; buyer_name: string; currency: string; discount: string; match_id: string; purchase_method: 'online' | 'box_office' | 'will_call' | 'phone'; quantity: number; subtotal: string; tax: string; total: string; unit_price: string; buyer_email?: string; coupon_code?: string; }`\n  Full ticket sale model with ID.\n\n  - `id: string`\n  - `buyer_name: string`\n  - `currency: string`\n  - `discount: string`\n  - `match_id: string`\n  - `purchase_method: 'online' | 'box_office' | 'will_call' | 'phone'`\n  - `quantity: number`\n  - `subtotal: string`\n  - `tax: string`\n  - `total: string`\n  - `unit_price: string`\n  - `buyer_email?: string`\n  - `coupon_code?: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\n// Automatically fetches more pages as needed.\nfor await (const ticketSale of client.ticketSales.list()) {\n  console.log(ticketSale);\n}\n```",
    perLanguage: {
      cli: {
        method: 'ticket_sales list',
        example: "believe ticket-sales list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.TicketSales.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.TicketSales.List(context.TODO(), believe.TicketSaleListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/ticket-sales \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'ticketSales().list',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.ticketsales.TicketSaleListPage;\nimport com.believe.api.models.ticketsales.TicketSaleListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        TicketSaleListPage page = client.ticketSales().list();\n    }\n}',
      },
      kotlin: {
        method: 'ticketSales().list',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.ticketsales.TicketSaleListPage\nimport com.believe.api.models.ticketsales.TicketSaleListParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val page: TicketSaleListPage = client.ticketSales().list()\n}',
      },
      python: {
        method: 'ticket_sales.list',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.ticket_sales.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'ticket_sales.list',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\npage = believe.ticket_sales.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.ticketSales.list',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const ticketSale of client.ticketSales.list()) {\n  console.log(ticketSale.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/ticket-sales',
    httpMethod: 'post',
    summary: 'Create a new ticket sale',
    description: 'Record a new ticket sale.',
    stainlessPath: '(resource) ticket_sales > (method) create',
    qualified: 'client.ticketSales.create',
    params: [
      'buyer_name: string;',
      'currency: string;',
      'discount: string;',
      'match_id: string;',
      "purchase_method: 'online' | 'box_office' | 'will_call' | 'phone';",
      'quantity: number;',
      'subtotal: string;',
      'tax: string;',
      'total: string;',
      'unit_price: string;',
      'buyer_email?: string;',
      'coupon_code?: string;',
    ],
    response:
      "{ id: string; buyer_name: string; currency: string; discount: string; match_id: string; purchase_method: 'online' | 'box_office' | 'will_call' | 'phone'; quantity: number; subtotal: string; tax: string; total: string; unit_price: string; buyer_email?: string; coupon_code?: string; }",
    markdown:
      "## create\n\n`client.ticketSales.create(buyer_name: string, currency: string, discount: string, match_id: string, purchase_method: 'online' | 'box_office' | 'will_call' | 'phone', quantity: number, subtotal: string, tax: string, total: string, unit_price: string, buyer_email?: string, coupon_code?: string): { id: string; buyer_name: string; currency: string; discount: string; match_id: string; purchase_method: purchase_method; quantity: number; subtotal: string; tax: string; total: string; unit_price: string; buyer_email?: string; coupon_code?: string; }`\n\n**post** `/ticket-sales`\n\nRecord a new ticket sale.\n\n### Parameters\n\n- `buyer_name: string`\n  Name of the ticket buyer\n\n- `currency: string`\n  Currency code (GBP, USD, or EUR)\n\n- `discount: string`\n  Discount amount applied from coupon\n\n- `match_id: string`\n  ID of the match\n\n- `purchase_method: 'online' | 'box_office' | 'will_call' | 'phone'`\n  How the ticket was purchased\n\n- `quantity: number`\n  Number of tickets purchased\n\n- `subtotal: string`\n  Subtotal before discount and tax (unit_price * quantity)\n\n- `tax: string`\n  Tax amount (20% UK VAT on discounted subtotal)\n\n- `total: string`\n  Final total (subtotal - discount + tax)\n\n- `unit_price: string`\n  Price per ticket (decimal string)\n\n- `buyer_email?: string`\n  Email of the ticket buyer\n\n- `coupon_code?: string`\n  Coupon code applied, if any\n\n### Returns\n\n- `{ id: string; buyer_name: string; currency: string; discount: string; match_id: string; purchase_method: 'online' | 'box_office' | 'will_call' | 'phone'; quantity: number; subtotal: string; tax: string; total: string; unit_price: string; buyer_email?: string; coupon_code?: string; }`\n  Full ticket sale model with ID.\n\n  - `id: string`\n  - `buyer_name: string`\n  - `currency: string`\n  - `discount: string`\n  - `match_id: string`\n  - `purchase_method: 'online' | 'box_office' | 'will_call' | 'phone'`\n  - `quantity: number`\n  - `subtotal: string`\n  - `tax: string`\n  - `total: string`\n  - `unit_price: string`\n  - `buyer_email?: string`\n  - `coupon_code?: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst ticketSale = await client.ticketSales.create({\n  buyer_name: 'Mae Green',\n  currency: 'GBP',\n  discount: '9.00',\n  match_id: 'match-001',\n  purchase_method: 'online',\n  quantity: 2,\n  subtotal: '90.00',\n  tax: '16.20',\n  total: '97.20',\n  unit_price: '45.00',\n});\n\nconsole.log(ticketSale);\n```",
    perLanguage: {
      cli: {
        method: 'ticket_sales create',
        example:
          "believe ticket-sales create \\\n  --api-key 'My API Key' \\\n  --buyer-name 'Mae Green' \\\n  --currency GBP \\\n  --discount 9.00 \\\n  --match-id match-001 \\\n  --purchase-method online \\\n  --quantity 2 \\\n  --subtotal 90.00 \\\n  --tax 16.20 \\\n  --total 97.20 \\\n  --unit-price 45.00",
      },
      go: {
        method: 'client.TicketSales.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tticketSale, err := client.TicketSales.New(context.TODO(), believe.TicketSaleNewParams{\n\t\tBuyerName:      "Mae Green",\n\t\tCurrency:       "GBP",\n\t\tDiscount:       "9.00",\n\t\tMatchID:        "match-001",\n\t\tPurchaseMethod: believe.PurchaseMethodOnline,\n\t\tQuantity:       2,\n\t\tSubtotal:       "90.00",\n\t\tTax:            "16.20",\n\t\tTotal:          "97.20",\n\t\tUnitPrice:      "45.00",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", ticketSale.ID)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/ticket-sales \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY" \\\n    -d \'{\n          "buyer_name": "Mae Green",\n          "currency": "GBP",\n          "discount": "9.00",\n          "match_id": "match-001",\n          "purchase_method": "online",\n          "quantity": 2,\n          "subtotal": "90.00",\n          "tax": "16.20",\n          "total": "97.20",\n          "unit_price": "45.00",\n          "buyer_email": "mae.green@example.com",\n          "coupon_code": "BELIEVE10"\n        }\'',
      },
      java: {
        method: 'ticketSales().create',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.ticketsales.PurchaseMethod;\nimport com.believe.api.models.ticketsales.TicketSale;\nimport com.believe.api.models.ticketsales.TicketSaleCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        TicketSaleCreateParams params = TicketSaleCreateParams.builder()\n            .buyerName("Mae Green")\n            .currency("GBP")\n            .discount("9.00")\n            .matchId("match-001")\n            .purchaseMethod(PurchaseMethod.ONLINE)\n            .quantity(2L)\n            .subtotal("90.00")\n            .tax("16.20")\n            .total("97.20")\n            .unitPrice("45.00")\n            .build();\n        TicketSale ticketSale = client.ticketSales().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'ticketSales().create',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.ticketsales.PurchaseMethod\nimport com.believe.api.models.ticketsales.TicketSale\nimport com.believe.api.models.ticketsales.TicketSaleCreateParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val params: TicketSaleCreateParams = TicketSaleCreateParams.builder()\n        .buyerName("Mae Green")\n        .currency("GBP")\n        .discount("9.00")\n        .matchId("match-001")\n        .purchaseMethod(PurchaseMethod.ONLINE)\n        .quantity(2L)\n        .subtotal("90.00")\n        .tax("16.20")\n        .total("97.20")\n        .unitPrice("45.00")\n        .build()\n    val ticketSale: TicketSale = client.ticketSales().create(params)\n}',
      },
      python: {
        method: 'ticket_sales.create',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nticket_sale = client.ticket_sales.create(\n    buyer_name="Mae Green",\n    currency="GBP",\n    discount="9.00",\n    match_id="match-001",\n    purchase_method="online",\n    quantity=2,\n    subtotal="90.00",\n    tax="16.20",\n    total="97.20",\n    unit_price="45.00",\n)\nprint(ticket_sale.id)',
      },
      ruby: {
        method: 'ticket_sales.create',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nticket_sale = believe.ticket_sales.create(\n  buyer_name: "Mae Green",\n  currency: "GBP",\n  discount: "9.00",\n  match_id: "match-001",\n  purchase_method: :online,\n  quantity: 2,\n  subtotal: "90.00",\n  tax: "16.20",\n  total: "97.20",\n  unit_price: "45.00"\n)\n\nputs(ticket_sale)',
      },
      typescript: {
        method: 'client.ticketSales.create',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst ticketSale = await client.ticketSales.create({\n  buyer_name: 'Mae Green',\n  currency: 'GBP',\n  discount: '9.00',\n  match_id: 'match-001',\n  purchase_method: 'online',\n  quantity: 2,\n  subtotal: '90.00',\n  tax: '16.20',\n  total: '97.20',\n  unit_price: '45.00',\n});\n\nconsole.log(ticketSale.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/ticket-sales/{ticket_sale_id}',
    httpMethod: 'delete',
    summary: 'Delete a ticket sale',
    description: 'Remove a ticket sale from the database.',
    stainlessPath: '(resource) ticket_sales > (method) delete',
    qualified: 'client.ticketSales.delete',
    params: ['ticket_sale_id: string;'],
    markdown:
      "## delete\n\n`client.ticketSales.delete(ticket_sale_id: string): void`\n\n**delete** `/ticket-sales/{ticket_sale_id}`\n\nRemove a ticket sale from the database.\n\n### Parameters\n\n- `ticket_sale_id: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nawait client.ticketSales.delete('ticket_sale_id')\n```",
    perLanguage: {
      cli: {
        method: 'ticket_sales delete',
        example:
          "believe ticket-sales delete \\\n  --api-key 'My API Key' \\\n  --ticket-sale-id ticket_sale_id",
      },
      go: {
        method: 'client.TicketSales.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.TicketSales.Delete(context.TODO(), "ticket_sale_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/ticket-sales/$TICKET_SALE_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'ticketSales().delete',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.ticketsales.TicketSaleDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        client.ticketSales().delete("ticket_sale_id");\n    }\n}',
      },
      kotlin: {
        method: 'ticketSales().delete',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.ticketsales.TicketSaleDeleteParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    client.ticketSales().delete("ticket_sale_id")\n}',
      },
      python: {
        method: 'ticket_sales.delete',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nclient.ticket_sales.delete(\n    "ticket_sale_id",\n)',
      },
      ruby: {
        method: 'ticket_sales.delete',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresult = believe.ticket_sales.delete("ticket_sale_id")\n\nputs(result)',
      },
      typescript: {
        method: 'client.ticketSales.delete',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.ticketSales.delete('ticket_sale_id');",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/ticket-sales/{ticket_sale_id}',
    httpMethod: 'get',
    summary: 'Get a ticket sale by ID',
    description: 'Retrieve detailed information about a specific ticket sale.',
    stainlessPath: '(resource) ticket_sales > (method) retrieve',
    qualified: 'client.ticketSales.retrieve',
    params: ['ticket_sale_id: string;'],
    response:
      "{ id: string; buyer_name: string; currency: string; discount: string; match_id: string; purchase_method: 'online' | 'box_office' | 'will_call' | 'phone'; quantity: number; subtotal: string; tax: string; total: string; unit_price: string; buyer_email?: string; coupon_code?: string; }",
    markdown:
      "## retrieve\n\n`client.ticketSales.retrieve(ticket_sale_id: string): { id: string; buyer_name: string; currency: string; discount: string; match_id: string; purchase_method: purchase_method; quantity: number; subtotal: string; tax: string; total: string; unit_price: string; buyer_email?: string; coupon_code?: string; }`\n\n**get** `/ticket-sales/{ticket_sale_id}`\n\nRetrieve detailed information about a specific ticket sale.\n\n### Parameters\n\n- `ticket_sale_id: string`\n\n### Returns\n\n- `{ id: string; buyer_name: string; currency: string; discount: string; match_id: string; purchase_method: 'online' | 'box_office' | 'will_call' | 'phone'; quantity: number; subtotal: string; tax: string; total: string; unit_price: string; buyer_email?: string; coupon_code?: string; }`\n  Full ticket sale model with ID.\n\n  - `id: string`\n  - `buyer_name: string`\n  - `currency: string`\n  - `discount: string`\n  - `match_id: string`\n  - `purchase_method: 'online' | 'box_office' | 'will_call' | 'phone'`\n  - `quantity: number`\n  - `subtotal: string`\n  - `tax: string`\n  - `total: string`\n  - `unit_price: string`\n  - `buyer_email?: string`\n  - `coupon_code?: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst ticketSale = await client.ticketSales.retrieve('ticket_sale_id');\n\nconsole.log(ticketSale);\n```",
    perLanguage: {
      cli: {
        method: 'ticket_sales retrieve',
        example:
          "believe ticket-sales retrieve \\\n  --api-key 'My API Key' \\\n  --ticket-sale-id ticket_sale_id",
      },
      go: {
        method: 'client.TicketSales.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tticketSale, err := client.TicketSales.Get(context.TODO(), "ticket_sale_id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", ticketSale.ID)\n}\n',
      },
      http: {
        example:
          'curl https://believe.cjav.dev/ticket-sales/$TICKET_SALE_ID \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'ticketSales().retrieve',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.ticketsales.TicketSale;\nimport com.believe.api.models.ticketsales.TicketSaleRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        TicketSale ticketSale = client.ticketSales().retrieve("ticket_sale_id");\n    }\n}',
      },
      kotlin: {
        method: 'ticketSales().retrieve',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.ticketsales.TicketSale\nimport com.believe.api.models.ticketsales.TicketSaleRetrieveParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val ticketSale: TicketSale = client.ticketSales().retrieve("ticket_sale_id")\n}',
      },
      python: {
        method: 'ticket_sales.retrieve',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nticket_sale = client.ticket_sales.retrieve(\n    "ticket_sale_id",\n)\nprint(ticket_sale.id)',
      },
      ruby: {
        method: 'ticket_sales.retrieve',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nticket_sale = believe.ticket_sales.retrieve("ticket_sale_id")\n\nputs(ticket_sale)',
      },
      typescript: {
        method: 'client.ticketSales.retrieve',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst ticketSale = await client.ticketSales.retrieve('ticket_sale_id');\n\nconsole.log(ticketSale.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/ticket-sales/{ticket_sale_id}',
    httpMethod: 'patch',
    summary: 'Update a ticket sale',
    description: 'Update specific fields of an existing ticket sale.',
    stainlessPath: '(resource) ticket_sales > (method) update',
    qualified: 'client.ticketSales.update',
    params: [
      'ticket_sale_id: string;',
      'buyer_email?: string;',
      'buyer_name?: string;',
      'coupon_code?: string;',
      'currency?: string;',
      'discount?: string;',
      'match_id?: string;',
      "purchase_method?: 'online' | 'box_office' | 'will_call' | 'phone';",
      'quantity?: number;',
      'subtotal?: string;',
      'tax?: string;',
      'total?: string;',
      'unit_price?: string;',
    ],
    response:
      "{ id: string; buyer_name: string; currency: string; discount: string; match_id: string; purchase_method: 'online' | 'box_office' | 'will_call' | 'phone'; quantity: number; subtotal: string; tax: string; total: string; unit_price: string; buyer_email?: string; coupon_code?: string; }",
    markdown:
      "## update\n\n`client.ticketSales.update(ticket_sale_id: string, buyer_email?: string, buyer_name?: string, coupon_code?: string, currency?: string, discount?: string, match_id?: string, purchase_method?: 'online' | 'box_office' | 'will_call' | 'phone', quantity?: number, subtotal?: string, tax?: string, total?: string, unit_price?: string): { id: string; buyer_name: string; currency: string; discount: string; match_id: string; purchase_method: purchase_method; quantity: number; subtotal: string; tax: string; total: string; unit_price: string; buyer_email?: string; coupon_code?: string; }`\n\n**patch** `/ticket-sales/{ticket_sale_id}`\n\nUpdate specific fields of an existing ticket sale.\n\n### Parameters\n\n- `ticket_sale_id: string`\n\n- `buyer_email?: string`\n\n- `buyer_name?: string`\n\n- `coupon_code?: string`\n\n- `currency?: string`\n\n- `discount?: string`\n\n- `match_id?: string`\n\n- `purchase_method?: 'online' | 'box_office' | 'will_call' | 'phone'`\n  How the ticket was purchased.\n\n- `quantity?: number`\n\n- `subtotal?: string`\n\n- `tax?: string`\n\n- `total?: string`\n\n- `unit_price?: string`\n\n### Returns\n\n- `{ id: string; buyer_name: string; currency: string; discount: string; match_id: string; purchase_method: 'online' | 'box_office' | 'will_call' | 'phone'; quantity: number; subtotal: string; tax: string; total: string; unit_price: string; buyer_email?: string; coupon_code?: string; }`\n  Full ticket sale model with ID.\n\n  - `id: string`\n  - `buyer_name: string`\n  - `currency: string`\n  - `discount: string`\n  - `match_id: string`\n  - `purchase_method: 'online' | 'box_office' | 'will_call' | 'phone'`\n  - `quantity: number`\n  - `subtotal: string`\n  - `tax: string`\n  - `total: string`\n  - `unit_price: string`\n  - `buyer_email?: string`\n  - `coupon_code?: string`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst ticketSale = await client.ticketSales.update('ticket_sale_id');\n\nconsole.log(ticketSale);\n```",
    perLanguage: {
      cli: {
        method: 'ticket_sales update',
        example:
          "believe ticket-sales update \\\n  --api-key 'My API Key' \\\n  --ticket-sale-id ticket_sale_id",
      },
      go: {
        method: 'client.TicketSales.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tticketSale, err := client.TicketSales.Update(\n\t\tcontext.TODO(),\n\t\t"ticket_sale_id",\n\t\tbelieve.TicketSaleUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", ticketSale.ID)\n}\n',
      },
      http: {
        example:
          "curl https://believe.cjav.dev/ticket-sales/$TICKET_SALE_ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $BELIEVE_API_KEY\" \\\n    -d '{}'",
      },
      java: {
        method: 'ticketSales().update',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.ticketsales.TicketSale;\nimport com.believe.api.models.ticketsales.TicketSaleUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        TicketSale ticketSale = client.ticketSales().update("ticket_sale_id");\n    }\n}',
      },
      kotlin: {
        method: 'ticketSales().update',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.ticketsales.TicketSale\nimport com.believe.api.models.ticketsales.TicketSaleUpdateParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val ticketSale: TicketSale = client.ticketSales().update("ticket_sale_id")\n}',
      },
      python: {
        method: 'ticket_sales.update',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nticket_sale = client.ticket_sales.update(\n    ticket_sale_id="ticket_sale_id",\n)\nprint(ticket_sale.id)',
      },
      ruby: {
        method: 'ticket_sales.update',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nticket_sale = believe.ticket_sales.update("ticket_sale_id")\n\nputs(ticket_sale)',
      },
      typescript: {
        method: 'client.ticketSales.update',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst ticketSale = await client.ticketSales.update('ticket_sale_id');\n\nconsole.log(ticketSale.id);",
      },
    },
  },
  {
    name: 'check',
    endpoint: '/health',
    httpMethod: 'get',
    summary: 'Health Check',
    description: 'Check if the API is running and healthy.',
    stainlessPath: '(resource) health > (method) check',
    qualified: 'client.health.check',
    response: 'object',
    markdown:
      "## check\n\n`client.health.check(): object`\n\n**get** `/health`\n\nCheck if the API is running and healthy.\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst response = await client.health.check();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'health check',
        example: "believe health check \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Health.Check',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Health.Check(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example: 'curl https://believe.cjav.dev/health \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'health().check',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.health.HealthCheckParams;\nimport com.believe.api.models.health.HealthCheckResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        HealthCheckResponse response = client.health().check();\n    }\n}',
      },
      kotlin: {
        method: 'health().check',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.health.HealthCheckParams\nimport com.believe.api.models.health.HealthCheckResponse\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val response: HealthCheckResponse = client.health().check()\n}',
      },
      python: {
        method: 'health.check',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.health.check()\nprint(response)',
      },
      ruby: {
        method: 'health.check',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresponse = believe.health.check\n\nputs(response)',
      },
      typescript: {
        method: 'client.health.check',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.health.check();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/version',
    httpMethod: 'get',
    summary: 'API Version Information',
    description: 'Get detailed information about API versioning.',
    stainlessPath: '(resource) version > (method) retrieve',
    qualified: 'client.version.retrieve',
    response: 'object',
    markdown:
      "## retrieve\n\n`client.version.retrieve(): object`\n\n**get** `/version`\n\nGet detailed information about API versioning.\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nconst version = await client.version.retrieve();\n\nconsole.log(version);\n```",
    perLanguage: {
      cli: {
        method: 'version retrieve',
        example: "believe version retrieve \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Version.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tversion, err := client.Version.Get(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", version)\n}\n',
      },
      http: {
        example: 'curl https://believe.cjav.dev/version \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'version().retrieve',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.version.VersionRetrieveParams;\nimport com.believe.api.models.version.VersionRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        VersionRetrieveResponse version = client.version().retrieve();\n    }\n}',
      },
      kotlin: {
        method: 'version().retrieve',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.version.VersionRetrieveParams\nimport com.believe.api.models.version.VersionRetrieveResponse\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    val version: VersionRetrieveResponse = client.version().retrieve()\n}',
      },
      python: {
        method: 'version.retrieve',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nversion = client.version.retrieve()\nprint(version)',
      },
      ruby: {
        method: 'version.retrieve',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nversion = believe.version.retrieve\n\nputs(version)',
      },
      typescript: {
        method: 'client.version.retrieve',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst version = await client.version.retrieve();\n\nconsole.log(version);",
      },
    },
  },
  {
    name: 'test',
    endpoint: '/ws/test',
    httpMethod: 'get',
    summary: 'WebSocket Test Endpoint',
    description:
      "Simple WebSocket test endpoint for connectivity testing.\n\nConnect to test WebSocket functionality. The server will:\n1. Send a welcome message on connection\n2. Echo back any message you send\n\n## Example\n\n```javascript\nconst ws = new WebSocket('ws://localhost:8000/ws/test');\nws.onmessage = (event) => console.log(event.data);\nws.send('Hello!');  // Server responds with echo\n```\n",
    stainlessPath: '(resource) client.ws > (method) test',
    qualified: 'client.client.ws.test',
    markdown:
      "## test\n\n`client.client.ws.test(): void`\n\n**get** `/ws/test`\n\nSimple WebSocket test endpoint for connectivity testing.\n\nConnect to test WebSocket functionality. The server will:\n1. Send a welcome message on connection\n2. Echo back any message you send\n\n## Example\n\n```javascript\nconst ws = new WebSocket('ws://localhost:8000/ws/test');\nws.onmessage = (event) => console.log(event.data);\nws.send('Hello!');  // Server responds with echo\n```\n\n\n### Example\n\n```typescript\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe();\n\nawait client.client.ws.test()\n```",
    perLanguage: {
      cli: {
        method: 'ws test',
        example: "believe client:ws test \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Client.Ws.Test',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Client.Ws.Test(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example: 'curl https://believe.cjav.dev/ws/test \\\n    -H "Authorization: Bearer $BELIEVE_API_KEY"',
      },
      java: {
        method: 'client().ws().test',
        example:
          'package com.believe.api.example;\n\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.client.ws.WTestParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BelieveClient client = BelieveOkHttpClient.fromEnv();\n\n        client.client().ws().test();\n    }\n}',
      },
      kotlin: {
        method: 'client().ws().test',
        example:
          'package com.believe.api.example\n\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.client.ws.WTestParams\n\nfun main() {\n    val client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\n    client.client().ws().test()\n}',
      },
      python: {
        method: 'client.ws.test',
        example:
          'import os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\nclient.client.ws.test()',
      },
      ruby: {
        method: 'client_.ws.test_',
        example:
          'require "believe"\n\nbelieve = ::Believe::Client.new(api_key: "My API Key")\n\nresult = believe.client_.ws.test_\n\nputs(result)',
      },
      typescript: {
        method: 'client.client.ws.test',
        example:
          "import Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.client.ws.test();",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'python',
    content:
      '# Believe Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/believe.svg?label=pypi%20(stable))](https://pypi.org/project/believe/)\n\nThe Believe Python library provides convenient access to the Believe REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Believe MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40cjavdev%2Fbelieve-mcp&config=eyJuYW1lIjoiQGNqYXZkZXYvYmVsaWV2ZS1tY3AiLCJ0cmFuc3BvcnQiOiJodHRwIiwidXJsIjoiaHR0cHM6Ly9iZWxpZXZlLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7IngtYmVsaWV2ZS1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40cjavdev%2Fbelieve-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbelieve.stlmcp.com%22%2C%22headers%22%3A%7B%22x-believe-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\n The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from the production repo\npip install git+ssh://git@github.com/cjavdev/believe-python.git\n```\n> [!NOTE]\n> Once this package is [published to PyPI](https://www.stainless.com/docs/guides/publish), this will become: `pip install believe`\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom believe import Believe\n\nclient = Believe(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\n\npage = client.characters.list()\nprint(page.data)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `BELIEVE_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncBelieve` instead of `Believe` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom believe import AsyncBelieve\n\nclient = AsyncBelieve(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  page = await client.characters.list()\n  print(page.data)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from the production repo\npip install \'believe[aiohttp] @ git+ssh://git@github.com/cjavdev/believe-python.git\'\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom believe import DefaultAioHttpClient\nfrom believe import AsyncBelieve\n\nasync def main() -> None:\n  async with AsyncBelieve(\n    api_key=os.environ.get("BELIEVE_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    page = await client.characters.list()\n    print(page.data)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n## Pagination\n\nList methods in the Believe API are paginated.\n\nThis library provides auto-paginating iterators with each list response, so you do not have to request successive pages manually:\n\n```python\nfrom believe import Believe\n\nclient = Believe()\n\nall_characters = []\n# Automatically fetches more pages as needed.\nfor character in client.characters.list():\n    # Do something with character here\n    all_characters.append(character)\nprint(all_characters)\n```\n\nOr, asynchronously:\n\n```python\nimport asyncio\nfrom believe import AsyncBelieve\n\nclient = AsyncBelieve()\n\nasync def main() -> None:\n    all_characters = []\n    # Iterate through items across all pages, issuing requests as needed.\n    async for character in client.characters.list():\n        all_characters.append(character)\n    print(all_characters)\n\nasyncio.run(main())\n```\n\nAlternatively, you can use the `.has_next_page()`, `.next_page_info()`, or  `.get_next_page()` methods for more granular control working with pages:\n\n```python\nfirst_page = await client.characters.list()\nif first_page.has_next_page():\n    print(f"will fetch next page using these details: {first_page.next_page_info()}")\n    next_page = await first_page.get_next_page()\n    print(f"number of items we just fetched: {len(next_page.data)}")\n\n# Remove `await` for non-async usage.\n```\n\nOr just work directly with the returned data:\n\n```python\nfirst_page = await client.characters.list()\n\nprint(f"the current start offset for this page: {first_page.skip}") # => "the current start offset for this page: 1"\nfor character in first_page.data:\n    print(character.id)\n\n# Remove `await` for non-async usage.\n```\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom believe import Believe\n\nclient = Believe()\n\ncharacter = client.characters.create(\n    background="Legendary midfielder for Chelsea and AFC Richmond, now assistant coach. Known for his gruff exterior hiding a heart of gold.",\n    emotional_stats={\n        "curiosity": 40,\n        "empathy": 85,\n        "optimism": 45,\n        "resilience": 95,\n        "vulnerability": 60,\n    },\n    name="Roy Kent",\n    personality_traits=["intense", "loyal", "secretly caring", "profane"],\n    role="coach",\n)\nprint(character.emotional_stats)\n```\n\n## File uploads\n\nRequest parameters that correspond to file uploads can be passed as `bytes`, or a [`PathLike`](https://docs.python.org/3/library/os.html#os.PathLike) instance or a tuple of `(filename, contents, media type)`.\n\n```python\nfrom pathlib import Path\nfrom believe import Believe\n\nclient = Believe()\n\nclient.teams.logo.upload(\n    team_id="team_id",\n    file=Path("/path/to/file"),\n)\n```\n\nThe async client uses the exact same interface. If you pass a [`PathLike`](https://docs.python.org/3/library/os.html#os.PathLike) instance, the file contents will be read asynchronously automatically.\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `believe.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `believe.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `believe.APIError`.\n\n```python\nimport believe\nfrom believe import Believe\n\nclient = Believe()\n\ntry:\n    client.characters.list()\nexcept believe.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept believe.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept believe.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom believe import Believe\n\n# Configure the default for all requests:\nclient = Believe(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).characters.list()\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom believe import Believe\n\n# Configure the default for all requests:\nclient = Believe(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = Believe(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).characters.list()\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `BELIEVE_LOG` to `info`.\n\n```shell\n$ export BELIEVE_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom believe import Believe\n\nclient = Believe()\nresponse = client.characters.with_raw_response.list()\nprint(response.headers.get(\'X-My-Header\'))\n\ncharacter = response.parse()  # get the object that `characters.list()` would have returned\nprint(character.id)\n```\n\nThese methods return an [`APIResponse`](https://github.com/cjavdev/believe-python/tree/main/src/believe/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/cjavdev/believe-python/tree/main/src/believe/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.characters.with_streaming_response.list() as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom believe import Believe, DefaultHttpxClient\n\nclient = Believe(\n    # Or use the `BELIEVE_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom believe import Believe\n\nwith Believe() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/cjavdev/believe-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport believe\nprint(believe.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'go',
    content:
      '# Believe Go API Library\n\n<a href="https://pkg.go.dev/github.com/cjavdev/believe-go"><img src="https://pkg.go.dev/badge/github.com/cjavdev/believe-go.svg" alt="Go Reference"></a>\n\nThe Believe Go library provides convenient access to the Believe REST API\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Believe MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40cjavdev%2Fbelieve-mcp&config=eyJuYW1lIjoiQGNqYXZkZXYvYmVsaWV2ZS1tY3AiLCJ0cmFuc3BvcnQiOiJodHRwIiwidXJsIjoiaHR0cHM6Ly9iZWxpZXZlLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7IngtYmVsaWV2ZS1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40cjavdev%2Fbelieve-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbelieve.stlmcp.com%22%2C%22headers%22%3A%7B%22x-believe-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n```go\nimport (\n\t"github.com/cjavdev/believe-go" // imported as SDK_PackageName\n)\n```\n\n<!-- x-release-please-end -->\n\nOr to pin the version:\n\n<!-- x-release-please-start-version -->\n\n```sh\ngo get -u \'github.com/cjavdev/believe-go@v0.0.1\'\n```\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/cjavdev/believe-go"\n\t"github.com/cjavdev/believe-go/option"\n)\n\nfunc main() {\n\tclient := believe.NewClient(\n\t\toption.WithAPIKey("My API Key"), // defaults to os.LookupEnv("BELIEVE_API_KEY")\n\t)\n\tpage, err := client.Characters.List(context.TODO(), believe.CharacterListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.Characters.List(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/cjavdev/believe-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n```go\niter := client.Characters.ListAutoPaging(context.TODO(), believe.CharacterListParams{})\n// Automatically fetches more pages as needed.\nfor iter.Next() {\n\tcharacter := iter.Current()\n\tfmt.Printf("%+v\\n", character)\n}\nif err := iter.Err(); err != nil {\n\tpanic(err.Error())\n}\n```\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n```go\npage, err := client.Characters.List(context.TODO(), believe.CharacterListParams{})\nfor page != nil {\n\tfor _, character := range page.Data {\n\t\tfmt.Printf("%+v\\n", character)\n\t}\n\tpage, err = page.GetNextPage()\n}\nif err != nil {\n\tpanic(err.Error())\n}\n```\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.Characters.List(context.TODO(), believe.CharacterListParams{})\nif err != nil {\n\tvar apierr *believe.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/characters": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.Characters.List(\n\tctx,\n\tbelieve.CharacterListParams{},\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n```go\n// A file from the file system\nfile, err := os.Open("/path/to/file")\nbelieve.TeamLogoUploadParams{\n\tFile: file,\n}\n\n// A file from a string\nbelieve.TeamLogoUploadParams{\n\tFile: strings.NewReader("my file contents"),\n}\n\n// With a custom filename and contentType\nbelieve.TeamLogoUploadParams{\n\tFile: believe.File(strings.NewReader(`{"hello": "foo"}`), "file.go", "application/json"),\n}\n```\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := believe.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.Characters.List(\n\tcontext.TODO(),\n\tbelieve.CharacterListParams{},\n\toption.WithMaxRetries(5),\n)\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\npage, err := client.Characters.List(\n\tcontext.TODO(),\n\tbelieve.CharacterListParams{},\n\toption.WithResponseInto(&response),\n)\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", page)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/cjavdev/believe-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'terraform',
    content:
      '# Believe Terraform Provider\n\nThe [Believe Terraform provider](https://registry.terraform.io/providers/cjavdev/believe/latest/docs) provides convenient access to\nthe Believe REST API from Terraform.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## Requirements\n\nThis provider requires Terraform CLI 1.0 or later. You can [install it for your system](https://developer.hashicorp.com/terraform/install)\non Hashicorp\'s website.\n\n## Usage\n\nAdd the following to your `main.tf` file:\n\n<!-- x-release-please-start-version -->\n\n```hcl\n# Declare the provider and version\nterraform {\n  required_providers {\n    SDK_ProviderTypeName = {\n      source  = "cjavdev/believe"\n      version = "~> 0.0.1"\n    }\n  }\n}\n\n# Initialize the provider\nprovider "believe" {\n  api_key = "My API Key" # or set BELIEVE_API_KEY env variable\n}\n\n# Configure a resource\nresource "believe_character" "example_character" {\n\n}\n```\n\n<!-- x-release-please-end -->\n\nInitialize your project by running `terraform init` in the directory.\n\nAdditional examples can be found in the [./examples](./examples) folder within this repository, and you can\nrefer to the full documentation on [the Terraform Registry](https://registry.terraform.io/providers/cjavdev/believe/latest/docs).\n\n### Provider Options\nWhen you initialize the provider, the following options are supported. It is recommended to use environment variables for sensitive values like access tokens.\nIf an environment variable is provided, then the option does not need to be set in the terraform source.\n\n| Property | Environment variable | Required | Default value |\n| -------- | -------------------- | -------- | ------------- |\n| api_key  | `BELIEVE_API_KEY`    | true     | —             |\n\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/cjavdev/terraform-provider-believe/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Believe TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/@cjavdev/believe.svg?label=npm%20(stable))](https://npmjs.org/package/@cjavdev/believe) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@cjavdev/believe)\n\nThis library provides convenient access to the Believe REST API from server-side TypeScript or JavaScript.\n\n\n\nThe full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Believe MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40cjavdev%2Fbelieve-mcp&config=eyJuYW1lIjoiQGNqYXZkZXYvYmVsaWV2ZS1tY3AiLCJ0cmFuc3BvcnQiOiJodHRwIiwidXJsIjoiaHR0cHM6Ly9iZWxpZXZlLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7IngtYmVsaWV2ZS1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40cjavdev%2Fbelieve-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbelieve.stlmcp.com%22%2C%22headers%22%3A%7B%22x-believe-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install @cjavdev/believe\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst page = await client.characters.list();\nconst character = page.data[0];\n\nconsole.log(character.id);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  apiKey: process.env['BELIEVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst [character]: [Believe.Character] = await client.characters.list();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n## File uploads\n\nRequest parameters that correspond to file uploads can be passed in many different forms:\n- `File` (or an object with the same structure)\n- a `fetch` `Response` (or an object with the same structure)\n- an `fs.ReadStream`\n- the return value of our `toFile` helper\n\n```ts\nimport fs from 'fs';\nimport Believe, { toFile } from '@cjavdev/believe';\n\nconst client = new Believe();\n\n// If you have access to Node `fs` we recommend using `fs.createReadStream()`:\nawait client.teams.logo.upload('team_id', { file: fs.createReadStream('/path/to/file') });\n\n// Or if you have the web `File` API you can pass a `File` instance:\nawait client.teams.logo.upload('team_id', { file: new File(['my bytes'], 'file') });\n\n// You can also pass a `fetch` `Response`:\nawait client.teams.logo.upload('team_id', { file: await fetch('https://somesite/file') });\n\n// Finally, if none of the above are convenient, you can use our `toFile` helper:\nawait client.teams.logo.upload('team_id', { file: await toFile(Buffer.from('my bytes'), 'file') });\nawait client.teams.logo.upload('team_id', {\n  file: await toFile(new Uint8Array([0, 1, 2]), 'file'),\n});\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst page = await client.characters.list().catch(async (err) => {\n  if (err instanceof Believe.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Believe({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.characters.list({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Believe({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.characters.list({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n## Auto-pagination\n\nList methods in the Believe API are paginated.\nYou can use the `for await … of` syntax to iterate through items across all pages:\n\n```ts\nasync function fetchAllCharacters(params) {\n  const allCharacters = [];\n  // Automatically fetches more pages as needed.\n  for await (const character of client.characters.list()) {\n    allCharacters.push(character);\n  }\n  return allCharacters;\n}\n```\n\nAlternatively, you can request a single page at a time:\n\n```ts\nlet page = await client.characters.list();\nfor (const character of page.data) {\n  console.log(character);\n}\n\n// Convenience methods are provided for manually paginating:\nwhile (page.hasNextPage()) {\n  page = await page.getNextPage();\n  // ...\n}\n```\n\n\n\n## Advanced Usage\n\n### Tree shaking\n\nThis library supports tree shaking to reduce bundle size. Instead of importing the full client, you can create a client only including the API resources you need:\n\n~~~ts\nimport { createClient } from '@cjavdev/believe/tree-shakable';\nimport { Characters } from '@cjavdev/believe/resources/characters';\nimport { BaseLogo } from '@cjavdev/believe/resources/teams/logo';\n\nconst client = createClient({\n  // Specify the resources you'd like to use ...\n  resources: [Characters, BaseLogo],\n});\n\n// ... then make API calls as usual.\nconst page = await client.characters.list();\nconst character = page.data[0]\nconst fileUpload = await client.teams.logo.upload('team_id', { file: fs.createReadStream('path/to/file') });\n~~~\n\nEach API resource has two versions, the full resource (e.g., `Characters`) which includes all subresources, and the base resource (e.g., `BaseCharacters`) which does not.\n\nThe tree-shaken client is fully typed, so TypeScript will provide accurate autocomplete and prevent access to resources not included in your configuration.\nThe `createClient` function automatically infers the correct type, but you can also use the `PartialBelieve` type explicitly:\n\n~~~ts\nimport Believe from '@cjavdev/believe';\nimport { createClient, type PartialBelieve } from '@cjavdev/believe/tree-shakable';\nimport { BaseCharacters } from '@cjavdev/believe/resources/characters';\n\n// Explicit variable type\nconst client: PartialBelieve<{ characters: BaseCharacters }> = createClient({\n  resources: [BaseCharacters],\n  /* ... */\n});\n\n// Function parameter type\nasync function main(client: PartialBelieve<{ characters: BaseCharacters }>) {\n  const page = await client.characters.list();\n  const character = page.data[0]\n}\n\n// Works with any client that has the characters resource\nconst treeShakableClient = createClient({\n  resources: [BaseCharacters],\n  /* ... */\n});\nconst fullClient = new Believe(/* ... */);\n\nmain(treeShakableClient); // Works\nmain(fullClient); // Also works\n~~~\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Believe();\n\nconst response = await client.characters.list().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: page, response: raw } = await client.characters.list().withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nfor await (const character of page) {\n  console.log(character.id);\n}\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `BELIEVE_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Believe from '@cjavdev/believe';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Believe({\n  logger: logger.child({ name: 'Believe' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.characters.list({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Believe from '@cjavdev/believe';\nimport fetch from 'my-fetch';\n\nconst client = new Believe({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Believe from '@cjavdev/believe';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Believe({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Believe from '@cjavdev/believe';\n\nconst client = new Believe({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Believe from 'npm:@cjavdev/believe';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Believe({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/cjavdev/believe-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n- Web browsers: disabled by default to avoid exposing your secret API credentials. Enable browser support by explicitly setting `dangerouslyAllowBrowser` to true'.\n<details>\n  <summary>More explanation</summary>\n\n  ### Why is this dangerous?\n  Enabling the `dangerouslyAllowBrowser` option can be dangerous because it exposes your secret API credentials in the client-side code. Web browsers are inherently less secure than server environments,\n  any user with access to the browser can potentially inspect, extract, and misuse these credentials. This could lead to unauthorized access using your credentials and potentially compromise sensitive data or functionality.\n  ### When might this not be dangerous?\n  In certain scenarios where enabling browser support might not pose significant risks:\n  - Internal Tools: If the application is used solely within a controlled internal environment where the users are trusted, the risk of credential exposure can be mitigated.\n  - Public APIs with Limited Scope: If your API has very limited scope and the exposed credentials do not grant access to sensitive data or critical operations, the potential impact of exposure is reduced.\n  - Development or debugging purpose: Enabling this feature temporarily might be acceptable, provided the credentials are short-lived, aren't also used in production environments, or are frequently rotated.\n\n</details>\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
  {
    language: 'ruby',
    content:
      '# Believe Ruby API library\n\nThe Believe Ruby library provides convenient access to the Believe REST API from any Ruby 3.2.0+ application. It ships with comprehensive types & docstrings in Yard, RBS, and RBI – [see below](https://github.com/cjavdev/believe-ruby#Sorbet) for usage with Sorbet. The standard library\'s `net/http` is used as the HTTP transport, with connection pooling via the `connection_pool` gem.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Believe MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40cjavdev%2Fbelieve-mcp&config=eyJuYW1lIjoiQGNqYXZkZXYvYmVsaWV2ZS1tY3AiLCJ0cmFuc3BvcnQiOiJodHRwIiwidXJsIjoiaHR0cHM6Ly9iZWxpZXZlLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7IngtYmVsaWV2ZS1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40cjavdev%2Fbelieve-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbelieve.stlmcp.com%22%2C%22headers%22%3A%7B%22x-believe-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nDocumentation for releases of this gem can be found [on RubyDoc](https://gemdocs.org/gems/believe).\n\n\n\n## Installation\n\nTo use this gem, install via Bundler by adding the following to your application\'s `Gemfile`:\n\n<!-- x-release-please-start-version -->\n\n```ruby\ngem "believe", "~> 0.0.1"\n```\n\n<!-- x-release-please-end -->\n\n## Usage\n\n```ruby\nrequire "bundler/setup"\nrequire "believe"\n\nbelieve = ::Believe::Client.new(\n  api_key: ENV["BELIEVE_API_KEY"] # This is the default and can be omitted\n)\n\npage = believe.characters.list\n\nputs(page.id)\n```\n\n\n\n### Pagination\n\nList methods in the Believe API are paginated.\n\nThis library provides auto-paginating iterators with each list response, so you do not have to request successive pages manually:\n\n```ruby\npage = believe.characters.list\n\n# Fetch single item from page.\ncharacter = page.data[0]\nputs(character.id)\n\n# Automatically fetches more pages as needed.\npage.auto_paging_each do |character|\n  puts(character.id)\nend\n```\n\nAlternatively, you can use the `#next_page?` and `#next_page` methods for more granular control working with pages.\n\n```ruby\nif page.next_page?\n  new_page = page.next_page\n  puts(new_page.data[0].id)\nend\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads can be passed as raw contents, a [`Pathname`](https://rubyapi.org/3.2/o/pathname) instance, [`StringIO`](https://rubyapi.org/3.2/o/stringio), or more.\n\n```ruby\nrequire "pathname"\n\n# Use `Pathname` to send the filename and/or avoid paging a large file into memory:\nfile_upload = believe.teams.logo.upload(file: Pathname("/path/to/file"))\n\n# Alternatively, pass file contents or a `StringIO` directly:\nfile_upload = believe.teams.logo.upload(file: File.read("/path/to/file"))\n\n# Or, to control the filename and/or content type:\nfile = ::Believe::FilePart.new(File.read("/path/to/file"), filename: "/path/to/file", content_type: "…")\nfile_upload = believe.teams.logo.upload(file: file)\n\nputs(file_upload.file_id)\n```\n\nNote that you can also pass a raw `IO` descriptor, but this disables retries, as the library can\'t be sure if the descriptor is a file or pipe (which cannot be rewound).\n\n### Handling errors\n\nWhen the library is unable to connect to the API, or if the API returns a non-success status code (i.e., 4xx or 5xx response), a subclass of `::Believe::Errors::APIError` will be thrown:\n\n```ruby\nbegin\n  character = believe.characters.list\nrescue ::Believe::Errors::APIConnectionError => e\n  puts("The server could not be reached")\n  puts(e.cause)  # an underlying Exception, likely raised within `net/http`\nrescue ::Believe::Errors::RateLimitError => e\n  puts("A 429 status code was received; we should back off a bit.")\nrescue ::Believe::Errors::APIStatusError => e\n  puts("Another non-200-range status code was received")\n  puts(e.status)\nend\n```\n\nError codes are as follows:\n\n| Cause            | Error Type                 |\n| ---------------- | -------------------------- |\n| HTTP 400         | `BadRequestError`          |\n| HTTP 401         | `AuthenticationError`      |\n| HTTP 403         | `PermissionDeniedError`    |\n| HTTP 404         | `NotFoundError`            |\n| HTTP 409         | `ConflictError`            |\n| HTTP 422         | `UnprocessableEntityError` |\n| HTTP 429         | `RateLimitError`           |\n| HTTP >= 500      | `InternalServerError`      |\n| Other HTTP error | `APIStatusError`           |\n| Timeout          | `APITimeoutError`          |\n| Network error    | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\n\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict, 429 Rate Limit, >=500 Internal errors, and timeouts will all be retried by default.\n\nYou can use the `max_retries` option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nbelieve = ::Believe::Client.new(\n  max_retries: 0 # default is 2\n)\n\n# Or, configure per-request:\nbelieve.characters.list(request_options: {max_retries: 5})\n```\n\n### Timeouts\n\nBy default, requests will time out after 60 seconds. You can use the timeout option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nbelieve = ::Believe::Client.new(\n  timeout: nil # default is 60\n)\n\n# Or, configure per-request:\nbelieve.characters.list(request_options: {timeout: 5})\n```\n\nOn timeout, `::Believe::Errors::APITimeoutError` is raised.\n\nNote that requests that time out are retried by default.\n\n## Advanced concepts\n\n### BaseModel\n\nAll parameter and response objects inherit from `::Believe::Internal::Type::BaseModel`, which provides several conveniences, including:\n\n1. All fields, including unknown ones, are accessible with `obj[:prop]` syntax, and can be destructured with `obj => {prop: prop}` or pattern-matching syntax.\n\n2. Structural equivalence for equality; if two API calls return the same values, comparing the responses with == will return true.\n\n3. Both instances and the classes themselves can be pretty-printed.\n\n4. Helpers such as `#to_h`, `#deep_to_h`, `#to_json`, and `#to_yaml`.\n\n### Making custom or undocumented requests\n\n#### Undocumented properties\n\nYou can send undocumented parameters to any endpoint, and read undocumented response properties, like so:\n\nNote: the `extra_` parameters of the same name overrides the documented parameters.\n\n```ruby\npage =\n  believe.characters.list(\n    request_options: {\n      extra_query: {my_query_parameter: value},\n      extra_body: {my_body_parameter: value},\n      extra_headers: {"my-header": value}\n    }\n  )\n\nputs(page[:my_undocumented_property])\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` under the `request_options:` parameter when making a request, as seen in the examples above.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints while retaining the benefit of auth, retries, and so on, you can make requests using `client.request`, like so:\n\n```ruby\nresponse = client.request(\n  method: :post,\n  path: \'/undocumented/endpoint\',\n  query: {"dog": "woof"},\n  headers: {"useful-header": "interesting-value"},\n  body: {"hello": "world"}\n)\n```\n\n### Concurrency & connection pooling\n\nThe `::Believe::Client` instances are threadsafe, but are only are fork-safe when there are no in-flight HTTP requests.\n\nEach instance of `::Believe::Client` has its own HTTP connection pool with a default size of 99. As such, we recommend instantiating the client once per application in most settings.\n\nWhen all available connections from the pool are checked out, requests wait for a new connection to become available, with queue time counting towards the request timeout.\n\nUnless otherwise specified, other classes in the SDK do not have locks protecting their underlying data structure.\n\n## Sorbet\n\nThis library provides comprehensive [RBI](https://sorbet.org/docs/rbi) definitions, and has no dependency on sorbet-runtime.\n\nYou can provide typesafe request parameters like so:\n\n```ruby\nbelieve.characters.list \n```\n\nOr, equivalently:\n\n```ruby\n# Hashes work, but are not typesafe:\nbelieve.characters.list\n\n# You can also splat a full Params class:\nparams = ::Believe::CharacterListParams.new\nbelieve.characters.list(**params)\n```\n\n### Enums\n\nSince this library does not depend on `sorbet-runtime`, it cannot provide [`T::Enum`](https://sorbet.org/docs/tenum) instances. Instead, we provide "tagged symbols" instead, which is always a primitive at runtime:\n\n```ruby\n# :coach\nputs(::Believe::CharacterRole::COACH)\n\n# Revealed type: `T.all(::Believe::CharacterRole, Symbol)`\nT.reveal_type(::Believe::CharacterRole::COACH)\n```\n\nEnum parameters have a "relaxed" type, so you can either pass in enum constants or their literal value:\n\n```ruby\n# Using the enum constants preserves the tagged type information:\nbelieve.characters.create(\n  role: ::Believe::CharacterRole::COACH,\n  # …\n)\n\n# Literal values are also permissible:\nbelieve.characters.create(\n  role: :coach,\n  # …\n)\n```\n\n## Versioning\n\nThis package follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions. As the library is in initial development and has a major version of `0`, APIs may change at any time.\n\nThis package considers improvements to the (non-runtime) `*.rbi` and `*.rbs` type definitions to be non-breaking changes.\n\n## Requirements\n\nRuby 3.2.0 or higher.\n\n## Contributing\n\nSee [the contributing documentation](https://github.com/cjavdev/believe-ruby/tree/main/CONTRIBUTING.md).\n',
  },
  {
    language: 'java',
    content:
      '# Believe Java API Library\n\n<!-- x-release-please-start-version -->\n[![Maven Central](https://img.shields.io/maven-central/v/com.believe.api/believe-java)](https://central.sonatype.com/artifact/com.believe.api/believe-java/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.believe.api/believe-java/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.believe.api/believe-java/0.0.1)\n<!-- x-release-please-end -->\n\nThe Believe Java SDK provides convenient access to the Believe REST API   from applications written in Java.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Believe MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40cjavdev%2Fbelieve-mcp&config=eyJuYW1lIjoiQGNqYXZkZXYvYmVsaWV2ZS1tY3AiLCJ0cmFuc3BvcnQiOiJodHRwIiwidXJsIjoiaHR0cHM6Ly9iZWxpZXZlLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7IngtYmVsaWV2ZS1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40cjavdev%2Fbelieve-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbelieve.stlmcp.com%22%2C%22headers%22%3A%7B%22x-believe-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n<!-- x-release-please-start-version -->\n\nJavadocs are available on [javadoc.io](https://javadoc.io/doc/com.believe.api/believe-java/0.0.1).\n\n<!-- x-release-please-end -->\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n### Gradle\n\n~~~kotlin\nimplementation("com.believe.api:believe-java:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.believe.api</groupId>\n  <artifactId>believe-java</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```java\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.characters.CharacterListPage;\nimport com.believe.api.models.characters.CharacterListParams;\n\n// Configures using the `believe.apiKey` and `believe.baseUrl` system properties\n// Or configures using the `BELIEVE_API_KEY` and `BELIEVE_BASE_URL` environment variables\nBelieveClient client = BelieveOkHttpClient.fromEnv();\n\nCharacterListPage page = client.characters().list();\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```java\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\n\n// Configures using the `believe.apiKey` and `believe.baseUrl` system properties\n// Or configures using the `BELIEVE_API_KEY` and `BELIEVE_BASE_URL` environment variables\nBelieveClient client = BelieveOkHttpClient.fromEnv();\n```\n\nOr manually:\n\n```java\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\n\nBelieveClient client = BelieveOkHttpClient.builder()\n    .apiKey("My API Key")\n    .build();\n```\n\nOr using a combination of the two approaches:\n\n```java\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\n\nBelieveClient client = BelieveOkHttpClient.builder()\n    // Configures using the `believe.apiKey` and `believe.baseUrl` system properties\n    // Or configures using the `BELIEVE_API_KEY` and `BELIEVE_BASE_URL` environment variables\n    .fromEnv()\n    .apiKey("My API Key")\n    .build();\n```\n\nSee this table for the available options:\n\n| Setter    | System property   | Environment variable | Required | Default value                |\n| --------- | ----------------- | -------------------- | -------- | ---------------------------- |\n| `apiKey`  | `believe.apiKey`  | `BELIEVE_API_KEY`    | true     | -                            |\n| `baseUrl` | `believe.baseUrl` | `BELIEVE_BASE_URL`   | true     | `"https://believe.cjav.dev"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```java\nimport com.believe.api.client.BelieveClient;\n\nBelieveClient clientWithOptions = client.withOptions(optionsBuilder -> {\n    optionsBuilder.baseUrl("https://example.com");\n    optionsBuilder.maxRetries(42);\n});\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Believe API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Java class.\n\nFor example, `client.characters().list(...)` should be called with an instance of `CharacterListParams`, and it     will return an instance of `CharacterListPage`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```java\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport com.believe.api.models.characters.CharacterListPageAsync;\nimport com.believe.api.models.characters.CharacterListParams;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `believe.apiKey` and `believe.baseUrl` system properties\n// Or configures using the `BELIEVE_API_KEY` and `BELIEVE_BASE_URL` environment variables\nBelieveClient client = BelieveOkHttpClient.fromEnv();\n\nCompletableFuture<CharacterListPageAsync> page = client.async().characters().list();\n```\n\nOr create an asynchronous client from the beginning:\n\n```java\nimport com.believe.api.client.BelieveClientAsync;\nimport com.believe.api.client.okhttp.BelieveOkHttpClientAsync;\nimport com.believe.api.models.characters.CharacterListPageAsync;\nimport com.believe.api.models.characters.CharacterListParams;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `believe.apiKey` and `believe.baseUrl` system properties\n// Or configures using the `BELIEVE_API_KEY` and `BELIEVE_BASE_URL` environment variables\nBelieveClientAsync client = BelieveOkHttpClientAsync.fromEnv();\n\nCompletableFuture<CharacterListPageAsync> page = client.characters().list();\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods return `CompletableFuture`s.\n\n\n\n## File uploads\n\nThe SDK defines methods that accept files.\n\nTo upload a file, pass a [`Path`](https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html):\n\n```java\nimport com.believe.api.models.teams.logo.FileUpload;\nimport com.believe.api.models.teams.logo.LogoUploadParams;\nimport java.nio.file.Paths;\n\nLogoUploadParams params = LogoUploadParams.builder()\n    .teamId("team_id")\n    .file(Paths.get("/path/to/file"))\n    .build();\nFileUpload fileUpload = client.teams().logo().upload(params);\n```\n\nOr an arbitrary [`InputStream`](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html):\n\n```java\nimport com.believe.api.models.teams.logo.FileUpload;\nimport com.believe.api.models.teams.logo.LogoUploadParams;\nimport java.net.URL;\n\nLogoUploadParams params = LogoUploadParams.builder()\n    .teamId("team_id")\n    .file(new URL("https://example.com//path/to/file").openStream())\n    .build();\nFileUpload fileUpload = client.teams().logo().upload(params);\n```\n\nOr a `byte[]` array:\n\n```java\nimport com.believe.api.models.teams.logo.FileUpload;\nimport com.believe.api.models.teams.logo.LogoUploadParams;\n\nLogoUploadParams params = LogoUploadParams.builder()\n    .teamId("team_id")\n    .file("content".getBytes())\n    .build();\nFileUpload fileUpload = client.teams().logo().upload(params);\n```\n\nNote that when passing a non-`Path` its filename is unknown so it will not be included in the request.     To manually set a filename, pass a [`MultipartField`](believe-java-core/src/main/kotlin/com/believe/api/core/Values.kt):\n\n```java\nimport com.believe.api.core.MultipartField;\nimport com.believe.api.models.teams.logo.FileUpload;\nimport com.believe.api.models.teams.logo.LogoUploadParams;\nimport java.io.InputStream;\nimport java.net.URL;\n\nLogoUploadParams params = LogoUploadParams.builder()\n    .teamId("team_id")\n    .file(MultipartField.<InputStream>builder()\n        .value(new URL("https://example.com//path/to/file").openStream())\n        .filename("/path/to/file")\n        .build())\n    .build();\nFileUpload fileUpload = client.teams().logo().upload(params);\n```\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Java classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```java\nimport com.believe.api.core.http.Headers;\nimport com.believe.api.core.http.HttpResponseFor;\nimport com.believe.api.models.characters.CharacterListPage;\nimport com.believe.api.models.characters.CharacterListParams;\n\nHttpResponseFor<CharacterListPage> page = client.characters().withRawResponse().list();\n\nint statusCode = page.statusCode();\nHeaders headers = page.headers();\n```\n\nYou can still deserialize the response into an instance of a Java class if needed:\n\n```java\nimport com.believe.api.models.characters.CharacterListPage;\n\nCharacterListPage parsedPage = page.parse();\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`BelieveServiceException`](believe-java-core/src/main/kotlin/com/believe/api/errors/BelieveServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](believe-java-core/src/main/kotlin/com/believe/api/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](believe-java-core/src/main/kotlin/com/believe/api/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](believe-java-core/src/main/kotlin/com/believe/api/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](believe-java-core/src/main/kotlin/com/believe/api/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](believe-java-core/src/main/kotlin/com/believe/api/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](believe-java-core/src/main/kotlin/com/believe/api/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](believe-java-core/src/main/kotlin/com/believe/api/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](believe-java-core/src/main/kotlin/com/believe/api/errors/UnexpectedStatusCodeException.kt) |\n\n- [`BelieveIoException`](believe-java-core/src/main/kotlin/com/believe/api/errors/BelieveIoException.kt): I/O networking errors.\n\n- [`BelieveRetryableException`](believe-java-core/src/main/kotlin/com/believe/api/errors/BelieveRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`BelieveInvalidDataException`](believe-java-core/src/main/kotlin/com/believe/api/errors/BelieveInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`BelieveException`](believe-java-core/src/main/kotlin/com/believe/api/errors/BelieveException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n## Pagination\n\nThe SDK defines methods that return a paginated lists of results. It provides convenient ways to access     the results either one page at a time or item-by-item across all pages.\n\n### Auto-pagination\n\nTo iterate through all results across all pages, use the `autoPager()` method, which automatically     fetches more pages as needed.\n\nWhen using the synchronous client, the method returns an [`Iterable`](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)\n\n```java\nimport com.believe.api.models.characters.Character;\nimport com.believe.api.models.characters.CharacterListPage;\n\nCharacterListPage page = client.characters().list();\n\n// Process as an Iterable\nfor (Character character : page.autoPager()) {\n    System.out.println(character);\n}\n\n// Process as a Stream\npage.autoPager()\n    .stream()\n    .limit(50)\n    .forEach(character -> System.out.println(character));\n```\n\nWhen using the asynchronous client, the method returns an [`AsyncStreamResponse`](believe-java-core/src/main/kotlin/com/believe/api/core/http/AsyncStreamResponse.kt):\n\n```java\nimport com.believe.api.core.http.AsyncStreamResponse;\nimport com.believe.api.models.characters.Character;\nimport com.believe.api.models.characters.CharacterListPageAsync;\nimport java.util.Optional;\nimport java.util.concurrent.CompletableFuture;\n\nCompletableFuture<CharacterListPageAsync> pageFuture = client.async().characters().list();\n\npageFuture.thenRun(page -> page.autoPager().subscribe(character -> {\n    System.out.println(character);\n}));\n\n// If you need to handle errors or completion of the stream\npageFuture.thenRun(page -> page.autoPager().subscribe(new AsyncStreamResponse.Handler<>() {\n    @Override\n    public void onNext(Character character) {\n        System.out.println(character);\n    }\n\n    @Override\n    public void onComplete(Optional<Throwable> error) {\n        if (error.isPresent()) {\n            System.out.println("Something went wrong!");\n            throw new RuntimeException(error.get());\n        } else {\n            System.out.println("No more!");\n        }\n    }\n}));\n\n// Or use futures\npageFuture.thenRun(page -> page.autoPager()\n    .subscribe(character -> {\n        System.out.println(character);\n    })\n    .onCompleteFuture()\n    .whenComplete((unused, error) -> {\n        if (error != null) {\n            System.out.println("Something went wrong!");\n            throw new RuntimeException(error);\n        } else {\n            System.out.println("No more!");\n        }\n    }));\n```\n\n### Manual pagination\n\nTo access individual page items and manually request the next page, use the `items()`,\n`hasNextPage()`, and `nextPage()` methods:\n\n```java\nimport com.believe.api.models.characters.Character;\nimport com.believe.api.models.characters.CharacterListPage;\n\nCharacterListPage page = client.characters().list();\nwhile (true) {\n    for (Character character : page.items()) {\n        System.out.println(character);\n    }\n\n    if (!page.hasNextPage()) {\n        break;\n    }\n\n    page = page.nextPage();\n}\n```\n\n## Logging\n\nThe SDK uses the standard   [OkHttp logging interceptor](https://github.com/square/okhttp/tree/master/okhttp-logging-interceptor).\n\nEnable logging by setting the `BELIEVE_LOG` environment variable to   `info`:\n\n```sh\nexport BELIEVE_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport BELIEVE_LOG=debug\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `believe-java-core` is published with a     [configuration file](believe-java-core/src/main/resources/META-INF/proguard/believe-java-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`BelieveOkHttpClient`](believe-java-client-okhttp/src/main/kotlin/com/believe/api/client/okhttp/BelieveOkHttpClient.kt) or     [`BelieveOkHttpClientAsync`](believe-java-client-okhttp/src/main/kotlin/com/believe/api/client/okhttp/BelieveOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```java\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\n\nBelieveClient client = BelieveOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build();\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```java\nimport com.believe.api.models.characters.CharacterListPage;\n\nCharacterListPage page = client.characters().list(RequestOptions.builder().timeout(Duration.ofSeconds(30)).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport java.time.Duration;\n\nBelieveClient client = BelieveOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build();\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```java\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport java.net.InetSocketAddress;\nimport java.net.Proxy;\n\nBelieveClient client = BelieveOkHttpClient.builder()\n    .fromEnv()\n    .proxy(new Proxy(\n      Proxy.Type.HTTP, new InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build();\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```java\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\nimport java.time.Duration;\n\nBelieveClient client = BelieveOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build();\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```java\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\n\nBelieveClient client = BelieveOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build();\n```\n\n\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `believe-java-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`BelieveClient`](believe-java-core/src/main/kotlin/com/believe/api/client/BelieveClient.kt), [`BelieveClientAsync`](believe-java-core/src/main/kotlin/com/believe/api/client/BelieveClientAsync.kt),             [`BelieveClientImpl`](believe-java-core/src/main/kotlin/com/believe/api/client/BelieveClientImpl.kt), and [`BelieveClientAsyncImpl`](believe-java-core/src/main/kotlin/com/believe/api/client/BelieveClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `believe-java-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`BelieveOkHttpClient`](believe-java-client-okhttp/src/main/kotlin/com/believe/api/client/okhttp/BelieveOkHttpClient.kt) and [`BelieveOkHttpClientAsync`](believe-java-client-okhttp/src/main/kotlin/com/believe/api/client/okhttp/BelieveOkHttpClientAsync.kt), which             provide a way to construct [`BelieveClientImpl`](believe-java-core/src/main/kotlin/com/believe/api/client/BelieveClientImpl.kt) and             [`BelieveClientAsyncImpl`](believe-java-core/src/main/kotlin/com/believe/api/client/BelieveClientAsyncImpl.kt), respectively, using OkHttp\n- `believe-java`\n  - Depends on and exposes the APIs of both `believe-java-core` and `believe-java-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`believe-java` dependency](#installation) with `believe-java-core`\n2. Copy `believe-java-client-okhttp`\'s [`OkHttpClient`](believe-java-client-okhttp/src/main/kotlin/com/believe/api/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`BelieveClientImpl`](believe-java-core/src/main/kotlin/com/believe/api/client/BelieveClientImpl.kt) or [`BelieveClientAsyncImpl`](believe-java-core/src/main/kotlin/com/believe/api/client/BelieveClientAsyncImpl.kt), similarly to        [`BelieveOkHttpClient`](believe-java-client-okhttp/src/main/kotlin/com/believe/api/client/okhttp/BelieveOkHttpClient.kt) or [`BelieveOkHttpClientAsync`](believe-java-client-okhttp/src/main/kotlin/com/believe/api/client/okhttp/BelieveOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`believe-java` dependency](#installation) with `believe-java-core`\n2. Write a class that implements the [`HttpClient`](believe-java-core/src/main/kotlin/com/believe/api/core/http/HttpClient.kt) interface\n3. Construct [`BelieveClientImpl`](believe-java-core/src/main/kotlin/com/believe/api/client/BelieveClientImpl.kt) or [`BelieveClientAsyncImpl`](believe-java-core/src/main/kotlin/com/believe/api/client/BelieveClientAsyncImpl.kt), similarly to        [`BelieveOkHttpClient`](believe-java-client-okhttp/src/main/kotlin/com/believe/api/client/okhttp/BelieveOkHttpClient.kt) or [`BelieveOkHttpClientAsync`](believe-java-client-okhttp/src/main/kotlin/com/believe/api/client/okhttp/BelieveOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```java\nimport com.believe.api.core.JsonValue;\nimport com.believe.api.models.characters.CharacterListParams;\n\nCharacterListParams params = CharacterListParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build();\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set undocumented parameters on _nested_ headers, query params, or body classes, call the         `putAdditionalProperty` method on the nested class:\n\n```java\nimport com.believe.api.core.JsonValue;\nimport com.believe.api.models.characters.CharacterCreateParams;\nimport com.believe.api.models.characters.EmotionalStats;\n\nCharacterCreateParams params = CharacterCreateParams.builder()\n    .emotionalStats(EmotionalStats.builder()\n        .putAdditionalProperty("secretProperty", JsonValue.from("42"))\n        .build())\n    .build();\n```\n\nThese properties can be accessed on the nested built object later using the         `_additionalProperties()` method.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](believe-java-core/src/main/kotlin/com/believe/api/core/Values.kt) object to its setter:\n\n```java\nimport com.believe.api.models.characters.CharacterListParams;\n\nCharacterListParams params = CharacterListParams.builder().build();\n```\n\nThe most straightforward way to create a [`JsonValue`](believe-java-core/src/main/kotlin/com/believe/api/core/Values.kt) is using its       `from(...)` method:\n\n```java\nimport com.believe.api.core.JsonValue;\nimport java.util.List;\nimport java.util.Map;\n\n// Create primitive JSON values\nJsonValue nullValue = JsonValue.from(null);\nJsonValue booleanValue = JsonValue.from(true);\nJsonValue numberValue = JsonValue.from(42);\nJsonValue stringValue = JsonValue.from("Hello World!");\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nJsonValue arrayValue = JsonValue.from(List.of(\n  "Hello", "World"\n));\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nJsonValue objectValue = JsonValue.from(Map.of(\n  "a", 1,\n  "b", 2\n));\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nJsonValue complexValue = JsonValue.from(Map.of(\n  "a", List.of(\n    1, 2\n  ),\n  "b", List.of(\n    3, 4\n  )\n));\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](believe-java-core/src/main/kotlin/com/believe/api/core/Values.kt):\n\n```java\nimport com.believe.api.core.JsonMissing;\nimport com.believe.api.models.characters.CharacterCreateParams;\nimport com.believe.api.models.characters.CharacterListParams;\nimport com.believe.api.models.characters.CharacterRole;\nimport com.believe.api.models.characters.EmotionalStats;\nimport java.util.List;\n\nCharacterListParams params = CharacterCreateParams.builder()\n    .emotionalStats(EmotionalStats.builder()\n        .curiosity(40L)\n        .empathy(85L)\n        .optimism(45L)\n        .resilience(95L)\n        .vulnerability(60L)\n        .build())\n    .name("Roy Kent")\n    .personalityTraits(List.of(\n      "intense",\n      "loyal",\n      "secretly caring",\n      "profane"\n    ))\n    .role(CharacterRole.COACH)\n    .background(JsonMissing.of())\n    .build();\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```java\nimport com.believe.api.core.JsonValue;\nimport java.util.Map;\n\nMap<String, JsonValue> additionalProperties = client.characters().create(params)._additionalProperties();\nJsonValue secretPropertyValue = additionalProperties.get("secretProperty");\n\nString result = secretPropertyValue.accept(new JsonValue.Visitor<>() {\n    @Override\n    public String visitNull() {\n        return "It\'s null!";\n    }\n\n    @Override\n    public String visitBoolean(boolean value) {\n        return "It\'s a boolean!";\n    }\n\n    @Override\n    public String visitNumber(Number value) {\n        return "It\'s a number!";\n    }\n\n    // Other methods include `visitMissing`, `visitString`, `visitArray`, and `visitObject`\n    // The default implementation of each unimplemented method delegates to `visitDefault`, which throws by default, but can also be overridden\n});\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```java\nimport com.believe.api.core.JsonField;\nimport java.util.Optional;\n\nJsonField<String> background = client.characters().create(params)._background();\n\nif (background.isMissing()) {\n  // The property is absent from the JSON response\n} else if (background.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  Optional<String> jsonString = background.asString();\n\n  // Try to deserialize into a custom type\n  MyClass myObject = background.asUnknown().orElseThrow().convert(MyClass.class);\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`BelieveInvalidDataException`](believe-java-core/src/main/kotlin/com/believe/api/errors/BelieveInvalidDataException.kt) only if you directly access the property.\n\nIf you would prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```java\nimport com.believe.api.models.characters.Character;\n\nCharacter character = client.characters().create(params).validate();\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```java\nimport com.believe.api.models.characters.CharacterListPage;\n\nCharacterListPage page = client.characters().list(RequestOptions.builder().responseValidation(true).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.believe.api.client.BelieveClient;\nimport com.believe.api.client.okhttp.BelieveOkHttpClient;\n\nBelieveClient client = BelieveOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build();\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nJava `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/cjavdev/believe-java/issues) with questions, bugs, or suggestions.\n',
  },
  {
    language: 'kotlin',
    content:
      '# Believe Kotlin API Library\n\n<!-- x-release-please-start-version -->\n[![Maven Central](https://img.shields.io/maven-central/v/com.believe.api/believe-kotlin)](https://central.sonatype.com/artifact/com.believe.api/believe-kotlin/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.believe.api/believe-kotlin/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.believe.api/believe-kotlin/0.0.1)\n<!-- x-release-please-end -->\n\nThe Believe Kotlin SDK provides convenient access to the Believe REST API   from applications written in Kotlin.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Believe MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40cjavdev%2Fbelieve-mcp&config=eyJuYW1lIjoiQGNqYXZkZXYvYmVsaWV2ZS1tY3AiLCJ0cmFuc3BvcnQiOiJodHRwIiwidXJsIjoiaHR0cHM6Ly9iZWxpZXZlLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7IngtYmVsaWV2ZS1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40cjavdev%2Fbelieve-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbelieve.stlmcp.com%22%2C%22headers%22%3A%7B%22x-believe-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n<!-- x-release-please-start-version -->\n\nKDocs are available on [javadoc.io](https://javadoc.io/doc/com.believe.api/believe-kotlin/0.0.1).\n\n<!-- x-release-please-end -->\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n### Gradle\n\n~~~kotlin\nimplementation("com.believe.api:believe-kotlin:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.believe.api</groupId>\n  <artifactId>believe-kotlin</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```kotlin\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.characters.CharacterListPage\nimport com.believe.api.models.characters.CharacterListParams\n\n// Configures using the `believe.apiKey` and `believe.baseUrl` system properties\n// Or configures using the `BELIEVE_API_KEY` and `BELIEVE_BASE_URL` environment variables\nval client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\nval page: CharacterListPage = client.characters().list()\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```kotlin\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\n\n// Configures using the `believe.apiKey` and `believe.baseUrl` system properties\n// Or configures using the `BELIEVE_API_KEY` and `BELIEVE_BASE_URL` environment variables\nval client: BelieveClient = BelieveOkHttpClient.fromEnv()\n```\n\nOr manually:\n\n```kotlin\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\n\nval client: BelieveClient = BelieveOkHttpClient.builder()\n    .apiKey("My API Key")\n    .build()\n```\n\nOr using a combination of the two approaches:\n\n```kotlin\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\n\nval client: BelieveClient = BelieveOkHttpClient.builder()\n    // Configures using the `believe.apiKey` and `believe.baseUrl` system properties\n    // Or configures using the `BELIEVE_API_KEY` and `BELIEVE_BASE_URL` environment variables\n    .fromEnv()\n    .apiKey("My API Key")\n    .build()\n```\n\nSee this table for the available options:\n\n| Setter    | System property   | Environment variable | Required | Default value                |\n| --------- | ----------------- | -------------------- | -------- | ---------------------------- |\n| `apiKey`  | `believe.apiKey`  | `BELIEVE_API_KEY`    | true     | -                            |\n| `baseUrl` | `believe.baseUrl` | `BELIEVE_BASE_URL`   | true     | `"https://believe.cjav.dev"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```kotlin\nimport com.believe.api.client.BelieveClient\n\nval clientWithOptions: BelieveClient = client.withOptions {\n    it.baseUrl("https://example.com")\n    it.maxRetries(42)\n}\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Believe API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Kotlin class.\n\nFor example, `client.characters().list(...)` should be called with an instance of `CharacterListParams`, and it     will return an instance of `CharacterListPage`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```kotlin\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport com.believe.api.models.characters.CharacterListPageAsync\nimport com.believe.api.models.characters.CharacterListParams\n\n// Configures using the `believe.apiKey` and `believe.baseUrl` system properties\n// Or configures using the `BELIEVE_API_KEY` and `BELIEVE_BASE_URL` environment variables\nval client: BelieveClient = BelieveOkHttpClient.fromEnv()\n\nval page: CharacterListPageAsync = client.async().characters().list()\n```\n\nOr create an asynchronous client from the beginning:\n\n```kotlin\nimport com.believe.api.client.BelieveClientAsync\nimport com.believe.api.client.okhttp.BelieveOkHttpClientAsync\nimport com.believe.api.models.characters.CharacterListPageAsync\nimport com.believe.api.models.characters.CharacterListParams\n\n// Configures using the `believe.apiKey` and `believe.baseUrl` system properties\n// Or configures using the `BELIEVE_API_KEY` and `BELIEVE_BASE_URL` environment variables\nval client: BelieveClientAsync = BelieveOkHttpClientAsync.fromEnv()\n\nval page: CharacterListPageAsync = client.characters().list()\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods are [suspending](https://kotlinlang.org/docs/coroutines-guide.html).\n\n\n\n## File uploads\n\nThe SDK defines methods that accept files.\n\nTo upload a file, pass a [`Path`](https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html):\n\n```kotlin\nimport com.believe.api.models.teams.logo.FileUpload\nimport com.believe.api.models.teams.logo.LogoUploadParams\nimport java.nio.file.Paths\n\nval params: LogoUploadParams = LogoUploadParams.builder()\n    .teamId("team_id")\n    .file(Paths.get("/path/to/file"))\n    .build()\nval fileUpload: FileUpload = client.teams().logo().upload(params)\n```\n\nOr an arbitrary [`InputStream`](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html):\n\n```kotlin\nimport com.believe.api.models.teams.logo.FileUpload\nimport com.believe.api.models.teams.logo.LogoUploadParams\nimport java.net.URL\n\nval params: LogoUploadParams = LogoUploadParams.builder()\n    .teamId("team_id")\n    .file(URL("https://example.com//path/to/file").openStream())\n    .build()\nval fileUpload: FileUpload = client.teams().logo().upload(params)\n```\n\nOr a `ByteArray`:\n\n```kotlin\nimport com.believe.api.models.teams.logo.FileUpload\nimport com.believe.api.models.teams.logo.LogoUploadParams\n\nval params: LogoUploadParams = LogoUploadParams.builder()\n    .teamId("team_id")\n    .file("content".toByteArray())\n    .build()\nval fileUpload: FileUpload = client.teams().logo().upload(params)\n```\n\nNote that when passing a non-`Path` its filename is unknown so it will not be included in the request.     To manually set a filename, pass a [`MultipartField`](believe-kotlin-core/src/main/kotlin/com/believe/api/core/Values.kt):\n\n```kotlin\nimport com.believe.api.core.MultipartField\nimport com.believe.api.models.teams.logo.FileUpload\nimport com.believe.api.models.teams.logo.LogoUploadParams\nimport java.io.InputStream\nimport java.net.URL\n\nval params: LogoUploadParams = LogoUploadParams.builder()\n    .teamId("team_id")\n    .file(MultipartField.builder<InputStream>()\n        .value(URL("https://example.com//path/to/file").openStream())\n        .filename("/path/to/file")\n        .build())\n    .build()\nval fileUpload: FileUpload = client.teams().logo().upload(params)\n```\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Kotlin classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```kotlin\nimport com.believe.api.core.http.Headers\nimport com.believe.api.core.http.HttpResponseFor\nimport com.believe.api.models.characters.CharacterListPage\nimport com.believe.api.models.characters.CharacterListParams\n\nval page: HttpResponseFor<CharacterListPage> = client.characters().withRawResponse().list()\n\nval statusCode: Int = page.statusCode()\nval headers: Headers = page.headers()\n```\n\nYou can still deserialize the response into an instance of a Kotlin class if needed:\n\n```kotlin\nimport com.believe.api.models.characters.CharacterListPage\n\nval parsedPage: CharacterListPage = page.parse()\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`BelieveServiceException`](believe-kotlin-core/src/main/kotlin/com/believe/api/errors/BelieveServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](believe-kotlin-core/src/main/kotlin/com/believe/api/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](believe-kotlin-core/src/main/kotlin/com/believe/api/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](believe-kotlin-core/src/main/kotlin/com/believe/api/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](believe-kotlin-core/src/main/kotlin/com/believe/api/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](believe-kotlin-core/src/main/kotlin/com/believe/api/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](believe-kotlin-core/src/main/kotlin/com/believe/api/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](believe-kotlin-core/src/main/kotlin/com/believe/api/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](believe-kotlin-core/src/main/kotlin/com/believe/api/errors/UnexpectedStatusCodeException.kt) |\n\n- [`BelieveIoException`](believe-kotlin-core/src/main/kotlin/com/believe/api/errors/BelieveIoException.kt): I/O networking errors.\n\n- [`BelieveRetryableException`](believe-kotlin-core/src/main/kotlin/com/believe/api/errors/BelieveRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`BelieveInvalidDataException`](believe-kotlin-core/src/main/kotlin/com/believe/api/errors/BelieveInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`BelieveException`](believe-kotlin-core/src/main/kotlin/com/believe/api/errors/BelieveException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n## Pagination\n\nThe SDK defines methods that return a paginated lists of results. It provides convenient ways to access     the results either one page at a time or item-by-item across all pages.\n\n### Auto-pagination\n\nTo iterate through all results across all pages, use the `autoPager()` method, which automatically     fetches more pages as needed.\n\nWhen using the synchronous client, the method returns a [`Sequence`](https://kotlinlang.org/docs/sequences.html)\n\n```kotlin\nimport com.believe.api.models.characters.CharacterListPage\n\nval page: CharacterListPage = client.characters().list()\npage.autoPager()\n    .take(50)\n    .forEach { character -> println(character) }\n```\n\nWhen using the asynchronous client, the method returns a [`Flow`](https://kotlinlang.org/docs/flow.html):\n\n```kotlin\nimport com.believe.api.models.characters.CharacterListPageAsync\n\nval page: CharacterListPageAsync = client.async().characters().list()\npage.autoPager()\n    .take(50)\n    .forEach { character -> println(character) }\n```\n\n### Manual pagination\n\nTo access individual page items and manually request the next page, use the `items()`,\n`hasNextPage()`, and `nextPage()` methods:\n\n```kotlin\nimport com.believe.api.models.characters.Character\nimport com.believe.api.models.characters.CharacterListPage\n\nval page: CharacterListPage = client.characters().list()\nwhile (true) {\n    for (character in page.items()) {\n        println(character)\n    }\n\n    if (!page.hasNextPage()) {\n        break\n    }\n\n    page = page.nextPage()\n}\n```\n\n## Logging\n\nThe SDK uses the standard   [OkHttp logging interceptor](https://github.com/square/okhttp/tree/master/okhttp-logging-interceptor).\n\nEnable logging by setting the `BELIEVE_LOG` environment variable to   `info`:\n\n```sh\nexport BELIEVE_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport BELIEVE_LOG=debug\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `believe-kotlin-core` is published with a     [configuration file](believe-kotlin-core/src/main/resources/META-INF/proguard/believe-kotlin-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`BelieveOkHttpClient`](believe-kotlin-client-okhttp/src/main/kotlin/com/believe/api/client/okhttp/BelieveOkHttpClient.kt) or     [`BelieveOkHttpClientAsync`](believe-kotlin-client-okhttp/src/main/kotlin/com/believe/api/client/okhttp/BelieveOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```kotlin\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\n\nval client: BelieveClient = BelieveOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build()\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```kotlin\nimport com.believe.api.models.characters.CharacterListPage\n\nval page: CharacterListPage = client.characters().list(RequestOptions.builder().timeout(Duration.ofSeconds(30)).build())\n```\n\nOr configure the default for all method calls at the client level:\n\n```kotlin\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport java.time.Duration\n\nval client: BelieveClient = BelieveOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build()\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```kotlin\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport java.net.InetSocketAddress\nimport java.net.Proxy\n\nval client: BelieveClient = BelieveOkHttpClient.builder()\n    .fromEnv()\n    .proxy(Proxy(\n      Proxy.Type.HTTP, InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build()\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```kotlin\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\nimport java.time.Duration\n\nval client: BelieveClient = BelieveOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build()\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```kotlin\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\n\nval client: BelieveClient = BelieveOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build()\n```\n\n\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `believe-kotlin-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`BelieveClient`](believe-kotlin-core/src/main/kotlin/com/believe/api/client/BelieveClient.kt), [`BelieveClientAsync`](believe-kotlin-core/src/main/kotlin/com/believe/api/client/BelieveClientAsync.kt),             [`BelieveClientImpl`](believe-kotlin-core/src/main/kotlin/com/believe/api/client/BelieveClientImpl.kt), and [`BelieveClientAsyncImpl`](believe-kotlin-core/src/main/kotlin/com/believe/api/client/BelieveClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `believe-kotlin-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`BelieveOkHttpClient`](believe-kotlin-client-okhttp/src/main/kotlin/com/believe/api/client/okhttp/BelieveOkHttpClient.kt) and [`BelieveOkHttpClientAsync`](believe-kotlin-client-okhttp/src/main/kotlin/com/believe/api/client/okhttp/BelieveOkHttpClientAsync.kt), which             provide a way to construct [`BelieveClientImpl`](believe-kotlin-core/src/main/kotlin/com/believe/api/client/BelieveClientImpl.kt) and             [`BelieveClientAsyncImpl`](believe-kotlin-core/src/main/kotlin/com/believe/api/client/BelieveClientAsyncImpl.kt), respectively, using OkHttp\n- `believe-kotlin`\n  - Depends on and exposes the APIs of both `believe-kotlin-core` and `believe-kotlin-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`believe-kotlin` dependency](#installation) with `believe-kotlin-core`\n2. Copy `believe-kotlin-client-okhttp`\'s [`OkHttpClient`](believe-kotlin-client-okhttp/src/main/kotlin/com/believe/api/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`BelieveClientImpl`](believe-kotlin-core/src/main/kotlin/com/believe/api/client/BelieveClientImpl.kt) or [`BelieveClientAsyncImpl`](believe-kotlin-core/src/main/kotlin/com/believe/api/client/BelieveClientAsyncImpl.kt), similarly to        [`BelieveOkHttpClient`](believe-kotlin-client-okhttp/src/main/kotlin/com/believe/api/client/okhttp/BelieveOkHttpClient.kt) or [`BelieveOkHttpClientAsync`](believe-kotlin-client-okhttp/src/main/kotlin/com/believe/api/client/okhttp/BelieveOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`believe-kotlin` dependency](#installation) with `believe-kotlin-core`\n2. Write a class that implements the [`HttpClient`](believe-kotlin-core/src/main/kotlin/com/believe/api/core/http/HttpClient.kt) interface\n3. Construct [`BelieveClientImpl`](believe-kotlin-core/src/main/kotlin/com/believe/api/client/BelieveClientImpl.kt) or [`BelieveClientAsyncImpl`](believe-kotlin-core/src/main/kotlin/com/believe/api/client/BelieveClientAsyncImpl.kt), similarly to        [`BelieveOkHttpClient`](believe-kotlin-client-okhttp/src/main/kotlin/com/believe/api/client/okhttp/BelieveOkHttpClient.kt) or [`BelieveOkHttpClientAsync`](believe-kotlin-client-okhttp/src/main/kotlin/com/believe/api/client/okhttp/BelieveOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```kotlin\nimport com.believe.api.core.JsonValue\nimport com.believe.api.models.characters.CharacterListParams\n\nval params: CharacterListParams = CharacterListParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build()\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set undocumented parameters on _nested_ headers, query params, or body classes, call the         `putAdditionalProperty` method on the nested class:\n\n```kotlin\nimport com.believe.api.core.JsonValue\nimport com.believe.api.models.characters.CharacterCreateParams\nimport com.believe.api.models.characters.EmotionalStats\n\nval params: CharacterCreateParams = CharacterCreateParams.builder()\n    .emotionalStats(EmotionalStats.builder()\n        .putAdditionalProperty("secretProperty", JsonValue.from("42"))\n        .build())\n    .build()\n```\n\nThese properties can be accessed on the nested built object later using the         `_additionalProperties()` method.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](believe-kotlin-core/src/main/kotlin/com/believe/api/core/Values.kt) object to its setter:\n\n```kotlin\nimport com.believe.api.models.characters.CharacterListParams\n\nval params: CharacterListParams = CharacterListParams.builder().build()\n```\n\nThe most straightforward way to create a [`JsonValue`](believe-kotlin-core/src/main/kotlin/com/believe/api/core/Values.kt) is using its       `from(...)` method:\n\n```kotlin\nimport com.believe.api.core.JsonValue\n\n// Create primitive JSON values\nval nullValue: JsonValue = JsonValue.from(null)\nval booleanValue: JsonValue = JsonValue.from(true)\nval numberValue: JsonValue = JsonValue.from(42)\nval stringValue: JsonValue = JsonValue.from("Hello World!")\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nval arrayValue: JsonValue = JsonValue.from(listOf(\n  "Hello", "World"\n))\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nval objectValue: JsonValue = JsonValue.from(mapOf(\n  "a" to 1, "b" to 2\n))\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nval complexValue: JsonValue = JsonValue.from(mapOf(\n  "a" to listOf(\n    1, 2\n  ), "b" to listOf(\n    3, 4\n  )\n))\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](believe-kotlin-core/src/main/kotlin/com/believe/api/core/Values.kt):\n\n```kotlin\nimport com.believe.api.core.JsonMissing\nimport com.believe.api.models.characters.CharacterCreateParams\nimport com.believe.api.models.characters.CharacterListParams\nimport com.believe.api.models.characters.CharacterRole\nimport com.believe.api.models.characters.EmotionalStats\n\nval params: CharacterListParams = CharacterCreateParams.builder()\n    .emotionalStats(EmotionalStats.builder()\n        .curiosity(40L)\n        .empathy(85L)\n        .optimism(45L)\n        .resilience(95L)\n        .vulnerability(60L)\n        .build())\n    .name("Roy Kent")\n    .personalityTraits(listOf(\n      "intense",\n      "loyal",\n      "secretly caring",\n      "profane",\n    ))\n    .role(CharacterRole.COACH)\n    .background(JsonMissing.of())\n    .build()\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```kotlin\nimport com.believe.api.core.JsonBoolean\nimport com.believe.api.core.JsonNull\nimport com.believe.api.core.JsonNumber\nimport com.believe.api.core.JsonValue\n\nval additionalProperties: Map<String, JsonValue> = client.characters().create(params)._additionalProperties()\nval secretPropertyValue: JsonValue = additionalProperties.get("secretProperty")\n\nval result = when (secretPropertyValue) {\n    is JsonNull -> "It\'s null!"\n    is JsonBoolean -> "It\'s a boolean!"\n    is JsonNumber -> "It\'s a number!"\n    // Other types include `JsonMissing`, `JsonString`, `JsonArray`, and `JsonObject`\n    else -> "It\'s something else!"\n}\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```kotlin\nimport com.believe.api.core.JsonField\n\nval background: JsonField<String> = client.characters().create(params)._background()\n\nif (background.isMissing()) {\n  // The property is absent from the JSON response\n} else if (background.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  val jsonString: String? = background.asString();\n\n  // Try to deserialize into a custom type\n  val myObject: MyClass = background.asUnknown()!!.convert(MyClass::class.java)\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`BelieveInvalidDataException`](believe-kotlin-core/src/main/kotlin/com/believe/api/errors/BelieveInvalidDataException.kt) only if you directly access the property.\n\nIf you would prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```kotlin\nimport com.believe.api.models.characters.Character\n\nval character: Character = client.characters().create(params).validate()\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```kotlin\nimport com.believe.api.models.characters.CharacterListPage\n\nval page: CharacterListPage = client.characters().list(RequestOptions.builder().responseValidation(true).build())\n```\n\nOr configure the default for all method calls at the client level:\n\n```kotlin\nimport com.believe.api.client.BelieveClient\nimport com.believe.api.client.okhttp.BelieveOkHttpClient\n\nval client: BelieveClient = BelieveOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build()\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nKotlin `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/cjavdev/believe-kotlin/issues) with questions, bugs, or suggestions.\n',
  },
  {
    language: 'cli',
    content:
      "# Believe CLI\n\nThe official CLI for the Believe REST API.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n<!-- x-release-please-start-version -->\n\n## Installation\n\n### Installing with Go\n\nTo test or install the CLI locally, you need [Go](https://go.dev/doc/install) version 1.22 or later installed.\n\n~~~sh\ngo install 'github.com/cjavdev/believe-cli/cmd/believe@latest'\n~~~\n\nOnce you have run `go install`, the binary is placed in your Go bin directory:\n\n- **Default location**: `$HOME/go/bin` (or `$GOPATH/bin` if GOPATH is set)\n- **Check your path**: Run `go env GOPATH` to see the base directory\n\nIf commands aren't found after installation, add the Go bin directory to your PATH:\n\n~~~sh\n# Add to your shell profile (.zshrc, .bashrc, etc.)\nexport PATH=\"$PATH:$(go env GOPATH)/bin\"\n~~~\n\n<!-- x-release-please-end -->\n\n### Running Locally\n\nAfter cloning the git repository for this project, you can use the\n`scripts/run` script to run the tool locally:\n\n~~~sh\n./scripts/run args...\n~~~\n\n## Usage\n\nThe CLI follows a resource-based command structure:\n\n~~~sh\nbelieve [resource] <command> [flags...]\n~~~\n\n~~~sh\nbelieve characters list \\\n  --api-key 'My API Key'\n~~~\n\nFor details about specific commands, use the `--help` flag.\n\n### Environment variables\n\n| Environment variable | Required |\n| -------------------- | -------- |\n| `BELIEVE_API_KEY`    | yes      |\n\n### Global flags\n\n- `--api-key` (can also be set with `BELIEVE_API_KEY` env var)\n- `--help` - Show command line usage\n- `--debug` - Enable debug logging (includes HTTP request/response details)\n- `--version`, `-v` - Show the CLI version\n- `--base-url` - Use a custom API backend URL\n- `--format` - Change the output format (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--format-error` - Change the output format for errors (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--transform` - Transform the data output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n- `--transform-error` - Transform the error output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n\n### Passing files as arguments\n\nTo pass files to your API, you can use the `@myfile.ext` syntax:\n\n~~~bash\nbelieve <command> --arg @abe.jpg\n~~~\n\nFiles can also be passed inside JSON or YAML blobs:\n\n~~~bash\nbelieve <command> --arg '{image: \"@abe.jpg\"}'\n# Equivalent:\nbelieve <command> <<YAML\narg:\n  image: \"@abe.jpg\"\nYAML\n~~~\n\nIf you need to pass a string literal that begins with an `@` sign, you can\nescape the `@` sign to avoid accidentally passing a file.\n\n~~~bash\nbelieve <command> --username '\\@abe'\n~~~\n\n#### Explicit encoding\n\nFor JSON endpoints, the CLI tool does filetype sniffing to determine whether the\nfile contents should be sent as a string literal (for plain text files) or as a\nbase64-encoded string literal (for binary files). If you need to explicitly send\nthe file as either plain text or base64-encoded data, you can use\n`@file://myfile.txt` (for string encoding) or `@data://myfile.dat` (for\nbase64-encoding). Note that absolute paths will begin with `@file://` or\n`@data://`, followed by a third `/` (for example, `@file:///tmp/file.txt`).\n\n~~~bash\nbelieve <command> --arg @data://file.txt\n~~~\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
