import Rating from '../models/rating';
import Product from '../models/product';

const BASE_URL = 'https://fakestoreapi.com/products';

export async function getProducts(){
  try {
    const response = await fetch(`${BASE_URL}`);
    const responseJson = await response.json();

    const result = responseJson.map((respon) => 
      new Product(
        respon.id,
        respon.title,
        respon.price,
        respon.description,
        respon.category,
        respon.image,
        new Rating(respon.rating.rate, respon.rating.count),
      )
    );
    
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const responseJson = await response.json();
    return new Product(
      responseJson.id,
      responseJson.title,
      responseJson.price,
      responseJson.description,
      responseJson.category,
      responseJson.image,
      new Rating(responseJson.rating.rate, responseJson.rating.count),
    );
  } catch (error) {
    console.log(error);
  }
}