import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

export const CardDemo = () => {
  const header = (
    <img
      alt="Card"
      src="showcase/demo/images/usercard.png"
      onError={(e) =>
        (e.target.src =
          'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
      }
    />
  );
  const footer = (
    <span>
      <Button label="Save" icon="pi pi-check" />
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-secondary p-ml-2"
      />
    </span>
  );

  return (
    <div>
      <Card title="Simple Card" style={{ width: '10rem', marginBottom: '2em' }}>
        <p className="p-m-0" style={{ lineHeight: '1.5' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
        </p>
      </Card>
    </div>
  );
};
