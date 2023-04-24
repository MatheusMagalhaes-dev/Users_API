import { model, Schema } from "mongoose";

import { IUser } from "@ts";

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
      //select serve para que atenda todos os requisitos dessa tabela
    },
  },
  { timestamps: true }
);

export const UserModel = model('User', UserSchema);