import { render, fireEvent, screen } from '@testing-library/react';
import TodoItem from '../components/TodoItem';

describe('TodoItem Component', () => {
  const mockTodo = {
    id: 1,
    text: 'Test Todo',
    completed: false
  };
  const mockToggle = jest.fn();
  const mockDelete = jest.fn();

  beforeEach(() => {
    mockToggle.mockClear();
    mockDelete.mockClear();
  });

  it('renders todo item correctly', () => {
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={mockToggle}
        onDelete={mockDelete}
      />
    );

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('calls onToggle when checkbox is clicked', () => {
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={mockToggle}
        onDelete={mockDelete}
      />
    );

    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockToggle).toHaveBeenCalledWith(mockTodo.id);
  });

  it('calls onDelete when delete button is clicked', () => {
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={mockToggle}
        onDelete={mockDelete}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /delete/i }));
    expect(mockDelete).toHaveBeenCalledWith(mockTodo.id);
  });

  it('shows completed styling when todo is completed', () => {
    const completedTodo = { ...mockTodo, completed: true };
    render(
      <TodoItem
        todo={completedTodo}
        onToggle={mockToggle}
        onDelete={mockDelete}
      />
    );

    const todoText = screen.getByText('Test Todo');
    expect(todoText).toHaveClass('line-through');
  });
});