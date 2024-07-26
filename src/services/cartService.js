const Cart = require('../models/cart');
const Product = require('../models/product');
const User = require('../models/user.model');

class CartService {
  async createCart(userId) {
    try {
      const carrito = new Cart({ usuarioId: userId, productos: [] });
      await carrito.save();
      return carrito;
    } catch (error) {
      throw new Error('Error al crear el carrito: ' + error.message);
    }
  }

  async getCartByUserId(userId) {
    try {
      const carrito = await Cart.findOne({ usuarioId: userId }).populate('productos.productoId');
      if (!carrito) {
        throw new Error('Carrito no encontrado');
      }
      return carrito;
    } catch (error) {
      throw new Error('Error al obtener el carrito: ' + error.message);
    }
  }

  async addProductToCart(userId, productoId, cantidad) {
    try {
      const carrito = await this.getCartByUserId(userId);
      const productIndex = carrito.productos.findIndex(p => p.productoId.toString() === productoId);

      if (productIndex >= 0) {
        carrito.productos[productIndex].cantidad += cantidad;
      } else {
        carrito.productos.push({ productoId, cantidad });
      }

      await carrito.save();
      return carrito;
    } catch (error) {
      throw new Error('Error al agregar producto al carrito: ' + error.message);
    }
  }

  async removeProductFromCart(userId, productoId) {
    try {
      const carrito = await this.getCartByUserId(userId);
      carrito.productos = carrito.productos.filter(p => p.productoId.toString() !== productoId);
      await carrito.save();
      return carrito;
    } catch (error) {
      throw new Error('Error al eliminar producto del carrito: ' + error.message);
    }
  }

  async updateProductQuantity(userId, productoId, cantidad) {
    try {
      const carrito = await this.getCartByUserId(userId);
      const productIndex = carrito.productos.findIndex(p => p.productoId.toString() === productoId);

      if (productIndex >= 0) {
        carrito.productos[productIndex].cantidad = cantidad;
        await carrito.save();
        return carrito;
      } else {
        throw new Error('Producto no encontrado en el carrito');
      }
    } catch (error) {
      throw new Error('Error al actualizar la cantidad del producto: ' + error.message);
    }
  }

  async clearCart(userId) {
    try {
      const carrito = await this.getCartByUserId(userId);
      carrito.productos = [];
      await carrito.save();
      return carrito;
    } catch (error) {
      throw new Error('Error al vaciar el carrito: ' + error.message);
    }
  }
}

module.exports = new CartService();
