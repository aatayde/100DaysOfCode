// Union Type
type Icon = '🍔' | '🍟' | '🥤' | '🍦'
type Size = 'sm' | 'md' | 'lg'

// Template & Literal types
type SizedIcon = `${Size}-${Icon}`

// String interpolation
const order:SizedIcon = 'lg-🍟'