import { Request, Response } from "express";
import { getRepository } from 'typeorm';
import * as yup from 'yup';

import Usuario from '../models/Usuario';

const schemaUsuario = yup.object().shape({
  nome_usuario: yup.string().required("Nome é requerido!"),
  email_usuario: yup.string().email("Insira um email valido! Ex:exemple@exemple.com").required("Email é requerido!"),
  senha: yup.string().min(6).required("Senha é requerida!"),
  funcao: yup.string().required("Função é requerida!")
});

class UsuarioController {
  index(req: Request, res: Response) {
    return res.send({ userID: req.userId });
  }
  
  async create(req: Request, res: Response) {
    try {
      const repository = getRepository(Usuario);

      const { nome_usuario, email_usuario, senha, funcao } = req.body;

      await schemaUsuario.validate({ nome_usuario, email_usuario, senha, funcao });

      const userExists = await repository.findOne({ where: { email_usuario } });
  
      if(userExists) {
        res.status(409).json({ message: "Email já existente."})
      }

      const usuario = repository.create({
        nome_usuario, email_usuario, senha, funcao
      });
      await repository.save(usuario);

      return res.json(usuario);
      
    } catch (error) {
      if(error instanceof yup.ValidationError) {
        return res.status(400).json({ message: error.message });
      }

      return res.status(500).json({ message: error.message });
    }
  }
}

export default new UsuarioController();