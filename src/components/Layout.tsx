import _ from 'lodash'
import { children, For } from 'solid-js'
import { tw, apply } from "twind";
import { css } from "twind/css";

export function Spacer({ size = 8, flex, grow, shrink, class: _class, children, ...props }) {
  const spacerBaseCls = apply`
  block
  ${'w-' + size} ${'h-' + size}
  ${css({ flexBasis: `${size / 4}rem` })}
  ${flex && `flex-${flex}`}
  ${grow && `grow-${grow}`}
  ${shrink && `shrink-${shrink}`}
  `
  return <div class={tw(spacerBaseCls, _class)} {...props} />
}

export function Interspaced({ gutter=4, children: _children, ...props }) {
  const resolved = children(() => _children)
  const childs = resolved()
  const gutters = _.range(_.size(childs) - 1).map(() => <Spacer size={gutter} />)
  const items = _.flatten(_.zip(childs, gutters))
  return items
}


export function Flex({ items, content, justify, justifyItems, placeContent, row, col, direction, class: _class, ...props }) {
  // CSS equivalents:
  //   items -> align-items
  //   content -> align-content
  //   justify -> justify-content
  //   justifyItems -> justify-items
  const flexCls = apply`
  flex
  ${(row || direction == 'row') && 'flex-row'}
  ${(col || direction == 'col') && 'flex-col'}
  ${items && `items-${items}`}
  ${content && `content-${content}`}
  ${justify && `justify-${justify}`}
  ${justifyItems && `justify-items-${justifyItems}`}
  ${placeContent && `place-content-${placeContent}`}
  `
  return <div class={tw(flexCls, _class)} {...props} />
}

export function Row({ row, col, gutter, direction, children, ...props }) {
  return (
    <Flex row items='center' {...props}>
      {gutter ? <Interspaced gutter={gutter}>{children}</Interspaced> : children}
    </Flex>
  )
}

export function Col({ row, col, gutter, direction, children, ...props }) {
  return (
    <Flex col items='center' {...props}>
      {gutter ? <Interspaced gutter={gutter}>{children}</Interspaced> : children}
    </Flex>
  )
}

export function Centered({gutter, children, ...props}) {
  return (
    <Flex items='center' justify='center' {...props}>
      {gutter ? <Interspaced gutter={gutter}>{children}</Interspaced> : children}
    </Flex>
  )
}
