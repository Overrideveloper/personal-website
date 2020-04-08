import { newE2EPage } from '@stencil/core/testing';

describe('root-redirect', () => {
  it('renders', async () => {
    const page = await newE2EPage({ url: '/'});

    const element = await page.find('root-redirect');
    expect(element).toHaveClass('hydrated');
  });

  it('renders the title', async () => {
    const page = await newE2EPage({ url: '/'});

    const element = await page.find('root-redirect >>> h1');
    expect(element.textContent).toEqual('Stencil App Starter');
  });
});
