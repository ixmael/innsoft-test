import { APIResponseError } from '@inssoft/core/domain/users';

class UserExistsError extends Error {
  code: string = 'UserExistsData';
}

class IncorrectUserDataError extends Error {
  code: string = 'IncorrectUserData';
};

class APIError extends Error {
  code: string = 'APIError';
};

class UnkwonError extends Error {
  code: string = 'UnkwonError';
};

type ResponseData = {
  id: string;
};


export function useAPICreateUser(userData: {}) {
  const config = useRuntimeConfig();

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const apiURL = config.public.apiURI as string;
  const request = new Request(`${apiURL}/users`, {
    method: 'POST',
    mode: 'cors',
    headers,
    body: JSON.stringify(userData),
  });

  return fetch(request)
    .then(async (response) => {
      if (response.ok) {
        const data: ResponseData = await response.json();
        return data;
      }

      const errorMessage: APIResponseError = await response.json();

      let currentError = null;
      switch (response.status) {
        case 400:
          if (errorMessage.code === 'user_exists') {
            currentError = new UserExistsError();
          } else if (errorMessage.code === 'data_is_invalid') {
            currentError = new IncorrectUserDataError('incorrect data');
          } else {
            currentError = new IncorrectUserDataError('incorrect data');
          }

          break;

        case 500:
          currentError = new APIError(errorMessage.code);
          break;

        default:
          currentError = new UnkwonError();
      }

      throw currentError;
    });
}
