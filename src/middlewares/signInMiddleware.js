import { signInSchema } from "../model/signInModel.js";

export function signInValidation(req, res, next) {
  const { email, password } = req.body;

  const validation = signInSchema.validate(
    { email, password },
    { abortEarly: false }
  );
  if(validation.error){
    const messageError = validation.error.details.map(
        (detail) => detail.message
      );
      return res.status(422).send(messageError);
  }
  next()
}
