import dataJson from '../../../assets/data.json'
import { ss } from '@/utils/storage'
const LOCAL_NAME = 'promptStore'

export type PromptList = []

export interface PromptStore {
  promptList: PromptList
}

export function getLocalPromptList(): PromptStore {
  const promptStore: PromptStore | undefined = ss.get(LOCAL_NAME)
  if (promptStore === undefined || promptStore.promptList.length === 0)
    setLocalPromptList({ promptList: dataJson })
  return promptStore ?? { promptList: undefined }
}

export function setLocalPromptList(promptStore: PromptStore): void {
  ss.set(LOCAL_NAME, promptStore)
}
