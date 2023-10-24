function About({state, setState} : {state: boolean, setState: (state: boolean) => void}) {

    return (
        <dialog open={state}>
            <article>
                <header>
                    <a href="/" aria-label="Close" className="close" onClick={event => {
                        event.preventDefault();
                        setState(false);
                    }}>x</a>
                    About
                </header>
                <p>
                    Snippetly is a tool to create code snippets. You can copy and paste your code into the editor.
                    Select the language and theme. The code is highlighted and you can copy the image to the clipboard
                    or download the image of your code snippet.
                    <br/><br/>
                    The code is highlighted using <a href={"https://prismjs.com/"} target={"blank"}>Prism</a> and the
                    image is created using <a href={"https://html2canvas.hertzen.com/"} target={"blank"}>html2canvas</a>.
                    <br/>
                    No code is sent to the server. Everything is done in the browser on your computer.
                    <br/><br/>

                    Snippetly is open source and you can find the source code on github.
                    <br/><br/>
                    If you like Snippetly, you can buy me a coffee.
                </p>
            </article>
        </dialog>
    )
}

export default About;