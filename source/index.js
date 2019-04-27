const hasTruthy = input => {
  if (Array.isArray(input)) return Boolean(input.find(Boolean))

  throw new Error(`has-truthy expected an array, got "${input}". Type: ${typeof input}`)
}

module.exports = hasTruthy
