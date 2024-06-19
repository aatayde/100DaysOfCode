# Day 95 | Sass

_Syntactically Awesome Style Sheet_

pre processor scripting language interpreted/compiled as css.

[![sass logo](./logo.svg)][1]

[1]: https://sass-lang.com/

## [Resources][1]

- [Variables](#variables)
- [Nesting](#nesting)
- [Partials](#partials)
- [Modules](#modules)
- [Mixins](#mixins)
- [Extended/Inheritance](#extended-inheritance)
- [Operators](#operators)

## Variables

reuse styles by storing the value

```
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color

```

## Nesting

nest css selectors with a visual hierarchy

```
nav
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block

  a
    display: block
    padding: 6px 12px
    text-decoration: none

```

## Partials

modularize styles by using code snippets of css to your sass

`_partial.scss`

## Modules

load another sass file as a module, useful for separating mixins & functions

```
// _base.sass
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color

```

```
// styles.sass
@use 'base'

.inverse
  background-color: base.$primary-color
  color: white

```

## Mixins

make & reuse groups of css declarations

```
@mixin theme($theme: DarkGray)
  background: $theme
  box-shadow: 0 0 1px rgba($theme, .25)
  color: #fff

.info
  @include theme

.alert
  @include theme($theme: DarkRed)

.success
  @include theme($theme: DarkGreen)

```

## Extended Inheritance

share css properties form one selector to another

```
/* This CSS will print because %message-shared is extended. */
%message-shared
  border: 1px solid #ccc
  padding: 10px
  color: #333

// This CSS won't print because %equal-heights is never extended.
%equal-heights
  display: flex
  flex-wrap: wrap

.message
  @extend %message-shared

.success
  @extend %message-shared
  border-color: green

.error
  @extend %message-shared
  border-color: red

.warning
  @extend %message-shared
  border-color: yellow


```

## Operators

use math operators to calculate style values

```
@use "sass:math"

.container
  display: flex

article[role="main"]
  width: math.div(600px, 960px) * 100%

aside[role="complementary"]
  width: math.div(300px, 960px) * 100%
  margin-left: auto

```
