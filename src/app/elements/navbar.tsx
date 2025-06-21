export default function NavBar() {
    return (
        <div>
            <div className="invisible xl:visible fixed top-75 right-70">
                <div>
                    <a href="#home">home</a>
                </div>
                <div>
                    <a href="#projects">projects</a>
                </div>
                <a href="#gallery">gallery</a>
            </div>
        </div>
    );
}