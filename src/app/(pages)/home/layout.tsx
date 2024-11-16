
const Layout = ({ children, list }: {
    children: JSX.Element | JSX.Element[];
    list: JSX.Element
}) => {

    return (
        <div>
            {children}
            {list}
        </div>
    )
}

export default Layout