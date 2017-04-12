import React, { Component } from 'react'
import './style.css'

export default class SideMenu extends Component {
  constructor() {
    super()
  }

  render() {
    return(
          <aside className='main-sidebar'>
        <section className='sidebar'>
            <div className='user-panel'>
                <div className='pull-left image'>
                    <img src='resources/images/avatar.png' className='img-circle' alt='User Image' />
                </div>
                <div className='pull-left info'>
                    {/* <p>${user.firstName} ${user.lastName}</p> */}
                    <a href='#'><i className='fa fa-circle text-success'></i> Online</a>
                </div>
            </div>

            {/* <!-- search form (Optional) --> 
            <form action='#' method='get' className='sidebar-form'>
                <div className='input-group'>
                    <input type='text' name='q' className='form-control' placeholder='Search...' />
                    <span className='input-group-btn'>
                            <button type='submit' name='search' id='search-btn' className='btn btn-flat'><i
                            className='fa fa-search'></i></button>
                          </span>
                </div>
            </form>
             <!-- /.search form --> */}

            {/* <!-- Sidebar Menu --> */}
            <ul className='sidebar-menu'>
                <li className='active'>
                <a href='#'><i className='fa fa-link'></i><span> Home</span></a></li>
                {/* <li className='treeview'>
                              <a href='#'><i className='fa fa-link'></i> <span>Multilevel</span> <i className='fa fa-angle-left pull-right'></i></a>
                              <ul className='treeview-menu'>
                                <li><a href='#'>Link in level 2</a></li>
                                <li><a href='#'>Link in level 2</a></li>
                              </ul>
                            </li>  */}
                <li><a href='#'><i className='fa fa-list-alt'></i><span> Search</span></a>
                </li>
                <li><a href='#'><i className='fa fa-signal'></i><span> Rooms</span></a>
                </li>
                <li><a href='#'><i className='fa fa-pie-chart'></i><span> Last Conversation</span></a>
                </li>
                <li><a href='#'><i className='fa fa-file-text'></i><span> People</span></a>
                </li>

            </ul>
        </section>
        {/* <!-- /.sidebar --> */}
    </aside>
      )
  }
}