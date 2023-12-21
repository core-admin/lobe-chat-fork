/**
 * LLM 模型
 */
export enum LanguageModel {
  /**
   * GPT 3.5 Turbo
   */
  GPT3_5 = 'gpt-3.5-turbo',
  GPT3_5_1106 = 'gpt-3.5-turbo-1106',
  GPT3_5_16K = 'gpt-3.5-turbo-16k',
  /**
   * GPT 4
   */
  GPT4 = 'gpt-4',
  GPT4_32K = 'gpt-4-32k',
  GPT4_PREVIEW = 'gpt-4-1106-preview',
  GPT4_VISION_PREVIEW = 'gpt-4-vision-preview',
}

export enum _LanguageModel {
  /**
   * GPT 3.5 Turbo
   */
  GPT3_5 = 'gpt-3.5-turbo=回复速度更快',
  GPT3_5_1106 = 'gpt-3.5-turbo-1106=gpt-3.5-turbo模型升级版本🔥',
  GPT3_5_16K = 'gpt-3.5-turbo-16k=支持更多的上下文',
  /**
   * GPT 4
   */
  GPT4 = 'gpt-4=推理能力更强，回复速度一般',
  GPT4_32K = 'gpt-4-32k=支持函数调用',
  GPT4_PREVIEW = 'gpt-4-1106-preview=gpt-4模型升级版本🔥',
  GPT4_VISION_PREVIEW = 'gpt-4-vision-preview=视觉预览模型，支持图片输入，聊天请切换其他模型',
}

// 语言模型的设置参数
export interface LLMParams {
  /**
   * 控制生成文本中的惩罚系数，用于减少重复性
   * @default 0
   */
  frequency_penalty?: number;
  /**
   * 生成文本的最大长度
   */
  max_tokens?: number;
  /**
   * 控制生成文本中的惩罚系数，用于减少主题的变化
   * @default 0
   */
  presence_penalty?: number;
  /**
   * 生成文本的随机度量，用于控制文本的创造性和多样性
   * @default 0.6
   */
  temperature?: number;
  /**
   * 控制生成文本中最高概率的单个 token
   * @default 1
   */
  top_p?: number;
}

export type LLMRoleType = 'user' | 'system' | 'assistant' | 'function';

export interface LLMMessage {
  content: string;
  role: LLMRoleType;
}

export type FewShots = LLMMessage[];
