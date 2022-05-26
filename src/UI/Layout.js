import React from 'react'

function Layout(props) {
    const styles = {
        with:"100%",
        height:"100vh",
        paddingTop:"75px",
        paddingRight:"30px",
        paddingLeft: "30px"
    }
  return (
    <div className='layout' style={styles}>{props.children}</div>
  )
}

export default Layout