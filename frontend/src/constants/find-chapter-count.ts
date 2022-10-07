import { ProgramNode, ProgramNodeTypeEnum } from "../interfaces/program-node";

export const findChapterCount = (node: ProgramNode) => {
  /* 
    TODO: Count how many chapter nodes within a program location node

    * A node with the type of `chapter` should count as one
    * If the node is a `chapter` it shouldn't count the nodes below
    * Count all the nodes within the tree with type of `chapter` within the program tree
  */
  if (node.type === ProgramNodeTypeEnum.program) {
    // @ts-ignore
    
    return node.nodes?.reduce((chapterCount: number, regions: ProgramNode) => chapterCount + regions?.nodes.length, 0);
  }
  else if (node.type === ProgramNodeTypeEnum.region) {
   return node.nodes?.length;
  } else {
    return;
  }
}