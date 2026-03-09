import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from '../Navbar';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => {
  const actualFramerMotion = jest.requireActual('framer-motion');

  // Create a proxy to mock all motion components dynamically
  const motionProxy = new Proxy({}, {
    get: (_, property) => {
      // Return a standard React component for any requested motion component
      return ({ children, ...props }: React.PropsWithChildren<any>) => {
        // Remove framer-motion specific props to avoid warnings
        const validProps = { ...props };
        delete validProps.initial;
        delete validProps.animate;
        delete validProps.exit;
        delete validProps.transition;
        delete validProps.variants;
        delete validProps.whileHover;
        delete validProps.whileTap;

        return React.createElement(property as string, validProps, children);
      };
    }
  });

  return {
    ...actualFramerMotion,
    motion: motionProxy,
    AnimatePresence: ({ children }: React.PropsWithChildren<unknown>) => <>{children}</>,
  };
});

describe('Navbar Component', () => {
  it('renders the logo', () => {
    render(<Navbar />);
    expect(screen.getByText('Aditya.dev')).toBeInTheDocument();
  });

  it('renders desktop navigation links', () => {
    render(<Navbar />);

    // Using getAllByText since links might be duplicated in mobile menu
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Experience').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Projects').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
  });

  it('toggles mobile menu when clicking the menu button', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    // Initially mobile menu should be hidden
    // The mobile menu container is conditionally rendered based on `isOpen` state
    // Let's check for links in the mobile menu by seeing if there are duplicates
    const desktopAboutLinks = screen.getAllByText('About');
    expect(desktopAboutLinks).toHaveLength(1); // Only desktop link is visible initially

    // Find the toggle button
    // It has a screen reader text or icon, let's look for the button containing the icon
    const toggleButton = screen.getByRole('button', { name: /toggle mobile menu/i });
    expect(toggleButton).toBeInTheDocument();

    // Click the toggle button to open
    await user.click(toggleButton);

    // Now we should have 2 links for each nav item (desktop + mobile)
    const allAboutLinks = screen.getAllByText('About');
    expect(allAboutLinks).toHaveLength(2);

    // Click again to close
    await user.click(toggleButton);

    // Should be back to 1 link
    const finalAboutLinks = screen.getAllByText('About');
    expect(finalAboutLinks).toHaveLength(1);
  });

  it('closes mobile menu when clicking a link', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    // Open mobile menu
    const toggleButton = screen.getByRole('button', { name: /toggle mobile menu/i });
    await user.click(toggleButton);

    // Ensure it's open
    expect(screen.getAllByText('About')).toHaveLength(2);

    // Click the mobile "About" link
    // The mobile menu links have onClick handlers
    const mobileAboutLink = screen.getAllByText('About')[1]; // Second one is mobile
    await user.click(mobileAboutLink);

    // Menu should close
    expect(screen.getAllByText('About')).toHaveLength(1);
  });
});
