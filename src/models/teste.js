export const schemaSignUp = joi.object({
    name: joi.string().required().min(3).max(100),
    password: joi.string().required(),
    email: joi.string().email().required(),
  });

export const schemaSignIn = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
})
