import joplin from '@thejohnfreeman/joplin-plugin'
import type { Command } from '@thejohnfreeman/joplin-plugin/types'
import type { NoteProperties } from 'joplin-api/dist/modal/NoteProperties'
import { AsyncArray } from '@liuli-util/async'
import { RecycleBin } from './core/RecycleBin'
import * as path from 'path'
import { homedir } from 'os'

joplin.plugins.register({
  onStart: async function () {
    const recycleBin = new RecycleBin(
      path.resolve(homedir(), '.config/joplin-plugin-recycle-bin.json'),
    )

    //region 放入回收站

    joplin.commands.register({
      name: 'safe-delete',
      label: '安全删除笔记',
      iconName: 'fas fa-trash-alt',
      async execute(idList: string[]) {
        console.log('安全删除笔记: ', idList)
        const fields = [
          'id',
          'title',
          'body',
          'user_created_time',
          'user_updated_time',
          'parent_id',
        ] as (keyof NoteProperties)[]
        const noteList = await AsyncArray.map(idList, (id) =>
          joplin.data.get(['notes', id], {
            fields: fields,
          }),
        )
        await recycleBin.add(
          ...noteList.map((note) => ({
            id: note.id,
            title: note.title,
            content: JSON.stringify(note),
          })),
        )
        await AsyncArray.forEach(idList, async (id) => {
          joplin.data.delete(['notes', id])
        })
      },
    } as Command)
    joplin.views.menuItems.create(
      'safe-delete-menu',
      'safe-delete',
      'noteListContextMenu' as any,
    )

    //endregion

    //region 查看回收站

    joplin.commands.register({
      name: 'recycle-bin-view',
      label: '查看回收站',
      execute() {
        console.log('查看回收站')
      },
    } as Command)
    joplin.views.menuItems.create(
      'recycle-bin-view-button',
      'recycle-bin-view',
      'note' as any,
    )

    //endregion
  },
})
