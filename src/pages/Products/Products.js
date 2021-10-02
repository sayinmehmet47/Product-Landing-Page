import React, { useEffect, useState } from 'react';
import { Tree } from 'primereact/tree';
import { ProductService } from '../../service/ProductService';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';

import { ProgressSpinner } from 'primereact/progressspinner';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const URL = 'https://challenge.fnaghshin.com/api/cat';
  const CHILDREN_URL = `https://challenge.fnaghshin.com/api/catpro/`;

  function getCategories() {
    return fetch(URL)
      .then((res) => res.json())
      .then((data) => Promise.all(data.map(getSubCategories)));
  }

  function getSubCategories(data) {
    return fetch(CHILDREN_URL + data.id)
      .then((res) => res.json())
      .then((info) => ({
        key: data.id,
        label: data.name,
        date: data.created_at,
        children: info.map((e) => ({
          key: e.id,
          label: e.title,
          url: `/products/${data.id}`,
        })),
      }));
  }
  useEffect(() => {
    getCategories()
      .then((e) => {
        setProducts(e);
        setIsLoaded(true);
      })
      .catch();
  }, []);

  const nodeTemplate = (products, options) => {
    let label = <b>{products.label}</b>;

    if (products.url) {
      label = <a href={products.url}>{products.label}</a>;
    }

    return <span className={options.className}>{label}</span>;
  };

  return (
    <div>
      {isLoaded ? (
        <div className="card">
          <Tree value={products} nodeTemplate={nodeTemplate} />
        </div>
      ) : (
        <ProgressSpinner
          style={{ width: '50px', height: '50px' }}
          strokeWidth="8"
          fill="#EEEEEE"
          animationDuration=".5s"
        />
      )}
    </div>
  );
}
