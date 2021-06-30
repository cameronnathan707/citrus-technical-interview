import { HttpClient } from '../clients/http'
import { ProgramNode } from '../interfaces/program-node'

export const fetchProgramTree = async (): Promise<ProgramNode> => {
  const client = new HttpClient()
  const [tree] = await Promise.all<ProgramNode, any>([
    client.get('/api/v1/tree.json'),
    new Promise((resolve) => setTimeout(resolve, 3000)),
  ])
  return tree
}
