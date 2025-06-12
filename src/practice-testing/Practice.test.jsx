import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import CustomButton from "./CustomButton";

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});

describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});

// describe("App component", () => {
//     it("renders corretct heading", () => {
//         render(<App />);
//         expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
//     });
// });

describe("App component", () => {
    it("renders magnificient monkeys", () => {
        // since screen does not have the container property, we'll destructure render to obtain a container for this test
        const { container } = render(<App />);

        expect(container).toMatchSnapshot();
    });

    it("renders radical rhinos after button click", async () => {
        const user = userEvent.setup();

        render(<App />);
        const button = screen.getByRole("button", { name: "Click Me" });

        await user.click(button);

        expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
    });
});

// ------------ Mocking callback ------------

describe("CustomButton", () => {
    it("should render a button with the text 'Click me'", () => {
        render(<CustomButton onClick={() => {}} />);

        const button = screen.getByRole("button", { name: "Click me" });

        expect(button).toBeInTheDocument();
    });
  
    it("should call the onClick function when clicked", async () => {
        const onClick = vi.fn();
        const user = userEvent.setup();

        render(<CustomButton onClick={onClick} />);

        const button = screen.getByRole("button", { name: "Click me" });

        await user.click(button);

        expect(onClick).toHaveBeenCalled();
    });

    it("should not call the onClick function when it isn't clicked", async () => {
        const onClick = vi.fn();

        render(<CustomButton onClick={onClick} />);

        expect(onClick).not.toHaveBeenCalled();
    });
});

// --------------- Mock a child component example -------------

// jest.mock('../submission', () => ({ submission, isDashboardView }) => (
//   <>
//     <div data-test-id="submission">{submission.id}</div>
//     <div data-test-id="dashboard">{isDashboardView.toString()}</div>
//   </>
// ));