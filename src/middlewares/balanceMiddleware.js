import { balanceSchema } from "../model/balanceModel.js";

export async function balanceValidation(req, res, next) {
  const { description, value, type } = req.body;

  const validation = balanceSchema.validate(
    { description, value, type },
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
