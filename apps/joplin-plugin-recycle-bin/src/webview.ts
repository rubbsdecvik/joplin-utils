import { createElement, useState } from 'react'
import * as ReactDOM from 'react-dom'
import type { RecycleBinNote } from './core/RecycleBin'
import { useMount } from 'react-use'

const h = createElement

function App() {
  async function revert(id: string) {
    console.log('revert: ', id)
    // @ts-ignore
    await webviewApi.postMessage({ type: 'revert', args: [id] })
    await refresh()
  }
  const [list, setList] = useState<RecycleBinNote[]>([])

  async function refresh() {
    // @ts-ignore
    const list = await webviewApi.postMessage({ type: 'list' })
    console.log('list: ', list)
    setList(list)
  }

  useMount(refresh)

  return h(
    'div',
    null,
    h(
      'header',
      null,
      h('h2', null, '回收站'),
      h(
        'button',
        {
          onClick() {
            refresh()
          },
        },
        '刷新',
      ),
    ),
    h(
      'section',
      null,
      h(
        'ul',
        null,
        ...list.map((note) =>
          h(
            'li',
            null,
            note.title,
            h(
              'button',
              {
                onClick() {
                  revert(note.id)
                },
              },
              '恢复',
            ),
          ),
        ),
      ),
    ),
  )
}

async function main() {
  ReactDOM.render(createElement(App), document.body)
}

main()
