/* global test, expect */

const { request } = require('node:http')
const Keyv = require('keyv')
const CacheableRequest = require('../src')
test('CacheableRequest is a function', () => {
  expect(typeof CacheableRequest).toBe('function')
})
test("CacheableRequest cannot be invoked without 'new'", () => {
  expect(() => CacheableRequest(request, {})).not.toThrow()
})
test('CacheableRequest accepts Keyv instance', () => {
  expect(() => CacheableRequest(request, new Keyv())).not.toThrow()
})
