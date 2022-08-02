import React from 'react'

function Layout(props) {
    const styles = {
        with:"100%",
        minHeight: "100vh",
        paddingTop:"40px",
        
    }
  return (
    <div className='layout' style={styles}>{props.children}</div>
  )
}

export default Layout