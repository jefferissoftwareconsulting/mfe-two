import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { MfeTwo } from '../src/MfeTwo.js';
import '../src/mfe-two.js';

describe('MfeTwo', () => {
  it('has a default title "Hey" and counter 5', async () => {
    const el = await fixture<MfeTwo>(html`<mfe-two></mfe-two>`);

    expect(el.title).to.equal('Hey');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<MfeTwo>(html`<mfe-two></mfe-two>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MfeTwo>(html`<mfe-two title="attribute title"></mfe-two>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MfeTwo>(html`<mfe-two></mfe-two>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
