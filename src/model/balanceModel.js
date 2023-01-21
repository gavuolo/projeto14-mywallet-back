import joi from "joi";

export const balanceSchema = joi.object({
    description: joi.string().required(),
    value: joi.number().required(),
    type: joi.string().required().valid("nova-entrada", "nova-saida"),
})