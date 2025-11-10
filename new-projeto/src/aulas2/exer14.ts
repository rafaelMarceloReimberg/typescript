class Funcionario1 {
  public nome: string;
  private salario: number;

  constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
  }

  calcularSalario(){
    return this.salario * 12;
  }
}

const funcionario1 = new Funcionario1("Rafael", 4200);
console.log(`O ${funcionario1.nome} e recebe no ano o valor ${funcionario1.calcularSalario()} reais.`);

class Gerente1 extends Funcionario1 {
  bonus: number;

  constructor(nome: string, salario: number, bonus: number) {
    super(nome, salario);
    this.bonus = bonus;
  }

  calcularSalario() {
    return super.calcularSalario() + this.bonus;
  }

}

const gerente1 = new Gerente1("Natalia", 800, 350);
console.log(`A gerente ${gerente1.nome} recebe R$ ${gerente1.calcularSalario()} por ano.`);
