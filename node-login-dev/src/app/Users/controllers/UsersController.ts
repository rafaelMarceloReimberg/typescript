import { Request, Response } from 'express'

class UsersController {
  async index(req: Request, res: Response): Promise<Response> {
    const user = [{ 
      id: "01", 
      nome: "Rafael Marcelo Reimberg", 
      idade: 38, 
      email: 'raaafael.reimberg@hotmail.com', 
      celular: "(11) 95210-7767",
      endereco: {
        rua: "Rua Emmanuel Chabriel",
        numero: 166,
        complemento: "b",
        bairro: "Parque São Paulo",
        cidade: "São Paulo",
        estado: "SP"
      }
    },
    { 
      id: "02", 
      nome: "Natalia Lobo de Oliveira", 
      idade: 34, 
      email: 'nati.somar@hotmail.com', 
      celular: "(11) 95210-7767",
      endereco: {
        rua: "Rua Emmanuel Chabriel",
        numero: 166,
        complemento: "b",
        bairro: "Parque São Paulo",
        cidade: "São Paulo",
        estado: "SP"
      },
    }]

    return res.status(200).json(user)
  }
}

export default new UsersController()
