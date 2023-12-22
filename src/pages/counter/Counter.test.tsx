import renderWithProviders from '@utils/reduxToolkitTestUtils';
import { fireEvent } from '@testing-library/react';
import Counter from '.';

describe('Counter Component', () => {
  it('renders with initial state: 0', () => {
    const { container, getByText } = renderWithProviders(<Counter />);

    getByText('0');
    expect(container.firstChild).toBeInTheDocument();
  });

  it('dispatch increment actions when increment button is clicked', () => {
    const { store, getByText } = renderWithProviders(<Counter />);

    fireEvent.click(getByText(/Increment/i));
    expect(store.getState().counter.value).toBe(1);
    expect(getByText(/1/i)).toBeInTheDocument();
  });
});
