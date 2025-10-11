import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  describe('Initial Render', () => {
    it('renders the todo input form', () => {
      expect(screen.getByRole('textbox')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
    });

    it('renders empty todo list', () => {
      const list = screen.getByRole('list');
      expect(list).toBeInTheDocument();
      expect(list.children.length).toBe(0);
    });
  });

  describe('Adding Todos', () => {
    it('adds a new todo when form is submitted', () => {
      const input = screen.getByRole('textbox');
      const addButton = screen.getByRole('button', { name: /add/i });

      fireEvent.change(input, { target: { value: 'New Todo Item' } });
      fireEvent.click(addButton);

      expect(screen.getByText('New Todo Item')).toBeInTheDocument();
      expect(input.value).toBe(''); // Input should be cleared
    });

    it('does not add empty todos', () => {
      const addButton = screen.getByRole('button', { name: /add/i });
      const list = screen.getByRole('list');
      
      fireEvent.click(addButton);
      expect(list.children.length).toBe(0);
    });
  });

  describe('Todo Management', () => {
    it('toggles todo completion status', () => {
      // Add a todo first
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'Test Todo' } });
      fireEvent.click(screen.getByRole('button', { name: /add/i }));

      // Find and click the checkbox
      const checkbox = screen.getByRole('checkbox');
      fireEvent.click(checkbox);
      expect(checkbox).toBeChecked();

      // Toggle back
      fireEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });

    it('deletes a todo', () => {
      // Add a todo first
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'Todo to Delete' } });
      fireEvent.click(screen.getByRole('button', { name: /add/i }));

      // Delete the todo
      const deleteButton = screen.getByRole('button', { name: /delete/i });
      fireEvent.click(deleteButton);

      expect(screen.queryByText('Todo to Delete')).not.toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has accessible form controls', () => {
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-label', 'New todo input');
      expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
    });
  });
});