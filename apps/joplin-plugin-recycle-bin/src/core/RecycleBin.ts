import { mkdirp, pathExists, readJSON, writeJSON } from 'fs-extra'
import * as path from 'path'

interface RecycleBinNote {
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
    await writeJSON(
      this.filePath,
      list.filter((note) => note.id !== id),
    )
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
