import React from 'react'
import pen from "../../assets/pen-solid.svg"
import comment from "../../assets/message-solid.svg"
import blackLogo from "../../assets/stack-overflow-brands.svg"

const Widget = () => {
  return (
    <div className='widget'>
      <h4>The Overflow Blog</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={pen} alt="pen" width="18px" />
          <p>A history of open-source licensing from a lawyer who helped blaze the trail...</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={pen} alt="pen" width="18px" />
          <p>The last technical interview you will ever take</p>
        </div>
      </div>

      <h4>Featured on Meta</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={comment} alt="comment" width="18px" />
          <p>Planned maintenance scheduled for Tuesday, August 23, 2022 at 00:00-03:00 AM...</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={comment} alt="comment" width="18px" />
          <p>Please welcome Valued Associate #1301 - Emerson</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={blackLogo} alt="blackLogo" width="18px" />
          <p>Staging Ground Workflow: Question Lifecycle</p>
        </div>
      </div>

      <h4>Hot Meta Posts</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <p>36</p>
          <p>Editing old questions to add links to similar ones</p>
        </div>
        <div className='right-sidebar-div-2'>
          <p>38</p>
          <p>Announcing Design Accessibility Updates on SO</p>
        </div>
        <div className='right-sidebar-div-2'>
          <p>20</p>
          <p>Should we burninate the [maintenance] tag?</p>
        </div>
      </div>
    </div>
  )
}

export default Widget