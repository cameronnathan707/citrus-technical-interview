export enum ProgramNodeTypeEnum {
  'program' = 'program',
  'region' = 'region',
  'chapter' = 'chapter',
}
export type ProgramNodeType = keyof typeof ProgramNodeTypeEnum

export interface ProgramNode {
  id: string
  type: ProgramNodeType
  name: string
  description?: string
  nodes: ProgramNode[]
}