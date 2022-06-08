export default class Platillo {
    private imageName: string = "";
    private name: string = "";
    private description: string = "";
    private price: number = 0.00;

    constructor( imageName: string = "", name: string, description: string = "", price: number = 0.00) {
      this.setImageName(imageName);
      this.setName(name);
      this.setDescription(description);
      this.setPrice(price);
    }

    public getImageName(): string {
        return this.imageName;
    }
  
    public getName(): string {
      return this.name;
    }
  
    public getDescription(): string {
      return this.description;
    }
  
    public getPrice(): number {
        return this.price;
    }
    
    public setImageName( value: string ) {
        this.imageName = value;
    }
  
    public setName(value: string) {
      if ( value.length > 1000 )
        throw new Error("nombre invalido");
  
      this.name = value;
    }
  
    public setDescription(value: string) {
      if ( value.length > 1000 )
        throw new Error("Descripcion demaciado larga");

        this.description = value;
    }
  
    public setPrice( value: number) {
      // only integers and decimals are accepted
      if ( !/^(([0-9]*[.])?[0-9])+/.test(String(value)) || value < 0 || value > 99999 )
        throw new Error("cantidad invalida");
  
      this.price = value;
    }
  }
  