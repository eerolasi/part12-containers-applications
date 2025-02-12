import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders content', () => {
  const todo = {
    text: 'Clean',
    done: false,
  }

  render(<Todo todo={todo} />)

  const element = screen.getByText('This todo is not done')
  expect(element).toBeDefined()

  screen.debug()
})
