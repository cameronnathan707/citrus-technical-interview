import { ProgramNode } from "../interfaces/program-node";

export const findNode = (node: ProgramNode, id?: string) => {
  /* 
    TODO: Search the tree to find the program location node

    * If the id is undefined return the parent node
    * Find the node that matches the id within the program tree
    * If the node cannot be found, return undefined
  */
    if (!id) {
      return node;
    }
    const child = node.nodes?.find(tempNode => tempNode.id === id);
    return child;
}