import * as assert from 'assert'
import { _right, _left } from '../../src/Either'
import { right, left } from 'fp-ts/lib/Either'
import { some, none } from 'fp-ts/lib/Option'

describe('Either', () => {
  it('_right', () => {
    const prism = _right<string, number>()
    assert.deepStrictEqual(prism.getOption(right(1)), some(1))
    assert.deepStrictEqual(prism.getOption(left('a')), none)
  })

  it('_left', () => {
    const prism = _left<string, number>()
    assert.deepStrictEqual(prism.getOption(right(1)), none)
    assert.deepStrictEqual(prism.getOption(left('a')), some('a'))
  })
})
