export type ServiceMessage = { message: string };
export type Role = { role: string };

type ServiceResponseErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'CONFLICT';

type ServiceResponseSucessType = 'SUCCESSFUL' | 'CREATE';
export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: ServiceMessage
};

export type ServiceResponseSuccess<T> = {
  status: ServiceResponseSucessType,
  data: T | ServiceMessage | Role
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;
