import joi from '@hapi/joi';

export type User = {
    id: string;
    login: string;
    password: string;
}

export const UserSchema = joi.object().keys({
    id: joi.string().required(),
    login: joi.string().required(),
    password: joi.string().alphanum().required()
});