import { fetchProgramTree } from '../constants/fetch-program-tree'
import { findNode } from '../constants/find-node'
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
  let tree: ProgramNode;
  const tree2 = fetchProgramTree().then((value) => {return value}); // .catch(error => console.log(error));
  // const tree = await fetchProgramTree();
  const currentNode = findNode(tree, id);
  return {
    currentNode,
    tree
  }
}

export default useFetchProgramTree