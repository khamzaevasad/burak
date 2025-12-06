import { ViewGroup } from "./../libs/enums/view.enum";
import { ObjectId } from "mongoose";
import {
  Product,
  ProductInquiry,
  ProductUpdateInput,
} from "./../libs/types/products";
import { ProductInput } from "../libs/types/products";
import ProductModel from "../schema/Product.model";
import Errors, { Message, HttpCode } from "../libs/Errors";
import { shapeIntoMongooseObjectId } from "../libs/config";
import { T } from "../libs/types/common";
import { ProductStatus } from "../libs/enums/product.enum";
import ViewService from "./view.service";
import { ViewInput } from "../libs/types/view";

class ProductService {
  private readonly productModel;
  public viewService;

  constructor() {
    this.productModel = ProductModel;
    this.viewService = new ViewService();
  }

  // spa
  // getProducts
  public getProducts = async (inquiry: ProductInquiry): Promise<Product[]> => {
    const match: T = { productStatus: ProductStatus.PAUSE };

    if (inquiry.productCollection)
      match.productCollection = inquiry.productCollection;
    if (inquiry.search)
      match.productName = { $regex: new RegExp(inquiry.search, "i") };

    const sort: T =
      inquiry.order === "productPrice"
        ? { [inquiry.order]: 1 }
        : { [inquiry.order]: -1 };

    const result = await this.productModel
      .aggregate([
        { $match: match },
        { $sort: sort },
        { $skip: (inquiry.page * 1 - 1) * inquiry.limit }, //3
        { $limit: inquiry.limit * 1 }, //3
      ])
      .exec();

    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
  };

  // getProduct
  public getProduct = async (
    memberId: ObjectId | null,
    id: string
  ): Promise<Product> => {
    const productId = shapeIntoMongooseObjectId(id);

    let result = await this.productModel
      .findOne({
        _id: productId,
        productStatus: ProductStatus.PAUSE,
      })
      .exec();

    if (memberId) {
      // Check Existence
      const input: ViewInput = {
        memberId: memberId,
        viewRefId: productId,
        viewGroup: ViewGroup.PRODUCT,
      };
      const existView = await this.viewService.checkViewExistence(input);

      console.log("existView", !!existView);
      if (!existView) {
        // Insert View
        console.log("PLANNING TO INSERT NEW VIEW");
        // Increase Counts
        await this.viewService.insertMemberView(input);

        result = await this.productModel
          .findByIdAndUpdate(
            productId,
            { $inc: { productViews: +1 } },
            { new: true }
          )
          .exec();
      }
    }

    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
  };

  // findProduct
  // public findProduct = async (productId: ObjectId): Promise<Product> => {
  //   const product = await this.productModel.findById(productId).exec();

  //   if (!product) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
  //   return product;
  // };

  // updateCount
  // public updateCount = async (
  //   productId: ObjectId,
  //   newCount: number
  // ): Promise<Product> => {
  //   const updated = await this.productModel
  //     .findOneAndUpdate(
  //       { _id: productId },
  //       { productLeftCount: newCount },
  //       { new: true }
  //     )
  //     .exec();

  //   if (!updated) throw new Errors(HttpCode.BAD_REQUEST, Message.UPDATE_FAILED);
  //   return updated;
  // };

  // ssr
  // getAllProducts
  public getAllProducts = async (): Promise<Product[]> => {
    const result = await this.productModel.find().exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    return result;
  };
  // createNewProduct
  public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
      return await this.productModel.create(input);
    } catch (err) {
      console.log("Error model:createNewProduct", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
  // updateChosenProduct
  public updateChosenProduct = async (
    id: string,
    input: ProductUpdateInput
  ): Promise<Product> => {
    id = shapeIntoMongooseObjectId(id);
    const result = await this.productModel
      .findOneAndUpdate({ _id: id }, input, {
        new: true,
      })
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
    return result;
  };
}

export default ProductService;
