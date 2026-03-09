import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import Contact from './Contact';
import { PROFILE } from '../data/constants';

// Mock matchMedia, commonly needed for Next.js and framer-motion tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver needed by framer-motion
class IntersectionObserverMock {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
}
Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: IntersectionObserverMock,
});

describe('Contact Component', () => {
  const originalLocation = window.location;

  beforeEach(() => {
    // Delete window.location and mock it
    delete (window as Partial<Window>).location;
    window.location = { ...originalLocation, href: '' } as unknown as Location;
  });

  afterEach(() => {
    // Restore window.location
    window.location = originalLocation;
    vi.restoreAllMocks();
  });

  it('submits the form correctly and constructs the correct mailto link', async () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText(/Your Name/i);
    const emailInput = screen.getByLabelText(/Your Email/i);
    const messageInput = screen.getByLabelText(/Message/i);
    const submitButton = screen.getByRole('button', { name: /Send Message/i });

    const testName = 'John Doe';
    const testEmail = 'john@example.com';
    const testMessage = 'Hello, this is a test message.';

    await userEvent.type(nameInput, testName);
    await userEvent.type(emailInput, testEmail);
    await userEvent.type(messageInput, testMessage);

    // Provide a mocked event with preventDefault
    fireEvent.submit(submitButton.closest('form') as HTMLFormElement);

    const expectedMailto = `mailto:${PROFILE.email}?subject=Contact from ${testName}&body=From: ${testName} (${testEmail})%0D%0A%0D%0A${testMessage}`;

    expect(window.location.href).toBe(expectedMailto);
  });

  it('calls e.preventDefault() on form submit to prevent page reload', () => {
    render(<Contact />);

    const form = screen.getByRole('button', { name: /Send Message/i }).closest('form') as HTMLFormElement;

    const preventDefaultSpy = vi.fn();

    const event = new Event('submit', { bubbles: true, cancelable: true });
    Object.assign(event, { preventDefault: preventDefaultSpy });

    fireEvent(form, event);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });
});
