import { describe, expect, it, vi } from 'vitest';

import { checkAuth } from './auth';
import { getPreferredRegion } from './config';

// Stub the global process object to safely mock environment variables
vi.stubGlobal('process', {
  ...process, // Preserve the original process object
  env: { ...process.env }, // Clone the environment variables object for modification
});

describe('getPreferredRegion', () => {
  beforeEach(() => {
    // Reset environment variables before each test case
    vi.restoreAllMocks();
  });

  it('returns default value when get config error', () => {
    const originalProcess = global.process;
    const originalError = console.error;
    // @ts-ignore
    global.process = undefined;
    console.error = () => {};

    const preferredRegion = getPreferredRegion();
    expect(preferredRegion).toBe('auto');

    global.process = originalProcess;
    console.error = originalError;
  });

  it('return default value when preferredRegion is empty', () => {
    process.env.OPENAI_FUNCTION_REGIONS = '';
    const preferredRegion = getPreferredRegion();
    expect(preferredRegion).toBe('auto');
  });

  it('return correct list values when preferredRegion is correctly passed', () => {
    process.env.OPENAI_FUNCTION_REGIONS = 'ida1,sfo1';
    const preferredRegion = getPreferredRegion();
    expect(preferredRegion).toStrictEqual(['ida1', 'sfo1']);
  });
});

describe('ACCESS_CODE', () => {
  let auth = false;

  beforeEach(() => {
    auth = false;
    process.env.ACCESS_CODE = undefined;
    // Reset environment variables before each test case
    vi.restoreAllMocks();
  });

  it('set multiple access codes', async () => {
    process.env.ACCESS_CODE = ',code1,code2,code3';
    ({ auth } = await checkAuth({ accessCode: 'code1' }));
    expect(auth).toBe(true);
    ({ auth } = await checkAuth({ accessCode: 'code2' }));
    expect(auth).toBe(true);
    ({ auth } = await checkAuth({ accessCode: 'code1,code2' }));
    expect(auth).toBe(false);
  });

  it('set individual access code', async () => {
    process.env.ACCESS_CODE = 'code1';
    ({ auth } = await checkAuth({ accessCode: 'code1' }));
    expect(auth).toBe(true);
    ({ auth } = await checkAuth({ accessCode: 'code2' }));
    expect(auth).toBe(false);
  });

  it('no access code', async () => {
    ({ auth } = await checkAuth({ accessCode: 'code1' }));
    expect(auth).toBe(true);
    ({ auth } = await checkAuth({}));
    expect(auth).toBe(true);
  });

  it('empty access code', async () => {
    process.env.ACCESS_CODE = '';
    ({ auth } = await checkAuth({ accessCode: 'code1' }));
    expect(auth).toBe(true);
    ({ auth } = await checkAuth({}));
    expect(auth).toBe(true);

    process.env.ACCESS_CODE = ',,';
    ({ auth } = await checkAuth({ accessCode: 'code1' }));
    expect(auth).toBe(true);
    ({ auth } = await checkAuth({}));
    expect(auth).toBe(true);
  });
});
