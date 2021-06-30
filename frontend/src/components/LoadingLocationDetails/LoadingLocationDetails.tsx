export const LoadingLocationDetails = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          {new Array(7).fill(null).map((_, i) => (
            <div key={`loading-row-${i}`} className="animate mb-3" />
          ))}
        </div>
        <div className="col-md-8">
          <div className="details my-5">
            <div className="h1 mb-3 w-50 animate" />
            <p className="animate" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingLocationDetails