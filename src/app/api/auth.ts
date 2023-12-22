import { getServerConfig } from '@/config/server';
import { ChatErrorType } from '@/types/fetch';

interface AuthConfig {
  accessCode?: string | null;
  apiKey?: string | null;
}

export const checkAuth = async ({ apiKey, accessCode }: AuthConfig) => {
  const { ACCESS_CODES } = getServerConfig();

  // if apiKey exist
  if (apiKey) {
    return { auth: true };
  }

  /**
   * 如果没有配置 访问密码-环境变量，则直接通过，此时将直接取用户的 apiKey
   * 如果用户没有手动设置 apiKey，则会取 OPENAI_API_KEY 环境变量
   */
  if (!ACCESS_CODES.length) return { auth: true };

  // if (!accessCode || !ACCESS_CODES.includes(accessCode)) {
  //   return { auth: false, error: ChatErrorType.InvalidAccessCode };
  // }

  if (!accessCode) {
    return { auth: false, error: ChatErrorType.InvalidAccessCode };
  }

  if (ACCESS_CODES.includes(accessCode)) {
    return { auth: true };
  }

  // MARK: 新增功能，读取远程服务存储的动态秘钥，进行权限授权
  const verify = (await fetch('http://ai.itjcloud.com:8080/verify', {
    body: JSON.stringify({ token: accessCode }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then((res) => res.json())) as { status: 'Success' | 'Fail' };

  if (verify.status === 'Fail') {
    return { auth: false, error: ChatErrorType.InvalidAccessCode };
  }

  return { auth: true };
};
