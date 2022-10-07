import { LocationTree } from '../components/LocationTree/LocationTree'
import useFetchProgramTree from '../hooks/use-fetch-program-tree'

export const ManageLocations = () => {
  /* 
    TODO: Get the tree and current node from useFetchProgramTree

    * Pass the tree and node to LocationTree component
    * Display the name and description of the current node
  */

  const {currentNode, tree} = useFetchProgramTree();
  return (
    <div className="container my-5">
      <div className="row">
        <div className="scrollable-container col-md-4">
          <LocationTree currentNode={currentNode} tree={tree}/>
        </div>
        <div className="col-md-8">
          <div className="details my-5">
            <h1 className="mb-3">CanadaSport</h1>
            <p>
              We work to ensure that no kid is ever left watching from the sidelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageLocations