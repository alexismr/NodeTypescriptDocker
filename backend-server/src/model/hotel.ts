export class HotelModel  {
   public id: number;
   public name: string;
   public stars: string;
   public price: string;
   public amenities: string [];


   constructor( obj :HotelModel){
      this.id= obj.id;
      this.name = obj.name;
      this.price = obj.price;
      this.stars = obj.stars;
      this.amenities = obj.amenities;
   }
}