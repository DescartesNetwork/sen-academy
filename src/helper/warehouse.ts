import git from 'isomorphic-git'
import http from 'isomorphic-git/http/web'
import LightningFS from '@isomorphic-git/lightning-fs'

import configs from 'configs'
import { GithubCredential } from 'helper/credential'
import { ArticleData } from 'store/warehouse.reducer'

const {
  github: { proxy, warehouseRepoUrl, branch },
} = configs
const dir = '/sen-academy-warehouse'
const fs = new LightningFS('fs')

export const clone = async () => {
  return await git.clone({
    fs,
    http,
    dir,
    corsProxy: proxy,
    url: warehouseRepoUrl,
    ref: branch,
    singleBranch: true,
    depth: 1,
  })
}

export const pull = async () => {
  return await git.pull({
    fs,
    http,
    dir,
    ref: branch,
    singleBranch: true,
    author: { name: 'Dummy', email: 'dummy@gmail.com' }, // We don't need actual author to pull
  })
}

export const push = async (token: string) => {
  return await git.push({
    fs,
    http,
    dir,
    remote: 'origin',
    ref: branch,
    onAuth: () => ({ username: token }),
  })
}

export const newPost = async (
  postId: string,
  data: ArticleData,
  { name, email, token }: GithubCredential,
) => {
  const filepath = `src/${postId}.json`
  const message = `Add ${filepath}`
  await clone()
  await pull()
  await fs.promises.writeFile(
    `${dir}/${filepath}`,
    JSON.stringify(data, null, 2),
  )
  await git.add({ fs, dir, filepath })
  await git.commit({ fs, dir, author: { name, email }, message })
  await push(token)
}

export const deletePost = async (
  postId: string,
  { name, email, token }: GithubCredential,
) => {
  const filepath = `src/${postId}.json`
  const message = `Add ${filepath}`
  await clone()
  await pull()
  await fs.promises.unlink(`${dir}/${filepath}`)
  await git.add({ fs, dir, filepath })
  await git.commit({ fs, dir, author: { name, email }, message })
  await push(token)
}
