import Axios from "axios"

export default class Request{
  public static async retrievePokemonLists (){
    try{
      const toReturn = await Axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      return toReturn
    }catch(e){
     alert('Terjadi kesalahan mengambil data list Pokemon')
      return {status:404}
    }
  }
}