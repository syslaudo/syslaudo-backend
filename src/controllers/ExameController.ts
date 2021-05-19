// import { Request, Response } from 'express';
// import { getRepository } from 'typeorm';
// import * as yup from 'yup';

// const schemaExame = yup.object().shape({
//   nome_do_usuario: yup.string().required('Nome é requerido!'),
//   email_usuario: yup
//     .string()
//     .email('Insira um email valido! Ex:exemple@exemple.com')
//     .required('Email é requerido!'),
//   senha: yup.string().min(6),
//   tipo: yup.string().required('Tipo é requerido'),
//   cpf: yup.string().max(11).required('CPF é requerido'),
//   crm: yup.string().default(null).notRequired().max(10),
//   titulacao: yup.string().default(null).notRequired(),
//   data_residencia: yup.string().default(undefined).notRequired(),
// });

// export default class UsuarioController {
//   public async create(req: Request, res: Response): Promise<Response> {}
// }
