import { signUpSchema } from "../model/signUpModel.js";

export function signUpValidation(req, res, next) {
  const { name, email, password , confirmPassword} = req.body;
  const validation = signUpSchema.validate(
    { name, email, password , confirmPassword},
    { abortEarly: false }
  );
  if (validation.error) {
    const messageError = validation.error.details.map(
      (detail) => detail.message
    );
    return res.status(422).send(messageError);
  }
  next();
}
