import "./Loading.css"

const Loading = () => {
  return ( 
    <>
      <div className="spi spinner-border text-success" role="status">
       <span className="visually-hidden">Loading...</span>
      </div>
    </>
   );
}
 
export default Loading;