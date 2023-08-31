

// The type of the API response on create a new user
export type APIResponseError = {
    code: string;
    message: string;
};

// Errors on create a new user
export class UserExistsError extends Error {
    code: string = 'UserExistsData';
}

export class IncorrectUserDataError extends Error {
    code: string = 'IncorrectUserData';
};

export class APIError extends Error {
    code: string = 'APIError';
};

export class UnkwonError extends Error {
    code: string = 'UnkwonError';
};
