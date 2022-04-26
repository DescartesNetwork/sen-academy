import git from 'isomorphic-git'
import http from 'isomorphic-git/http/web'
import LightningFS from '@isomorphic-git/lightning-fs'

import configs from 'configs'
import { GithubCredential } from 'components/githubLogin/utils'
import { ArticleData } from 'view/markdown/autosave'

const {
  github: { proxy, warehouseRepoUrl, branch },
} = configs
const dir = '/sen-academy-warehouse'
const fs = new LightningFS('fs')

export const newPost = async (
  postId: string,
  data: ArticleData,
  { name, email, token }: GithubCredential,
) => {
  const filepath = `src/${postId}.json`
  const message = `Add ${filepath}`
  await git.clone({
    fs,
    http,
    dir,
    corsProxy: proxy,
    url: warehouseRepoUrl,
    ref: branch,
    singleBranch: true,
    depth: 1,
  })
  await git.pull({
    fs,
    http,
    dir,
    ref: branch,
    singleBranch: true,
    author: { name, email },
  })
  await fs.promises.writeFile(
    `${dir}/${filepath}`,
    JSON.stringify(data, null, 2),
  )
  await git.add({ fs, dir, filepath })
  await git.commit({ fs, dir, author: { name, email }, message })
  await git.push({
    fs,
    http,
    dir,
    remote: 'origin',
    ref: branch,
    onAuth: () => ({ username: token }),
  })
}
