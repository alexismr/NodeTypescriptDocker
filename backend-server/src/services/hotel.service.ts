import * as fs from 'fs';

export default  class HotelService {
    private _jsonMock: any ;
    constructor()
    {
        this.LoadData()
        .then((res:any)=>this._jsonMock =  JSON.parse(res))
        .catch(err=>this._jsonMock  =  err);  
    }
    getAlldata():any {
          return this._jsonMock;
    }
    getDataFilters(star: string , name: string){
        let filldata:any = this._jsonMock ;
        if(star != '0' && star!= 'undefined')filldata =this._jsonMock.filter( x => x.stars == star);
        if(name && name != 'undefined')filldata = this.searchDelegate(filldata,name )
     
        return filldata;
      }
    deleteElement(id:string):boolean{
        let status: boolean = false;
        this._jsonMock = this._jsonMock.filter((item)=>{
           if(item.id == id )status=true;
            return  item.id !=id;
        })
        return  status;
    }

    update(id: string , request:any ):boolean{
         let element = this._jsonMock.filter(item =>{
             return item.id === id;
         })[0];
         const index = this._jsonMock.indexOf(element);
         const keys = Object.keys(request.body);
         console.log(keys);
         keys.forEach( key => element[key] = request.body[key]);
         this._jsonMock[index] = element;
         return true;
     }

   

     searchDelegate(arr, s){
      var matches = [], i; 
      arr.forEach((item)=>{
        if(item.name && item.name.toLowerCase().indexOf(s.toLowerCase()) > -1 )matches.push( item );
        })
         return matches;
      }

    async LoadData(){
      return  fs.readFileSync('./src/data/MocksHotels.json');
    }

}