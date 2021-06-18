import { RecycleBin } from '../RecycleBin'
import * as path from 'path'
import { pathExists, remove } from 'fs-extra'

describe('测试 RecycleBin', () => {
  const filePath = path.resolve(__dirname, 'temp/data.json')
  const recycleBin = new RecycleBin(filePath)
  beforeEach(async () => {
    await remove(filePath)
  })
  it('测试 list', async () => {
    expect(await pathExists(filePath)).toBeFalsy()
    expect(await recycleBin.list()).toEqual([])
    expect(await pathExists(filePath)).toBeTruthy()
  })
  const note = {
    id: '1',
    title: 'hello world',
    content: '',
  }
  it('测试 add', async () => {
    await recycleBin.add(note)
    expect((await recycleBin.list()).length).toBe(1)
  })
  it('测试 remove', async () => {
    await recycleBin.add(note)
    expect((await recycleBin.list()).length).toBe(1)
    await recycleBin.remove(note.id)
    expect((await recycleBin.list()).length).toBe(0)
  })
})
