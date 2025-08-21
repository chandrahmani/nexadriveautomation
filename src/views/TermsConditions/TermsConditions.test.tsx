import { render, screen } from '@testing-library/react';
import About from './TermsConditions';
import TermsConditions from './TermsConditions';

describe('TermsConditions', () => {
  it('renders Terms and Conditions heading and content', () => {
    render(<TermsConditions />);
    expect(screen.getByRole('heading', { name: /terms and conditions/i })).toBeInTheDocument();
    expect(screen.getByText(/welcome to our company/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /meet our team/i })).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });
});
