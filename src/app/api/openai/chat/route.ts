import { OpenAIChatStreamPayload } from '@/types/openai/chat';

import { getPreferredRegion } from '../../config';
import { createBizOpenAI } from '../createBizOpenAI';
import { createChatCompletion } from './createChatCompletion';

export const runtime = 'edge';
export const preferredRegion = getPreferredRegion();

// TODO: 需要校验密码
export const POST = async (req: Request) => {
  const payload = (await req.json()) as OpenAIChatStreamPayload;

  const openaiOrErrResponse = await createBizOpenAI(req, payload.model);

  // if resOrOpenAI is a Response, it means there is an error,just return it
  if (openaiOrErrResponse instanceof Response) return openaiOrErrResponse;

  return createChatCompletion({ openai: openaiOrErrResponse, payload });
};
