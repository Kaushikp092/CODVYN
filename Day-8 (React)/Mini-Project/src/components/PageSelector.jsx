const PageSelector = ({page, onPageChange}) => {
  return (
    <div className="controls">
        <label htmlFor="page">Page: </label>
        <select value={page} id="page" onChange={(e)=>{
            onPageChange(Number(e.target.value));
        }}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>   
    </div>
  )
}

export default PageSelector
