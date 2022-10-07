import { findChapterCount } from '../../constants/find-chapter-count'
import { ProgramNode } from '../../interfaces/program-node'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../../../src/App.scss';


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
      <p className='program-heading'>
        {/* <FontAwesomeIcon icon="globe" /> */}
        {console.log(currentNode)}
        {tree?.name}
        <span className='chapter-count'> {findChapterCount(tree)}</span>
      </p>
      {tree?.nodes?.map(region =>
        {
          return (
          <>
            <p className='region-heading'>
              {/* <FontAwesomeIcon icon="globe" /> */}
              {region.name}
              <span className='chapter-count'> {findChapterCount(region)}</span>
            </p>
              {
                region?.nodes?.map(chapter =>
                  {
                    return (
                    <>
                      <p className='chapter-heading'>
                        {/* <FontAwesomeIcon icon="globe" /> */}
                        {chapter.name}
                        <span> {findChapterCount(chapter)}</span>
                      </p>
                    </>
                    )
                  }
             )}
          </>
          )
        }
     )}
    </ul>
  )
}

export default LocationTree