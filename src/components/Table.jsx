import React,{useState} from 'react'
import { getUsers } from '../api/users';

function Table(props) {
    const [currentPage,setCurrentPage]=useState(1)
    const recordsPerPage=5;
    const lastIndex=recordsPerPage*currentPage;
    const firstIndex=lastIndex-recordsPerPage;
    const npage=Math.ceil(getUsers().length/recordsPerPage)
    const numbers=[...Array(npage+1).keys()].slice(1)
    const records=getUsers().slice(firstIndex,lastIndex)
    function prePage(){
      if(currentPage>1){
          setCurrentPage(currentPage-1)
      }else{
        alert('No data left')
      }
  
  }
  
  function changeCPage(id){
      setCurrentPage(id)
  
  }
  function nextPage(){
      if(currentPage < Number(getUsers().length/5)){
          setCurrentPage(currentPage+1)
      }else{
        alert('No Data Left')
      }
  }
   
  return (
    <div>
        <h1 style={{textAlign:'center',padding:'10px',fontWeight:'bold'}}>Pagination using React-Js</h1>
         <table className="table" border={1} style={{marginTop:'10px'}}>
    <thead>
        <tr>
            <th className="p-3">id</th>
            <th className="p-3">Name</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Email</th>
            <th className="p-3">SignupDate</th>
        </tr>
    </thead>
    <tbody>
        {records.map(user=>( <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.full_name}</td>
            <td>{user.fullMobileNo}</td>
            <td>{user.email}</td>
            <td>{user.signupDate}</td>
        </tr>))}
       
    </tbody>
   </table>
   <nav>
    <ul className='pagination' style={{justifyContent:'center',marginTop:'40px'}}>
        <li className='page-item'>
            <a href="#" className='page-link' onClick={prePage}>Prev</a>
        </li>
        {
            numbers.map((n,i)=>(
                <li className={`page-item ${currentPage===n?'active':''}`} key={i} onClick={()=>changeCPage(n)}><a href="#" className='page-link'>{n}</a></li>
            ))
        }
         <li className='page-item'>
            <a href="#" className='page-link' onClick={nextPage}>Next</a>
        </li>
    </ul>
   </nav>
    </div>
  
  )
}

export default Table