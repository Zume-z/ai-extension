export enum ModalType {
  UPDATE_SUBSCRIPTION = 'UPDATE_SUBSCRIPTION',
  PAST_DUE = 'PAST_DUE',
}

export enum ERROR_CODE {
  SESSION_NOT_FOUND = 'SESSION_NOT_FOUND',
  SESSION_TOKEN_NOT_FOUND = 'SESSION_TOKEN_NOT_FOUND',
  SUBSCRIPTION_NOT_FOUND = 'SUBSCRIPTION_NOT_FOUND',
  SESSION_EXPIRED = 'SESSION_EXPIRED',
  TOKEN_LIMIT_EXCEEDED = 'TOKEN_LIMIT_EXCEEDED',
  PAYMENT_PAST_DUE = 'PAYMENT_PAST_DUE',
  NO_PROMPT_IN_REQUEST = 'NO_PROMPT_IN_REQUEST',
  NO_TOKENS_IN_PROMPT = 'NO_TOKENS_IN_PROMPT',
}
