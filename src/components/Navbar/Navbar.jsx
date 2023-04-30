function List(props){
    const{style="text-[#6f6f6f] font-medium hover:text-blueC",children} = props
    return(
        <li className={style}>{children}</li>
    )
}
function Navbar(){
    return(
        <div className="navBar flex justify-between items-center flex-wrap text-center sm:justify-center p-[3rem]">
            <div className="logoDiv">
                <h1 className="logo text-[25px] text-blueC"><strong>dz</strong>portfolio</h1>
            </div>
            <div className="menu flex gap-12">
                <List><a href="#who">WHO</a></List>
                <List><a href="#what">WHAT</a> </List>
                <List><a href="#work">WORK</a> </List>
            </div>

        </div>
    )
}
export default Navbar