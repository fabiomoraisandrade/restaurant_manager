import prismaClient from "../prisma";
import { AddItemToOrder } from "../types/OrderTypes";

class OrderItemRepository {
  async findAll() {
    return prismaClient.orderItem.findMany();
  }

  async findById(id: string) {
    return prismaClient.orderItem.findUnique({
      where: { id },
    });
  }

  async create({ order_id, product_id, amount }: AddItemToOrder) {
    return prismaClient.orderItem.create({
      data: {
        order_id,
        product_id,
        amount,
      },
    });
  }

  async delete(id: string) {
    return prismaClient.orderItem.delete({
      where: { id: id },
    });
  }
}

export default new OrderItemRepository();
