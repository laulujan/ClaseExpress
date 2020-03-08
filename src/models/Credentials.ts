import joi from '@hapi/joi';

export type Credentials = {
    login: string;
    password: string;
}

export const CredentialSchema = joi.object().keys({
    login: joi.string().required(),
    password: joi.string().alphanum().required()
});