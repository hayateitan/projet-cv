const Header = (props) => {
    return (
        <header className={props.class} >
            <span class="material-icons">{props.icon}</span>{props.title}
        </header>
    )
}

export default Header


