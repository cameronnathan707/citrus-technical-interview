import { ProgramNode } from '../interfaces/program-node'

interface IProps {
  id?: string
}

interface IValue {
  currentNode?: ProgramNode
  tree?: ProgramNode
  // Add any other attributes that you find valuable
}

export const useFetchProgramTree = ({id}: IProps = {}): IValue => {
  /* 
    TODO: Fetch the program tree

    * Fetch the program tree using fetchProgramTree
    * Find the node with prop "id" using findNode
  */
  return {
    
  }
}

export default useFetchProgramTree