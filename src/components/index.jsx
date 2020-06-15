import React from 'react';

import Page, { Grid, GridColumn } from '@atlaskit/page';
import Button from '@atlaskit/button';

export default function () {
  return (
    <Page>
      <Grid>
        <GridColumn>
          <h2>Header</h2>
        </GridColumn>
      </Grid>
      <Grid>
        <GridColumn medium={2}>
          <h2>Sidebar</h2>
        </GridColumn>
        <GridColumn medium={10}>
          <h2>Body</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis voluptatum perspiciatis doloribus dignissimos accusamus
            commodi, nobis ut, error iusto, quas vitae nesciunt consequatur
            possimus labore! Mollitia est quis minima asperiores.
          </p>
          <Button appearance="primary">Button</Button>
        </GridColumn>
      </Grid>
    </Page>
  );
}
