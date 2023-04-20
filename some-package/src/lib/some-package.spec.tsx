import { render } from '@testing-library/react';

import SomePackage from './some-package';

describe('SomePackage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SomePackage />);
    expect(baseElement).toBeTruthy();
  });
});
