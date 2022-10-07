import { findChapterCount } from '../../constants/find-chapter-count'
import { ProgramNode } from '../../interfaces/program-node'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

interface IProps {
  currentNode?: ProgramNode
  tree?: ProgramNode
}

export const LocationTree = ({ currentNode, tree }: IProps = {}) => {
  return (
    <ul>
      {/* 
        TODO: Display Program's Location Tree

      * Indent the location deeper the tree
      * Add an icon using React FontAwesomeIcon
      * program - faGlobe
      * region - faLayerGroup
      * chapter - faMapMarkerAlt
      * Display the name of the location
      * Highlight the current node
      * Display the location count on all nodes expect location nodes 
      */}
      {tree?.nodes?.map(program =>
        (<h1>
          <FontAwesomeIcon icon="globe" />
          { program.name}
          <h2> {findChapterCount}</h2>
        </h1>
        // {program.nodes.map(region =>
        //   (<h1>
        //     <FontAwesomeIcon icon="faLayerGroup" />
        //     { region.name}
        //     <h2 style ="background-color: green"> {findChapterCount}</h2>
        //   </h1>)
        //   {region.nodes.map(chapter =>
        //     (<h1>
        //       <FontAwesomeIcon icon="faLayerGroup" />
        //       { chapter.name}
        //     </h1>)
        //   )}
        
        
        )
        )}
      // map through the regions
      // map through the chapters 
      // display correct icon and name
      // highlight selected region???
      // display count of nodes in node
    </ul>
  )
}

export default LocationTree