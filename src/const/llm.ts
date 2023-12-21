import { LanguageModel, _LanguageModel } from '@/types/llm';

/**
 * 允许在应用程序中显示和使用的语言模型白名单
 */
export const LanguageModelWhiteList = [
  // OpenAI
  'gpt-3.5-turbo',
  'gpt-3.5-turbo-16k',
  'gpt-4',
  'gpt-4-32k',
];

export const DEFAULT_OPENAI_MODEL_LIST: string[] = Object.values(LanguageModel);

export const _DEFAULT_OPENAI_MODEL_LIST: string[] = Object.values(_LanguageModel);

// vision model white list, these models will change the content from string to array
export const VISION_MODEL_WHITE_LIST = ['gpt-4-vision-preview'];
