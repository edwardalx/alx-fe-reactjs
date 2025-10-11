import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  // Initial Render Tests
  describe('Initial Render', () => {
    it('should render the todo input form', () => {
      render(<TodoList />);
      expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
    });

    it('should render initial demo todos if any', () => {
      render(<TodoList />);
      const todoList = screen.getByRole('list');
      expect(todoList).toBeInTheDocument();
    });
  });

  // Add Todo Tests
  describe('Adding Todos', () => {
    it('should add a new todo when form is submitted', () => {
      render(<TodoList />);
      const input = screen.getByPlaceholderText('Add a new todo');
      const addButton = screen.getByRole('button', { name: /add/i });

      fireEvent.change(input, { target: { value: 'New Todo Item' } });
      fireEvent.click(addButton);

      expect(screen.getByText('New Todo Item')).toBeInTheDocument();
      expect(input.value).toBe(''); // Input should be cleared after submission
    });

    it('should not add empty todos', () => {
      render(<TodoList />);
      const input = screen.getByPlaceholderText('Add a new todo');
      const addButton = screen.getByRole('button', { name: /add/i });
      
      // Add a valid todo first
      fireEvent.change(input, { target: { value: 'Test Todo' } });
      fireEvent.click(addButton);
      
      // Try to add an empty todo
      fireEvent.change(input, { target: { value: '' } });
      fireEvent.click(addButton);
      
      // Should only have the one valid todo
      expect(screen.getAllByRole('listitem')).toHaveLength(1);
    });
  });

  // Toggle Todo Tests
  describe('Toggling Todos', () => {
    it('should toggle todo completion status when checkbox is clicked', () => {
      render(<TodoList />);
      const input = screen.getByPlaceholderText('Add a new todo');
      const addButton = screen.getByRole('button', { name: /add/i });

      // Add a new todo first
      fireEvent.change(input, { target: { value: 'Toggle Test Todo' } });
      fireEvent.click(addButton);

      const checkbox = screen.getByRole('checkbox');
      fireEvent.click(checkbox);
      expect(checkbox).toBeChecked();

      fireEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });
  });

  // Delete Todo Tests
  describe('Deleting Todos', () => {
    it('should remove todo when delete button is clicked', () => {
      render(<TodoList />);
      const input = screen.getByPlaceholderText('Add a new todo');
      const addButton = screen.getByRole('button', { name: /add/i });

      // Add a new todo first
      fireEvent.change(input, { target: { value: 'Todo to Delete' } });
      fireEvent.click(addButton);

      const deleteButton = screen.getByRole('button', { name: /delete/i });
      const todoText = screen.getByText('Todo to Delete');
      
      fireEvent.click(deleteButton);
      expect(todoText).not.toBeInTheDocument();
    });
  });

  // Accessibility Tests
  describe('Accessibility', () => {
    it('should have accessible names for interactive elements', () => {
      render(<TodoList />);
      expect(screen.getByRole('button', { name: /add/i })).toHaveAccessibleName();
      expect(screen.getByPlaceholderText('Add a new todo')).toHaveAccessibleName();
    });
  });
});