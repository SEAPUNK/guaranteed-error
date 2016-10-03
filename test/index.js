import test from 'ava'
import guaranteedError from '../'

test('empty errors', t => {
  t.plan(3)

  const fixed = guaranteedError()
  t.is(fixed.name, 'Error')
  t.is(fixed.message, '<No error message provided>')
  t.is(fixed.stack,
`Error: <No error message provided>
    at <unknown>`
  )
})

test('strings instead of errors', t => {
  t.plan(3)

  const fixed = guaranteedError('nice')
  t.is(fixed.name, 'Error')
  t.is(fixed.message, 'nice')
  t.is(fixed.stack,
`Error: nice
    at <unknown>`
  )
})

test('errors without names', t => {
  t.plan(3)

  const broken = new Error('okay')
  broken.name = undefined

  const fixed = guaranteedError(broken)
  t.is(fixed.name, 'Error')
  t.is(fixed.message, 'okay')
  t.is(fixed.stack.indexOf('Error: okay'), 0)
})

test('errors without messages', t => {
  t.plan(3)

  const broken = new Error('okay')
  broken.message = undefined

  const fixed = guaranteedError(broken)
  t.is(fixed.name, 'Error')
  t.is(fixed.message, '<No error message provided>')
  t.is(fixed.stack.indexOf('Error: <No error message provided>'), 0)
})

test('errors without stacks', t => {
  t.plan(3)

  const broken = new Error('okay')
  broken.stack = undefined

  const fixed = guaranteedError(broken)
  t.is(fixed.name, 'Error')
  t.is(fixed.message, 'okay')
  t.is(fixed.stack,
`Error: okay
    at <unknown>`)
})
