export default class Insumo {
  private name: string = "";
  private measure: string = "";
  private amount: number = 0;

  constructor(name: string, measure: string = "", amount = 0) {
    this.setName(name);
    this.setMeasure(measure);
    this.setAmount(amount);
  }

  public getName(): string {
    return this.name;
  }

  public getMeasure(): string {
    return this.measure;
  }

  public getAmount(): number {
    return this.amount;
  }


  public setName(value: string) {
    if ( !/^([A-z ]{2,60})+/.test(value))
      throw new Error("nombre invalido");

    this.name = value;
  }

  public setMeasure(value: string) {
    if ( !/^([A-z ]{1,20})+/.test(value))
      throw new Error("medida invalida");

    this.measure = value;
  }

  public setAmount(value: number) {
    // only integers and decimals are accepted
    if ( !/^(([0-9]*[.])?[0-9])+/.test(String(value)) || value < 0 || value > 99999 )
      throw new Error("cantidad invalida");

    this.amount = value;
  }
}
