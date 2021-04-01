import { Request, Response } from "express";
import { getRepository } from 'typeorm';
import { validate } from "uuid";
import * as yup from 'yup';

import Usuario from '../models/Usuario';

const schemaUsuario = yup.object().shape({
  nome_usuario: yup.string().required("Nome é requerido!"),
  email_usuario: yup.string().email("Insira um email valido! Ex:exemple@exemple.com").required("Email é requerido!"),
  senha: yup.string().min(6).required("Senha é requerida!"),
  funcao: yup.string().required("Função é requerida!")
});

class UsuarioController {
  async listarUserID(req: Request, res: Response) {
    return res.send({ userID: req.userId });
  }
  
  async criarUsuario(req: Request, res: Response) {
    const { nome_usuario, email_usuario, senha, funcao } = req.body;

    try {
      await schemaUsuario.validate({ nome_usuario, email_usuario, senha, funcao });
      
      const repository = getRepository(Usuario);

      const userExists = await repository.findOne({ where: { email_usuario } });
  
      if(userExists) {
        res.status(409).json({ message: 'Email já existente.'})
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

  async listarUsuarios(req: Request, res: Response) {
    try {
      const users = await getRepository(Usuario).find();

      if(users.length == 0) {
        return res.status(404).json({ message: 'Nenhum usúario encontrado!' })
      }

      return res.json(users);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async atualizar(req: Request, res: Response) {
    const { nome_usuario, email_usuario, senha, funcao } = req.body;

    try {
      await schemaUsuario.validate({ nome_usuario, email_usuario, senha, funcao });

      const repository = await getRepository(Usuario).update(req.userId, req.body);
      
      if(repository.affected === 1) {
        const repositoryAtualizado = await getRepository(Usuario).findOne(req.userId);
        return res.status(200).json(repositoryAtualizado)
      }

      return res.status(404).json({ message: 'Usúario não encontrado'})
      
      // const emailExiste = await repository.findOne({ email_usuario });

      // if(emailExiste && emailExiste.id != req.userId) {
      //   return res.status(401).json({ massage: 'Email já existente!' });
      // }

      // const usuario = await repository.findOne({ id: req.userId });

      // if(!usuario) {
      //   return res.status(401).json({ message: 'Usúario não encontrado' });
      // }

      // usuario.nome_usuario = nome_usuario;
      // usuario.email_usuario = email_usuario;
      // usuario.senha = senha;
      // usuario.funcao = funcao;

      // repository.save(usuario);

    } catch (error) {
      if(error instanceof yup.ValidationError) {
        return res.status(400).json({ message: error.message });
      }
      
      return res.status(500).json({ message: error.message });
    }
  }

  async deletar(req: Request, res:Response) {
    try {
      const repository = getRepository(Usuario);
      await repository.delete({ id: req.userId });

      return res.status(204).json({ message: 'Usúario deletado com sucesso!'});
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export default new UsuarioController();