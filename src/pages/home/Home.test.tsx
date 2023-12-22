import { render } from '@testing-library/react';

import Home from '.';

describe('Home Component', () => {
  it('should render the Home word', () => {
    const { container, getByText } = render(<Home />);

    getByText('Home');
    expect(container.firstChild).toBeInTheDocument();
  });
});
