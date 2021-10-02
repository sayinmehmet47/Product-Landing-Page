export class ProductService {
  getProductsSmall() {
    return fetch('https://challenge.fnaghshin.com/api/randompro/20 ')
      .then((res) => res.json())
      .then((data) =>
        data.map((e) => {
          return {
            id: e.id,
            name: e.title,
            description: e.text,
            image: e.image,
            price: e.price,
            category: e.category.name,
          };
        })
      );
  }

  getProductsWithOrdersSmall() {
    return fetch('data/products-orders-small.json')
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
