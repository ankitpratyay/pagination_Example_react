import "./App.css"
const Pagination = ({ postPerPage, totalPost, setCurrentPage, currentPage}) =>{
    const Pages=[]
    for(let i=1;i<=Math.ceil(totalPost/postPerPage);i++)
    {
        Pages.push(i);
    }
    return (
        <div className="pagination">
        {
            Pages.map((page, ind)=>{
                return <button className={page=== currentPage? 'active': ''} key={ind} onClick={()=>setCurrentPage(page)}>{page}</button>
            })
        }
        </div>
    )
}
export default Pagination; 