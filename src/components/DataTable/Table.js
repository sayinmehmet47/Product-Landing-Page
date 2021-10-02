import React, { useState, useEffect } from 'react';

import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import '../../index.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { ProductService } from '../../service/ProductService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export const Table = () => {
  const [products, setProducts] = useState([]);
  const productService = new ProductService();

  useEffect(() => {
    productService.getProductsSmall().then((data) => setProducts(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log(products);

  const formatCurrency = (value) => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        src={rowData.image}
        onError={(e) =>
          (e.target.src =
            'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
        }
        alt={rowData.image}
        className="product-image"
      />
    );
  };

  const priceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.price);
  };

  const descriptionBodyTemplate = (rowData) => {
    return formatCurrency(rowData.description);
  };

  const header = (
    <div className="table-header">
      OUR NEW SEASON OFFERS
      <Button icon="pi pi-refresh" />
    </div>
  );
  const footer = `In total there are ${
    products ? products.length : 0
  } products.`;

  return (
    <div className="datatable-templating-demo">
      <div className="card">
        <DataTable value={products} header={header} footer={footer}>
          <Column field="name" header="Name"></Column>
          <Column header="Image" body={imageBodyTemplate}></Column>
          <Column
            field="price"
            header="Price"
            body={priceBodyTemplate}
          ></Column>
          <Column field="category" header="Category"></Column>
        </DataTable>
      </div>
    </div>
  );
};
