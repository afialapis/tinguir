![tinguir logo](https://tinguir.afialapis.com/logo.png)

[![NPM Version](https://badge.fury.io/js/tinguir.svg)](https://www.npmjs.com/package/tinguir)
[![NPM Downloads](https://img.shields.io/npm/dm/tinguir.svg?style=flat)](https://www.npmjs.com/package/tinguir)


# tinguir

---

> **tinguir**:

> **1** Darlle a [algo] unha determinada cor distinta da que tiña, particularmente mediante tintura. 

> _Levou unha saia á tinturaría para tinguila de negro. Tinguiu o pelo._

---

## Intro

`tinguir` is just for coloring your texts using [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code).

## Install

```
  npm i tinguir
```

## Usage

```js
import {magenta_bold} from 'tinguir'

console.log( magenta_bold()'This text will be magenta and bolded!) )

```

## API

### Color functions

Available colors are:

  - `black`
  - `black_bold`
  - `black_light`
  - `black_italic`
  - `black_under`
  - `black_invert`
  - `black_strike`
  - `red`
  - `red_bold`
  - `red_light`
  - `red_italic`
  - `red_under`
  - `red_invert`
  - `red_strike`
  - `green`
  - `green_bold`
  - `green_light`
  - `green_italic`
  - `green_under`
  - `green_invert`
  - `green_strike`
  - `yellow`
  - `yellow_bold`
  - `yellow_light`
  - `yellow_italic`
  - `yellow_under`
  - `yellow_invert`
  - `yellow_strike`
  - `blue`
  - `blue_bold`
  - `blue_light`
  - `blue_italic`
  - `blue_under`
  - `blue_invert`
  - `blue_strike`
  - `magenta`
  - `magenta_bold`
  - `magenta_light`
  - `magenta_italic`
  - `magenta_under`
  - `magenta_invert`
  - `magenta_strike`
  - `cyan`
  - `cyan_bold`
  - `cyan_light`
  - `cyan_italic`
  - `cyan_under`
  - `cyan_invert`
  - `cyan_strike`
  - `white`
  - `white_bold`
  - `white_light`
  - `white_italic`
  - `white_under`
  - `white_invert`
  - `white_strike`
  - `gray`
  - `gray_bold`
  - `gray_light`
  - `gray_italic`
  - `gray_under`
  - `gray_invert`
  - `gray_strike`

### `uncolor`

There's also `uncolor(colored_string)` function, which servers for, surprise, remove color escape codes from a string.
