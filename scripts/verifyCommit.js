import fs from 'node:fs'
import process from 'node:process'

const msg = fs.readFileSync('.git/COMMIT_EDITMSG', 'utf-8').trim()

const commitRE = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/
const mergeRe = /^(Merge pull request|Merge branch)/

if (!commitRE.test(msg)) {
  if (!mergeRe.test(msg)) {
    console.log('git commit unpass')
    console.error('git commit error, needs title(scope): desc')
    process.exit(1)
  }
}
else {
  console.log('git commit pass')
}
