import { HttpClient } from '../clients/http'
import { ProgramNode } from '../interfaces/program-node'

export const fetchProgramTree = async (): Promise<ProgramNode> => {
  const client = new HttpClient()
  return new Promise<ProgramNode>((resolve) => {
    setTimeout(async () => {
      const tree = await client.get('/api/v1/tree.json')
      resolve(tree as ProgramNode)
    }, 2000)
  })
}
