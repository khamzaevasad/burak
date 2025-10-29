import { Product, ProductUpdateInput } from "./../libs/types/products";
import { ProductInput } from "../libs/types/products";
import ProductModel from "../schema/Product.model";
import Errors, { Message, HttpCode } from "../libs/Errors";
import { shapeIntoMongooseObjectId } from "../libs/config";

class ProductService {
  private readonly productModel;

  constructor() {
    this.productModel = ProductModel;
  }
  // bssr

  public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
      return await this.productModel.create(input);
    } catch (err) {
      console.log("Error model:createNewProduct", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  public updateChosenProduct = async (
    id: string,
    input: ProductUpdateInput
  ): Promise<Product> => {
    id = shapeIntoMongooseObjectId(id);
    const result = this.productModel.findOneAndUpdate({ _id: id }, input, {
      new: true,
    });
    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
    return result;
  };
}
// spa

export default ProductService;
