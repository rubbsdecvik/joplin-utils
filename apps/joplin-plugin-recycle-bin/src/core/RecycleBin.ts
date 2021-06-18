import { mkdirp, pathExists, readJSON, writeJSON } from 'fs-extra'
import * as path from 'path'

export interface RecycleBinNote {
  id: string
  title: string
  content: string
}

/**
 * 回收站
 */
export class RecycleBin {
  private readonly filePath
  constructor(filePath: string) {
    this.filePath = path.resolve(filePath)
  }

  /**
   * 添加到回收站
   * @param notes
   */
  async add(...notes: RecycleBinNote[]) {
    const list: RecycleBinNote[] = await this.list()
    list.push(...notes)
    await writeJSON(this.filePath, list)
  }

  /**
   * 删除
   * @param id
   */
  async remove(id: string) {
    const list: RecycleBinNote[] = await this.list()
    const removeIndex = list.findIndex((note) => note.id === id)
    if (removeIndex === -1) {
      throw new Error('回收站没有找到该笔记')
    }
    const [res] = list.splice(removeIndex, 1)
    await writeJSON(this.filePath, list)
    return res
  }

  /**
   * 获取全部
   */
  async list(): Promise<RecycleBinNote[]> {
    if (!(await pathExists(this.filePath))) {
      await mkdirp(path.dirname(this.filePath))
      await writeJSON(this.filePath, [])
    }
    return readJSON(this.filePath)
  }
}
